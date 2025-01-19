"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, User, BadgeIcon as Certificate, GraduationCap, FileText, Video, AccessibilityIcon as AvailabilityIcon, DollarSign, CheckCircle } from 'lucide-react'
import { SignInButton, useUser } from "@clerk/nextjs"
import { doc, setDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/components/ui/dialog"
import { getAllTimezones, getTimezone, getCountry } from 'countries-and-timezones';
import { FaSpinner } from "react-icons/fa"
import Link from "next/link"

const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    countryOfBirth: z.string(),
    studentsTaught: z.number().min(1, "Must be at least 1 student").optional(),
    teachingHours: z.number().min(1, "Must be at least 1 hour").optional(),
    photoLink: z.string(),
    description: z.object({
        introduction: z.string().min(50, "Introduction must be at least 50 words."),
        teachingExperience: z.string().min(50, "Teaching experience must be at least 50 words."),
        motivation: z.string().min(50, "Motivation must be at least 50 words."),
        title: z.string().min(5, "Title must be at least 5 characters."),
    }),
    certifications: z.array(
        z.object({
            certifyingOrg: z.string(),
            certificateName: z.string(),
            yearStart: z.string(),
            yearEnd: z.string(),
        })
    ),
    education: z.array(
        z.object({
            university: z.string().min(2, "University name is required"),
            degree: z.string().min(2, "Degree is required"),
            degreeType: z.string().optional(),
            specialization: z.string().optional(),
            yearStart: z.string().optional(),
            yearEnd: z.string().optional(),
        })
    ),
    video: z.string(),
    timezone: z.string().nonempty("Timezone is required"),
    availability: z.array(
        z.object({
            day: z.string(),
            slots: z.array(
                z.object({
                    from: z.string().nonempty("Start time is required"),
                    to: z.string().nonempty("End time is required"),
                })
            ),
        })
    ),
    hourlyRate: z.number().min(5),
    detailsVerified: z.boolean()

})

export default function TeacherSignup() {
    const { user, isSignedIn } = useUser();
    const [activeTab, setActiveTab] = React.useState("about")
    const [submitted, setSubmitted] = React.useState(false)
    const [timezoneOptions, setTimezoneOptions] = React.useState<string[]>([]);
    const [fillReqiredDetailsNotification, setFillReqiredDetailsNotification] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            countryOfBirth: "",
            photoLink: "",
            certifications: [
                { certifyingOrg: "", certificateName: "", yearStart: "", yearEnd: "" },
            ],
            education: [
                {
                    university: "",
                    degree: "",
                    degreeType: "",
                    specialization: "",
                    yearStart: "",
                    yearEnd: "",
                },
            ],
            video: "",
            timezone: "",
            availability: [
                { day: "Monday", slots: [] },
                { day: "Tuesday", slots: [] },
                { day: "Wednesday", slots: [] },
                { day: "Thursday", slots: [] },
                { day: "Friday", slots: [] },
                { day: "Saturday", slots: [] },
                { day: "Sunday", slots: [] },
            ],
            hourlyRate: 20,
            detailsVerified: false,
        },
    })

    const tabs = [
        { id: "about", label: "About", icon: User },
        { id: "photo", label: "Photo", icon: Upload },
        { id: "certification", label: "Certification", icon: Certificate },
        { id: "education", label: "Education", icon: GraduationCap },
        { id: "description", label: "Description", icon: FileText },
        { id: "video", label: "Video", icon: Video },
        { id: "availability", label: "Availability", icon: AvailabilityIcon },
        { id: "pricing", label: "Pricing", icon: DollarSign },
    ]

    type StepField =
        | "description.introduction"
        | "description.teachingExperience"
        | "description.motivation"
        | "description.title";

    const steps: { id: number; label: string; field: StepField }[] = [
        { id: 1, label: "Introduction", field: "description.introduction" },
        { id: 2, label: "Teaching Experience", field: "description.teachingExperience" },
        { id: 3, label: "Motivation", field: "description.motivation" },
        { id: 4, label: "Title", field: "description.title" },
    ];

    const [currentStep, setCurrentStep] = React.useState(1);

    const handleNext = async () => {
        const isValid = await form.trigger(steps[currentStep - 1].field); // No type error now
        if (isValid) setCurrentStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const { fields } = useFieldArray({
        control: form.control,
        name: "availability",
    });

    React.useEffect(() => {
        // Fetch all timezones and set options
        const timezones = Object.keys(getAllTimezones());
        setTimezoneOptions(timezones);
    }, []);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setFillReqiredDetailsNotification(false)
        setLoading(true)
        try {
            if (!user) {
                throw new Error("User not authenticated");
            }

            const clerkId = user.id;
            const tutorRef = doc(db, `tutors/${clerkId}`);

            await setDoc(tutorRef, values);

            console.log("Data saved successfully!");
            alert("Your details have been saved.");
            setSubmitted(true);
            setLoading(false)
        } catch (error) {
            console.error("Error saving data:", error);
            alert("Failed to save your details. Please try again.");
            setLoading(false);
        }
    }

    return (
        <div className="container mx-auto p-2">
            <Card>
                <CardContent className="p-6">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="flex flex-col gap-2 sm:flex-row flex-wrap justify-center items-center ">
                            {tabs.map((tab, index) => (
                                <TabsTrigger
                                    key={tab.id}
                                    value={tab.id}
                                    className="flex items-center gap-2"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className=" flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                            {index + 1}.
                                        </span>
                                        {/* Ensure icon scales or adapts to smaller screens */}
                                        {/* <tab.icon className="h-4 w-4" /> */}
                                        <span className="hidden sm:inline">{tab.label}</span>
                                    </div>
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <TabsContent value="about" className="mt-6 ">
                                    <div className="space-y-4 flex flex-col mx-auto w-[80%] sm:w-[50%]">
                                        <h2 className="text-2xl font-bold flex gap-10 justify-between">
                                            <div>
                                                About
                                            </div>
                                            <div>
                                                {!isSignedIn && (
                                                    <SignInButton><Button>Sign In</Button></SignInButton>
                                                )}
                                            </div>
                                        </h2>
                                        <p className="text-muted-foreground">
                                            Start creating your public tutor profile. Your progress will be automatically saved
                                            as you complete each section.
                                        </p>
                                        <div className="space-y-4">
                                            <FormField
                                                control={form.control}
                                                name="firstName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>First name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="John" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="lastName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Last name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Doe" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="john@example.com" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="countryOfBirth"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Country of birth</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select a country" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="af">Afghanistan</SelectItem>
                                                                <SelectItem value="al">Albania</SelectItem>
                                                                <SelectItem value="dz">Algeria</SelectItem>
                                                                <SelectItem value="ad">Andorra</SelectItem>
                                                                <SelectItem value="ao">Angola</SelectItem>
                                                                <SelectItem value="ag">Antigua and Barbuda</SelectItem>
                                                                <SelectItem value="ar">Argentina</SelectItem>
                                                                <SelectItem value="am">Armenia</SelectItem>
                                                                <SelectItem value="au">Australia</SelectItem>
                                                                <SelectItem value="at">Austria</SelectItem>
                                                                <SelectItem value="ax">Austrian Empire*</SelectItem>
                                                                <SelectItem value="az">Azerbaijan</SelectItem>
                                                                <SelectItem value="bs">Bahamas, The</SelectItem>
                                                                <SelectItem value="bh">Bahrain</SelectItem>
                                                                <SelectItem value="bd">Bangladesh</SelectItem>
                                                                <SelectItem value="bb">Barbados</SelectItem>
                                                                <SelectItem value="by">Belarus</SelectItem>
                                                                <SelectItem value="be">Belgium</SelectItem>
                                                                <SelectItem value="bz">Belize</SelectItem>
                                                                <SelectItem value="bj">Benin (Dahomey)</SelectItem>
                                                                <SelectItem value="bo">Bolivia</SelectItem>
                                                                <SelectItem value="ba">Bosnia and Herzegovina</SelectItem>
                                                                <SelectItem value="bw">Botswana</SelectItem>
                                                                <SelectItem value="br">Brazil</SelectItem>
                                                                <SelectItem value="bn">Brunei</SelectItem>
                                                                <SelectItem value="bg">Bulgaria</SelectItem>
                                                                <SelectItem value="bf">Burkina Faso (Upper Volta)</SelectItem>
                                                                <SelectItem value="mm">Burma</SelectItem>
                                                                <SelectItem value="bi">Burundi</SelectItem>
                                                                <SelectItem value="cv">Cabo Verde</SelectItem>
                                                                <SelectItem value="kh">Cambodia</SelectItem>
                                                                <SelectItem value="cm">Cameroon</SelectItem>
                                                                <SelectItem value="ca">Canada</SelectItem>
                                                                <SelectItem value="ky">Cayman Islands, The</SelectItem>
                                                                <SelectItem value="cf">Central African Republic</SelectItem>
                                                                <SelectItem value="td">Chad</SelectItem>
                                                                <SelectItem value="cl">Chile</SelectItem>
                                                                <SelectItem value="cn">China</SelectItem>
                                                                <SelectItem value="co">Colombia</SelectItem>
                                                                <SelectItem value="km">Comoros</SelectItem>
                                                                <SelectItem value="ck">Cook Islands</SelectItem>
                                                                <SelectItem value="cr">Costa Rica</SelectItem>
                                                                <SelectItem value="ci">Cote d’Ivoire (Ivory Coast)</SelectItem>
                                                                <SelectItem value="hr">Croatia</SelectItem>
                                                                <SelectItem value="cu">Cuba</SelectItem>
                                                                <SelectItem value="cy">Cyprus</SelectItem>
                                                                <SelectItem value="cz">Czechia</SelectItem>
                                                                <SelectItem value="cd">Democratic Republic of the Congo</SelectItem>
                                                                <SelectItem value="dk">Denmark</SelectItem>
                                                                <SelectItem value="dj">Djibouti</SelectItem>
                                                                <SelectItem value="dm">Dominica</SelectItem>
                                                                <SelectItem value="do">Dominican Republic</SelectItem>
                                                                <SelectItem value="ec">Ecuador</SelectItem>
                                                                <SelectItem value="eg">Egypt</SelectItem>
                                                                <SelectItem value="sv">El Salvador</SelectItem>
                                                                <SelectItem value="gq">Equatorial Guinea</SelectItem>
                                                                <SelectItem value="er">Eritrea</SelectItem>
                                                                <SelectItem value="ee">Estonia</SelectItem>
                                                                <SelectItem value="sz">Eswatini</SelectItem>
                                                                <SelectItem value="et">Ethiopia</SelectItem>
                                                                <SelectItem value="fj">Fiji</SelectItem>
                                                                <SelectItem value="fi">Finland</SelectItem>
                                                                <SelectItem value="fr">France</SelectItem>
                                                                <SelectItem value="ga">Gabon</SelectItem>
                                                                <SelectItem value="gm">Gambia, The</SelectItem>
                                                                <SelectItem value="ge">Georgia</SelectItem>
                                                                <SelectItem value="de">Germany</SelectItem>
                                                                <SelectItem value="gh">Ghana</SelectItem>
                                                                <SelectItem value="gr">Greece</SelectItem>
                                                                <SelectItem value="gd">Grenada</SelectItem>
                                                                <SelectItem value="gt">Guatemala</SelectItem>
                                                                <SelectItem value="gn">Guinea</SelectItem>
                                                                <SelectItem value="gw">Guinea-Bissau</SelectItem>
                                                                <SelectItem value="gy">Guyana</SelectItem>
                                                                <SelectItem value="ht">Haiti</SelectItem>
                                                                <SelectItem value="hn">Honduras</SelectItem>
                                                                <SelectItem value="hu">Hungary</SelectItem>
                                                                <SelectItem value="is">Iceland</SelectItem>
                                                                <SelectItem value="in">India</SelectItem>
                                                                <SelectItem value="id">Indonesia</SelectItem>
                                                                <SelectItem value="ir">Iran</SelectItem>
                                                                <SelectItem value="iq">Iraq</SelectItem>
                                                                <SelectItem value="ie">Ireland</SelectItem>
                                                                <SelectItem value="il">Israel</SelectItem>
                                                                <SelectItem value="it">Italy</SelectItem>
                                                                <SelectItem value="jm">Jamaica</SelectItem>
                                                                <SelectItem value="jp">Japan</SelectItem>
                                                                <SelectItem value="jo">Jordan</SelectItem>
                                                                <SelectItem value="kz">Kazakhstan</SelectItem>
                                                                <SelectItem value="ke">Kenya</SelectItem>
                                                                <SelectItem value="kr">Korea</SelectItem>
                                                                <SelectItem value="kw">Kuwait</SelectItem>
                                                                <SelectItem value="kg">Kyrgyzstan</SelectItem>
                                                                <SelectItem value="la">Laos</SelectItem>
                                                                <SelectItem value="lv">Latvia</SelectItem>
                                                                <SelectItem value="lb">Lebanon</SelectItem>
                                                                <SelectItem value="ls">Lesotho</SelectItem>
                                                                <SelectItem value="lr">Liberia</SelectItem>
                                                                <SelectItem value="ly">Libya</SelectItem>
                                                                <SelectItem value="li">Liechtenstein</SelectItem>
                                                                <SelectItem value="lt">Lithuania</SelectItem>
                                                                <SelectItem value="lu">Luxembourg</SelectItem>
                                                                <SelectItem value="mg">Madagascar</SelectItem>
                                                                <SelectItem value="mw">Malawi</SelectItem>
                                                                <SelectItem value="my">Malaysia</SelectItem>
                                                                <SelectItem value="mv">Maldives</SelectItem>
                                                                <SelectItem value="ml">Mali</SelectItem>
                                                                <SelectItem value="mt">Malta</SelectItem>
                                                                <SelectItem value="mh">Marshall Islands</SelectItem>
                                                                <SelectItem value="mr">Mauritania</SelectItem>
                                                                <SelectItem value="mu">Mauritius</SelectItem>
                                                                <SelectItem value="mx">Mexico</SelectItem>
                                                                <SelectItem value="fm">Micronesia</SelectItem>
                                                                <SelectItem value="md">Moldova</SelectItem>
                                                                <SelectItem value="mc">Monaco</SelectItem>
                                                                <SelectItem value="mn">Mongolia</SelectItem>
                                                                <SelectItem value="me">Montenegro</SelectItem>
                                                                <SelectItem value="ma">Morocco</SelectItem>
                                                                <SelectItem value="mz">Mozambique</SelectItem>
                                                                <SelectItem value="na">Namibia</SelectItem>
                                                                <SelectItem value="nr">Nauru</SelectItem>
                                                                <SelectItem value="np">Nepal</SelectItem>
                                                                <SelectItem value="nl">Netherlands, The</SelectItem>
                                                                <SelectItem value="nz">New Zealand</SelectItem>
                                                                <SelectItem value="ni">Nicaragua</SelectItem>
                                                                <SelectItem value="ne">Niger</SelectItem>
                                                                <SelectItem value="ng">Nigeria</SelectItem>
                                                                <SelectItem value="nu">Niue</SelectItem>
                                                                <SelectItem value="mk">North Macedonia</SelectItem>
                                                                <SelectItem value="no">Norway</SelectItem>
                                                                <SelectItem value="om">Oman</SelectItem>
                                                                <SelectItem value="pk">Pakistan</SelectItem>
                                                                <SelectItem value="pw">Palau</SelectItem>
                                                                <SelectItem value="pa">Panama</SelectItem>
                                                                <SelectItem value="pg">Papua New Guinea</SelectItem>
                                                                <SelectItem value="py">Paraguay</SelectItem>
                                                                <SelectItem value="pe">Peru</SelectItem>
                                                                <SelectItem value="ph">Philippines</SelectItem>
                                                                <SelectItem value="pl">Poland</SelectItem>
                                                                <SelectItem value="pt">Portugal</SelectItem>
                                                                <SelectItem value="qa">Qatar</SelectItem>
                                                                <SelectItem value="ro">Romania</SelectItem>
                                                                <SelectItem value="ru">Russia</SelectItem>
                                                                <SelectItem value="rw">Rwanda</SelectItem>
                                                                <SelectItem value="kn">Saint Kitts and Nevis</SelectItem>
                                                                <SelectItem value="lc">Saint Lucia</SelectItem>
                                                                <SelectItem value="vc">Saint Vincent and the Grenadines</SelectItem>
                                                                <SelectItem value="ws">Samoa</SelectItem>
                                                                <SelectItem value="sm">San Marino</SelectItem>
                                                                <SelectItem value="st">Sao Tome and Principe</SelectItem>
                                                                <SelectItem value="sa">Saudi Arabia</SelectItem>
                                                                <SelectItem value="sn">Senegal</SelectItem>
                                                                <SelectItem value="rs">Serbia</SelectItem>
                                                                <SelectItem value="sc">Seychelles</SelectItem>
                                                                <SelectItem value="sl">Sierra Leone</SelectItem>
                                                                <SelectItem value="sg">Singapore</SelectItem>
                                                                <SelectItem value="sk">Slovakia</SelectItem>
                                                                <SelectItem value="si">Slovenia</SelectItem>
                                                                <SelectItem value="sb">Solomon Islands, The</SelectItem>
                                                                <SelectItem value="so">Somalia</SelectItem>
                                                                <SelectItem value="za">South Africa</SelectItem>
                                                                <SelectItem value="ss">South Sudan</SelectItem>
                                                                <SelectItem value="es">Spain</SelectItem>
                                                                <SelectItem value="lk">Sri Lanka</SelectItem>
                                                                <SelectItem value="sd">Sudan</SelectItem>
                                                                <SelectItem value="sr">Suriname</SelectItem>
                                                                <SelectItem value="se">Sweden</SelectItem>
                                                                <SelectItem value="ch">Switzerland</SelectItem>
                                                                <SelectItem value="sy">Syria</SelectItem>
                                                                <SelectItem value="tj">Tajikistan</SelectItem>
                                                                <SelectItem value="tz">Tanzania</SelectItem>
                                                                <SelectItem value="th">Thailand</SelectItem>
                                                                <SelectItem value="tl">Timor-Leste</SelectItem>
                                                                <SelectItem value="tg">Togo</SelectItem>
                                                                <SelectItem value="to">Tonga</SelectItem>
                                                                <SelectItem value="tt">Trinidad and Tobago</SelectItem>
                                                                <SelectItem value="tn">Tunisia</SelectItem>
                                                                <SelectItem value="tr">Turkey</SelectItem>
                                                                <SelectItem value="tm">Turkmenistan</SelectItem>
                                                                <SelectItem value="tv">Tuvalu</SelectItem>
                                                                <SelectItem value="ug">Uganda</SelectItem>
                                                                <SelectItem value="ua">Ukraine</SelectItem>
                                                                <SelectItem value="ae">United Arab Emirates, The</SelectItem>
                                                                <SelectItem value="gb">United Kingdom, The</SelectItem>
                                                                <SelectItem value="us">United States</SelectItem>
                                                                <SelectItem value="uy">Uruguay</SelectItem>
                                                                <SelectItem value="uz">Uzbekistan</SelectItem>
                                                                <SelectItem value="vu">Vanuatu</SelectItem>
                                                                <SelectItem value="ve">Venezuela</SelectItem>
                                                                <SelectItem value="vn">Vietnam</SelectItem>
                                                                <SelectItem value="ye">Yemen</SelectItem>
                                                                <SelectItem value="zm">Zambia</SelectItem>
                                                                <SelectItem value="zw">Zimbabwe</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="studentsTaught"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Approximate Number of Students Taught</FormLabel>
                                                        <FormControl>
                                                            <Input type="number" placeholder="e.g., 500" {...field} onChange={(e) => field.onChange(Number(e.target.value) || '')} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="teachingHours"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Approximate Teaching Hours</FormLabel>
                                                        <FormControl>
                                                            <Input type="number" placeholder="e.g., 1200" {...field} onChange={(e) => field.onChange(Number(e.target.value) || '')} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="photo" className="mt-6">
                                    <div className="space-y-4 flex flex-col mx-auto w-[80%] sm:w-[50%]">
                                        <h2 className="text-2xl font-bold mb-4">Profile Photo [Squared Dimension]</h2>
                                        {/* <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                                                    <p className="mb-2 text-sm text-muted-foreground">
                                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        PNG, JPG or GIF (MAX. 800x400px)
                                                    </p>
                                                </div>
                                                <input type="file" className="hidden" />
                                            </label>
                                        </div> */}
                                        <FormField
                                            control={form.control}
                                            name="photoLink"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Google Drive Photo Link</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Paste the shared Google Drive link here"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="text-sm text-muted-foreground bg-gray-50 shadow-lg p-2 rounded-lg">
                                            To upload your photo, follow these steps:
                                            <ol className="list-decimal list-inside mt-2 space-y-2">
                                                <li>Go to <a href="https://drive.google.com" target="_blank" className="text-blue-500 underline">Google Drive</a>.</li>
                                                <li>Click on "New" and select "File Upload" to upload your photo.</li>
                                                <li>Once uploaded, right-click on the photo and select "Get Link".</li>
                                                <li>Set the link sharing to <strong>"Anyone with the link"</strong> and copy the link.</li>
                                                <li>Paste the link below.</li>
                                            </ol>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="certification" className="mt-6">
                                    <div className="space-y-4 flex flex-col mx-auto w-[80%] sm:w-[50%]">
                                        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
                                        <p className="text-muted-foreground">
                                            Add your certifications here. You can include multiple entries. (Minimum 2 are recommended)
                                        </p>
                                        {form.watch("certifications").map((cert, index) => (
                                            <div
                                                key={index}
                                                className="space-y-2 border p-4 rounded-lg bg-gray-50 shadow-md"
                                            >
                                                <FormField
                                                    control={form.control}
                                                    name={`certifications.${index}.certifyingOrg`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Certifying Organization</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Organization Name" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name={`certifications.${index}.certificateName`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Certificate Name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Certificate Name" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <div className="flex gap-4">
                                                    <FormField
                                                        control={form.control}
                                                        name={`certifications.${index}.yearStart`}
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Start Year</FormLabel>
                                                                <FormControl>
                                                                    <Input type="text" placeholder="Start Year" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name={`certifications.${index}.yearEnd`}
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>End Year</FormLabel>
                                                                <FormControl>
                                                                    <Input type="text" placeholder="End Year" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <Button
                                                    variant="destructive"
                                                    onClick={() => {
                                                        const updatedCertifications = form
                                                            .watch("certifications")
                                                            .filter((_, i) => i !== index);
                                                        form.setValue("certifications", updatedCertifications);
                                                    }}
                                                >
                                                    Remove Certification
                                                </Button>
                                            </div>
                                        ))}
                                        <Button
                                            variant="secondary"
                                            onClick={() => {
                                                const updatedCertifications = [
                                                    ...form.watch("certifications"),
                                                    { certifyingOrg: "", certificateName: "", yearStart: "", yearEnd: "" },
                                                ];
                                                form.setValue("certifications", updatedCertifications);
                                            }}
                                        >
                                            Add Another Certification
                                        </Button>
                                    </div>
                                </TabsContent>

                                <TabsContent value="education" className="mt-6">
                                    <div className="space-y-4 flex flex-col mx-auto w-[80%] sm:w-[50%]">
                                        <h2 className="text-2xl font-bold mb-4">Education</h2>
                                        <p className="text-muted-foreground">
                                            Tell students more about the higher education that you've completed or are working on.
                                        </p>
                                        {form.watch("education").map((edu, index) => (
                                            <div key={index} className="border p-4 rounded-lg bg-gray-50 shadow-md space-y-4">
                                                <FormField
                                                    control={form.control}
                                                    name={`education.${index}.university`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>University</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="E.g. Mount Royal University" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name={`education.${index}.degree`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Degree</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="E.g. Bachelor's degree in the English Language" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name={`education.${index}.degreeType`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Degree Type</FormLabel>
                                                            <FormControl>
                                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Choose degree type..." />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectItem value="bachelor">Bachelor's</SelectItem>
                                                                        <SelectItem value="master">Master's</SelectItem>
                                                                        <SelectItem value="phd">Ph.D.</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name={`education.${index}.specialization`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Specialization</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="E.g. Teaching English as a Foreign Language" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <div className="flex gap-4">
                                                    <FormField
                                                        control={form.control}
                                                        name={`education.${index}.yearStart`}
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Start Year</FormLabel>
                                                                <FormControl>
                                                                    <Input type="text" placeholder="Start Year" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name={`education.${index}.yearEnd`}
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>End Year</FormLabel>
                                                                <FormControl>
                                                                    <Input type="text" placeholder="End Year" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <Button
                                                    variant="destructive"
                                                    onClick={() => {
                                                        const updatedEducation = form.watch("education").filter((_, i) => i !== index);
                                                        form.setValue("education", updatedEducation);
                                                    }}
                                                >
                                                    Remove Entry
                                                </Button>
                                            </div>
                                        ))}
                                        <Button
                                            variant="secondary"
                                            onClick={() => {
                                                const updatedEducation = [
                                                    ...form.watch("education"),
                                                    {
                                                        university: "",
                                                        degree: "",
                                                        degreeType: "",
                                                        specialization: "",
                                                        yearStart: "",
                                                        yearEnd: "",
                                                    },
                                                ];
                                                form.setValue("education", updatedEducation);
                                            }}
                                        >
                                            Add Another Education Entry
                                        </Button>
                                    </div>
                                </TabsContent>

                                <TabsContent value="description" className="mt-6">
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold">{steps[currentStep - 1].label}</h2>
                                        {currentStep === 1 && (
                                            <FormField
                                                control={form.control}
                                                name="description.introduction"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Introduction</FormLabel>
                                                        <FormControl>
                                                            <Textarea placeholder="Write about yourself (at least 50 words)." {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        )}
                                        {currentStep === 2 && (
                                            <FormField
                                                control={form.control}
                                                name="description.teachingExperience"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Teaching Experience</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Describe your teaching experience (at least 50 words)."
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        )}
                                        {currentStep === 3 && (
                                            <FormField
                                                control={form.control}
                                                name="description.motivation"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Motivation</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Write how you motivate your students (at least 50 words)."
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        )}
                                        {currentStep === 4 && (
                                            <FormField
                                                control={form.control}
                                                name="description.title"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Title</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Write a catchy title (min 5 characters)." {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        )}
                                        <div className="flex justify-between">
                                            {currentStep > 1 && (
                                                <Button type="button" variant="outline" onClick={handleBack}>
                                                    Back
                                                </Button>
                                            )}
                                            {currentStep < steps.length && (
                                                <Button type="button" onClick={handleNext}>
                                                    Continue
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="video" className="mt-6">
                                    <div className="space-y-4 flex flex-col mx-auto w-[80%] sm:w-[50%]">
                                        <h2 className="text-2xl font-bold">Introduction Video</h2>
                                        {/* <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <Video className="w-8 h-8 mb-4 text-muted-foreground" />
                                                    <p className="mb-2 text-sm text-muted-foreground">
                                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        MP4 or MOV (MAX. 2 minutes)
                                                    </p>
                                                </div>
                                                <input type="file" className="hidden" accept="video/*" />
                                            </label>
                                        </div> */}

                                        <FormField
                                            control={form.control}
                                            name="video"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Google Drive Photo Link</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Paste the shared Google Drive link here"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <p className="text-sm text-muted-foreground bg-gray-50 shadow-lg p-2 rounded-lg">
                                            To upload your video, follow these steps:
                                            <ol className="list-decimal list-inside mt-2 space-y-2">
                                                <li>Go to <a href="https://drive.google.com" target="_blank" className="text-blue-500 underline">Google Drive</a>.</li>
                                                <li>Click on "New" and select "File Upload" to upload your photo.</li>
                                                <li>Once uploaded, right-click on the video and select "Get Link".</li>
                                                <li>Set the link sharing to <strong>"Anyone with the link"</strong> and copy the link.</li>
                                                <li>Paste the link below.</li>
                                            </ol>
                                        </p>
                                    </div>
                                </TabsContent>

                                <TabsContent value="availability" className="mt-6">
                                    <div className="space-y-4 flex flex-col mx-auto w-[80%] sm:w-[50%]">
                                        <h2 className="text-2xl font-bold">Availability (24 Hour Clock)</h2>
                                        <FormField
                                            control={form.control}
                                            name="timezone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Choose your timezone</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select timezone" />
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
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <h3 className="text-md font-semibold">Set Availability</h3>
                                        {fields.map((field, index) => (
                                            <div key={field.id} className="space-y-4">
                                                <FormLabel>{field.day}</FormLabel>
                                                <div className="space-y-2">
                                                    {form.watch(`availability.${index}.slots`).map((slot, slotIndex) => (
                                                        <div key={slotIndex} className="flex items-center space-x-4">
                                                            <FormField
                                                                control={form.control}
                                                                name={`availability.${index}.slots.${slotIndex}.from`}
                                                                render={({ field }) => (
                                                                    <FormControl>
                                                                        <Input type="time" placeholder="From" {...field} />
                                                                    </FormControl>
                                                                )}
                                                            />
                                                            <FormField
                                                                control={form.control}
                                                                name={`availability.${index}.slots.${slotIndex}.to`}
                                                                render={({ field }) => (
                                                                    <FormControl>
                                                                        <Input type="time" placeholder="To" {...field} />
                                                                    </FormControl>
                                                                )}
                                                            />
                                                            <Button
                                                                variant="destructive"
                                                                onClick={() => {
                                                                    const slots = form.getValues(`availability.${index}.slots`);
                                                                    form.setValue(
                                                                        `availability.${index}.slots`,
                                                                        slots.filter((_, i) => i !== slotIndex)
                                                                    );
                                                                }}
                                                            >
                                                                Remove
                                                            </Button>
                                                        </div>
                                                    ))}
                                                    <Button
                                                        variant="secondary"
                                                        onClick={() => {
                                                            const slots = form.getValues(`availability.${index}.slots`);
                                                            form.setValue(`availability.${index}.slots`, [...slots, { from: "", to: "" }]);
                                                        }}
                                                    >
                                                        Add Slot
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="pricing" className="mt-6">
                                    <div className="space-y-4 flex flex-col mx-auto w-[80%] sm:w-[50%]">
                                        <h2 className="text-2xl font-bold">Pricing</h2>
                                        <FormField
                                            control={form.control}
                                            name="hourlyRate"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Hourly Rate (USD)</FormLabel>
                                                    <FormControl>
                                                        <div className="flex items-center">
                                                            <span className="mr-2">$</span>
                                                            <Input type="number" min="5" {...field} onChange={(e) => field.onChange(Number(e.target.value) || '')} />
                                                        </div>
                                                    </FormControl>
                                                    <FormDescription>
                                                        Set your hourly rate. You can adjust this later.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </TabsContent>

                                <div className="flex justify-between mt-6">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => {
                                            const currentIndex = tabs.findIndex(tab => tab.id === activeTab)
                                            if (currentIndex > 0) {
                                                setActiveTab(tabs[currentIndex - 1].id)
                                            }
                                        }}
                                        disabled={activeTab === "about"}
                                    >
                                        Previous
                                    </Button>
                                    {activeTab !== "pricing" ? (
                                        <>
                                            {isSignedIn ? (
                                                <Button
                                                    type="button"
                                                    onClick={() => {
                                                        const currentIndex = tabs.findIndex(tab => tab.id === activeTab)
                                                        if (currentIndex < tabs.length - 1) {
                                                            if (!user) {
                                                                alert("Please Log in")
                                                                return
                                                            };
                                                            if (activeTab === "description" && currentStep !== 4) {
                                                                handleNext()
                                                                return
                                                            }
                                                            setActiveTab(tabs[currentIndex + 1].id)
                                                        };
                                                    }}
                                                >
                                                    Next
                                                </Button>
                                            ) : (
                                                <SignInButton><Button>Sign In</Button></SignInButton>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {fillReqiredDetailsNotification && "(Please fill all required details)"}
                                            <Button onClick={() => { setFillReqiredDetailsNotification(true) }} type="submit">
                                                {loading ? (<div className="animate-spin"><FaSpinner /></div>) : ("Submit")}
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </form>
                        </Form>
                    </Tabs>
                </CardContent>

                {submitted && (
                    <Dialog open={submitted} onOpenChange={setSubmitted}>
                        <DialogContent className="sm:max-w-[425px]">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <DialogTitle className="text-2xl font-bold mb-2">Thank You!</DialogTitle>
                            <DialogDescription>
                                Your details has been submitted successfully. Profile will be active within 24hr after review.
                            </DialogDescription>
                            <DialogFooter>
                                <Link href="/toefl-tutor">
                                    <Button>Go to homepage</Button>
                                </Link>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}
            </Card>
        </div >
    )
}

