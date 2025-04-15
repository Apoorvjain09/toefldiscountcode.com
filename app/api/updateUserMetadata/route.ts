// pages/api/updateUserMetadata.ts
import { NextRequest, NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';
import 'regenerator-runtime/runtime';  // Import regenerator-runtime

export async function POST(req: NextRequest) {
  console.log("Request received at /api/updateUserMetadata");

  try {
    const body = await req.json();
    console.log("Parsed body:", body);

    const { location, bookedExam, examDate, userId } = body;

    if (!location || !bookedExam || !examDate || !userId) {
      console.log("Missing one or more fields");
      console.log("location:", location);
      console.log("bookedExam:", bookedExam);
      console.log("examDate:", examDate);
      console.log("userId:", userId);
      return NextResponse.json({ message: 'Missing one or more fields' }, { status: 400 });
    }

    const clerk = await clerkClient();
    await clerk.users.updateUserMetadata(userId, {
      publicMetadata: {
        location,
        bookedExam,
        examDate,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating user metadata:', error);
    return NextResponse.json({ error: 'Failed to update user metadata' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
