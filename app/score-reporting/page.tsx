"use client"
import React, { Suspense, lazy } from 'react';
import { Body, H1 } from "./formatting";
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { Seo } from '@/components/Head/Seo';

import QA from "@/app/score-reporting/QA";
import Main from "./main";

const dataQA = [
    {
        question: "How do I get free application guidance for TOEFL?",
        answer: "Simply join our WhatsApp group! We offer free, step-by-step assistance to help you with your application process."
    },
    {
        question: "Can I still get codes if I have already completed my application?",
        answer: "Absolutely! Even if your application is already done, joining our group gives you access to TOEFL voucher codes and a supportive community."
    },
    {
        question: "What support can I expect after joining the WhatsApp group?",
        answer: "Our community provides continuous support for your academic needs, from application tips to study resources for TOEFL preparation."
    },
    {
        question: "Are the TOEFL voucher codes really free?",
        answer: "Yes, our TOEFL voucher codes are provided for free to members of our WhatsApp group as part of our commitment to your educational journey."
    },
]

export default function Page() {
    return (
        <>
        <Seo
         title = 'TOEFL Score Reporting - Know Your Scores'
         description = 'Learn how to report your TOEFL scores to universities and institutions. Get all the details here.'
         url = 'https://toeflgoglobal.com/score-reporting'
         image='https://www.dropbox.com/scl/fi/efgh6d39t1z69ulz03dl3/GoGlobalSocialShare.jpg?rlkey=o8vttiq065fkpsemyzo04fcj5&raw=1'
        />
        <Suspense fallback={<div><LoadingSpinner /></div>}>
            <div className="">
                <Main/>
                <Body>
                    <H1>FAQ</H1>
                    {dataQA.map((data, i) =>
                        <div key={i}>
                            <QA
                                question={data.question}
                                answer={data.answer}
                            />
                        </div>
                    )}
                </Body>
            </div>
        </Suspense>
        </>
    );
}
