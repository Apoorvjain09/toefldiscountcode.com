import TemplateUIPageComponent from "@/components/templates/TemplateUIPageComponent"

export default function TemplatePage() {
    const template = {
        title: "Integrated Writing - Advantages & Disadvantages",
        description: "A structured template for discussing the advantages and disadvantages presented in the reading passage and lecture.",
        score: 28,
        difficulty: "Advanced",
        popularity: "High",
        tags: ["Integrated", "Advantages", "Disadvantages"],
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
            introduction: `In this integrated writing task, you are required to discuss both the advantages and disadvantages of an issue as presented in the reading passage and the lecture. This template offers a clear structure to help you organize your response by weighing the pros and cons of the issue.`,
            structure: [
                {
                    title: "Introduction (1 paragraph)",
                    content: `• Hook: Start with a general statement about the topic.
• Background: Briefly mention that the reading and lecture present both advantages and disadvantages.
• Thesis statement: Indicate that you will discuss these contrasting points.`,
                    example: `The debate over [subject] continues to evoke mixed opinions. While the reading passage highlights the benefits of [issue], the lecture also points out several drawbacks. This essay will discuss both the advantages and disadvantages associated with [subject].`
                },
                {
                    title: "Body Paragraph 1 (1 paragraph)",
                    content: `• Topic sentence: Introduce the advantages presented in the reading.
• Reading point: Summarize a key advantage from the reading.
• Lecture point: Include any supporting or contrasting evidence from the lecture regarding the advantage.
• Analysis: Explain how these points illustrate the benefits.`,
                    example: `The reading emphasizes that [advantage], suggesting that it leads to [benefit]. In support, the lecture notes that [related detail], reinforcing the positive impact of [advantage].`
                },
                {
                    title: "Body Paragraph 2 (1 paragraph)",
                    content: `• Topic sentence: Introduce the disadvantages mentioned.
• Reading point: Outline a significant disadvantage from the reading.
• Lecture point: Present the lecture’s perspective on this drawback.
• Analysis: Clarify how these points reveal the limitations.`,
                    example: `Conversely, the reading points out that [disadvantage] can result in [negative effect]. The lecture further explains that [corresponding detail], indicating that the issue is more complex than it initially appears.`
                },
                {
                    title: "Body Paragraph 3 (optional)",
                    content: `• Topic sentence: Optionally, discuss an additional advantage or disadvantage.
• Reading vs. Lecture: Provide further comparison with specific examples.
• Analysis: Emphasize the overall balance between the benefits and drawbacks.`,
                    example: `Additionally, while the reading briefly mentions that [additional advantage/disadvantage], the lecture counters with [additional detail]. This further underscores the nuanced nature of [subject].`
                },
                {
                    title: "Conclusion (1 paragraph)",
                    content: `• Restate thesis: Summarize the advantages and disadvantages.
• Summary: Briefly recap the key points from both sources.
• Closing: End with a concluding remark that reflects on the overall evaluation.`,
                    example: `In conclusion, both the reading and the lecture provide valuable insights into the advantages and disadvantages of [subject]. While the benefits such as [advantage] are significant, the drawbacks including [disadvantage] cannot be ignored. Together, these points highlight the complex nature of the issue.`
                }
            ],
            tips: [
                "Clearly distinguish between the advantages and disadvantages from both sources.",
                "Use transition words such as 'conversely', 'furthermore', and 'additionally' to connect ideas.",
                "Ensure balanced coverage by addressing both positive and negative aspects.",
                "Plan your essay for 3-5 minutes before writing.",
                "Aim for 350-450 words, maintaining a structured response.",
                "Reserve the final 2-3 minutes for a quick review of your essay."
            ],
            commonPhrases: [
                {
                    category: "Introducing advantages",
                    phrases: [
                        "One key advantage is...",
                        "The reading highlights that...",
                        "According to the passage, one benefit is...",
                        "The lecture reinforces that..."
                    ]
                },
                {
                    category: "Introducing disadvantages",
                    phrases: [
                        "A major drawback is...",
                        "The reading points out that...",
                        "According to the passage, a disadvantage is...",
                        "Conversely, the lecture notes that..."
                    ]
                },
                {
                    category: "Analyzing evidence",
                    phrases: [
                        "This indicates that...",
                        "This clearly demonstrates that...",
                        "Together, these points suggest that...",
                        "This evidence supports the view that..."
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
            prompt: "The reading passage and the lecture discuss the advantages and disadvantages of using renewable energy sources. Summarize the points made in the lecture and explain how they add to or challenge the views presented in the reading.",
            essay: `The reading passage outlines several advantages of renewable energy sources, such as reducing dependency on fossil fuels and lowering carbon emissions. It suggests that these benefits can lead to a cleaner and more sustainable environment. However, the lecture introduces a counterpoint by highlighting certain disadvantages, including high initial costs and variability in energy production.
    
    The reading emphasizes that renewable energy not only provides environmental benefits but also creates new job opportunities in emerging industries. In contrast, the lecture points out that the high cost of renewable infrastructure and maintenance can offset these benefits, especially in regions with limited funding. This juxtaposition of ideas presents a balanced view of the issue.
    
    Furthermore, while the reading advocates for the long-term economic and ecological gains of renewable energy, the lecture underscores the short-term challenges that may hinder its widespread adoption. This includes the need for substantial government subsidies and advanced technology to manage inconsistent energy output.
    
    In conclusion, the reading and the lecture offer distinct perspectives on renewable energy. While the reading stresses its potential advantages, the lecture provides a critical examination of its disadvantages. Together, these points illustrate that the transition to renewable energy involves both significant benefits and notable challenges.`
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
        ]
    }

    return <TemplateUIPageComponent template={template} />
}
