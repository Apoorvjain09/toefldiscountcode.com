"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { motion } from "framer-motion";

type ClassItem = {
    date: string
    time: string
    duration: string
    subject: string
}
const classData: ClassItem[] = [
    { date: '3rd April 2025', time: '6 pm to 7:30 pm', duration: '1.5 hrs', subject: 'SAT' },
    { date: '3rd April 2025', time: '6 pm to 7:30 pm', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '4th April 2025', time: '7 am to 8:30 am', duration: '1.5 hrs', subject: 'Duolingo' },
    { date: '5th April 2025', time: '7 am to 8:30 am', duration: '1.5 hrs', subject: 'German A1' },
    { date: '5th April 2025', time: '7:30 am to 9 am', duration: '1.5 hrs', subject: 'GRE/GMAT' },
    { date: '5th April 2025', time: '10 pm to 11:30 pm', duration: '1.5 hrs', subject: 'PTE' },
    { date: '8th April 2025', time: '8 pm to 9:30 pm', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '10th April 2025', time: '2:30 pm to 4 pm', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '11th April 2025', time: '6 pm to 7:30 pm', duration: '1.5 hrs', subject: 'TOEFL' },
    { date: '12th April 2025', time: '8 am to 9:30 am', duration: '1.5 hrs', subject: 'IELTS' },

    // June 2025 Schedule
    { date: '3rd June 2025', time: '8:00 am to 9:30 am', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '4th June 2025', time: '10:00 pm to 11:30 pm', duration: '1.5 hrs', subject: 'PTE' },
    { date: '5th June 2025', time: '7:00 am to 8:30 am', duration: '1.5 hrs', subject: 'GRE/GMAT' },
    { date: '6th June 2025', time: '8:00 pm to 9:30 pm', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '7th June 2025', time: '7:00 am to 8:30 am', duration: '1.5 hrs', subject: 'Duolingo' },
    { date: '10th June 2025', time: '10:00 pm to 11:30 pm', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '11th June 2025', time: '6:00 pm to 7:30 pm', duration: '1.5 hrs', subject: 'PTE' },
    { date: '12th June 2025', time: '8:00 pm to 9:30 pm', duration: '1.5 hrs', subject: 'SAT' },
    { date: '14th June 2025', time: '8:00 pm to 9:30 pm', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '17th June 2025', time: '6:00 pm to 7:30 pm', duration: '1.5 hrs', subject: 'TOEFL' },
    { date: '18th June 2025', time: '8:00 am to 9:30 am', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '18th June 2025', time: '8:00 pm to 9:30 pm', duration: '1.5 hrs', subject: 'GRE/GMAT' },
    { date: '21st June 2025', time: '6:00 pm to 7:30 pm', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '21st June 2025', time: '8:00 am to 9:30 am', duration: '1.5 hrs', subject: 'PTE' },
    { date: '21st June 2025', time: '10:00 pm to 11:30 pm', duration: '1.5 hrs', subject: 'Duolingo' },
    { date: '24th June 2025', time: '6:00 pm to 7:30 pm', duration: '1.5 hrs', subject: 'SAT' },
    { date: '25th June 2025', time: '2:30 pm to 4:00 pm', duration: '1.5 hrs', subject: 'IELTS' },
    { date: '28th June 2025', time: '8:00 pm to 9:30 pm', duration: '1.5 hrs', subject: 'IELTS' },
];

export function ClassesCalanderView() {
    const [currentMonth, setCurrentMonth] = React.useState(new Date())

    const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
    const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))

    const monthName = currentMonth.toLocaleString("default", { month: "long" })
    const year = currentMonth.getFullYear()

    const daysInMonth = new Date(year, currentMonth.getMonth() + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, currentMonth.getMonth(), 1).getDay()

    const startingDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

    const days = []
    for (let i = 0; i < startingDay; i++) days.push(null)
    for (let i = 1; i <= daysInMonth; i++) days.push(i)

    return (
        <div className="m-4 sm:m-8">
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-xl sm:text-2xl font-bold">
                    {monthName} {year}
                </h2>
                <div className="flex gap-1 sm:gap-2">
                    <Button variant="outline" size="icon" onClick={prevMonth}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={nextMonth}>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <Card className="overflow-auto">
                <CardContent className="p-2 sm:p-6">
                    <div className="grid grid-cols-7 gap-1 sm:gap-2">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                            <div key={day} className="text-center font-medium text-xs sm:text-sm p-1 sm:p-2">
                                {day}
                            </div>
                        ))}

                        {days.map((day, index) => {
                            const events = classData.filter((event) => {
                                const [eventDay, eventMonth] = event.date.split(" ").slice(0, 2)
                                return (
                                    parseInt(eventDay) === day &&
                                    eventMonth === monthName &&
                                    event.date.includes(year.toString())
                                )
                            })

                            return (
                                <div
                                    key={index}
                                    className={`min-h-20 sm:min-h-24 border rounded-md p-1 text-xs sm:text-sm ${day ? "bg-card" : "bg-muted/20"}`}
                                >
                                    {day && (
                                        <>
                                            <div className="text-right text-xs sm:text-sm p-1">{day}</div>
                                            <div className="flex flex-col gap-0.5">
                                                {events.map((event, eventIndex) => (
                                                    <div className="overflow-hidden">
                                                        <HoverCard key={eventIndex}>
                                                            <HoverCardTrigger asChild>
                                                                <CalendarEvent course={event.subject} />
                                                            </HoverCardTrigger>
                                                            <HoverCardContent className="text-xs sm:text-sm">
                                                                <p><strong>Time:</strong> {event.time}</p>
                                                            </HoverCardContent>
                                                        </HoverCard>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

function CalendarEvent({ course }: { course: string }) {
    const colorMap: Record<string, string> = {
        PTE: "bg-blue-100 text-blue-800",
        IELTS: "bg-green-100 text-green-800",
        "GRE/GMAT": "bg-purple-100 text-purple-800",
        "German A1": "bg-yellow-100 text-yellow-800",
        SAT: "bg-red-100 text-red-800",
        Duolingo: "bg-emerald-100 text-emerald-800",
        TOEFL: "bg-indigo-100 text-indigo-800",
    }

    return (
        <div className="relative w-full overflow-hidden whitespace-nowrap">
            <motion.div
                className="flex w-max"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                }}
            >
                {[...Array(2)].map((_, i) => (
                    <Badge key={i} className={`text-[10px] sm:text-xs px-2 py-1 sm:ml-8 ${colorMap[course] || ""}`}>
                        {course}
                    </Badge>
                ))}
            </motion.div>
        </div>
    )
}
