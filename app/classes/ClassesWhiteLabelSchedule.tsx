import { CalendarDays, ChevronRight, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const courseBatches: Record<string, Batch[]> = {
    pte: [
        { id: 1, date: "3rd March", seats: 12, enrolled: 8 },
        { id: 2, date: "19th March", seats: 15, enrolled: 3 },
        { id: 16, date: "3rd March", seats: 12, enrolled: 4 },
        { id: 27, date: "19th March", seats: 18, enrolled: 10 },
        { id: 32, date: "5th April", seats: 14, enrolled: 14 },
    ],
    ielts: [
        { id: 3, date: "4th March", seats: 10, enrolled: 10 },
        { id: 4, date: "8th March", seats: 12, enrolled: 12 },
        { id: 5, date: "13th March", seats: 15, enrolled: 15 },
        { id: 6, date: "17th March", seats: 12, enrolled: 12 },
        { id: 7, date: "21st March", seats: 15, enrolled: 10 },
        { id: 8, date: "25th March", seats: 10, enrolled: 10 },
        { id: 9, date: "28th March", seats: 12, enrolled: 12 },
        { id: 17, date: "4th March", seats: 22, enrolled: 22 },
        { id: 20, date: "8th March", seats: 11, enrolled: 9 },
        { id: 23, date: "13th March", seats: 21, enrolled: 11 },
        { id: 24, date: "17th March", seats: 10, enrolled: 7 },
        { id: 28, date: "21st March", seats: 24, enrolled: 17 },
        { id: 29, date: "25th March", seats: 15, enrolled: 15 },
        { id: 30, date: "28th March", seats: 16, enrolled: 14 },
        { id: 33, date: "3rd April", seats: 15, enrolled: 12 },
        { id: 34, date: "8th April", seats: 14, enrolled: 10 },
        { id: 35, date: "10th April", seats: 16, enrolled: 8 },
        { id: 36, date: "12th April", seats: 20, enrolled: 7 },
    ],
    gre_gmat: [
        { id: 10, date: "4th March", seats: 8, enrolled: 8 },
        { id: 11, date: "18th March", seats: 10, enrolled: 10 },
        { id: 18, date: "4th March", seats: 20, enrolled: 20 },
        { id: 26, date: "18th March", seats: 16, enrolled: 16 },
        { id: 37, date: "5th April", seats: 10, enrolled: 6 },
    ],
    german_a1: [
        { id: 12, date: "6th March", seats: 15, enrolled: 15 },
        { id: 19, date: "6th March", seats: 10, enrolled: 10 },
        { id: 38, date: "5th April", seats: 10, enrolled: 6 },
    ],
    sat: [
        { id: 13, date: "10th March", seats: 12, enrolled: 12 },
        { id: 21, date: "10th March", seats: 14, enrolled: 14 },
        { id: 39, date: "3rd April", seats: 18, enrolled: 13 },
    ],
    duolingo: [
        { id: 14, date: "11th March", seats: 20, enrolled: 20 },
        { id: 15, date: "28th March", seats: 20, enrolled: 19 },
        { id: 22, date: "11th March", seats: 15, enrolled: 5 },
        { id: 31, date: "28th March", seats: 16, enrolled: 9 },
        { id: 40, date: "4th April", seats: 12, enrolled: 3 },
    ],
    toefl: [
        { id: 25, date: "17th March", seats: 13, enrolled: 13 },
        { id: 41, date: "11th April", seats: 14, enrolled: 9 },
    ],
};
type Batch = {
    id: number;
    date: string;
    seats: number;
    enrolled: number;
};

export default function ClassesWhiteLabelSchedule() {
    const courseTabs = Object.keys(courseBatches);

    return (
        <Tabs defaultValue="ielts" className="w-full p-8">
            <TabsList className="flex flex-wrap mb-10 bg-white gap-1 w-full h-full">
                {courseTabs.map((key) => (
                    <TabsTrigger
                        key={key}
                        value={key}
                        className={`flex-1 min-w-[100px] text-xs text-center border`}
                    >
                        {key.replace("_", " ").toUpperCase()}
                    </TabsTrigger>
                ))}
            </TabsList>

            {courseTabs.map((key) => (
                <TabsContent key={key} value={key}>
                    <BatchSection title={`${key.replace("_", " ").toUpperCase()} Batches`} batches={courseBatches[key]} />
                </TabsContent>
            ))}
        </Tabs>
    );
}

function BatchSection({ title, batches }: { title: string; batches: Batch[] }) {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {batches.map((batch) => (
                    <BatchCard key={batch.id} batch={batch} selectedCourse={title} />
                ))}
            </div>
        </div>
    );
}

function BatchCard({ batch, selectedCourse }: { batch: Batch, selectedCourse: string }) {
    return (
        <Card className="overflow-hidden">
            <CardHeader className="pb-2">
                <CardTitle className="text-xl">{batch.date}</CardTitle>
                <CardDescription className="flex items-center">
                    <CalendarDays className="mr-1 h-3 w-3" />
                    {getStartsInText(batch.date)}
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                        <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span>
                            {batch.enrolled}/{batch.seats} enrolled
                        </span>
                    </div>
                    <StatusBadge status={getStatus(batch)} />
                </div>
            </CardContent>
            <CardFooter className="pt-2">
                <Link href={`https://wa.me/+918802880181?text=${encodeURIComponent(`Hey, I want to know about ${selectedCourse} class on ${batch.date}. It would be helpful.`)}`}>
                    <Button variant="outline" size="sm" className="w-full">
                        View Details
                        <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

function getStatus(batch: Batch): "Upcoming" | "Full" | "Active" {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const cleanDate = batch.date.replace(/(\d+)(st|nd|rd|th)/, "$1");
    const batchDate = new Date(`${cleanDate} 2025`);
    batchDate.setHours(0, 0, 0, 0);

    if (batch.enrolled >= batch.seats) {
        return "Full";
    }

    if (batchDate.getTime() >= today.getTime()) {
        return "Upcoming";
    }

    return "Active";
}

function StatusBadge({ status }: { status: "Active" | "Upcoming" | "Full" }) {
    const statusStyles = {
        Active: "bg-green-100 text-green-800 hover:bg-green-100",
        Upcoming: "border border-blue-300 text-blue-300",
        Full: "bg-gray-200 text-gray-800",
    };

    return <Badge className={statusStyles[status]}>{status}</Badge>;
}

function getStartsInText(date: string) {
    const today = new Date();

    // Remove 'st', 'nd', 'rd', 'th' from the date (e.g., "3rd April" → "3 April")
    const cleanDate = date.replace(/(\d+)(st|nd|rd|th)/, "$1");

    // Construct a full date string in a format JS can parse
    const batchDate = new Date(`${cleanDate} 2025`);

    if (isNaN(batchDate.getTime())) return "Invalid date";

    // Calculate the difference in days
    const diffTime = batchDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "Already started";
    return diffDays === 0
        ? "Starts Today"
        : diffDays === 1
            ? "Starts Tomorrow"
            : `Starts in ${diffDays} days`;
}