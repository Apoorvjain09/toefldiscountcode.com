'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AbToeflVoucheWhatIsToefloutToeflIBT() {
    return (
        <section className="py-10 px-4 sm:px-8 lg:px-16 ">
            <div className="max-w-5xl mx-auto">
                <Card className="shadow-xl border border-gray-200">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-gray-800">About TOEFL iBT</CardTitle>
                        <CardDescription className="text-gray-600 mt-2">
                            Find answers to common questions about TOEFL iBT, its editions, and its global acceptance.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="what-is-toefl-ibt">
                                <AccordionTrigger className="text-lg font-semibold text-gray-700">
                                    What is TOEFL iBT?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    TOEFL iBT is an internet-based test that measures the English proficiency of non-native speakers who wish to study or work in English-speaking environments. It evaluates reading, listening, speaking, and writing skills.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="what-is-home-edition">
                                <AccordionTrigger className="text-lg font-semibold text-gray-700">
                                    What is TOEFL iBT Home Edition?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    The TOEFL iBT Home Edition is a secure and convenient option to take the test from home, offering the same content and format as the test center version.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="why-take-toefl-ibt">
                                <AccordionTrigger className="text-lg font-semibold text-gray-700">
                                    Why should I take TOEFL iBT?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    TOEFL iBT is widely recognized by universities, employers, and immigration authorities, making it an essential step for those pursuing opportunities abroad.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="who-accepts-scores">
                                <AccordionTrigger className="text-lg font-semibold text-gray-700">
                                    What universities and other institutions accept TOEFL iBT scores?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    Over 11,000 institutions in more than 150 countries, including top universities, accept TOEFL iBT scores for admissions and placement decisions.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="how-institutions-use">
                                <AccordionTrigger className="text-lg font-semibold text-gray-700">
                                    How is TOEFL iBT used by institutions?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    Institutions use TOEFL iBT scores to assess applicants’ English proficiency for admissions, scholarships, and placement in academic programs.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="age-limit">
                                <AccordionTrigger className="text-lg font-semibold text-gray-700">
                                    Can I take the TOEFL iBT test if I am under 15 years old?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    Yes, there is no minimum age limit for taking the TOEFL iBT test. However, it is recommended for individuals at least 15 years old due to its academic nature.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="visa-acceptance">
                                <AccordionTrigger className="text-lg font-semibold text-gray-700">
                                    Is TOEFL iBT accepted for visas?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    Yes, TOEFL iBT scores are accepted for visa applications in several countries, including the USA, UK, Canada, and Australia.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="study-permit-canada">
                                <AccordionTrigger className="text-lg font-semibold text-gray-700">
                                    Can I use TOEFL iBT to apply for a study permit in Canada?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    Yes, TOEFL iBT scores are accepted for Canadian study permit applications by most universities and colleges.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="effectiveness-research">
                                <AccordionTrigger className="text-lg font-semibold text-gray-700">
                                    Is there research that shows how effective TOEFL iBT is at measuring English proficiency?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    Yes, extensive research and validation studies by ETS confirm the effectiveness of TOEFL iBT in accurately measuring English language proficiency.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
