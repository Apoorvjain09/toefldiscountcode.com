import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "TOEFL ETS Official Guide - TOEFL Exam",
  description:
    "Dive into the official resources provided by ETS for TOEFL preparation. Discover test dates, scoring information, and registration details to successfully navigate your TOEFL journey.",
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
};

export default layout;

