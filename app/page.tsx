import FeaturesSection from "@/components/ui/FeaturesSectionLandingPage";
import type { Metadata } from "next";

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

    return (
        <FeaturesSection />
    );
}
