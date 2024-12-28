'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function DiscountCodeExplanation() {
    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            {/* Main Blog Header */}
            <Card className="shadow-2xl border-2 border-purple-400 ">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">TOEFL Discount Codes</CardTitle>
                    <CardDescription className="text-gray-500 mt-2">
                        Save ₹1,770 on your TOEFL exam fees with a unique promo code from MJ Study Abroad, an authorized ETS TOEFL partner in India.
                    </CardDescription>
                </CardHeader>

                {/* Article Content */}
                <CardContent className="prose prose-lg text-gray-700 space-y-2">
                    <h2 className="font-bold text-2xl text-gray-900">About the TOEFL Discount Code</h2>
                    <p>
                        The TOEFL Discount Code is a special code you can use on the official TOEFL website to receive an additional discount on your exam fees. MJ Study Abroad, as an authorized partner of ETS TOEFL in India, offers this exclusive discount to students and test-takers. Using MJ Study Abroad's unique promo code, you can get an instant ₹1,770 discount on your TOEFL exam.
                    </p>

                    <Separator />

                    <h2 className="font-bold text-2xl text-gray-900">How to Use the Promo Code</h2>
                    <ul className="list-disc pl-6">
                        <li>Apply the promo code during registration on the TOEFL website.</li>
                        <li>Enjoy an instant discount of ₹1,770 on the total exam fee.</li>
                        <li>Complete the remaining payment of ₹15,130 (including GST) using Credit/Debit Card, UPI, Wallet, or NetBanking.</li>
                    </ul>

                    <Separator />

                    <h2 className="font-bold text-2xl text-gray-900">Promo Code Details</h2>
                    <p>
                        <strong>TOEFL Promo Code:</strong> IND3205101
                    </p>
                    <p>
                        <strong>Agent Name:</strong> MJ Study Abroad
                    </p>
                    <p>
                        <strong>Agent ID:</strong> IND3205101
                    </p>

                    <Separator />

                    <h2 className="font-bold text-2xl text-gray-900">Important Information</h2>
                    <p>
                        Please note that in the event of a payment failure, the promo code can be used a maximum of three times. For alternative solutions or assistance, feel free to contact our Customer Support team.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
