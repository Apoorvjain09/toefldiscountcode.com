'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Progress } from "@/components/ui/progress"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import confetti from 'canvas-confetti'
import { Sparkles } from 'lucide-react'
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useUser } from '@clerk/nextjs'
import { FaSpinner } from 'react-icons/fa'

const steps = [
    { id: 'toefl', title: "Tentative TOEFL exam date?" },
    { id: 'country', title: "What's your dream country?" },
]

export default function AfterTestDetailsModal({
    isOpen,
    onClose,
    type,
}: {
    isOpen: boolean;
    onClose: () => void;
    type: string;
}) {
    const [step, setStep] = useState(0)
    const { user } = useUser()
    const [loading, setLoading] = useState(false)
    const form = useForm({
        defaultValues: {
            country: '',
            toeflDate: new Date(),
        },
    })

    const onSubmit = async (data: any) => {
        try {
            setLoading(true)
            const userEmail = user?.emailAddresses[0]?.emailAddress || "";
            const fullName = user?.fullName || "Not Disclosed";

            await setDoc(doc(db, `student/${user?.id}`), {
                details: {
                    dream_country: data.country,
                    toefl_examDate: data.toeflDate.toISOString(),
                    FullName: fullName,
                    userEmail: userEmail
                },
            });

            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            })
            onClose();
            setStep(0)
        }
        catch (error) {
            console.error("Error storing data:", error);
        }
        setLoading(false)
    };

    const nextStep = () => {
        setStep(1);
    }
    const prevStep = () => {
        setStep(0);
    }

    return (
        <>
            {type == "test1" && (
                <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
                    <DialogContent className="w-[90vw] sm:w-auto sm:max-w-[425px] rounded-2xl">
                        <DialogHeader>
                            <div className="flex items-center space-x-2">
                                <Sparkles className="h-6 w-6 text-purple-500" />
                                <DialogTitle className="text-2xl font-bold text-gray-800">
                                    Create Your Personalized TOEFL Study Plan
                                </DialogTitle>
                            </div>
                        </DialogHeader>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <Progress value={(step + 1) / steps.length * 100} className="w-full" />
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {step === 1 && (
                                        <div className="space-y-4">
                                            <h3 className="text-lg font-medium">{steps[step].title}</h3>
                                            <Select onValueChange={(value) => form.setValue('country', value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a country" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="usa">United States</SelectItem>
                                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                                    <SelectItem value="canada">Canada</SelectItem>
                                                    <SelectItem value="australia">Australia</SelectItem>
                                                    <SelectItem value="germany">Germany</SelectItem>
                                                    <SelectItem value="Not disclosed">Other..</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    )}
                                    {step === 0 && (
                                        <div className="space-y-4">
                                            <h3 className="flex items-center justify-center text-lg font-medium">{steps[step].title}</h3>
                                            <Calendar
                                                mode="single"
                                                selected={form.watch('toeflDate')}
                                                onSelect={(date) => form.setValue('toeflDate', date as Date)}
                                                className="rounded-xl border w-fit mx-auto shadow-xl"
                                            />
                                        </div>
                                    )}
                                </motion.div>

                                <div className="flex justify-between">
                                    <Button onClick={prevStep} disabled={step === 0} className='bg-gradient-to-br from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600'>
                                        Previous
                                    </Button>
                                    {(step == 0) && (
                                        <Button onClick={nextStep} className='bg-gradient-to-br from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600'>
                                            Next
                                        </Button>
                                    )}
                                    {(step == 1) && (
                                        <Button type="submit" className='bg-gradient-to-br from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600'>
                                            {loading ? <div className='animate-pulse'><FaSpinner /></div> : "Submit"}
                                        </Button>
                                    )}
                                </div>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
            )}
        </>
    )
}

