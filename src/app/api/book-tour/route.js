import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// --- Basic Sanitizer ---
function sanitizeInput(input) {
  if (!input || typeof input !== "string") return "";
  return input.replace(/[<>]/g, "").trim(); // strip HTML/JS injection
}

// --- Simple Rate Limiting (IP-based in-memory) ---
const rateLimit = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const windowTime = 60 * 1000; // 1 min
  const limit = 5; // max 5 requests per minute

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, []);
  }
  const timestamps = rateLimit.get(ip).filter((t) => now - t < windowTime);
  timestamps.push(now);
  rateLimit.set(ip, timestamps);

  return timestamps.length > limit;
}

export async function POST(request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const formData = await request.json();

    // Validate + Sanitize required fields
    const name = sanitizeInput(formData.name);
    const phone = sanitizeInput(formData.phone);
    const email = sanitizeInput(formData.email);
    const campus = sanitizeInput(formData.campus);
    const message = sanitizeInput(formData.message || "");
    const date = sanitizeInput(formData.date);

    if (!name || !phone || !email || !date || !campus) {
      return NextResponse.json(
        { success: false, error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Ensure credentials are set
    if (!process.env.CONTACT_EMAIL || !process.env.CONTACT_PASSWORD) {
      console.error("Email credentials not configured");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Format date nicely
    const visitDate = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASSWORD,
      },
    });

    // --- Email Content ---
    const mailOptions = {
      from: `"Leeds Premier Schools" <${process.env.CONTACT_EMAIL}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: `📅 New Campus Tour Booking - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; background: #f9fafb; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(90deg, #2563eb, #1e40af); padding: 16px; text-align: center; color: white;">
            <h2 style="margin: 0; font-size: 20px;">🏫 New Campus Tour Booking Request</h2>
          </div>

          <!-- Body -->
          <div style="padding: 20px; background: white;">
            <h3 style="color: #2563eb; margin-top: 0;">Visitor Information</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding:8px; font-weight:bold; width:30%; border:1px solid #e2e8f0;">Name</td><td style="padding:8px; border:1px solid #e2e8f0;">${name}</td></tr>
              <tr><td style="padding:8px; font-weight:bold; border:1px solid #e2e8f0;">Phone</td><td style="padding:8px; border:1px solid #e2e8f0;">${phone}</td></tr>
              <tr><td style="padding:8px; font-weight:bold; border:1px solid #e2e8f0;">Email</td><td style="padding:8px; border:1px solid #e2e8f0;">${email}</td></tr>
            </table>

            <h3 style="color: #2563eb;">Tour Details</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding:8px; font-weight:bold; width:30%; border:1px solid #e2e8f0;">Campus</td><td style="padding:8px; border:1px solid #e2e8f0;">${campus}</td></tr>
              <tr><td style="padding:8px; font-weight:bold; border:1px solid #e2e8f0;">Visit Date</td><td style="padding:8px; border:1px solid #e2e8f0;">${visitDate}</td></tr>
            </table>

            ${message
              ? `<h3 style="color: #2563eb;">Additional Notes</h3>
                 <div style="background:#f1f5f9; padding:12px; border-left:4px solid #2563eb; border-radius:6px; font-size:14px; color:#333;">
                   ${message.replace(/\n/g, "<br>")}
                 </div>`
              : ""}
          </div>

          <!-- Footer -->
          <div style="background: #f1f5f9; padding: 12px; text-align: center; font-size: 12px; color: #555;">
            ✨ This request was sent from <strong>Leeds Premier Schools Website</strong>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message:
          "Tour booked successfully. Our team will contact you shortly to confirm your visit.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing tour booking:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Error processing booking. Please try again later.",
      },
      { status: 500 }
    );
  }
}
