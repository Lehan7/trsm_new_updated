import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ErrorWithMessage {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // true for 465, false for other ports like 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e53e3e;">New Contact Form Submission</h2>
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong style="color: #2d3748;">Name:</strong> ${name}</p>
            <p><strong style="color: #2d3748;">Email:</strong> ${email}</p>
            <p><strong style="color: #2d3748;">Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong style="color: #2d3748;">Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px;">
              <strong style="color: #2d3748;">Message:</strong>
              <p style="white-space: pre-wrap; margin-top: 10px;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to the user
    const autoReplyOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for contacting The Recording Shop Montreal',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e53e3e;">Thank you for contacting us!</h2>
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p>Dear ${name},</p>
            <p>We have received your message and will get back to you as soon as possible.</p>
            <p>Here's a summary of your message:</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p>Best regards,<br>The Recording Shop Montreal Team</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return res.status(500).json({ 
      message: 'Failed to send email',
      error: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    });
  }
} 