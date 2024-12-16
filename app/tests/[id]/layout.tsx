import type { Metadata } from "next";
import { ReactNode } from "react";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const testId = params.id;
    return {
        title: `TOEFL ${testId} | AI-Powered Practice Test`,
        description: `Take TOEFL ${testId} and prepare with a full-length, AI-powered practice test. Get detailed insights into your performance.`,
        keywords: `TOEFL Test ${testId}, Practice ${testId}, AI TOEFL Tests, TOEFL Mock Tests`,
        openGraph: {
            title: `TOEFL ${testId} | AI-Powered Practice Test`,
            description: `Attempt TOEFL ${testId} to practice with a real exam-like experience. Detailed insights to improve your score.`,
            url: `https://toeflgoglobal.com/tests/${testId}`,
            images: [
                {
                    url: "/assets/goglobal1.webp",
                    width: 800,
                    height: 600,
                    alt: `TOEFL Test ${testId} Background`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `TOEFL ${testId} | AI-Powered Practice Test`,
            description: `Practice for TOEFL with ${testId}. AI-powered full-length mock test to help you prepare effectively.`,
            images: ["/assets/goglobal1.webp"],
            creator: "@MJ_Study_Abroad", // Replace with your Twitter handle

        },
    };
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

