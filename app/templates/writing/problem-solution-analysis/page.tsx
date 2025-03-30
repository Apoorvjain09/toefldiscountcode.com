import TemplateUIPageComponent from "@/components/templates/TemplateUIPageComponent"

export default function TemplatePage() {
    const template = {
        title: "Academic Discussion - Problem Solution Analysis",
        description: "A structured template for analyzing an academic discussion on a problem and its proposed solutions, featuring a professor's statement, two student responses, and your own argument.",
        score: 28,
        difficulty: "Advanced",
        popularity: "High",
        tags: ["Academic Discussion", "Problem-Solution", "Analysis"],
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
            introduction: `In this academic discussion task, you are required to analyze a problem and the proposed solutions as presented in a discussion that features a professor's statement and two student responses. You will then present your own argument. This template provides a clear structure to help you critically assess the discussion and articulate a well-reasoned response.`,
            structure: [
                {
                    title: "Introduction (1 paragraph)",
                    content: `• Hook: Begin with a general statement about the problem or issue under discussion.
• Background: Briefly mention that the discussion includes a professor’s statement and two student responses focusing on problem solution analysis.
• Thesis statement: Clearly state your evaluation of the proposed solutions.
• Roadmap: Optionally outline the main points you will analyze.`,
                    example: `Urban traffic congestion is a growing challenge that demands innovative solutions. In a recent discussion, a professor presented a technology-driven solution, while students offered differing perspectives on its feasibility. I contend that although the proposed solution shows promise, it requires integration with broader infrastructural improvements. This essay will analyze the professor's argument, evaluate the student responses, and present my own perspective.`
                },
                {
                    title: "Body Paragraph 1 (1 paragraph)",
                    content: `• Topic sentence: Summarize the professor's statement on the problem and his proposed solution.
• Key point: Highlight the main argument or solution suggested by the professor.
• Evidence: Mention any supporting details provided.
• Analysis: Explain how this establishes the foundation for the discussion.`,
                    example: `The professor asserts that advanced traffic management systems—such as real-time monitoring and adaptive signal control—can significantly alleviate urban congestion. He supports his claim with data from pilot projects, demonstrating improved traffic flow and reduced bottlenecks. This data-driven approach lays the groundwork for considering technology as a viable solution.`
                },
                {
                    title: "Body Paragraph 2 (1 paragraph)",
                    content: `• Topic sentence: Present the two student responses.
• First Student: Summarize the first student's viewpoint, noting any concerns or support.
• Second Student: Summarize the second student's perspective, highlighting a contrasting argument.
• Analysis: Compare these responses and discuss their implications for the proposed solution.`,
                    example: `One student agrees with the professor’s optimism but raises concerns regarding the high implementation costs and potential privacy issues inherent in surveillance-based systems. Conversely, the second student argues that while technological solutions can offer improvements, they neglect the necessity for comprehensive infrastructural investments. These differing viewpoints expose the complexities involved in addressing urban traffic problems.`
                },
                {
                    title: "Body Paragraph 3 (optional)",
                    content: `• Topic sentence: Present your own argument.
• Evidence: Integrate relevant details from both the professor's and the students' statements.
• Analysis: Explain how your perspective builds on or diverges from the discussion.
• Synthesis: Connect your argument to broader implications for urban planning or policy.`,
                    example: `Building on these perspectives, I contend that while technology plays a crucial role in managing traffic congestion, it must be complemented by substantial investments in public transportation and road infrastructure. This balanced approach not only tackles the immediate problem but also fosters long-term sustainable urban development.`
                },
                {
                    title: "Conclusion (1 paragraph)",
                    content: `• Restate thesis: Summarize your overall position regarding the problem and the proposed solutions.
• Summary: Briefly recap the key points from the professor’s and student responses.
• Closing: End with a reflective remark on the broader significance of your analysis.`,
                    example: `In conclusion, the discussion reveals both the promise and the limitations of technology-driven solutions for urban traffic congestion. While the professor’s argument is compelling, the student responses highlight significant concerns that must be addressed. Ultimately, a hybrid strategy that combines technological innovation with infrastructural improvements appears to be the most effective way forward.`
                }
            ],
            tips: [
                "Clearly distinguish between the professor’s statement and the student responses.",
                "Use transition words to compare and contrast the different viewpoints.",
                "Directly link evidence from the discussion to your own argument.",
                "Plan your response for 3-5 minutes before writing.",
                "Aim for 350-450 words, ensuring a well-organized structure.",
                "Review your essay in the final 2-3 minutes for clarity and coherence."
            ],
            commonPhrases: [
                {
                    category: "Introducing the discussion",
                    phrases: [
                        "The professor asserts that...",
                        "According to the professor...",
                        "The discussion begins with...",
                        "Initially, it is stated that..."
                    ]
                },
                {
                    category: "Presenting student responses",
                    phrases: [
                        "One student contends that...",
                        "A student argues that...",
                        "In contrast, another student claims that...",
                        "One viewpoint suggests that..."
                    ]
                },
                {
                    category: "Stating your argument",
                    phrases: [
                        "I contend that...",
                        "In my view...",
                        "I believe that...",
                        "It is my opinion that..."
                    ]
                },
                {
                    category: "Concluding",
                    phrases: [
                        "In conclusion...",
                        "To summarize...",
                        "Ultimately...",
                        "In light of these arguments..."
                    ]
                }
            ]
        },
        sampleEssay: {
            prompt: "The professor and two students discuss potential solutions to urban traffic congestion. Summarize the key points made by the professor and the students, and then present your own argument regarding the proposed solutions.",
            essay: `The professor initiates the discussion by asserting that advanced traffic management systems, including real-time monitoring and adaptive signal control, can substantially reduce urban traffic congestion. He supports his argument with data from successful pilot projects, indicating that technology-driven solutions can improve traffic flow and reduce delays.
    
    One student, while agreeing with the professor’s data, expresses concerns about the high costs and potential privacy issues associated with such technological implementations. In contrast, the second student argues that technology alone cannot resolve traffic congestion and that significant infrastructural improvements, such as enhanced public transportation and road maintenance, are equally necessary.
    
    Drawing on these viewpoints, I contend that a multifaceted approach is required to address urban traffic problems effectively. While advanced traffic management systems offer promising short-term relief, they must be integrated with comprehensive infrastructural investments to achieve sustainable improvements in urban mobility.
    
    In conclusion, the academic discussion highlights both the potential and the challenges of technology-based solutions for urban congestion. The professor’s argument is persuasive, yet the student responses underscore important concerns that cannot be overlooked. Ultimately, a balanced approach that combines technological innovation with infrastructural development is likely to provide the most effective solution, as reflected in the rubric's criteria for a fully successful response.`
        },
        relatedTemplates: [
            {
                id: "integrated-problem-solution",
                title: "Integrated Writing - Problem Solution",
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

