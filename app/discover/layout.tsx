import { Metadata } from "next";
import { ReactNode } from "react";


export const metadata: Metadata = {
  title: "Our Blog - Discover TOEFL Guides and Tips",
  description:
    "Explore comprehensive guides and tips for the TOEFL exam. Get insights on preparation, patterns, fees, and more to ace your test.",
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">
        {/* <NavBar/>  */}
        {children}
        {/* <Footer/> */}
      </main>
    </div>
  );
};

export default layout;

