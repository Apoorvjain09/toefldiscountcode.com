import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Clock,
    Users,
    BookOpen,
    FileText,
    MessageCircle,
    GraduationCap,
    DollarSign,
    Play,
    Phone,
    Calendar,
    Video,
    Award,
} from "lucide-react"

export default function ClassesWhyUs() {
    const features = [
        {
            icon: Play,
            title: "Free Demo Classes",
            description: "Try before you join with our complimentary demo sessions",
            highlight: true,
        },
        {
            icon: Clock,
            title: "Flexible Timings",
            description: "Early morning & late evening batches to fit your schedule",
        },
        {
            icon: Video,
            title: "Live Interactive Classes",
            description: "1.5-hour engaging sessions with real-time interaction",
        },
        {
            icon: Calendar,
            title: "Extended Access",
            description: "6 months to 1 year of recorded class access",
        },
        {
            icon: BookOpen,
            title: "Updated Study Material",
            description: "Current and comprehensive learning resources",
        },
        {
            icon: FileText,
            title: "Realistic Mock Tests",
            description: "Full-length practice tests that mirror real exams",
        },
        {
            icon: MessageCircle,
            title: "Personal Doubt Solving",
            description: "One-on-one sessions with expert faculty",
        },
        {
            icon: GraduationCap,
            title: "Expert Faculty",
            description: "Specialized teachers for every subject area",
        },
    ]

    return (
        <section className="p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto">

                <h1 className="mt-5 mb-10  font-extrabold leading-none tracking-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl dark:text-white text-center">Why students choose our ONLINE classes</h1>


                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${feature.highlight ? "ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-purple-50" : ""}`}
                        >
                            <CardContent className="p-6">
                                {feature.highlight && (
                                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600">Popular</Badge>
                                )}
                                <div
                                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.highlight ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-gray-100"}`}
                                >
                                    <feature.icon className={`h-6 w-6 ${feature.highlight ? "text-white" : "text-gray-600"}`} />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Header */}
                <div className="text-center mb-16">
                    {/* <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            🌟 Premium Online Education
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Transform Your Learning Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands of successful students with our interactive online classes. Expert faculty, flexible timings,
            and comprehensive support - all at an unbeatable price.
          </p> */}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        {/* <Button
                            size="lg"
                            className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                            <Play className="mr-2 h-5 w-5" />
                            Start Free Demo
                        </Button> */}
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                            <Phone className="mr-2 h-5 w-5" />
                            Call Now
                        </Button>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg font-semibold text-gray-700">
                        <div className="flex items-center gap-2">
                            <Phone className="h-5 w-5 text-green-600" />
                            <span>9310017599</span>
                        </div>
                        <div className="hidden sm:block text-gray-300">|</div>
                        <div className="flex items-center gap-2">
                            <Phone className="h-5 w-5 text-green-600" />
                            <span>8802880181</span>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                {/* <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <DollarSign className="h-6 w-6" />
              <h3 className="text-2xl font-bold">Affordable Excellence</h3>
            </div>
            <p className="text-lg mb-6 opacity-90">
              Premium quality education at nominal fees. Get maximum value for your investment!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Award className="mr-2 h-5 w-5" />
                View Pricing
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </div>
          </CardContent>
        </Card> */}
            </div>
        </section>
    )
}
