import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "TOEFL iBT: Your Comprehensive Test Guide",
  description:
    "Dive deep into the TOEFL iBT with our comprehensive guide. Understand the internet-based test format, scoring system, and effective strategies to achieve a high score.",
};


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
};

export default layout;

