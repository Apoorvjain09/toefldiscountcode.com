import { ReactNode } from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TOEFL Discount Code | Save Big on TOEFL Registration",
  description: "Unlock exclusive TOEFL discount codes and save on your exam registration. Join GregoGlobal for the best deals and top-notch TOEFL preparation resources.",
  keywords: "TOEFL discount code, Save on TOEFL registration, TOEFL deals, TOEFL promo code",
  openGraph: {
    title: "TOEFL Discount Code | Save Big on TOEFL Registration",
    description: "Access exclusive TOEFL discount codes and prepare for your exam with GregoGlobal's top resources. Save now and excel in your TOEFL journey.",
    url: "https://www.toeflgoglobal.com/discount-code",
    type: 'website',
    images: [
      {
        url: "https://www.toeflgoglobal.com/assets/goglobal1.webp",
        width: 800,
        height: 600,
        alt: "TOEFL Discount Code Background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOEFL Discount Code | Save Big on TOEFL Registration",
    description: "Get exclusive TOEFL discount codes and top preparation resources. Save on registration fees and boost your TOEFL success with GregoGlobal.",
    images: ["https://www.toeflgoglobal.com/assets/goglobal1.webp"],
    creator: "@MJ_Study_Abroad",
  },
};

const layout = ({ children }: { children: ReactNode }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.toeflgoglobal.com/toefl-voucher",
    "name": "TOEFL Go Global",
    "description": "Get exclusive TOEFL discount codes and top preparation resources. Save on registration fees and boost your TOEFL success with GregoGlobal.",
    "image": "https://www.toeflgoglobal.com/assets/goglobal1.webp",
    "publisher": {
      "@type": "Organization",
      "name": "TOEFL Go Global",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.toeflgoglobal.com/assets/goglobal1.webp",
      },
    },
  };
  return (
    <div className="">
      <main className="">{children}</main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
};

export default layout;

