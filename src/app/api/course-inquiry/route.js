import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, courseInterest, message } = await req.json();

    // Validate input
    if (!name || !email || !phone || !courseInterest) {
      return new Response(
        JSON.stringify({ success: false, message: 'Missing required fields' }), 
        { status: 400 }
      );
    }

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
      to: 'shreyassutar.info@synturesolutions.com', // email id 
      subject: `New Course Inquiry: ${courseInterest}`,
      html: `
        <h3>New Course Inquiry Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course Interest:</strong> ${courseInterest}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
        <p><em>This inquiry was submitted from your website contact form.</em></p>
      `
    });

    // Send acknowledgment email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: `Thanks for your interest in ${courseInterest}!`,
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for your interest in our <strong>${courseInterest}</strong> course. 
        We've received your inquiry and will get back to you within 24 hours.</p>
        
        <p>Here's a summary of your inquiry:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Course Interest:</strong> ${courseInterest}</li>
        </ul>
        
        <p>If you have any urgent questions, feel free to call us at +91 8421539304.</p>
        <br />
        <p>Best regards,</p>
        <p><strong>Synture Solutions</strong><br/>info@synturesolutions.com</p>
      `
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error('Email send error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }), 
      { status: 500 }
    );
  }
}