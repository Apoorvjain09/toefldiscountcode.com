import TemplateUIPageComponent from "@/components/templates/TemplateUIPageComponent"

export default function TemplatePage() {
    const template = {
        title: "Speaking - Personal Experience",
        description: "A structured template for responding to personal experience questions, offering preconstructed lines to help you clearly and confidently share your story.",
        score: 28,
        difficulty: "Advanced",
        popularity: "High",
        tags: ["Speaking", "Personal Experience", "Narrative"],
        timeToComplete: "1-2 minutes",
        wordCount: "150-200 words",
        updatedAt: "March 15, 2025",
        author: "Dr. Emma Chen",
        authorImage: "/placeholder.svg?height=40&width=40",
        authorRole: "TOEFL Speaking Expert",
        rating: 4.8,
        reviews: 342,
        usedCount: 15782,
        content: {
            introduction: `In this speaking task, you are required to share a personal experience related to a given topic. This template provides a clear structure and preconstructed lines to help you organize your thoughts and deliver a concise, engaging response.`,
            structure: [
                {
                    title: "Introduction (1 paragraph)",
                    content: `• Hook: Begin with a brief statement that introduces the topic.
• Background: Provide context for the experience.
• Thesis statement: Clearly state the experience you will discuss.`,
                    example: `I’d like to share a memorable experience from my high school years that taught me the value of teamwork.`
                },
                {
                    title: "Body (1 paragraph)",
                    content: `• Description: Describe the situation or event in detail.
• Personal Details: Include specific actions, emotions, or challenges.
• Impact: Explain what you learned or how it changed you.`,
                    example: `During a group project, I struggled to coordinate with my teammates. Despite the challenges, we eventually found a way to collaborate effectively, and I learned that perseverance and open communication are essential for overcoming obstacles.`
                },
                {
                    title: "Conclusion (1 paragraph)",
                    content: `• Summary: Briefly recap the key aspects of your experience.
• Reflection: End with a personal insight or lesson learned.`,
                    example: `In conclusion, that experience not only improved my teamwork skills but also instilled in me a lifelong commitment to effective communication and resilience.`
                }
            ],
            tips: [
                "Speak clearly and at a natural pace.",
                "Use specific details to make your experience vivid.",
                "Practice your response to ensure a smooth delivery.",
                "Keep your answer organized with a clear beginning, middle, and end.",
                "Focus on personal insights and lessons learned."
            ],
            commonPhrases: [
                {
                    category: "Introducing my experience",
                    phrases: [
                        "I’d like to talk about...",
                        "One memorable experience I had was...",
                        "I remember a time when...",
                        "Let me share an experience from..."
                    ]
                },
                {
                    category: "Describing details",
                    phrases: [
                        "During that time...",
                        "I felt that...",
                        "The situation was challenging because...",
                        "What happened next was..."
                    ]
                },
                {
                    category: "Concluding",
                    phrases: [
                        "In conclusion...",
                        "Overall, I learned that...",
                        "This experience taught me...",
                        "Looking back, I realize that..."
                    ]
                }
            ]
        },
        sampleEssay: {
            prompt: "Describe a personal experience that taught you an important lesson.",
            essay: `I’d like to talk about a memorable experience from my high school years that taught me the value of teamwork. During a group project, I faced difficulties coordinating with my teammates, which led to moments of frustration. However, we eventually found common ground by communicating openly and dividing tasks based on each member’s strengths. This experience not only helped me overcome the challenge but also showed me the importance of perseverance and collaboration. In conclusion, I learned that effective communication and teamwork are crucial for overcoming obstacles, a lesson that continues to influence my approach to group tasks today.`
        },
        relatedTemplates: [
            {
                id: "speaking-descriptive",
                title: "Speaking - Descriptive Response",
                score: 27,
                difficulty: "Intermediate"
            },
            {
                id: "speaking-opinion",
                title: "Speaking - Opinion Response",
                score: 26,
                difficulty: "Intermediate"
            },
            {
                id: "speaking-narrative",
                title: "Speaking - Narrative Response",
                score: 28,
                difficulty: "Advanced"
            }
        ]
    }

    return <TemplateUIPageComponent template={template} />
}
