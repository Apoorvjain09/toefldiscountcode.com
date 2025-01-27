"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MapPin, Trophy, UserCheck, ChevronUp, ChevronDown, Lightbulb } from "lucide-react"

interface University {
    universityName: string
    location: string
    ranking: number
    acceptanceRate: string
}

interface ShortlistProps {
    shortlistedUniversities: University[]
    profileRating: number
    improvements: string[]
}

export default function AfterUniversityShortlistFromOpenAI({ shortlistedUniversities, profileRating, improvements }: ShortlistProps) {
    const [sortColumn, setSortColumn] = useState<keyof University>("ranking")
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

    const sortedUniversities = [...shortlistedUniversities].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
        if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
        return 0
    })

    const handleSort = (column: keyof University) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
        } else {
            setSortColumn(column)
            setSortDirection("asc")
        }
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8 p-4">
            <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <CardTitle className="text-2xl font-bold">Your University Shortlist</CardTitle>
                    <CardDescription className="text-purple-100">Based on your profile and preferences</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                    <ScrollArea className="h-[400px] rounded-md">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[300px]">University</TableHead>
                                    <TableHead className="w-[200px]">Location</TableHead>
                                    <TableHead className="w-[100px] cursor-pointer" onClick={() => handleSort("ranking")}>
                                        Ranking
                                        {sortColumn === "ranking" &&
                                            (sortDirection === "asc" ? (
                                                <ChevronUp className="inline ml-1" />
                                            ) : (
                                                <ChevronDown className="inline ml-1" />
                                            ))}
                                    </TableHead>
                                    <TableHead className="w-[150px]">Acceptance Rate</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {sortedUniversities.map((uni, index) => (
                                    <TableRow key={index} className="hover:bg-purple-50 transition-colors">
                                        <TableCell className="font-medium">{uni.universityName}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center">
                                                <MapPin className="mr-2 h-4 w-4 text-purple-500" />
                                                {uni.location}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                                                <Trophy className="mr-1 h-3 w-3" />
                                                {uni.ranking}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{uni.acceptanceRate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </ScrollArea>
                </CardContent>
            </Card>

            <div className="grid gap-8 md:grid-cols-2">
                <Card>
                    <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
                        <CardTitle className="text-xl font-bold">Your Profile Rating</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Overall Score</span>
                            <span className="text-2xl font-bold">{profileRating.toFixed(1)}</span>
                        </div>
                        <Progress value={profileRating * 10} className="h-3" />
                        <p className="mt-2 text-sm text-gray-600">
                            Your profile is competitive for most of the universities on your shortlist.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-t-lg">
                        <CardTitle className="text-xl font-bold">Suggested Improvements</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <ul className="space-y-4">
                            {improvements.map((improvement, index) => (
                                <li key={index} className="flex items-start">
                                    <Lightbulb className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">{improvement}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>

            {/* <div className="flex justify-center">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <UserCheck className="mr-2 h-4 w-4" />
                    Apply Now
                </Button>
            </div> */}
        </div>
    )
}

