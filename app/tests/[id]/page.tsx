"use client";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import React, { useState, Suspense, lazy } from "react";
import { FaPlayCircle } from 'react-icons/fa';
const ReadingListeningSection = lazy(() => import('./ReadingListeningSection'));
import { usePathname } from 'next/navigation';
import { useUser } from '@clerk/nextjs';


const Page = () => {
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    let hasAccess;

    if (id === "test1" || id === "test2") {
        hasAccess = true
    } else {
        const { user } = useUser()
        hasAccess = user?.publicMetadata?.["Monthly_Membership"] === "true";
    }

    const [stage, setStage] = useState<'intro' | 'test'>('intro');
    const handleStartTestClick = () => {
        setStage('test');
    };

    return (
        <div className="py-10 px-4">
            {stage === 'intro' && (
                <div className="flex flex-col items-center justify-center shadow-2xl rounded-2xl border p-6 min-h-[80vh]">
                    <h2 className="text-2xl sm:text-6xl mb-3 text-center font-extrabold">Toefl Full Length Test</h2>
                    <p className="mb-4 w-[90%] md:w-2/3 lg:w-1/2 text-center">
                        A Full Length Test is similar to other TOEFL tests and takes around 2 hours to complete. It&apos;ll give you a good feel for what you can expect from our full TOEFL practice tests.
                    </p>
                    {hasAccess ? (
                        <Button onClick={handleStartTestClick} variant="default">
                            <FaPlayCircle className="" size={24} />
                            Start Test
                        </Button>
                    ) : (
                        <Button onClick={() => { window.location.href = "/payment" }} variant="default">
                            <FaPlayCircle className="" size={24} />
                            Purchase Membership
                        </Button>
                    )}
                </div>
            )}
            {stage === 'test' && (
                <Suspense fallback={<div><LoadingSpinner /></div>}>
                    <ReadingListeningSection />
                </Suspense>
            )}
        </div>
    );
};

export default Page;
