import { NextRequest, NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';
import 'regenerator-runtime/runtime';  // Import regenerator-runtime

interface MembershipRequestBody {
  userId: string;
  membershipType: string;
}

export async function POST(req: NextRequest) {
  console.log("Request received at /api/updateMembership");

  try {
    const body: MembershipRequestBody = await req.json();
    console.log("Parsed body:", body);

    const { userId, membershipType } = body;

    if (!userId || !membershipType) {
      console.log("Missing one or more fields");
      console.log("userId:", userId);
      console.log("membershipType:", membershipType);
      return NextResponse.json({ message: 'Missing one or more fields' }, { status: 400 });
    }

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        [membershipType]: "true",
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
