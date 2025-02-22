"use client"

import { useUser } from "@clerk/nextjs";
import FAQLandingPAge from "./FAQ-landingpage";
import Link from "next/link";
import MainFooter from "./MainFooter";
import Image from "next/image";
import Jese from "@/public/assets/jese-leos.png"
import Profile from "@/public/assets/profile-picture-2.jpg"
import Murli from "@/public/assets/murli.avif"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { MainAnimatedTestimonials } from "../landingPage/MainAnimatedTestimonials";
import MainTypesOfServices from "../landingPage/MainTypesOfServices";
import { MainHeroSection } from "../landingPage/MainHeroSection";

const SvgStarIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
        </svg>
    )
}

const SvgIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 text-pink-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952,0,0012,20.055a11.952,11.952,0,00-6.824-2.998,12.078,12.078,0,01.665-6.479L12,14z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083,0 01.665 6.479A11.952 11.952,0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
    </svg>
);

export default function FeaturesSection() {
    const { isSignedIn } = useUser()
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has("payment_id")) {
                router.replace("/practice-questions?payment_id");
            }
        }
    }, [router]);

    return (
        <>
            <MainHeroSection />

            <MainTypesOfServices />

            <MainAnimatedTestimonials autoplay={false} />

            <div className="p-6 h-96 relative w-full overflow-hidden bg-slate-900 sm:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 flex flex-col items-center justify-center ">
                <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                <h1 className={"text-center md:text-4xl text-xl text-white relative z-20 font-bold"}>
                    Ace Your TOEFL Test with Our AI-Powered Mock Tests
                </h1>
                <p className="text-center mt-2 mb-4 text-neutral-300 relative z-20">
                    Practice with realistic tests and get detailed feedback to improve your scores.
                </p>
                {isSignedIn ? (
                    <Link href="/tests-showcase">
                        <button className="bg-blue-600 text-white py-2 px-4 rounded z-[10] mt-1">Take a Free Mock Test</button>
                    </Link>
                ) : (
                    <Link href="https://accounts.toeflgoglobal.com/sign-in?redirect_url=https%3A%2F%2Fwww.toeflgoglobal.com%2Ftests-showcase">
                        <button className="bg-blue-600 text-white py-2 px-4 rounded z-[10] mt-1">Take a Free Mock Test</button>
                    </Link>
                )}
            </div>


            <section className="bg-white text-black">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Features</h2>

                        <p className="mt-4 text-black">
                            AI mock tests offer several features that enhance the learning and testing experience. Here are some notable features
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        >
                            <SvgIcon />
                            <h2 className="mt-4 text-xl font-bold text-black">AI-powered Insights and Advice</h2>

                            <p className="mt-1 text-sm text-black">
                                Uses machine learning algorithms to predict scores and outcomes.
                                Provides recommendations on how to improve scores based on past performance.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        >
                            <SvgIcon />
                            <h2 className="mt-4 text-xl font-bold text-black">Integration with Learning Resources</h2>

                            <p className="mt-1 text-sm text-black">
                                Links to additional study materials and resources based on the user's performance.
                                Integrates with learning platforms and digital libraries for further reading.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        >
                            <SvgIcon />
                            <h2 className="mt-4 text-xl font-bold text-black">Interactive Learning Aids</h2>

                            <p className="mt-1 text-sm text-black">
                                Incorporates multimedia elements like videos, audio clips, and interactive diagrams.
                                Utilizes gamification techniques to make learning more engaging and fun.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        >
                            <SvgIcon />
                            <h2 className="mt-4 text-xl font-bold text-black">Diverse Question Bank</h2>

                            <p className="mt-1 text-sm text-black">
                                Features a wide variety of questions, covering all topics and difficulty levels.
                                Regularly updates the question bank to reflect the latest trends and changes in the actual exams.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        >
                            <SvgIcon />
                            <h2 className="mt-4 text-xl font-bold text-black">Simulated Test Environment</h2>

                            <p className="mt-1 text-sm text-black">
                                Creates a realistic test-taking environment, mirroring the actual test conditions.
                                Includes timed sections and question formats similar to the real exam.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        >
                            <SvgIcon />
                            <h2 className="mt-4 text-xl font-bold text-black">Detailed Performance Analytics</h2>

                            <p className="mt-1 text-sm text-black">
                                Provides in-depth analysis of strengths and weaknesses.
                                Offers comparative analytics to see how the user stands against peers.
                            </p>
                        </a>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/">
                            <button className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        More trusted reviews from our Customers
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 md:gap-8">
                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <Image src={Jese} width={50} height={50} alt="jese" className="rounded-[50%]" />
                                <div>
                                    <div className="flex justify-center gap-0.5 text-green-500">
                                        <SvgStarIcon />
                                        <SvgStarIcon />
                                        <SvgStarIcon />
                                        <SvgStarIcon />
                                        <SvgStarIcon />
                                    </div>

                                    <p className="mt-0.5 text-lg font-medium text-gray-900">Jese</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                                "Taking the TOEFL practice test was a game-changer for me. The interface was user-friendly, and the variety of questions kept me engaged throughout the test. The immediate scoring and feedback on my speaking and writing tasks were invaluable. I saw a significant improvement in my scores after using this resource. Absolutely worth it!"
                            </p>
                        </blockquote>

                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <Image src={Profile} width={50} height={50} alt="patrik" className="rounded-[50%]" />
                                <div>
                                    <div className="flex justify-center gap-0.5 text-green-500">
                                        <SvgStarIcon />
                                        <SvgStarIcon />
                                        <SvgStarIcon />
                                        <SvgStarIcon />
                                        <SvgStarIcon />
                                    </div>

                                    <p className="mt-0.5 text-lg font-medium text-gray-900">Patrik</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                                "The TOEFL practice test was incredibly helpful! The questions were challenging and very similar to the actual TOEFL exam. The detailed feedback on my writing and speaking tasks gave me clear insights into my strengths and areas for improvement. Thanks to this test, I feel much more confident and prepared for the real exam."                            </p>
                        </blockquote>

                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <Image src={Murli} width={50} height={50} alt="murli" className="rounded-[50%]" />

                                <div>
                                    <div className="flex justify-center gap-0.5 text-green-500">
                                        <SvgStarIcon />
                                        <SvgStarIcon />
                                        <SvgStarIcon />
                                        <SvgStarIcon />
                                        <SvgStarIcon />
                                    </div>

                                    <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                                "I was amazed by the comprehensive coverage of the TOEFL practice test. It accurately simulated the test environment, which helped me manage my time better during each section. The listening and reading sections were especially beneficial in enhancing my comprehension skills. Highly recommend this test to anyone serious about acing the TOEFL."
                            </p>
                        </blockquote>
                    </div>
                </div>
            </section>

            <div className="flex justify-center items-center text-center">
                <FAQLandingPAge />
            </div>

            <MainFooter />
        </>
    )
};