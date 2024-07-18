"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import 'regenerator-runtime/runtime';
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
      navigator.serviceWorker.getRegistrations().then(registrations => {
        for (let registration of registrations) {
          registration.unregister();
        }
      }).catch(error => {
        console.error(`Service worker unregistration failed: ${error}`);
      });
    }

    if ('caches' in window) {
      caches.keys().then(names => {
        for (let name of names) {
          caches.delete(name);
        }
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
        </body>
      </html>
    </ClerkProvider>
  );
}