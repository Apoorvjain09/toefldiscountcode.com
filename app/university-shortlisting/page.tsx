"use client";
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner'; // Ensure you have a loading spinner component

// Dynamically import the FormComponent
const FormComponent = dynamic(() => import('./form'), {
  suspense: true,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:p-24 mt-10">
      <Suspense fallback={<LoadingSpinner />}>
        <FormComponent />
      </Suspense>
    </main>
  );
}
