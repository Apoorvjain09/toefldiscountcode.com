"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import 'regenerator-runtime/runtime';
import { GoogleAnalyticsTracking } from "@/components/Head/GoogleAnalyticsTracker";
import { useEffect } from "react";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const clearCacheAndUnregister = () => {
      // Unregister the service worker
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
          for (let registration of registrations) {
            registration.unregister().then(() => {
              console.log('Service worker unregistered');
            });
          }
        });
      }

      // Clear all caches
      if ('caches' in window) {
        caches.keys().then(cacheNames => {
          cacheNames.forEach(cacheName => {
            caches.delete(cacheName).then(() => {
              console.log(`Cache ${cacheName} cleared`);
            });
          });
        });
      }
    };

    clearCacheAndUnregister();
  }, []);

  return (
    <>
      <ClerkProvider>
        <html lang="en">
          <head>
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#000000" />
            <link rel="apple-touch-icon" href="/assets/goglobal1.webp" />
          </head>
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
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}