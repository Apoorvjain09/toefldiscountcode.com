import FeaturesSection from "@/components/ui/FeaturesSectionLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TOEFL Go Global | Your Gateway to TOEFL Success",
    description: "Prepare for TOEFL with AI-powered mock tests, expert guidance, free study resources, and personalized coaching. Achieve your dream score with TOEFL Go Global!",
    keywords: "TOEFL preparation, AI-powered TOEFL tests, Free TOEFL resources, TOEFL coaching, TOEFL discount codes",
    openGraph: {
        title: "TOEFL Go Global | Your Gateway to TOEFL Success",
        description: "Join TOEFL Go Global for top-notch preparation tools including AI-driven mock tests, free resources, and expert coaching. Your TOEFL success starts here!",
        url: "https://wwww.toeflgoglobal.com",
        type: 'website',
        images: [
            {
                url: "https://www.toeflgoglobal.com/assets/goglobal1.webp",
                width: 800,
                height: 600,
                alt: "TOEFL Go Global Website Background",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TOEFL Go Global | Your Gateway to TOEFL Success",
        description: "Experience the best in TOEFL preparation with AI-powered tools, expert coaching, and free resources. Unlock your potential with TOEFL Go Global.",
        images: ["https://www.toeflgoglobal.com/assets/goglobal1.webp"],
        creator: "@MJ_Study_Abroad",
    },
};

export default function Page() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.toeflgoglobal.com",
        "name": "TOEFL Go Global",
        "description": "Prepare for TOEFL with AI-powered mock tests, expert guidance, and free resources.",
        "image": "https://www.toeflgoglobal.com/assets/goglobal1.webp",
        "publisher": {
            "@type": "Organization",
            "name": "TOEFL Go Global",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.toeflgoglobal.com/assets/goglobal1.webp",
            },
        },
    };
    return (
        <>
            <FeaturesSection />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </>
    );
}
