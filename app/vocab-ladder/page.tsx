import { GamifiedJourney } from "@/components/gamified-journey";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TOEFL Vocab Ladder | Boost Your Vocabulary for TOEFL Success",
    description:
        "Climb the TOEFL Vocab Ladder to master essential vocabulary. Engage in interactive learning and enhance your TOEFL preparation with ease.",
    keywords: "TOEFL vocabulary, TOEFL vocab ladder, TOEFL word list, Improve TOEFL vocab, TOEFL preparation",
    openGraph: {
        title: "TOEFL Vocab Ladder | Boost Your Vocabulary for TOEFL Success",
        description:
            "Master essential TOEFL vocabulary with the interactive Vocab Ladder. Prepare effectively and improve your performance on the TOEFL exam.",
        url: "https://toeflgoglobal.com/vocab-ladder",
        images: [
            {
                url: "/assets/goglobal1.webp", // Same image as requested
                width: 800,
                height: 600,
                alt: "TOEFL Vocab Ladder Background",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TOEFL Vocab Ladder | Boost Your Vocabulary for TOEFL Success",
        description:
            "Step up your TOEFL preparation with the Vocab Ladder. Learn and master essential words interactively to achieve your dream score.",
        images: ["/assets/goglobal1.webp"], // Specified image
        creator: "@MJ_Study_Abroad", // Replace with your Twitter handle
    },
};


export default function VocabMountain() {
    return (
        <div>
            <GamifiedJourney />
        </div>
    )
}