import { ReactNode } from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Toefl Discount Code",
  description:
    "Get FREE Toefl discount codes for 2024 on your TOEFL Registration. Avail a INR 2000 Discount on the TOEFL iBT fees. Check Code Here.",
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
};

export default layout;

