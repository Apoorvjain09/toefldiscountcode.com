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
        <body>
          <main className="">
            <div className="p-4 sm:ml-64">
              <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <Sidebar />
                <Suspense fallback={<LoadingSpinner />}>
                  {children}
                </Suspense>
              </div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}