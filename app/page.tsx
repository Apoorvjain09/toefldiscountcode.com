"use client";
import { useState, useEffect, lazy, Suspense } from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Head from "next/head";

const TestCard = lazy(() => import("@/components/ui/TestCard"));
const FeaturesSection = lazy(() => import("@/components/ui/FeaturesSectionLandingPage"));


export default function Page() {

    const [showTests, setShowTests] = useState(false);
    const handleGetStartedClick = () => {
        setShowTests(true);
    };

    return (
        <>
            <Head>
                <title>TOEFL AI Powered Mock Tests</title>
                <meta name="description" content="Enhance your TOEFL preparation with our AI-powered mock tests. Practice with realistic test simulations, receive detailed feedback, and track your progress to achieve your desired TOEFL score. Join our community of learners and access a wide range of study materials, practice questions, and expert advice to excel in your TOEFL exam." />
            </Head>
            {!showTests ? (
                <div>
                    <Suspense fallback={<div><LoadingSpinner /></div>}>
                        <FeaturesSection onGetStartedClick={handleGetStartedClick} />
                    </Suspense>
                </div>
            ) : (
                <Suspense fallback={<div><LoadingSpinner /></div>}>
                    <div className="mx-auto py-20 p-2">
                        <h2 className="text-3xl font-bold mb-10 text-center">Available Tests</h2>
                        <div className="flex flex-wrap gap-6 justify-center items-center">
                            {Array.from({ length: 5 }, (_, i) => (
                                <TestCard key={i} testNumber={i + 1} />
                            ))}
                        </div>
                    </div>
                </Suspense>
            )}
        </>
    );
}

