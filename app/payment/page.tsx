"use client"
import { useUser } from '@clerk/nextjs';
import PaymentButton from './RazorPayButton';
import { useEffect } from 'react';

export default function Payment() {
  const { user } = useUser();

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
      <div className="flex gap-10 justify-evenly flex-col lg:flex-row">
        {/* 3 Month Membership */}
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              3-Month Membership
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 text-gray-700">Best Value Pack!</p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 15$ </strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-xl"> <del>45$!</del> <ins>40$</ins>!</strong>
            </p>
            <button
              className="w-full mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
            >
              <PaymentButton id="pl_OYfBLTGmPCKsCY" />
            </button>
          </div>
          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>
            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> 10 Full-length Mock tests </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> 100TGG free User credit </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> Email support </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgCross />
                <span className="text-gray-700"> Help center access </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgCross />
                <span className="text-gray-700"> Phone support </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgCross />
                <span className="text-gray-700"> Community access </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 6-Month Membership Plan */}
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              6-Month Membership
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 text-gray-700">Best Selling!</p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 10$ </strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-xl"> <del>60$!</del> <ins>50$</ins>!</strong>
            </p>
            <button
              className="w-full mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
            >
              <PaymentButton id='pl_OYe9haqEkwk3Jd' />
            </button>
          </div>
          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>
            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> 10 free mock test (Full-length) </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> 200TGG free User credit </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> Email support </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> Help center access </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgCross />
                <span className="text-gray-700"> Phone support </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgCross />
                <span className="text-gray-700"> Community access </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Monthly Subscription Plan */}
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Monthly Subscription
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 text-gray-700">For Users Whose test date is close.</p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 20$ </strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-xl">Flat 20$!</strong>
            </p>
            <button
              className="w-full mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
            >
              <PaymentButton id='pl_OYfRwibtIHC3Nx' />
            </button>
          </div>
          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>
            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> 10 free mock test (Full-length) </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> 200TGG free User credit </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> Email support </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> Help center access </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> Phone support </span>
              </li>
              <li className="flex items-center gap-1">
                <SvgTick />
                <span className="text-gray-700"> Community access </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
