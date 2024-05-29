import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "TOEFL Exam Fees - What You Need to Know",
  description:
    "Learn about the TOEFL exam fees, including detailed breakdowns of costs, additional charges, and tips on how to plan your budget. Understand all financial aspects to prepare effectively for your TOEFL test.",
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
};

export default layout;

