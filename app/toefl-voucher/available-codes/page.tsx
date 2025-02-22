"use client"
import TOEFLMonthSelector from "./MonthSelectorModal";
import { Ubuntu } from "next/font/google";
import ToeflVoucherCommentSection from "./ToeflVoucherCommentSection";
import AvailableToeflCodesNonIndians from "./AvailableToeflCodesNonIndians";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VoucherCommentComponent from "./VoucherCommentComponent";

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});


export default function AvailableCodesForNonIndians() {
    const [showModal, setShowModal] = useState(false);

    const article = {
        url: "https://toeflgoglobal.com/toefl-voucher/available-codes",
        id: "toefl-voucher-comment-section",
        title: "Available Voucher Discussion",
    };

    useEffect(() => {
        const monthExists = localStorage.getItem("ToeflVoucher-userTentativeTestMonth");

        if (!monthExists) {
            const timer = setTimeout(() => {
                // setShowModal(true);
            }, 7000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>

            <AvailableToeflCodesNonIndians />
            <div className="py-4"></div>
            {/* <ToeflVoucherCommentSection article={article} /> */}
            <VoucherCommentComponent />
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className={`max-w-2xl bg-gradient-to-b from-primary/10 to-background ${ubuntu.className}`}>
                    <DialogHeader>
                        <DialogTitle className="text-xl text-center">Plan Your TOEFL Month</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                        <TOEFLMonthSelector />
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}