// export const dynamic = 'force-static'

import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import 'regenerator-runtime/runtime';
import { GoogleAnalyticsTracking } from "@/components/Head/GoogleAnalyticsTracker";
import ClerkHandleLogInComponent from "@/components/clerk-login/clerkHandleLogInComponent";
import PopupManager from "@/components/popup/popup-manager";
import 'regenerator-runtime/runtime';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClerkProvider>
        <html lang="en">
          <head>
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#000000" />
            <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
          </head>
          <GoogleAnalyticsTracking />
          <body>
            <PopupManager />
            <main className="">
              <div className="p-4 lg:ml-64">
                <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                  <Sidebar />
                  <ClerkHandleLogInComponent />
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