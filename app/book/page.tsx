"use client";
import React, { Suspense, lazy } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const Section = lazy(() => import("./Section"));
const sectionsPromise = import("./sectionsData").then(module => module.sections);

function Page() {
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
          <Suspense fallback={<LoadingSpinner />}>
            {sectionsPromise.then(sections => 
              sections.map((section, index) => (
                <Section key={index} {...section} />
              ))
            )}
          </Suspense>
        </div>
      </div>
    </Suspense>
  );
}

export default Page;
