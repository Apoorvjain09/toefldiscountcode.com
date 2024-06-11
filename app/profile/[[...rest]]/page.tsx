"use client";
import React from 'react';
import { UserProfile, useAuth, SignIn } from '@clerk/nextjs';
import goglobal from "@/public/assets/goglobal.webp"
import Image from 'next/image';

function Page() {
  const { isSignedIn } = useAuth();
  return (
    <>
      <div className='xl:mt-10 xl:mb-10 w-full sm:hidden md:block h-full flex gap-7 flex-wrap items-center justify-center overflow-hidden'>
        {isSignedIn ? <div><UserProfile /></div> : <SignIn />}
      </div>
      <div className='hidden sm:flex md:hidden lg:hidden text-2xl flex-col'>
        <p>Please view the page on a larger device</p>
        <Image src= {goglobal} width={2000} height={50} alt="Tofel Go Global Background"/>
      </div>
    </>
  );
}

export default Page;
