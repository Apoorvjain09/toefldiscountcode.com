import React from 'react';
import Image from 'next/image';
import profilePic from "../../../public/assets/profile-picture-2.jpg"; // Adjust based on actual profile picture location
import comparisonImage from "../../../public/assets/toefl-vs-ielts.webp"; // Adjust based on actual TOEFL vs IELTS comparison image location

export default function TOEFLvsIELTS() {
    return (
        <>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header className="mb-4 lg:mb-6 not-format">
                        <address className="flex items-center mb-6 not-italic">
                            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                <Image className="mr-4 w-16 h-16 rounded-full" src={profilePic} alt="Education Consultant" width={100} height={100}/>
                                <div>
                                    <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Oliver Smith</a>
                                    <p className="text-base text-gray-500 dark:text-gray-400">Education Consultant & Language Specialist</p>
                                    <p className="text-base text-gray-500 dark:text-gray-400"><span>Last Updated: April 5, 2024</span></p>
                                </div>
                            </div>
                        </address>
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">TOEFL vs IELTS: A Detailed Comparison for Aspiring International Students</h1>
                    </header>
                    <figure className="mb-8">
                        <Image src={comparisonImage} alt="TOEFL vs IELTS Comparison" width={800} height={450}/>
                        <figcaption>A visual comparison of TOEFL and IELTS exams.</figcaption>
                    </figure>
                    <p className="lead">The TOEFL (Test of English as a Foreign Language) and IELTS (International English Language Testing System) are two of the most widely recognized English proficiency tests in the world. Understanding the differences between these tests is crucial for students planning to study abroad.</p>
                    
                    <h2>Test Overview</h2>
                    <p>The TOEFL is predominantly used by American institutions, while the IELTS is preferred by British, Australian, Canadian, and New Zealand institutions, as well as by many universities in Europe and Asia.</p>
                    
                    <h2>Exam Format</h2>
                    <h3>TOEFL</h3>
                    <p>The TOEFL iBT is internet-based and consists of four sections: Reading, Listening, Speaking, and Writing, totaling about 3 hours and 30 minutes.</p>
                    
                    <h3>IELTS</h3>
                    <p>The IELTS is available in two types: Academic and General Training. Both versions include Listening, Reading, Writing, and Speaking sections, but the content and purpose differ. The total test time is about 2 hours and 45 minutes.</p>
                    
                    <h2>Scoring System</h2>
                    <p>The TOEFL scores range from 0 to 120, with each of the four sections scored out of 30. The IELTS scores each section on a band from 0 to 9, with an overall band score average.</p>
                    
                    <h2>Speaking Section</h2>
                    <p>In the TOEFL, the Speaking section is completed on the computer, with responses recorded and sent for evaluation. In contrast, the IELTS Speaking section is a face-to-face interview with an examiner.</p>
                    
                    <h2>Test Availability and Recognition</h2>
                    <p>Both tests are widely recognized, but students should check with their prospective institutions to determine specific test preferences. TOEFL is more widely accepted in the US, while IELTS has broader acceptance worldwide.</p>
                    
                    <h2>Preparation and Difficulty</h2>
                    <p>Preparation for both exams is crucial. Many find the TOEFL&apos;s structure more straightforward but challenging due to its focus on academic English. The IELTS is often perceived as more practical and easier for those comfortable with British English.</p>
                    
                    <h2>Choosing the Right Test</h2>
                    <p>Your choice between TOEFL and IELTS should consider your comfort with American or British English, the specific requirements of your target institutions, and your strengths in speaking, writing, listening, and reading.</p>
                    
                    <h2>Conclusion</h2>
                    <p>Both the TOEFL and IELTS are rigorous tests designed to assess the English proficiency of non-native speakers. The best way to decide which test to take is to assess your own language strengths and the requirements of the institutions you wish to apply to. Adequate preparation is key to success in either exam.</p>
                </article>
            </div>
        </main>
        </>
    );
}
