'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function VoucherPurchaseExplanation() {
    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            {/* Main Blog Header */}
            <Card className="shadow-2xl border-2 border-purple-400">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">TOEFL Exam Vouchers</CardTitle>
                    <CardDescription className="text-gray-500 mt-2">
                        Save up to ₹3,500 on your TOEFL Exam with MJ Study Abroad.
                    </CardDescription>
                </CardHeader>

                <CardContent className="prose prose-lg text-gray-700 space-y-2">
                    <h2 className="font-bold text-2xl text-gray-900">What is a TOEFL Exam Voucher?</h2>
                    <p>
                        A TOEFL Exam Voucher is a 100% prepaid option, eliminating the need to make any payments on the TOEFL website after purchase. By entering your 12-digit unique Voucher Code in the Promo Code field on the payments page, the total payable amount is reduced to zero. This prepaid voucher offers convenience and significant savings for test-takers.
                    </p>

                    <Separator />

                    <h2 className="font-bold text-2xl text-gray-900">How Much Can You Save?</h2>
                    <p>
                        Purchasing a prepaid voucher from authorized vendors like MJ Study Abroad can help you save up to ₹3,500 on your total exam fees. These vouchers are typically valid for 8 to 11 months from the date of purchase, making them a flexible and cost-effective choice for planning your TOEFL Exam.
                    </p>

                    <Separator />

                    <h2 className="font-bold text-2xl text-gray-900">Why Choose a TOEFL Exam Voucher?</h2>
                    <p>
                        Compared to a TOEFL Discount Code, a prepaid voucher provides greater savings and peace of mind. It ensures that your exam fees are fully covered in advance, allowing you to focus on your preparation without worrying about additional payments.
                    </p>

                    <Separator />

                    <h2 className="font-bold text-2xl text-gray-900">Need Assistance?</h2>
                    <p>
                        MJ Study Abroad’s dedicated customer support team is always ready to assist you with the booking process. Whether you have questions or need help applying the voucher, their team is here to make the process seamless.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
