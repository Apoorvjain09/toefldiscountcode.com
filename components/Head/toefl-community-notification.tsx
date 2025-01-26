"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bell, X } from "lucide-react"

export default function ToeflCommunityNotification() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            const audio = new Audio("/sounds/notification.mp3");
            audio.play().catch((error) => console.error("Failed to play sound:", error));
        }, 5000);

        return () => clearTimeout(timer);
    }, []);


    const handleJoin = () => {
        window.open("https://chat.whatsapp.com/CHwPiz6xEpHC0WSivb2UN7", "_blank")
    }

    const handleDragEnd = (event: MouseEvent | TouchEvent, info: PanInfo) => {
        // Close the notification if dragged vertically by more than 150 pixels
        if (info.offset.y > 150 || info.offset.y < -150) {
            setIsVisible(false);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="fixed top-0 left-0 w-full z-50"
                >
                    <motion.div
                        drag="y"
                        onDragEnd={handleDragEnd}
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={0.3}
                        className="cursor-grab"
                    >
                        <Card className="relative rounded-lg w-[90%] mx-auto mt-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-lg">
                            <CardContent className="p-4 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <Bell className="h-6 w-6 text-white animate-bounce" />
                                    <p className="text-white font-semibold text-sm sm:text-base md:text-lg">
                                        Join TOEFL student community (700+ members)
                                    </p>
                                </div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        onClick={handleJoin}
                                        className="bg-white text-green-600 hover:bg-green-100 hover:text-green-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        Join Now
                                    </Button>
                                </motion.div>
                                <X onClick={() => { setIsVisible(false) }} className="absolute right-1 top-1 h-4 w-4" />
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

