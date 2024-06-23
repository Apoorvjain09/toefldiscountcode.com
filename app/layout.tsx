"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import 'regenerator-runtime/runtime';
import { useState, useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalyticsTracking } from "@/components/Head/GoogleAnalyticsTracker";
import { Seo } from "@/components/Head/Seo";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // const pathname = usePathname();
  // const isTestPage = pathname.match(/^\/tests\/[1-9]$|^\/tests\/10$/);

  return (
    <ClerkProvider>
      <html lang="en">
        <GoogleAnalyticsTracking />
        <Seo
          title="Toefl Go Global -AI Mock tests"
          description="Prepare for your TOEFL exam with our AI-powered mock tests. Experience realistic test simulations, receive detailed feedback, and track your progress. Access a wealth of study materials, practice questions, and expert advice to excel in your TOEFL exam. Join our community of learners and maximize your TOEFL score with Toefl Go Global."
          url="https://toeflgoblobal.com"
          image="/assets/goglobal1.webp"
        />
        <body>
          <main className="">
            <div className="p-4 sm:ml-64">
              <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <Sidebar />
                {children}
              </div>
            </div>
          </main>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}