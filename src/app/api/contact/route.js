import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
});

export async function POST(request) {
  try {
    // Check if environment variables are set
    if (
      !process.env.NEXT_PUBLIC_SMTP_HOST ||
      !process.env.NEXT_PUBLIC_SMTP_USER ||
      !process.env.NEXT_PUBLIC_SMTP_PASSWORD
    ) {
      console.error("Missing SMTP environment variables");
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Email template
    const emailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission - JP InfoTech</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: #160740;
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
            box-shadow: 0 4px 6px rgba(22, 7, 64, 0.1);
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
          }
          .header p {
            margin: 10px 0 0;
            opacity: 0.9;
          }
          .content {
            background: white;
            padding: 30px;
            border-radius: 0 0 10px 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }
          .field {
            margin-bottom: 24px;
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
          }
          .field-label {
            font-weight: 600;
            color: #160740;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .field-value {
            background: white;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid rgba(22, 7, 64, 0.1);
            color: #444;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
          }
          .company-info {
            margin-top: 20px;
            text-align: center;
            color: #160740;
            font-size: 13px;
          }
          .company-info p {
            margin: 5px 0;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>JP InfoTech</h1>
          <p>New Contact Form Submission</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="field-label">👤 Name:</div>
            <div class="field-value">${name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">📧 Email:</div>
            <div class="field-value">${email}</div>
          </div>
          
          <div class="field">
            <div class="field-label">📝 Subject:</div>
            <div class="field-value">${subject}</div>
          </div>
          
          <div class="field">
            <div class="field-label">💬 Message:</div>
            <div class="field-value">${message.replace(/\n/g, "<br>")}</div>
          </div>
          
          <div class="footer">
            <p>This message was sent from the JP InfoTech website contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}</p>
          </div>
          
          <div class="company-info">
            <p>JP InfoTech</p>
            <p> Surat Nagar Phase 2, Gurugram - 122006</p>
            <p>Email: sales@jpinfotech.net.in | Phone: +91-9667092504</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Template for user's thank you email
    const userEmailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Thank You for Contacting JP InfoTech</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: #160740;
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
            box-shadow: 0 4px 6px rgba(22, 7, 64, 0.1);
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
          }
          .header p {
            margin: 10px 0 0;
            opacity: 0.9;
          }
          .content {
            background: white;
            padding: 30px;
            border-radius: 0 0 10px 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }
          .message {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
          }
          .support-info {
            margin-top: 20px;
            padding: 15px;
            background: #f0f4ff;
            border-radius: 8px;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
          }
          .company-info {
            margin-top: 20px;
            text-align: center;
            color: #160740;
            font-size: 13px;
          }
          .company-info p {
            margin: 5px 0;
          }
          .highlight {
            color: #160740;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>JP InfoTech</h1>
          <p>Thank You for Contacting Us</p>
        </div>
        
        <div class="content">
          <div class="message">
            <p>Hey ${name},</p>
            <p>It worked, You sent us a message and we got it. That's all this email is. To let you know that & to let you know you should see a response from us within the next 2 Business days....Thank You !!!</p>
          </div>
          
          <div class="support-info">
            <p class="highlight">Your Message Info:</p>
            <p>Reference: #${Date.now().toString().slice(-8)}</p>
            <p>About: ${subject}</p>
            <p>Sent on: ${new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}</p>
          </div>
          
          <div class="footer">
            <p>Need immediate assistance?</p>
            <p>Call us at: <span class="highlight">+91-9667092504</span></p>
          </div>
          
          <div class="company-info">
            <p>JP InfoTech</p>
            <p> Surat Nagar Phase 2, Gurugram - 122006</p>
            <p>Email: sales@jpinfotech.net.in | Phone: +91-9667092504</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to admin
    const adminMailOptions = {
      from: process.env.NEXT_PUBLIC_FROM_EMAIL,
      to: process.env.NEXT_PUBLIC_TO_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: emailTemplate,
      replyTo: email,
    };

    // Send email to user
    const userMailOptions = {
      from: process.env.NEXT_PUBLIC_FROM_EMAIL,
      to: email,
      subject: `Thank You for Contacting JP InfoTech`,
      html: userEmailTemplate,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully! We will get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
