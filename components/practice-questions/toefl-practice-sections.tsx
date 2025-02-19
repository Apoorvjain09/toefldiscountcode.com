"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { BookOpen, Headphones, Loader2, Mic, Pencil, X } from "lucide-react"
import { Separator } from "@radix-ui/react-separator"
import { useMediaQuery } from "usehooks-ts"
import { SignIn, useUser } from "@clerk/nextjs"
import { useRouter, useSearchParams } from "next/navigation"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Check, Zap, Shield, Clock, HelpCircle } from "lucide-react"
import PaymentButton from "@/app/payment/RazorPayButton"
import Alert from "../ui/AlertNotification"

const sections = [
    {
        title: "Reading",
        description: "Practice your reading comprehension skills",
        icon: BookOpen,
        color: "text-blue-500",
        borderColor: "border-blue-500",
        shadowColor: "shadow-[0_10px_30px_rgba(0,0,255,_0.7)]",
    },
    {
        title: "Listening",
        description: "Improve your listening and understanding",
        icon: Headphones,
        color: "text-green-500",
        borderColor: "border-green-500",
        shadowColor: "shadow-[0_10px_30px_rgba(0,128,0,_0.7)]",
    },
    {
        title: "Speaking",
        description: "Enhance your speaking abilities",
        icon: Mic,
        color: "text-yellow-500",
        borderColor: "border-yellow-500",
        shadowColor: "shadow-[0_10px_30px_rgba(255,255,0,_0.7)]",
    },
    {
        title: "Writing",
        description: "Develop your writing skills",
        icon: Pencil,
        color: "text-purple-500",
        borderColor: "border-purple-500",
        shadowColor: "shadow-[0_10px_30px_rgba(128,0,128,_0.7)]",
    },
]

export default function ToeflPracticeSections() {
    const [selectedSection, setSelectedSection] = useState<string | null>(null)
    const [showDiffrentButtonsForEachTask, setShowDiffrentButtonsForEachTask] = useState(false);
    const [isScrolledAfterSelectingTask, setIsScrolledAfterSelectingTask] = useState(false);
    const isLargeScreen = useMediaQuery("(min-width: 640px)")

    const { user } = useUser()
    const userId = user?.id;
    const router = useRouter();
    const [alert, setAlert] = useState<{ message: string; type: "success" | "error" | "loading" | "warning" } | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (selectedSection) {
                setIsScrolledAfterSelectingTask(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [selectedSection]);

    useEffect(() => {
        if (userId && typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);

            if (urlParams.has("payment-verified")) {
                const updateMembership = async () => {
                    try {
                        const response = await fetch("/api/updateMembership", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ userId, membershipType: "Monthly_Membership" }),
                        });

                        const data = await response.json();

                        if (data.success) {
                            setAlert({ message: "Enjoy! Subscription Added", type: "success" });
                            setTimeout(() => setAlert(null), 3000);
                        } else {
                            console.error("Failed to update membership:", data.error);
                        }
                    } catch (error) {
                        console.error("Error updating membership:", error);
                    } finally {
                        console.log("deleted")
                        // Remove `payment-verified` from URL without reloading the page
                        urlParams.delete("payment-verified");
                        const newUrl = window.location.pathname + "?" + urlParams.toString();
                        window.history.replaceState({}, "", newUrl);
                    }
                };

                updateMembership();
            }
        }
    }, [userId, router]);

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">

            {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}

            {sections.map((section) => (
                <motion.div key={section.title} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Card
                                className={`cursor-pointer transition-colors ${selectedSection === section.title ? `${section.borderColor} ${section.shadowColor}` : ""}`}
                                onClick={() => {
                                    setSelectedSection(section.title);
                                    setShowDiffrentButtonsForEachTask(section.title === "Writing" || section.title === "Speaking");
                                    setIsScrolledAfterSelectingTask(false);
                                }}
                            >
                                <CardHeader>
                                    <section.icon className={`h-8 w-8 ${section.color}`} />
                                    <CardTitle>{section.title}</CardTitle>
                                    <CardDescription>{section.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Click to select this section for practice.</p>
                                </CardContent>
                            </Card>
                        </HoverCardTrigger>
                        <HoverCardContent className="hidden sm:block w-80">
                            <h3 className="text-lg font-semibold">{section.title} Section</h3>
                            <p className="text-sm text-muted-foreground">
                                The TOEFL {section.title} section tests your ability to {section.description.toLowerCase()}. Practice
                                this section to improve your overall TOEFL score.
                            </p>
                        </HoverCardContent>
                    </HoverCard>
                </motion.div>
            ))}

            <AnimatePresence>
                {!isScrolledAfterSelectingTask && (
                    <motion.div
                        key="practice-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className={`col-span-full mt-8 flex justify-center w-full ${selectedSection ? "fixed sm:absolute bottom-10 left-0 " : ""}`}
                    >

                        <ButtonGroup
                            selectedSection={selectedSection}
                            showDiffrentButtonsForEachTask={showDiffrentButtonsForEachTask}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <Separator className={`w-full sm:hidden ${!showDiffrentButtonsForEachTask ? "h-[5vh] sm:h-0" : "h-[13vh] sm:h-0"}`} />
        </div>
    )
}

function ButtonGroup({ selectedSection, showDiffrentButtonsForEachTask }: { selectedSection: string | null, showDiffrentButtonsForEachTask: boolean }) {
    const [showPricingModal, setShowPricingModal] = useState(false)
    const { user } = useUser()
    const router = useRouter();
    const [isCheckingAccess, setIsCheckingAccess] = useState(false);
    const [showClerkLoadingModal, setShowClerkLoadingModal] = useState(false)
    if (!selectedSection) return null;

    const RedirectAfterCheckingSubscription = (redirectLink: string) => {
        if (user) {
            setIsCheckingAccess(true);

            setTimeout(() => {
                var hasAccess = user?.publicMetadata?.["Monthly_Membership"] === "true";

                if (hasAccess) {
                    router.push(redirectLink);
                } else {
                    setShowPricingModal(true);
                }

                setIsCheckingAccess(false);
            }, 1000);
        } else {
            setShowClerkLoadingModal(true);
        }

    }

    return (
        <>
            <AnimatePresence mode="wait">

                {!showDiffrentButtonsForEachTask ? (
                    <motion.div
                        key={selectedSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex justify-center w-full"
                    >
                        <Button
                            onClick={() => RedirectAfterCheckingSubscription(`/practice-questions/${selectedSection?.toLowerCase()}-questions`)}
                            size="lg"
                            className="w-[60%] sm:w-auto"
                            disabled={!selectedSection}
                        >
                            {isCheckingAccess ? (
                                <Loader2 className="animate-spin w-5 h-5 mr-2" /> // Spinning loader
                            ) : (
                                <>
                                    {selectedSection ? `Start ${selectedSection} Practice` : "Select a Section"}
                                </>
                            )}
                        </Button>
                    </motion.div>

                ) : (
                    <motion.div
                        key={selectedSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center w-full items-center"
                    >
                        <Button
                            onClick={() => RedirectAfterCheckingSubscription(`/practice-questions/${selectedSection?.toLowerCase()}-questions/task1`)}
                            size="lg"
                            className="w-[60%] sm:w-auto"
                            disabled={!selectedSection}
                        >
                            {isCheckingAccess ? (
                                <Loader2 className="animate-spin w-5 h-5 mr-2" /> // Spinning loader
                            ) : (
                                "Start Task 1 Practice"
                            )}
                        </Button>
                        <Button
                            onClick={() => RedirectAfterCheckingSubscription(`/practice-questions/${selectedSection?.toLowerCase()}-questions/task2`)}
                            size="lg"
                            className="w-[60%] sm:w-auto"
                            disabled={!selectedSection}
                        >
                            {isCheckingAccess ? (
                                <Loader2 className="animate-spin w-5 h-5 mr-2" /> // Spinning loader
                            ) : (
                                "Start Task 2 Practice"
                            )}
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            {showClerkLoadingModal && (
                <Dialog open={showClerkLoadingModal} onOpenChange={setShowClerkLoadingModal}>
                    <DialogContent className="max-w-md p-6 sm:max-w-lg md:max-w-xl rounded-lg shadow-xl border border-gray-200">
                        {/* Header with Close Button */}
                        <DialogHeader className="flex justify-between items-center">
                            <DialogTitle className="text-lg font-semibold text-gray-900">
                                Sign in to <span className="text-blue-500">Toefl Go Global</span>
                            </DialogTitle>
                            <Button variant="ghost" size="icon" onClick={() => setShowClerkLoadingModal(false)}>
                                <X className="w-5 h-5" />
                            </Button>
                        </DialogHeader>

                        {/* Clerk Sign-In Component */}
                        <div className="flex flex-col items-center gap-4">
                            <SignIn routing="hash" />
                        </div>

                        {/* Footer */}
                        <DialogFooter className="text-center text-sm text-gray-500">
                            <p>Secured by Clerk</p>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}

            <Dialog open={showPricingModal} onOpenChange={setShowPricingModal}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Pro Plan</DialogTitle>
                        <DialogDescription>Unlock premium features and take your experience to the next level.</DialogDescription>
                    </DialogHeader>
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span>$19.99 / month</span>
                                <Zap className="w-5 h-5 text-yellow-500" />
                            </CardTitle>
                            <CardDescription>Billed annually or $24.99 month-to-month</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Unlimited projects</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Priority support</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Advanced analytics</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Custom integrations</span>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4">
                            {/* <Button className="w-full" onClick={() => setShowPricingModal(false)}>
                                Upgrade to Pro
                            </Button> */}
                            <div onClick={() => setShowPricingModal(false)}>
                                <PaymentButton id="pl_OYfRwibtIHC3Nx" />
                            </div>
                            <div className="flex justify-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                    <Shield className="w-4 h-4 mr-1" />
                                    Secure payment
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    Cancel anytime
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                    <DialogFooter className="sm:justify-start">
                        <div className="flex items-center text-sm text-gray-500">
                            <HelpCircle className="w-4 h-4 mr-1" />
                            Need help? Contact our support team
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>

    )
}