import { NextResponse } from 'next/server';
import sendEmail from '../../../lib/sendEmail';

export async function POST(req) {
  try {
    // Parse request body
    const { firstName, lastName, email, phone, message } = await req.json();

    // Construct email subject and message
    const subject = `New Contact Message from ${firstName} ${lastName}`;
    const text = `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}

      Message:
      ${message}
    `;

    // Send email using the sendEmail function
    await sendEmail(process.env.EMAIL_RECEIVER, subject, text);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Error sending email' },
      { status: 500 }
    );
  }
}
