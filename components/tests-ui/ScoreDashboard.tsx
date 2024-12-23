"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Skeleton } from "@/components/ui/skeleton"
import { BookOpen, Headphones, Pen, Mic, BarChart, PieChart, LineChart, Activity } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "../ui/Alert"
import { Bar, BarChart as RechartsBarChart, Line, LineChart as RechartsLineChart, Pie, PieChart as RechartsPieChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface ScoreDashboardProps {
    totalScoreReading: number
    totalScoreListening: number
    writingScores: number
    speakingScores: number
    // historicalData: { date: string; score: number }[]
    // skillBreakdown: { skill: string; score: number }[]
}

interface HistoricalData {
    date: string;
    score: number;
}

interface SkillScore {
    skill: string;
    score: number;
}

const ScoreDashboard: React.FC<ScoreDashboardProps> = ({
    totalScoreReading,
    totalScoreListening,
    writingScores,
    speakingScores,
}) => {
    const [loading, setLoading] = useState(false)
    const [selectedTimeRange, setSelectedTimeRange] = useState("1M")
    const [historicalData, setHistoricalData] = useState<HistoricalData[]>([]);
    const [skillBreakdown, setSkillBreakdown] = useState<SkillScore[]>([]);

    // Simulating data 
    // useEffect(() => {
    //         setScores({
    //             historicalData: [
    //                 { date: "2023-01", score: 70 },
    //                 { date: "2023-02", score: 72 },
    //                 { date: "2023-03", score: 75 },
    //                 { date: "2023-04", score: 78 },
    //                 { date: "2023-05", score: 80 },
    //                 { date: "2023-06", score: 82 },
    //             ],
    //             skillBreakdown: [
    //                 { skill: "Grammar", score: 85 },
    //                 { skill: "Vocabulary", score: 78 },
    //                 { skill: "Comprehension", score: 82 },
    //                 { skill: "Fluency", score: 76 },
    //             ],
    //         })
    //         setLoading(false)
    //     }, 1500)
    // }, [])

    useEffect(() => {
        const totalScore = totalScoreReading + totalScoreListening + writingScores + speakingScores;

        // Load historical data from localStorage
        const storedData = localStorage.getItem("ToeflScoreHistoricalData");
        const parsedData: HistoricalData[] = storedData ? JSON.parse(storedData) : [];

        // Get today's date in YYYY-MM format
        const currentDate = new Date().toISOString().slice(0, 7);

        // Check if the current date and score already exist
        const isDuplicate = parsedData.some(
            (entry) => entry.date === currentDate && entry.score === totalScore
        );

        // If not a duplicate, append the new score
        if (!isDuplicate) {
            const updatedData = [
                ...parsedData.filter(
                    (entry) => !(entry.date === currentDate && entry.score !== totalScore)
                ),
                { date: currentDate, score: totalScore },
            ];

            // Update state and localStorage
            setHistoricalData(updatedData);
            localStorage.setItem("ToeflScoreHistoricalData", JSON.stringify(updatedData));
        }

        // Grammar: 40% Speaking, 40% Writing, 20% Reading
        const grammarScore = Math.round(
            0.4 * speakingScores +
            0.4 * writingScores +
            0.2 * totalScoreReading
        );

        // Vocabulary: 50% Speaking, 50% Writing
        const vocabularyScore = Math.round(
            0.5 * speakingScores + 0.5 * writingScores
        );

        // Comprehension: 60% Reading, 40% Writing
        const comprehensionScore = Math.round(
            0.6 * totalScoreReading + 0.4 * writingScores
        );

        // Fluency: 100% Speaking
        const fluencyScore = Math.round(speakingScores);

        // Skill Breakdown
        const calculatedSkillBreakdown: SkillScore[] = [
            { skill: "Grammar", score: grammarScore },
            { skill: "Vocabulary", score: vocabularyScore },
            { skill: "Comprehension", score: comprehensionScore },
            { skill: "Fluency", score: fluencyScore },
        ];

        setSkillBreakdown(calculatedSkillBreakdown);
    }, [
        totalScoreReading,
        totalScoreListening,
        writingScores,
        speakingScores,
    ]);

    const ScoreCard = ({ title, score, icon, description }: { title: string, score: number, icon: React.ReactNode, description: string }) => (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {title}
                </CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{score}/40</div>
                <Progress value={(score / 40) * 100} className="mt-2" />
                <HoverCard>
                    <HoverCardTrigger className="text-sm text-muted-foreground cursor-help">
                        More info
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <p>{description}</p>
                    </HoverCardContent>
                </HoverCard>
            </CardContent>
        </Card>
    )

    return (
        <Card className="w-full max-w-6xl mx-auto">
            <CardHeader>
                <CardTitle>Your Score Dashboard</CardTitle>
                <CardDescription>View and analyze your performance across different skills</CardDescription>
            </CardHeader>
            <CardContent>
                {loading ? (
                    <div className="space-y-4">
                        <Skeleton className="h-[125px] w-full" />
                        <Skeleton className="h-[125px] w-full" />
                        <Skeleton className="h-[125px] w-full" />
                        <Skeleton className="h-[125px] w-full" />
                    </div>
                ) : (
                    <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-4 mb-4">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="details">Details</TabsTrigger>
                            <TabsTrigger value="history">History</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                <ScoreCard
                                    title="Reading"
                                    score={totalScoreReading}
                                    icon={<BookOpen className="h-4 w-4 text-muted-foreground" />}
                                    description="Your ability to understand written English"
                                />
                                <ScoreCard
                                    title="Listening"
                                    score={totalScoreListening}
                                    icon={<Headphones className="h-4 w-4 text-muted-foreground" />}
                                    description="Your ability to understand spoken English"
                                />
                                <ScoreCard
                                    title="Writing"
                                    score={writingScores}
                                    icon={<Pen className="h-4 w-4 text-muted-foreground" />}
                                    description="Your ability to write in English"
                                />
                                <ScoreCard
                                    title="Speaking"
                                    score={speakingScores}
                                    icon={<Mic className="h-4 w-4 text-muted-foreground" />}
                                    description="Your ability to speak in English"
                                />
                            </div>
                            <Card className="mt-4">
                                <CardHeader>
                                    <CardTitle>Overall Progress</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer
                                        config={{
                                            score: {
                                                label: "Score",
                                                color: "hsl(var(--chart-1))",
                                            },
                                        }}
                                        className="h-[300px]"
                                    >
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RechartsLineChart data={historicalData}>
                                                <XAxis dataKey="date" />
                                                <YAxis />
                                                <ChartTooltip content={<ChartTooltipContent />} />
                                                <Line type="monotone" dataKey="score" stroke="black" strokeWidth={2} />
                                            </RechartsLineChart>
                                        </ResponsiveContainer>
                                    </ChartContainer>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="details">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Detailed Score Analysis</CardTitle>
                                    <CardDescription>A deeper look into your performance</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer
                                        config={{
                                            score: {
                                                label: "Score",
                                                color: "#4caf50",
                                            },
                                        }}
                                        className="h-[300px]"
                                    >
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RechartsBarChart data={[
                                                { category: "Reading", score: totalScoreReading },
                                                { category: "Listening", score: totalScoreListening },
                                                { category: "Writing", score: writingScores },
                                                { category: "Speaking", score: speakingScores },
                                            ]}>
                                                <XAxis dataKey="category" />
                                                <YAxis />
                                                <ChartTooltip content={<ChartTooltipContent />} />
                                                <Bar dataKey="score" fill="#4caf50" />
                                            </RechartsBarChart>
                                        </ResponsiveContainer>
                                    </ChartContainer>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="history">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <div>
                                        <CardTitle>Historical Performance</CardTitle>
                                        <CardDescription>Your score trends over time</CardDescription>
                                    </div>
                                    <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select time range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1M">Last Month</SelectItem>
                                            <SelectItem value="3M">Last 3 Months</SelectItem>
                                            <SelectItem value="6M">Last 6 Months</SelectItem>
                                            <SelectItem value="1Y">Last Year</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer
                                        config={{
                                            score: {
                                                label: "Score",
                                                color: "#4caf50",
                                            },
                                        }}
                                        className="h-[300px]"
                                    >
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RechartsLineChart data={historicalData}>
                                                <XAxis dataKey="date" />
                                                <YAxis />
                                                <ChartTooltip content={<ChartTooltipContent />} />
                                                <Line type="monotone" dataKey="score" stroke="black" strokeWidth={2} />
                                            </RechartsLineChart>
                                        </ResponsiveContainer>
                                    </ChartContainer>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="skills">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Skill Breakdown</CardTitle>
                                    <CardDescription>Your performance across different skills</CardDescription>
                                </CardHeader>
                                <CardContent className="flex justify-center">
                                    <ChartContainer
                                        config={{
                                            score: {
                                                label: "Score",
                                                color: "hsl(var(--chart-1))",
                                            },
                                        }}
                                        className="h-[300px] w-[300px]"
                                    >
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RechartsPieChart>
                                                <Pie
                                                    data={skillBreakdown}
                                                    dataKey="score"
                                                    nameKey="skill"
                                                    cx="50%"
                                                    cy="50%"
                                                    outerRadius={80}
                                                    fill="var(--color-score)"
                                                    label
                                                />
                                                <ChartTooltip content={<ChartTooltipContent />} />
                                                <Legend />
                                            </RechartsPieChart>
                                        </ResponsiveContainer>
                                    </ChartContainer>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                )}
                <Alert className="mt-4">
                    <Activity className="h-4 w-4" />
                    <AlertTitle>Tip</AlertTitle>
                    <AlertDescription>
                        Keep practicing regularly to improve your scores across all skills!
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
    )
}

export default ScoreDashboard;