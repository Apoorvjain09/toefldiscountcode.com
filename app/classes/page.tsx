import { ModernSeriesPage } from "@/components/modern-series-page";
import WhiteLabelClassSchedule from "./WhiteLabelClassSchedule";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "TOEFL Classes | Expert TOEFL Coaching Online",
    description:
        "Join the best TOEFL classes online and boost your preparation. Expert guidance, flexible schedules, and tailored study plans for your success.",
    keywords: "TOEFL classes, Online TOEFL coaching, Best TOEFL preparation, TOEFL tutoring",
    openGraph: {
        title: "TOEFL Classes | Expert TOEFL Coaching Online",
        description:
            "Prepare for the TOEFL with expert online classes. Flexible schedules, personalized study plans, and top-rated coaching for achieving your dream score.",
        url: "https://toeflgoglobal.com/classes",
        images: [
            {
                url: "/assets/goglobal1.webp",
                width: 800,
                height: 600,
                alt: "TOEFL Classes Background",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TOEFL Classes | Expert TOEFL Coaching Online",
        description:
            "Boost your TOEFL preparation with expert-led online classes. Flexible schedules and tailored study plans to help you succeed.",
        images: ["/assets/goglobal1.webp"],
        creator: "@MJ_Study_Abroad",
    },
};


export default function Classes() {
    return (
        <>
            <WhiteLabelClassSchedule />
            <ModernSeriesPage />
        </>
    )
}