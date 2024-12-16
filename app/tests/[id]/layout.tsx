import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "TOEFL AI Mock Tests | Free Practice for TOEFL Success",
    description:
        "Practice with free AI-powered TOEFL mock tests designed to simulate the real exam experience. Improve your score with personalized feedback and detailed analysis.",
    keywords: "TOEFL AI mock tests, Free TOEFL practice tests, AI-powered TOEFL preparation, TOEFL test simulator",
    openGraph: {
        title: "TOEFL AI Mock Tests | Free Practice for TOEFL Success",
        description:
            "Prepare for TOEFL with AI-driven mock tests. Experience real exam simulations, get detailed performance analysis, and boost your score for free.",
        url: "https://toeflgoglobal.com/tests/test1",
        images: [
            {
                url: "/assets/goglobal1.webp", // Keeping the same image as requested
                width: 800,
                height: 600,
                alt: "TOEFL AI Mock Tests Background",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TOEFL AI Mock Tests | Free Practice for TOEFL Success",
        description:
            "Access AI-powered TOEFL mock tests for free. Practice in a real exam environment and get personalized feedback to enhance your preparation.",
        images: ["/assets/goglobal1.webp"], // Same image
        creator: "@MJ_Study_Abroad", // Replace with your Twitter handle
    },
};


const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="">
            <main className="">
                {children}
            </main>
        </div>
    );
};

export default layout;

