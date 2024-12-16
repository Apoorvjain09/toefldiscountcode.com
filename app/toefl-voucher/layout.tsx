import { ReactNode } from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TOEFL Discount Code | Save Big on TOEFL Registration",
  description:
    "Unlock exclusive TOEFL discount codes and save on your exam registration. Join GregoGlobal for the best deals and top-notch TOEFL preparation resources.",
  keywords: "TOEFL discount code, Save on TOEFL registration, TOEFL deals, TOEFL promo code",
  openGraph: {
    title: "TOEFL Discount Code | Save Big on TOEFL Registration",
    description:
      "Access exclusive TOEFL discount codes and prepare for your exam with GregoGlobal's top resources. Save now and excel in your TOEFL journey.",
    url: "https://toeflgoglobal.com/discount-code",
    images: [
      {
        url: "/assets/goglobal1.webp",
        width: 800,
        height: 600,
        alt: "TOEFL Discount Code Background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOEFL Discount Code | Save Big on TOEFL Registration",
    description:
      "Get exclusive TOEFL discount codes and top preparation resources. Save on registration fees and boost your TOEFL success with GregoGlobal.",
    images: ["/assets/goglobal1.webp"], // Specified image
    creator: "@MJ_Study_Abroad", // Replace with your Twitter handle
  },
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
};

export default layout;

