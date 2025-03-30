import TemplateUIPageComponent from "@/components/templates/TemplateUIPageComponent"

export default function TemplatePage() {
    const template = {
        title: "Speaking - Academic Lecture",
        description: "A structured template for responding to TOEFL Speaking Task 2 on academic lectures, where you listen to a professor's lecture. This template offers preconstructed lines to help you deliver a clear, coherent summary of the lecture.",
        score: 28,
        difficulty: "Advanced",
        popularity: "High",
        tags: ["Speaking", "Academic Lecture", "Summary"],
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
            introduction: `In this TOEFL Speaking Task 2, you will listen to an academic lecture delivered solely by a professor and then summarize the key points of the lecture. This template provides a clear structure with preconstructed lines that you can adapt to summarize the lecture effectively.`,
            structure: [
                {
                    title: "Introduction (30 seconds)",
                    content: `• Hook: Begin with a general statement about the lecture topic.
• Overview: Briefly state the main subject or focus of the lecture.
• Thesis: Indicate that you will summarize the key points made by the professor.`,
                    example: `The lecture discusses the recent advancements in renewable energy technologies. The professor explains the benefits and challenges of these innovations. I will summarize the main points of his lecture.`
                },
                {
                    title: "Body (60 seconds)",
                    content: `• Main Points: Identify and summarize the key ideas presented by the professor.
• Supporting Details: Include specific examples or data mentioned in the lecture.
• Logical Flow: Connect the points smoothly to reflect the progression of the lecture.`,
                    example: `The professor first explains how renewable energy sources, such as wind and solar, have become more efficient due to technological innovations. He then discusses the economic advantages, noting that the cost of production has decreased significantly. Finally, he highlights some challenges, such as the need for improved storage systems, to ensure a consistent energy supply.`
                },
                {
                    title: "Conclusion (20 seconds)",
                    content: `• Summary: Briefly recap the main points of the lecture.
• Personal Insight: End with a reflective statement on the lecture's significance.`,
                    example: `In conclusion, the lecture provided a comprehensive overview of renewable energy advancements, emphasizing increased efficiency, economic benefits, and current challenges. Overall, these insights underscore the potential and complexities of transitioning to sustainable energy solutions.`
                }
            ],
            tips: [
                "Listen carefully to the lecture and take concise notes.",
                "Focus on the main ideas and supporting details presented by the professor.",
                "Use transitional phrases to maintain a logical flow in your summary.",
                "Practice your response to ensure clear and fluent delivery.",
                "Keep your response organized with a clear introduction, body, and conclusion."
            ],
            commonPhrases: [
                {
                    category: "Introducing the lecture",
                    phrases: [
                        "The lecture discusses...",
                        "The professor explains that...",
                        "In the lecture, it is stated that...",
                        "According to the lecture..."
                    ]
                },
                {
                    category: "Summarizing main points",
                    phrases: [
                        "The first key point is...",
                        "Next, the professor highlights...",
                        "Another important aspect is...",
                        "Finally, he mentions that..."
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
            prompt: "Listen to the lecture about recent advancements in renewable energy technologies. Summarize the key points made by the professor.",
            essay: `The lecture discusses recent advancements in renewable energy technologies. The professor explains that innovations in wind and solar power have significantly increased energy efficiency, which has led to lower production costs. He also emphasizes the economic benefits, noting that these technologies are becoming more competitive with traditional energy sources. Additionally, the professor points out that despite these advantages, there are still challenges to be addressed, such as the need for improved energy storage systems to manage supply inconsistencies. In conclusion, the lecture provides a clear overview of how technological advancements are driving progress in renewable energy, while also acknowledging the remaining obstacles to widespread adoption.`
        },
        relatedTemplates: [
            {
                id: "speaking-campus-situation",
                title: "Speaking - Campus Situation",
                score: 28,
                difficulty: "Advanced"
            },
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
            }
        ]
    }

    return <TemplateUIPageComponent template={template} />
}
