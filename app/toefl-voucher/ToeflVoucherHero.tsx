import { motion } from 'framer-motion'
import { GraduationCap, Copy, CheckCircle, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

export default function ToeflVoucherHero() {

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
                        <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            MJ Study Abroad × ETS Partnership
                        </h1>
                        <p className="mt-2 text-muted-foreground">
                            Exclusive TOEFL exam discounts for international students
                        </p>
                    </motion.div>
                </CardHeader>

                <CardContent className="grid gap-8 p-6 md:p-8 lg:grid-cols-2">
                    <div className="space-y-6">
                        {[
                            { amount: 4200, type: 'Exam Booking' },
                            { amount: 3200, type: 'Voucher' },
                            { amount: 1700, type: 'Discount Code' },
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
                            className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 text-white transition-all hover:shadow-lg sm:w-auto"
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                Know How ?!
                            </span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Button>
                        <p className="text-center text-sm text-muted-foreground sm:text-right">
                            Limited time offer. Expires soon.
                        </p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

