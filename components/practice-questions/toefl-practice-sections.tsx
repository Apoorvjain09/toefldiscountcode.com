"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card"
import { BookOpen, Headphones, Loader2, Mic, Pencil, X } from "lucide-react"
import { Separator } from "@radix-ui/react-separator"
import { useMediaQuery } from "usehooks-ts"
import { SignIn, useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Alert from "../ui/AlertNotification"
import MainPayentPopup from "../payment/MainPaymentPopup"

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
    const [isSubscriptionBought, setIsSubscriptionBought] = useState(false)

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

            if (urlParams.has("payment_id")) {
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
                            setIsSubscriptionBought(true);
                        } else {
                            console.error("Failed to update membership:", data.error);
                        }
                    } catch (error) {
                        console.error("Error updating membership:", error);
                    } finally {
                        console.log("deleted")
                        // Remove `payment-verified` from URL without reloading the page
                        urlParams.delete("payment_id");
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
                            isSubscriptionBought={isSubscriptionBought}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <Separator className={`w-full sm:hidden ${!showDiffrentButtonsForEachTask ? "h-[5vh] sm:h-0" : "h-[13vh] sm:h-0"}`} />
        </div>
    )
}

function ButtonGroup({ selectedSection, showDiffrentButtonsForEachTask, isSubscriptionBought }: { selectedSection: string | null, showDiffrentButtonsForEachTask: boolean, isSubscriptionBought: boolean }) {
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

                if (hasAccess || isSubscriptionBought) {
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
                    <DialogContent className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-none">
                        <div className="flex flex-col items-center">
                            <SignIn forceRedirectUrl="/practice-questions" routing="hash" />
                        </div>
                    </DialogContent>
                </Dialog>
            )}

            <MainPayentPopup
                showPricingModal={showPricingModal}
                setShowPricingModal={setShowPricingModal}
            />
        </>

    )
}