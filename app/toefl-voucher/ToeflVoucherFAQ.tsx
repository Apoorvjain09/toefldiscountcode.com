import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
    voucher: string;
    booking: string;
    discount: string;
}

export default function ToeflVoucherFAQ({ voucher, booking, discount }: FAQProps) {
    return (
        <div className="w-[90%] mx-auto mb-10">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">

                <AccordionItem value="item-1">
                    <AccordionTrigger>What is a TOEFL Exam Voucher and how does it work?</AccordionTrigger>
                    <AccordionContent>
                        A TOEFL Exam Voucher is a prepaid code that allows you to register for the TOEFL exam at a discounted price. If you choose this option, the voucher code will be sent to your registered email ID and can be used during checkout on the official ETS website.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>What are the benefits of booking a TOEFL exam through MJ Study Abroad?</AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Save up to ₹{16900 - Number(booking.replace(/,/g, ''))} compared to the regular registration price.</li>
                            <li>Multiple booking options – get a voucher code or let us book the slot for you.</li>
                            <li>Official ETS Partner (ETS Agent ID: IND3205101).</li>
                            <li>Secure payment process with instant confirmation.</li>
                            <li>Global trust and experience since 1998.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Why should I buy my TOEFL voucher from MJ Study Abroad?</AccordionTrigger>
                    <AccordionContent>
                        MJ Study Abroad is an **officially registered ETS partner** (ETS Agent ID: IND3205101), offering authentic vouchers at the best prices. We provide secure transactions, flexible booking options, and have been recognized by ETS for the most TOEFL registrations in North India.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>What are the different TOEFL booking options available?</AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                **Option 1**: <strong>₹15,200</strong> (Save ₹{16900 - Number(discount.replace(/,/g, ''))}) Watch a short youtube video to get the code.
                            </li>
                            <li>
                                **Option 2**: <strong>₹13,700</strong> (Save ₹{16900 - Number(booking.replace(/,/g, ''))}, Most Popular) – Receive a voucher code via email.
                            </li>
                            <li>
                                **Option 3**: <strong>₹12,700</strong> (Save ₹{16900 - Number(voucher.replace(/,/g, ''))}) – We book the slot for you; no voucher code provided.
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>How much does the TOEFL exam cost without a voucher?</AccordionTrigger>
                    <AccordionContent>
                        The standard TOEFL iBT exam price is ₹16,900. By booking through MJ Study Abroad, you can save up to ₹{16900 - Number(booking.replace(/,/g, ''))} depending on the option you choose.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger>What payment options are available for booking?</AccordionTrigger>
                    <AccordionContent>
                        We offer multiple payment options for convenience:
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Credit/Debit Cards</li>
                            <li>Net Banking</li>
                            <li>UPI</li>
                            <li>Digital Wallets</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                    <AccordionTrigger>How do I redeem a TOEFL discount code?</AccordionTrigger>
                    <AccordionContent>
                        Follow these simple steps to redeem your TOEFL discount code:
                        <ol className="list-decimal pl-6 mt-2 space-y-1">
                            <li>Visit the official ETS TOEFL website.</li>
                            <li>Log in or create your ETS account.</li>
                            <li>Choose your test date and center under "Register for a Test."</li>
                            <li>During checkout, enter the discount code in the “Promo Code” field.</li>
                            <li>Click "Apply" to see the savings and complete your registration.</li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    );
}
