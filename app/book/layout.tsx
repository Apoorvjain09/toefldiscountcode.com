import { ReactNode } from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "TOEFL Books - Recommended Study Materials",
    description:
        "Find the best TOEFL books and study materials to prepare for your exam. Check our recommendations now!",
};

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="">
            <main className="">{children}</main>
        </div>
    );
};

export default layout;

