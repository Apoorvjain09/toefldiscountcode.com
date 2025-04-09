"use client"

import MainPayentPopup from "@/components/payment/MainPaymentPopup";
import PaypalPaymentButton from "@/components/payment/paypal/paypal-button";
import { Head } from "next/document";
import { useState } from "react";

export default function Payment() {
  const [showPricingModal, setShowPricingModal] = useState(false)

  const SvgTick = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5 text-indigo-700"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    )
  }
  const SvgCross = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5 text-red-700"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
  }

  return (
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-gray-900 mb-20 text-center">
        <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text uppercase">
          Subscriptions
        </span>
      </h1>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          <div
            className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
          >
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                TGG Plus
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 5.99$ </strong>

                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> 7 AI-Powered Mock Tests </span>
              </li>

              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> Access to TOEFL practice Tests </span>
              </li>

              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> Free University Shortlisting </span>
              </li>

              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> Instant TGG-AI evaluation </span>
              </li>

              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> 400+ practice questions </span>
              </li>
            </ul>

            <a
              // href="https://rzp.io/rzp/Daf27InL"
              // target="_blank"
              className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
              onClick={() => { setShowPricingModal(true) }}
            >
              Get Started
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Starter
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> Free </strong>

                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> 1 Mock Test </span>
              </li>

              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> Vocab Lader Access </span>
              </li>

              <li className="flex items-center gap-1">
                <SvgCross />
                <span className="text-gray-700"> Pre-recorded classes </span>
              </li>

              <li className="flex items-center gap-1">
                <SvgCross />
                <span className="text-gray-700"> Help center access </span>
              </li>
            </ul>

            <a
              // href="/"
              className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <MainPayentPopup
        showPricingModal={showPricingModal}
        setShowPricingModal={setShowPricingModal}
      />
    </div>
  );
}
