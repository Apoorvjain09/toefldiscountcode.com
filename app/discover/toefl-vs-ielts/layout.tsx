import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "TOEFL vs. IELTS: Choosing the Right English Proficiency Test",
  description:
    "Compare TOEFL and IELTS to determine which English proficiency test best suits your academic and professional goals. Understand the differences in format, scoring, and acceptance to make an informed decision.",
};




const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
};

export default layout;

