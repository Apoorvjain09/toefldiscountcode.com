"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination"
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "@/firebase"

// Mock data for demonstration
type Student = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    submittedAt: string;
    voucher: string;
};

export function VoucherSectionAdminDashboard() {
    const [students, setStudents] = useState<Student[]>([]);
    const [searchTerm, setSearchTerm] = useState("")
    const [voucherFilter, setVoucherFilter] = useState("all")

    const filteredData = students.filter(
        (student) =>
            (student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (voucherFilter === "all" || student.voucher === voucherFilter)
    );

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "voucher"));
            const data = querySnapshot.docs
                .map((doc: QueryDocumentSnapshot) => {
                    const docData = doc.data();
                    return {
                        id: doc.id,
                        firstName: docData.firstName || "", // Default to empty string if field is missing
                        lastName: docData.lastName || "",
                        email: docData.email || "",
                        contactNumber: docData.contactNumber || "",
                        submittedAt: docData.submittedAt || "", // Ensure submittedAt exists
                        voucher: docData.voucher || "",
                    } as Student;
                })
                .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
            setStudents(data);
        };
        fetchData();
    }, []);


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
                                <Button variant="outline" size="sm">View</Button>
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
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

