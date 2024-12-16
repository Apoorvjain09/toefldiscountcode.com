"use client"
import { useUser } from "@clerk/nextjs";
import FAQLandingPAge from "./FAQ-landingpage";
import Testimonials from "./Testimonials";
import Link from "next/link";


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

    return (
        <>
            <div className="p-6 h-96 relative w-full overflow-hidden bg-slate-900 sm:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 flex flex-col items-center justify-center rounded-t-lg">
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
                    <Link href="https://accounts.toeflgoglobal.com/sign-up?redirect_url=https%3A%2F%2Fwww.toeflgoglobal.com%2F">
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
                        {isSignedIn ? (
                            <Link href="/tests-showcase">
                                <button className="btn">Get Started</button>
                            </Link>
                        ) : (
                            <a
                                href="https://accounts.toeflgoglobal.com/sign-up?redirect_url=https%3A%2F%2Fwww.toeflgoglobal.com%2F"
                                className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        )}
                    </div>
                </div>
            </section>
            <Testimonials />
            <div className="flex justify-center items-center text-center">
                <FAQLandingPAge />
            </div>
        </>
    )
};