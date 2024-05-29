import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Our Blog - TOEFL Exam",
  description:
    "Explore comprehensive guides and tips for the TOEFL exam. Get insights on preparation, patterns, fees, and more to ace your test.",
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
};

export default layout;

