import React from 'react'
import Image from 'next/image'
import bonnie from '@/public/assets/bonnie-green.png'
import jese from '@/public/assets/jese-leos.png'
import Link from 'next/link'
import { Metadata } from 'next';

export default async function Discover() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 rounded-lg">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h1>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* toefl guide */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                  Guide
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href="/discover/toefl-guide">TOEFL Guide: Unlocking the Key Details for Test Takers</Link></h1>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Dive into the specifics of the TOEFL exam with our comprehensive guide. From registration to preparation, get all the insights you need to ace the test.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image className="w-7 h-7 rounded-full" src={jese} alt="Jese Leos avatar" />
                  <span className="font-medium dark:text-white">
                    Jese Leos
                  </span>
                </div>
                <Link href="/discover/toefl-guide" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </article>
            {/* toefl exam  */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                  Guide
                </span>
                <span className="text-sm">Just now</span>
              </div>
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Link href="/discover/toefl-exam">Preparing for the TOEFL Exam: Essential Insights and Preparation Tips</Link>
              </h1>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                Discover essential strategies and tips to prepare for the TOEFL exam. Learn how to study effectively, manage your time, and improve your score.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image className="w-7 h-7 rounded-full" src={jese} alt="Jese Leos avatar" />
                  <span className="font-medium dark:text-white">Jese Leos</span>
                </div>
                <Link href="/discover/toefl-exam" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </article>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 my-10">
            {/* toefl full form */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                  Educational
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href="/discover/toefl-full-form">Explaining TOEFL: The Full Form and Its Importance for Students</Link></h1>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">TOEFL, an essential assessment for non-native English speakers, plays a pivotal role in unlocking opportunities in education and beyond. Discover its significance for global learners.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image className="w-7 h-7 rounded-full" src={jese} alt="Jese Leos avatar" />
                  <span className="font-medium dark:text-white">
                    Jese Leos
                  </span>
                </div>
                <Link href="/discover/toefl-full-form" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </article>
            {/* toefl exam fee  */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                  Financial Guide
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href="/discover/toefl-exam-fee">TOEFL Exam Fees: A Detailed Breakdown of Costs for 2024</Link></h1>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Navigating the expenses of TOEFL can be daunting. This guide offers a comprehensive breakdown of the fees for 2024, helping students prepare financially for their journey.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image className="w-7 h-7 rounded-full" src={bonnie} alt="Bonnie Green avatar" />
                  <span className="font-medium dark:text-white">
                    Bonnie Green
                  </span>
                </div>
                <Link href="/discover/toefl-exam-fee" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </article>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 my-10">
            {/* toefl login */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                  Guide
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href="/discover/toefl-login">Easy TOEFL Login Steps: Accessing Your Test Information Quickly</Link></h1>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Streamline your TOEFL prep with our easy login guide. Discover how to quickly access your test information, scores, and more, ensuring a smooth testing experience.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image className="w-7 h-7 rounded-full" src={jese} alt="Jese Leos avatar" />
                  <span className="font-medium dark:text-white">
                    Jese Leos
                  </span>
                </div>
                <Link href="/discover/toefl-login" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </article>
            {/* toefl ets */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                  Tutorial
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href="/discover/toefl-ets">Navigating the TOEFL ETS Portal: A Comprehensive User&apos;s Overview</Link></h1>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Embark on your TOEFL journey with confidence. This comprehensive overview of the TOEFL ETS Portal guides you through every step, from registration to accessing your test results.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image className="w-7 h-7 rounded-full" src={bonnie} alt="Bonnie Green avatar" />
                  <span className="font-medium dark:text-white">
                    Bonnie Green
                  </span>
                </div>
                <Link href="/discover/toefl-ets" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </article>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 my-10">
            {/* toefl exam pattern */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                  Exam Info
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href="/discover/toefl-exam-pattren">TOEFL Exam Pattern: Understanding the Structure for 2024</Link></h1>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Get ahead with your TOEFL preparation by understanding the exam pattern for 2024. This article provides insights into the structure, helping you strategize your study plan effectively.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image className="w-7 h-7 rounded-full" src={jese} alt="Jese Leos avatar" />
                  <span className="font-medium dark:text-white">
                    Jese Leos
                  </span>
                </div>
                <Link href="/discover/toefl-exam-pattren" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </article>
            {/* toefl ets login  */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                  Tutorial
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href="/discover/toefl-login">TOEFL ETS Login: Step-by-Step Access to Your Testing Profile</Link></h1>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Master the TOEFL ETS login process with our step-by-step guide. Access your testing profile effortlessly and manage your exam preparation seamlessly.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image className="w-7 h-7 rounded-full" src={bonnie} alt="Bonnie Green avatar" />
                  <span className="font-medium dark:text-white">
                    Bonnie Green
                  </span>
                </div>
                <Link href="/discover/toefl-login" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </article>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 my-10">
            {/* toefl ibt */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                  Study Guide
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href="/discover/toefl-ibt">TOEFL iBT: Comprehensive Guide to Internet-Based Test Format and Tips</Link></h1>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Dive into the details of the TOEFL iBT with our comprehensive guide. Learn about the internet-based test format and discover essential tips to enhance your performance.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image className="w-7 h-7 rounded-full" src={jese} alt="Jese Leos avatar" />
                  <span className="font-medium dark:text-white">
                    Jese Leos
                  </span>
                </div>
                <Link href="/discover/toefl-ibt" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </article>
            {/* toefl vs ielts */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                  Comparative Analysis
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href="/discover/toefl-vs-ielts">TOEFL vs IELTS: A Detailed Comparison for Aspiring International Students</Link></h1>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Choosing between TOEFL and IELTS? Our detailed comparison provides aspiring international students with the insights needed to make an informed decision based on their academic and immigration goals.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image className="w-7 h-7 rounded-full" src={bonnie} alt="Bonnie Green avatar" />
                  <span className="font-medium dark:text-white">
                    Bonnie Green
                  </span>
                </div>
                <Link href="/discover/toefl-vs-ielts" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </article>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 my-10">
            {/* toefl practice test */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                  Exam Prep
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href="/discover/toefl-practiceTests">Effective TOEFL Practice Tests: How to Use Them for a Top Score</Link></h1>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Maximize your TOEFL preparation with effective practice tests. Learn the strategies on how to use these tests to pinpoint your strengths and weaknesses, leading to a top score.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image className="w-7 h-7 rounded-full" src={jese} alt="Jese Leos avatar" />
                  <span className="font-medium dark:text-white">
                    Jese Leos
                  </span>
                </div>
                <Link href="/discover/toefl-practiceTests" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </article>
            {/* toefl and ielts */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                  Analysis
                </span>
                <span className="text-sm">14 days ago</span>
              </div>
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href="/discover/toefl-vs-ielts">TOEFL and IELTS: Analyzing Both Tests for Academic and Immigration Purposes</Link></h1>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Understand the key differences and similarities between TOEFL and IELTS. This analysis helps you decide which test aligns best with your academic and immigration objectives.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image className="w-7 h-7 rounded-full" src={bonnie} alt="Bonnie Green avatar" />
                  <span className="font-medium dark:text-white">
                    Bonnie Green
                  </span>
                </div>
                <Link href="/discover/toefl-vs-ielts" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
