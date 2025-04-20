"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle2, MessageCircle, Users, Clock, Lock, X, Bell, ChevronRight, Shield, Sparkles } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsappCommunityPopup({ onJoinSuccess }: { onJoinSuccess?: () => void }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isJoining, setIsJoining] = useState(false)
    const [hasJoined, setHasJoined] = useState(false)
    const [showNotification, setShowNotification] = useState(false)

    const activeMembers = [
        { name: "Sarah J.", image: "/testimonials/animated-testimonial-1.avif", online: true },
        { name: "Michael T.", image: "/testimonials/animated-testimonial-2.jpg", online: true },
        { name: "Aisha K.", image: "/testimonials/animated-testimonial-3.jpg", online: false },
        { name: "David L.", image: "/testimonials/animated-testimonial-4.jpg", onlie: true },
        { name: "Emma R.", image: "/testimonials/animated-testimonial-5.jpg", online: false },
    ]

    const benefits = [
        { icon: <MessageCircle className="h-4 w-4" />, text: "Daily tips and resources" },
        { icon: <Users className="h-4 w-4" />, text: "Connect with 250+ members" },
        { icon: <Clock className="h-4 w-4" />, text: "Real-time updates and support" },
        { icon: <Lock className="h-4 w-4" />, text: "Private, secure community" },
    ]

    const handleJoin = () => {
        setIsJoining(true)

        setTimeout(() => {
            setIsJoining(false)
            setHasJoined(true)

            onJoinSuccess?.()

            window.open("https://chat.whatsapp.com/G7Kra0Ec0AVD9gNZzJRE4i", "_blank")

            setTimeout(() => {
                setIsOpen(false)
                // Reset state after modal closes
                setTimeout(() => {
                    setHasJoined(false)
                }, 500)
            }, 1500)
        }, 1500)
    }

    useEffect(() => {
        const audio = new Audio("/sounds/notification.mp3")

        const handleInteraction = () => {
            setTimeout(() => {
                audio.play().catch((err) => {
                    console.warn("Sound failed to play:", err)
                })

                setShowNotification(true)
            }, 3000)

            window.removeEventListener("pointerdown", handleInteraction)
        }

        window.addEventListener("pointerdown", handleInteraction)

        return () => {
            window.removeEventListener("pointerdown", handleInteraction)
        }
    }, [])

    return (
        <>
            <AnimatePresence>
                {showNotification && !isOpen && (
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="fixed bottom-6 right-6 z-50"
                    >
                        <div className="relative">
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 5, duration: 0.5 }}
                            >
                                <Button
                                    onClick={() => setIsOpen(true)}
                                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full pl-4 pr-5 py-6 shadow-lg flex items-center gap-3 group"
                                >
                                    <div className="bg-white/20 rounded-full p-1.5">
                                        <FaWhatsapp className="h-5 w-5" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <div className="flex items-center gap-1.5">
                                            <span className="font-semibold">WhatsApp Community</span>
                                            <Badge variant="outline" className="bg-white/20 text-white text-xs border-0">
                                                New
                                            </Badge>
                                        </div>
                                        <span className="text-xs opacity-90">900+ Students</span>
                                    </div>
                                    <ChevronRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </motion.div>

                            {/* Pulsing dot */}
                            <span className="absolute top-0 right-0 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="w-full max-w-[95%] sm:max-w-md md:max-w-lg max-h-[95%] p-0 overflow-y-auto border-none rounded-2xl">
                    {!hasJoined ? (
                        <>
                            {/* Header with WhatsApp branding */}
                            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 relative">
                                {/* <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute right-4 top-4 rounded-full bg-white/20 p-1 hover:bg-white/30 transition-colors"
                                >
                                    <X className="h-4 w-4 text-white" />
                                </button> */}

                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-white rounded-full p-2">
                                        <MessageCircle className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">TOEFL Study Group</h3>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-white/90 text-sm">WhatsApp Community</span>
                                            <Badge variant="outline" className="bg-white/20 text-white text-xs border-0">
                                                Exclusive
                                            </Badge>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-white/90 text-sm">
                                    Join our active community of TOEFL test-takers for daily practice, expert tips, and support from peers
                                    and tutors.
                                </p>
                            </div>

                            <div className="p-6">
                                {/* Active members */}
                                <div className="mb-5">
                                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Active Members</h4>
                                    <div className="flex items-center -space-x-2 overflow-hidden ">
                                        {activeMembers.map((member, i) => (
                                            <div key={i} className="relative">
                                                <Avatar className="border-2 border-background">
                                                    <AvatarImage src={member.image} alt={member.name} />
                                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                {member.online && (
                                                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-white" />
                                                )}
                                            </div>
                                        ))}
                                        <div className="pl-5 flex items-center justify-center w-8 h-8 rounded-full bg-muted text-xs font-medium">
                                            +245
                                        </div>
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div className="mb-5 space-y-3">
                                    <h4 className="text-sm font-medium text-muted-foreground">Why Join Our Group</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm">
                                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                                    {benefit.icon}
                                                </div>
                                                <span>{benefit.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <div className="bg-muted/50 rounded-lg p-3 mb-5">
                                    <div className="flex gap-3">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src="/testimonials/animated-testimonial-4.jpg" alt="User" />
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm italic">
                                                "This group helped me improve my TOEFL score by 15 points in just 3 weeks!"
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-1">— Jamie D., Scored 112 on TOEFL</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Privacy notice */}
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
                                    <Shield className="h-3.5 w-3.5" />
                                    <span>Your privacy is protected. We never share your contact information.</span>
                                </div>

                                {/* Action buttons */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button
                                        onClick={handleJoin}
                                        disabled={isJoining}
                                        className="bg-green-600 hover:bg-green-700 text-white flex-1 py-6"
                                    >
                                        {isJoining ? (
                                            <>
                                                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                                Joining...
                                            </>
                                        ) : (
                                            <>
                                                <MessageCircle className="mr-2 h-4 w-4" />
                                                Join WhatsApp Group
                                            </>
                                        )}
                                    </Button>
                                    <Button variant="outline" onClick={() => { onJoinSuccess?.() }} className="sm:flex-initial flex-1">
                                        Already Joined
                                    </Button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="p-8 flex flex-col items-center justify-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="rounded-full bg-green-100 dark:bg-green-900/30 p-4 mb-4"
                            >
                                <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-500" />
                            </motion.div>
                            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                                <h3 className="text-xl font-semibold mb-2 text-center">You're In!</h3>
                                <p className="text-center text-muted-foreground mb-4">
                                    Welcome to our TOEFL Study Group. You'll be redirected to WhatsApp shortly.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-2 text-sm text-green-600 dark:text-green-500"
                            >
                                <Sparkles className="h-4 w-4" />
                                <span>Connecting you with 250+ TOEFL aspirants</span>
                            </motion.div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}

