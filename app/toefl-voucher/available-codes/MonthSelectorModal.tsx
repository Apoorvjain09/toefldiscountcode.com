"use client"

import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, PartyPopper, ThumbsUp, Meh, Frown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

const reactions = [
    { emoji: PartyPopper, label: "Perfect", color: "text-green-500" },
    { emoji: ThumbsUp, label: "Good", color: "text-blue-500" },
    { emoji: Meh, label: "Okay", color: "text-yellow-500" },
    { emoji: Frown, label: "Tight", color: "text-red-500" },
]

export default function TOEFLMonthSelector() {
    const [selectedMonth, setSelectedMonth] = useState(0)
    const currentMonth = new Date().getMonth()

    // Calculate months from now
    const monthsFromNow = selectedMonth >= currentMonth ? selectedMonth - currentMonth : 12 - currentMonth + selectedMonth

    // Get appropriate reaction based on preparation time
    const getReaction = (months: number) => {
        if (months >= 6) return reactions[0]
        if (months >= 4) return reactions[1]
        if (months >= 2) return reactions[2]
        return reactions[3]
    }

    const reaction = getReaction(monthsFromNow)
    const ReactionIcon = reaction.emoji

    const handleMonthChange = (value: number) => {
        setSelectedMonth(value)
        localStorage.setItem("ToeflVoucher-userTentativeTestMonth", months[value])
    }

    return (
        <Card className="w-full max-w-3xl mx-auto p-6 space-y-6 bg-gradient-to-br from-pink-500 to-yellow-500 text-white">
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">When are you planning to take TOEFL?</h2>
                <p className="text-muted-foreground">Select your tentative exam month</p>
            </div>

            <div className="">
                <motion.div
                    className="bg-gradient-to-b from-black/5 to-black/0 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 pt-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    key={reaction.label}
                >
                    <div className={cn("p-3 rounded-full bg-white shadow-lg", reaction.color)}>
                        <ReactionIcon className="w-8 h-8" />
                    </div>
                    <span className="font-medium">{reaction.label}</span>
                    <span className="text-sm text-muted-foreground">{monthsFromNow} months to prepare</span>
                </motion.div>

                {/* Month slider */}
                <div className="pt-8">
                    <Slider
                        value={[selectedMonth]}
                        onValueChange={([value]) => handleMonthChange(value)}
                        max={11}
                        step={1}
                        className="w-full"
                    />

                    {/* Selected month indicator */}
                    <div className="flex items-center justify-center mt-4 gap-2 text-lg font-medium">
                        <Calendar className="w-5 h-5" />
                        {months[selectedMonth]}
                    </div>
                </div>
            </div>

            {/* Month markers */}
            <div className="grid grid-cols-4 gap-2 md:grid-cols-6 lg:grid-cols-12 text-sm text-center">
                {months.map((month, index) => (
                    <div
                        key={month}
                        className={cn(
                            "py-1 rounded cursor-pointer hover:bg-black/5 transition-colors",
                            selectedMonth === index && "bg-black/10 font-medium",
                        )}
                        onClick={() => setSelectedMonth(index)}
                    >
                        {month.slice(0, 3)}
                    </div>
                ))}
            </div>
        </Card>
    )
}

