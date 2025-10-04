import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';


interface DiscountProps {
    voucher: string;
    booking: string;
    discount: string;
}

export default function ToeflVoucherExamBooking({ voucher, booking, discount }: DiscountProps) {
    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <Card className="shadow-2xl border-2 border-purple-500 ">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">TOEFL Exam Booking: Save Big on Your Test Fees</CardTitle>
                    <CardDescription className="text-gray-500 mt-2">
                        Discover how you can save up to ₹{18000 - Number(booking.replace(/,/g, ''))} by booking your TOEFL Exam through MJ Study Abroad. Learn the process, benefits, and why this is the best option for you.
                    </CardDescription>
                </CardHeader>

                {/* Article Content */}
                <CardContent className="prose prose-lg text-gray-700 space-y-2">
                    <h2 className="font-bold text-2xl text-gray-900">Why Choose TOEFL Exam Booking?</h2>
                    <p>
                        TOEFL Exam Booking offers a smarter alternative to purchasing a TOEFL Exam Voucher. Instead of handling the booking yourself, an authorized vendor representative will book the exam for you based on your preferred exam center and dates. This method not only saves time but also allows test-takers to enjoy significant discounts of up to ₹{18000 - Number(booking.replace(/,/g, ''))}.
                    </p>

                    <Separator />

                    <h2 className="font-bold text-2xl text-gray-900">How Does It Work?</h2>
                    <ul className="list-disc pl-6">
                        <li>Authorize MJ Study Abroad to access your TOEFL account.</li>
                        <li>Provide your Agent ID in the "Personal Information" section from the menu.</li>
                        <li>Share your preferences for exam center and dates.</li>
                        <li>Let the MJ Study Abroad team handle the rest!</li>
                    </ul>

                    <Separator />

                    <h2 className="font-bold text-2xl text-gray-900">Is This Legal?</h2>
                    <p>
                        Yes, it is completely legal. Authorized vendors like MJ Study Abroad purchase TOEFL vouchers in bulk from ETS at discounted rates, enabling them to pass on these savings to students. Rest assured, this process is endorsed by ETS, so you can book your exam with confidence.
                    </p>

                    <Separator />

                    <h2 className="font-bold text-2xl text-gray-900">Additional Benefits</h2>
                    <ul className="list-disc pl-6">
                        <li>Dedicated customer support via call, WhatsApp, or email.</li>
                        <li>GRE Exam discounts of up to ₹5,500 with MJ Study Abroad coupon codes.</li>
                        <li>Seamless study abroad services with over 50 international partners.</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Closing Call to Action */}
            <Card className="shadow-2xl border-purple-500 border-2">
                <CardHeader className="text-center">
                    <CardTitle className="text-xl font-semibold">Take the First Step Toward Your Dream</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                    <p>
                        MJ Study Abroad is dedicated to simplifying your TOEFL and GRE preparation journey. With exclusive discounts, legal assurance, and a hassle-free booking process, you can focus on achieving your goals. Contact us today and make your dream of studying abroad a reality!
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
