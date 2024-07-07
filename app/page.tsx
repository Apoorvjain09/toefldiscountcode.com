"use client";
import { useState, lazy, Suspense } from "react";

const TestCard = lazy(() => import("@/components/ui/TestCard"));
const FeaturesSection = lazy(() => import("@/components/ui/FeaturesSectionLandingPage"));


export default function Page() {
    const [showTests, setShowTests] = useState(false);

    const handleGetStartedClick = () => {
            setShowTests(true);
    };

    return (
        <>
            {!showTests ? (
                <div>
                    <Suspense fallback={<div></div>}>
                        <FeaturesSection onGetStartedClick={handleGetStartedClick} />
                    </Suspense>
                </div>
            ) : (
                <Suspense fallback={<div></div>}>
                    <div className="mx-auto py-20 p-2">
                        <h2 className="text-3xl font-bold mb-10 text-center">Available Tests</h2>
                        <div className="flex flex-wrap gap-6 justify-center items-center">
                            {Array.from({ length: 6 }, (_, i) => (
                                <TestCard key={i} testNumber={i + 1} />
                            ))}
                        </div>
                    </div>
                </Suspense>
            )}
        </>
    );
}

