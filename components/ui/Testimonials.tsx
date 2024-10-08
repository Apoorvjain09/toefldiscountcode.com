import Image from "next/image";
import Jese from "@/public/assets/jese-leos.png"
import Profile from "@/public/assets/profile-picture-2.jpg"
import Murli from "@/public/assets/murli.avif"

const SvgIcon = () => {
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

export default function Testimonials() {
    return (
        <>
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Read trusted reviews from our customers
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 md:gap-8">
                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <Image src={Jese} width={50} height={50} alt="jese" className="rounded-[50%]" />
                                <div>
                                    <div className="flex justify-center gap-0.5 text-green-500">
                                        <SvgIcon/>
                                        <SvgIcon/>
                                        <SvgIcon/>
                                        <SvgIcon/>
                                        <SvgIcon/>
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
                                        <SvgIcon/>
                                        <SvgIcon/>
                                        <SvgIcon/>
                                        <SvgIcon/>
                                        <SvgIcon/>
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
                                        <SvgIcon/>
                                        <SvgIcon/>
                                        <SvgIcon/>
                                        <SvgIcon/>
                                        <SvgIcon/>
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
        </>
    )
}