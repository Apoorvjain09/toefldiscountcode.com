import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "What is TOEFL? Understanding the Full Form and Its Importance",
  description:
    "Discover the full form of TOEFL and why it's essential for studying abroad. Learn what TOEFL stands for, its role in university admissions, and how it assesses your English proficiency.",
};


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
};

export default layout;

