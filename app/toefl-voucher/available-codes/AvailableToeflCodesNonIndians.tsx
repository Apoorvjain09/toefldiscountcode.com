"use client";
import React, { useState } from "react";
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"], // Adjust weights as needed
});


export default function AvailableToeflCodesNonIndians() {
    const [showModal, setShowModal] = useState(false);
    const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/-XJ6w_GYqWg?si=gffVx_Ut_-thileF");

    return (
        <>
            <TracingBeam className="px-6 mt-2">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">
                            <div className="flex gap-3">
                                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                    {item.badge}
                                </h2>

                                {item?.agent_code && (
                                    <h2
                                        onClick={() => { setShowModal(true) }}
                                        className="bg-gradient-to-br from-pink-500 to-yellow-500 text-white rounded-full text-sm w-fit px-4 py-1 mb-4 cursor-pointer font-bold">
                                        <span className="animate-pulse">Steps To Register!?</span>
                                    </h2>
                                )}
                            </div>

                            <p className={`${ubuntu.className} text-xl mb-4 font-semibold`}>
                                {item.title}
                            </p>

                            <div className="text-sm text-black/70">
                                {item?.image && (
                                    <Image
                                        src={item.image}
                                        alt="blog thumbnail"
                                        height="1000"
                                        width="1000"
                                        className="rounded-lg mb-10 object-cover"
                                    />
                                )}
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>

            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold">Steps to Register</DialogTitle>
                    </DialogHeader>
                    <div className="w-full aspect-video bg-black">
                        <iframe
                            className="w-full h-full"
                            src={videoUrl}
                            title="Steps to Register"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <Button onClick={() => setShowModal(false)} className="mt-4 w-full">
                        Close
                    </Button>
                </DialogContent>
            </Dialog>
        </>

    );
}

const dummyContent = [
    {
        title: "Voucher Code: IND3205101",
        description: (
            <>
                <p>
                    Use the code <strong>TOEFL2025</strong> to get a discount of ₹2,000 on your TOEFL exam registration. This code is valid for all test dates in 2025 and is applicable to first-time test takers only.
                </p>
                <p>
                    Steps to redeem:
                </p>
                <ul>
                    <li>Go to the TOEFL registration portal.</li>
                    <li>Enter <strong>TOEFL2025</strong> at checkout.</li>
                    <li>Enjoy your discount!</li>
                </ul>
            </>
        ),
        badge: "Working",
        image: "",
        agent_code: "true",
    },
    {
        title: "Voucher Code: CCTOEFL6",
        description: (
            <>
                <p>
                    Redeem the code <strong>GOGLOBAL</strong> for a ₹1,500 discount. This offer is exclusive to students registered through GregoGlobal.com and is valid until March 31, 2025.
                </p>
                <p>
                    Eligibility:
                </p>
                <ul>
                    <li>Only valid for TOEFL registrations in India.</li>
                    <li>Must register via our partner link.</li>
                </ul>
            </>
        ),
        badge: "Working",
        image: "",
    },
    {
        title: "Voucher Code: UANTOEFL20",
        description: (
            <>
                <p>
                    Apply the code <strong>UANTOEFL20</strong> for a 39$ discount on TOEFL registrations globally.
                </p>
                <p>
                    Note:
                </p>
                <ul>
                    <li>Cannot be combined with other offers.</li>
                    <li>Check your eligibility on the official registration portal.</li>
                </ul>
            </>
        ),
        badge: "Working",
        image: "",
    },
    {
        title: "Voucher Code: IND24",
        description: (
            <>
                <p>
                    Apply the code <strong>IND24</strong> save 5%* on GRE regisTrations then, save 20% on the TOEFL iBT® test when you add it to your cart and check out!
                </p>
                <p>
                    Note:
                </p>
                <ul>
                    <li>Its combined purchase of a GRE General Test and a TOEFL iBT test </li>
                    <li>Check your eligibility on the official registration portal.</li>
                </ul>
            </>
        ),
        badge: "Working",
        image: "",
    },
];
