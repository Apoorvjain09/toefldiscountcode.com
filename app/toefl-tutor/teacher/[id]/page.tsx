"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, CheckCircle, Clock, Heart, CloudLightningIcon as Lightning, MessageCircle, PlayCircle, Star, Users } from 'lucide-react'
import * as React from "react"
import { usePathname } from "next/navigation"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { format, addDays, startOfWeek } from 'date-fns'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookLessonModal } from "@/components/toefl-tutor/BookLessonModal"
import { userAgent } from "next/server"


type Tutor = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    countryOfBirth: string;
    studentsTaught: string;
    teachingHours: string;
    photoLink: string;
    description?: {
        introduction: string;
        teachingExperience: string;
        motivation: string;
        title: string;
    };
    certifications?: Array<{
        certifyingOrg: string;
        certificateName: string;
        yearStart: string;
        yearEnd: string;
    }>;
    education?: Array<{
        university: string;
        degree: string;
        degreeType?: string;
        specialization?: string;
        yearStart?: string;
        yearEnd?: string;
    }>;
    video?: string;
    timezone?: string;
    availability?: Array<{
        day: string;
        slots: Array<{ from: string; to: string }>;
    }>;
    hourlyRate: number;
};

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
}


export default function TeacherProfile() {
    const pathname = usePathname(); // Get the current URL path
    const tutorId = pathname.split("/").pop(); // Extract the last part of the path
    const [teacher, setTeacher] = React.useState<Tutor | null>(null);
    const [showFullDescription, setShowFullDescription] = React.useState(false);
    const [currentDate, setCurrentDate] = React.useState(new Date())
    const [selectedDuration, setSelectedDuration] = React.useState('25')
    const [open, setOpen] = React.useState(false)
    const currencyMap: { [key: string]: string } = {
        US: "USD", // United States
        CA: "CAD", // Canada
        IN: "INR", // India
        GB: "GBP", // United Kingdom
        AU: "AUD", // Australia
        NZ: "NZD", // New Zealand
        JP: "JPY", // Japan
        CN: "CNY", // China
        KR: "KRW", // South Korea
        DE: "EUR", // Germany (Eurozone)
        FR: "EUR", // France (Eurozone)
        ES: "EUR", // Spain (Eurozone)
        IT: "EUR", // Italy (Eurozone)
        NL: "EUR", // Netherlands (Eurozone)
        BR: "BRL", // Brazil
        RU: "RUB", // Russia
        ZA: "ZAR", // South Africa
        SG: "SGD", // Singapore
        MX: "MXN", // Mexico
        SE: "SEK", // Sweden
        NO: "NOK", // Norway
        CH: "CHF", // Switzerland
        AE: "AED", // United Arab Emirates
        SA: "SAR", // Saudi Arabia
    };
    const [convertedRate, setConvertedRate] = React.useState<string>(""); // Initialize with an empty string
    const [userCurrency, setUserCurrency] = React.useState<string>(""); // Default to USD

    React.useEffect(() => {
        if (!tutorId) return;

        const fetchTutorFromLocalStorage = async () => {
            try {
                const storedTutors = localStorage.getItem("tutors");
                const storedCurrencyData = localStorage.getItem("currencyData");
                const storedGeoData = localStorage.getItem("geoData");

                if (storedTutors && storedCurrencyData && storedGeoData) {
                    const tutors: Tutor[] = JSON.parse(storedTutors);
                    const tutorDetails = tutors.find((tutor) => tutor.id === tutorId);

                    if (tutorDetails) {
                        setTeacher(tutorDetails);

                        const currencyData = JSON.parse(storedCurrencyData);
                        const geoData = JSON.parse(storedGeoData);
                        const userCountry = geoData.country;
                        const userCurrency = currencyMap[userCountry] || "USD";

                        setUserCurrency(userCurrency);

                        const conversionRate = currencyData.rates[userCurrency];
                        const convertedRate = conversionRate
                            ? (tutorDetails.hourlyRate * conversionRate).toFixed(2)
                            : tutorDetails.hourlyRate.toFixed(2);

                        setConvertedRate(convertedRate);

                        console.log(`Converted Rate: ${convertedRate}`);
                        console.log(`User Currency: ${userCurrency}`);
                    } else {
                        console.log("Tutor not found in local storage.");
                    }
                } else {
                    console.log("No tutors, currency data, or geo data in local storage.");
                }
            } catch (error) {
                console.error("Error fetching tutor or data:", error);
            }
        };

        fetchTutorFromLocalStorage();
    }, [tutorId]);

    if (!teacher) {
        return <div>Loading...</div>;
    }

    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 })
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))
    const handlePreviousWeek = () => {
        setCurrentDate(addDays(currentDate, -7))
    }
    const handleNextWeek = () => {
        setCurrentDate(addDays(currentDate, 7))
    }

    return (
        <div className="container mx-auto py-8 px-4 sm:px-8">
            <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={teacher.photoLink} alt="Teacher" />
                            <AvatarFallback>{teacher.firstName[0]} {teacher.lastName[0]}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl font-bold">{teacher.firstName} {teacher.lastName}</h1>
                                <Badge variant="secondary" className="h-6">
                                    <span className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4" />
                                        Verified
                                    </span>
                                </Badge>
                            </div>
                            <p className="text-muted-foreground">
                                {teacher.certifications && teacher.certifications.length > 0
                                    ? teacher.certifications
                                        .map(
                                            (cert) =>
                                                `${cert.certificateName} (${cert.certifyingOrg}, ${cert.yearStart}–${cert.yearEnd})`
                                        )
                                        .join(", ")
                                    : "No certifications available."}
                            </p>
                        </div>
                    </div>

                    <Card>
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                                        Professional
                                    </Badge>
                                    <div>
                                        <p>{teacher.firstName} {teacher.lastName} is a <span className="font-semibold">highly qualified</span> tutor with a verified teaching certificate.</p>
                                        {/* <Button variant="link" className="h-auto p-0">
                                            Learn more
                                        </Button> */}
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                                        Super Tutor
                                    </Badge>
                                    <div>
                                        <p>{teacher.firstName} {teacher.lastName} is a <span className="font-semibold">highly rated</span> and experienced tutor.</p>
                                        {/* <Button variant="link" className="h-auto p-0">
                                            Learn more
                                        </Button> */}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <h2 className="text-xl font-semibold">About me</h2>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {teacher.description && (
                                <div>
                                    <p className={showFullDescription ? "block" : "line-clamp-5"}>
                                        {teacher.description.introduction}{" "}
                                        {teacher.description.teachingExperience && ` ${teacher.description.teachingExperience}`}
                                        {teacher.description.motivation}{" "}
                                    </p>
                                    <Button
                                        variant="link"
                                        className="h-auto p-0"
                                        onClick={() => setShowFullDescription((prev) => !prev)}
                                    >
                                        {showFullDescription ? "Show less" : "Show more"}
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="w-full max-w-4xl mx-auto">
                        <CardHeader>
                            <CardTitle>Schedule</CardTitle>
                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                Choose the time for your first lesson. The timings are displayed in your local timezone.
                            </p>
                        </CardHeader>
                        <CardContent>
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
                                    <div className="flex items-center space-x-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={handlePreviousWeek}
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={handleNextWeek}
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                        <span className="text-sm font-medium">
                                            {format(weekStart, "MMM d")}-{format(addDays(weekStart, 6), "d, yyyy")}
                                        </span>
                                    </div>

                                    {/* Timezone selector */}
                                    <Select defaultValue="Asia/Kolkata">
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select timezone" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Asia/Kolkata">
                                                Asia/Kolkata (GMT +5:30)
                                            </SelectItem>
                                            {/* Add more timezone options as needed */}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Weekly calendar */}
                                <div className="grid grid-cols-7 gap-4">
                                    {weekDays.map((day, index) => {
                                        const dayName = format(day, 'EEE');
                                        const dayNumber = format(day, 'd');
                                        const daySchedule = teacher?.availability?.find(
                                            (schedule) => schedule.day === format(day, 'EEEE')
                                        );
                                        return (
                                            <div key={index} className="space-y-2">
                                                <div className="text-center">
                                                    <div className="font-medium">{dayName}</div>
                                                    <div className="text-sm text-muted-foreground">{dayNumber}</div>
                                                </div>
                                                <div className="space-y-1">
                                                    {daySchedule?.slots.map((slot, slotIndex) => (
                                                        <Button
                                                            key={slotIndex}
                                                            variant="outline"
                                                            className="w-full text-xs"
                                                        >
                                                            {slot.from}
                                                        </Button>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Resume</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="education" className="w-full">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="education">Education</TabsTrigger>
                                    <TabsTrigger value="certifications">Certifications</TabsTrigger>
                                </TabsList>
                                {/* Education Tab */}
                                <TabsContent value="education" className="mt-6">
                                    <div className="space-y-8">
                                        {teacher.education && teacher.education.length > 0 ? (
                                            teacher.education.map((edu, index) => (
                                                <div key={index} className="flex flex-col space-y-2">
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <h3 className="font-semibold">{edu.university}</h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                {edu.degree}
                                                                {edu.specialization ? ` in ${edu.specialization}` : ""}
                                                            </p>
                                                        </div>
                                                        <span className="text-sm text-muted-foreground">
                                                            {edu.yearStart} — {edu.yearEnd || "Present"}
                                                        </span>
                                                    </div>
                                                    <Badge variant="secondary" className="w-fit flex items-center gap-1.5">
                                                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                                                        {/* Diploma  */}
                                                        Education
                                                        verified
                                                    </Badge>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-muted-foreground">No education details available.</p>
                                        )}
                                    </div>
                                </TabsContent>
                                {/* Certifications Tab */}
                                <TabsContent value="certifications" className="mt-6">
                                    <div className="space-y-8">
                                        {teacher.certifications && teacher.certifications.length > 0 ? (
                                            teacher.certifications.map((cert, index) => (
                                                <div key={index} className="flex flex-col space-y-2">
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <h3 className="font-semibold">{cert.certificateName}</h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                {cert.certifyingOrg}
                                                            </p>
                                                        </div>
                                                        <span className="text-sm text-muted-foreground">
                                                            {cert.yearStart} — {cert.yearEnd || "Present"}
                                                        </span>
                                                    </div>
                                                    <Badge variant="secondary" className="w-fit flex items-center gap-1.5">
                                                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                                                        Certificate verified
                                                    </Badge>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-muted-foreground">No certifications available.</p>
                                        )}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>

                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Video Preview */}
                    <Card className="relative aspect-video overflow-hidden">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ovPHVIoqoH8wVA2GYf6oxz3L7UD5IN.png"
                            alt="Teacher introduction video thumbnail"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <PlayCircle className="h-16 w-16 text-white" />
                        </div>
                    </Card>

                    {/* Stats */}
                    <Card>
                        <CardContent className="pt-6">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="flex items-center justify-center gap-1">
                                        <Star className="h-5 w-5 text-yellow-400" />
                                        <span className="text-xl font-bold">5</span>
                                    </div>
                                    {/* <p className="text-sm text-muted-foreground">52 reviews</p> */}
                                    <p className="text-sm text-muted-foreground">star rating</p>
                                </div>
                                <div>
                                    {/* <div className="text-xl font-bold">3270</div>
                                    <p className="text-sm text-muted-foreground">lessons</p> */}
                                    <div className="text-xl font-bold">{Number(teacher.studentsTaught) > 1000 ? "1000+" : teacher.studentsTaught} </div>
                                    <p className="text-sm text-muted-foreground">students taught</p>
                                </div>
                                <div>
                                    <div className="text-xl font-bold">{convertedRate} {userCurrency}</div>
                                    <p className="text-sm text-muted-foreground">50-min lesson</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <Button onClick={() => setOpen(true)} className="w-full" size="lg">
                            <Lightning className="mr-2 h-4 w-4" />
                            Book trial lesson
                        </Button>
                        <Button variant="outline" className="w-full" size="lg">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Send message
                        </Button>
                        <Button variant="outline" className="w-full" size="lg">
                            <Heart className="mr-2 h-4 w-4" />
                            Save to my list
                        </Button>
                        <BookLessonModal
                            open={open}
                            onOpenChange={setOpen}
                            availability={teacher.availability}
                        />
                    </div>

                    {/* Activity Status */}
                    <Card>
                        <CardContent className="pt-6 space-y-4">
                            <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="bg-green-100 text-green-700">
                                    Super popular
                                </Badge>
                                <p className="text-sm text-muted-foreground">
                                    17 new contacts and 18 lesson bookings in the last 48 hours
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">
                                    Usually responds in 4 hrs
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

