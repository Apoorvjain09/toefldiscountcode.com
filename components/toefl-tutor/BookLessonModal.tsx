'use client'

import * as React from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScheduleView } from './schedule-view'
import PaymentButton from '@/app/payment/RazorPayButton'

interface BookLessonModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    teacherAvatar?: string
    teacherName?: string
    availability: any;
    teacher_timezone: any;
}

export function BookLessonModal({
    open,
    onOpenChange,
    teacherAvatar = '/placeholder.svg?height=40&width=40',
    teacherName = 'Teacher',
    availability,
    teacher_timezone
}: BookLessonModalProps) {
    const [selectedTime, setSelectedTime] = React.useState<string | null>(null)
    const [ShowPaymetButton, setShowPaymetButton] = React.useState(false)
    const [userTimezone, setUserTimezone] = React.useState<string>("");
    const [userTimezoneOffset, setUserTimezoneOffset] = React.useState<string>("");

    React.useEffect(() => {
        // Retrieve user's timezone from localStorage
        const storedGeoData = localStorage.getItem("geoData");
        if (storedGeoData) {
            const geoData = JSON.parse(storedGeoData);
            setUserTimezone(geoData.timezone || "UTC");
            setUserTimezoneOffset(geoData.utcOffset || "");
        }
    }, []);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader className="flex-row items-center gap-3 space-y-0">
                    <Avatar>
                        <AvatarImage src={teacherAvatar} alt={teacherName} />
                        <AvatarFallback>{teacherName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <DialogTitle>Book a trial lesson</DialogTitle>
                        <p className="text-sm text-muted-foreground">
                            To discuss your level and learning plan
                        </p>
                    </div>
                </DialogHeader>
                <ScheduleView
                    availability={availability}
                    teacher_timezone={teacher_timezone}
                    user_timezone={userTimezone}
                    userTimezone_Offset={userTimezoneOffset}
                    onTimeSelect={setSelectedTime}
                />

                {ShowPaymetButton ? (
                    <div onClick={() => { onOpenChange(!open) }} className='mt-3'>
                        <PaymentButton id="pl_PkEvsU6n3Zx81j" />
                    </div>
                ) : (
                    <Button
                        className="w-full"
                        disabled={!selectedTime}
                        onClick={() => {
                            // Handle booking confirmation
                            console.log('Booking confirmed for:', selectedTime)
                            setShowPaymetButton(true)
                        }}
                    >
                        Continue
                    </Button>
                )}
            </DialogContent>
        </Dialog>
    )
}

