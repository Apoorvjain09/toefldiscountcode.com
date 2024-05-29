import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "TOEFL Practice Tests - Prepare to Succeed",
  description:
    "Prepare for the TOEFL exam with our collection of practice tests. Gain insights into the test format, question types, and strategies to improve your score.",
};



const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
};

export default layout;

