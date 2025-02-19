import type { Metadata } from "next"
import ToeflPracticeSections from "@/components/practice-questions/toefl-practice-sections"

export const metadata: Metadata = {
    title: "Free TOEFL Practice Questions | ToeflGoGlobal",
    description: "Select a section to practice for your TOEFL exam",
}

export default function ToeflPracticePage() {
    return (
        <div className="container mx-auto px-8 py-8 min-h-[95vh] relative">
            <h1 className="mb-8 text-4xl font-bold tracking-tight">TOEFL Practice Questions</h1>
            <p className="mb-8 text-xl text-muted-foreground">
                Get random questions from a pool of{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                    400!
                </span>{" "}
                Select a section below to start.
            </p>
            <ToeflPracticeSections />
        </div>
    )
}

