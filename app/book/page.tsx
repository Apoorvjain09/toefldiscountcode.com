"use client";
import React, { useState, useEffect, Suspense, lazy } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const Section = lazy(() => import("./Section"));

interface CardProps {
  title: string;
  description: string;
  link: string;
}

interface SectionProps {
  title: string;
  cards: CardProps[];
}

const Page: React.FC = () => {
  const [sections, setSections] = useState<SectionProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("./sectionsData")
      .then((module) => {
        setSections(module.sections);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load sections data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Suspense fallback={<div><LoadingSpinner /></div>}>
      <div
        style={{
          backgroundImage: `url(/assets/background-books.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          borderRadius: "0.5rem",
        }}
      >
        <div className="text-center flex flex-col p-7">
          {sections.map((section, index) => (
            // <Suspense key={index} fallback={<LoadingSpinner />}>
              <Section {...section} />
            // </Suspense>
          ))}
        </div>
      </div>
    </Suspense>
  );
}

export default Page;
