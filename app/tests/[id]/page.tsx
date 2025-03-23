"use client";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import React, { useState, Suspense, lazy } from "react";
import { FaPlayCircle } from 'react-icons/fa';
const ReadingListeningSection = lazy(() => import('./ReadingListeningSection'));
import { usePathname } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import Link from "next/link";


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

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": `https://www.toeflgoglobal.com/tests/${id}`,
        "name": "TOEFL Go Global",
        "description": "Access free TOEFL books and preparation resources. Download top study materials and get ready to excel in your TOEFL exam.",
        "image": "https://www.toeflgoglobal.com/assets/goglobal1.webp",
        "publisher": {
            "@type": "Organization",
            "name": "TOEFL Go Global",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.toeflgoglobal.com/assets/goglobal1.webp",
            },
        },
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
                        <Link href="/payment">
                            <Button variant="default">
                                <FaPlayCircle className="" size={24} />
                                Purchase Membership
                            </Button>
                        </Link>
                    )}
                </div>
            )}
            {stage === 'test' && (
                <Suspense fallback={<div><LoadingSpinner /></div>}>
                    <ReadingListeningSection />
                </Suspense>
            )}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </div>
    );
};

export default Page;
