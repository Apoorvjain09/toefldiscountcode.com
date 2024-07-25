// app/book/page.tsx
"use client"
import React, { Suspense, useEffect } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Section from './Section';
import { sections } from './sectionsData';

const Page: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/custom-sw.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);
  return (
    <>
      <Suspense fallback={<div><LoadingSpinner /></div>}>
        <div className='rounded-lg bg-gradient-to-r from-orange-500 to-pink-600'>
          <div className="text-center flex flex-col p-7">
            {sections.map((section, index) => (
              <Section key={index} {...section} />
            ))}
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Page;
