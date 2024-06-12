import { Metadata } from "next";
import { ReactNode } from "react";


export const metadata: Metadata = {
    title: "TOEFL Free AI Mock Tests - Toefl Go Global",
    description: "Prepare for your TOEFL exam with our AI-powered mock tests. Experience realistic test simulations, receive detailed feedback, and track your progress. Access a wealth of study materials, practice questions, and expert advice to excel in your TOEFL exam. Join our community of learners and maximize your TOEFL score with Toefl Go Global.",
};


const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="">
            <main className="">
                {children}
            </main>
        </div>
    );
};

export default layout;

