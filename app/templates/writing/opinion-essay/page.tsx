import TemplateUIPageComponent from "@/components/templates/TemplateUIPageComponent"

export default function TemplatePage() {
    const template = {
        title: "Integrated Writing - Opinion Essay",
        description: "Express your opinion by integrating information from both the reading passage and lecture with this concise, to-the-point template.",
        score: 27,
        difficulty: "Intermediate",
        popularity: "Very High",
        tags: ["Integrated", "Opinion", "Argumentative"],
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
            introduction: `In this integrated writing task, you are required to express your opinion on a given topic by synthesizing evidence from a reading passage and a lecture. This template offers a clear and precise structure to help you integrate both sources effectively and present a compelling argument.`,
            structure: [
                {
                    title: "Introduction (1 paragraph)",
                    content: `• Hook: Begin with a general statement about the topic.
• Background: Briefly mention that the reading and lecture provide differing perspectives.
• Thesis statement: Clearly state your opinion and indicate that you will integrate evidence from both sources.
• Roadmap: Optionally outline the main reasons supporting your view.`,
                    example: `In today's rapidly changing world, the role of technology in education has become a hotly debated issue. Although the reading passage raises concerns about potential distractions, the lecture highlights successful digital learning strategies. I firmly believe that, when used appropriately, technology enhances educational outcomes. This essay will demonstrate this view by discussing increased resource accessibility and personalized learning opportunities.`
                },
                {
                    title: "Body Paragraph 1 (1 paragraph)",
                    content: `• Topic sentence: Present your first main reason.
• Reading Evidence: Summarize a key point from the reading that supports your argument.
• Lecture Evidence: Integrate a corresponding point from the lecture.
• Analysis: Explain how these points together reinforce your opinion.`,
                    example: `The primary reason supporting my opinion is that technology broadens access to diverse educational resources. The reading passage notes that traditional textbooks can limit learning, while the lecture illustrates how interactive software provides dynamic and updated content. This integrated evidence clearly shows that technology can greatly enrich the learning experience.`
                },
                {
                    title: "Body Paragraph 2 (1 paragraph)",
                    content: `• Topic sentence: Introduce your second main reason.
• Reading Evidence: Present another supportive detail from the reading.
• Lecture Evidence: Incorporate a related point from the lecture.
• Analysis: Describe how the combined evidence strengthens your argument.`,
                    example: `Another key factor is the ability of technology to facilitate personalized learning. The reading indicates that digital platforms can cater to individual learning styles, and the lecture reinforces this by providing examples of adaptive software that increases student engagement. Together, these points underline the effectiveness of technology in meeting diverse educational needs.`
                },
                {
                    title: "Body Paragraph 3 (optional)",
                    content: `• Topic sentence: Optionally, state an additional supporting reason.
• Evidence: Use details from both the reading and lecture.
• Analysis: Highlight how this evidence further validates your stance.`,
                    example: `Additionally, technology enables collaborative learning by connecting students across different regions. The reading briefly mentions online discussion forums, and the lecture details successful case studies of virtual group projects. This further demonstrates the multifaceted benefits of integrating technology into education.`
                },
                {
                    title: "Conclusion (1 paragraph)",
                    content: `• Restate thesis: Reiterate your opinion, incorporating integrated evidence.
• Summarize main points: Briefly recap your key reasons.
• Closing thought: End with a reflective statement on the broader significance.`,
                    example: `In conclusion, by integrating insights from both the reading and lecture, it is clear that technology plays a pivotal role in enhancing education through improved resource access and personalized learning. As digital tools continue to evolve, their thoughtful integration into education will be crucial for academic success.`
                }
            ],
            tips: [
                "Integrate evidence from both the reading passage and lecture seamlessly.",
                "Keep your analysis clear and directly related to your opinion.",
                "Use precise transition words to connect ideas logically.",
                "Plan your essay for 3-5 minutes before writing.",
                "Aim for 400-500 words, maintaining a focused structure.",
                "Review your essay in the final 2-3 minutes for clarity and accuracy."
            ],
            commonPhrases: [
                {
                    category: "Introducing your opinion",
                    phrases: [
                        "I firmly believe that...",
                        "In my view...",
                        "I am convinced that...",
                        "It is my opinion that..."
                    ]
                },
                {
                    category: "Integrating evidence",
                    phrases: [
                        "The reading indicates that...",
                        "According to the lecture...",
                        "As highlighted in the reading...",
                        "The lecture further supports that..."
                    ]
                },
                {
                    category: "Adding analysis",
                    phrases: [
                        "This demonstrates that...",
                        "This clearly shows that...",
                        "Together, these points indicate that...",
                        "This evidence reinforces..."
                    ]
                },
                {
                    category: "Concluding",
                    phrases: [
                        "In conclusion...",
                        "To summarize...",
                        "Ultimately...",
                        "In light of these observations..."
                    ]
                }
            ]
        },
        sampleEssay: {
            prompt: "Do you agree or disagree with the following statement? The integration of technology in education enhances learning outcomes.",
            essay: `In today's rapidly changing educational landscape, the role of technology has sparked much debate. While the reading passage expresses concerns about digital distractions, the lecture highlights how innovative teaching methods leverage technology to improve learning outcomes. I firmly believe that technology, when integrated effectively, enhances education by providing broader access to resources and enabling personalized learning experiences.
    
    The primary reason supporting my view is that technology expands access to a wealth of information. The reading passage notes that traditional resources are limited and can become outdated, while the lecture demonstrates how digital platforms offer up-to-date and interactive content. This combination of insights clearly shows that technology enriches the learning process by making education more accessible and engaging.
    
    Another significant factor is technology's ability to facilitate personalized instruction. According to the reading, digital tools can be adapted to suit different learning styles, and the lecture provides examples of adaptive software that boosts student engagement. Together, these points reinforce the idea that technology can transform education into a more individualized and effective experience.
    
    In conclusion, by integrating evidence from both the reading and the lecture, it is evident that technology enhances educational outcomes by broadening access to resources and supporting personalized learning. As educational methods continue to evolve, embracing technology will be essential for fostering academic success and preparing students for the future.`,
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

