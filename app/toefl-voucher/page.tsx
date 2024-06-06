"use client";
import React, { Suspense, lazy } from "react";
import { Body, H1 } from "@/app/score-reporting/formatting";
import QA from "@/app/score-reporting/QA";

const Hero = lazy(() => import("@/components/hero/Hero"));
const WhyUs = lazy(() => import("@/components/whyUs/WhyUs"));
const GetCode = lazy(() => import("@/components/getCode/GetCode"));

const dataQA = [
  {
    question: "How do I get free application guidance for TOEFL?",
    answer: "Simply join our WhatsApp group! We offer free, step-by-step assistance to help you with your application process."
  },
  {
    question: "How do I get the TOEFL discount code",
    answer: "It's very straightforward. In the YouTube video you will get working voucher codes."
  },
  {
    question: "What support can I expect after joining the WhatsApp group?",
    answer: "Our community provides continuous support for your academic needs, from application tips to study resources for TOEFL preparation."
  },
  {
    question: "Are the TOEFL voucher codes really free?",
    answer: "Yes, our TOEFL voucher codes are provided for free as part of our commitment to your educational journey."
  },
];

const page = () => {
  return (
    <div className="">
      <div className="mt--30">
        <Suspense fallback={<div>Loading Hero...</div>}>
          <Hero />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading Why Us...</div>}>
        <WhyUs />
      </Suspense>
      <Suspense fallback={<div>Loading Get Code...</div>}>
        <GetCode />
      </Suspense>
      <Body>
        <H1>FAQ</H1>
        {dataQA.map((data, i) => (
          <div key={i}>
            <QA
              question={data.question}
              answer={data.answer}
            />
          </div>
        ))}
      </Body>
    </div>
  );
};

export default page;
