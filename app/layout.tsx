"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import 'regenerator-runtime/runtime';
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 6-second loading time
  }, []);

  // const pathname = usePathname();
  // const isTestPage = pathname.match(/^\/tests\/[1-9]$|^\/tests\/10$/);

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <LoadingSpinner loading={loading} />
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
