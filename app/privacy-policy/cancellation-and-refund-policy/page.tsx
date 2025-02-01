import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function RefundPolicy() {
    return (
        <div className="container mx-auto py-10">
            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Cancellation & Refund Policy</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[400px] rounded-md border p-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>1. Cancellation Policy</AccordionTrigger>
                                <AccordionContent>
                                    Cancellations will be considered only if the request is made within the same day of placing the order. However, cancellation requests may not be entertained if the orders have been communicated to vendors and they have initiated the shipping process.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>2. Non-Cancellable Products</AccordionTrigger>
                                <AccordionContent>
                                    TOEFLGoGlobal does not accept cancellation requests for digital mock tests once they have been activated. However, if you face a technical issue, you may contact our support team for assistance.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>3. Damaged or Defective Products</AccordionTrigger>
                                <AccordionContent>
                                    If you receive a damaged or defective product, please report it to our Customer Service team within the same day of receipt. The issue will be reviewed, and an appropriate resolution will be provided.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>4. Product Not as Expected</AccordionTrigger>
                                <AccordionContent>
                                    If you believe the received product is not as described, please notify our Customer Service team within the same day of receiving it. The team will assess the complaint and take necessary action.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>5. Refund Processing</AccordionTrigger>
                                <AccordionContent>
                                    In case of approved refunds, it will take 3-4 business days for the refund to be processed to the original payment method.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>6. Manufacturer Warranty</AccordionTrigger>
                                <AccordionContent>
                                    For issues related to products with a manufacturer warranty, please contact the manufacturer directly.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ScrollArea>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-sm font-medium leading-none">
                            I acknowledge the Cancellation & Refund Policy
                        </Label>
                    </div>
                    <Button className="w-full">Accept and Continue</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
