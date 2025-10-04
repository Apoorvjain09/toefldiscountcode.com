"use client"

import { GraduationCap, Copy, CheckCircle, ExternalLink, Book } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { submitVoucherForm } from '@/lib/supabaseActions'


const formSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    contactNumber: z.string().regex(/^\d{10}$/, 'Contact number must be 10 digits'),
    query: z.string()
})

interface HeroProps {
    voucher: string;
    booking: string;
    discount: string;
}

export default function ToeflVoucherHero({ voucher, booking, discount }: HeroProps) {
    const [openModal, setOpenModal] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            contactNumber: '',
            query: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitted(true)
        try {
            await submitVoucherForm(values)
            form.reset()

            setTimeout(() => setOpenModal(false), 7000)
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         if (!isSubmitted) {
    //             setOpenModal(true);
    //         }
    //     }, 10000);

    //     return () => clearTimeout(timeout);
    // }, [isSubmitted]);

    useEffect(() => {
        if (openModal) {
            localStorage.setItem("externalTGGModelOpen", "true");
        } else {
            localStorage.setItem("externalTGGModelOpen", "false");
        }
    }, [openModal]);


    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4 md:p-8 lg:p-12">
            <Card className="mx-auto max-w-5xl overflow-hidden">
                <CardHeader className="space-y-4 p-6 md:p-8 text-center">
                    <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        MJ Study Abroad × ETS Partnership
                    </div>
                    <h1 className="mt-2 text-muted-foreground">
                        Exclusive TOEFL exam discounts for students
                    </h1>
                </CardHeader>

                <CardContent className="grid gap-8 p-6 md:p-8 lg:grid-cols-2">
                    <div className="space-y-6">
                        {[
                            { amount: 18000 - Number(discount.replace(/,/g, '')), type: 'Discount Code' },
                            { amount: 18000 - Number(voucher.replace(/,/g, '')), type: 'Voucher' },
                            // { amount: 18000 - Number(booking.replace(/,/g, '')), type: 'Exam Booking' },
                        ].map((offer, index) => (
                            <div
                                key={offer.type}
                                className="flex items-center space-x-4 rounded-lg border p-4 transition-colors hover:bg-accent cursor-pointer"
                                onClick={() => {
                                    const target = document.getElementById('pricing-section');
                                    target?.scrollIntoView({ behavior: 'smooth' });
                                }}                            >
                                <div className="rounded-full bg-purple-100 p-2.5 dark:bg-purple-900">
                                    <GraduationCap className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <p className="font-medium">Save on TOEFL {offer.type}</p>
                                    <div className="flex items-center space-x-2">
                                        <Badge variant="secondary" className="text-lg">
                                            INR {offer.amount.toLocaleString()}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div onClick={() => {
                            const target = document.getElementById('reliability-section')
                            if (target) {
                                const topOffset = target.getBoundingClientRect().top + window.scrollY - 100 // adjust -100 as needed
                                window.scrollTo({ top: topOffset, behavior: 'smooth' })
                            }
                        }}
                        >
                            <Card className="group transition-shadow hover:shadow-lg border-green-200 dark:border-green-800 cursor-pointer">
                                <CardHeader className="flex flex-row items-center space-x-4 p-4">
                                    <div className="rounded-full bg-green-100 dark:bg-green-900 p-2.5 transition-transform duration-300 group-hover:scale-105">
                                        <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-300" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-lg font-semibold">Check Reliability</p>
                                        <p className="text-sm text-muted-foreground">
                                            Verified by 1,000+ students who booked TOEFL at the lowest price.
                                        </p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-xs text-green-700 dark:text-green-300 italic">
                                        Trusted by top scorers across India.
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                        <Image
                            width={500}
                            height={500}
                            src="/assets/hero.png"
                            alt="Student studying for TOEFL"
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>
                </CardContent>

                <Separator />

                <CardFooter className="flex flex-col space-y-4 p-6 md:p-8">
                    <div className="flex w-full flex-col items-center justify-between space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Button
                            onClick={() => { setOpenModal(true) }}
                            className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 text-white transition-all hover:shadow-lg sm:w-auto"
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                Enquire Now!
                            </span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Button>
                        <p className="text-center text-sm text-muted-foreground sm:text-right">
                            Limited time offer. Expires soon.
                        </p>
                    </div>
                </CardFooter>
            </Card>

            <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogContent className="sm:max-w-[425px]">
                    {isSubmitted ? (
                        <div className="flex flex-col items-center justify-center py-12 px-6 text-center bg-white rounded-lg shadow-lg">
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
                        <>
                            <DialogHeader>
                                <DialogTitle>Discount Voucher Form</DialogTitle>
                                <DialogDescription>
                                    Enquire about our TOEFL exam discounts.
                                </DialogDescription>
                            </DialogHeader>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First Name</FormLabel>
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
                                                <FormLabel>Last Name</FormLabel>
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
                                                    <Input placeholder="john.doe@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="contactNumber"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Contact Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="1234567890" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="query"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Select your voucher</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a voucher option" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Voucher_Purchase">
                                                            Voucher Purchase
                                                        </SelectItem>
                                                        <SelectItem value="Exam_booking">
                                                            Exam booking
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <DialogFooter>
                                        <Button type="submit" disabled={isSubmitted} className="w-full">Submit Enquiry</Button>
                                    </DialogFooter>
                                </form>
                            </Form>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}

