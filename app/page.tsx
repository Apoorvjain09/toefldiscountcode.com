"use client";
import { useState, useEffect,lazy, Suspense } from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const TestCard = lazy(() => import("@/components/ui/TestCard"));


export default function Page() {

    const [showTests, setShowTests] = useState(false);
    const handleGetStartedClick = () => {
        setShowTests(true);
    };

    return (
        <>
            {!showTests ? (
                <div>
                    <div className="p-6 h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
                        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                        <h1 className={cn("text-center md:text-4xl text-xl text-white relative z-20")}>
                            Ace Your TOEFL Test with Our AI-Powered Mock Tests
                        </h1>
                        <p className="text-center mt-2 mb-4 text-neutral-300 relative z-20">
                            Practice with realistic tests and get detailed feedback to improve your scores.
                        </p>
                        <button onClick={handleGetStartedClick} className="bg-blue-600 text-white py-2 px-4 rounded z-[10] mt-1">Get Started</button>
                    </div>
                    <section id="features" className="py-20">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-10">Features</h2>
                            <div className="flex flex-wrap justify-around">
                                <div className="w-full md:w-1/3 p-4">
                                    <div className="bg-white shadow p-6 rounded">
                                        <h3 className="text-xl font-bold mb-4">AI Checker</h3>
                                        <p>Get instant and accurate feedback on your practice tests.</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-4">
                                    <div className="bg-white shadow p-6 rounded">
                                        <h3 className="text-xl font-bold mb-4">Realistic Mock Tests</h3>
                                        <p>Experience the TOEFL test environment with our realistic mock tests.</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-4">
                                    <div className="bg-white shadow p-6 rounded">
                                        <h3 className="text-xl font-bold mb-4">Detailed Feedback</h3>
                                        <p>Receive comprehensive feedback to identify your strengths and weaknesses.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            ) : (
                <div className="mx-auto py-20 p-2">
                    <h2 className="text-3xl font-bold mb-10 text-center">Available Tests</h2>
                    <Suspense fallback={<div>Loading tests...</div>}>
                        <div className="flex flex-wrap gap-6 justify-center items-center">
                            {Array.from({ length: 10 }, (_, i) => (
                                <TestCard key={i} testNumber={i + 1} />
                            ))}
                        </div>
                    </Suspense>
                </div>
            )}
        </>
    );
}
