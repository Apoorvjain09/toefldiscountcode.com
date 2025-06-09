import { ClassesToeflCourse } from "@/app/classes/ClassesToeflCourse";
import ClassesWhiteLabelSchedule from "./ClassesWhiteLabelSchedule";
import type { Metadata } from "next";
import MainFooter from "@/components/landing-page/MainFooter";
import { ClassesCalanderView } from "./ClassesCalanderView";
import ClassesWhyUs from "./ClassesWhyUs";


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
            <h1 className="mb-4 font-extrabold leading-none tracking-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl dark:text-white text-center mt-5 px-20">Upcoming Live Classes – Monthly Schedule</h1>
            <ClassesWhiteLabelSchedule />
            <ClassesCalanderView />
            {/* <ClassesToeflCourse /> */}
            <ClassesWhyUs />
            <MainFooter />
        </>
    )
}