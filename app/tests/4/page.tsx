"use client";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import React, { useState, Suspense, lazy } from "react";
import { FaPlayCircle } from 'react-icons/fa';

const ReadingListeningSection = lazy(() => import('./ReadingListeningSection'));

const Page = () => {
    const [stage, setStage] = useState<'intro' | 'test'>('intro');

    const handleStartTestClick = () => {
        setStage('test');
    };

    return (
        <div className="container mx-auto py-10 px-4 md:py-10">
            {stage === 'intro' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-center">TOEFL Full Length Test 1</h2>
                    <p className="mb-8 md:mb-10 w-full md:w-2/3 lg:w-1/2 text-center">
                        A Full Length Test is similar to other TOEFL tests and takes around 2 hours to complete. It&apos;ll give you a good feel for what you can expect from our full TOEFL practice tests.
                    </p>
                    <button onClick={handleStartTestClick} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        <FaPlayCircle className="mr-2" size={24} />
                        Start Test
                    </button>
                    {/* <div className="flex flex-col md:flex-row flex-wrap justify-around gap-4 md:gap-6 lg:gap-8 w-full">
                        <a href="#" className="bg-green-600 text-white py-2 px-4 rounded inline-block text-center">Reading</a>
                        <button onClick={handleStartTestClick} className="bg-yellow-600 text-white py-2 px-4 rounded inline-block text-center">Writing</button>
                        <button onClick={handleStartTestClick} className="bg-red-600 text-white py-2 px-4 rounded inline-block text-center">Listening</button>
                        <button onClick={handleStartTestClick} className="bg-purple-600 text-white py-2 px-4 rounded inline-block text-center">Speaking</button>
                    </div> */}
                </div>
            )}
            {stage === 'test' && (
                <Suspense fallback={<div><LoadingSpinner/></div>}>
                    <ReadingListeningSection />
                </Suspense>
            )}
        </div>
    );
};

export default Page;
