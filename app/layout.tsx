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
      <Head>
          {/* Google Tag Manager */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16486749894"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16486749894');
              `,
            }}
          />
        </Head>
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