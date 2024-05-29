import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "TOEFL Login - Access Your TOEFL Account",
  description:
    "Step-by-step guide on how to access your TOEFL account. Manage your test registration, view scores, and access resources for the TOEFL exam.",
};


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
};

export default layout;

