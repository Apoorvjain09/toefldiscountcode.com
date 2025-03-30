"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VoucherSectionAdminDashboard } from "./VoucherSectionAdminDashboard"
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(true);
    const correctPassword = "tgg123";

    const handlePasswordSubmit = () => {
        if (password === correctPassword) {
            setIsAuthenticated(true);
            setIsModalOpen(false);
        } else {
            setPassword("");
        }
    };

    return (
        <div className="container mx-auto py-10 px-5">

            <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
            <Tabs defaultValue="vouchers" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="vouchers">Vouchers</TabsTrigger>
                    <TabsTrigger disabled={true} className="cursor-not-allowed" value="students">Students</TabsTrigger>
                    <TabsTrigger disabled={true} className="cursor-not-allowed" value="courses">Courses</TabsTrigger>
                    <TabsTrigger disabled={true} className="cursor-not-allowed" value="analytics">Analytics</TabsTrigger>
                </TabsList>
                <TabsContent value="vouchers">
                    <Card>
                        <CardHeader>
                            <CardTitle>Voucher Management</CardTitle>
                            <CardDescription>View and manage student vouchers</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {isAuthenticated && (
                                <VoucherSectionAdminDashboard />
                            )}
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

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="max-w-sm">
                    <DialogHeader>
                        <DialogTitle className="text-lg font-semibold">Enter Authentication Password</DialogTitle>
                    </DialogHeader>
                    <Input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 text-sm"
                    />
                    <DialogFooter className="flex justify-between">
                        <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button onClick={handlePasswordSubmit}>Submit</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

