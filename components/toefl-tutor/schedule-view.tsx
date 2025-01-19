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
import { getAllTimezones, getTimezone, getCountry } from 'countries-and-timezones';

interface TimeSlot {
    from: string
    to: string
}

interface DaySchedule {
    day: string
    slots: TimeSlot[]
}

interface ScheduleViewProps {
    availability: any[];
    teacher_timezone: string;
    user_timezone: string;
    onTimeSelect: (time: string) => void;
    userTimezone_Offset: string;
}


export function ScheduleView({ availability, teacher_timezone, user_timezone, onTimeSelect, userTimezone_Offset }: ScheduleViewProps) {
    const [currentDate, setCurrentDate] = React.useState(new Date())
    const [selectedDuration, setSelectedDuration] = React.useState('25')
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null)
    const [selectedTime, setSelectedTime] = React.useState<string | null>(null)
    const [selectedTimezone, setSelectedTimezone] = React.useState('');
    const [timezoneOptions, setTimezoneOptions] = React.useState<string[]>([]);
    const [calculateTimeDifferenceStr, setCalculateTimeDifferenceStr] = React.useState<{
        teacherTime: string;
        userTime: string;
        offsetDifference: string;
    } | null>(null);


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

    function calculateTimeDifference(teacherTimezone: string, userTimezone: string) {
        // Get timezone data for teacher and user
        const teacherTimezoneData = getTimezone(teacherTimezone);
        const userTimezoneData = getTimezone(userTimezone);

        // Extract UTC offsets
        const teacherOffset = teacherTimezoneData?.utcOffset || 0; // Offset in minutes
        const userOffset = userTimezoneData?.utcOffset || 0;       // Offset in minutes

        // Calculate time difference
        const offsetDifference = userOffset - teacherOffset;

        // Get the current UTC time
        const now = new Date();
        const utcTime = now.getTime() + now.getTimezoneOffset() * 60000; // UTC in milliseconds

        // Calculate teacher and user local times
        const teacherTime = new Date(utcTime + teacherOffset * 60000);
        const userTime = new Date(utcTime + userOffset * 60000);

        // Return formatted times
        return {
            teacherTime: teacherTime.toLocaleString(),
            userTime: userTime.toLocaleString(),
            offsetDifference: `${offsetDifference / 60} hours`
        };
    }

    React.useEffect(() => {
        // Fetch all timezones and set options
        const timezones = Object.keys(getAllTimezones());
        setTimezoneOptions(timezones);

        const timeDifference = calculateTimeDifference(teacher_timezone, user_timezone);
        setCalculateTimeDifferenceStr(timeDifference);

        // console.log("Teacher Time:", result.teacherTime);
        // console.log("User Time:", result.userTime);
        // console.log("Offset Difference:", result.offsetDifference);
    }, []);



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
            <p className="text-sm text-muted-foreground flex items-center justify-center">
                <div className='w-[40%]'>
                    In your selected time zone:
                </div>
                <Select
                    onValueChange={(value) => setSelectedTimezone(value)}
                >
                    <SelectTrigger className="w-[60%]">
                        <SelectValue placeholder={user_timezone} />
                    </SelectTrigger>
                    <SelectContent>
                        {timezoneOptions.map((timezone: string, index: number) => {
                            // Get the country for the timezone
                            const timezoneData = getTimezone(timezone);
                            const country_tld = timezoneData?.countries?.[0] || 'Unknown Country';
                            const country_name = getCountry(country_tld)?.name || 'Unknown Country';
                            // const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
                            // console.log("timezoneName", timezoneName)
                            return (
                                <SelectItem key={index} value={timezone}>
                                    {/* {country_name} -  */}
                                    {timezone}
                                </SelectItem>
                            );
                        })}
                    </SelectContent>
                </Select>
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
                                {slots.map((slot, index) => {
                                    // Parse offsetDifference as a number
                                    const offset = calculateTimeDifferenceStr?.offsetDifference
                                        ? parseFloat(calculateTimeDifferenceStr.offsetDifference)
                                        : 0;

                                    const totalOffsetMinutes = offset * 60; // Convert hours to minutes

                                    // Convert slot.from and slot.to to adjusted times
                                    const [fromHours, fromMinutes] = slot.from.split(':').map(Number);
                                    const [toHours, toMinutes] = slot.to.split(':').map(Number);

                                    const fromDate = new Date();
                                    const toDate = new Date();

                                    // Set the original time
                                    fromDate.setHours(fromHours, fromMinutes);
                                    toDate.setHours(toHours, toMinutes);

                                    // Adjust by total offset in minutes
                                    const adjustedFromTime = new Date(fromDate.getTime() + totalOffsetMinutes * 60000);
                                    const adjustedToTime = new Date(toDate.getTime() + totalOffsetMinutes * 60000);

                                    // Format adjusted times
                                    const formattedFrom = `${String(adjustedFromTime.getHours()).padStart(2, '0')}:${String(adjustedFromTime.getMinutes()).padStart(2, '0')}`;
                                    const formattedTo = `${String(adjustedToTime.getHours()).padStart(2, '0')}:${String(adjustedToTime.getMinutes()).padStart(2, '0')}`;

                                    // Debugging Logs
                                    console.log(`Original From: ${slot.from}, To: ${slot.to}`);
                                    console.log(`Offset Difference (hours): ${offset}, Total Offset (minutes): ${totalOffsetMinutes}`);
                                    console.log(`Adjusted From: ${formattedFrom}, Adjusted To: ${formattedTo}`);

                                    return (
                                        <Button
                                            key={index}
                                            variant={selectedTime === slot.from ? "default" : "outline"}
                                            className="text-sm"
                                            onClick={() => {
                                                setSelectedTime(slot.from);
                                                onTimeSelect?.(slot.from);
                                            }}
                                        >
                                            {formattedFrom} - {formattedTo}
                                        </Button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

