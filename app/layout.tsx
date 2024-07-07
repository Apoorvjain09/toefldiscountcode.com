"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import 'regenerator-runtime/runtime';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalyticsTracking } from "@/components/Head/GoogleAnalyticsTracker";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <GoogleAnalyticsTracking />
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