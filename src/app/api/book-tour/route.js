import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.campus) {
      return NextResponse.json(
        { success: false, error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if email credentials are configured
    if (!process.env.CONTACT_EMAIL || !process.env.CONTACT_PASSWORD) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASSWORD,
      },
    });

    // Format the date for display
    const visitDate = new Date(formData.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Email content
    const mailOptions = {
      from: `"Leeds Premier Schools" <${process.env.CONTACT_EMAIL}>`,
      replyTo: formData.email,
      to: process.env.CONTACT_EMAIL,
      subject: `New Campus Tour Booking: ${formData.name}`,
      text: `
        New Campus Tour Booking Request:
        
        Name: ${formData.name}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Campus: ${formData.campus}
        Preferred Visit Date: ${visitDate}
        Additional Notes: ${formData.message || 'None'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 20px;">New Campus Tour Booking Request</h1>
          
          <div style="margin-bottom: 15px;">
            <h2 style="font-size: 18px; color: #1e293b; margin-bottom: 10px;">Visitor Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border: 1px solid #e2e8f0; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 8px; border: 1px solid #e2e8f0;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #e2e8f0; font-weight: bold;">Phone:</td>
                <td style="padding: 8px; border: 1px solid #e2e8f0;">${formData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #e2e8f0; font-weight: bold;">Email:</td>
                <td style="padding: 8px; border: 1px solid #e2e8f0;">${formData.email}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-bottom: 15px;">
            <h2 style="font-size: 18px; color: #1e293b; margin-bottom: 10px;">Tour Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border: 1px solid #e2e8f0; font-weight: bold; width: 30%;">Campus:</td>
                <td style="padding: 8px; border: 1px solid #e2e8f0;">${formData.campus}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #e2e8f0; font-weight: bold;">Visit Date:</td>
                <td style="padding: 8px; border: 1px solid #e2e8f0;">${visitDate}</td>
              </tr>
            </table>
          </div>
          
          ${formData.message ? `
            <div style="margin-bottom: 15px;">
              <h2 style="font-size: 18px; color: #1e293b; margin-bottom: 10px;">Additional Notes</h2>
              <p style="padding: 8px; border: 1px solid #e2e8f0; border-radius: 4px; background-color: #f8fafc;">
                ${formData.message.replace(/\n/g, '<br>')}
              </p>
            </div>
          ` : ''}
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { success: true, message: 'Tour booked successfully. We will contact you to confirm your visit.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing tour booking:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Error processing booking. Please try again later.' 
      },
      { status: 500 }
    );
  }
}