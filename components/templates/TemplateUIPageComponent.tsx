import { ArrowLeft, BookOpen, Clock, Download, Star, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "../ui/avatar"

interface TemplateContent {
    introduction: string
    structure: {
        title: string
        content: string
        example: string
    }[]
    tips: string[]
    commonPhrases: {
        category: string
        phrases: string[]
    }[]
}

interface TemplateType {
    title: string
    description: string
    score: number
    difficulty: string
    popularity: string
    tags: string[]
    timeToComplete: string
    wordCount: string
    updatedAt: string
    author: string
    authorImage: string
    authorRole: string
    rating: number
    reviews: number
    usedCount: number
    content: TemplateContent
    sampleEssay: {
        prompt: string
        essay: string
    }
    relatedTemplates: {
        id: string
        title: string
        score: number
        difficulty: string
    }[]
}

export default function TemplateUIPageComponent({ template }: { template: TemplateType }) {

    return (
        <div className="min-h-screen rounded-t-lg bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
            <header className="px-8 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <span className="text-xl font-bold">TOEFL Master</span>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/" className="flex items-center gap-1">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Templates
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>

            <main className="container py-8 px-8 md:py-12">
                <div className="flex flex-col gap-10">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {template.tags.map((tag, i) => (
                                    <Badge key={i} variant="outline">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">{template.title}</h1>
                            <p className="text-xl text-muted-foreground">{template.description}</p>
                        </div>

                        <Tabs defaultValue="structure" className="w-full">
                            <TabsList className="h-full grid grid-cols-2 sm:grid-cols-4 mb-10 sm:mb-6">
                                <TabsTrigger value="structure">Structure</TabsTrigger>
                                <TabsTrigger value="tips">Tips & Phrases</TabsTrigger>
                                <TabsTrigger value="sample">Sample Essay</TabsTrigger>
                                <TabsTrigger value="practice">Practice</TabsTrigger>
                            </TabsList>

                            <TabsContent value="structure" className="space-y-6">
                                <div className="prose prose-slate dark:prose-invert max-w-none">
                                    <p>{template.content.introduction}</p>
                                </div>

                                <div className="space-y-6">
                                    {template.content.structure.map((section, i) => (
                                        <Card key={i}>
                                            <CardHeader className="pb-3">
                                                <CardTitle>{section.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <div className="prose prose-slate dark:prose-invert max-w-none">
                                                    <pre className="whitespace-pre-wrap text-sm bg-slate-100 dark:bg-slate-800 p-4 rounded-md">
                                                        {section.content}
                                                    </pre>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium mb-2">Example:</h4>
                                                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md text-sm italic">
                                                        {section.example}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="tips" className="space-y-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Writing Tips</CardTitle>
                                        <CardDescription>Follow these tips to improve your essay quality</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {template.content.tips.map((tip, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                                    <span>{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Useful Phrases</CardTitle>
                                        <CardDescription>Incorporate these phrases to enhance your writing</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        {template.content.commonPhrases.map((category, i) => (
                                            <div key={i}>
                                                <h4 className="font-medium mb-2">{category.category}</h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {category.phrases.map((phrase, j) => (
                                                        <div key={j} className="bg-slate-100 dark:bg-slate-800 p-2 rounded-md text-sm">
                                                            {phrase}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="sample" className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Sample Prompt</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md">{template.sampleEssay.prompt}</div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle>Sample Essay</CardTitle>
                                        <Badge variant="secondary">Score: {template.score}/30</Badge>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="prose prose-slate dark:prose-invert max-w-none">
                                            <p className="whitespace-pre-line">{template.sampleEssay.essay}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="practice" className="space-y-6">
                                <div className="text-center py-8">
                                    <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Practice with this template</h3>
                                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                                        Create a free account to practice with this template, receive AI feedback, and track your progress.
                                    </p>
                                    <Link href="/practice-questions">
                                        <Button>Create Free Account</Button>
                                    </Link>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex justify-between mb-4">
                                    <Button variant="outline" size="sm" className="w-[48%]">
                                        <Download className="h-4 w-4 mr-2" />
                                        Download
                                    </Button>
                                    <Button variant="outline" size="sm" className="w-[48%]">
                                        <Share2 className="h-4 w-4 mr-2" />
                                        Share
                                    </Button>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-amber-500">
                                            <Star className="h-4 w-4 fill-current" />
                                            <Star className="h-4 w-4 fill-current" />
                                            <Star className="h-4 w-4 fill-current" />
                                            <Star className="h-4 w-4 fill-current" />
                                            <Star className="h-4 w-4 stroke-amber-500 fill-amber-100" />
                                            <span className="ml-1 text-foreground">{template.rating}</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">{template.reviews} reviews</span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Badge variant="outline" className="h-8 w-8 rounded-full p-0 flex items-center justify-center">
                                                {template.score}
                                            </Badge>
                                            <span>Target Score</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-muted-foreground" />
                                            <span>{template.timeToComplete}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-muted-foreground"
                                            >
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                            </svg>
                                            <span>{template.wordCount}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-muted-foreground"
                                            >
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                            <span>{template.usedCount.toLocaleString()} uses</span>
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t">
                                        <div className="flex items-center gap-3 mb-3">
                                            {/* <Image
                                                src={template.authorImage || ""}
                                                alt={template.author}
                                                width={40}
                                                height={40}
                                                className="rounded-full"
                                            /> */}
                                            <Avatar>
                                                <AvatarFallback className="border">E</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-medium">{template.author}</div>
                                                <div className="text-sm text-muted-foreground">{template.authorRole}</div>
                                            </div>
                                        </div>
                                        <div className="text-sm text-muted-foreground">Last updated: {template.updatedAt}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Related Templates</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {template.relatedTemplates.map((related, i) => (
                                    <Link href={`/templates`} key={i} className="block">
                                        <div className="flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-md transition-colors">
                                            <div>
                                                <div className="font-medium">{related.title}</div>
                                                <div className="text-sm text-muted-foreground">Difficulty: {related.difficulty}</div>
                                            </div>
                                            <Badge variant="outline">{related.score}/30</Badge>
                                        </div>
                                    </Link>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            <footer className="border-t bg-slate-50 dark:bg-slate-950">
                <div className="container py-8">
                    <div className="text-sm text-muted-foreground text-center">
                        © {new Date().getFullYear()} TOEFL Master. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

