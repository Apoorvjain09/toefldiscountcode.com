import MainFooter from "@/components/landing-page/MainFooter";
import { BuildingIcon, ClockIcon, StarIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "TOEFL Courses | Master TOEFL Preparation Online",
    description:
        "Discover expert-led TOEFL courses to boost your preparation. Flexible schedules, interactive lectures, and personalized study plans for success.",
    keywords: "TOEFL courses, Online TOEFL classes, Master TOEFL preparation, TOEFL coaching",
    openGraph: {
        title: "TOEFL Courses | Master TOEFL Preparation Online",
        description:
            "Prepare for TOEFL with top-rated online courses. Join expert instructors and access tailored study plans to achieve your dream score.",
        url: "https://toeflgoglobal.com/courses",
        images: [
            {
                url: "/assets/goglobal1.webp", // Keeping the same image as requested
                width: 800,
                height: 600,
                alt: "TOEFL Courses Background",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TOEFL Courses | Master TOEFL Preparation Online",
        description:
            "Join the best TOEFL courses online to prepare effectively. Interactive lectures, expert guidance, and flexible schedules tailored to your needs.",
        images: ["/assets/goglobal1.webp"], // Same image
        creator: "@MJ_Study_Abroad", // Replace with your Twitter handle
    },
};


export default function page() {

    const courses = [
        {
            title: "GRE Verbal Masterclass",
            price: "$115.00",
            href: "/courses/verbal-course",
            image: "assets/verbal-course-banner.png",
            lectures: 13,
            length: "26 hours",
            validity: "1 Year",
        },
        {
            title: "GRE Quant Masterclass",
            price: "$120.00",
            href: "/courses/quant-course",
            image:
                "https://www.dropbox.com/scl/fi/bnv3tio9lv26hfl6uxfa1/Quant_banner.png?rlkey=157scoylsfn6ocbks61vazrje&st=zby55ofw&raw=1",
            lectures: 18,
            length: "35 hours",
            validity: "1 Year",
        },
        {
            title: "Toefl Masterclass",
            price: "$110.00",
            href: "/courses/toefl-course",
            image:
                "https://www.dropbox.com/scl/fi/p9hkf8rsso0q2e072k3ko/toefl_banner.png?rlkey=8x2cy0odie1iz1207jlo8dkas&st=fw4bb3kg&raw=1",
            lectures: 13,
            length: "26 hours",
            validity: "1 year",
        },
    ];

    return (
        <>
            <h1 className='flex items-center justify-center bg-gradient-to-r from-orange-400 to-red-400 rounded-t-lg w-full text-center h-[20vh] font-extrabold text-3xl text-white'>
                ToeflGoGlobal Courses
            </h1>

            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8">
                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">Top 100 Admits</dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">1000+</dd>
                            </div>

                            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">Scholarship Received</dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$600k+</dd>
                            </div>

                            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">Google Reviews</dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">4.8/5</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

            <section className="flex flex-wrap p-5 gap-5 justify-evenly">
                {courses.map((course, index) => (
                    <Link
                        key={index}
                        href={course.href}
                        className="sm:w-[40%] shadow-lg block rounded-lg p-4 shadow-indigo-100"
                    >
                        <img
                            alt={course.title}
                            src={course.image}
                            className="w-full rounded-md object-cover"
                        />

                        <div className="mt-2">
                            <dl>
                                <dd className="text-sm text-gray-500">{course.price}</dd>
                                <dd className="font-medium">{course.title}</dd>
                            </dl>

                            <div className="mt-6 flex items-center gap-8 text-xs">
                                {[
                                    {
                                        label: "Classes",
                                        value: `${course.lectures} Lectures`,
                                        icon: BuildingIcon,
                                    },
                                    {
                                        label: "Length",
                                        value: course.length,
                                        icon: StarIcon,
                                    },
                                    {
                                        label: "Validity",
                                        value: course.validity,
                                        icon: ClockIcon,
                                    },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                                    >
                                        <item.icon className="size-4 text-indigo-700" />
                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">{item.label}</p>
                                            <p className="font-medium">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </section>

            <MainFooter />
        </>
    )
}