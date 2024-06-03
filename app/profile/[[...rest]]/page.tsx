"use client";
import React from 'react';
import { UserProfile, useAuth, SignIn } from '@clerk/nextjs';

function Page() {
  const { isSignedIn } = useAuth();
  return (
    <div className='xl:mt-10 xl:mb-10 flex gap-7 flex-wrap items-center justify-center'>
      {isSignedIn ? <div><UserProfile /></div> : <SignIn />}
    </div>
  );
}

export default Page;
