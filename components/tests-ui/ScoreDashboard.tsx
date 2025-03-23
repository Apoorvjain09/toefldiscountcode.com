"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { BookOpen, Headphones, Pen, Mic, Activity } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "../ui/Alert"
import { Line, LineChart as RechartsLineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface ScoreDashboardProps {
    totalScore: number
    totalScoreReading: number
    totalScoreListening: number
    writingScores: number
    speakingScores: number
    setReviewSectionSelect: (section: 'reading' | 'listening' | 'writing' | 'speaking') => void;
}

interface HistoricalData {
    date: string;
    score: number;
}

const ScoreDashboard: React.FC<ScoreDashboardProps> = ({
    totalScore,
    totalScoreReading,
    totalScoreListening,
    writingScores,
    speakingScores,
    setReviewSectionSelect
}) => {
    const [historicalData, setHistoricalData] = useState<HistoricalData[]>([]);

    useEffect(() => {
        const totalScore = totalScoreReading + totalScoreListening + writingScores + speakingScores;

        const storedData = localStorage.getItem("ToeflScoreHistoricalData");
        const parsedData: HistoricalData[] = storedData ? JSON.parse(storedData) : [];

        // Get today's date in YYYY-MM format
        const currentDate = new Date().toISOString().slice(0, 7);

        const latestEntry = parsedData[parsedData.length - 1];

        const isDuplicate = latestEntry?.date === currentDate && latestEntry?.score === totalScore;

        if (!isDuplicate) {
            const updatedData = [...parsedData, { date: currentDate, score: totalScore }];
            setHistoricalData(updatedData);
            localStorage.setItem("ToeflScoreHistoricalData", JSON.stringify(updatedData));
            console.log(historicalData)
        } else {
            setHistoricalData(parsedData);
        }

    }, [totalScoreReading, totalScoreListening, writingScores, speakingScores,]);

    const ScoreCard = ({ title, score, icon }: { title: string, score: number, icon: React.ReactNode }) => (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {title}
                </CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{score}/30</div>
                <Progress value={(score / 40) * 100} className="mt-2" />
                <Button
                    className="mt-5"
                    onClick={() => {
                        const section = title.toLowerCase();
                        if (section === "reading" || section === "listening" || section === "writing" || section === "speaking") setReviewSectionSelect(section);
                    }}
                >
                    Review Section
                </Button>
            </CardContent>
        </Card >
    )

    return (
        <Card className="w-full max-w-6xl mx-auto">
            <CardHeader >
                <CardTitle>Test Results : {totalScore}/120</CardTitle>
                <CardDescription>
                    View and analyze your performance across different skills
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-1 mb-4">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <ScoreCard
                                title="Reading"
                                score={totalScoreReading}
                                icon={<BookOpen className="h-4 w-4 text-muted-foreground" />}
                            />
                            <ScoreCard
                                title="Listening"
                                score={totalScoreListening}
                                icon={<Headphones className="h-4 w-4 text-muted-foreground" />}
                            />
                            <ScoreCard
                                title="Writing"
                                score={writingScores}
                                icon={<Pen className="h-4 w-4 text-muted-foreground" />}
                            />
                            <ScoreCard
                                title="Speaking"
                                score={speakingScores}
                                icon={<Mic className="h-4 w-4 text-muted-foreground" />}
                            />
                        </div>

                        <Card className="hidden sm:block mt-4">
                            <CardHeader>
                                <CardTitle>Overall Progress</CardTitle>
                            </CardHeader>
                            <CardContent className="max-w-full">
                                <ChartContainer
                                    config={{
                                        score: {
                                            label: "Score",
                                            color: "hsl(var(--chart-1))",
                                        },
                                    }}
                                    className="w-full sm:h-[300px]"
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
                </Tabs>
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