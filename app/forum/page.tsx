"use client";
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { Lock } from 'lucide-react';
import { lazy, Suspense } from 'react';

const PublicPosts = lazy(() => import('./PublicPosts'));


export default function fourm() {
  return (
    <div className='bg-gray-200'>
      <h1 className='flex items-center justify-center bg-gradient-to-r from-orange-400 to-red-400 rounded-t-lg w-full text-center h-[20vh] font-extrabold text-3xl text-white'>
        Toefl iBt Study Group
      </h1>
      <div className='bg-white text-xs sm:text-sm flex items-center justify-evenly h-[50px] rounded-b-lg'>
        <div className='font-bold flex flex-row gap-1 items-center '><Lock />Public group</div>
        <div className='font-bold'>1200+ <span className='text-gray-500'>members</span></div>
        <span className='font-bold text-gray-500'>For batch 2024-25</span>
      </div>

      <Suspense fallback={<div><LoadingSpinner /></div>}>
        <PublicPosts />
      </Suspense>
    </div>
  );
}
