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
                Select a section below to start your TOEFL practice session for today.
            </p>
            <ToeflPracticeSections />
        </div>
    )
}

