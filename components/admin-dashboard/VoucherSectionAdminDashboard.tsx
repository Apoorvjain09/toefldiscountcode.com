"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination"
import { collection, doc, getDocs, limit, orderBy, query, QueryDocumentSnapshot, updateDoc } from "firebase/firestore";
import { db } from "@/firebase"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Textarea } from "../ui/textarea"
import Alert from "../ui/AlertNotification"

// Mock data for demonstration
type Student = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    submittedAt: string;
    voucher: string;
    remarks: string;
};

export function VoucherSectionAdminDashboard() {
    const [students, setStudents] = useState<Student[]>([]);
    const [searchTerm, setSearchTerm] = useState("")
    const [voucherFilter, setVoucherFilter] = useState("all")
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [remarks, setRemarks] = useState(selectedStudent?.remarks || "");
    const [isEditing, setIsEditing] = useState(!selectedStudent?.remarks);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState<{ message: string; type: "error" | "success" | "warning" | "loading" } | null>(null);

    const ShowAdminAlert = () => {
        setAlert({ message: "Only developer can access previous data.", type: "error" });
        return;
    }

    const filteredData = students.filter(
        (student) =>
            (student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (voucherFilter === "all" || student.voucher === voucherFilter)
    );

    useEffect(() => {
        const fetchData = async () => {
            const q = query(
                collection(db, "voucher"),
                orderBy("submittedAt", "desc"),
                limit(10)
            );

            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs
                .map((doc: QueryDocumentSnapshot) => {
                    const docData = doc.data();
                    return {
                        id: doc.id,
                        firstName: docData.firstName || "",
                        lastName: docData.lastName || "",
                        email: docData.email || "",
                        contactNumber: docData.contactNumber || "",
                        submittedAt: docData.submittedAt || "",
                        voucher: docData.voucher || "",
                        remarks: docData.remarks || "",
                    } as Student;
                })
            // .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
            setStudents(data);
        };
        fetchData();
    }, []);

    const handleViewStudent = (student: Student) => {
        setSelectedStudent(student);
        setRemarks(student.remarks || "");
        setIsEditing(!student.remarks);
        setIsModalOpen(true);
    };
    const handleSaveRemarks = async () => {
        if (!selectedStudent?.id) return;

        setLoading(true);
        try {
            await updateDoc(doc(db, "voucher", selectedStudent.id), { remarks });
            selectedStudent.remarks = remarks;
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating remarks:", error);
        }
        setLoading(false);
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between">
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
                        {/* Add more voucher types here */}
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
                        <TableRow key={student.id}>
                            <TableCell>{`${student.firstName} ${student.lastName}`}</TableCell>
                            <TableCell>{student.email}</TableCell>
                            <TableCell>{student.contactNumber}</TableCell>
                            <TableCell>{new Date(student.submittedAt).toLocaleString()}</TableCell>
                            <TableCell>
                                <Badge variant="secondary">{student.voucher}</Badge>
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => handleViewStudent(student)} variant="outline" size="sm">Remarks</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" onClick={() => ShowAdminAlert()}>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" onClick={() => ShowAdminAlert()}>3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" onClick={() => ShowAdminAlert()} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

            {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
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
                        <Button onClick={() => { setIsModalOpen(false) }}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    )
}

