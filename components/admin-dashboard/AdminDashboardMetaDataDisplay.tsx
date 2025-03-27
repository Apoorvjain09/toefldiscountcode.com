"use client"

import { useState } from "react"
import {
  Clock,
  Copy,
  ComputerIcon as Desktop,
  Download,
  ExternalLink,
  Globe,
  HardDrive,
  HelpCircle,
  Info,
  MapPin,
  Network,
  RefreshCw,
  Shield,
  Smartphone,
  Tablet,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/Alert"
import Link from "next/link"

interface SessionMetadata {
  user: {
    id: string
    name: string
    email: string
    avatar: string
    role: string
    lastLogin: string
  }
  device: {
    type: "desktop" | "tablet" | "mobile"
    os: string
    browser: string
    screenResolution: string
    colorDepth: string
    timezone: string
    language: string
  }
  network: {
    ip: string
    isp: string
    connectionType: string
    speed: number
    latency: number
    vpn: boolean
  }
  location: {
    country: string
    region: string
    city: string
    coordinates: {
      latitude: number
      longitude: number
    }
  }
  security: {
    status: "secure" | "warning" | "risk"
    twoFactorEnabled: boolean
    lastPasswordChange: string
    loginAttempts: number
    knownDevice: boolean
    riskFactors: string[]
  }
  session: {
    id: string
    startTime: string
    duration: string
    tabStatus: "active" | "inactive" | "hidden"
    referrer: string
    userAgent: string
    cookies: number
    localStorage: number
  }
}

interface Props {
  student: {
    session_id: string
    firstName: string
    lastName: string
    submittedAt: string
    usersessions: {
      ip: string
      referrer: string
      timeZone: string
      country: string
      device: string
      speed: string
      connection: string
      tabStatus: string
      isp: string
      os: string
      userAgent: string
      city?: string
      region?: string
      longitude?: string
      latitude?: string
    }
  }
}

function getDeviceIcon(type: string) {
  switch (type) {
    case "desktop":
      return <Desktop className="h-4 w-4" />;
    case "tablet":
      return <Tablet className="h-4 w-4" />;
    case "mobile":
      return <Smartphone className="h-4 w-4" />;
    default:
      return <HelpCircle className="h-4 w-4" />; // fallback icon (optional)
  }
}

function getSecurityStatus(referrer: string): "secure" | "warning" | "risk" {
  const trustedSources = ["google.com", "reddit.com", "facebook.com", "http://localhost:3000"];
  if (!referrer || referrer.trim() === "") return "risk";

  const lowerRef = referrer.toLowerCase();
  if (trustedSources.some(source => lowerRef.includes(source))) {
    return "secure";
  }

  return "warning";
}

function getSecurityStatusColor(referrer: string) {
  const status = getSecurityStatus(referrer);
  switch (status) {
    case "secure":
      return "bg-green-500";
    case "warning":
      return "bg-yellow-500";
    case "risk":
      return "bg-red-500";
  }
}

function getBrowserName(userAgent: string): string {
  const ua = userAgent.toLowerCase();

  if (ua.includes("edg")) return "Edge";
  if (ua.includes("opr") || ua.includes("opera")) return "Opera";
  if (ua.includes("chrome") && !ua.includes("edg") && !ua.includes("opr")) return "Chrome";
  if (ua.includes("safari") && !ua.includes("chrome")) return "Safari";
  if (ua.includes("firefox")) return "Firefox";

  return "Unknown";
}

export default function AdminDashboardUserMetaDataDisplay({ student }: Props) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1000)
  }

  const handleExport = () => {
    const dataStr = JSON.stringify(student, null, 2)
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`

    const exportFileDefaultName = `session-metadata-${student.session_id}-${new Date().toISOString()}.json`

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }

  const formatDate = (dateString?: string) => {
    return new Date(dateString || '').toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Details +</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full object-cover border border-border flex items-center justify-center">
              {student.firstName[0].toUpperCase() || ""}
              <div
              // className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${getSecurityStatusColor(student.security.status)}`}
              />
            </div>
            <div>
              <DialogTitle className="text-xl flex items-center gap-2">
                User Session Metadata
                <Badge variant="outline" className="ml-2">
                  {student.session_id}
                </Badge>
              </DialogTitle>
              <DialogDescription className="flex items-center gap-1.5">
                {student.firstName}{student.lastName}
                <Badge variant="secondary" className="ml-1">
                  {/* {student.user.role} */}
                  Student
                </Badge>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-6 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="device">Device</TabsTrigger>
            <TabsTrigger value="network">Network</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="session">Session</TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[400px] rounded-md border p-4">

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Security Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <div className={`h-3 w-3 rounded-full ${getSecurityStatusColor(student.usersessions.referrer)}`} />
                      <span className="font-medium capitalize">{getSecurityStatus(student.usersessions.referrer)}</span>
                    </div>

                    <p className="text-xs text-muted-foreground mt-1">
                      {getSecurityStatus(student.usersessions.referrer) === "secure" ? (
                        "No security issues detected"
                      ) : (
                        "User came from unknown link"
                      )}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Submitted Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-medium">{student.submittedAt}</div>
                    <p className="text-xs text-muted-foreground">
                      Started: {formatDate(student.submittedAt)}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      {getDeviceIcon(student.usersessions.device)}
                      Device
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-medium">{student.usersessions.os}</div>
                    <p className="text-xs text-muted-foreground">{getBrowserName(student.usersessions.userAgent)}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-medium">
                      {student.usersessions.city}, {student.usersessions.country}
                    </div>
                    <p className="text-xs text-muted-foreground">{student.usersessions.region}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Network className="h-4 w-4" />
                      Network
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-medium">{student.usersessions.connection.toUpperCase()}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs">Speed:</span>
                      <Progress value={Number(student.usersessions.speed)} className="h-1.5" />
                      <span className="text-xs">{student.usersessions.speed} Mbps</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Timezone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-medium">{student.usersessions.timeZone}</div>
                    <p className="text-xs text-muted-foreground">{"English"}</p>
                  </CardContent>
                </Card>
              </div>

              {/* {student.security.riskFactors.length > 0 && (
                <Alert variant="destructive">
                  <Info className="h-4 w-4" />
                  <AlertTitle>Security Risks Detected</AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc pl-5 text-sm mt-2">
                      {student.security.riskFactors.map((risk, index) => (
                        <li key={index}>{risk}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )} */}
            </TabsContent>

            <TabsContent value="device" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {/* {getDeviceIcon(student.usersessions.device)} */}
                    Device Information
                  </CardTitle>
                  <CardDescription>Details about the device used for this session</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Device Type</h4>
                      <p className="capitalize">{student.usersessions.device}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Operating System</h4>
                      <p>{student.usersessions.os}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Browser</h4>
                      <p>{getBrowserName(student.usersessions.userAgent)}</p>                    </div>
                    {/* <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Screen Resolution</h4>
                      <p>{student.device.screenResolution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Color Depth</h4>
                      <p>{student.device.colorDepth}</p>
                    </div> */}
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Timezone</h4>
                      <p>{student.usersessions.timeZone}</p>
                    </div>
                    {/* <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Language</h4>
                      <p>{student.device.language}</p>
                    </div> */}
                  </div>

                  <Separator />

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">User Agent</h4>
                    <div className="relative">
                      <pre className="bg-muted p-2 rounded-md text-xs overflow-x-auto break-words whitespace-pre-wrap">
                        {student.usersessions.userAgent}
                      </pre>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-1 right-1 h-6 w-6"
                        onClick={() => copyToClipboard(student.usersessions.userAgent)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="network" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Network className="h-4 w-4" />
                    Network Information
                  </CardTitle>
                  <CardDescription>Details about the network connection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">IP Address</h4>
                      <div className="flex items-center gap-2">
                        <p>{student.usersessions.ip}</p>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => copyToClipboard(student.usersessions.ip)}
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Copy IP address</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">ISP</h4>
                      <p>{student.usersessions.isp}</p>
                    </div>
                    {/* <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Connection Type</h4>
                      <Badge variant="outline">{student.network.connectionType.toUpperCase()}</Badge>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">VPN</h4>
                      <Badge variant={student.network.vpn ? "default" : "outline"}>
                        {student.network.vpn ? "Active" : "Not Detected"}
                      </Badge>
                    </div> */}
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <h4 className="text-sm font-medium">Connection Speed</h4>
                        <span className="text-sm">{student.usersessions.speed} Mbps</span>
                      </div>
                      <Progress value={Number(student.usersessions.speed)} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <h4 className="text-sm font-medium">Latency</h4>
                        <span className="text-sm">{student.usersessions.speed}ms</span>
                      </div>
                      <Progress value={100 - Math.min(Number(student.usersessions.speed), 100)} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="location" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location Information
                  </CardTitle>
                  <CardDescription>Geolocation details for this session</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Country</h4>
                      <p>{student.usersessions.country}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Region</h4>
                      <p>{student.usersessions.region}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">City</h4>
                      <p>{student.usersessions.city}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Coordinates</h4>
                      <p>
                        {student.usersessions.latitude},{" "}
                        {student.usersessions.longitude}
                      </p>
                    </div>
                  </div>

                  <Link href={`https://www.google.com/maps?q=${student.usersessions.latitude},${student.usersessions.longitude}`}>
                    <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mt-5 hover:bg-gray-200 transition-colors">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-medium">Map View</p>
                        <p className="text-xs text-muted-foreground">Interactive map would be displayed here</p>
                      </div>
                    </div>
                  </Link>

                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Security Information
                  </CardTitle>
                  <CardDescription>Security details and risk assessment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-md bg-muted">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${getSecurityStatus(student.usersessions.referrer) === "secure" ? "bg-green-400" : "bg-red-500"}`}
                    >
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium capitalize">{student.usersessions.referrer} Session</h3>
                      <p className="text-sm text-muted-foreground">
                        {getSecurityStatus(student.usersessions.referrer) === "secure"
                          ? "This session has passed all security checks"
                          : "This session has security concerns"}
                      </p>
                    </div>
                  </div>

                  {/* <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Two-Factor Authentication</h4>
                      <Badge variant={student.security.twoFactorEnabled ? "default" : "destructive"}>
                        {student.security.twoFactorEnabled ? "Enabled" : "Disabled"}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Known Device</h4>
                      <Badge variant={student.security.knownDevice ? "default" : "secondary"}>
                        {student.security.knownDevice ? "Yes" : "New Device"}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Login Attempts</h4>
                      <p>{student.security.loginAttempts}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Last Password Change</h4>
                      <p>{formatDate(student.security.lastPasswordChange)}</p>
                    </div>
                  </div> */}

                  {/* {student.security.riskFactors.length > 0 ? (
                    <Alert variant="destructive">
                      <Info className="h-4 w-4" />
                      <AlertTitle>Security Risks Detected</AlertTitle>
                      <AlertDescription>
                        <ul className="list-disc pl-5 text-sm mt-2">
                          {student.security.riskFactors.map((risk, index) => (
                            <li key={index}>{risk}</li>
                          ))}
                        </ul>
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>No Security Risks Detected</AlertTitle>
                      <AlertDescription>
                        This session appears to be secure with no detected risk factors.
                      </AlertDescription>
                    </Alert>
                  )} */}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="session" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <HardDrive className="h-4 w-4" />
                    Session Details
                  </CardTitle>
                  <CardDescription>Information about the current browser session</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Session ID</h4>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{student.session_id}</Badge>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => copyToClipboard(student.session_id)}
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Copy session ID</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Tab Status</h4>
                      <Badge variant={student.usersessions.tabStatus === "active" ? "default" : "secondary"}>
                        {student.usersessions.tabStatus}
                      </Badge>
                    </div>
                    {/* <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Start Time</h4>
                      <p>{formatDate(student.usersessions.startTime)}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Duration</h4>
                      <p>{student.usersessions.duration}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Cookies</h4>
                      <p>{student.usersessions.cookies}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Local Storage Items</h4>
                      <p>{student.usersessions.localStorage}</p>
                    </div> */}
                  </div>

                  <Separator />

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Referrer</h4>
                    <div className="flex items-center gap-2">
                      <p className="text-sm truncate">{student.usersessions.referrer || "No referring link available"}</p>
                      <Button variant="ghost" size="icon" className="h-6 w-6 flex-shrink-0" asChild>
                        <a href={student.usersessions.referrer} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <DialogFooter className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">Last updated: {new Date().toLocaleString()}</div>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={handleExport}>
                    <Download className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Export session data</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={handleRefresh} disabled={isRefreshing}>
                    <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Refresh session data</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  )
}

