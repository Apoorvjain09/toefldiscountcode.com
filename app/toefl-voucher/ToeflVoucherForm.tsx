"use client"

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { submitVoucherForm } from '@/lib/supabaseActions'
import { Book, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const formSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    contactNumber: z.string().regex(/^\d{10}$/, 'Contact number must be 10 digits'),
    query: z.string(),
})

interface VoucherFormProps {
    isSubmitted: boolean
    openModal: boolean
    setIsSubmitted: (state: boolean) => void
    setOpenModal: (open: boolean) => void
}

export default function TOEFLVoucherForm({ isSubmitted, openModal, setIsSubmitted, setOpenModal }: VoucherFormProps) {
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

    return (
        <>
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
        </>
    )
}