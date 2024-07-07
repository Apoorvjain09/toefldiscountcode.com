"use client"
import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useUser } from '@clerk/nextjs';

const CoursePage = dynamic(() => import('./CousePage'), {
  suspense: true,
});

export default function Page() {
  const [stage, setStage] = useState<'start' | 'course'>('start');
  const {isSignedIn, user} = useUser();

  const handleWatchVideoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isSignedIn) {
      window.location.href = "/profile";
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
                  <a
                    title=""
                    className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                    onClick={handleWatchVideoClick}
                  >
                    {/* <svg
                      className="w-10 h-10 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        fill="#F97316"
                        stroke="#F97316"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg> */}
                    Watch video
                  </a>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <img
                  className="w-[70%]"
                  src="https://freepngimg.com/thumb/girl/168680-woman-young-free-clipart-hd.png"
                  alt=""
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
  );
}
