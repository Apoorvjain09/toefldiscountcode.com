"use client";
import { Seo } from "@/components/Head/Seo";
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
            <Seo
                title='Toefl Go Global - AI Mock tests'
                description='Prepare for your TOEFL exam with our AI-powered mock tests. Experience realistic test simulations, receive detailed feedback, and track your progress. Access a wealth of study materials, practice questions, and expert advice to excel in your TOEFL exam. Join our community of learners and maximize your TOEFL score with Toefl Go Global.'
                url='https://toeflgoglobal.com'
                image='https://www.dropbox.com/scl/fi/efgh6d39t1z69ulz03dl3/GoGlobalSocialShare.jpg?rlkey=o8vttiq065fkpsemyzo04fcj5&raw=1'
            />
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

