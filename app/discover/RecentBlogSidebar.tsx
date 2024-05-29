'use client'
import Image from "next/image";
import pic from "../../public/assets/toefl-ets.webp"
import Link from "next/link";

// components/TableComponent.js
function RecentBlogsSidebar() {
    return (
        <aside className="z-10 w-full p-6 dark:bg-gray-50 dark:text-gray-800" style={{position:"absolute"}}>
            <nav className="space-y-2 text-sm fixed">
                <div className="space-y-2" style={{padding:10}}>
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">GETTING STARTED</h2>
                    <div className="flex flex-col space-y-2" style={{paddingBottom:"1px"}}>
                        <div className="hover:underline"><Link href="/discover/toefl-guide">TOEFL Guide</Link></div>
                        <div className="hover:underline"><Link href="/discover/toefl-exam">Preparing for TOEFL</Link></div>
                        <div className="hover:underline"><Link href="/discover/toefl-full-form">Explaining TOEFL</Link></div>
                    </div>
                </div>
                <div className="space-y-2" style={{padding:10}}>
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">DASHBOARD</h2>
                    <div className="flex flex-col space-y-2" style={{paddingBottom:"1px"}}>
                        <div className="hover:underline"><Link href="/discover/toefl-exam-fee">Exam Fees</Link></div>
                        <div className="hover:underline"><Link href="/discover/toefl-login">TOEFL Login Steps</Link></div>
                        <div className="hover:underline"><Link href="/discover/toefl-ets">Navigating</Link></div>
                    </div>
                </div>
                <div className="space-y-2" style={{padding:10}}>
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">PAGES</h2>
                    <div className="flex flex-col space-y-2" style={{paddingBottom:"1px"}}>
                        <div className="hover:underline"><Link href="/discover/toefl-exam-pattern">Exam Pattern</Link></div>
                        <div className="hover:underline"><Link href="/discover/toefl-ets-login">ETS Login</Link></div>
                        <div className="hover:underline"><Link href="/">Vouchers</Link></div>
                        <div className="hover:underline"><Link href="/discover">Blog Topics</Link></div>
                    </div>
                </div>
                <div className="space-y-2" style={{padding:10}}>
                    <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">MISC</h2>
                    <div className="flex flex-col space-y-2" style={{paddingBottom:"1px"}}>
                        <div className="hover:underline"><Link href="/discover/toefl-ibt">Format and Tips</Link></div>
                        <div className="hover:underline"><Link href="/discover/toefl-vs-ielts">TOEFL vs IELTS</Link></div>
                        <div className="hover:underline"><Link href="/discover/toefl-guide">TOEFL Help</Link></div>
                        <div className="hover:underline"><Link href="/discover/toefl-exam">TOEFL Prep</Link></div>
                    </div>
                </div>
            </nav>
            <style jsx>{`
                @media (max-width: 1000px) {
                    aside {
                        display: none;
                    }
                }
            `}</style>
        </aside>
    );
}

export default RecentBlogsSidebar;
