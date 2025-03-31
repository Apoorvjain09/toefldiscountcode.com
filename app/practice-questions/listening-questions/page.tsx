"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ChevronLeft, ChevronRight, HelpCircle, PlayCircle, Volume2 } from "lucide-react"
import { listeningQuestions } from "./listening-questions"
import { motion } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

type ListeningQuestion = {
    id: number;
    type: string;
    audioUrl: string;
    questions: {
        id: number;
        question: string;
        options: string[];
        audio_packet?: string;
        correctAnswer: string[];
        answer_explanation: string;
    }[];
};

const FallingFlowers = () => {
    const flowers = Array.from({ length: 15 });

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {flowers.map((_, i) => {
                const randomX = Math.random() * 100;
                const delay = Math.random() * 2;
                const duration = Math.random() * 4 + 3;

                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -100, x: `${randomX}%` }}
                        animate={{ opacity: 1, y: "100vh", rotate: 360 }}
                        transition={{ duration: duration, delay: delay, ease: "easeOut", repeat: Infinity }}
                        className="absolute text-4xl"
                        style={{ left: `${randomX}%`, color: ["#FF69B4", "#FFB6C1", "#FFC0CB"][i % 3] }}
                    >
                        🌸
                    </motion.div>
                );
            })}
        </div>
    );
};

export default function TOEFLListeningPractice() {
    const [selectedListeningQuestion, setSelectedListeningQuestion] = useState<ListeningQuestion | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isFirstInitializedOnPageLoad, setIsFirstInitializedOnPageLoad] = useState(false);
    const [showQuestionsAfterAudioEnded, setShowQuestionsAfterAudioEnded] = useState(false);
    const [userAnswerInput, setUserAnswerInput] = useState<(string | string[])[]>([]);
    const [isResultScoreDialogOpen, setIsResultScoreDialogOpen] = useState(false);
    const [resultscoreDetails, setResultScoreDetails] = useState({ correct: 0, total: 0, percentage: 0 });
    const [isReviewModeAfterSubmit, setIsReviewModeAfterSubmit] = useState(false);
    const questionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isFirstInitializedOnPageLoad) {
            const randomListening = listeningQuestions[Math.floor(Math.random() * listeningQuestions.length)];
            setSelectedListeningQuestion(randomListening);
            setIsFirstInitializedOnPageLoad(true);
        }
    }, [isFirstInitializedOnPageLoad]);


    if (!selectedListeningQuestion) return <p>Loading...</p>;

    const totalQuestions = selectedListeningQuestion.questions.length;

    const handleNext = () => {
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % totalQuestions);
    };

    const handlePrevious = () => {
        setCurrentQuestionIndex((prevIndex) => (prevIndex - 1 + totalQuestions) % totalQuestions);
    };

    const playBeepSound = () => {
        const audioCtx = new AudioContext();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = "sine";
        oscillator.frequency.value = 1000;
        gainNode.gain.value = 0.1;

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.2);
    };

    const handleAnswerChange = (selectedOption: string, isMultiSelect: boolean) => {
        setUserAnswerInput((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];

            if (isMultiSelect) {
                let currentSelections = Array.isArray(updatedAnswers[currentQuestionIndex])
                    ? [...(updatedAnswers[currentQuestionIndex] as string[])]
                    : [];

                if (currentSelections.includes(selectedOption)) {
                    currentSelections = currentSelections.filter((opt) => opt !== selectedOption);
                } else {
                    currentSelections.push(selectedOption);
                }

                updatedAnswers[currentQuestionIndex] = currentSelections; // ✅ Store as an array for multi-select
            } else {
                updatedAnswers[currentQuestionIndex] = selectedOption; // ✅ Store as a string for single-select
            }

            return updatedAnswers;
        });

    };

    const CalculateScoresAfterSubmit = () => {
        console.log(userAnswerInput)

        if (!selectedListeningQuestion) return;

        let correctCount = 0;
        let totalQuestions = selectedListeningQuestion.questions.length;

        selectedListeningQuestion.questions.forEach((question, index) => {
            const correctAnswers = question.correctAnswer;
            const userAnswers = userAnswerInput[index];

            const formattedUserAnswers = Array.isArray(userAnswers) ? userAnswers : [userAnswers];

            if (
                correctAnswers.length === formattedUserAnswers.length &&
                correctAnswers.every((ans) => formattedUserAnswers.includes(ans))
            ) {
                correctCount++;
            }
        });

        const scorePercentage = (correctCount / totalQuestions) * 100;

        setResultScoreDetails({ correct: correctCount, total: totalQuestions, percentage: scorePercentage });
        setIsResultScoreDialogOpen(true);
    };

    const GenerateNewQuestionAfterReview = () => {
        setIsReviewModeAfterSubmit(false);
        setResultScoreDetails({ correct: 0, total: 0, percentage: 0 })
        setUserAnswerInput([]);
        setCurrentQuestionIndex(0);
        setShowQuestionsAfterAudioEnded(false);
        setCurrentQuestionIndex(0);

        const newListening = listeningQuestions[Math.floor(Math.random() * listeningQuestions.length)];
        setSelectedListeningQuestion(newListening);
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8">
            <div className="mx-auto max-w-7xl">
                <header className="mb-8 flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between ">
                    <h1 className="text-3xl font-bold text-gray-800 text-center sm:text-start">TOEFL Listening Practice</h1>
                    <Button variant="outline">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Instructions
                    </Button>
                </header>

                <div className="grid gap-8 md:grid-cols-[1fr_300px]">
                    <main>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <Card className="mb-8 shadow-lg rounded-xl border border-gray-200 bg-white">
                                <CardHeader className="flex flex-col items-center">
                                    <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
                                        <Volume2 className="mr-3 h-6 w-6 text-purple-600" />
                                        Audio Player
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-5 shadow-inner">
                                        <audio
                                            controls
                                            className="w-full rounded-lg border border-gray-300 bg-white p-2 shadow-sm transition-all duration-200 hover:shadow-md focus:ring-2 focus:ring-purple-500"
                                            onEnded={() => {
                                                setShowQuestionsAfterAudioEnded(true);
                                                playBeepSound();
                                                setTimeout(() => {
                                                    questionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                                                }, 300);
                                            }}
                                        >
                                            <source src={selectedListeningQuestion.audioUrl} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {showQuestionsAfterAudioEnded && (
                            <motion.div
                                ref={questionRef}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl font-semibold">
                                            Question {currentQuestionIndex + 1}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent>
                                        <p className="text-gray-600">
                                            {selectedListeningQuestion.questions[currentQuestionIndex].question}
                                        </p>

                                        {selectedListeningQuestion.questions[currentQuestionIndex].audio_packet && (
                                            <audio controls autoPlay={!isReviewModeAfterSubmit} className="my-4 w-full rounded-lg border border-gray-300 bg-white p-2 shadow-sm transition-all duration-200 hover:shadow-md focus:ring-2 focus:ring-purple-500">
                                                <source
                                                    src={selectedListeningQuestion.questions[currentQuestionIndex].audio_packet}
                                                    type="audio/mpeg"
                                                />
                                                Your browser does not support the audio element.
                                            </audio>
                                        )}

                                        <div className="mt-4 space-y-2">
                                            <RadioGroup className="space-y-2" onValueChange={(value) => { !isReviewModeAfterSubmit && handleAnswerChange(value, selectedListeningQuestion.questions[currentQuestionIndex].correctAnswer.length > 1) }}>
                                                {selectedListeningQuestion.questions[currentQuestionIndex].options.map((option, index) => {
                                                    const isMultiSelect = selectedListeningQuestion.questions[currentQuestionIndex].correctAnswer.length > 1;
                                                    const userAnswer = userAnswerInput[currentQuestionIndex];

                                                    const isSelected = isMultiSelect
                                                        ? Array.isArray(userAnswer) && (userAnswer as string[]).includes(option)
                                                        : userAnswer === option;

                                                    const isCorrect = selectedListeningQuestion.questions[currentQuestionIndex].correctAnswer.includes(option);
                                                    const isWrong = isSelected && !isCorrect;
                                                    const isMissedCorrect = !isSelected && isCorrect && isReviewModeAfterSubmit;

                                                    return (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ scale: 1, backgroundColor: "#f9fafb", color: "#374151" }}
                                                            animate={{
                                                                scale: isSelected ? 1.05 : 1,
                                                                backgroundColor: isReviewModeAfterSubmit
                                                                    ? (isCorrect ? "#10B981" : (isWrong ? "#EF4444" : (isMissedCorrect ? "#3B82F6" : "#f9fafb")))
                                                                    : (isSelected ? "#a855f7" : "#f9fafb"),

                                                                color: isReviewModeAfterSubmit ? (isSelected ? "#ffffff" : (isWrong || isCorrect ? "#ffffff" : "#7D7F7C")) : (isSelected ? "#ffffff" : "#374151"),
                                                            }}
                                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                                            className={`flex items-center space-x-3 shadow p-4 rounded-lg cursor-pointer transition-all font-semibold
                                                                ${isSelected && "shadow-[0_10px_30px_rgba(160,32,240,0.7)]"}
                                                                ${isReviewModeAfterSubmit && isSelected && isCorrect && "shadow-[0_10px_30px_rgba(0,128,0,0.7)]"}
                                                                ${isReviewModeAfterSubmit && isSelected && isWrong && "shadow-[0_10px_30px_rgba(255,0,0,0.7)]"}`}
                                                            onClick={() => {
                                                                !isReviewModeAfterSubmit && handleAnswerChange(option, isMultiSelect);
                                                            }}
                                                        >
                                                            <RadioGroupItem value={option} id={`option-${index}`} checked={isSelected} />
                                                            <label htmlFor={`option-${index}`} className="cursor-pointer">
                                                                {option}
                                                            </label>
                                                        </motion.div>
                                                    )
                                                })}
                                            </RadioGroup>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="flex justify-between">
                                        <Button onClick={handlePrevious} disabled={currentQuestionIndex === 0} variant="outline">
                                            <ChevronLeft className="mr-2 h-4 w-4" />
                                            Previous
                                        </Button>
                                        <Button onClick={handleNext} disabled={currentQuestionIndex === totalQuestions - 1}>
                                            Next
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        )}
                    </main>

                    {!isReviewModeAfterSubmit && (
                        <aside>
                            {showQuestionsAfterAudioEnded && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: "auto" }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <Card className="mb-8">
                                        <CardHeader>
                                            <CardTitle className="text-lg font-semibold">Progress</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <Progress value={((currentQuestionIndex + 1) / totalQuestions) * 100} className="mb-2" />
                                            <p className="text-sm text-gray-600">
                                                Question {currentQuestionIndex + 1} of {totalQuestions}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )}

                            <Tabs defaultValue="notes" className="w-full">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="notes">Notes</TabsTrigger>
                                    <TabsTrigger value="transcript">Transcript</TabsTrigger>
                                </TabsList>
                                <TabsContent value="notes">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center text-lg font-semibold">
                                                <BookOpen className="mr-2 h-4 w-4" />
                                                Notes
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <motion.textarea
                                                initial={{ height: "10rem" }}
                                                animate={{ height: showQuestionsAfterAudioEnded ? "10rem" : "50vh" }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                className="w-full rounded-md border border-gray-300 p-2 transition-all duration-500"
                                                placeholder="Take notes here..."
                                            ></motion.textarea>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="transcript">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center text-lg font-semibold">
                                                <PlayCircle className="mr-2 h-4 w-4" />
                                                Transcript
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-gray-600">The transcript will be available after completing the test.</p>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </aside>
                    )}

                </div>

                {isReviewModeAfterSubmit && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Card className="mt-6 p-2 sm:p-6 shadow-xl rounded-lg border border-gray-200 bg-white">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                    <span className="text-green-600">✔</span> Explanation
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-gray-50 p-4 rounded-md border border-gray-300 text-gray-700 leading-relaxed space-y-2">
                                    {selectedListeningQuestion.questions[currentQuestionIndex].answer_explanation
                                        .split("\n")
                                        .map((line, index) => {
                                            const isCorrect = line.includes("✔️");
                                            const isIncorrect = line.includes("❌");

                                            return (
                                                <p
                                                    key={index}
                                                    className={`flex items-start gap-2 ${isCorrect ? "text-green-700 font-medium" : isIncorrect ? "text-red-600" : "text-gray-700"
                                                        }`}
                                                >
                                                    {isCorrect && <span className="text-green-600 text-xl">✅</span>}
                                                    {isIncorrect && <span className="text-red-500 text-xl">❌</span>}
                                                    {line.replace("✔️", "").replace("❌", "")}
                                                </p>
                                            );
                                        })}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}

                <footer className="mt-8 flex justify-center">
                    <Button
                        onClick={() => {
                            if (!isReviewModeAfterSubmit) {
                                CalculateScoresAfterSubmit();
                            } else {
                                GenerateNewQuestionAfterReview();
                            }
                        }}
                        disabled={!isReviewModeAfterSubmit && currentQuestionIndex !== totalQuestions - 1}

                        size="lg"
                        className="px-8">
                        {!isReviewModeAfterSubmit ? (currentQuestionIndex === totalQuestions - 1 ? "Submit Answers 🎉" : "Submit Answers") : "Generate New Question"}
                    </Button>

                    <Dialog open={isResultScoreDialogOpen} onOpenChange={setIsResultScoreDialogOpen}>
                        <DialogContent className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">

                            <FallingFlowers />

                            <DialogHeader>
                                <DialogTitle className="text-xl font-semibold text-center">Your Score</DialogTitle>
                            </DialogHeader>

                            <div className="flex flex-col items-center gap-4">
                                <p className="text-gray-700 text-lg">
                                    You scored <span className="font-bold">{resultscoreDetails.correct}</span> out of{" "}
                                    <span className="font-bold">{resultscoreDetails.total}</span>
                                </p>

                                {/* Progress Bar */}
                                <Progress value={resultscoreDetails.percentage} className="w-full" />
                                <p className="text-gray-600 text-sm">{resultscoreDetails.percentage.toFixed(2)}% correct</p>
                            </div>

                            <DialogFooter className="mt-4">
                                <Button
                                    onClick={() => {
                                        setIsResultScoreDialogOpen(false);
                                        setIsReviewModeAfterSubmit(true);
                                        setCurrentQuestionIndex(0);
                                    }}
                                    variant="outline"
                                    className="w-full">
                                    Review Answers
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </footer>
            </div>
        </div >
    )
}