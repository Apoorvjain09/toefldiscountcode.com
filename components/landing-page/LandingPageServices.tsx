"use client";

import { motion } from "framer-motion";
import { Sparkles, FileText, BookOpen, FolderOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { SignIn, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function LandingPageServices() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [showClerkLogInModal, setShowClerkLogInModal] = useState(false)
    const { user, isSignedIn } = useUser()
    const features = [
        {
            title: "Mock Test",
            description: "Just Like the Real Test",
            icon: FileText,
            color: "bg-blue-500",
            href: "/tests-showcase",
            loginRequired: true
        },
        {
            title: "Practice Question",
            description: "Focus on Weak Areas",
            icon: BookOpen,
            color: "bg-purple-500",
            href: "/practice-questions",
        },
        {
            title: "Toefl Vocabulary Practice",
            description: "Improve Vocab by practicing toefl specific words",
            icon: BookOpen,
            color: "bg-green-500",
            href: "/vocab-ladder",
        },
        {
            title: "AI University Shortlisting",
            description: "Get the Best Matches Based on Your Profile",
            icon: Sparkles,
            color: "bg-red-500",
            href: "/university-shortlisting",
        },
        {
            title: "Join Student Community",
            description: "Connect with Like-minded Test Takers",
            icon: FolderOpen,
            color: "bg-indigo-500",
            href: "https://chat.whatsapp.com/CHwPiz6xEpHC0WSivb2UN7",
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.3 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="container mx-auto px-4 sm:px-8 py-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20" >
            <div className="space-y-8" >
                <motion.div
                    className="text-center space-y-2"
                    initial={{ opacity: 0, y: -50 }
                    }
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Your success starts with Consistent Practice!
                    </motion.h1>
                    < motion.p
                        className="text-gray-500 max-w-[600px] mx-auto"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    >
                        Practice makes perfect.Start your journey to success with our comprehensive study tools.
                    </motion.p>
                </motion.div>

                < div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" >
                    <motion.div
                        className="md:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 text-white h-full" >
                            <CardHeader>
                                <CardTitle className="text-2xl sm:text-3xl font-bold" > Take a Free Mock Test </CardTitle>
                                < CardDescription className="text-blue-100" > For All TOEFLgoglobal members! </CardDescription>
                            </CardHeader>
                            < CardContent >
                                <div className="absolute top-4 right-4" >
                                    <Sparkles className="w-6 h-6 animate-pulse" />
                                </div>
                                < div className="mt-4" >
                                    {
                                        isSignedIn ? (
                                            <Link href="/tests-showcase" >
                                                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50" >
                                                    Give Mock Test
                                                    <span className="ml-2" >→</ span >
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button onClick={() => { setShowClerkLogInModal(true) }} size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50" >
                                                Sign Up to Start
                                                < span className="ml-2" >→</span>
                                            </Button>
                                        )}

                                </div>
                                <div className="absolute bottom-0 right-0 opacity-10" >
                                    <FileText className="w-32 h-32" />
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                        >
                            <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1" >
                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    < CardTitle className="text-xl" > {feature.title} </CardTitle>
                                    < CardDescription > {feature.description} </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button
                                        variant="ghost"
                                        className="group-hover:translate-x-1 transition-transform duration-300"
                                        asChild
                                    >
                                        {(feature.href === "Mock Tests") ? (
                                            <>
                                                {isSignedIn ? (
                                                    <Button variant="ghost" onClick={() => { setShowClerkLogInModal(true) }}>
                                                        Get Started
                                                        < span className="ml-2" >→</span>
                                                    </Button>
                                                ) : (
                                                    <Link href={feature.href} >
                                                        Get Started
                                                        < span className="ml-2" >→</span>
                                                    </Link>
                                                )}
                                            </>
                                        ) : (
                                            <Link href={feature.href} >
                                                Get Started
                                                < span className="ml-2" >→</span>
                                            </Link>
                                        )}
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {showClerkLogInModal && (
                <Dialog open={showClerkLogInModal} onOpenChange={setShowClerkLogInModal} >
                    <DialogContent className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-none" >
                        <div className="flex flex-col items-center" >
                            <SignIn forceRedirectUrl="/" routing="hash" />
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </div >
    );
}
