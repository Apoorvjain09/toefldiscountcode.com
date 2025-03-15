"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export function TOEFLVOUCHERWhatsAppButton({
  phoneNumber,
  message,
}: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const whatsappMessage = message || ""
  const formattedPhone = phoneNumber.replace(/\D/g, "")
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(whatsappMessage)}`
  const [isVisible, setIsVisible] = useState(true) // Track visibility on scroll
  const [lastScrollY, setLastScrollY] = useState(0) // Store last scroll position
  const [isScrolling, setIsScrolling] = useState(false) // Track if user is actively scrolling

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true); // User is actively scrolling

      if (window.scrollY > lastScrollY) {
        setIsVisible(false) // Hide button when scrolling up
      } else {
        setIsVisible(true) // Show button when scrolling down
      }

      setLastScrollY(window.scrollY);

      // **Debounce: Wait for scrolling to stop before making `isVisible` true again**
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setIsVisible(true); // Show button again after scrolling stops
      }, 1000); // Adjust delay as needed (1000ms = 1 sec)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowTooltip(true)

      const hideTimer = setTimeout(() => {
        setShowTooltip(false)
      }, 4000) // Stays visible for 4 seconds

      return () => clearTimeout(hideTimer)
    }, 15000) // Appears after 2 seconds

    return () => clearTimeout(showTimer)
  }, [])

  return (

    <TooltipProvider>
      <motion.div
        className="fixed bottom-6 right-6 z-9"
        initial={{ opacity: 0, scale: 0.3, y: 50 }}
        animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 20 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.6 }}
      >
        <Tooltip open={showTooltip}>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-green-500/90 backdrop-blur-md shadow-lg shadow-green-400/40 hover:scale-110 transition-all duration-300 hover:bg-green-600 hover:shadow-green-500/50 p-4"
              onClick={() => window.open(whatsappUrl, "_blank")}
              aria-label="Contact on WhatsApp"
            >
              <FaWhatsapp className="h-10 w-10 text-white" />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="left"
            asChild
            className="z-9"
          >
            <motion.div
              className="bg-green-600 text-white p-3 rounded-md shadow-xl"
              initial={{ opacity: 0, y: 5 }}
              animate={showTooltip ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
              transition={{ duration: 0.5 }}
            >
              Chat on WhatsApp
            </motion.div>
          </TooltipContent>
        </Tooltip>
      </motion.div>

      {/* 🔹 Tooltip Animation Styles */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(5px); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }

          .animate-fadeOut {
            animation: fadeOut 0.5s ease-out forwards;
          }
        `}
      </style>
    </TooltipProvider>
  )
}
