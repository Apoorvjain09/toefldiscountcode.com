"use client"
import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useUser } from '@clerk/nextjs';
import { Seo } from '@/components/Head/Seo';
import women from "@/public/assets/woman-young-free-clipart-hd.png"
import { lazy } from 'react';

//mayank - 10th july 2024

const CoursePage = lazy(() => import('./CousePage'));

export default function Page() {
  const [stage, setStage] = useState<'start' | 'course'>('start');
  const { isSignedIn, user } = useUser();

  const handleWatchVideoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isSignedIn) {
      alert('Please Log in.');
    }
    else {
      e.preventDefault();
      const hasAccess = user?.publicMetadata?.["Vocabulary_Course"] === "true"
      if (hasAccess) {
        setStage('course');
      } else {
        alert('You do not have access to this course.');
      }
    }
  };

  return (
    <>
      <Seo
        title='MJA Vocabulary Course'
        description='Enhance your TOEFL vocabulary with our specialized course designed for competetive exam test takers.'
        url='https://toeflgoglobal.com/vocabulary-course'
        image='https://www.dropbox.com/scl/fi/efgh6d39t1z69ulz03dl3/GoGlobalSocialShare.jpg?rlkey=o8vttiq065fkpsemyzo04fcj5&raw=1'
      />
      <div className={`rounded-lg ${stage === 'course' ? 'bg-white' : 'bg-gradient-to-b from-green-50 to-green-100'}`}>
        {stage === 'start' && (
          <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Best Online Education with
                    <div className="relative inline-flex">
                      <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                      <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                        MJ Academy
                      </h1>
                    </div>
                  </h1>
                  <p className="mt-8 text-base text-black sm:text-xl">
                    Your Gateway to Knowledge and Growth. Discover a world of
                    comprehensive learning resources, expert guidance, and
                    innovative tools designed to empower students and professionals
                    alike on their educational journey.
                  </p>
                  <div className="mt-10 flex items-center gap-5 md:gap-0 sm:flex sm:items-center sm:space-x-8">
                    <a
                      title=""
                      className="rounded-lg inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                      role="button"
                      onClick={handleWatchVideoClick}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
                <div className="flex justify-center md:justify-end">
                  <img
                    className="w-[70%]"
                    src="assets/woman-young-free-clipart-hd.png"
                    // src="https://freepngimg.com/thumb/girl/168680-woman-young-free-clipart-hd.png"
                    alt=""
                    loading='lazy'
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {stage === 'course' && (
          <Suspense fallback={<div>Loading Course...</div>}>
            <CoursePage />
          </Suspense>
        )}
      </div>
    </>
  );
}
