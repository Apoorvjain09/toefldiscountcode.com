import React from 'react';
import Section from './Section';
import { sections } from './sectionsData';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TOEFL Study Material | Free TOEFL Books Download",
  description:
    "Download free TOEFL books and resources to ace your test. Access the best study materials and prepare for your TOEFL exam with ease.",
  keywords: "Free TOEFL books, TOEFL study material, Download TOEFL resources, TOEFL preparation books",
  openGraph: {
    title: "Download Free TOEFL Study Material | Best TOEFL Books",
    description:
      "Get access to free TOEFL books and resources to enhance your preparation. Download the best study materials and boost your TOEFL score today!",
    url: "https://toeflgoglobal.com/book",
    images: [
      {
        url: "/assets/goglobal1.webp",
        width: 800,
        height: 600,
        alt: "TOEFL Study Material Background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Free TOEFL Study Material | Best TOEFL Books",
    description:
      "Access free TOEFL books and preparation resources. Download top study materials and get ready to excel in your TOEFL exam.",
    images: ["/assets/goglobal1.webp"],
    creator: "@MJ_Study_Abroad",
  },
};

const Page: React.FC = () => {
  return (
    <div className='rounded-lg bg-gradient-to-r from-orange-500 to-pink-600'>
      <div className="text-center flex flex-col p-7">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </div>
  );
};

export default Page;
