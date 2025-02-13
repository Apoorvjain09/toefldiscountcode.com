"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { BookOpen, Headphones, Mic, Pencil } from "lucide-react"
import Link from "next/link"

const sections = [
    {
        title: "Reading",
        description: "Practice your reading comprehension skills",
        icon: BookOpen,
        color: "text-blue-500",
    },
    {
        title: "Listening",
        description: "Improve your listening and understanding",
        icon: Headphones,
        color: "text-green-500",
    },
    {
        title: "Speaking",
        description: "Enhance your speaking abilities",
        icon: Mic,
        color: "text-yellow-500",
    },
    {
        title: "Writing",
        description: "Develop your writing skills",
        icon: Pencil,
        color: "text-purple-500",
    },
]

export default function ToeflPracticeSections() {
    const [selectedSection, setSelectedSection] = useState<string | null>(null)

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {sections.map((section) => (
                <motion.div key={section.title} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Card
                                className={`cursor-pointer transition-colors ${selectedSection === section.title ? "border-primary" : ""
                                    }`}
                                onClick={() => setSelectedSection(section.title)}
                            >
                                <CardHeader>
                                    <section.icon className={`h-8 w-8 ${section.color}`} />
                                    <CardTitle>{section.title}</CardTitle>
                                    <CardDescription>{section.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Click to select this section for practice.</p>
                                </CardContent>
                            </Card>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <h3 className="text-lg font-semibold">{section.title} Section</h3>
                            <p className="text-sm text-muted-foreground">
                                The TOEFL {section.title} section tests your ability to {section.description.toLowerCase()}. Practice
                                this section to improve your overall TOEFL score.
                            </p>
                        </HoverCardContent>
                    </HoverCard>
                </motion.div>
            ))}
            <div className="col-span-full mt-8">
                <Link href={`/practice-questions/${selectedSection?.toLowerCase()}-questions`}>
                    <Button
                        size="lg"
                        className="w-full sm:w-auto"
                        disabled={!selectedSection}
                    >
                        {selectedSection ? `Start ${selectedSection} Practice` : "Select a Section"}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

