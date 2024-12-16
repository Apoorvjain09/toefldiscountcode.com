"use client";
import FeaturesSection from "@/components/ui/FeaturesSectionLandingPage";
import { useState, lazy, Suspense, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import type { Metadata } from "next";

const TestCard = lazy(() => import("@/components/ui/TestCard"));

export const metadata: Metadata = {
    title: "TOEFL Go Global | Your Gateway to TOEFL Success",
    description:
        "Prepare for TOEFL with AI-powered mock tests, expert guidance, free study resources, and personalized coaching. Achieve your dream score with TOEFL Go Global!",
    keywords:
        "TOEFL preparation, AI-powered TOEFL tests, Free TOEFL resources, TOEFL coaching, TOEFL discount codes",
    openGraph: {
        title: "TOEFL Go Global | Your Gateway to TOEFL Success",
        description:
            "Join TOEFL Go Global for top-notch preparation tools including AI-driven mock tests, free resources, and expert coaching. Your TOEFL success starts here!",
        url: "https://toeflgoglobal.com",
        images: [
            {
                url: "/assets/goglobal1.webp", // Keeping the same image
                width: 800,
                height: 600,
                alt: "TOEFL Go Global Website Background",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TOEFL Go Global | Your Gateway to TOEFL Success",
        description:
            "Experience the best in TOEFL preparation with AI-powered tools, expert coaching, and free resources. Unlock your potential with TOEFL Go Global.",
        images: ["/assets/goglobal1.webp"], // Specified image
        creator: "@MJ_Study_Abroad", // Replace with your Twitter handle
    },
};

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
