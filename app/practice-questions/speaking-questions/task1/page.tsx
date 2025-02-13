"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AlertCircle, Mic, CheckCircle, XCircle } from "lucide-react"
import Alert from "@/components/ui/AlertNotification" // Import Alert component
import { InfoCircledIcon } from "@radix-ui/react-icons"
import { speakingTask1Questions } from "./speaking-task1-questions";
import { FaMicrophone } from "react-icons/fa"

const PREP_TIME = 15
const SPEAK_TIME = 45

type EvaluationType = {
    score: number;
    tips: string[];
    better_ans: string;
    better_ans2: string;
};


export default function SpeakingTask1() {
    const [stage, setStage] = useState<"idle" | "prep" | "speaking" | "review">("idle")
    const [time, setTime] = useState(PREP_TIME)
    const [isRecording, setIsRecording] = useState(false)
    const [audioUrl, setAudioUrl] = useState<string | null>(null)
    const [alert, setAlert] = useState<{ message: string; type: "success" | "error" | "loading" | "warning" } | null>(null)
    const [checkIfMicWorking, setCheckIfMicWorking] = useState<boolean | null>(null)
    const timerRef = useRef<NodeJS.Timeout>()
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const [progress, setProgress] = useState(0);
    const [transcribedTextSpeakingPhase, setTranscribedTextSpeakingPhase] = useState("");

    const [isExampleMicTestingIdlePhase, setIsExampleMicTestingIdlePhase] = useState(false);
    const [recordedAudioTestingIdlePhase, setRecordedAudioTestingIdlePhase] = useState<string | null>(null);
    const [transcribedTextTestingIdlePhase, setTranscribedTextTestingIdlePhase] = useState<string | null>(null);
    const [micStatusTestingIdlePhase, setMicStatusTestingIdlePhase] = useState<"idle" | "listening" | "success" | "failed">("idle");
    const mediaRecorderExampleTestingIdlePhase = useRef<MediaRecorder | null>(null);
    const [showMicPromptTestingIdlePhase, setShowMicPromptTestingIdlePhase] = useState(false);

    const [randomQuestion, setRandomQuestion] = useState<string | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentTaskEvaluatedAndSubmitted, setCurrentTaskEvaluatedAndSubmitted] = useState(false);
    const [currentQuestionDoneGenerateNewQuestion, setCurrentQuestionDoneGenerateNewQuestion] = useState(false)
    const [evaluation, setEvaluation] = useState<EvaluationType | null>(null);
    const evaluationRef = useRef<HTMLDivElement | null>(null);

    const ExampleMicTestingIdlePhase = async () => {
        setRecordedAudioTestingIdlePhase(null)
        try {
            setIsExampleMicTestingIdlePhase(true);
            setMicStatusTestingIdlePhase("listening");

            const streamExampleTestingIdlePhase = await navigator.mediaDevices.getUserMedia({ audio: true });
            const SpeechRecognitionExampleTestingIdlePhase = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognitionExampleTestingIdlePhase = new SpeechRecognitionExampleTestingIdlePhase();

            recognitionExampleTestingIdlePhase.continuous = false;
            recognitionExampleTestingIdlePhase.interimResults = false;
            recognitionExampleTestingIdlePhase.lang = "en-US";

            let chunksExampleTestingIdlePhase: BlobPart[] = [];

            mediaRecorderExampleTestingIdlePhase.current = new MediaRecorder(streamExampleTestingIdlePhase);
            mediaRecorderExampleTestingIdlePhase.current.ondataavailable = (event) => chunksExampleTestingIdlePhase.push(event.data);

            mediaRecorderExampleTestingIdlePhase.current.onstop = () => {
                const blobExampleTestingIdlePhase = new Blob(chunksExampleTestingIdlePhase, { type: "audio/ogg; codecs=opus" });
                setRecordedAudioTestingIdlePhase(URL.createObjectURL(blobExampleTestingIdlePhase));
            };

            recognitionExampleTestingIdlePhase.onresult = (event) => {
                const speechTranscriptExampleTestingIdlePhase = event.results[0][0].transcript;
                setTranscribedTextTestingIdlePhase(speechTranscriptExampleTestingIdlePhase);

                if (speechTranscriptExampleTestingIdlePhase.trim().length > 0) {
                    if (speechTranscriptExampleTestingIdlePhase.toLowerCase() === "peter love apples") {
                        setMicStatusTestingIdlePhase("success");
                    } else {
                        setAlert({ message: "Try saying: 'Peter love apples' clearly.", type: "error", });
                        setTimeout(() => { setAlert(null) }, 7000);
                    }
                } else {
                    setMicStatusTestingIdlePhase("failed");
                }
            };

            mediaRecorderExampleTestingIdlePhase.current.start();
            recognitionExampleTestingIdlePhase.start();

            setTimeout(() => {
                mediaRecorderExampleTestingIdlePhase.current?.stop();
                recognitionExampleTestingIdlePhase.stop();

                setIsExampleMicTestingIdlePhase(false);
            }, 4000); // Record for 4 seconds

            setCheckIfMicWorking(true);

        } catch (error) {
            console.error("Microphone test failed:", error);
            setMicStatusTestingIdlePhase("failed");
        }
    };

    useEffect(() => {
        if (!isInitialized) {
            const newQuestion = speakingTask1Questions[Math.floor(Math.random() * speakingTask1Questions.length)];
            setRandomQuestion(newQuestion.question);
            setIsInitialized(true);
        }
    }, [isInitialized]);

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (stage === "speaking") {
            setProgress(0); // Reset progress when switching to speaking
        }

        if (stage === "prep" || stage === "speaking") {
            let start = Date.now();
            let totalTime = stage === "prep" ? PREP_TIME : SPEAK_TIME;

            const updateProgress = () => {
                const elapsedTime = (Date.now() - start) / 1000; // Convert ms to seconds
                const percentage = Math.min((elapsedTime / totalTime) * 100, 100);
                const remainingTime = Math.max(totalTime - elapsedTime, 0); //to set setTime

                setProgress(percentage);
                setTime(Math.ceil(remainingTime))

                if (elapsedTime < totalTime) {
                    requestAnimationFrame(updateProgress);
                }
            };

            requestAnimationFrame(updateProgress);
        } else {
            setProgress(0); // Reset progress when idle or review
        }
    }, [stage]);

    useEffect(() => {
        if (time === 0 && isRecording) {
            stopRecording();
        }
    }, [time]);

    const startPrep = () => {
        setStage("prep")
        setTimeout(() => {
            setStage("speaking")
            startRecording()
        }, PREP_TIME * 1000)
    }

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            const chunks: BlobPart[] = [];

            // Speech Recognition Setup
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = "en-US"; // Set language

            recognition.onresult = (event) => {
                let newTranscript = "";

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) { // Only capture completed phrases
                        newTranscript += event.results[i][0].transcript + " ";
                    }
                }


                if (newTranscript.trim()) {
                    setTranscribedTextSpeakingPhase((prevTranscript) => prevTranscript + " " + newTranscript.trim()); // Append new words
                }
                console.log("Recognized speech", transcribedTextSpeakingPhase)
            };

            mediaRecorderRef.current.ondataavailable = (e) => chunks.push(e.data);
            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
                setAudioUrl(URL.createObjectURL(blob));
                recognition.stop(); // Stop recognition when recording stops
            };

            mediaRecorderRef.current.start();
            recognition.start(); // Start speech recognition
            setIsRecording(true);

            setTimeout(() => {
                stopRecording();
            }, SPEAK_TIME * 1000);
        } catch (error) {
            console.error("Error accessing microphone:", error);
            setAlert({
                message: "Unable to access microphone. Please check your permissions.",
                type: "error",
            });
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            setStage("review");
        }
    };

    const SubmitRecording = async () => {
        setIsSubmitting(true); // Start loading animation
        setAlert({ message: "⏳ Processing passage evaluation...", type: "loading" });

        if (!transcribedTextSpeakingPhase.trim()) {
            setAlert({ message: "⚠️ No speech detected! Please try again.", type: "error" });
            setTimeout(() => setAlert(null), 3000);
            console.log("hi", transcribedTextSpeakingPhase)
            return;
        }

        try {
            const res = await fetch("/api/openai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    prompt: `
                    You are a TOEFL Speaking Task 1 evaluator. Your job is to analyze the following response based on TOEFL's scoring criteria: fluency, coherence, grammar, and vocabulary.

                    Return only the following JSON format:
                    {
                      "score": 0-5, // TOEFL speaking score (integer)
                      "tips": ["Tip 1", "Tip 2", "Tip 3"], // Actionable tips for improvement
                      "better_ans": "Rephrased version of User's Answer" // AI-generated approx 150 word response
                      "better_ans2": "Second Rephrased version of User's Answer" // AI-generated approx 150 word response
                    }
                                    
                    Strictly follow the JSON format with no extra explanations.
                                    
                    Passage: "${randomQuestion}"  
                    User's Answer: "${transcribedTextSpeakingPhase}"
                    `
                }),
            });
            console.log(randomQuestion)
            console.log(transcribedTextSpeakingPhase)
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

    const resetPractice = () => {
        setStage("idle")
        setTime(PREP_TIME)
        setAudioUrl(null)
        if (timerRef.current) {
            clearInterval(timerRef.current)
        }
    }

    const handleStartMicTestExampleTestingIdlePhase = async () => {
        try {
            // Request microphone permissions before showing the dialog
            await navigator.mediaDevices.getUserMedia({ audio: true });
            setShowMicPromptTestingIdlePhase(true); // Show confirmation dialog
        } catch (error) {
            console.error("Microphone permission denied:", error);
            setAlert({ message: "Microphone access is required to proceed.", type: "error" });
        }
    };

    const confirmMicTestExampleTestingIdlePhase = () => {
        setShowMicPromptTestingIdlePhase(false); // Hide dialog
        ExampleMicTestingIdlePhase(); // Start mic test
    };

    const GenerateNewQuestion = () => {

        const newQuestion = speakingTask1Questions[Math.floor(Math.random() * speakingTask1Questions.length)];

        setRandomQuestion(newQuestion.question);
        setStage("idle");
        setTime(PREP_TIME);
        setAudioUrl(null);
        setEvaluation(null);
        setTranscribedTextSpeakingPhase("");
        setCurrentTaskEvaluatedAndSubmitted(false);

        setCurrentQuestionDoneGenerateNewQuestion(true)
    };

    return (
        <div className="container mx-auto py-8">
            {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}

            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader className="mb-2 sm:mb-0">
                    <CardTitle className="flex items-center justify-between">
                        <span>Speaking Task 1</span>
                        {stage !== "idle" && <span className="text-2xl font-bold">{time}s</span>}
                    </CardTitle>
                </CardHeader>

                {((checkIfMicWorking === null || checkIfMicWorking === false) || stage !== "prep" && stage !== "speaking" && stage !== "review") ? (
                    <>
                        <CardContent className="text-center mb-4">
                            <>
                                {/* Button to Start Mic Test with Confirmation */}
                                <Button onClick={handleStartMicTestExampleTestingIdlePhase} variant="outline" disabled={isExampleMicTestingIdlePhase}>
                                    {isExampleMicTestingIdlePhase ? (
                                        <>
                                            <Mic className="mr-2 h-5 w-5 animate-spin" /> Testing...
                                        </>
                                    ) : (
                                        <>
                                            <Mic className="mr-2 h-5 w-5" /> Test Microphone {(micStatusTestingIdlePhase === "listening" && !isExampleMicTestingIdlePhase) && "{Again}"}
                                        </>
                                    )}
                                </Button>

                                {/* Confirmation Dialog */}
                                <Dialog open={showMicPromptTestingIdlePhase} onOpenChange={setShowMicPromptTestingIdlePhase}>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Microphone Test</DialogTitle>
                                        </DialogHeader>
                                        <div className="text-center">
                                            <p className="text-lg font-medium text-gray-800">Say: <span className="text-blue-600 font-bold">"Peter love apples"</span></p>
                                            <p className="text-gray-600 text-sm mt-2">We will check if your microphone is working correctly.</p>
                                        </div>
                                        <div className="flex justify-end gap-4 mt-4">
                                            <Button variant="outline" onClick={() => setShowMicPromptTestingIdlePhase(false)}>Cancel</Button>
                                            <Button onClick={confirmMicTestExampleTestingIdlePhase}>Okay</Button>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </>

                            {!currentQuestionDoneGenerateNewQuestion && (
                                <>
                                    <div className="flex justify-center items-center mt-3">
                                        {micStatusTestingIdlePhase === "listening" && (
                                            <span className="flex items-center text-blue-600">
                                                <Mic className="h-5 w-5 mr-2 animate-pulse" /> Speak now...
                                            </span>
                                        )}

                                        {micStatusTestingIdlePhase === "success" && (
                                            <span className="flex items-center text-green-600">
                                                <CheckCircle className="h-5 w-5 mr-2" /> Microphone is working!
                                            </span>
                                        )}

                                        {micStatusTestingIdlePhase === "failed" && (
                                            <span className="flex items-center text-red-600">
                                                <XCircle className="h-5 w-5 mr-2" /> Microphone is not working!
                                            </span>
                                        )}
                                    </div>

                                    {transcribedTextTestingIdlePhase && (
                                        <p className="mt-2 text-sm text-gray-700">
                                            <strong>Recognized Speech:</strong> "{transcribedTextTestingIdlePhase}"
                                        </p>
                                    )}

                                    {recordedAudioTestingIdlePhase && (
                                        <audio controls className="mx-auto mt-4">
                                            <source src={recordedAudioTestingIdlePhase} type="audio/ogg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    )}
                                </>
                            )}

                        </CardContent>
                    </>
                ) : (
                    <>
                        <CardContent>
                            <p className="mb-4">
                                {randomQuestion}
                            </p>
                            <Progress
                                value={progress}
                                className="mb-4 transition-[width] duration-500 ease-linear"
                            />
                            {stage === "speaking" && (
                                <div className="flex items-center justify-center h-16">
                                    <Mic className="w-8 h-8 text-red-500 animate-pulse" />
                                </div>
                            )}
                            {/* {stage === "review" && audioUrl && <audio src={audioUrl} controls className="w-full mt-4" />} */}
                        </CardContent>
                    </>
                )}

                <CardFooter className="flex justify-between flex-col sm:flex-row gap-5">
                    {stage === "idle" && <Button onClick={startPrep} disabled={(!checkIfMicWorking || !transcribedTextTestingIdlePhase || micStatusTestingIdlePhase !== "success")} className={`${currentQuestionDoneGenerateNewQuestion && "animate-bounce"}`}>{currentQuestionDoneGenerateNewQuestion ? "Generate New Question" : "Start Practice"}</Button>}
                    {(stage === "prep" || stage === "speaking" || stage === "review") && (<Button variant="default" onClick={SubmitRecording} disabled={stage === "prep" || isRecording || isSubmitting || currentTaskEvaluatedAndSubmitted}> Submit  </Button>)}
                    {/* {stage === "review" && <Button onClick={resetPractice}>Try Again</Button>} */}

                    {!checkIfMicWorking ? (
                        <div className="">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="link" className="text-blue-600">
                                        How to Enable Microphone?
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Enable Microphone Access</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-3 text-gray-700">
                                        <p className="flex items-center flex-wrap gap-1">
                                            <div>1. Click on the lock icon 🔒 /</div>
                                            <InfoCircledIcon className="h-6 w-6 mx-1" />
                                            <div>next to the website URL.</div>
                                        </p>
                                        <p>2. Find "Microphone" and select "Allow".</p>
                                        <p>3. Refresh the page and test your microphone again.</p>
                                    </div>
                                    <Button onClick={ExampleMicTestingIdlePhase} className="w-full mt-4">
                                        Retry Microphone Test
                                    </Button>
                                </DialogContent>
                            </Dialog>
                        </div>
                    ) : (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">
                                    <AlertCircle className="mr-2 h-4 w-4" /> Instructions
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Task Instructions</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <p>1. You will have 15 seconds to prepare your response.</p>
                                    <p>2. Then, you will have 45 seconds to speak about the topic.</p>
                                    <p>3. Your response will be recorded automatically.</p>
                                    <p>4. Try to speak clearly and provide specific details in your answer.</p>
                                </div>
                            </DialogContent>
                        </Dialog>
                    )}

                </CardFooter>
            </Card >

            {evaluation && (
                <Card ref={evaluationRef} className="mt-6 border border-gray-300 shadow-md rounded-lg sm:p-6">
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-bold">AI Evaluation</CardTitle>
                        <span className={`px-3 py-1 text-lg font-bold rounded-lg ${evaluation.score >= 4 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                            {evaluation.score} / 5
                        </span>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        {/* {evaluation.grammar_mistakes?.length > 0 && (
                            <div className="p-4 border-l-4 border-red-500 bg-red-100 rounded-lg">
                                <h3 className="font-semibold text-red-600 flex items-center">
                                    ❌ Mistakes
                                </h3>
                                <ul className="list-disc pl-5 text-red-700">
                                    {evaluation.grammar_mistakes.map((mistake: string, index: number) => (
                                        <li key={index}>{mistake}</li>
                                    ))}
                                </ul>
                            </div>
                        )} */}

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

                        {evaluation.better_ans?.length > 0 && (
                            <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded-lg">
                                <h3 className="font-semibold text-green-600 flex items-center">
                                    ✅ AI's Improved Answer 1
                                </h3>
                                <ul className="list-disc pl-5 text-green-700">
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        {/* {highlightDifferences(answer, evaluation.better_ans)} */}
                                        {evaluation.better_ans}
                                    </p>
                                </ul>
                            </div>
                        )}


                        {evaluation?.better_ans2 && (
                            <div className="p-4 border-l-4 border-yellow-500 bg-yellow-100 rounded-lg mt-4">
                                <h3 className="font-semibold text-yellow-600 flex items-center">
                                    ✨ AI's Improved Answer 2
                                </h3>
                                <ul className="list-disc pl-5 text-yellow-700">
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        {/* {highlightDifferences(answer, evaluation.better_ans)} */}
                                        {evaluation.better_ans2}
                                    </p>
                                </ul>

                            </div>
                        )}
                    </CardContent>

                    <CardFooter>
                        {(currentTaskEvaluatedAndSubmitted && (<Button onClick={GenerateNewQuestion}>Next</Button>))}
                    </CardFooter>
                </Card>
            )
            }

        </div >
    )
}
