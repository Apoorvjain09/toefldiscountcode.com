"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BookOpen, Calendar, Video, MailIcon, CheckCircle, Star, ExternalLink, Book } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import { submitVoucherForm } from '@/lib/supabaseActions'
import TOEFLVoucherForm from './ToeflVoucherForm'

interface HeroProps {
    voucher: string;
    booking: string;
    discount: string;
}

export default function TOEFLPricing({ voucher, booking, discount }: HeroProps) {
    const [openCheckReliabilityModal, setOpenCheckReliabilityModal] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const pricingOptions = [
        {
            price: discount,
            actualPrice: 18000,
            savings: 18000 - Number(discount.replace(/,/g, '')),
            description: "You will get the code through watching the youtube video.",
            bookingMethod: "youtube_code",
        },
        {
            price: voucher,
            actualPrice: 18000,
            savings: 18000 - Number(voucher.replace(/,/g, '')),
            description: "You will get the voucher code on your registered Email ID",
            bookingMethod: "buy_voucher",
            popular: true,
        },
        // {
        //     price: booking,
        //     actualPrice: 18000,
        //     savings: 18000 - Number(booking.replace(/,/g, '')),
        //     description: "We will book the exam slot for you.",
        //     bookingMethod: "slot_booking",
        // },
    ]

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        contactNumber: "",
        query: "",
    })

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const [firstName, ...rest] = formData.fullName.trim().split(" ")
        const lastName = rest.join(" ") || "-"

        try {
            await submitVoucherForm({
                firstName,
                lastName,
                email: formData.email,
                contactNumber: formData.contactNumber,
                query: formData.query,
            })

            setFormData({
                fullName: "",
                email: "",
                contactNumber: "",
                query: "",
            })
            setIsFormSubmitted(true);
        } catch (err) {
            alert("Something went wrong. Please try again.")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div id="pricing-section" className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">TOEFL Exam Booking Options</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {pricingOptions.map((option, index) => (
                        <Card key={index} className={`flex flex-col ${option.popular ? 'border-gray-800' : ''}`}>
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <CardTitle className="text-2xl font-bold">₹{option.price.toLocaleString()}</CardTitle>
                                    {option.popular && <Badge variant="default" className={`${option.popular ? 'animate-pulse' : ''}`}>Most Popular!</Badge>}
                                </div>
                                <CardDescription className="text-sm">
                                    Actual Price – ₹{option.actualPrice.toLocaleString()}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <Badge variant="secondary" className="mb-4 text-base">
                                    You Save ₹{option.savings.toLocaleString()}
                                </Badge>
                                <p className="text-sm mb-4">{option.description}</p>
                                <Separator className="my-4" />
                                <div className="flex items-center text-sm text-muted-foreground">
                                    {option.bookingMethod === 'youtube_code' && (
                                        <>
                                            <Video className="mr-2 h-4 w-4" />
                                            <span>Click Down to Watch video</span>
                                        </>
                                    )}
                                    {option.bookingMethod === 'buy_voucher' && (
                                        <>
                                            <MailIcon className="mr-2 h-4 w-4" />
                                            <span>Get voucher code on email</span>
                                        </>
                                    )}
                                    {option.bookingMethod === 'slot_booking' && (
                                        <>
                                            <FaWhatsapp className="mr-2 h-4 w-4" />
                                            <span>Contact us at 9310017599</span>
                                        </>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 text-white"
                                                onClick={() => {
                                                    if (option.bookingMethod === 'youtube_code') {
                                                        window.open("https://www.youtube.com/watch?v=p6Lw3Oz2a7g", "_blank");
                                                    }
                                                    if (option.bookingMethod === 'buy_voucher') {
                                                        window.open("https://rzp.io/l/6UO7bMkD", "_blank");
                                                    }
                                                    if (option.bookingMethod === 'slot_booking') {
                                                        // window.open("https://wa.me/918802880181?text=Hi%2C%20I%E2%80%99m%20interested%20in%20purchasing%20a%20TOEFL%20voucher.%20Could%20you%20share%20the%20details%3F", "_blank");
                                                        setOpenModal(true)
                                                    }
                                                }}
                                            >
                                                <BookOpen className="mr-2 h-4 w-4" /> Know How!
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Click to proceed with booking</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </CardFooter>
                        </Card>
                    ))}
                    <Card id="reliability-section" className="flex flex-col border-green-500 shadow-sm">
                        <CardHeader>
                            <div className="flex items-center space-x-3 ">
                                <div className="rounded-full bg-green-100 dark:bg-green-900 p-2">
                                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                                </div>
                                <CardTitle className="text-lg font-semibold">Check Reliability</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="rounded-md bg-green-100 px-3 py-2 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                                Trusted by 1,000+ TOEFL aspirants
                            </div>

                            <CardDescription className="mt-4 text-sm text-muted-foreground">
                                Verified by 1,000+ students who booked TOEFL at the lowest price.
                            </CardDescription>
                            <Separator className="my-4" />

                            <p className="text-xs italic text-green-700 dark:text-green-300">
                                Trusted by test-takers across India.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            className="w-full bg-gradient-to-r from-green-600 to-blue-600 px-8 py-3 text-white"
                                            onClick={() => { setOpenCheckReliabilityModal(true) }}
                                        >
                                            <BookOpen className="mr-2 h-4 w-4" /> Verify Our Credibility
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Click to proceed with booking</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <Dialog open={openCheckReliabilityModal} onOpenChange={setOpenCheckReliabilityModal}>
                <DialogContent className="sm:max-w-[700px]">
                    <DialogHeader>
                        <DialogTitle>Verify Before You Decide</DialogTitle>
                        <DialogDescription>
                            Check our credibility through these verification options before making your decision.
                        </DialogDescription>
                    </DialogHeader>
                    <Tabs defaultValue="video" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 h-auto">
                            <TabsTrigger value="video" className="flex items-center gap-2">
                                <Video className="h-4 w-4 hidden sm:block" />
                                Watch <br />Video
                            </TabsTrigger>
                            <TabsTrigger value="reviews" className="flex items-center gap-2">
                                <Star className="h-4 w-4 hidden sm:block" />
                                Google  <br />Reviews
                            </TabsTrigger>
                            <TabsTrigger value="call" className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 hidden sm:block" />
                                Book  <br />a Call
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="video" className="pt-4">
                            <Card>
                                <CardHeader>
                                    <CardDescription>MJ Study Abroad is an authorized ETS agent with ETS Agent ID IND3205101, ensuring a 100% safe and authentic purchase.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video bg-muted rounded-md overflow-hidden">
                                        <video className="w-full h-full object-cover" autoPlay controls poster="/placeholder.svg?height=400&width=600">
                                            <source src="https://www.dropbox.com/scl/fi/l2z0uqtk4o9wyjftg6qam/Check-Reliability-Final.mp4?rlkey=g4pq3nmdlb69mlft1rhxncocf&st=tz6xnwtq&raw=1" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline" size="sm">
                                        Previous Video
                                    </Button>
                                    <Button size="sm">Next Video</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>

                        <TabsContent value="reviews" className="pt-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        Google Reviews
                                        <Badge variant="outline" className="ml-2 bg-green-50">
                                            4.8 <Star className="h-3 w-3 fill-yellow-400 ml-1" />
                                        </Badge>
                                    </CardTitle>
                                    <CardDescription>See what our students are saying about us</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4 max-h-[30vh] overflow-y-scroll">
                                        {[
                                            {
                                                name: "Niranjala Mohad",
                                                date: "10 hours ago",
                                                rating: 5,
                                                comment: "Very good website. Authentic site. Saved me money on my TOEFL booking. Prompt reply from the staff on email and Wasapp.",
                                            },
                                            {
                                                name: "Vishnu Vardhan",
                                                date: "11 hours ago",
                                                rating: 5,
                                                comment: "⭐⭐⭐⭐⭐ Good service. Helped with TOEFL voucher booking quickly and smoothly.",
                                            },
                                            {
                                                name: "Akshay",
                                                date: "1 day ago",
                                                rating: 5,
                                                comment: "Good experience with booking of TOEFL.",
                                            }
                                        ].map((review, index) => (
                                            <div key={index} className="flex gap-4 pb-4 border-b">
                                                <Avatar>
                                                    <AvatarFallback>
                                                        {review.name
                                                            .split(" ")
                                                            .map((n) => n[0])
                                                            .join("")}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="space-y-1">
                                                    <div className="flex items-center">
                                                        <h4 className="font-semibold">{review.name}</h4>
                                                        {/* <span className="text-xs text-muted-foreground ml-2">{review.date}</span> */}
                                                    </div>
                                                    <div className="flex">
                                                        {Array(5)
                                                            .fill(0)
                                                            .map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400" : "fill-muted stroke-muted-foreground"}`}
                                                                />
                                                            ))}
                                                    </div>
                                                    <p className="text-sm">{review.comment}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <a
                                        href="https://g.co/kgs/kE459mz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                    >
                                        <Button variant="outline" className="w-full" size="sm">
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            View All Reviews on Google
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>
                        </TabsContent>

                        <TabsContent value="call" className="pt-4">
                            {isFormSubmitted ? (
                                <div className="flex flex-col items-center justify-cente p-6 text-center bg-white rounded-lg shadow-lg" >
                                    <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                                    <DialogTitle className="text-3xl font-semibold text-gray-900 mb-2">
                                        Thank You! 🎉
                                    </DialogTitle>
                                    <DialogDescription className="text-gray-400 mb-6">
                                        Your enquiry has been submitted successfully. We’ll get back to you soon!
                                    </DialogDescription>

                                    <p className="text-lg text-gray-800 font-medium">Want to boost your TOEFL score?</p>

                                    <div className="mt-6 w-full">
                                        <Link href="/practice-questions">
                                            <Button className='text-md w-full bg-black'>
                                                <Book className='text-white' /> Practice FREE TOEFL tests
                                            </Button>
                                        </Link>
                                    </div>

                                    <p className="mt-6 text-sm text-gray-500">
                                        Need help? <Link href="https://api.whatsapp.com/send/?phone=918802880181" className="text-blue-500 hover:underline">Contact us</Link>
                                    </p>
                                </div>
                            ) : (
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Book a 1:1 Call With a Counselor</CardTitle>
                                            <CardDescription>Schedule a free consultation to discuss your educational goals</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Full Name</Label>
                                                    <Input
                                                        id="name"
                                                        placeholder="Enter your name"
                                                        value={formData.fullName}
                                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    placeholder="Enter your phone number"
                                                    value={formData.contactNumber}
                                                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="query">What would you like to discuss?</Label>
                                                <Input
                                                    id="query"
                                                    placeholder="Briefly describe your query"
                                                    value={formData.query}
                                                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                                                />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button type="submit" className="w-full" disabled={loading}>
                                                {loading ? "Scheduling..." : "Schedule Call"}
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </form>
                            )}
                        </TabsContent>
                    </Tabs>
                </DialogContent>
            </Dialog>



            <TOEFLVoucherForm
                openModal={openModal}
                setOpenModal={setOpenModal}
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted}
            />
        </>
    )
}

