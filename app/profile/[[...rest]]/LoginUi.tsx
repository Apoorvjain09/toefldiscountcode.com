"use client";
import React from 'react';
import { useAuth } from '@clerk/nextjs';
import goglobal from "@/public/assets/goglobal.webp";
import Image from 'next/image';
import { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Lazy load components
const UserProfile = lazy(() => import('@clerk/nextjs').then(module => ({ default: module.UserProfile })));
const SignIn = lazy(() => import('@clerk/nextjs').then(module => ({ default: module.SignIn })));

const LoginUI = () => {
  const { isSignedIn } = useAuth();

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <div className='xl:mt-10 xl:mb-10 p-7 w-full sm:hidden md:flex h-full flex items-center justify-center '>
          {isSignedIn ? <UserProfile /> : <SignIn />}
        </div>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <div className='hidden sm:flex md:hidden lg:hidden text-2xl flex-col'>
          {isSignedIn ?
            <div>
              <p>Please view the page on a larger device</p>
              <Image src={goglobal} width={2000} height={50} alt="Tofel Go Global Background" />
            </div>
            : 
            <SignIn />}
        </div>
      </Suspense>
    </>
  );
};

export default LoginUI;
