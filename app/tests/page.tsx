"use client";
import { useState, useEffect } from "react";
import TestCard from "@/components/ui/TestCard";
import { Boxes } from "@/components/ui/backgroundBoxes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];

export default function Page() {
    const [showTests, setShowTests] = useState(false);

    const handleGetStartedClick = () => {
        setShowTests(true);
    };

    return (
        <>
            {!showTests ? (
                <div>
                    {/* <section id="home" className="relative py-20 bg-gradient-to-r from-blue-500 to-green-500 overflow-hidden">
                        <div className="absolute inset-0 bg-slate-400 opacity-70"></div>
                        <div className="container mx-auto text-center relative z-10">
                            <h1 className="text-4xl font-bold mb-4 text-white">Ace Your TOEFL Test with Our AI-Powered Mock Tests</h1>
                            <p className="text-xl mb-8 text-white">Practice with realistic tests and get detailed feedback to improve your scores.</p>
                            <button onClick={handleGetStartedClick} className="bg-blue-600 text-white py-2 px-4 rounded">Get Started</button>
                        </div>
                    </section> */}
                    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
                        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                        <Boxes />
                        <h1 className={cn("text-center md:text-4xl text-xl text-white relative z-20")}>
                            Ace Your TOEFL Test with Our AI-Powered Mock Tests
                        </h1>
                        <p className="text-center mt-2 mb-4 text-neutral-300 relative z-20">
                            Practice with realistic tests and get detailed feedback to improve your scores.
                        </p>
                        <button onClick={handleGetStartedClick} className="bg-blue-600 text-white py-2 px-4 rounded z-[10] mt-1">Get Started</button>
                    </div>
                    <section id="features" className="py-20">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-10">Features</h2>
                            <div className="flex flex-wrap justify-around">
                                <div className="w-full md:w-1/3 p-4">
                                    <div className="bg-white shadow p-6 rounded">
                                        <h3 className="text-xl font-bold mb-4">AI Checker</h3>
                                        <p>Get instant and accurate feedback on your practice tests.</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-4">
                                    <div className="bg-white shadow p-6 rounded">
                                        <h3 className="text-xl font-bold mb-4">Realistic Mock Tests</h3>
                                        <p>Experience the TOEFL test environment with our realistic mock tests.</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-4">
                                    <div className="bg-white shadow p-6 rounded">
                                        <h3 className="text-xl font-bold mb-4">Detailed Feedback</h3>
                                        <p>Receive comprehensive feedback to identify your strengths and weaknesses.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <LampContainer>
                        <motion.h1
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                        >
                            Build lamps <br /> the right way
                        </motion.h1>
                    </LampContainer>
                    <section id="testimonials" className="bg-gray-100 py-20">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
                            <div className="flex flex-wrap justify-around">
                                <div className="w-full md:w-1/3 p-4">
                                    <div className="bg-white shadow p-6 rounded">
                                        <p className="italic">`&quot;This mock test platform is amazing. The AI feedback helped me improve my scores significantly!`&quot;</p>
                                        <p className="mt-4 font-bold">- User Name</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="cta" className="py-20 bg-blue-600 text-white text-center">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold mb-4">Ready to Ace Your TOEFL Test?</h2>
                            <a href="#signup" className="bg-white text-blue-600 py-2 px-4 rounded">Sign Up Now</a>
                        </div>
                    </section>
                </div>
            ) : (
                <div className="container mx-auto py-20">
                    <h2 className="text-3xl font-bold mb-10 text-center">Available Tests</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 10 }, (_, i) => (
                            <TestCard key={i} testNumber={i + 1} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
