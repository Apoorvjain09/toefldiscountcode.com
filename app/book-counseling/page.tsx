"use client"
import React from 'react';
import BookCounselingCarousel from './BookCounselingCarousel';
import UniversityAcceptanceRates from './UniversityAcceptanceRates';
import BookCounselingFAQ from './BookCounselingFAQ';
import BookCounselingHowDoWeDoIt from './BookCounselingHow';
import MainFooter from '@/components/landing-page/MainFooter';
import Link from 'next/link';

const Home = () => {
    return (
        <>
            <div className="text-center lg:text-left mt-5 flex flex-col lg:flex-row justify-between items-center p-5 sm:p-10 gap-10 lg:gap-0">
                {/* Left Section */}
                <div className="lg:w-1/2">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Entering the World's <span className="text-blue-600">Leading Universities</span> Just Got Easier!
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Our tech-supported counseling service, backed by over 20 years of experience and recognized in the World Record Book, doubles your chances of getting into the world's top 200 universities, often with scholarships.
                    </p>
                    <Link href="/book-counseling/slot-selection">
                        <button className="bg-blue-600 text-white rounded-lg text-xl py-3 px-12 hover:bg-blue-700 font-bold">
                            Schedule A Call
                        </button>
                    </Link>
                    <p className="text-sm text-blue-600 mt-2">
                        FREE 30-minute call with our expert for top university admissions
                    </p>
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <BookCounselingCarousel />
                </div>
            </div>

            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
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

            <UniversityAcceptanceRates />

            <BookCounselingHowDoWeDoIt />

            <BookCounselingFAQ />

            <MainFooter />
        </>
    );
};

export default Home;
