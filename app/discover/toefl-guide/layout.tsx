import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ultimate TOEFL Guide - Everything You Need to Know",
  description:
    "Explore our ultimate guide to the TOEFL exam. From registration steps to detailed preparation tips, learn everything required to excel in this crucial English proficiency test.",
};


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
};

export default layout;

