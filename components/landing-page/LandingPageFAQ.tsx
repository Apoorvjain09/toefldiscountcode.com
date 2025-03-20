import React from "react";

const SvgIcon = () => (
    <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
);

const faqData = [
    {
        question: "What is TOEFL?",
        answer: "TOEFL, or Test of English as a Foreign Language, measures the English language proficiency of non-native speakers. It is commonly used for university admissions and other academic placements.",
    },
    {
        question: "How is the TOEFL scored?",
        answer: "The TOEFL is scored on a scale of 0 to 120 points, divided equally among four sections: Reading, Listening, Speaking, and Writing. Each section is worth 30 points.",
    },
    {
        question: "What is a good TOEFL score?",
        answer: "A good TOEFL score depends on the requirements of the institution you are applying to. Generally, scores above 90 are considered good, while top universities may require scores above 100.",
    },
    {
        question: "How long is the TOEFL test?",
        answer: "The TOEFL test takes about 3 hours to complete, including check-in time. Each section is timed separately.",
    },
    {
        question: "How do I register for the TOEFL?",
        answer: "You can register for the TOEFL test online through the official ETS website. You will need to create an account, choose a test date and location, and pay the registration fee.",
    },
    {
        question: "What should I bring to the test center?",
        answer: "On the test day, bring a valid ID (such as a passport), your registration confirmation, and a few pencils and erasers. Personal items like bags and mobile phones are usually not allowed in the testing room.",
    },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
    <details className="group [&_summary::-webkit-details-marker]:hidden border rounded-xl">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 rounded-lg">
            <h2 className="font-medium">{question}</h2>
            <SvgIcon />
        </summary>
        <p className="mt-4 px-4 pb-4 leading-relaxed text-gray-700">{answer}</p>
    </details>
);

export default function LandingPageFAQ() {
    return (
        <section className="mx-auto w-[90vw] sm:w-[60vw] space-y-4 mb-10 p-4">
            <h2 className="text-4xl font-bold text-center mb-6">FAQ</h2>
            {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </section>
    );
}