import { ScanLine } from "lucide-react";
import PaymentButton from "../payment/RazorPayButton";
import Link from "next/link";

export default function Main() {
    const SvgIcon = () => (
        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
    );

    return (
        <>
            <section className="bg-white dark:bg-gray-900 rounded-t-lg">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-10 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl dark:text-white">Get @50% Discount on TOEFL Score Reporting</h1>
                        <h2 className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Get Toefl Score reporting vouchers available for 2024. Send your TOEFL scores seamlessly to educational institutions. Additionaly <a href="https://mja.in" className="hover:underline">MJA</a> will help you with FREE application <a href="https://mja.in" className="hover:underline">Work</a>.</h2>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            {/* <a target="_blank" href="https://chat.whatsapp.com/CHwPiz6xEpHC0WSivb2UN7" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg> Join Whatsapp Group
                            </a> */}
                            <Link target="_blank" href="https://rzp.io/l/KcgyLNpnnx" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm text-center text-white border bg-purple-400 shadow-lg font-bold rounded-lg sm:w-auto hover:bg-purple-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gap-2">
                                <ScanLine /> Buy For ₹1500
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="assets/score-reporting-hero.png" alt="score reporting image" />
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Before sending TOEFL scores</h2>
                            <p className="mb-8 font-light lg:text-xl">Get your application process effortlessly with our expert guidance, all for free. Connect with peers and professionals in our WhatsApp group dedicated to your success.</p>
                            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <li className="flex space-x-3">
                                    <SvgIcon />
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Free Application Assistance</span>
                                </li>
                                <li className="flex space-x-3">
                                    <SvgIcon />
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white"> TOEFL Score Reporting</span>
                                </li>
                                <li className="flex space-x-3">
                                    <SvgIcon />
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">AI University Shortlisting Bot</span>
                                </li>
                            </ul>
                            <p className="mb-8 font-light lg:text-xl">Get Free Application Work Guidance - Join Our WhatsApp Group.</p>
                        </div>
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="assets/score-reporting-feature-1.png" alt="dashboard feature image" />
                    </div>
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="assets/score-reporting-feature-2.png" alt="feature image 2" />
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">How to obtain discount codes</h2>
                            <p className="mb-8 font-light lg:text-xl">To get the discount, click the Buy Now button, and it will take you to the payment page. If you need help with your application work, you can join our MS in US WhatsApp community.</p>
                            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <li className="flex space-x-3">
                                    <SvgIcon />
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">@50% off on Toefl ASR codes</span>
                                </li>
                                <li className="flex space-x-3">
                                    <SvgIcon />
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Join TOEFL Community</span>
                                </li>
                                <li className="flex space-x-3">
                                    <SvgIcon />
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Get Application checked by AI</span>
                                </li>
                                <li className="flex space-x-3">
                                    <SvgIcon />
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Additionaly Verify Application by experts </span>
                                </li>
                                <li className="flex space-x-3">
                                    <SvgIcon />
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Save thousands on voucher codes</span>
                                </li>
                            </ul>
                            <p className="font-light lg:text-xl">Instant Access to Application Assessment- Join Our WhatsApp Group</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}