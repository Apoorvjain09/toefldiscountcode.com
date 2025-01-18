"use client"

import * as React from "react"
import { Search, Globe2, ChevronDown, Heart, Star, Users, MessageCircle, GraduationCap, X } from 'lucide-react'
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

    const [language, setLanguage] = React.useState<string>("TOEFL");
    const [priceRange, setPriceRange] = React.useState<[string, string, number, string, string, string, number] | null>(null);
    const [country, setCountry] = React.useState<string>("");
    const [time, setTime] = React.useState<string>("Any time");
    const [filteredTutors, setFilteredTutors] = React.useState<Tutor[]>([]);

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


    React.useEffect(() => {
        const applyFilters = () => {
            let updatedTutors = [...tutors];

            // Filter by language
            // if (language !== "Any language") {
            //     updatedTutors = updatedTutors.filter((tutor) =>
            //         tutor.specialties?.includes(language)
            //     );
            // }

            // Filter by price range
            if (priceRange) {
                const [userCurrency, space1, minPrice, space2, string, space3, maxPrice] = priceRange;
                updatedTutors = updatedTutors.filter((tutor) => {
                    const convertedRate =
                        currencyRates && userCurrency in currencyRates
                            ? tutor.hourlyRate * currencyRates[userCurrency]
                            : tutor.hourlyRate;
                    return convertedRate >= minPrice && convertedRate <= maxPrice;
                });
            }

            // Filter by country
            if (country && country !== "Any country") {
                updatedTutors = updatedTutors.filter(
                    (tutor) => tutor.countryOfBirth === country
                );
            }

            // Filter by availability time (optional, based on your data structure)
            // if (time && time !== "Any time") {
            //     updatedTutors = updatedTutors.filter((tutor) =>
            //         tutor.availability?.some((slot) => slot.day === time)
            //     );
            // }

            // Ensure tutors are verified
            updatedTutors = updatedTutors.filter((tutor) => tutor.detailsVerified);

            setFilteredTutors(updatedTutors);
        };

        applyFilters();
    }, [language, priceRange, country, time, tutors]);

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
                            {language}
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        {/* <DropdownMenuItem onClick={() => setLanguage("English")}>English</DropdownMenuItem> */}
                        <DropdownMenuItem onClick={() => setLanguage("TOEFL")}>TOEFL</DropdownMenuItem>
                        {/* <DropdownMenuItem onClick={() => setLanguage("IELTS")}>IELTS</DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                            {priceRange || "Price Range"}
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        {[
                            { min: 5, max: 20 },
                            { min: 20.0000000001, max: 50 },
                            { min: 50.0000000001, max: 100 },
                            { min: 100.0000000001, max: 200 },
                            { min: 200.0000000001, max: 500 }
                        ].map((range, index) => {
                            const convertedMin =
                                currencyRates && userCurrency in currencyRates
                                    ? parseFloat((range.min * currencyRates[userCurrency]).toFixed(0))
                                    : range.min;
                            const convertedMax =
                                range.max && currencyRates && userCurrency in currencyRates
                                    ? parseFloat((range.max * currencyRates[userCurrency]).toFixed(0))
                                    : range.max;

                            return (
                                <DropdownMenuItem
                                    key={index}
                                    onClick={() =>
                                        setPriceRange(
                                            convertedMax !== null
                                                ? [userCurrency, " ", convertedMin, " ", "-", " ", convertedMax]
                                                : [userCurrency, " ", convertedMin, " ", "-", " ", Number.MAX_VALUE]
                                        )
                                    }
                                >
                                    {convertedMax !== null
                                        ? `${userCurrency} ${convertedMin} - ${convertedMax}`
                                        : `${userCurrency} ${convertedMin}+`}
                                </DropdownMenuItem>
                            );
                        })}
                    </DropdownMenuContent>

                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                            {country || "Any country"}
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 max-h-[20rem] overflow-y-auto">
                        <div className="py-2 rounded-lg bg-gray-100 shadow-sm mb-2">
                            <p className="text-sm text-muted-foreground text-center">Popular Countries</p>
                        </div>
                        <DropdownMenuItem onClick={() => setCountry("in")}>India</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("gb")}>The United Kingdom</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("us")}>United States</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ca")}>Canada</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("au")}>Australia</DropdownMenuItem>
                        <div className="py-2 rounded-lg bg-gray-100 shadow-sm my-2">
                            <p className="text-sm text-muted-foreground text-center">Other Countries</p>
                        </div>
                        <DropdownMenuItem onClick={() => setCountry("af")}>Afghanistan</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("al")}>Albania</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("dz")}>Algeria</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ad")}>Andorra</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ao")}>Angola</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ag")}>Antigua and Barbuda</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ar")}>Argentina</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("am")}>Armenia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("at")}>Austria</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ax")}>Austrian Empire*</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("az")}>Azerbaijan</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("bs")}>Bahamas, The</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("bh")}>Bahrain</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("bd")}>Bangladesh</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("bb")}>Barbados</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("by")}>Belarus</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("be")}>Belgium</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("bz")}>Belize</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("bj")}>Benin (Dahomey)</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("bo")}>Bolivia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ba")}>Bosnia and Herzegovina</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("bw")}>Botswana</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("br")}>Brazil</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("bn")}>Brunei</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("bg")}>Bulgaria</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("bf")}>Burkina Faso (Upper Volta)</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("mm")}>Burma</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("bi")}>Burundi</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("cv")}>Cabo Verde</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("kh")}>Cambodia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("cm")}>Cameroon</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ky")}>Cayman Islands, The</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("cf")}>Central African Republic</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("td")}>Chad</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("cl")}>Chile</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("cn")}>China</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("co")}>Colombia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("km")}>Comoros</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ck")}>Cook Islands</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("cr")}>Costa Rica</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ci")}>Cote d’Ivoire (Ivory Coast)</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("hr")}>Croatia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("cu")}>Cuba</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("cy")}>Cyprus</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("cz")}>Czechia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("cd")}>Democratic Republic of the Congo</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("dk")}>Denmark</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("dj")}>Djibouti</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("dm")}>Dominica</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("do")}>Dominican Republic</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ec")}>Ecuador</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("eg")}>Egypt</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("sv")}>El Salvador</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("gq")}>Equatorial Guinea</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("er")}>Eritrea</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ee")}>Estonia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("sz")}>Eswatini</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("et")}>Ethiopia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("fj")}>Fiji</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("fi")}>Finland</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("fr")}>France</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ga")}>Gabon</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("gm")}>Gambia, The</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ge")}>Georgia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("de")}>Germany</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("gh")}>Ghana</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("gr")}>Greece</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("gd")}>Grenada</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("gt")}>Guatemala</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("gn")}>Guinea</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("gw")}>Guinea-Bissau</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("gy")}>Guyana</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ht")}>Haiti</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("hn")}>Honduras</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("hu")}>Hungary</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("is")}>Iceland</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("id")}>Indonesia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ir")}>Iran</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("iq")}>Iraq</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ie")}>Ireland</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("il")}>Israel</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("it")}>Italy</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("jm")}>Jamaica</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("jp")}>Japan</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("jo")}>Jordan</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("kz")}>Kazakhstan</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ke")}>Kenya</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("kr")}>Korea</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("kw")}>Kuwait</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("kg")}>Kyrgyzstan</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("la")}>Laos</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("lv")}>Latvia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("lb")}>Lebanon</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ls")}>Lesotho</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("lr")}>Liberia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ly")}>Libya</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("li")}>Liechtenstein</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("lt")}>Lithuania</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("lu")}>Luxembourg</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("mg")}>Madagascar</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("mw")}>Malawi</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("my")}>Malaysia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("mv")}>Maldives</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ml")}>Mali</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("mt")}>Malta</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("mh")}>Marshall Islands</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("mr")}>Mauritania</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("mu")}>Mauritius</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("mx")}>Mexico</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("fm")}>Micronesia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("md")}>Moldova</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("mc")}>Monaco</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("mn")}>Mongolia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("me")}>Montenegro</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ma")}>Morocco</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("mz")}>Mozambique</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("na")}>Namibia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("nr")}>Nauru</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("np")}>Nepal</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("nl")}>Netherlands, The</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("nz")}>New Zealand</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ni")}>Nicaragua</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ne")}>Niger</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ng")}>Nigeria</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("nu")}>Niue</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("mk")}>North Macedonia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("no")}>Norway</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("om")}>Oman</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("pk")}>Pakistan</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("pw")}>Palau</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("pa")}>Panama</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("pg")}>Papua New Guinea</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("py")}>Paraguay</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("pe")}>Peru</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ph")}>Philippines</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("pl")}>Poland</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("pt")}>Portugal</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("qa")}>Qatar</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ro")}>Romania</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ru")}>Russia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("rw")}>Rwanda</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("kn")}>Saint Kitts and Nevis</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("lc")}>Saint Lucia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("vc")}>Saint Vincent and the Grenadines</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ws")}>Samoa</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("sm")}>San Marino</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("st")}>Sao Tome and Principe</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("sa")}>Saudi Arabia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("sn")}>Senegal</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("rs")}>Serbia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("sc")}>Seychelles</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("sl")}>Sierra Leone</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("sg")}>Singapore</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("sk")}>Slovakia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("si")}>Slovenia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("sb")}>Solomon Islands, The</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("so")}>Somalia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("za")}>South Africa</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ss")}>South Sudan</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("es")}>Spain</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("lk")}>Sri Lanka</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("sd")}>Sudan</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("sr")}>Suriname</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("se")}>Sweden</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ch")}>Switzerland</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("sy")}>Syria</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("tj")}>Tajikistan</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("tz")}>Tanzania</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("th")}>Thailand</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("tl")}>Timor-Leste</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("tg")}>Togo</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("to")}>Tonga</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("tt")}>Trinidad and Tobago</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("tn")}>Tunisia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("tr")}>Turkey</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("tm")}>Turkmenistan</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("tv")}>Tuvalu</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ug")}>Uganda</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ua")}>Ukraine</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ae")}>United Arab Emirates, The</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("uy")}>Uruguay</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("uz")}>Uzbekistan</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("vu")}>Vanuatu</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ve")}>Venezuela</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("vn")}>Vietnam</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("ye")}>Yemen</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("zm")}>Zambia</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCountry("zw")}>Zimbabwe</DropdownMenuItem>
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
                {filteredTutors
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

