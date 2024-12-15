'use client'

import { useState, useEffect } from "react"
import { Download, X, Smartphone, Laptop, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Extend the WindowEventMap to include the beforeinstallprompt event
declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent
  }
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
      event.preventDefault()
      setDeferredPrompt(event)
      setShowInstallPrompt(true)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    deferredPrompt.userChoice.then((choiceResult: { outcome: 'accepted' | 'dismissed' }) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt")
      } else {
        console.log("User dismissed the install prompt")
      }
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    })
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
  }

  return (
    <div className={`fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 ease-in-out ${showInstallPrompt ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
      <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Install Our App</CardTitle>
            <Button variant="ghost" size="icon" onClick={handleDismiss} className="text-white hover:text-gray-200">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <CardDescription className="text-purple-100">
            Enhance your vocabulary learning experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-purple-700 text-white">
                New
              </Badge>
              <span>Access your personalized word lists offline</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Smartphone className="h-8 w-8 mb-2" />
                <span className="text-sm">Mobile</span>
              </div>
              <div className="flex flex-col items-center">
                <Laptop className="h-8 w-8 mb-2" />
                <span className="text-sm">Desktop</span>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="h-8 w-8 mb-2" />
                <span className="text-sm">Web</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleInstallClick}
            className="w-full bg-white text-purple-600 hover:bg-purple-100 transition-colors"
          >
            <Download className="mr-2 h-4 w-4" /> Install Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

