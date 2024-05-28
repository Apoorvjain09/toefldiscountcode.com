import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { values } = await req.json();

    console.log('Received form values:', values);

    await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your email address
      to: 'apoorvarnav1@gmail.com', // Your email address
      subject: 'New Form Submission',
      html: `<p>${JSON.stringify(values, null, 2)}</p>`, // Send form data as raw content
    });

    console.log('Email sent successfully');
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email', error }, { status: 500 });
  }
}
