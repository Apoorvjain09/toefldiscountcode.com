import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DiscountProps {
    voucher: string;
    booking: string;
    discount: string;
}

export default function ToeflVoucherTable({ voucher, booking, discount }: DiscountProps) {
    return (
        <Card className="my-10 w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">TOEFL Discount Methods</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableCaption>Available TOEFL discount methods and their respective savings.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50%]">Method</TableHead>
                            <TableHead>Discount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">TOEFL Discount Code</TableCell>
                            <TableCell>Rs {18000 - Number(discount.replace(/,/g, ''))}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">TOEFL Exam Voucher</TableCell>
                            <TableCell>Rs {18000 - Number(voucher.replace(/,/g, ''))}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">TOEFL Exam Booking</TableCell>
                            <TableCell>Rs {18000 - Number(booking.replace(/,/g, ''))}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

