"use client";
import FeaturesSection from "@/components/ui/FeaturesSectionLandingPage";
import { useState, lazy, Suspense, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

const TestCard = lazy(() => import("@/components/ui/TestCard"));

export default function Page() {
    const [showTests, setShowTests] = useState(false);
    const { isSignedIn } = useUser();

    const handleGetStartedClick = () => {
        if (isSignedIn) {
            setShowTests(true);
            return;
        } else {
            window.location.href = "https://accounts.toeflgoglobal.com/sign-up?redirect_url=https%3A%2F%2Fwww.toeflgoglobal.com%2F";
            return;
        }
    };

    return (
        <>
            {!showTests ? (
                <FeaturesSection onGetStartedClick={handleGetStartedClick} />
            ) : (
                <div className="mx-auto py-20 p-2">
                    <h2 className="text-3xl font-bold mb-10 text-center">Available Tests</h2>
                    <div className="flex flex-wrap gap-6 justify-center items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                            <TestCard key={i} testNumber={i + 1} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
