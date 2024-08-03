export default function page() {
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

            <div className="flex flex-wrap p-5 gap-5 justify-evenly">
                <a href="/courses/verbal-course" className="sm:w-[40%] shadow-lg block rounded-lg p-4 shadow-indigo-100">
                    <img
                        alt=""
                        src="assets/verbal-course-banner.png"
                        className="sm:h-64 w-full rounded-md object-cove"
                    />

                    <div className="mt-2">
                        <dl>
                            <div>
                                <dt className="sr-only">Price</dt>

                                <dd className="text-sm text-gray-500">$115.00</dd>
                            </div>

                            <div>
                                <dt className="sr-only">Address</dt>

                                <dd className="font-medium">GRE Verbal Masterclass</dd>
                            </div>
                        </dl>

                        <div className="mt-6 flex items-center gap-8 text-xs">
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="size-4 text-indigo-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                    />
                                </svg>

                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500">Classes</p>

                                    <p className="font-medium">13 Lectures</p>
                                </div>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="size-4 text-indigo-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    />
                                </svg>

                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500">Length</p>

                                    <p className="font-medium">26 hours</p>
                                </div>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="size-4 text-indigo-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>

                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500">Validity</p>

                                    <p className="font-medium">1 Year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/courses/quant-course" className="sm:w-[40%] shadow-lg block rounded-lg p-4 shadow-indigo-100">
                    <img
                        alt=""
                        src="https://www.dropbox.com/scl/fi/bnv3tio9lv26hfl6uxfa1/Quant_banner.png?rlkey=157scoylsfn6ocbks61vazrje&st=zby55ofw&raw=1"
                        className="sm:h-64 w-full rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl>
                            <div>
                                <dt className="sr-only">Price</dt>

                                <dd className="text-sm text-gray-500">$120.000</dd>
                            </div>

                            <div>
                                <dt className="sr-only">Address</dt>

                                <dd className="font-medium">GRE Quant Masterclass</dd>
                            </div>
                        </dl>

                        <div className="mt-6 flex items-center gap-8 text-xs">
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="size-4 text-indigo-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                    />
                                </svg>

                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500">Classes</p>

                                    <p className="font-medium">18 Lectures</p>
                                </div>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="size-4 text-indigo-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    />
                                </svg>

                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500">Length</p>

                                    <p className="font-medium">35 hours</p>
                                </div>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="size-4 text-indigo-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>

                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500">Validity</p>

                                    <p className="font-medium">1 Year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/courses/toefl-course" className="sm:w-[40%] shadow-lg block rounded-lg p-4 shadow-indigo-100">
                    <img
                        alt=""
                        src="https://www.dropbox.com/scl/fi/p9hkf8rsso0q2e072k3ko/toefl_banner.png?rlkey=8x2cy0odie1iz1207jlo8dkas&st=fw4bb3kg&raw=1"
                        className="sm:h-64 w-full rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl>
                            <div>
                                <dt className="sr-only">Price</dt>

                                <dd className="text-sm text-gray-500">$240,000</dd>
                            </div>

                            <div>
                                <dt className="sr-only">Address</dt>

                                <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                            </div>
                        </dl>

                        <div className="mt-6 flex items-center gap-8 text-xs">
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="size-4 text-indigo-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                    />
                                </svg>

                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500">Parking</p>

                                    <p className="font-medium">2 spaces</p>
                                </div>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="size-4 text-indigo-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    />
                                </svg>

                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500">Bathroom</p>

                                    <p className="font-medium">2 rooms</p>
                                </div>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="size-4 text-indigo-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>

                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500">Bedroom</p>

                                    <p className="font-medium">4 rooms</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <footer className="rounded-b-lg bg-gray-100">
                <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div>
                            <div className="flex justify-center text-blue-600 lg:justify-start">
                                <p className='font-extrabold text-3xl'>TOEFL Go GLobal</p>
                            </div>

                            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                                MJ Study Aborad is one of the Leading Study Abroad Counsultant (as per ETS) providing education loan and visa services as well.
                            </p>
                        </div>


                        <div className='flex flex-col'>
                            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/book"> Books </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/forum"> Forum </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/score-reporting"> score reporting</a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/book-counseling"> Counseling </a>
                                </li>
                            </ul>
                            <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                                Copyright &copy; 2024. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}