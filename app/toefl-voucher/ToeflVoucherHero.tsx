import { motion } from 'framer-motion'
import { GraduationCap, Copy, CheckCircle, ExternalLink } from 'lucide-react'
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
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";


const formSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    contactNumber: z.string().regex(/^\d{10}$/, 'Contact number must be 10 digits'),
    voucher: z.enum(['Voucher_Purchase', 'Exam_booking'], {
        required_error: 'Please select a voucher option',
    }),
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
            voucher: undefined,
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const formData = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            contactNumber: values.contactNumber,
            voucher: values.voucher,
            submittedAt: new Date().toISOString(), // Optional timestamp
        };

        try {
            const docRef = await addDoc(collection(db, "voucher"), formData);
            console.log("Form details saved successfully with ID: ", docRef.id);
            setIsSubmitted(true);
            form.reset();

            setTimeout(() => {
                setOpenModal(false);
            }, 5000);
        } catch (error) {
            console.error("Error saving form details: ", error);
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isSubmitted) {
                setOpenModal(true);
            }
        }, 10000);

        return () => clearTimeout(timeout);
    }, [isSubmitted]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4 md:p-8 lg:p-12">
            <Card className="mx-auto max-w-5xl overflow-hidden">
                <CardHeader className="space-y-4 p-6 md:p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            MJ Study Abroad × ETS Partnership
                        </div>
                        <h1 className="mt-2 text-muted-foreground">
                            Exclusive TOEFL exam discounts for students
                        </h1>
                    </motion.div>
                </CardHeader>

                <CardContent className="grid gap-8 p-6 md:p-8 lg:grid-cols-2">
                    <div className="space-y-6">
                        {[
                            { amount: voucher, type: 'Voucher' },
                            { amount: booking, type: 'Exam Booking' },
                            { amount: discount, type: 'Discount Code' },
                        ].map((offer, index) => (
                            <motion.div
                                key={offer.type}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="flex items-center space-x-4 rounded-lg border p-4 transition-colors hover:bg-accent"
                            >
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
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                        <Image
                            width={500}
                            height={500}
                            src="/assets/hero.png"
                            alt="Student studying for TOEFL"
                            className="h-full w-full object-cover"
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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center py-8"
                        >
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <DialogTitle className="text-2xl font-bold mb-2">Thank You!</DialogTitle>
                            <DialogDescription>
                                Your enquiry has been submitted successfully. We'll get back to you soon.
                            </DialogDescription>
                        </motion.div>
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
                                        name="voucher"
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
                                        <Button type="submit" className="w-full">Submit Enquiry</Button>
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

