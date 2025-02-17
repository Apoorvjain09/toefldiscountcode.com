"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { BookOpen, Headphones, Mic, Pencil } from "lucide-react"
import Link from "next/link"
import { Separator } from "@radix-ui/react-separator"
import { useMediaQuery } from "usehooks-ts"

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
    const [showDiffrentButtonsForEachTask, setShowDiffrentButtonsForEachTask] = useState(false);
    const [isScrolledAfterSelectingTask, setIsScrolledAfterSelectingTask] = useState(false);
    const isLargeScreen = useMediaQuery("(min-width: 640px)")

    useEffect(() => {
        const handleScroll = () => {
            if (selectedSection) {
                setIsScrolledAfterSelectingTask(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [selectedSection]);

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {sections.map((section) => (
                <motion.div key={section.title} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Card
                                className={`cursor-pointer transition-colors ${selectedSection === section.title ? "border-primary" : ""}`}
                                onClick={() => {
                                    setSelectedSection(section.title);
                                    setShowDiffrentButtonsForEachTask(section.title === "Writing" || section.title === "Speaking");
                                    setIsScrolledAfterSelectingTask(false);
                                }}
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
                        <HoverCardContent className="hidden sm:block w-80">
                            <h3 className="text-lg font-semibold">{section.title} Section</h3>
                            <p className="text-sm text-muted-foreground">
                                The TOEFL {section.title} section tests your ability to {section.description.toLowerCase()}. Practice
                                this section to improve your overall TOEFL score.
                            </p>
                        </HoverCardContent>
                    </HoverCard>
                </motion.div>
            ))}

            <AnimatePresence>
                {!isScrolledAfterSelectingTask && (
                    <motion.div
                        key="practice-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className={`col-span-full mt-8 flex justify-center w-full ${selectedSection ? "fixed sm:absolute bottom-10 left-0 " : ""}`}
                    >
                        <ButtonGroup
                            selectedSection={selectedSection}
                            showDiffrentButtonsForEachTask={showDiffrentButtonsForEachTask}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <Separator className={`w-full sm:hidden ${!showDiffrentButtonsForEachTask ? "h-[5vh] sm:h-0" : "h-[13vh] sm:h-0"}`} />
        </div>
    )
}


function ButtonGroup({ selectedSection, showDiffrentButtonsForEachTask }: { selectedSection: string | null, showDiffrentButtonsForEachTask: boolean }) {
    return (
        <>
            <AnimatePresence mode="wait">

                {!showDiffrentButtonsForEachTask ? (
                    <motion.div
                        key={selectedSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex justify-center w-full"
                    >
                        <Link href={`/practice-questions/${selectedSection?.toLowerCase()}-questions`}>
                            <Button
                                size="lg"
                                className="w-full sm:w-auto"
                                disabled={!selectedSection}
                            >
                                {selectedSection ? `Start ${selectedSection} Practice` : "Select a Section"}
                            </Button>
                        </Link>
                    </motion.div>

                ) : (
                    <>
                        <motion.div
                            key={selectedSection}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col sm:flex-row gap-5 justify-center w-full"
                        >
                            <Link href={`/practice-questions/${selectedSection?.toLowerCase()}-questions/task1`}>
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto"
                                    disabled={!selectedSection}
                                >
                                    Start Task 1 Practice
                                </Button>
                            </Link>
                            <Link href={`/practice-questions/${selectedSection?.toLowerCase()}-questions/task2`}>
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto"
                                    disabled={!selectedSection}
                                >
                                    Start Task 2 Practice
                                </Button>
                            </Link>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </>

    )
}