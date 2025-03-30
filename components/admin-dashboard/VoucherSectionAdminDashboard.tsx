"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Textarea } from "../ui/textarea"
import Alert from "../ui/AlertNotification"
import { fetchVoucherSubmissions, updateVoucherRemarks } from '@/lib/supabaseActions'
import AdminDashboardUserMetaDataDisplay from "./AdminDashboardMetaDataDisplay"

type Student = {
    session_id: string;
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    submittedAt: string;
    voucher: string;
    remarks: string;
    usersessions: {
        ip: string;
        referrer: string;
        timeZone: string;
        country: string;
        device: string;
        speed: string;
        connection: string;
        tabStatus: string;
        isp: string;
        os: string;
        userAgent: string;
        city: string;
        region: string;
        longitude: string;
        latitude: string;
    }
};

export function VoucherSectionAdminDashboard() {
    const [students, setStudents] = useState<Student[]>([]);
    const [searchTerm, setSearchTerm] = useState("")
    const [voucherFilter, setVoucherFilter] = useState("all")
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
    const [isRemarksModalOpen, setIsRemarksModalOpen] = useState(false)
    const [remarks, setRemarks] = useState(selectedStudent?.remarks || "");
    const [isEditing, setIsEditing] = useState(!selectedStudent?.remarks);
    const [loading, setLoading] = useState(false);

    const filteredData = students.filter(
        (student) =>
            (student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (voucherFilter === "all" || student.voucher === voucherFilter)
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchVoucherSubmissions();
                setStudents(data);
            } catch (err) {
                console.error("Error fetching vouchers", err);
            }
        };
        fetchData();
    }, []);

    const handleViewStudent = (student: Student) => {
        setSelectedStudent(student);
        setRemarks(student.remarks || "");
        setIsEditing(!student.remarks);
        setIsRemarksModalOpen(true);
    };

    const handleSaveRemarks = async () => {
        if (!selectedStudent?.session_id) return;

        setLoading(true);
        try {
            await updateVoucherRemarks(selectedStudent.session_id, remarks);
            selectedStudent.remarks = remarks;
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating remarks:", error);
        }
        setLoading(false);
    };

    function getTimeAgo(dateString: string) {
        const now = new Date();
        const past = new Date(dateString);
        const diff = (now.getTime() - past.getTime()) / 1000; // in seconds

        const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

        if (diff < 60) return rtf.format(-Math.floor(diff), "second");
        if (diff < 3600) return rtf.format(-Math.floor(diff / 60), "minute");
        if (diff < 86400) return rtf.format(-Math.floor(diff / 3600), "hour");
        if (diff < 2592000) return rtf.format(-Math.floor(diff / 86400), "day");
        if (diff < 31104000) return rtf.format(-Math.floor(diff / 2592000), "month");

        return rtf.format(-Math.floor(diff / 31104000), "year");
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between flex-wrap gap-5">
                <Input
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
                <Select value={voucherFilter} onValueChange={setVoucherFilter}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by voucher" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Vouchers</SelectItem>
                        <SelectItem value="Exam_booking">Exam Booking</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact Number</TableHead>
                        <TableHead>Submitted At</TableHead>
                        <TableHead>Voucher</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData.map((student) => (
                        <TableRow key={student.session_id}>
                            <TableCell>{`${student.firstName} ${student.lastName}`}</TableCell>
                            <TableCell>{student.email}</TableCell>
                            <TableCell>{student.contactNumber}</TableCell>
                            <TableCell className="text-gray-500">{getTimeAgo(student.submittedAt)}</TableCell>                            <TableCell>
                                <Badge variant="secondary">{student.voucher}</Badge>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-wrap gap-2">
                                    <Button onClick={() => handleViewStudent(student)} variant="outline" size="sm">Remarks</Button>
                                    <AdminDashboardUserMetaDataDisplay student={student} />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Dialog open={isRemarksModalOpen} onOpenChange={setIsRemarksModalOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-lg font-semibold">Student Remarks</DialogTitle>
                    </DialogHeader>
                    <div className="p-4 bg-gray-100 rounded-md">
                        {isEditing ? (
                            <Textarea
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                                placeholder="Add remarks..."
                                className="w-full h-24 p-2 text-sm"
                            />
                        ) : (
                            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line italic">{remarks}</p>
                        )}
                    </div>

                    <DialogFooter className="flex justify-between">
                        {isEditing ? (
                            <Button onClick={handleSaveRemarks} disabled={loading}>
                                {loading ? "Saving..." : "Save"}
                            </Button>
                        ) : (
                            <Button variant="outline" onClick={() => setIsEditing(true)}>
                                Edit Remarks
                            </Button>
                        )}
                        <Button onClick={() => { setIsRemarksModalOpen(false) }}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    )
}

