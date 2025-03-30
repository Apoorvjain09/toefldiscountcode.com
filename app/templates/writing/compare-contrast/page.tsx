import TemplateUIPageComponent from "@/components/templates/TemplateUIPageComponent"

export default function TemplatePage() {
    const template = {
        title: "Integrated Writing - Compare & Contrast",
        description: "A structured template for comparing lecture and reading passage points.",
        score: 28,
        difficulty: "Advanced",
        popularity: "High",
        tags: ["Integrated", "Compare", "Contrast"],
        timeToComplete: "30 minutes",
        wordCount: "350-450 words",
        updatedAt: "March 15, 2025",
        author: "Dr. Emma Chen",
        authorImage: "/placeholder.svg?height=40&width=40",
        authorRole: "TOEFL Writing Expert",
        rating: 4.8,
        reviews: 342,
        usedCount: 15782,
        content: {
            introduction: `In this integrated writing task, you are required to compare and contrast the points presented in the reading passage and the lecture. This template provides a clear structure to help you organize your response by identifying similarities and differences between the two sources.`,
            structure: [
                {
                    title: "Introduction (1 paragraph)",
                    content: `• Hook: Start with a general statement about the topic.
• Background: Briefly mention that the reading and lecture provide different perspectives.
• Thesis statement: Indicate that you will compare and contrast these viewpoints.`,
                    example: `The topic of [subject] has sparked significant debate, as evidenced by the contrasting views presented in the reading and the lecture. While the reading emphasizes [main idea from reading], the lecture challenges this perspective by highlighting [main idea from lecture].`
                },
                {
                    title: "Body Paragraph 1 (1 paragraph)",
                    content: `• Topic sentence: Introduce the first point of comparison.
• Reading point: Summarize the key idea from the reading.
• Lecture point: Summarize the corresponding point from the lecture.
• Analysis: Explain the difference or similarity between the two.`,
                    example: `The reading asserts that [specific point from reading], suggesting that [brief explanation]. In contrast, the lecture argues that [corresponding point from lecture], thereby indicating that [explanation of the difference].`
                },
                {
                    title: "Body Paragraph 2 (1 paragraph)",
                    content: `• Topic sentence: Introduce the second point of comparison.
• Reading point: Outline another significant detail from the reading.
• Lecture point: Present the lecture’s counterpoint or additional evidence.
• Analysis: Clarify how these points align or diverge.`,
                    example: `Furthermore, the reading claims that [another reading point], which implies [brief explanation]. However, the lecture refutes this by demonstrating that [corresponding lecture detail], showing that [analysis of the contrast].`
                },
                {
                    title: "Body Paragraph 3 (optional)",
                    content: `• Topic sentence: Present an additional point if needed.
• Reading vs. Lecture: Provide further comparison with specific examples.
• Analysis: Emphasize the overall relationship between the two perspectives.`,
                    example: `Additionally, while the reading suggests [additional detail from reading], the lecture notes that [additional detail from lecture]. This further underscores the complex relationship between the two viewpoints.`
                },
                {
                    title: "Conclusion (1 paragraph)",
                    content: `• Restate thesis: Summarize the main differences and similarities.
• Summary: Briefly recap the key points from both sources.
• Closing: End with a concluding remark that reflects on the overall comparison.`,
                    example: `In conclusion, the reading and lecture offer distinct perspectives on [topic]. While the reading underscores [main idea], the lecture provides a contrasting viewpoint by [counterpoint]. Together, these differences highlight the multifaceted nature of the issue.`
                }
            ],
            tips: [
                "Focus on directly comparing the reading and lecture points.",
                "Use clear transition words such as 'in contrast', 'however', and 'furthermore'.",
                "Keep your analysis concise and directly tied to the examples provided.",
                "Ensure that your essay remains balanced by giving equal weight to both sources.",
                "Aim for a structured response with 3-4 well-organized paragraphs.",
                "Plan your response for 3-5 minutes before writing.",
                "Reserve the final 2-3 minutes for a quick review of your essay."
            ],
            commonPhrases: [
                {
                    category: "Introducing comparison",
                    phrases: [
                        "The reading states that...",
                        "According to the passage...",
                        "The lecture suggests that...",
                        "In the lecture, it is mentioned that..."
                    ]
                },
                {
                    category: "Contrasting ideas",
                    phrases: [
                        "In contrast, the lecture argues that...",
                        "However, the lecture points out that...",
                        "On the other hand...",
                        "Conversely..."
                    ]
                },
                {
                    category: "Analyzing similarities",
                    phrases: [
                        "Similarly, the lecture emphasizes...",
                        "Likewise, it is evident that...",
                        "Both the reading and the lecture agree that...",
                        "In a similar manner..."
                    ]
                },
                {
                    category: "Concluding comparison",
                    phrases: [
                        "In conclusion...",
                        "To summarize...",
                        "Overall, the comparison shows...",
                        "Ultimately..."
                    ]
                }
            ]
        },
        sampleEssay: {
            prompt: "The reading passage and the lecture offer different perspectives on the effectiveness of renewable energy sources. Summarize the points made in the lecture and explain how they challenge the views presented in the reading.",
            essay: `The reading passage presents the view that renewable energy sources, such as wind and solar, are unreliable due to their dependency on weather conditions. It argues that these sources are less efficient compared to traditional energy resources. In contrast, the lecture challenges this assertion by providing evidence that modern technology has significantly improved the efficiency and reliability of renewable energy. 
    
    The reading emphasizes the inconsistency of energy supply from renewable sources, suggesting that fluctuations in weather can lead to power shortages. However, the lecture points out that advancements in energy storage and smart grid technologies have largely overcome these issues, ensuring a more stable supply. This comparison highlights the evolving nature of renewable energy technology.
    
    Furthermore, while the reading doubts the cost-effectiveness of renewable energy, the lecture counters by demonstrating that the long-term benefits and decreasing production costs have made these sources more economically viable. By comparing these two perspectives, it becomes clear that technological progress plays a critical role in addressing the limitations of renewable energy.
    
    In conclusion, the reading and the lecture offer contrasting views on renewable energy. While the reading raises concerns about reliability and cost, the lecture provides a rebuttal by highlighting technological advancements that enhance efficiency and economic feasibility. This comparison underscores the importance of continual innovation in the renewable energy sector.`
        },
        relatedTemplates: [
            {
                id: "integrated-problem-solution",
                title: "Integrated Writing - Problem & Solution",
                score: 27,
                difficulty: "Advanced",
            },
            {
                id: "integrated-cause-effect",
                title: "Integrated Writing - Cause & Effect",
                score: 29,
                difficulty: "Expert",
            },
            {
                id: "independent-opinion-essay",
                title: "Independent Writing - Opinion Essay",
                score: 26,
                difficulty: "Intermediate",
            }
        ],
    }

    return <TemplateUIPageComponent template={template} />
}

