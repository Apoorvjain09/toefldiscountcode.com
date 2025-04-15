import { NextRequest, NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';
import 'regenerator-runtime/runtime';  // Import regenerator-runtime

interface StudyPlanRequestBody {
  userId: string;
  startDate: string;
  examDate: string;
  planType: string;
}

export async function POST(req: NextRequest) {
  console.log("Request received at /api/updateStudyPlan");

  try {
    const body: StudyPlanRequestBody = await req.json();
    console.log("Parsed body:", body);

    const { userId, startDate, examDate, planType } = body;

    if (!userId || !startDate || !examDate || !planType) {
      console.log("Missing one or more fields");
      console.log("userId:", userId);
      console.log("startDate:", startDate);
      console.log("examDate:", examDate);
      console.log("planType:", planType);
      return NextResponse.json({ message: 'Missing one or more fields' }, { status: 400 });
    }

    const clerk = await clerkClient();
    await clerk.users.updateUserMetadata(userId, { 
      publicMetadata: {
        startDate,
        examDate,
        planType,
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
