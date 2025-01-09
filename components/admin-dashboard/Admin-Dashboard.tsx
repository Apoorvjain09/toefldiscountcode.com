"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VoucherSectionAdminDashboard } from "./VoucherSectionAdminDashboard"

export default function AdminDashboard() {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
            <Tabs defaultValue="vouchers" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="vouchers">Vouchers</TabsTrigger>
                    <TabsTrigger value="students">Students</TabsTrigger>
                    <TabsTrigger value="courses">Courses</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
                <TabsContent value="vouchers">
                    <Card>
                        <CardHeader>
                            <CardTitle>Voucher Management</CardTitle>
                            <CardDescription>View and manage student vouchers</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <VoucherSectionAdminDashboard />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="students">
                    <Card>
                        <CardHeader>
                            <CardTitle>Student Management</CardTitle>
                            <CardDescription>Manage student information</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Student management content goes here.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="courses">
                    <Card>
                        <CardHeader>
                            <CardTitle>Course Management</CardTitle>
                            <CardDescription>Manage course offerings</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Course management content goes here.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="analytics">
                    <Card>
                        <CardHeader>
                            <CardTitle>Analytics</CardTitle>
                            <CardDescription>View system analytics</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Analytics content goes here.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

