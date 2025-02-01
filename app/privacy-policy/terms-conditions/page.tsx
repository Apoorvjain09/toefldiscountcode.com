import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function TermsAndConditions() {
    return (
        <div className="container mx-auto py-10">
            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Terms and Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[400px] rounded-md border p-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>1. Acceptance of Terms</AccordionTrigger>
                                <AccordionContent>
                                    By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>2. Use of Our Services</AccordionTrigger>
                                <AccordionContent>
                                    TOEFLGoGlobal provides AI-powered mock tests for TOEFL preparation. The service is for personal use only and cannot be resold or redistributed.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>3. Refund & Cancellation Policy</AccordionTrigger>
                                <AccordionContent>
                                    All purchases made on our platform are final. We do not offer refunds or cancellations once the mock test has been activated. If you experience technical issues, contact our support team for assistance.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>4. Shipping & Delivery Policy</AccordionTrigger>
                                <AccordionContent>
                                    As our services are entirely digital, no physical shipping is required. Mock tests are accessible immediately upon successful payment.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>5. Intellectual Property</AccordionTrigger>
                                <AccordionContent>
                                    All content, including but not limited to test questions, explanations, and platform design, is owned by TOEFLGoGlobal. Unauthorized use, reproduction, or redistribution is strictly prohibited.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>6. Limitation of Liability</AccordionTrigger>
                                <AccordionContent>
                                    We shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7">
                                <AccordionTrigger>7. Modifications to Terms</AccordionTrigger>
                                <AccordionContent>
                                    TOEFLGoGlobal reserves the right to update these terms at any time. Continued use of the service constitutes acceptance of the revised terms.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-8">
                                <AccordionTrigger>8. Governing Law</AccordionTrigger>
                                <AccordionContent>
                                    Any disputes arising from these terms will be governed by the laws of India and subject to the jurisdiction of courts in Delhi.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ScrollArea>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-sm font-medium leading-none">
                            I agree to the terms and conditions
                        </Label>
                    </div>
                    <Button className="w-full">Accept and Continue</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
