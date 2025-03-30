"use client"

import { Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import MainFooter from "@/components/landing-page/MainFooter"
import { useState } from "react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    const writingTemplates = [
        {
            title: "Integrated Writing - Compare & Contrast",
            description: "A structured template for comparing lecture and reading passage points.",
            score: 28,
            difficulty: "Advanced",
            popularity: "High",
            tags: ["Integrated", "Academic", "Compare"],
            link: "/templates/writing/compare-contrast",
        },
        {
            title: "Independent Writing - Opinion Essay",
            description: "Express and support your opinion on any topic with this versatile template.",
            score: 26,
            difficulty: "Intermediate",
            popularity: "Very High",
            tags: ["Independent", "Opinion", "Argumentative"],
            link: "/templates/writing/opinion-essay",
        },
        {
            title: "Integrated Writing - Problem & Solution",
            description: "Analyze problems presented in the lecture and reading with structured solutions.",
            score: 27,
            difficulty: "Advanced",
            popularity: "Medium",
            tags: ["Integrated", "Problem-Solution", "Analysis"],
            link: "/templates/writing/problem-solution",
        },
        {
            title: "Independent Writing - Advantages & Disadvantages",
            description: "Balanced approach to discussing both sides of an issue with clear structure.",
            score: 25,
            difficulty: "Intermediate",
            popularity: "High",
            tags: ["Independent", "Balanced", "Analysis"],
            link: "/templates/writing/advantages-disadvantages",
        },
        {
            title: "Academic Discussion - Debate & Argumentation",
            description: "Engage in a structured debate where contrasting views are presented and discussed.",
            score: 30,
            difficulty: "Intermediate",
            popularity: "High",
            tags: ["Academic", "Debate", "Discussion"],
            link: "/templates/writing/debate-argumentation",
        },
        {
            title: "Academic Discussion - Problem & Solution Analysis",
            description: "Analyze a current issue by identifying the problem, exploring its causes, and proposing viable solutions.",
            score: 28,
            difficulty: "Intermediate",
            popularity: "Medium",
            tags: ["Academic", "Problem-Solution", "Discussion"],
            link: "/templates/writing/problem-solution-analysis",
        },
    ]

    const speakingTemplates = [
        {
            title: "Task 1 - Personal Experience Questions",
            description: "Structure your response about personal preferences or experiences.",
            score: 26,
            difficulty: "Beginner",
            popularity: "Very High",
            tags: ["Independent", "Personal", "Task 1"],
            link: "/templates/speaking/personal-experience",
        },
        {
            title: "Task 2 - Campus Related Questions",
            description: "Template for discussing campus announcements or changes.",
            score: 25,
            difficulty: "Intermediate",
            popularity: "High",
            tags: ["Integrated", "Campus", "Task 2"],
            link: "/templates/speaking/campus-situation",
        },
        {
            title: "Task 3 - Academic Lecture Questions",
            description: "Structured approach to summarizing academic concepts from lectures.",
            score: 27,
            difficulty: "Advanced",
            popularity: "Medium",
            tags: ["Integrated", "Academic", "Task 3"],
            link: "/templates/speaking/academic-lecture",
        },
    ]

    const filteredWritingTemplates = writingTemplates.filter((template) =>
        template.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const filteredSpeakingTemplates = speakingTemplates.filter((template) =>
        template.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
                <main className="container py-8 md:py-12 px-8">
                    <section className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">TOEFL Templates Library</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Access our comprehensive collection of proven templates to excel in all sections of the TOEFL exam.
                        </p>
                    </section>

                    <section className="mb-12">
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    placeholder="Search templates by keyword, section, or score target..."
                                    className="pl-10"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-filter"
                                    >
                                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                                    </svg>
                                    <span className="sr-only">Filter</span>
                                </Button>
                                <Button variant="outline" size="sm" className="hidden md:flex">
                                    Sort by: Popularity
                                </Button>
                            </div>
                        </div>

                        <Tabs defaultValue="writing" className="w-full">
                            <TabsList className="grid grid-cols-2 mb-8">
                                <TabsTrigger value="writing">Writing</TabsTrigger>
                                <TabsTrigger value="speaking">Speaking</TabsTrigger>
                                {/* <TabsTrigger value="reading">Reading</TabsTrigger> */}
                                {/* <TabsTrigger value="listening">Listening</TabsTrigger> */}
                            </TabsList>

                            <TabsContent value="writing" className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">Writing Templates</h2>
                                    <Button variant="outline" size="sm">View All</Button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredWritingTemplates.map((template, index) => (
                                        <TemplateCard key={index} {...template} />
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="speaking" className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">Speaking Templates</h2>
                                    <Button variant="outline" size="sm">View All</Button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredSpeakingTemplates.map((template, index) => (
                                        <TemplateCard key={index} {...template} />
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="reading" className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">Reading Templates</h2>
                                    <Button variant="outline" size="sm">
                                        View All
                                    </Button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <TemplateCard
                                        title="Inference Questions Strategy"
                                        description="Template for approaching and answering inference-based questions."
                                        score={27}
                                        difficulty="Advanced"
                                        popularity="High"
                                        tags={["Inference", "Strategy", "Academic"]}
                                        link="/templates/writing/"
                                    />

                                    <TemplateCard
                                        title="Vocabulary in Context"
                                        description="Systematic approach to determining word meanings in context."
                                        score={25}
                                        difficulty="Intermediate"
                                        popularity="Medium"
                                        tags={["Vocabulary", "Context", "Technique"]}
                                        link="/templates/writing/"
                                    />

                                    <TemplateCard
                                        title="Main Idea Identification"
                                        description="Quick template for identifying and verifying main ideas in passages."
                                        score={26}
                                        difficulty="Intermediate"
                                        popularity="Very High"
                                        tags={["Main Idea", "Structure", "Comprehension"]}
                                        link="/templates/writing/"
                                    />
                                </div>
                            </TabsContent>

                            <TabsContent value="listening" className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">Listening Templates</h2>
                                    <Button variant="outline" size="sm">
                                        View All
                                    </Button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <TemplateCard
                                        title="Lecture Note-Taking System"
                                        description="Structured note-taking template for academic lectures."
                                        score={28}
                                        difficulty="Advanced"
                                        popularity="High"
                                        tags={["Note-taking", "Academic", "Lecture"]}
                                        link="/templates/writing/"
                                    />

                                    <TemplateCard
                                        title="Conversation Analysis Framework"
                                        description="Template for breaking down and understanding campus conversations."
                                        score={26}
                                        difficulty="Intermediate"
                                        popularity="Medium"
                                        tags={["Conversation", "Campus", "Analysis"]}
                                        link="/templates/writing/"
                                    />

                                    <TemplateCard
                                        title="Purpose & Attitude Identification"
                                        description="Quick framework for identifying speaker purpose and attitude."
                                        score={27}
                                        difficulty="Intermediate"
                                        popularity="High"
                                        tags={["Purpose", "Attitude", "Analysis"]}
                                        link="/templates/writing/"
                                    />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </section>

                    <section className="mb-12 bg-slate-200 dark:bg-slate-800 rounded-xl p-6 md:p-8 border shadow-sm">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">Premium Template Collections</h2>
                                <p className="text-muted-foreground mb-6">
                                    Access our curated collections of high-scoring templates with detailed explanations, sample answers, and
                                    personalized feedback from TOEFL experts.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <HoverCard>
                                        <HoverCardTrigger asChild>
                                            <Button>Explore Premium</Button>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="text-center text-xs text-muted-foreground">
                                            🚀 Premium features coming soon!
                                        </HoverCardContent>
                                    </HoverCard>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm">
                                        <div className="font-bold text-lg mb-2">30+ Writing</div>
                                        <div className="text-sm text-muted-foreground">High-scoring templates</div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm">
                                        <div className="font-bold text-lg mb-2">25+ Speaking</div>
                                        <div className="text-sm text-muted-foreground">Response frameworks</div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm">
                                        <div className="font-bold text-lg mb-2">20+ Reading</div>
                                        <div className="text-sm text-muted-foreground">Strategy templates</div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm">
                                        <div className="font-bold text-lg mb-2">15+ Listening</div>
                                        <div className="text-sm text-muted-foreground">Note-taking systems</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">Recently Updated Templates</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="border rounded-lg p-4 bg-background">
                                <div className="flex justify-between items-start mb-2">
                                    <Badge
                                        variant="outline"
                                        className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                                    >
                                        Updated
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">2 days ago</span>
                                </div>
                                <h3 className="font-bold mb-1">Independent Writing - Agree/Disagree</h3>
                                <p className="text-sm text-muted-foreground">
                                    Updated with new transition phrases and example arguments.
                                </p>
                            </div>
                            <div className="border rounded-lg p-4 bg-background">
                                <div className="flex justify-between items-start mb-2">
                                    <Badge
                                        variant="outline"
                                        className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                                    >
                                        Updated
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">5 days ago</span>
                                </div>
                                <h3 className="font-bold mb-1">Speaking Task 1 - Opinion</h3>
                                <p className="text-sm text-muted-foreground">Revised structure with improved time management guidance.</p>
                            </div>
                            <div className="border rounded-lg p-4 bg-background">
                                <div className="flex justify-between items-start mb-2">
                                    <Badge
                                        variant="outline"
                                        className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                                    >
                                        Updated
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">1 week ago</span>
                                </div>
                                <h3 className="font-bold mb-1">Integrated Writing - Contrast</h3>
                                <p className="text-sm text-muted-foreground">Added new signal phrases and organizational structure.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 md:p-8 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to improve your TOEFL score?</h2>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Create a free account to save your favorite templates, track your progress, and get personalized
                                recommendations based on your target score.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button size="lg">Create Free Account</Button>
                                <Button variant="outline" size="lg">
                                    View Study Plans
                                </Button>
                            </div>
                        </div>
                    </section>
                </main>

            </div>

            <MainFooter />
        </>
    )
}

function TemplateCard({
    title,
    description,
    score,
    difficulty,
    popularity,
    tags,
    link
}: {
    title: string
    description: string
    score: number
    difficulty: string
    popularity: string
    tags: string[]
    link: string
}) {
    return (
        <Link href={link}>
            <Card className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{title}</CardTitle>
                        <Badge variant="secondary">{score}/30</Badge>
                    </div>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3 flex flex-col gap-5">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-3 text-xs text-muted-foreground">
                    <div>Difficulty: {difficulty}</div>
                    <div>Popularity: {popularity}</div>
                </CardFooter>
            </Card>
        </Link>

    )
}

