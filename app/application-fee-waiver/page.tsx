"use client"

import { useState, useMemo, useEffect } from "react"
import {
    Search,
    MapPin,
    GraduationCap,
    ArrowUpDown,
    DollarSign,
    Filter,
    List,
    Grid,
    Check,
    X,
    Calendar,
    Award,
    BookOpen,
    Percent,
    Info,
    AlertCircle,
    ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Checkbox, type CheckedState } from "@radix-ui/react-checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import universities from './unique-uni-sorted.json'

interface University {
    StudyLevelId: number;
    Studylvl: string;
    Country: string;
    University: string;
    Duration: number;
    UniversityId: number;
    CountryId: number;
    SatRequired: boolean | null;
    GmatRequired: boolean | null;
    ActRequired: boolean | null;
    GreRequired: boolean | null;
    IeltsRequired: boolean | null;
    ToeflRequired: boolean | null;
    PteRequired: boolean | null;
    DETRequired: boolean | null;
    WithoutMaths: boolean | null;
    WithoutEnglishProficiency: boolean | null;
    IeltsOverall: number | null;
    ToeflScore: number | null;
    PteScore: number | null;
    SatScore: number | null;
    ActScore: number | null;
    GreScore: number | null;
    GmatScore: number | null;
    DETScore: number | null;
    TutionFee: string;
    Currency: string | null;
    Amount: number;
    ScholarshipAvailable: boolean | null;
    Intakes: string;
    WebomatricsNationalRanking: number;
    WebomatricsWorldRanking: number;
    USNewsRanking: number;
    QSRanking: number;
    AppFeeWaiverAvailable: boolean | null;
    ApplicationFeeAmt: number;
    IsOnlineCourse: boolean | null;
    WorkExp: number;
    IsMOIWaiver: boolean | null;
}

// Generate a consistent color based on university name
function generateColorFromName(name: string) {
    const colors = [
        "bg-red-100 text-red-800",
        "bg-blue-100 text-blue-800",
        "bg-green-100 text-green-800",
        "bg-yellow-100 text-yellow-800",
        "bg-sky-100 text-sky-800",
        "bg-pink-100 text-pink-800",
        "bg-indigo-100 text-indigo-800",
        "bg-teal-100 text-teal-800",
    ]

    // Simple hash function to get a consistent index
    let hash = 0
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }

    const index = Math.abs(hash) % colors.length
    return colors[index]
}

// Generate university initials
function getInitials(name: string) {
    return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
}

// Format ranking display
function formatRanking(rank: number) {
    if (!rank) return "N/A"
    return `#${rank}`
}

export default function FeeWaiverUniversities() {
    // State for filtering, sorting, and view options
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCountry, setSelectedCountry] = useState("United States of America")
    const [selectedStudyLevel, setSelectedStudyLevel] = useState("all")
    const [selectedRankingType, setSelectedRankingType] = useState("USNewsRanking")
    const [sortBy, setSortBy] = useState("USNewsRanking")
    const [sortOrder, setSortOrder] = useState("asc")
    const [currentView, setCurrentView] = useState("list")
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [showEnglishTests, setShowEnglishTests] = useState(false)
    const [showScholarshipOnly, setShowScholarshipOnly] = useState(false)
    const [activeUniversity, setActiveUniversity] = useState<University | null>(null)

    // Extract unique countries and study levels for filters
    const countries: string[] = Array.from(new Set(universities.map((uni) => uni.Country)))
    const studyLevels: string[] = Array.from(new Set(universities.map((uni) => uni.Studylvl)))

    // Filter universities based on all criteria
    const filteredUniversities = useMemo(() => {
        return universities.filter((university) => {
            // Only show universities with app fee waivers
            if (!university.AppFeeWaiverAvailable) return false

            // Search query filter
            const matchesSearch =
                university.University.toLowerCase().includes(searchQuery.toLowerCase()) ||
                university.Country.toLowerCase().includes(searchQuery.toLowerCase())

            // Country filter
            const matchesCountry = selectedCountry === "all" || university.Country === selectedCountry

            // Study level filter
            const matchesStudyLevel = selectedStudyLevel === "all" || university.Studylvl === selectedStudyLevel

            // Scholarship filter
            const matchesScholarship = !showScholarshipOnly || university.ScholarshipAvailable

            return matchesSearch && matchesCountry && matchesStudyLevel && matchesScholarship
        })
    }, [searchQuery, selectedCountry, selectedStudyLevel, showScholarshipOnly])

    // Sort universities
    const sortedUniversities = useMemo(() => {
        return [...filteredUniversities].sort((a, b) => {
            let comparison = 0

            if (sortBy === "University") {
                comparison = a.University.localeCompare(b.University)
            } else if (sortBy === "Country") {
                comparison = a.Country.localeCompare(b.Country)
            } else if (sortBy === "TutionFee") {
                comparison = a.Amount - b.Amount
            } else if (sortBy === "QSRanking" || sortBy === "USNewsRanking" || sortBy === "WebomatricsWorldRanking") {
                // Handle null rankings
                if (a[sortBy] === null && b[sortBy] === null) {
                    comparison = 0
                } else if (a[sortBy] === null) {
                    comparison = 1
                } else if (b[sortBy] === null) {
                    comparison = -1
                } else {
                    comparison = a[sortBy] - b[sortBy]
                }
            }

            return sortOrder === "asc" ? comparison : -comparison
        })
    }, [filteredUniversities, sortBy, sortOrder])

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentUniversities = sortedUniversities.slice(indexOfFirstItem, indexOfLastItem)
    const totalPages = Math.ceil(sortedUniversities.length / itemsPerPage)

    // Handle pagination
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    // Reset filters
    const resetFilters = () => {
        setSearchQuery("")
        setSelectedCountry("all")
        setSelectedStudyLevel("all")
        setShowScholarshipOnly(false)
        setCurrentPage(1)
    }

    // Handle view university details
    const viewUniversityDetails = (university: University) => {
        setActiveUniversity(university)
    }

    const handleScholarshipToggle = (checked: CheckedState) => {
        setShowScholarshipOnly(checked === true)
    }

    useEffect(() => {
        const isMobile = window.innerWidth < 768
        setCurrentView(isMobile ? "grid" : "list")
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-sky-300 to-indigo-800 text-white rounded-lg">
                <div className="absolute inset-0 opacity-10 bg-cover bg-center"></div>
                <div className="container mx-auto py-16 px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-pink-100">
                                Fee Waiver Universities
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-sky-100 mb-8 max-w-3xl mx-auto">
                            Discover universities worldwide offering application fee waivers for international students.
                        </p>
                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-300 h-5 w-5" />
                            <Input
                                placeholder="Search universities or countries..."
                                className="pl-12 py-6 text-lg rounded-full bg-white/10 backdrop-blur-sm border-sky-400/30 text-white placeholder:text-sky-200 focus-visible:ring-sky-400"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Button
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-600 to-pink-600 hover:from-sky-700 hover:to-pink-700"
                                size="sm"
                            >
                                Search
                            </Button>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <Badge className="bg-sky-700/50 hover:bg-sky-600/50 text-white px-3 py-1 text-sm cursor-pointer">
                                Application Fee Waivers
                            </Badge>
                            <Badge className="bg-sky-700/50 hover:bg-sky-600/50 text-white px-3 py-1 text-sm cursor-pointer">
                                Scholarships Available
                            </Badge>
                            <Badge className="bg-sky-700/50 hover:bg-sky-600/50 text-white px-3 py-1 text-sm cursor-pointer">
                                Top Ranked Universities
                            </Badge>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            <div className="container mx-auto py-8 px-4 max-w-7xl">
                {/* Stats Section */}
                <section className="mb-12 -mt-8 relative z-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white rounded-xl shadow-md p-6 text-center">
                            <div className="text-3xl font-bold text-sky-600 mb-1">{universities.length}</div>
                            <div className="text-sm text-gray-500">Universities</div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 text-center">
                            <div className="text-3xl font-bold text-sky-600 mb-1">
                                {universities.filter((uni) => uni.AppFeeWaiverAvailable).length}
                            </div>
                            <div className="text-sm text-gray-500">Fee Waivers</div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 text-center">
                            <div className="text-3xl font-bold text-sky-600 mb-1">{countries.length}</div>
                            <div className="text-sm text-gray-500">Countries</div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 text-center">
                            <div className="text-3xl font-bold text-sky-600 mb-1">{studyLevels.length}</div>
                            <div className="text-sm text-gray-500">Study Levels</div>
                        </div>
                    </div>
                </section>

                {/* Main Content with Filters and University List */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm p-5 sticky top-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-lg flex items-center">
                                    <Filter className="h-5 w-5 mr-2 text-sky-500" />
                                    Filters
                                </h3>
                                <Button variant="ghost" size="sm" onClick={resetFilters} className="text-sm text-sky-600">
                                    Reset All
                                </Button>
                            </div>

                            <Separator className="my-4" />

                            <div className="space-y-5">
                                <div>
                                    <Label className="text-sm font-medium mb-1.5 block">Country</Label>
                                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="All Countries" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Countries</SelectItem>
                                            {countries.map((country) => (
                                                <SelectItem key={country} value={country}>
                                                    {country}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label className="text-sm font-medium mb-1.5 block">Study Level</Label>
                                    <Select value={selectedStudyLevel} onValueChange={setSelectedStudyLevel}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="All Study Levels" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Study Levels</SelectItem>
                                            {studyLevels.map((level) => (
                                                <SelectItem key={level} value={level}>
                                                    {level}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label className="text-sm font-medium mb-1.5 block">Ranking Type</Label>
                                    <Select value={selectedRankingType} onValueChange={setSelectedRankingType}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="QS Ranking" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="QSRanking">QS Ranking</SelectItem>
                                            <SelectItem value="USNewsRanking">US News Ranking</SelectItem>
                                            <SelectItem value="WebomatricsWorldRanking">Webomatrics Ranking</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="scholarshipOnly"
                                        checked={showScholarshipOnly}
                                        onCheckedChange={handleScholarshipToggle}
                                    />
                                    <Label htmlFor="scholarshipOnly" className={`text-sm px-2 py-1 rounded transition ${showScholarshipOnly ? 'text-black font-semibold' : 'text-muted-foreground'}`}>
                                        Scholarship Available
                                    </Label>
                                </div>

                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="englishTests">
                                        <AccordionTrigger className="text-sm font-medium py-2">English Test Requirements</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span>IELTS</span>
                                                    <span className="font-medium">6.0 - 7.0</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>TOEFL</span>
                                                    <span className="font-medium">79 - 100</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>PTE</span>
                                                    <span className="font-medium">58 - 70</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Duolingo</span>
                                                    <span className="font-medium">105 - 115</span>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <Separator className="my-4" />

                                <div className="pt-2">
                                    <h4 className="text-sm font-medium mb-3">Quick Filters</h4>
                                    <div className="space-y-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full justify-start text-left font-normal"
                                            onClick={() => {
                                                setSelectedStudyLevel("Undergraduate")
                                                setCurrentPage(1)
                                            }}
                                        >
                                            <GraduationCap className="mr-2 h-4 w-4 text-sky-500" />
                                            Undergraduate Only
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full justify-start text-left font-normal"
                                            onClick={() => {
                                                setSelectedStudyLevel("Postgraduate")
                                                setCurrentPage(1)
                                            }}
                                        >
                                            <Award className="mr-2 h-4 w-4 text-sky-500" />
                                            Postgraduate Only
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full justify-start text-left font-normal"
                                            onClick={() => {
                                                setSortBy("TutionFee")
                                                setSortOrder("asc")
                                                setCurrentPage(1)
                                            }}
                                        >
                                            <DollarSign className="mr-2 h-4 w-4 text-green-500" />
                                            Lowest Tuition First
                                        </Button>
                                    </div>
                                </div>

                                <Separator className="my-4" />

                                <div className="bg-sky-50 rounded-lg p-4">
                                    <h4 className="font-medium text-sky-800 mb-2 flex items-center">
                                        <Info className="h-4 w-4 mr-1" />
                                        Need Help?
                                    </h4>
                                    <p className="text-sm text-sky-700 mb-3">
                                        Not sure which university is right for you? Get personalized recommendations.
                                    </p>
                                    <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">Get Recommendations</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* University List */}
                    <div className="lg:col-span-3">
                        {/* View Controls */}
                        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <h3 className="font-semibold text-lg mr-2">Universities with Fee Waivers</h3>
                                    <Badge variant="outline" className="font-normal">
                                        {sortedUniversities.length} results
                                    </Badge>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" size="sm" className="flex items-center">
                                                <ArrowUpDown className="mr-2 h-4 w-4" />
                                                Sort by:{" "}
                                                {sortBy === "QSRanking"
                                                    ? "QS Ranking"
                                                    : sortBy === "USNewsRanking"
                                                        ? "US News Ranking"
                                                        : sortBy === "WebomatricsWorldRanking"
                                                            ? "Webomatrics Ranking"
                                                            : sortBy === "TutionFee"
                                                                ? "Tuition Fee"
                                                                : sortBy === "University"
                                                                    ? "University Name"
                                                                    : "Country"}
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem onClick={() => setSortBy("QSRanking")}>
                                                QS Ranking {sortBy === "QSRanking" && (sortOrder === "asc" ? "↑" : "↓")}
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => setSortBy("USNewsRanking")}>
                                                US News Ranking {sortBy === "USNewsRanking" && (sortOrder === "asc" ? "↑" : "↓")}
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => setSortBy("WebomatricsWorldRanking")}>
                                                Webomatrics Ranking {sortBy === "WebomatricsWorldRanking" && (sortOrder === "asc" ? "↑" : "↓")}
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => setSortBy("University")}>
                                                University Name {sortBy === "University" && (sortOrder === "asc" ? "↑" : "↓")}
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => setSortBy("Country")}>
                                                Country {sortBy === "Country" && (sortOrder === "asc" ? "↑" : "↓")}
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => setSortBy("TutionFee")}>
                                                Tuition Fee {sortBy === "TutionFee" && (sortOrder === "asc" ? "↑" : "↓")}
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
                                                {sortOrder === "asc" ? "Ascending ↑" : "Descending ↓"}
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                    <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
                                        <SelectTrigger className="w-[110px]">
                                            <SelectValue placeholder="Show 6" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="6">Show 6</SelectItem>
                                            <SelectItem value="12">Show 12</SelectItem>
                                            <SelectItem value="24">Show 24</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <div className="flex items-center border rounded-md overflow-hidden">
                                        <Button
                                            variant={currentView === "grid" ? "default" : "ghost"}
                                            size="sm"
                                            className="rounded-none px-3"
                                            onClick={() => setCurrentView("grid")}
                                        >
                                            <Grid className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant={currentView === "list" ? "default" : "ghost"}
                                            size="sm"
                                            className="rounded-none px-3"
                                            onClick={() => setCurrentView("list")}
                                        >
                                            <List className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* University List */}
                        {currentView === "grid" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {currentUniversities.map((university: University) => (
                                    <UniversityCard
                                        key={university.UniversityId}
                                        university={university}
                                        rankingType={selectedRankingType}
                                        onViewDetails={viewUniversityDetails}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {currentUniversities.map((university: University) => (
                                    <UniversityListItem
                                        key={university.UniversityId}
                                        university={university}
                                        rankingType={selectedRankingType}
                                        onViewDetails={viewUniversityDetails}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        {sortedUniversities.length > 0 && (
                            <Pagination className="mt-8">
                                <PaginationContent className="flex flex-wrap justify-center gap-1">
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                if (currentPage > 1) paginate(currentPage - 1)
                                            }}
                                            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                        />
                                    </PaginationItem>

                                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                        // Logic to show pagination numbers around current page
                                        let pageNum
                                        if (totalPages <= 5) {
                                            pageNum = i + 1
                                        } else if (currentPage <= 3) {
                                            pageNum = i + 1
                                        } else if (currentPage >= totalPages - 2) {
                                            pageNum = totalPages - 4 + i
                                        } else {
                                            pageNum = currentPage - 2 + i
                                        }

                                        return (
                                            <PaginationItem key={i}>
                                                <PaginationLink
                                                    href="#"
                                                    isActive={currentPage === pageNum}
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        paginate(pageNum)
                                                    }}
                                                >
                                                    {pageNum}
                                                </PaginationLink>
                                            </PaginationItem>
                                        )
                                    })}

                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                if (currentPage < totalPages) paginate(currentPage + 1)
                                            }}
                                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        )}

                        {/* No Results */}
                        {sortedUniversities.length === 0 && (
                            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                                <Search className="h-12 w-12 text-gray-200 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">No Universities Found</h3>
                                <p className="text-muted-foreground max-w-md mx-auto mb-4">
                                    No universities match your current filter criteria. Try adjusting your filters or search terms.
                                </p>
                                <Button onClick={resetFilters}>Reset All Filters</Button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Additional Information */}
                <section className="mt-16 bg-white p-8 rounded-xl shadow-sm">
                    <h2 className="text-2xl font-bold mb-6 text-center">How to Apply for Fee Waivers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-sky-50 to-white p-6 rounded-lg shadow-sm border border-sky-100">
                            <div className="flex items-center mb-4">
                                <div className="bg-sky-100 p-3 rounded-full mr-4">
                                    <Search className="h-6 w-6 text-sky-600" />
                                </div>
                                <h3 className="font-semibold text-lg">Check Eligibility</h3>
                            </div>
                            <p className="text-muted-foreground">
                                Review each university's specific requirements for application fee waiver eligibility. Common criteria
                                include financial need, country of origin, or participation in specific programs.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-sky-50 to-white p-6 rounded-lg shadow-sm border border-sky-100">
                            <div className="flex items-center mb-4">
                                <div className="bg-sky-100 p-3 rounded-full mr-4">
                                    <BookOpen className="h-6 w-6 text-sky-600" />
                                </div>
                                <h3 className="font-semibold text-lg">Request the Waiver</h3>
                            </div>
                            <p className="text-muted-foreground">
                                Contact the university's admissions office directly or look for a fee waiver request form on their
                                application portal. Some universities require documentation to prove your eligibility.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-sky-50 to-white p-6 rounded-lg shadow-sm border border-sky-100">
                            <div className="flex items-center mb-4">
                                <div className="bg-sky-100 p-3 rounded-full mr-4">
                                    <Calendar className="h-6 w-6 text-sky-600" />
                                </div>
                                <h3 className="font-semibold text-lg">Apply Early</h3>
                            </div>
                            <p className="text-muted-foreground">
                                Submit your fee waiver request well before application deadlines. Many universities have limited fee
                                waivers available, and they're often distributed on a first-come, first-served basis.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="mt-16 mb-8 bg-gradient-to-r from-sky-300 to-indigo-800 rounded-xl overflow-hidden relative">
                    <div className="absolute inset-0 opacity-10 bg-cover bg-center"></div>
                    <div className="relative z-10 p-8 md:p-12 text-white">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Academic Journey?</h2>
                            <p className="text-lg text-sky-100 mb-8">
                                Get personalized recommendations for universities with fee waivers that match your academic profile and
                                financial needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-sky-300 hover:bg-sky-100">
                                    Create Free Account
                                </Button>
                                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                                    Download University Guide
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* University Details Dialog */}
            <Dialog open={!!activeUniversity} onOpenChange={(open) => !open && setActiveUniversity(null)}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    {activeUniversity && (
                        <>
                            <DialogHeader>
                                <div className="flex items-center justify-between">
                                    <DialogTitle className="text-2xl">{activeUniversity.University}</DialogTitle>
                                </div>
                                <DialogDescription className="flex items-center">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    {activeUniversity.Country}
                                </DialogDescription>
                            </DialogHeader>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                                <div className="md:col-span-2">
                                    <div className="bg-gradient-to-r from-sky-500 to-indigo-600 h-48 rounded-lg flex items-center justify-center mb-6">
                                        <Avatar className="w-24 h-24 border-4 border-white">
                                            <AvatarFallback
                                                className={cn("text-3xl font-bold", generateColorFromName(activeUniversity.University))}
                                            >
                                                {getInitials(activeUniversity.University)}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                        <div className="bg-sky-50 p-3 rounded-lg">
                                            <div className="text-xs text-sky-600 mb-1">QS Ranking</div>
                                            <div className="font-semibold flex items-center">
                                                <Award className="h-4 w-4 mr-1 text-sky-500" />
                                                {formatRanking(activeUniversity.QSRanking)}
                                            </div>
                                        </div>
                                        <div className="bg-sky-50 p-3 rounded-lg">
                                            <div className="text-xs text-sky-600 mb-1">US News</div>
                                            <div className="font-semibold flex items-center">
                                                <Award className="h-4 w-4 mr-1 text-sky-500" />
                                                {formatRanking(activeUniversity.USNewsRanking)}
                                            </div>
                                        </div>
                                        <div className="bg-sky-50 p-3 rounded-lg">
                                            <div className="text-xs text-sky-600 mb-1">Study Level</div>
                                            <div className="font-semibold flex items-center">
                                                <GraduationCap className="h-4 w-4 mr-1 text-sky-500" />
                                                {activeUniversity.Studylvl}
                                            </div>
                                        </div>
                                        <div className="bg-sky-50 p-3 rounded-lg">
                                            <div className="text-xs text-sky-600 mb-1">Duration</div>
                                            <div className="font-semibold flex items-center">
                                                <Calendar className="h-4 w-4 mr-1 text-sky-500" />
                                                {activeUniversity.Duration} months
                                            </div>
                                        </div>
                                    </div>

                                    <Tabs defaultValue="overview">
                                        <TabsList className="mb-4">
                                            <TabsTrigger value="overview">Overview</TabsTrigger>
                                            <TabsTrigger value="requirements">Requirements</TabsTrigger>
                                            <TabsTrigger value="fees">Fees & Waivers</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="overview">
                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="font-semibold mb-2">About {activeUniversity.University}</h3>
                                                    <p className="text-muted-foreground">
                                                        {activeUniversity.University} is a prestigious institution located in{" "}
                                                        {activeUniversity.Country}. It offers {activeUniversity.Studylvl} programs with a duration
                                                        of {activeUniversity.Duration} months.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="font-medium text-sm mb-2">Intakes</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {activeUniversity.Intakes.split(", ").map((intake, index) => (
                                                            <Badge key={index} variant="secondary" className="bg-sky-100 text-sky-800">
                                                                {intake}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="font-medium text-sm mb-2">Rankings</h4>
                                                    <Table>
                                                        <TableHeader>
                                                            <TableRow>
                                                                <TableHead>Ranking System</TableHead>
                                                                <TableHead>World Rank</TableHead>
                                                                <TableHead>National Rank</TableHead>
                                                            </TableRow>
                                                        </TableHeader>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell>QS Ranking</TableCell>
                                                                <TableCell>{formatRanking(activeUniversity.QSRanking)}</TableCell>
                                                                <TableCell>-</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>US News Ranking</TableCell>
                                                                <TableCell>{formatRanking(activeUniversity.USNewsRanking)}</TableCell>
                                                                <TableCell>-</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>Webomatrics Ranking</TableCell>
                                                                <TableCell>{formatRanking(activeUniversity.WebomatricsWorldRanking)}</TableCell>
                                                                <TableCell>{formatRanking(activeUniversity.WebomatricsNationalRanking)}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="requirements">
                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="font-semibold mb-2">English Language Requirements</h3>
                                                    <Table>
                                                        <TableHeader>
                                                            <TableRow>
                                                                <TableHead>Test</TableHead>
                                                                <TableHead>Required</TableHead>
                                                                <TableHead>Minimum Score</TableHead>
                                                            </TableRow>
                                                        </TableHeader>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell>IELTS</TableCell>
                                                                <TableCell>
                                                                    {activeUniversity.IeltsRequired ? (
                                                                        <Check className="h-4 w-4 text-green-500" />
                                                                    ) : (
                                                                        <X className="h-4 w-4 text-red-500" />
                                                                    )}
                                                                </TableCell>
                                                                <TableCell>{activeUniversity.IeltsOverall || "N/A"}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>TOEFL</TableCell>
                                                                <TableCell>
                                                                    {activeUniversity.ToeflRequired ? (
                                                                        <Check className="h-4 w-4 text-green-500" />
                                                                    ) : (
                                                                        <X className="h-4 w-4 text-red-500" />
                                                                    )}
                                                                </TableCell>
                                                                <TableCell>{activeUniversity.ToeflScore || "N/A"}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>PTE</TableCell>
                                                                <TableCell>
                                                                    {activeUniversity.PteRequired ? (
                                                                        <Check className="h-4 w-4 text-green-500" />
                                                                    ) : (
                                                                        <X className="h-4 w-4 text-red-500" />
                                                                    )}
                                                                </TableCell>
                                                                <TableCell>{activeUniversity.PteScore || "N/A"}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>Duolingo</TableCell>
                                                                <TableCell>
                                                                    {activeUniversity.DETRequired ? (
                                                                        <Check className="h-4 w-4 text-green-500" />
                                                                    ) : (
                                                                        <X className="h-4 w-4 text-red-500" />
                                                                    )}
                                                                </TableCell>
                                                                <TableCell>{activeUniversity.DETScore || "N/A"}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </div>

                                                <div>
                                                    <h3 className="font-semibold mb-2">Standardized Tests</h3>
                                                    <Table>
                                                        <TableHeader>
                                                            <TableRow>
                                                                <TableHead>Test</TableHead>
                                                                <TableHead>Required</TableHead>
                                                                <TableHead>Minimum Score</TableHead>
                                                            </TableRow>
                                                        </TableHeader>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell>SAT</TableCell>
                                                                <TableCell>
                                                                    {activeUniversity.SatRequired ? (
                                                                        <Check className="h-4 w-4 text-green-500" />
                                                                    ) : (
                                                                        <X className="h-4 w-4 text-red-500" />
                                                                    )}
                                                                </TableCell>
                                                                <TableCell>{activeUniversity.SatScore || "N/A"}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>ACT</TableCell>
                                                                <TableCell>
                                                                    {activeUniversity.ActRequired ? (
                                                                        <Check className="h-4 w-4 text-green-500" />
                                                                    ) : (
                                                                        <X className="h-4 w-4 text-red-500" />
                                                                    )}
                                                                </TableCell>
                                                                <TableCell>{activeUniversity.ActScore || "N/A"}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>GRE</TableCell>
                                                                <TableCell>
                                                                    {activeUniversity.GreRequired ? (
                                                                        <Check className="h-4 w-4 text-green-500" />
                                                                    ) : (
                                                                        <X className="h-4 w-4 text-red-500" />
                                                                    )}
                                                                </TableCell>
                                                                <TableCell>{activeUniversity.GreScore || "N/A"}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>GMAT</TableCell>
                                                                <TableCell>
                                                                    {activeUniversity.GmatRequired ? (
                                                                        <Check className="h-4 w-4 text-green-500" />
                                                                    ) : (
                                                                        <X className="h-4 w-4 text-red-500" />
                                                                    )}
                                                                </TableCell>
                                                                <TableCell>{activeUniversity.GmatScore || "N/A"}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </div>

                                                <div>
                                                    <h3 className="font-semibold mb-2">Other Requirements</h3>
                                                    <div className="space-y-2">
                                                        <div className="flex items-center">
                                                            <div className="w-8">
                                                                {activeUniversity.WithoutMaths ? (
                                                                    <Check className="h-5 w-5 text-green-500" />
                                                                ) : (
                                                                    <X className="h-5 w-5 text-red-500" />
                                                                )}
                                                            </div>
                                                            <span>Can apply without Mathematics background</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div className="w-8">
                                                                {activeUniversity.WithoutEnglishProficiency ? (
                                                                    <Check className="h-5 w-5 text-green-500" />
                                                                ) : (
                                                                    <X className="h-5 w-5 text-red-500" />
                                                                )}
                                                            </div>
                                                            <span>Can apply without English proficiency test</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div className="w-8">
                                                                {activeUniversity.WorkExp > 0 ? (
                                                                    <Check className="h-5 w-5 text-green-500" />
                                                                ) : (
                                                                    <X className="h-5 w-5 text-red-500" />
                                                                )}
                                                            </div>
                                                            <span>
                                                                Work experience required:{" "}
                                                                {activeUniversity.WorkExp > 0 ? `${activeUniversity.WorkExp} years` : "None"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="fees">
                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="font-semibold mb-2">Tuition & Application Fees</h3>
                                                    <Table>
                                                        <TableHeader>
                                                            <TableRow>
                                                                <TableHead>Fee Type</TableHead>
                                                                <TableHead>Amount</TableHead>
                                                                <TableHead>Waiver Available</TableHead>
                                                            </TableRow>
                                                        </TableHeader>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell>Tuition Fee</TableCell>
                                                                <TableCell>
                                                                    <div className="relative group inline-block">
                                                                        <span className="blur-sm group-hover:blur-none transition duration-200">{activeUniversity.TutionFee}</span>
                                                                        <a href="https://forms.gle/867XonnHK7AKehGk8" target="_blank">
                                                                            <button className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 bg-sky-600 text-white text-xs font-medium rounded px-2 py-0 transition duration-200">
                                                                                Check With us
                                                                            </button>
                                                                        </a>
                                                                    </div>
                                                                </TableCell>
                                                                <TableCell>
                                                                    {activeUniversity.ScholarshipAvailable ? (
                                                                        <Badge className="bg-green-100 text-green-800">Scholarships Available</Badge>
                                                                    ) : (
                                                                        "No"
                                                                    )}
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>Application Fee</TableCell>
                                                                <TableCell>
                                                                    {activeUniversity.ApplicationFeeAmt > 0
                                                                        ? `${activeUniversity.Currency}${activeUniversity.ApplicationFeeAmt}`
                                                                        : "Free"}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {activeUniversity.AppFeeWaiverAvailable ? (
                                                                        <Badge className="bg-green-100 text-green-800">Fee Waiver Available</Badge>
                                                                    ) : (
                                                                        "No"
                                                                    )}
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </div>

                                                <div className="bg-sky-50 p-4 rounded-lg">
                                                    <h4 className="font-medium mb-2 flex items-center">
                                                        <AlertCircle className="h-4 w-4 mr-2 text-sky-600" />
                                                        Fee Waiver Information
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground mb-3">
                                                        {activeUniversity.University} offers application fee waivers for eligible students. Contact
                                                        the admissions office directly to inquire about your eligibility and the application
                                                        process.
                                                    </p>
                                                    {activeUniversity.ScholarshipAvailable && (
                                                        <div className="mt-3">
                                                            <h5 className="text-sm font-medium mb-1">Scholarship Opportunities</h5>
                                                            <p className="text-sm text-muted-foreground">
                                                                Various scholarships are available for international students. These may be merit-based,
                                                                need-based, or specific to your country of origin.
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div>
                                                    <h4 className="font-medium mb-2">How to Apply for Fee Waiver</h4>
                                                    <ol className="space-y-2 ml-5 list-decimal text-sm text-muted-foreground">
                                                        <li>Contact the university's admissions office via email or phone</li>
                                                        <li>Explain your financial situation and request information about fee waivers</li>
                                                        <li>Prepare any required documentation (financial statements, recommendation letters)</li>
                                                        <li>Submit your fee waiver request before the application deadline</li>
                                                        <li>Follow up if you don't receive a response within 1-2 weeks</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </div>

                                <div>
                                    <div className="bg-white p-4 rounded-lg border shadow-sm mb-4">
                                        <h3 className="font-semibold mb-3">Quick Facts</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">Study Level</span>
                                                <Badge className="bg-sky-100 text-sky-800">{activeUniversity.Studylvl}</Badge>
                                            </div>
                                            <Separator />
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">Duration</span>
                                                <span className="font-medium">{activeUniversity.Duration} months</span>
                                            </div>
                                            <Separator />
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">QS Ranking</span>
                                                <span className="font-medium">#{activeUniversity.QSRanking}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">Application Fee</span>
                                                <span className="font-medium">
                                                    {activeUniversity.ApplicationFeeAmt > 0
                                                        ? `${activeUniversity.Currency}${activeUniversity.ApplicationFeeAmt}`
                                                        : "Free"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-lg border shadow-sm mb-4">
                                        <h3 className="font-semibold mb-3">Intakes</h3>
                                        <div className="space-y-2">
                                            {activeUniversity.Intakes.split(", ").map((intake, index) => (
                                                <div key={index} className="flex items-center">
                                                    <Calendar className="h-4 w-4 mr-2 text-sky-500" />
                                                    <span className="text-sm">{intake}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-lg border shadow-sm">
                                        <h3 className="font-semibold mb-3">English Requirements</h3>
                                        <div className="space-y-2">
                                            {activeUniversity.IeltsRequired && (
                                                <div className="flex justify-between text-sm">
                                                    <span>IELTS</span>
                                                    <span className="font-medium">{activeUniversity.IeltsOverall}</span>
                                                </div>
                                            )}
                                            {activeUniversity.ToeflRequired && (
                                                <div className="flex justify-between text-sm">
                                                    <span>TOEFL</span>
                                                    <span className="font-medium">{activeUniversity.ToeflScore}</span>
                                                </div>
                                            )}
                                            {activeUniversity.PteRequired && activeUniversity.PteScore && (
                                                <div className="flex justify-between text-sm">
                                                    <span>PTE</span>
                                                    <span className="font-medium">{activeUniversity.PteScore}</span>
                                                </div>
                                            )}
                                            {activeUniversity.DETRequired && activeUniversity.DETScore && (
                                                <div className="flex justify-between text-sm">
                                                    <span>Duolingo</span>
                                                    <span className="font-medium">{activeUniversity.DETScore}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <DialogFooter className="mt-6">
                                <Button variant="outline" onClick={() => setActiveUniversity(null)}>
                                    Close
                                </Button>
                                <a href="https://forms.gle/867XonnHK7AKehGk8" target="_blank">
                                    <Button className="bg-sky-600 hover:bg-sky-700">
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        Callback From an Expert
                                    </Button>
                                </a>
                            </DialogFooter>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}

type UniversityCardProps = {
    university: University;
    rankingType: string;
    onViewDetails: (university: University) => void;
};

function UniversityCard({ university, rankingType, onViewDetails }: UniversityCardProps) {
    return (
        <Card className="overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
            <div className="relative h-40 overflow-hidden bg-gradient-to-r from-sky-500 to-indigo-600">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Avatar className="w-20 h-20 border-4 border-white">
                        <AvatarFallback className={cn("text-xl font-bold", generateColorFromName(university.University))}>
                            {getInitials(university.University)}
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div className="absolute top-3 right-3">
                    <Badge className="bg-green-600 hover:bg-green-700">Fee Waiver</Badge>
                </div>
                <div className="absolute bottom-3 left-3">
                    <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
                        {/* #{university?.USNewsRanking} */}
                    </Badge>
                </div>
            </div>
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg">{university.University}</CardTitle>
                        <CardDescription className="flex items-center mt-1 text-xs">
                            <MapPin className="h-3 w-3 mr-1" />
                            {university.Country}
                        </CardDescription>
                    </div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Badge variant="outline" className="font-normal">
                                    {university.Studylvl}
                                </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Study Level</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </CardHeader>
            <CardContent className="pb-2 flex-grow">
                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                    <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1 text-sky-500" />
                        <span>
                            {rankingType.replace("Ranking", "")} Rank: #
                            {university[rankingType as keyof University] ?? "N/A"}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-sky-500" />
                        <span>{university.Duration} months</span>
                    </div>
                    <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-1 text-sky-500" />
                        <span>IELTS: {university.IeltsOverall}</span>
                    </div>
                    <div className="flex items-center">
                        <Percent className="h-4 w-4 mr-1 text-sky-500" />
                        <span>
                            App Fee:{" "}
                            {university.ApplicationFeeAmt > 0 ? `${university.Currency}${university.ApplicationFeeAmt}` : "Free"}
                        </span>
                    </div>
                </div>

                <div className="mt-2">
                    <h4 className="text-sm font-medium mb-1">Intakes</h4>
                    <div className="flex flex-wrap gap-1">
                        {university.Intakes.split(", ")
                            .slice(0, 2)
                            .map((intake, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="bg-sky-100 text-sky-800 hover:bg-sky-200 text-xs"
                                >
                                    {intake}
                                </Badge>
                            ))}
                        {university.Intakes.split(", ").length > 2 && (
                            <Badge variant="outline" className="text-xs">
                                +{university.Intakes.split(", ").length - 2}
                            </Badge>
                        )}
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    className="w-full bg-gradient-to-r from-sky-600 to-pink-600 hover:from-sky-700 hover:to-pink-700"
                    onClick={() => onViewDetails(university)}
                >
                    View Details
                </Button>
            </CardFooter>
        </Card>
    )
}

function UniversityListItem({ university, rankingType, onViewDetails }: UniversityCardProps) {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg hover:bg-slate-50 transition-colors">
            <div className="w-full md:w-16 h-16 rounded-md overflow-hidden shrink-0 bg-gradient-to-r from-sky-500 to-indigo-600 flex items-center justify-center">
                <Avatar className="w-12 h-12 border-2 border-white">
                    <AvatarFallback className={cn("text-lg font-bold", generateColorFromName(university.University))}>
                        {getInitials(university.University)}
                    </AvatarFallback>
                </Avatar>
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-medium">{university.University}</h3>
                        <p className="text-sm text-muted-foreground flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {university.Country}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge className="bg-green-600">Fee Waiver</Badge>
                        <Badge variant="secondary">{university.Studylvl}</Badge>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-1 mt-2 text-sm">
                    <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1 text-sky-500" />
                        <span>
                            {rankingType.replace("Ranking", "")} Rank: #
                            {university[rankingType as keyof University] ?? "N/A"}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-sky-500" />
                        <span>Duration: {university.Duration} months</span>
                    </div>
                    <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-1 text-sky-500" />
                        <span>
                            {university.ToeflScore !== null
                                ? `TOEFL: ${university.ToeflScore}`
                                : `IELTS: ${university.IeltsOverall}`}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <Percent className="h-4 w-4 mr-1 text-sky-500" />
                        <span>
                            App Fee:{" "}
                            {university.ApplicationFeeAmt > 0 ? `${university.Currency}${university.ApplicationFeeAmt}` : "Free"}
                        </span>
                    </div>
                </div>

                <div className="flex justify-between items-end mt-3">
                    <div className="flex flex-wrap gap-1">
                        {university.Intakes.split(", ").map((intake, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                                {intake}
                            </Badge>
                        ))}
                    </div>
                    <Button
                        size="sm"
                        className="bg-gradient-to-r from-sky-600 to-pink-600 hover:from-sky-700 hover:to-pink-700"
                        onClick={() => onViewDetails(university)}
                    >
                        View Details
                    </Button>
                </div>
            </div>
        </div>
    )
}
