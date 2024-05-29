import React from 'react';
import Image from 'next/image';
import toeflOverview from "../../../public/assets/toefl-ets-overview.webp"; // An image representing TOEFL, e.g., someone studying or the TOEFL logo
import RecentBlogsSidebar from '../RecentBlogSidebar';

export default function TOEFLPage() {
    return (
        <>
        <main className="flex-grow">
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                <RecentBlogsSidebar />
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                    <article className="mx-auto my-5 w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Understanding TOEFL ETS: Comprehensive Guide</h1>
                        </header>
                        <figure className="mb-8">
                            <Image src={toeflOverview} alt="TOEFL Overview" width={800} height={450} />
                            <figcaption>A glimpse into TOEFL preparation.</figcaption>
                        </figure>
                        <p className="lead">The Test of English as a Foreign Language (TOEFL) is a standardized test that measures the English language proficiency of non-native speakers wishing to enroll in English-speaking universities. Administered by the Educational Testing Service (ETS), TOEFL is a key requirement for admission in many institutions around the world.</p>
                        <h2>About ETS</h2>
                        <p>Educational Testing Service (ETS) is a premier nonprofit testing organization, responsible for the development, administration, and scoring of the TOEFL exam. ETS mission is to help advance quality and equity in education for people worldwide by creating assessments based on rigorous research.</p>
                        <h2>TOEFL Exam Structure</h2>
                        <p>The TOEFL exam is divided into four sections: Reading, Listening, Speaking, and Writing. Each section tests specific skills in the English language, including the ability to read, listen, speak, and write in an academic setting.</p>
                        <ul>
                            <li><strong>Reading:</strong> Measures the ability to understand academic reading material.</li>
                            <li><strong>Listening:</strong> Tests the ability to understand English as it is used in colleges and universities.</li>
                            <li><strong>Speaking:</strong> Assesses speaking skills in an academic setting.</li>
                            <li><strong>Writing:</strong> Measures the ability to write in a clear and coherent manner.</li>
                        </ul>
                        <h2>Preparing for the TOEFL Exam</h2>
                        <p>ETS provides a wide range of preparation materials, including practice tests, sample questions, and study guides, to help test-takers prepare for the TOEFL exam. These resources are designed to give candidates a thorough understanding of the test format and types of questions they will encounter.</p>
                        <h2>Registering for the TOEFL Exam</h2>
                        <p>Registration for the TOEFL exam can be completed online, by phone, or by mail. ETS recommends registering early to secure a test date and location that are convenient for the test-taker.</p>
                        <h2>TOEFL Scores and Reporting</h2>
                        <p>TOEFL scores are accepted by over 10,000 institutions in more than 150 countries. ETS sends official score reports directly to institutions designated by the test-taker, ensuring the integrity and recognition of the test scores.</p>
                        <h2>Conclusion</h2>
                        <p>The TOEFL exam, administered by ETS, is a critical step for non-native English speakers aiming to pursue higher education or professional opportunities in English-speaking environments. With comprehensive preparation and understanding of the exam structure, test-takers can achieve their desired scores and open doors to global opportunities.</p>
                    </article>
                </div>
            </main>
        </main>
        </>
    )
};
