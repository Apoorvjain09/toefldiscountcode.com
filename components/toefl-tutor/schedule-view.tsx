'use client'

import * as React from 'react'
import { format, addDays, startOfWeek, parse, isSameDay } from 'date-fns'
import { ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface TimeSlot {
    from: string
    to: string
}

interface DaySchedule {
    day: string
    slots: TimeSlot[]
}

interface ScheduleViewProps {
    availability: DaySchedule[]
    onTimeSelect?: (time: string) => void
}

export function ScheduleView({ availability, onTimeSelect }: ScheduleViewProps) {
    const [currentDate, setCurrentDate] = React.useState(new Date())
    const [selectedDuration, setSelectedDuration] = React.useState('25')
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null)
    const [selectedTime, setSelectedTime] = React.useState<string | null>(null)

    // Get the start of the week for the current date
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 })

    // Generate array of 7 days starting from weekStart
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

    const handlePreviousWeek = () => {
        setCurrentDate(addDays(currentDate, -7))
    }

    const handleNextWeek = () => {
        setCurrentDate(addDays(currentDate, 7))
    }

    // Group time slots by time of day
    const groupTimeSlots = (slots: TimeSlot[]) => {
        const groups: Record<string, TimeSlot[]> = {
            Morning: [],
            Afternoon: [],
            Evening: []
        }

        slots.forEach(slot => {
            const hour = parseInt(slot.from.split(':')[0])
            if (hour < 12) {
                groups.Morning.push(slot)
            } else if (hour < 17) {
                groups.Afternoon.push(slot)
            } else {
                groups.Evening.push(slot)
            }
        })

        return Object.entries(groups).filter(([_, slots]) => slots.length > 0)
    }

    return (
        <div className="space-y-6">
            {/* Duration selector */}
            <div className="grid grid-cols-2 gap-4">
                <Button
                    variant={selectedDuration === '25' ? 'default' : 'outline'}
                    onClick={() => setSelectedDuration('25')}
                    className="w-full"
                >
                    25 mins
                </Button>
                <Button
                    variant={selectedDuration === '50' ? 'default' : 'outline'}
                    onClick={() => setSelectedDuration('50')}
                    className="w-full"
                >
                    50 mins
                </Button>
            </div>

            {/* Week navigation */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handlePreviousWeek}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-medium">
                        {format(weekStart, "MMM d")}-{format(addDays(weekStart, 6), "d, yyyy")}
                    </span>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleNextWeek}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Calendar */}
            <div className="grid grid-cols-7 gap-2 text-center">
                {weekDays.map((day, index) => (
                    <Button
                        key={index}
                        variant={isSameDay(day, selectedDate || new Date()) ? "default" : "ghost"}
                        className="flex flex-col items-center p-2 h-auto"
                        onClick={() => setSelectedDate(day)}
                    >
                        <div className="text-xs font-normal">{format(day, 'EEE')}</div>
                        <div className="text-sm font-medium">{format(day, 'd')}</div>
                    </Button>
                ))}
            </div>

            {/* Timezone info */}
            <p className="text-sm text-muted-foreground">
                In your time zone, Asia/Kolkata (GMT +5:30)
            </p>

            {/* Time slots */}
            {selectedDate && (
                <div className="space-y-4">
                    {groupTimeSlots(
                        availability.find(
                            schedule => schedule.day === format(selectedDate, 'EEEE')
                        )?.slots || []
                    ).map(([timeOfDay, slots]) => (
                        <div key={timeOfDay} className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                {timeOfDay === 'Evening' ? (
                                    <Moon className="h-4 w-4" />
                                ) : (
                                    <Sun className="h-4 w-4" />
                                )}
                                {timeOfDay}
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {slots.map((slot, index) => (
                                    <Button
                                        key={index}
                                        variant={selectedTime === slot.from ? "default" : "outline"}
                                        className="text-sm"
                                        onClick={() => {
                                            setSelectedTime(slot.from)
                                            onTimeSelect?.(slot.from)
                                        }}
                                    >
                                        {slot.from}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

