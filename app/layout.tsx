"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import 'regenerator-runtime/runtime';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
    };

    const handleRouteComplete = () => {
      setIsLoading(false);
    };

    window.addEventListener('beforeunload', handleRouteChange);
    window.addEventListener('unload', handleRouteComplete);

    return () => {
      window.removeEventListener('beforeunload', handleRouteChange);
      window.removeEventListener('unload', handleRouteComplete);
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000); // Adjust the timeout as needed
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main className="relative">
            <div className="p-4 sm:ml-64">
              <div className={`border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700}`}>
                {isLoading && (
                  <LoadingSpinner />
                )}  
                <div className={`${isLoading ? 'hidden' : 'block'}`}>
                  <Sidebar />
                  {children}
                </div>
              </div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
