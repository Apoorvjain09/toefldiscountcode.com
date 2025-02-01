import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto py-10">
            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[400px] rounded-md border p-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>1. Data Collection</AccordionTrigger>
                                <AccordionContent>
                                    We may collect personal information such as your name, email address, and browsing data related to TOEFL resources when you interact with our website or extension. Additionally, we collect transaction details when using Razorpay for payments.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>2. Purpose of Data Collection</AccordionTrigger>
                                <AccordionContent>
                                    The data collected is used to provide TOEFL discount codes, preparation resources, process transactions securely via Razorpay, and improve user experience through analytics.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>3. Payment Processing</AccordionTrigger>
                                <AccordionContent>
                                    We use Razorpay for processing payments. All transactions are encrypted and comply with PCI-DSS standards. We do not store your payment details on our servers.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>4. Third-Party Services</AccordionTrigger>
                                <AccordionContent>
                                    We may share necessary information with third-party service providers like Razorpay for payment processing and analytics tools for improving user experience. These providers have their own privacy policies.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>5. User Consent</AccordionTrigger>
                                <AccordionContent>
                                    Before data collection, we seek user consent through a permission modal. You may opt out of data collection at any time.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>6. Data Security</AccordionTrigger>
                                <AccordionContent>
                                    We implement security measures to protect your data from unauthorized access. However, no method of transmission over the internet is 100% secure.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7">
                                <AccordionTrigger>7. Cookies</AccordionTrigger>
                                <AccordionContent>
                                    We use cookies to maintain session data. These are not used to personally identify users across other websites.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-8">
                                <AccordionTrigger>8. Your Rights</AccordionTrigger>
                                <AccordionContent>
                                    You have the right to opt out of data collection, request deletion of your personal data, and modify your privacy settings at any time.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-9">
                                <AccordionTrigger>9. Updates to This Policy</AccordionTrigger>
                                <AccordionContent>
                                    We reserve the right to update this policy periodically. Changes will be posted on our website and take effect immediately.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ScrollArea>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="privacy" />
                        <Label htmlFor="privacy" className="text-sm font-medium leading-none">
                            I acknowledge the Privacy Policy
                        </Label>
                    </div>
                    <Button className="w-full">Accept and Continue</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
