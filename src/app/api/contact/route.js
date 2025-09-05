import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// --- Basic in-memory rate limiting (per IP) ---
const RATE_LIMIT = 5; // max requests
const TIME_WINDOW = 60 * 1000; // per minute
const ipRequests = new Map();

// Stronger sanitizer
function sanitizeInput(input) {
  return String(input || "")
    .replace(/[<>]/g, "") // strip tags
    .replace(/(\r\n|\n|\r)/gm, " ") // prevent header injection
    .trim();
}

// Validate lengths
function validateLength(input, max = 500) {
  return input && input.length <= max;
}

export async function POST(request) {
  try {
    // Ensure JSON only
    if (request.headers.get("content-type") !== "application/json") {
      return NextResponse.json(
        { success: false, error: "Invalid content type" },
        { status: 400 }
      );
    }

    const ip =
      request.headers.get("x-forwarded-for") ||
      request.ip ||
      "unknown";

    // Rate limiting check
    const now = Date.now();
    if (!ipRequests.has(ip)) {
      ipRequests.set(ip, []);
    }
    const timestamps = ipRequests.get(ip).filter((t) => now - t < TIME_WINDOW);
    timestamps.push(now);
    ipRequests.set(ip, timestamps);

    if (timestamps.length > RATE_LIMIT) {
      return NextResponse.json(
        { success: false, error: "Too many requests, please try later" },
        { status: 429 }
      );
    }

    const { name, email, phone, campus, message } = await request.json();

    // Required fields
    if (!name || !email || !campus || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, campus, and message are required",
        },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Length validation
    if (
      !validateLength(name, 100) ||
      !validateLength(email, 150) ||
      !validateLength(phone, 30) ||
      !validateLength(campus, 100) ||
      !validateLength(message, 2000)
    ) {
      return NextResponse.json(
        { success: false, error: "Input too long" },
        { status: 400 }
      );
    }

    // Ensure env variables exist
    const user = process.env.CONTACT_EMAIL;
    const pass = process.env.CONTACT_PASSWORD;
    if (!user || !pass) {
      console.error("Email credentials not configured");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Sanitize all inputs
    const safeName = sanitizeInput(name);
    const safeEmail = sanitizeInput(email);
    const safePhone = sanitizeInput(phone || "Not provided");
    const safeCampus = sanitizeInput(campus);
    const safeMessage = sanitizeInput(message);

    // Nodemailer transporter (secure config)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: true,
      },
    });

    const mailOptions = {
      from: `"Leeds Premier Schools Website" <${user}>`,
      replyTo: safeEmail,
      to: user,
      subject: `New Contact Message from ${safeName} - ${safeCampus} Campus`,
      text: `
        Name: ${safeName}
        Email: ${safeEmail}
        Phone: ${safePhone}
        Campus: ${safeCampus}

        Message:
        ${safeMessage}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; background: #f4f6f9; padding: 20px;">
          <div style="background: linear-gradient(90deg, #2563eb, #1e40af); color: white; padding: 16px; border-radius: 12px 12px 0 0; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">📩 New Contact Form Submission</h2>
          </div>

          <div style="background: #ffffff; border: 1px solid #ddd; border-top: none; padding: 20px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            <p><strong style="color:#2563eb;">Name:</strong> ${safeName}</p>
            <p><strong style="color:#2563eb;">Email:</strong> ${safeEmail}</p>
            <p><strong style="color:#2563eb;">Phone:</strong> ${safePhone}</p>
            <p><strong style="color:#2563eb;">Campus:</strong> ${safeCampus}</p>

            <div style="margin-top: 20px;">
              <p><strong style="color:#2563eb;">Message:</strong></p>
              <div style="background: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; border-radius: 6px; font-size: 14px; line-height: 1.5; color: #333;">
                ${safeMessage.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>

          <div style="text-align: center; font-size: 12px; color: #666; margin-top: 15px;">
            ✨ This message was sent from <strong>Leeds Premier Schools Website</strong>.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
