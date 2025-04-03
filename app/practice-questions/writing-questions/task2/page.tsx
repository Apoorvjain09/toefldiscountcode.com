"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { AlarmClock, Save, Send, ChevronDown, ChevronUp, HelpCircle, User, Users, Presentation } from "lucide-react"
import writingTasksQuestions from "./writing-task2-questions"
import DiffMatchPatch from "diff-match-patch";
import Alert from "@/components/ui/AlertNotification"

interface ConversationType {
    id: number;
    opening_statement: string;
    teacher_statement: string;
    board_statement?: string;
    student1_statement: string;
    student2_statement: string
}

type EvaluationType = {
    score: number;
    mistakes: string[];
    corrections: string[];
    tips: string[];
    better_ans: string;
};

const Conversation = ({ current_conversation }: { current_conversation: ConversationType }) => (
    <div className="space-y-4 text-lg">
        <p className="text-base font-medium">{current_conversation.opening_statement}</p>

        <div className="flex items-start space-x-3">
            <User className="min-w-6 min-h-6 text-blue-500" />
            <div>
                <span className="font-semibold text-blue-500 text-lg">Teacher:</span>
                <p className="text-base">{current_conversation.teacher_statement}</p>
            </div>
        </div>

        {current_conversation.board_statement && (
            <div className="flex items-start space-x-3">
                <Presentation className="min-w-6 min-h-6 text-blue-500" />
                <div>
                    <span className="font-semibold text-blue-500 text-md">White Board:</span>
                    <p className="font-bold text-lg">{current_conversation.board_statement}</p>
                </div>
            </div>
        )}

        <div className="flex items-start space-x-3">
            <Users className="min-w-6 min-h-6 text-green-500" />
            <div>
                <span className="font-semibold text-green-500 text-lg">Student 1:</span>
                <p className="text-base">{current_conversation.student1_statement}</p>
            </div>
        </div>

        <div className="flex items-start space-x-3">
            <Users className="min-w-6 min-h-6 text-purple-500" />
            <div>
                <span className="font-semibold text-purple-500 text-lg">Student 2:</span>
                <p className="text-base">{current_conversation.student2_statement}</p>
            </div>
        </div>
    </div>
)

const getRandomConversation = () => {
    const progress = JSON.parse(localStorage.getItem("toefl_progress") || "{}");
    const completedIds = progress?.writing?.task2?.completedQuestionIds || [];

    const remaining = writingTasksQuestions.filter(q =>
        !completedIds.includes(q.id)
    );
    console.log(remaining)
    console.log(remaining.length)
    if (remaining.length === 0) {
        alert("✅ You’ve completed all Writing Task 2 questions!");
        return null;
    }

    const randomIndex = Math.floor(Math.random() * remaining.length);
    return remaining[randomIndex];
};

export default function TOEFLWritingTask2Practice() {
    const [answer, setAnswer] = useState("")
    const [wordCount, setWordCount] = useState(0)
    const [timeLeft, setTimeLeft] = useState(10 * 60) // 30 minutes in seconds
    const [isOpen, setIsOpen] = useState(false)
    const [conversation, setConversation] = useState<ConversationType | null>(null);
    const isInitialized = useRef(false); // Tracks if the effect has run
    const [evaluation, setEvaluation] = useState<EvaluationType | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const evaluationRef = useRef<HTMLDivElement | null>(null);
    const [shake, setShake] = useState(false)
    const [alert, setAlert] = useState<{ message: string; type: "success" | "error" | "warning" | "loading" } | null>(null);
    const [currentTaskEvaluatedAndSubmitted, setCurrentTaskEvaluatedAndSubmitted] = useState(false);

    useEffect(() => {
        if (!isInitialized.current) {
            setConversation(getRandomConversation());
            isInitialized.current = true; // Mark as initialized
        }
    }, []);

    const fetchNewConversation = () => {
        if (!currentTaskEvaluatedAndSubmitted) {
            setAlert({ message: "You need to submit and evaluate your response before moving to the next question.", type: "warning" });
            setTimeout(() => setAlert(null), 3000);
            return;
        }

        const newConversation = getRandomConversation();

        if (!newConversation) return;

        setConversation(newConversation);
        setAnswer(""); // Clear user input
        setWordCount(0);
        setEvaluation(null); // Reset evaluation
        setCurrentTaskEvaluatedAndSubmitted(false); // Allow new submission
        setTimeLeft(10 * 60);

        setAlert({ message: "✅ New question loaded!", type: "success" });
        setTimeout(() => setAlert(null), 3000);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        setWordCount(answer.trim().split(/\s+/).filter(word => word.length > 0).length)
    }, [answer])

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
    }

    const handleSubmit = async () => {
        if (wordCount < 100) {
            setShake(true); // Trigger shake animation
            setTimeout(() => setShake(false), 500); // Reset shake after animation
            setAlert({ message: "Your response must be at least 100 words.", type: "warning" });
            setTimeout(() => setAlert(null), 3000);
            return;
        }

        if (!answer.trim()) {
            return;
        }

        setIsSubmitting(true); // Start loading animation
        setAlert({ message: "⏳ Processing your response...", type: "loading" });

        try {
            const res = await fetch("/api/openai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    prompt: `You are a TOEFL test evaluator. You need to evaluate the following TOEFL Task 2 writing response and only return the following JSON format:
                    {
                        "score": 0-5,
                        "mistakes": ["Mistake 1", "Mistake 2", "Mistake 3"],
                        "corrections": ["Correction 1", "Correction 2", "Correction 3"],
                        "tips": ["Tip 1", "Tip 2", "Tip 3"]
                        "better_ans": "Better version of user's Answer"
                    }
                    Teacher_StateMent: "${conversation?.teacher_statement}"
                    Response: "${answer}"`
                }),
            });

            const data = await res.json();

            let evaluationData;
            try {
                evaluationData = typeof data.result === "string" ? JSON.parse(data.result) : data.result;
            } catch (error) {
                console.error("Error parsing OpenAI response:", error);
                setAlert({ message: "AI response is not in the correct format.", type: "error" });
                setTimeout(() => setAlert(null), 3000);
                setIsSubmitting(false);
                return;
            }

            if (evaluationData && evaluationData.score !== undefined) {
                setEvaluation(evaluationData);
                setAlert({ message: "Evaluation complete!", type: "success" });
                setTimeout(() => setAlert(null), 3000);

                setTimeout(() => {
                    evaluationRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 300);

                setCurrentTaskEvaluatedAndSubmitted(true)

                // ✅ Save completed Writing Task 2 question
                const progress = JSON.parse(localStorage.getItem("toefl_progress") || "{}");
                if (!progress.writing) progress.writing = {};
                if (!progress.writing.task2) progress.writing.task2 = { completedQuestionIds: [] };

                const doneSet = new Set(progress.writing.task2.completedQuestionIds);
                if (conversation?.id !== undefined) {
                    doneSet.add(conversation.id);
                }

                progress.writing.task2.completedQuestionIds = Array.from(doneSet);
                localStorage.setItem("toefl_progress", JSON.stringify(progress));
            } else {
                setAlert({ message: "Invalid AI response format.", type: "error" });
                setTimeout(() => setAlert(null), 3000);
            }
        } catch (error) {
            console.error("Error submitting response:", error);
            setAlert({ message: "Something went wrong.", type: "error" });
            setTimeout(() => setAlert(null), 3000);
        } finally {
            setIsSubmitting(false); // Stop loading animation
        }
    };

    const highlightDifferences = (original: string, improved: string) => {
        const dmp = new DiffMatchPatch();
        const diff = dmp.diff_main(original, improved);
        dmp.diff_cleanupSemantic(diff);

        const result = [];
        let lastRemoved = null;

        for (let i = 0; i < diff.length; i++) {
            const [operation, text] = diff[i];

            if (operation === -1) {
                // Store removed word (strike-through)
                lastRemoved = text;
            } else if (operation === 1) {
                // If a word was removed before, replace it with the new one
                if (lastRemoved) {
                    result.push(
                        <span key={i} className="bg-red-200 text-red-800 px-2 py-1 rounded mx-1 line-through">{lastRemoved}</span>,
                        <span key={i + "_new"} className="bg-green-200 text-green-800 px-2 py-1 rounded mx-1">{text}</span>
                    );
                    lastRemoved = null; // Reset after replacement
                } else {
                    // If nothing was removed, just highlight added word
                    result.push(
                        <span key={i} className="bg-green-200 text-green-800 px-2 py-1 rounded mx-1">{text}</span>
                    );
                }
            } else {
                // Unchanged words
                result.push(<span key={i} className="mx-1">{text}</span>);
            }
        }

        return result;
    };

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">TOEFL Writing Task 2</CardTitle>
                    <CardDescription>
                        Read the conversation and respond to the teacher's prompt in a well-organized essay of 300-350 words.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <AlarmClock className="mr-2 h-5 w-5" />
                            <span className="font-medium">{formatTime(timeLeft)}</span>
                        </div>
                        <div className="text-sm">Word Count: {wordCount} / 350</div>
                    </div>
                    <Progress value={(wordCount / 350) * 100} className="mb-4 " />
                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                        <h3 className="font-semibold mb-2">Conversation:</h3>
                        {conversation && <Conversation current_conversation={conversation} />}
                    </div>
                    <Textarea
                        placeholder="Type your response here..."
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className={`min-h-[200px] transition duration-150 ${shake ? "animate-shake border-red-500" : ""}`}
                    />
                </CardContent>

                <CardFooter className="flex justify-between">
                    <Button variant="outline" className="flex items-center">
                        <Save className="mr-2 h-4 w-4" /> Save Draft
                    </Button>
                    {currentTaskEvaluatedAndSubmitted ? (
                        <Button variant="outline" className="mb-4 animate-bounce" onClick={fetchNewConversation}>Get New Conversation</Button>
                    ) : (
                        <Button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className={`flex items-center px-4 py-2 rounded-lg ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                                } text-white font-medium transition duration-200`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 mr-2" fill="white" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <Send className="mr-2 h-4 w-4" /> Submit Answer
                                </>
                            )}
                        </Button>
                    )}
                </CardFooter>
            </Card>

            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="flex items-center w-full justify-between p-4">
                        <span className="flex items-center">
                            <HelpCircle className="mr-2 h-5 w-5" />
                            Writing Tips and Resources
                        </span>
                        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-gray-100 p-4 rounded-lg mt-2">
                    <h4 className="font-semibold mb-2">Tips for TOEFL Writing Task 2:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Analyze both perspectives presented in the conversation</li>
                        <li>Clearly state your own position on the topic</li>
                        <li>Use specific examples to support your arguments</li>
                        <li>Organize your essay with clear paragraphs</li>
                        <li>Use transition words to connect your ideas</li>
                        <li>Address the teacher's prompt directly in your response</li>
                        <li>Proofread your essay for grammar and spelling errors</li>
                    </ul>
                </CollapsibleContent>
            </Collapsible>

            {evaluation && (
                <Card ref={evaluationRef} className="mt-6 border border-gray-300 shadow-md rounded-lg sm:p-6">
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-bold">AI Evaluation</CardTitle>
                        <span className={`px-3 py-1 text-lg font-bold rounded-lg ${evaluation.score >= 4 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                            {evaluation.score} / 5
                        </span>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        {evaluation.mistakes?.length > 0 && (
                            <div className="p-4 border-l-4 border-red-500 bg-red-100 rounded-lg">
                                <h3 className="font-semibold text-red-600 flex items-center">
                                    ❌ Mistakes
                                </h3>
                                <ul className="list-disc pl-5 text-red-700">
                                    {evaluation.mistakes.map((mistake: string, index: number) => (
                                        <li key={index}>{mistake}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {evaluation.corrections?.length > 0 && (
                            <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded-lg">
                                <h3 className="font-semibold text-green-600 flex items-center">
                                    ✅ Corrections
                                </h3>
                                <ul className="list-disc pl-5 text-green-700">
                                    {evaluation.corrections.map((correction: string, index: number) => (
                                        <li key={index}>{correction}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {evaluation.tips?.length > 0 && (
                            <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded-lg">
                                <h3 className="font-semibold text-blue-600 flex items-center">
                                    💡 Tips for Improvement
                                </h3>
                                <ul className="list-disc pl-5 text-blue-700">
                                    {evaluation.tips.map((tip: string, index: number) => (
                                        <li key={index}>{tip}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {evaluation?.better_ans && (
                            <div className="p-4 border-l-4 border-yellow-500 bg-yellow-100 rounded-lg mt-4">
                                <h3 className="font-semibold text-yellow-600 flex items-center">
                                    ✨ AI's Improved Answer
                                </h3>
                                <p className="text-gray-700 mt-2 leading-relaxed">
                                    {highlightDifferences(answer, evaluation.better_ans)}
                                </p>
                            </div>
                        )}

                        {evaluation?.better_ans && (
                            <div className="p-4 border-l-4 border-purple-500 bg-purple-100 rounded-lg mt-4">
                                <h3 className="font-semibold text-purple-600 flex items-center">
                                    ✨ Final Answer (For Readability)
                                </h3>
                                <p className="text-gray-700 mt-2 leading-relaxed">
                                    {evaluation.better_ans}
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}

            {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}

        </div>
    )
}
