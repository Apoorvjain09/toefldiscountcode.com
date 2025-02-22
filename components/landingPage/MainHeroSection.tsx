"use client"

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle, LogIn, PenSquare, Play, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { Poppins } from 'next/font/google';
import { SignIn, SignInButton, useUser } from "@clerk/nextjs"
import Link from "next/link"

const PoppinsFont = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export function MainHeroSection() {
    const [progress, setProgress] = useState(0)
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 100], [1, 0])
    const [showClerkLogInModal, setShowClerkLogInModal] = useState(false)
    const { user, isSignedIn } = useUser()
    const SpeakingAnimatedProgressRef = useRef(null);
    const [hasSpeakingAnimatedProgressRefStarted, setHasSpeakingAnimatedProgressRefStarted] = useState(false);
    const [hasSpeakingAnimatedProgressRefFinished, setHasSpeakingAnimatedProgressRefFinished] = useState(false);
    const [showFloatingButtonAfterProgressBarFinished, setShowFloatingButtonAfterProgressBarFinished] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasSpeakingAnimatedProgressRefStarted) {
                    setHasSpeakingAnimatedProgressRefStarted(true);
                    startDemo();
                }
            },
            { threshold: 0.4 }
        );

        if (SpeakingAnimatedProgressRef.current) {
            observer.observe(SpeakingAnimatedProgressRef.current);
        }

        return () => {
            if (SpeakingAnimatedProgressRef.current) {
                observer.unobserve(SpeakingAnimatedProgressRef.current);
            }
        };
    }, [hasSpeakingAnimatedProgressRefStarted]);

    // Simulate progress increment
    const startDemo = () => {
        setProgress(0)
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setHasSpeakingAnimatedProgressRefFinished(true)
                    return 100
                }
                return prev + 20
            })
        }, 1000)
    }

    useEffect(() => {
        if (hasSpeakingAnimatedProgressRefFinished) {
            setShowFloatingButtonAfterProgressBarFinished(true);
            const timer = setTimeout(() => {
                setShowFloatingButtonAfterProgressBarFinished(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [hasSpeakingAnimatedProgressRefFinished]);

    return (
        <div className={`${PoppinsFont.className} relative min-h-screen bg-white`}>
            {/* Subtle gradient accent */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-50 via-blue-100 to-white rounded-bl-full opacity-60" />

            <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <motion.div
                    className="flex items-center gap-2 text-sm text-gray-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex -space-x-2">
                        <Image
                            width={100}
                            height={100}
                            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                            src="/testimonials/animated-testimonial-1.avif"
                            alt="A"
                        />
                        <Image
                            width={100}
                            height={100}
                            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                            src="/testimonials/animated-testimonial-2.jpg"
                            alt="B"
                        />
                        <Image
                            width={100}
                            height={100}
                            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                            src="/testimonials/animated-testimonial-3.jpg"
                            alt="C"
                        />
                        <Image
                            width={100}
                            height={100}
                            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                            src="/testimonials/animated-testimonial-4.jpg"
                            alt="D"
                        />
                        <Image
                            width={100}
                            height={100}
                            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                            src="/testimonials/animated-testimonial-5.jpg"
                            alt="E"
                        />
                    </div>
                    <span className="text-xs bg-white shadow-blue-400 shadow-md rounded-lg text-center p-1 sm:bg-none sm:shadow-none sm:text-start sm:p-0 sm:text-sm">Join 50,000+ students who improved their TOEFL scores</span>
                </motion.div>

                <div className="mt-10 mb-10">
                    <motion.h1
                        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Master TOEFL Prep at a price
                        <span className="block text-blue-600">That Feels Unreal</span>
                    </motion.h1>

                    {/* <motion.p
                        className="mt-4 text-lg text-gray-600 max-w-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Get personalized feedback, adaptive learning, and real-time scoring. Our AI technology ensures you're
                        always practicing at the right level.
                    </motion.p> */}
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Left Column - Main Content */}
                    <motion.div
                        className="flex flex-col gap-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >

                        {/* Feature List */}
                        <motion.ul
                            className="space-y-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            {[
                                "AI-powered personalized learning path",
                                "Real-time pronunciation feedback",
                                "Score prediction with 95% accuracy",
                                "24/7 AI writing evaluation",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="h-5 w-5 text-blue-600" />
                                    {feature}
                                </li>
                            ))}
                        </motion.ul>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            {isSignedIn ? (
                                <Link href="/tests-showcase">
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                        Give Mock Test
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            ) : (
                                <Button onClick={() => { setShowClerkLogInModal(true) }} size="lg" className="bg-blue-600 hover:bg-blue-700">
                                    Register Now
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            )}

                            <Link href="/practice-questions">
                                <Button size="lg" variant="outline" onClick={startDemo}>
                                    Sectional Practice
                                    <Play className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            className="flex flex-wrap items-center gap-8 text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <div className="flex items-center gap-1">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                                    ))}
                                </div>
                                <span className="font-medium">4.9/5</span>
                                <span className="text-gray-500">(2.5k+ reviews)</span>
                            </div>
                            <div className="h-6 w-px bg-gray-200" />
                            <div className="flex items-center justify-center gap-2">
                                <Image src="/assets/ets-logo.webp" height={200} width={200} alt="Verified" className="h-[3rem] w-auto" />
                                <span className="mt-2">ETS Certified Partner</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Interactive Demo */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        ref={SpeakingAnimatedProgressRef}
                    >
                        <Card className="relative overflow-hidden border-2">
                            <CardContent className="p-6">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Speaking Practice</h3>
                                        <p className="text-sm text-gray-500">
                                            Describe a place you've visited that left a lasting impression on you.
                                        </p>
                                    </div>

                                    {progress > 0 && (
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>Analyzing response...</span>
                                                <span>{progress}%</span>
                                            </div>
                                            <Progress value={progress} className="h-2" />
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            <h4 className="text-sm font-medium mb-2">Real-time Feedback</h4>
                                            <ul className="space-y-2 text-sm text-gray-600">
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                                    Clear pronunciation
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                                    Good pace
                                                </li>
                                                <li className="flex items-center gap-2 opacity-40">
                                                    <CheckCircle className="h-4 w-4" />
                                                    Natural intonation
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>

                            {/* Floating Elements */}
                            <div className="absolute -top-6 -right-6 h-24 w-24 bg-blue-50 rounded-full blur-2xl" />
                            <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-blue-50 rounded-full blur-2xl" />
                        </Card>

                        {/* floating buttton for mobile */}
                        <AnimatePresence>
                            {(showFloatingButtonAfterProgressBarFinished) && (
                                <motion.div
                                    className="block sm:hidden fixed bottom-6 left-1/2 z-50"
                                    initial={{ y: 100, x: "-50%" }}
                                    animate={{ y: 0, x: "-50%" }}
                                    exit={{ y: 100, opacity: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                >
                                    {isSignedIn ? (
                                        <Link href="/practice-questions">
                                            <Button
                                                className="relative px-6 py-6 shadow-xl bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90"
                                                size="lg"
                                            >
                                                <motion.div
                                                    className="absolute inset-0 rounded-lg bg-primary/10"
                                                    animate={{
                                                        scale: [1, 1.05, 1],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Number.POSITIVE_INFINITY,
                                                        ease: "easeInOut",
                                                    }}
                                                />
                                                <span className="relative flex items-center gap-2">
                                                    <PenSquare className="size-4" />
                                                    <span className="font-semibold">Section wise Practice</span>
                                                </span>
                                                <motion.div
                                                    className="absolute inset-0 rounded-lg bg-primary/10 blur-xl"
                                                    animate={{
                                                        opacity: [0.2, 0.5, 0.2],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Number.POSITIVE_INFINITY,
                                                        ease: "easeInOut",
                                                    }}
                                                />
                                            </Button>
                                        </Link>

                                    ) : (
                                        <Button
                                            onClick={() => setShowClerkLogInModal(true)}
                                            className="relative px-6 py-6 shadow-xl bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90"
                                            size="lg"
                                        >
                                            <motion.div
                                                className="absolute inset-0 rounded-lg bg-primary/10"
                                                animate={{
                                                    scale: [1, 1.05, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                            <span className="relative flex items-center gap-2">
                                                <LogIn className="size-4" />
                                                <span className="font-semibold">Sign Up Now</span>
                                            </span>
                                            <motion.div
                                                className="absolute inset-0 rounded-lg bg-primary/10 blur-xl"
                                                animate={{
                                                    opacity: [0.2, 0.5, 0.2],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                        </Button>
                                    )}

                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Floating Badges */}
                        <motion.div
                            className="absolute -top-4 -right-4 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <span className="text-sm font-medium">AI-Powered</span>
                            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                        </motion.div>
                    </motion.div>
                </div>

                {showClerkLogInModal && (
                    <Dialog open={showClerkLogInModal} onOpenChange={setShowClerkLogInModal}>
                        <DialogContent className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-none">
                            <div className="flex flex-col items-center">
                                <SignIn forceRedirectUrl="/" routing="hash" />
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </div>
        </div>
    )
}

