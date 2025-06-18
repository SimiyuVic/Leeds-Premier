import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
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

    // Check if email credentials are configured
    if (!process.env.CONTACT_EMAIL || !process.env.CONTACT_PASSWORD) {
      console.error("Email credentials not configured");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.CONTACT_EMAIL}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}

        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">New Contact Form Submission</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message:</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 8px; border: 1px solid #ddd; white-space: pre-line;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || "Failed to send email" 
      },
      { status: 500 }
    );
  }
}