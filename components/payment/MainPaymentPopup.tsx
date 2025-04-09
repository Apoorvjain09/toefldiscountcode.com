import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Check, Zap, Shield, Clock, HelpCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import PaymentButton from "@/app/payment/RazorPayButton"
import PaypalPaymentButton from "./paypal/paypal-button"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"

interface MainPayentPopupProps {
    showPricingModal: boolean;
    setShowPricingModal: (value: boolean) => void;
}

export default function MainPayentPopup({
    showPricingModal,
    setShowPricingModal,
}: MainPayentPopupProps) {
    const [countryCode, setCountryCode] = useState<string | null>(null)

    useEffect(() => {
        fetch("https://ipapi.co/json")
            .then(res => res.json())
            .then(data => setCountryCode(data.country_code))
            .catch(err => console.error("IPAPI error", err))
    }, [])

    return (
        <>
            <Dialog open={showPricingModal} onOpenChange={setShowPricingModal}>
                <DialogContent className="overflow-y-scroll max-h-[90vh] sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Pro Plan</DialogTitle>
                        <DialogDescription>Unlock premium features and take your experience to the next level.</DialogDescription>
                    </DialogHeader>
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span>₹520 / month</span>
                                {/* <span>$5.99 / month</span> */}
                                <Zap className="w-5 h-5 text-yellow-500" />
                            </CardTitle>
                            <CardDescription>Billed annually or ₹520 month-to-month</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Full access to TOEFL practice tests</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Instant evaluation for speaking and writing sections</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Extensive AI-graded TOEFL practice questions</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Detailed performance analytics & feedback</span>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4">
                            {/* <Button className="w-full" onClick={() => setShowPricingModal(false)}>
                                Upgrade to Pro
                            </Button> */}
                            <div onClick={() => setShowPricingModal(false)} className="flex flex-col gap-4">
                                {countryCode === "IN" ? (
                                    <PaymentButton id="pl_OYfRwibtIHC3Nx" />
                                ) : (
                                    <PaypalPaymentButton />
                                )}
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
                        <Link
                            href="https://wa.me/918802880181"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-gray-500 hover:text-gray-800 cursor-pointer">
                            <HelpCircle className="w-4 h-4 mr-1" />
                            Need help? Contact our support team
                        </Link>
                    </DialogFooter>
                </DialogContent>
            </Dialog></>
    )
}