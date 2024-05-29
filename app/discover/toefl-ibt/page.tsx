import React from 'react';
import Image from 'next/image';
import profilePic from "../../../public/assets/profile-picture-2.jpg"; // Adjust based on actual profile picture location
import toeflIbtImage from "../../../public/assets/toefl-ets.webp"; // Adjust based on actual TOEFL iBT image location

export default function TOEFLiBTGuide() {
    return (
        <>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header className="mb-4 lg:mb-6 not-format">
                        <address className="flex items-center mb-6 not-italic">
                            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                <Image className="mr-4 w-16 h-16 rounded-full" src={profilePic} alt="Language Expert" width={100} height={100}/>
                                <div>
                                    <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Maria Gonzalez</a>
                                    <p className="text-base text-gray-500 dark:text-gray-400">Language Expert & TOEFL Instructor</p>
                                    <p className="text-base text-gray-500 dark:text-gray-400"><span>Updated: March 10, 2024</span></p>
                                </div>
                            </div>
                        </address>
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">TOEFL iBT: Comprehensive Guide to Internet-Based Test Format and Tips</h1>
                    </header>
                    <figure className="mb-8">
                        <Image src={toeflIbtImage} alt="TOEFL iBT Preparation" width={800} height={450}/>
                        <figcaption>Effective preparation strategies for the TOEFL iBT.</figcaption>
                    </figure>
                    <p className="lead">The TOEFL iBT (Internet-Based Test) is a standardized test to measure English language proficiency for non-native speakers wishing to enroll in English-speaking universities. This guide will cover the test format, sections, scoring, and preparation tips.</p>
                    
                    <h2>Understanding the TOEFL iBT Format</h2>
                    <p>The TOEFL iBT is divided into four sections: Reading, Listening, Speaking, and Writing, each designed to test a specific skill in the English language. The total test time is about 3 hours and 30 minutes.</p>
                    
                    <h3>Reading Section</h3>
                    <p>The Reading section includes 3-4 passages from academic texts, followed by questions to test comprehension.</p>
                    
                    <h3>Listening Section</h3>
                    <p>In the Listening section, test-takers listen to lectures, classroom discussions, and conversations, then answer questions on them.</p>
                    
                    <h3>Speaking Section</h3>
                    <p>The Speaking section assesses the ability to express ideas in English in an academic setting. It includes 4 tasks that simulate real-life situations.</p>
                    
                    <h3>Writing Section</h3>
                    <p>The Writing section requires test-takers to complete two tasks: one based on reading and listening tasks, and another that is an independent essay.</p>
                    
                    <h2>Scoring</h2>
                    <p>Each of the four sections is scored out of 30, with a total possible score of 120. Scores are available online approximately 10 days after the test date.</p>
                    
                    <h2>Preparation Tips</h2>
                    <ul>
                        <li>Get familiar with the test format by reviewing official TOEFL iBT materials.</li>
                        <li>Practice each section under timed conditions to improve speed and accuracy.</li>
                        <li>Enhance your English skills through reading, listening, speaking, and writing in academic contexts.</li>
                        <li>Consider taking a TOEFL preparation course or hiring a tutor if you need structured guidance.</li>
                    </ul>
                    
                    <h2>Test Day Tips</h2>
                    <ul>
                        <li>Arrive early to the test center with all required identification.</li>
                        <li>Wear comfortable clothing and bring water and snacks for breaks.</li>
                        <li>Manage your time efficiently, especially in the Reading and Listening sections.</li>
                        <li>Stay calm and focused throughout the test, especially during the Speaking section.</li>
                    </ul>
                    
                    <h2>Conclusion</h2>
                    <p>Success on the TOEFL iBT comes from thorough preparation and understanding of the test format. By following this guide and consistently practicing your English skills, you can improve your chances of achieving a high score on the TOEFL iBT.</p>
                </article>
            </div>
        </main>
        </>
    );
}
