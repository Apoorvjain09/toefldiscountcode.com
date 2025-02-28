import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BookOpen, Info, Mail, Calendar, Video, MailIcon } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'


interface HeroProps {
    voucher: string;
    booking: string;
    discount: string;
}

export default function TOEFLPricing({ voucher, booking, discount }: HeroProps) {
    const pricingOptions = [
        {
            price: discount,
            actualPrice: 16900,
            savings: 16900 - Number(discount.replace(/,/g, '')),
            description: "You will get the code through watching the youtube video.",
            bookingMethod: "youtube_code",
        },
        {
            price: booking,
            actualPrice: 16900,
            savings: 16900 - Number(booking.replace(/,/g, '')),
            description: "We will book the exam slot for you, you will not get the voucher code",
            bookingMethod: "slot_booking",
        },
        {
            price: voucher,
            actualPrice: 16900,
            savings: 16900 - Number(voucher.replace(/,/g, '')),
            description: "You will get the voucher code on your registered Email ID",
            bookingMethod: "buy_voucher",
            popular: true,
        },
    ]


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">TOEFL Exam Booking Options</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                                        <span>Talk to counselor via whatsapp</span>
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
                                                    window.open("https://wa.me/918802880181?text=Hi%2C%20I%E2%80%99m%20interested%20in%20purchasing%20a%20TOEFL%20voucher.%20Could%20you%20share%20the%20details%3F", "_blank");
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
            </div>
        </div>
    )
}

