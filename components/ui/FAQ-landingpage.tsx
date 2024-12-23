import React from 'react';

const SvgIcon = () => {
    return (
        <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
    )
}

export default function FAQLandingPage() {
    return (
        <>
            <div className="w-[80vw] sm:w-[50vw] space-y-4 mb-10">
                <p className='text-4xl mb-6'>FAQ</p>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 className="font-medium">What is TOEFL?</h2>

                        <SvgIcon />

                    </summary>

                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                        TOEFL, or Test of English as a Foreign Language, measures the English language proficiency of non-native speakers. It is commonly used for university admissions and other academic placements.
                    </p>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 className="font-medium">How is the TOEFL scored?</h2>

                        <SvgIcon />
                    </summary>

                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                        The TOEFL is scored on a scale of 0 to 120 points, divided equally among four sections: Reading, Listening, Speaking, and Writing. Each section is worth 30 points.
                    </p>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 className="font-medium">What is a good TOEFL score?</h2>

                        <SvgIcon />
                    </summary>

                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                        A good TOEFL score depends on the requirements of the institution you are applying to. Generally, scores above 90 are considered good, while top universities may require scores above 100.                    </p>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 className="font-medium">How long is the TOEFL test?</h2>

                        <SvgIcon />
                    </summary>

                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                        The TOEFL test takes about 3 hours to complete, including check-in time. Each section is timed separately.
                    </p>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 className="font-medium">How do I register for the TOEFL?</h2>

                        <SvgIcon />
                    </summary>

                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                        You can register for the TOEFL test online through the official ETS website. You will need to create an account, choose a test date and location, and pay the registration fee.
                    </p>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 className="font-medium">What should I bring in test center?</h2>

                        <SvgIcon />
                    </summary>

                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                        On the test day, bring a valid ID (such as a passport), your registration confirmation, and a few pencils and erasers. Personal items like bags and mobile phones are usually not allowed in the testing room.
                    </p>
                </details>
            </div>
        </>
    );
}
