"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { PlayCircle, PauseCircle, RotateCcw, Clock, Send } from "lucide-react"
import Alert from "@/components/ui/AlertNotification"
import { writingTask1Questions } from "./writing-task1-questions"
import DiffMatchPatch from "diff-match-patch";

type QuestionType = {
    id: number;
    task_audio: string;
    task_image: string;
    task_passage: string;
};

type EvaluationType = {
    score: number;
    mistakes: string[];
    corrections: string[];
    tips: string[];
    better_ans: string;
};

export default function ToeflWritingTask1() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [audioProgress, setAudioProgress] = useState(0)
    const [showPassage, setShowPassage] = useState(true)
    const [answer, setAnswer] = useState("")
    const [alert, setAlert] = useState<{ message: string; type: "success" | "error" | "loading" | "warning" } | null>(null)
    const [showAudio, setShowAudio] = useState(false)
    const [showResponseTextArea, setShowResponseTextArea] = useState(false)
    const [timer, setTimer] = useState(180) // 3 min (180 sec) countdown
    const [showMainTimer, setShowMainTimer] = useState(false) // Show 20-min timer after audio ends
    const [mainTimer, setMainTimer] = useState(1200) // 20 min (1200 sec) countdown
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [evaluation, setEvaluation] = useState<EvaluationType | null>(null);
    const evaluationRef = useRef<HTMLDivElement | null>(null);
    const [currentTaskEvaluatedAndSubmitted, setCurrentTaskEvaluatedAndSubmitted] = useState(false);

    const [randomQuestion, setRandomQuestion] = useState<QuestionType | null>(null);

    useEffect(() => {
        if (randomQuestion === null) {
            const selectedQuestion = writingTask1Questions[Math.floor(Math.random() * writingTask1Questions.length)];
            setRandomQuestion(selectedQuestion);
        }
    }, [randomQuestion]);

    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        const updateProgress = () => {
            if (audioRef.current) {
                const current = audioRef.current.currentTime;
                const duration = audioRef.current.duration || 1;
                setAudioProgress((current / duration) * 100);
            }
        };

        const handleAudioEnd = () => {
            setShowPassage(true);
            setIsPlaying(false);
            setShowResponseTextArea(true);
            setShowMainTimer(true);
        };

        audioRef.current?.addEventListener("timeupdate", updateProgress);
        audioRef.current?.addEventListener("ended", handleAudioEnd);
        return () => {
            audioRef.current?.removeEventListener("timeupdate", updateProgress);
            audioRef.current?.removeEventListener("ended", handleAudioEnd);
        };
    }, [isPlaying]);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prev) => prev - 1)
            }, 1000);
            return () => clearInterval(countdown);
        } else {
            setShowAudio(true);
            setShowPassage(false);
        }
    }, [timer]);

    useEffect(() => {
        if (showMainTimer && mainTimer > 0) {
            const countdown = setInterval(() => {
                setMainTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(countdown);
        }
    }, [showMainTimer, mainTimer]);

    const fetchNewQuestionSet = () => {
        // Select a new random question
        const newQuestion = writingTask1Questions[Math.floor(Math.random() * writingTask1Questions.length)];

        setRandomQuestion(newQuestion);
        setAnswer(""); // Clear previous answer
        setEvaluation(null); // Clear evaluation results
        setIsSubmitting(false); // Ensure submit button resets
        setShowPassage(true); // Reset passage visibility
        setShowAudio(false); // Hide audio initially
        setShowResponseTextArea(false); // Hide response textarea initially
        setTimer(180); // Reset 3 min timer for new audio
        setMainTimer(1200); // Reset 20 min writing timer
        setShowMainTimer(false); // Ensure writing timer starts only after audio ends
        setAudioProgress(0); // Reset audio progress
        setIsPlaying(false); // Reset play state
        setCurrentTaskEvaluatedAndSubmitted(false);

        // Reset scroll position to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const formatTime = (seconds: number) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    };

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    const handleReset = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        setIsPlaying(false);
        setAudioProgress(0);
        setShowPassage(false);
        setShowResponseTextArea(false);
        setAnswer("");
        setShowMainTimer(false);
        setMainTimer(1200);
    }

    const handleSubmit = async () => {
        setIsSubmitting(true); // Start loading animation
        setAlert({ message: "⏳ Processing passage evaluation...", type: "loading" });

        try {
            const res = await fetch("/api/openai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    prompt: `You are a TOEFL test evaluator. You need to evaluate the following TOEFL Task 1 passage and return only the following JSON format:
                     {
                        "score": 0-5,
                        "mistakes": ["Mistake 1", "Mistake 2", "Mistake 3"],
                        "corrections": ["Correction 1", "Correction 2", "Correction 3"],
                        "tips": ["Tip 1", "Tip 2", "Tip 3"]
                        "better_ans": "Better version of user's Answer"
                    }
                    Passage: "${randomQuestion?.task_passage}"
                    User's Answer:"${answer}"`
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
                setAlert({ message: "✅ Passage evaluation complete!", type: "success" });
                setTimeout(() => setAlert(null), 3000);

                setTimeout(() => {
                    evaluationRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 300);

                setCurrentTaskEvaluatedAndSubmitted(true);
            } else {
                setAlert({ message: "Invalid AI response format. Try Again!", type: "error" });
                console.log(evaluationData)
                setTimeout(() => setAlert(null), 3000);
            }
        } catch (error) {
            console.error("Error submitting passage:", error);
            setAlert({ message: "❌ Something went wrong.", type: "error" });
            setTimeout(() => setAlert(null), 3000);
        } finally {
            setIsSubmitting(false); // Stop loading animation
        }
    }

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
        <div className="container mx-auto py-8">
            <Card className="w-full max-w-3xl mx-auto">
                {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}

                {showAudio && (
                    <>
                        <CardHeader>
                            <CardTitle>Listen to the audio and write your response</CardTitle>
                        </CardHeader>
                    </>
                )}

                <CardContent className="space-y-6">
                    {showAudio && (
                        <div className="space-y-4">
                            <div className="flex flex-col items-center">
                                <img src={randomQuestion?.task_image} alt="Task Illustration" className="rounded-lg shadow-lg w-full max-w-sm mb-4" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Button variant="outline" size="icon" onClick={handlePlayPause}>
                                    {isPlaying ? <PauseCircle className="h-4 w-4" /> : <PlayCircle className="h-4 w-4" />}
                                </Button>
                                <Progress value={audioProgress} className="w-full mx-4" />
                                <Button variant="outline" size="icon" onClick={handleReset}>
                                    <RotateCcw className="h-4 w-4" />
                                </Button>
                            </div>
                            <audio ref={audioRef} src={randomQuestion?.task_audio} className="w-full" />
                            <p className="text-sm text-muted-foreground">
                                {isPlaying ? "Listening..." : audioProgress === 100 ? "Audio completed" : "Click play to start"}
                            </p>
                        </div>
                    )}

                    {showPassage && (
                        <div className="space-y-4 mt-5">
                            <h3 className="text-lg font-semibold">Passage</h3>
                            <div className="text-sm text-gray-700">
                                {randomQuestion?.task_passage.split("\n").map((line, index) => (
                                    <>
                                        <p key={index}>{line}</p><br />
                                    </>
                                ))}
                            </div>
                            {showResponseTextArea && (
                                <div className="space-y-2">
                                    <label htmlFor="answer" className="text-sm font-medium">
                                        Your Response
                                    </label>
                                    <Textarea
                                        id="answer"
                                        placeholder="Type your answer here..."
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                        rows={8}
                                        className="border border-gray-300 rounded-lg p-2"
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        {showMainTimer ? `Time remaining: ${formatTime(mainTimer)}` : timer > 0 ? `Audio in: ${formatTime(timer)}` : ""}
                    </div>
                    {currentTaskEvaluatedAndSubmitted ? (
                        <Button variant="outline" className="mb-4 animate-bounce" onClick={fetchNewQuestionSet}>Get New Conversation</Button>
                    ) : (
                        <Button onClick={handleSubmit} disabled={isSubmitting || !showPassage || answer.trim().length === 0}>
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
                                    <Send className="mr-2 h-4 w-4" /> Submit
                                </>)}
                        </Button>
                    )}
                </CardFooter>
            </Card>

            {evaluation && (
                <Card ref={evaluationRef} className="mt-6 border border-gray-300 shadow-md rounded-lg p-6">
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
        </div>
    )
}
