import TemplateUIPageComponent from "@/components/templates/TemplateUIPageComponent"

export default function TemplatePage() {
    const template = {
        title: "Academic Discussion - Debate Argumentation",
        description: "A structured template for analyzing an academic discussion that includes a professor's statement, two student responses, and your own argument.",
        score: 28,
        difficulty: "Advanced",
        popularity: "High",
        tags: ["Academic Discussion", "Debate", "Argumentation"],
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
            introduction: `In this integrated writing task, you are required to analyze an academic discussion that features a professor's statement followed by two student responses. You will then present your own argument. This template provides a clear structure to help you critically assess the discussion and articulate your perspective on the debate.`,
            structure: [
                {
                    title: "Introduction (1 paragraph)",
                    content: `• Hook: Start with a general statement about the topic or debate.
• Background: Briefly mention that the discussion includes a professor's statement and two student responses.
• Thesis statement: Clearly state your position in relation to the debate.
• Roadmap: Optionally outline the main points you will discuss.`,
                    example: `The debate on the effectiveness of innovative teaching methods has sparked diverse opinions in academic circles. While the professor emphasizes the potential benefits, the student responses reveal contrasting concerns. I contend that, despite promising advances, these methods require further refinement to address real-world challenges. This essay will examine the professor's viewpoint, evaluate the students' arguments, and present my own perspective.`
                },
                {
                    title: "Body Paragraph 1 (1 paragraph)",
                    content: `• Topic sentence: Summarize the professor's statement.
• Key point: Highlight the main argument or claim made by the professor.
• Evidence: Note any supporting details provided by the professor.
• Analysis: Explain how this establishes the foundation of the debate.`,
                    example: `The professor asserts that innovative teaching methods can revolutionize traditional classrooms by enhancing student engagement and promoting active learning. He supports his claim with evidence from recent studies that indicate improved academic performance in experimental settings. This optimistic view sets the stage for the debate by emphasizing progress and potential.`
                },
                {
                    title: "Body Paragraph 2 (1 paragraph)",
                    content: `• Topic sentence: Present the two student responses.
• First Student: Summarize the first student's argument.
• Second Student: Summarize the second student's viewpoint.
• Analysis: Compare or contrast these perspectives and their implications.`,
                    example: `One student acknowledges the potential benefits of these methods but raises concerns about their practicality in larger classes, suggesting that scalability remains a significant hurdle. In contrast, the second student is more skeptical, arguing that traditional teaching methods still offer a more reliable framework for effective learning. These differing viewpoints highlight the complexities and challenges of implementing innovative strategies.`
                },
                {
                    title: "Body Paragraph 3 (optional)",
                    content: `• Topic sentence: Present your own argument.
• Evidence: Integrate relevant details from the professor's and students' statements.
• Analysis: Explain how your perspective aligns with or diverges from the discussion.
• Synthesis: Connect the insights to broader implications for academic practice.`,
                    example: `Building on these perspectives, I argue that while innovative teaching methods indeed show promise, their success largely depends on proper implementation and ongoing support. The concerns raised by the students suggest that without addressing logistical and scalability issues, the potential benefits may not be fully realized.`
                },
                {
                    title: "Conclusion (1 paragraph)",
                    content: `• Restate thesis: Summarize your position in relation to the discussion.
• Summary: Briefly recap the main points from the professor and student responses.
• Closing: End with a reflective remark on the overall debate or its broader significance.`,
                    example: `In conclusion, the academic discussion reveals both the potential and the challenges of innovative teaching methods. While the professor's optimism is compelling, the contrasting student responses underscore valid concerns. Ultimately, a balanced approach that integrates innovative techniques with traditional practices may offer the most effective solution for modern education.`
                }
            ],
            tips: [
                "Clearly distinguish between the professor’s statement and the student responses.",
                "Use transition words to compare and contrast differing viewpoints.",
                "Directly link the evidence from the discussion to your own argument.",
                "Plan your essay for 3-5 minutes before writing.",
                "Aim for 350-450 words, ensuring a well-organized structure.",
                "Review your essay in the final 2-3 minutes for clarity and coherence."
            ],
            commonPhrases: [
                {
                    category: "Introducing the debate",
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
            prompt: "The professor and two students engage in a debate regarding the effectiveness of innovative teaching methods. Summarize the key points made by the professor and the students, and then present your own argument regarding the debate.",
            essay: `The professor initiates the discussion by asserting that innovative teaching methods have the potential to transform classrooms by increasing student engagement and promoting active learning. He supports his claim with evidence from recent studies that show improved academic outcomes in experimental settings.
    
    One student acknowledges these benefits but expresses concerns about the practical challenges of implementing such methods in large, diverse classrooms. In contrast, the other student remains skeptical, arguing that traditional teaching techniques still offer a more dependable framework for effective learning.
    
    Drawing on these viewpoints, I contend that while innovative teaching methods hold promise, their success is contingent upon proper implementation and support. The concerns raised by the students highlight the need for a balanced approach that integrates new strategies with proven traditional methods.
    
    In conclusion, the academic discussion reveals both the promise and the challenges of innovative teaching methods. While the professor’s optimism is compelling, the student responses underscore significant practical concerns. Ultimately, a hybrid approach that leverages the strengths of both innovative and traditional techniques may provide the most effective solution for modern classrooms.`,
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

