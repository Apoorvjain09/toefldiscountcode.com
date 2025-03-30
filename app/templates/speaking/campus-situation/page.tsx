import TemplateUIPageComponent from "@/components/templates/TemplateUIPageComponent"

export default function TemplatePage() {
    const template = {
        title: "Speaking - Campus Situation",
        description: "A structured template for responding to TOEFL Speaking Task 2 on campus situations, integrating information from both a reading passage and a lecture. This template offers preconstructed lines to help you deliver a sustained, coherent response.",
        score: 28,
        difficulty: "Advanced",
        popularity: "High",
        tags: ["Speaking", "Campus Situation", "Integrated"],
        timeToComplete: "1 minute",
        wordCount: "150-200 words",
        updatedAt: "March 15, 2025",
        author: "Dr. Emma Chen",
        authorImage: "/placeholder.svg?height=40&width=40",
        authorRole: "TOEFL Speaking Expert",
        rating: 4.8,
        reviews: 342,
        usedCount: 15782,
        content: {
            introduction: `In this TOEFL Speaking Task 2, you will respond to a campus situation by integrating information from a reading passage and a lecture. This template provides a clear structure with preconstructed lines to help you deliver a sustained, coherent response that meets the task requirements with clear speech and effective language use.`,
            structure: [
                {
                    title: "Introduction (30 seconds)",
                    content: `• Hook: Briefly introduce the campus issue.
• Overview: Summarize the main problem described in the reading.
• Thesis: State the overall solution or improvement suggested by the lecture.`,
                    example: `The reading passage explains that many students struggle with finding quiet study spaces on campus. The lecture, however, proposes practical measures to improve these facilities. I believe that implementing these changes is essential for enhancing the academic environment.`
                },
                {
                    title: "Body (60 seconds)",
                    content: `• Reading Details: Summarize key points regarding the problem from the reading.
• Lecture Details: Explain the solutions proposed in the lecture.
• Comparison: Describe how the lecture’s solutions address or enhance the reading’s description.`,
                    example: `According to the reading, the lack of sufficient study areas often results in distractions and reduced productivity. In contrast, the lecture suggests extending library hours and renovating existing study zones to create a more conducive learning environment. This comparison shows that practical improvements can effectively resolve the issue.`
                },
                {
                    title: "Conclusion (20 seconds)",
                    content: `• Summary: Recap the main points from both the reading and lecture.
• Personal Insight: Conclude with a brief reflection on the overall impact of the proposed changes.`,
                    example: `In conclusion, while the reading highlights the problem of inadequate study spaces, the lecture offers realistic solutions that would significantly improve campus life. These measures are vital for creating a better academic atmosphere for all students.`
                }
            ],
            tips: [
                "Speak clearly and maintain a steady pace.",
                "Integrate details from both the reading and the lecture.",
                "Use transitional phrases to connect your ideas.",
                "Practice your response to ensure smooth delivery.",
                "Focus on clarity and coherence to meet the task requirements."
            ],
            commonPhrases: [
                {
                    category: "Introducing the issue",
                    phrases: [
                        "The reading passage states that...",
                        "According to the passage...",
                        "It is noted that...",
                        "The issue presented is..."
                    ]
                },
                {
                    category: "Presenting the solution",
                    phrases: [
                        "The lecture suggests that...",
                        "According to the lecture...",
                        "One proposed solution is...",
                        "It is recommended that..."
                    ]
                },
                {
                    category: "Comparing details",
                    phrases: [
                        "In contrast...",
                        "On the other hand...",
                        "This indicates that...",
                        "Similarly..."
                    ]
                },
                {
                    category: "Concluding",
                    phrases: [
                        "In conclusion...",
                        "To summarize...",
                        "Overall...",
                        "Ultimately..."
                    ]
                }
            ]
        },
        sampleEssay: {
            prompt: "The reading passage discusses the limited study spaces available on campus and the negative impact on student productivity. The lecture proposes solutions to improve these facilities. Summarize the points made in the lecture and explain how they address the problems presented in the reading.",
            essay: `The reading passage states that students often struggle to find quiet study spaces on campus, which hinders their concentration and academic performance. In contrast, the lecture suggests that extending library hours and renovating existing study areas can greatly alleviate these issues. The lecture provides examples of campuses where such improvements have led to a more conducive learning environment. Overall, these solutions effectively address the concerns raised in the reading by creating better study conditions for students. In conclusion, the proposed changes would not only resolve the current problem but also enhance the overall campus atmosphere.`
        },
        relatedTemplates: [
            {
                id: "speaking-personal-experience",
                title: "Speaking - Personal Experience",
                score: 28,
                difficulty: "Advanced"
            },
            {
                id: "speaking-opinion",
                title: "Speaking - Opinion Response",
                score: 26,
                difficulty: "Intermediate"
            },
            {
                id: "speaking-descriptive",
                title: "Speaking - Descriptive Response",
                score: 27,
                difficulty: "Intermediate"
            }
        ]
    }

    return <TemplateUIPageComponent template={template} />
}
