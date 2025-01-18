"use client"

import * as React from "react"
import { Search, Globe2, ChevronDown, Heart, Star, Users, MessageCircle, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"
import { BookLessonModal } from "@/components/toefl-tutor/BookLessonModal"

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
    detailsVerified: boolean;
};

export default function TutorListing() {
    const [open, setOpen] = React.useState(false)
    const [tutors, setTutors] = React.useState<Tutor[]>([]); // Explicitly typing the state
    const [showNotification, setShowNotification] = React.useState(false);
    const [userCurrency, setUserCurrency] = React.useState<string>("USD");
    const [currencyRates, setCurrencyRates] = React.useState<{ [key: string]: number } | null>(null);
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

    React.useEffect(() => {
        const head = document.head;

        const fontLink = document.createElement("link");
        fontLink.rel = "stylesheet";
        fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@100..900&family=Signika:wght@300..700&display=swap";

        head.appendChild(fontLink);

        return () => {
            head.removeChild(fontLink);
        };
    }, []);

    React.useEffect(() => {
        const fetchTutors = async () => {
            try {
                const storedTutors = localStorage.getItem("tutors");
                const prevLogInTime = localStorage.getItem("prev_logIn_time");
                const currentTime = new Date().getTime();

                if (storedTutors !== null && prevLogInTime) {
                    const timeDifference = currentTime - parseInt(prevLogInTime, 10);

                    // If the data is older than 24 hours, fetch fresh data
                    if (timeDifference > 24 * 60 * 60 * 1000) {
                        console.log("Local storage data is outdated. Fetching new data...");
                        const querySnapshot = await getDocs(collection(db, "tutors"));
                        const tutorData: Tutor[] = querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        })) as Tutor[];
                        setTutors(tutorData);
                        localStorage.setItem("tutors", JSON.stringify(tutorData));
                        localStorage.setItem("prev_logIn_time", currentTime.toString());
                        console.log("Fetched new tutors and updated local storage");
                    } else {
                        setTutors(JSON.parse(storedTutors));
                        console.log("Loaded tutors from local storage");
                    }
                } else {
                    console.log("No previous data found. Fetching new data...");
                    const querySnapshot = await getDocs(collection(db, "tutors"));
                    const tutorData: Tutor[] = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    })) as Tutor[];
                    setTutors(tutorData);
                    localStorage.setItem("tutors", JSON.stringify(tutorData));
                    localStorage.setItem("prev_logIn_time", currentTime.toString());
                    console.log("Fetched tutors from database and saved to local storage");
                }
            } catch (error) {
                console.error("Error fetching tutors:", error);
            }
        };

        fetchTutors();
    }, []);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowNotification(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    React.useEffect(() => {
        const fetchUserLocationAndCurrency = async () => {
            try {
                const storedCurrencyData = localStorage.getItem("currencyData");
                const storedGeoData = localStorage.getItem("geoData");
                const storedLogInTime = localStorage.getItem("Old_LogIN_time");

                const currentTime = new Date().getTime();
                localStorage.setItem("New_LogIN_time", currentTime.toString());

                if (storedCurrencyData && storedGeoData && storedLogInTime) {
                    const logInTimeDifference = currentTime - parseInt(storedLogInTime, 10);
                    const hoursDifference = logInTimeDifference / (1000 * 60 * 60);

                    if (hoursDifference <= 48) {
                        const geoData = JSON.parse(storedGeoData);
                        const currencyData = JSON.parse(storedCurrencyData);

                        const userCountry = geoData.country;

                        const userCurrency = currencyMap[userCountry] || "USD";
                        setUserCurrency(userCurrency);
                        setCurrencyRates(currencyData.rates);
                        return;
                    }
                }

                const geoResponse = await fetch(`https://ipapi.co/json/`);
                const geoData = await geoResponse.json();
                localStorage.setItem("geoData", JSON.stringify(geoData));

                const userCountry = geoData.country;

                const userCurrency = currencyMap[userCountry] || "USD";
                setUserCurrency(userCurrency);

                const currencyResponse = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
                const currencyData = await currencyResponse.json();
                setCurrencyRates(currencyData.rates);

                localStorage.setItem("Old_LogIN_time", currentTime.toString());
            } catch (error) {
                console.error("Error fetching user location or currency data:", error);
            }
        };

        fetchUserLocationAndCurrency();
    }, []);

    return (
        <div className="font-roboto container mx-auto px-4 py-8 relative">

            {showNotification && (
                <div id="toast-notification" className="absolute right-3 top-3 w-full shadow-xl border max-w-xs p-4 text-gray-900 bg-white rounded-lg dark:bg-gray-800 dark:text-gray-300" role="alert">
                    <div className="flex items-center mb-3">
                        <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">New notification</span>
                        <button onClick={() => { setShowNotification(false) }} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center">
                        <div className="relative inline-block shrink-0">
                            <img className="w-12 h-12 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Jese Leos image" />
                            <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                                <svg className="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                                    <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor" />
                                    <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor" />
                                </svg>
                                <span className="sr-only">Message icon</span>
                            </span>
                        </div>
                        <div className="ms-3 text-sm font-normal">
                            <div className="text-sm font-semibold text-gray-900 dark:text-white">Wanna teach?</div>
                            <div className="text-sm font-normal">create your tutor profile now</div>
                            <Link href="/toefl-tutor/tutor-signup" className="text-xs font-medium text-blue-600 dark:text-blue-500 cursor-pointer">Click here!</Link>
                        </div>
                    </div>
                </div>
            )}

            <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Online English tutors & teachers for private lessons</h1>
                <p className="text-muted-foreground text-lg">
                    Looking for an online English tutor? Our platform is the leading online language learning platform worldwide.
                    Choose from 28,819 English teachers with an average rating of 4.8 stars.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                            English
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuItem>English</DropdownMenuItem>
                        <DropdownMenuItem>TOEFL</DropdownMenuItem>
                        <DropdownMenuItem>IELTS</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                            ₹200 – ₹3,500+
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuItem>₹200 - ₹500</DropdownMenuItem>
                        <DropdownMenuItem>₹501 - ₹1000</DropdownMenuItem>
                        <DropdownMenuItem>₹1001 - ₹2000</DropdownMenuItem>
                        <DropdownMenuItem>₹2001+</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                            Any country
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuItem>United States</DropdownMenuItem>
                        <DropdownMenuItem>United Kingdom</DropdownMenuItem>
                        <DropdownMenuItem>Canada</DropdownMenuItem>
                        <DropdownMenuItem>Australia</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                            Any time
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuItem>Morning</DropdownMenuItem>
                        <DropdownMenuItem>Afternoon</DropdownMenuItem>
                        <DropdownMenuItem>Evening</DropdownMenuItem>
                        <DropdownMenuItem>Night</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="flex flex-wrap gap-4 mb-8 items-center text-gray-500">
                <Button variant="outline" className="gap-2">
                    Specialties
                    <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="gap-2">
                    <Globe2 className="h-4 w-4" />
                    Also speaks
                    <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="gap-2">
                    Native speaker
                    <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="gap-2">
                    Tutor categories
                    <ChevronDown className="h-4 w-4" />
                </Button>
                <div className="flex-1" />
                <div className="flex gap-4 items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="gap-2">
                                Sort by: Our top picks
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                            <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                            <DropdownMenuItem>Rating: High to Low</DropdownMenuItem>
                            <DropdownMenuItem>Experience</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            placeholder="Search by name or keyword"
                            className="pl-10 w-[300px]"
                        />
                    </div>
                </div>
            </div>

            {/* <h2 className="text-2xl font-semibold mb-6">28,819 English teachers available</h2> */}
            <h2 className="text-2xl font-semibold mb-6">{tutors.length + 1} Toefl English teachers available</h2>

            <div className="grid grid-cols-1 gap-6">
                {tutors
                    .filter((tutor) => tutor.detailsVerified)
                    .map((tutor) => {
                        const convertedRate = currencyRates && userCurrency in currencyRates
                            ? (tutor.hourlyRate * currencyRates[userCurrency]).toFixed(2)
                            : tutor.hourlyRate.toFixed(2);

                        return (
                            <Card className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 p-6">
                                    <Avatar className="w-full h-auto aspect-square rounded-lg">
                                        <AvatarImage src={tutor.photoLink} />
                                        <AvatarFallback>{tutor.firstName[0]}{tutor.lastName[0]}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <CardContent className="flex-1 p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Link href={`/toefl-tutor/teacher/${tutor.id}`} className="text-xl font-semibold">{tutor.firstName} {tutor.lastName}</Link>
                                                <Badge variant="secondary">Professional</Badge>
                                                {tutor.hourlyRate > 30 && (
                                                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">Super Tutor</Badge>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground mb-4">
                                                <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4" />
                                                <span className="font-semibold">5.0</span>
                                                {/* <span>• 52 reviews</span> */}
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon">
                                            <Heart className="h-5 w-5" />
                                        </Button>
                                    </div>

                                    <div className="space-y-4">
                                        {/* <div className="flex items-center gap-2 text-muted-foreground">
                                    <Users className="h-4 w-4" />
                                    <span>29 active students • 3,261 lessons</span>
                                </div> */}

                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Users className="h-4 w-4" />
                                            <span>
                                                {Number(tutor.studentsTaught) > 1000 ? "1000+" : tutor.studentsTaught} students taught •{" "}
                                                {Number(tutor.teachingHours) > 3000 ? "3000+" : tutor.teachingHours} teaching hours
                                            </span>
                                        </div>

                                        {/* <div className="flex items-center gap-2 text-muted-foreground">
                                    <Globe2 className="h-4 w-4" />
                                    <span>Speaks English (Proficient), Korean (Beginner) +2</span>
                                </div> */}

                                        {/* Add Education Information */}
                                        {tutor.education && tutor.education.length > 0 ? (
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <GraduationCap className="h-4 w-4" />
                                                <span>
                                                    {tutor.education
                                                        ?.map((edu, index) => {
                                                            const details = [
                                                                edu.degree,
                                                                edu.specialization && `in ${edu.specialization}`,
                                                                `from ${edu.university}`,
                                                                edu.yearStart && edu.yearEnd
                                                                    ? `(${edu.yearStart}–${edu.yearEnd})`
                                                                    : edu.yearStart
                                                                        ? `(Started: ${edu.yearStart})`
                                                                        : "",
                                                            ]
                                                                .filter(Boolean)
                                                                .join(" ");

                                                            // If there are multiple entries, truncate with a "read more" option.
                                                            if (index < 2) {
                                                                return details;
                                                            }
                                                            return null; // Skip after the first 2 entries
                                                        })
                                                        .filter(Boolean)
                                                        .join(", ")}
                                                    {tutor.education.length > 2 && (
                                                        <span className="text-blue-500 ml-1">
                                                            +{tutor.education.length - 2} more
                                                        </span>
                                                    )}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <GraduationCap className="h-4 w-4" />
                                                <span>No education details available.</span>
                                            </div>
                                        )}


                                        <p className="line-clamp-2">
                                            {tutor.certifications && tutor.certifications.length > 0 ? (
                                                <>
                                                    {tutor.certifications
                                                        .slice(0, 2) // Show only the first 2 certifications
                                                        .map((cert, index) =>
                                                            `${cert.certificateName} (${cert.certifyingOrg}, ${cert.yearStart}–${cert.yearEnd})${index === 1 && (tutor.certifications != null && tutor.certifications.length > 2) ? "..." : ""}`
                                                        )
                                                        .join(", ")}
                                                    {tutor.certifications.length > 2 && (
                                                        <span className="text-blue-500 ml-1">+{tutor.certifications.length - 2} more</span>
                                                    )}
                                                </>
                                            ) : (
                                                "No certifications available."
                                            )}
                                        </p>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-6 flex flex-col gap-3 md:w-1/4">
                                    <div className="text-center mb-2">
                                        {/* <div className="text-2xl font-bold">₹1,732</div> */}
                                        <div className="text-2xl font-bold">{convertedRate} {userCurrency}</div>
                                        <div className="text-sm text-muted-foreground">50-min lesson</div>
                                    </div>
                                    <Button onClick={() => setOpen(true)} className="w-full" size="lg">Book trial lesson</Button>
                                    <Button variant="outline" className="w-full">
                                        <MessageCircle className="mr-2 h-4 w-4" />
                                        Send message
                                    </Button>
                                </CardFooter>
                                <BookLessonModal
                                    open={open}
                                    onOpenChange={setOpen}
                                    availability={tutor.availability}
                                />
                            </Card>
                        )
                    })}
                <Card className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 p-6">
                        <Avatar className="w-full h-auto aspect-square rounded-lg">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>TD</AvatarFallback>
                        </Avatar>
                    </div>
                    <CardContent className="flex-1 p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-xl font-semibold">Laura D.</h3>
                                    <Badge variant="secondary">Professional</Badge>
                                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">Super Tutor</Badge>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                                    <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4" />
                                    <span className="font-semibold">5.0</span>
                                    <span>• 52 reviews</span>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon">
                                <Heart className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Users className="h-4 w-4" />
                                <span>29 active students • 3,261 lessons</span>
                            </div>

                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Globe2 className="h-4 w-4" />
                                <span>Speaks English (Proficient), Korean (Beginner) +2</span>
                            </div>

                            <p className="line-clamp-2">
                                CELTA, Proficiency (C2) and SIELE-Certified English Studies Graduate with 8+ years of experience.
                            </p>
                        </div>
                    </CardContent>
                    <CardFooter className="p-6 flex flex-col gap-3 md:w-1/4">
                        <div className="text-center mb-2">
                            <div className="text-2xl font-bold">₹1,732</div>
                            <div className="text-sm text-muted-foreground">50-min lesson</div>
                        </div>
                        <Button className="w-full" size="lg">Book trial lesson</Button>
                        <Button variant="outline" className="w-full">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Send message
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

