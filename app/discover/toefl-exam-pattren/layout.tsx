import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Understanding the TOEFL Exam Pattern - Detailed Guide",
  description:
    "Get a comprehensive overview of the TOEFL exam pattern. Learn about each section's format, time allocations, and types of questions. Prepare strategically to maximize your test performance.",
};


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
};

export default layout;

