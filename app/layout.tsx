"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import 'regenerator-runtime/runtime';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalyticsTracking } from "@/components/Head/GoogleAnalyticsTracker";
import { useEffect } from "react";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
          console.log('Service Worker registered: ', registration);
        }).catch(registrationError => {
          console.log('Service Worker registration failed: ', registrationError);
        });
      });
    }
  }, []);

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