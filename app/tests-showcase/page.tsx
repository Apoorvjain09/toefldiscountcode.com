import TestCard from "@/components/ui/TestCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Toefl Go Global | Free TOEFL Mock Tests",
    description:
        "Explore all available TOEFL mock tests. Take full-length, AI-powered mock tests to prepare for TOEFL and track your progress.",
    keywords: "TOEFL mock tests, Full-length TOEFL tests, TOEFL practice, AI-powered TOEFL tests",
    openGraph: {
        title: "Toefl Go Global | Free TOEFL Mock Tests",
        description:
            "Discover and access all available TOEFL mock tests. Prepare effectively with AI-powered full-length mock tests and detailed progress tracking.",
        url: "https://toeflgoglobal.com/test-showcase",
        images: [
            {
                url: "/assets/goglobal1.webp",
                width: 800,
                height: 600,
                alt: "TOEFL Test Showcase Background",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Toefl Go Global | Free TOEFL Mock Tests",
        description:
            "Browse all TOEFL mock tests and practice with AI-driven, full-length exams. Prepare and track your progress efficiently.",
        images: ["/assets/goglobal1.webp"],
        creator: "@MJ_Study_Abroad", // Replace with your Twitter handle
    },
};

export default function TestShowCase() {
    return (
        <>
            <div className="mx-auto py-20 p-2">
                <h2 className="text-3xl font-bold mb-10 text-center">Available Tests</h2>
                <div className="flex flex-wrap gap-6 justify-center items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                        <TestCard key={i} testNumber={i + 1} />
                    ))}
                </div>
            </div>
        </>
    )
}