import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Send email to site owner
    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: 'shreyassutar.info@synturesolutions.com', // your real email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Message Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Send acknowledgment email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: email, // the user who submitted
      subject: 'Thanks for contacting Synture Solutions!',
      html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for reaching out to us. We’ve received your message and will get back to you within 24 hours.</p>
        <br />
        <p>Here's a copy of your message:</p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 10px;">
          ${message}
        </blockquote>
        <br />
        <p>Best regards,</p>
        <p><strong>Synture Solutions</strong><br/>info@synturesolutions.com</p>
      `
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
