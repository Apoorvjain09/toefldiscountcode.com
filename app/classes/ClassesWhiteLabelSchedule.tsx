import { CalendarDays, ChevronRight, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const courseBatches: Record<string, Batch[]> = {
    ielts: [
        { id: 1, date: "3rd June", seats: 20, enrolled: 0 },
        { id: 2, date: "6th June", seats: 20, enrolled: 0 },
        { id: 3, date: "10th June", seats: 20, enrolled: 0 },
        { id: 4, date: "14th June", seats: 20, enrolled: 0 },
        { id: 5, date: "18th June", seats: 20, enrolled: 0 },
        { id: 6, date: "21st June", seats: 20, enrolled: 0 },
        { id: 7, date: "25th June", seats: 20, enrolled: 0 },
        { id: 8, date: "28th June", seats: 20, enrolled: 0 },
    ],
    pte: [
        { id: 1, date: "4th June", seats: 20, enrolled: 0 },
        { id: 2, date: "11th June", seats: 20, enrolled: 0 },
        { id: 3, date: "21st June", seats: 20, enrolled: 0 },
    ],
    toefl: [
        { id: 1, date: "17th June", seats: 20, enrolled: 0 },
    ],
    duolingo: [
        { id: 1, date: "7th June", seats: 20, enrolled: 0 },
        { id: 2, date: "21st June", seats: 20, enrolled: 0 },
    ],
    gre_gmat: [
        { id: 1, date: "5th June", seats: 20, enrolled: 0 },
        { id: 2, date: "18th June", seats: 20, enrolled: 0 },
    ],
    sat: [
        { id: 1, date: "12th June", seats: 20, enrolled: 0 },
        { id: 2, date: "24th June", seats: 20, enrolled: 0 },
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
                    {/* <div className="flex items-center text-sm">
                        <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span>
                            {batch.enrolled}/{batch.seats} enrolled
                        </span>
                    </div> */}
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