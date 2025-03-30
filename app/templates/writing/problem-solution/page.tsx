import TemplateUIPageComponent from "@/components/templates/TemplateUIPageComponent"

export default function TemplatePage() {
    const template = {
        title: "Integrated Writing - Problem Solution",
        description: "Analyze a problem and propose a solution by integrating information from both the reading passage and lecture with this concise, to-the-point template.",
        score: 27,
        difficulty: "Intermediate",
        popularity: "Very High",
        tags: ["Integrated", "Problem-Solution", "Analytical"],
        timeToComplete: "30 minutes",
        wordCount: "400-500 words",
        updatedAt: "March 15, 2025",
        author: "Dr. Emma Chen",
        authorImage: "/placeholder.svg?height=40&width=40",
        authorRole: "TOEFL Writing Expert",
        rating: 4.8,
        reviews: 342,
        usedCount: 15782,
        content: {
            introduction: `In this integrated writing task, you are required to analyze a problem presented in both a reading passage and a lecture, and propose a viable solution. This template offers a clear structure to help you integrate evidence from both sources and articulate an effective resolution.`,
            structure: [
                {
                    title: "Introduction (1 paragraph)",
                    content: `• Hook: Begin with a general statement about the problem.
• Background: Briefly mention that both the reading and lecture describe the issue.
• Thesis statement: Clearly state the problem and introduce your proposed solution.
• Roadmap: Optionally outline the key points you will discuss.`,
                    example: `In today's complex world, many challenges demand innovative solutions. While the reading passage highlights the growing issue of [problem], the lecture outlines possible ways to address it. I believe that implementing [solution] is essential for mitigating this problem. This essay will discuss the nature of the problem and propose effective solutions.`
                },
                {
                    title: "Body Paragraph 1 (1 paragraph)",
                    content: `• Topic sentence: Describe the problem in detail.
• Reading Evidence: Summarize a key point from the reading that outlines the problem.
• Lecture Evidence: Incorporate a corresponding detail from the lecture that further explains the issue.
• Analysis: Explain how these points define the problem.`,
                    example: `The reading passage describes the problem of [problem] by emphasizing its negative impact on [specific aspect]. In parallel, the lecture expands on this issue by highlighting how [additional detail]. Together, these insights clearly illustrate the severity and complexity of the problem.`
                },
                {
                    title: "Body Paragraph 2 (1 paragraph)",
                    content: `• Topic sentence: Introduce the proposed solution.
• Reading Evidence: Present a solution mentioned or implied in the reading.
• Lecture Evidence: Include additional or alternative solutions from the lecture.
• Analysis: Explain how the integrated evidence supports the proposed solution.`,
                    example: `To address this issue, the reading suggests that [solution detail], while the lecture offers further evidence by proposing [another solution aspect]. This combination of ideas demonstrates that a multifaceted approach, incorporating [solution], is essential for resolving the problem.`
                },
                {
                    title: "Body Paragraph 3 (optional)",
                    content: `• Topic sentence: Optionally, present an additional supporting solution or benefit.
• Evidence: Use details from both the reading and lecture to elaborate.
• Analysis: Highlight how this further validates your proposed approach.`,
                    example: `Additionally, adopting [solution] not only alleviates the problem but also promotes long-term benefits such as [benefit]. The reading briefly notes this advantage, and the lecture reinforces it by providing concrete examples, thereby strengthening the overall argument for the solution.`
                },
                {
                    title: "Conclusion (1 paragraph)",
                    content: `• Restate thesis: Reiterate the problem and your proposed solution.
• Summarize main points: Briefly recap the key evidence from both sources.
• Closing thought: End with a reflective statement on the significance of implementing the solution.`,
                    example: `In conclusion, the integrated evidence from both the reading and the lecture confirms that [problem] is a critical issue that requires immediate attention. By implementing [solution], we can not only resolve the problem but also pave the way for future improvements. As challenges continue to evolve, proactive solutions like this will be essential for progress.`
                }
            ],
            tips: [
                "Clearly define the problem before proposing a solution.",
                "Integrate evidence from both the reading passage and lecture seamlessly.",
                "Keep your analysis focused and directly tied to your proposed solution.",
                "Use precise transition words to connect your ideas logically.",
                "Plan your essay for 3-5 minutes before writing.",
                "Aim for 400-500 words, maintaining a concise structure.",
                "Review your essay in the final 2-3 minutes for clarity and accuracy."
            ],
            commonPhrases: [
                {
                    category: "Describing the problem",
                    phrases: [
                        "The reading highlights that...",
                        "According to the passage...",
                        "The lecture points out that...",
                        "It is evident that..."
                    ]
                },
                {
                    category: "Proposing a solution",
                    phrases: [
                        "One effective solution is...",
                        "To address this issue, I propose...",
                        "A viable approach would be...",
                        "Implementing [solution] can..."
                    ]
                },
                {
                    category: "Integrating evidence",
                    phrases: [
                        "The reading indicates that...",
                        "As mentioned in the lecture...",
                        "Together, these points show that...",
                        "This evidence suggests that..."
                    ]
                },
                {
                    category: "Concluding",
                    phrases: [
                        "In conclusion...",
                        "To summarize...",
                        "Ultimately...",
                        "In light of the evidence..."
                    ]
                }
            ]
        },
        sampleEssay: {
            prompt: "The reading passage and the lecture discuss a problem faced by modern cities and propose different solutions. Summarize the problem and explain the solution suggested by the lecture.",
            essay: `Modern cities are increasingly struggling with the problem of traffic congestion, which not only hampers daily commutes but also contributes to environmental degradation. The reading passage describes how outdated infrastructure and growing population density exacerbate this issue, leading to longer travel times and higher pollution levels. In contrast, the lecture offers a practical solution by proposing the expansion of public transportation systems and the adoption of smart traffic management technologies.
    
    The reading emphasizes that traditional road networks are no longer sufficient to handle the volume of vehicles, resulting in frequent gridlocks. The lecture, however, explains that by investing in modern, efficient public transit and integrating real-time traffic monitoring systems, cities can significantly reduce congestion. This integrated approach not only addresses the immediate problem but also lays the foundation for sustainable urban development.
    
    In conclusion, the combined insights from the reading and lecture clearly show that upgrading urban transportation infrastructure is essential for mitigating traffic congestion. By embracing innovative solutions such as improved public transit and smart traffic systems, cities can enhance mobility and reduce environmental impacts, ultimately creating a better quality of urban life.`,
        },
        relatedTemplates: [
            {
                id: "independent-advantages-disadvantages",
                title: "Independent Writing - Advantages & Disadvantages",
                score: 25,
                difficulty: "Intermediate",
            },
            {
                id: "independent-compare-contrast",
                title: "Independent Writing - Compare & Contrast",
                score: 27,
                difficulty: "Advanced",
            },
            {
                id: "independent-problem-solution",
                title: "Independent Writing - Problem & Solution",
                score: 26,
                difficulty: "Intermediate",
            },
        ],
    }

    return <TemplateUIPageComponent template={template} />
}

