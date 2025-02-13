"use client"

//test - add questions - push changes - show to mum

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "@/components/mode-toggle"
import { ArrowDownNarrowWideIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { quizData, Passage as QuizPassage } from "./reading-questions"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"; // Assuming you're using shadcn/ui
import LoadingSpinner from "@/components/ui/LoadingSpinner"
import { ChevronDown, ChevronUp } from "lucide-react";

interface Question {
    question?: string
    options: string[]
    correct_answer: string;
    answer_explanation: string;
    highlighted_sentence?: string;
    insertion_sentence?: string;
    insertion_passage?: string;
    summarization_intro_sentence?: string;
}

interface Passage {
    id: number
    passage: string
    questions: Question[]
}

export default function ToeflReadingTest() {
    const [currentPassage, setCurrentPassage] = useState<Passage | null>(null)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentSelectedAnswer, setCurrentSelectedAnswer] = useState<string | null>(null)
    const [totalSelectedAnswersString, setTotoalSelectedAnswersString] = useState<{ [key: number]: string }>({})
    const [showResultsModal, setShowResultsModal] = useState(false)
    const totalQuestions = currentPassage ? currentPassage.questions.length : 0
    const [insertion_passage_extracted, setInsertion_passage_extracted] = useState<string | null>(null);
    const currentQuestion = currentPassage ? currentPassage.questions[currentQuestionIndex] ?? null : null;
    const [changeTextSizeSmall, setChangeTextSizeSmall] = useState(false);
    const [showCardHeader, setShowCardHeader] = useState(true);
    const [highlightedPassage, setHighlightedPassage] = useState<string | null>(null);
    const [hidePassage_ShowDropBox, setHidePassage_ShowDropBox] = useState(false)
    const [selectedSummarizationOptions, setSelectedSummarizationOptions] = useState<string[]>([]);
    const [isExplanationModalOpen, setIsExplanationModalOpen] = useState(false);
    const [showAfterSubmmitedPrompts, setShowAfterSubmmitedPrompts] = useState(false);
    const [showSummarizationDirections, setShowSummarizationDirections] = useState(false);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

    const handleOptionSelect = (option: string) => {
        if (currentQuestion?.summarization_intro_sentence) {
            // Allow up to 3 options
            setSelectedSummarizationOptions((prev) =>
                prev.includes(option)
                    ? prev.filter((opt) => opt !== option) // Deselect if already selected
                    : prev.length < 3
                        ? [...prev, option] // Select new option if less than 3
                        : prev // Prevent selecting more than 3
            );
        } else {
            // Single-choice behavior for regular questions
            setCurrentSelectedAnswer(option);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex((prev) => prev + 1)
            setCurrentSelectedAnswer(totalSelectedAnswersString[currentQuestionIndex + 1] || null) // Restore previously selected answer
        } else {
            if (showAfterSubmmitedPrompts) {
                // Move to the next passage when all questions and review are done
                loadNextPassage();
            } else {
                // Show results modal when finishing the last question
                calculationResultsEnd();
                setShowResultsModal(true);
            }
        }
    }

    const calculationResultsEnd = () => {
        if (!currentPassage) return;

        let correctCount = 0;

        currentPassage.questions.forEach((question, index) => {
            const correctAnswerIndex = ["A", "B", "C", "D"].indexOf(question.correct_answer);
            const correctAnswer = correctAnswerIndex !== -1 ? question.options[correctAnswerIndex] : null;

            if (!question.summarization_intro_sentence) {
                if (totalSelectedAnswersString[index] === correctAnswer) {
                    correctCount++;
                }
            }
            else {
                const correctAnswersArray = question.correct_answer
                    .split("") // Convert "ACD" -> ["A", "C", "D"]
                    .map(letter => question.options[letter.charCodeAt(0) - 65]); // Convert to actual options

                // Check if user selected exactly the correct options
                const isCorrect = selectedSummarizationOptions.length === correctAnswersArray.length &&
                    selectedSummarizationOptions.every(option => correctAnswersArray.includes(option));

                if (isCorrect) {
                    correctCount++;
                }
            }
            // if selectedSummarizationOptions is equals to correctanswers then correctCount++
        });

        setCorrectAnswersCount(correctCount);
    };

    const loadNextPassage = () => {
        if (quizData.passages.length > 0) {
            const randomIndex = Math.floor(Math.random() * quizData.passages.length);
            const selectedPassage = quizData.passages[randomIndex];

            setCurrentPassage(selectedPassage);
            setCurrentQuestionIndex(0);
            setCurrentSelectedAnswer(null);
            setTotoalSelectedAnswersString({});
            setSelectedSummarizationOptions([]);
            setShowAfterSubmmitedPrompts(false);
            setShowResultsModal(false);

            if (selectedPassage.questions.length > 0) {
                setInsertion_passage_extracted(selectedPassage.questions[0].insertion_passage || null);
            }
        }
    };


    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1)
            setCurrentSelectedAnswer(totalSelectedAnswersString[currentQuestionIndex - 1] || null) // Restore previously selected answer
        }
    }

    const handleAnswerChange = (value: string) => {
        setCurrentSelectedAnswer(value)
        setTotoalSelectedAnswersString((prev) => ({ ...prev, [currentQuestionIndex]: value }))
    }

    useEffect(() => {
        if (quizData.passages.length > 0) {
            const randomIndex = Math.floor(Math.random() * quizData.passages.length);
            const selectedPassage = quizData.passages[randomIndex];

            setCurrentPassage(selectedPassage);
            setCurrentQuestionIndex(0); // Reset question index when new passage is loaded

            if (selectedPassage.questions.length > 0) {
                setInsertion_passage_extracted(selectedPassage.questions[0].insertion_passage || null);
            }
        }
    }, []);

    useEffect(() => {
        if (currentQuestion && currentQuestion.insertion_passage) {
            setInsertion_passage_extracted(currentQuestion.insertion_passage);
        } else {
            setInsertion_passage_extracted(null);
        }
    }, [currentQuestionIndex, currentPassage]);

    useEffect(() => {
        if (currentQuestion?.highlighted_sentence && currentPassage?.passage) {
            const updatedPassage = currentPassage.passage.replace(
                currentQuestion.highlighted_sentence,
                `<span class="bg-yellow-200">${currentQuestion.highlighted_sentence}</span>`
            );
            setHighlightedPassage(updatedPassage);
        } else {
            setHighlightedPassage(null);
        }
    }, [currentQuestion, currentPassage]);

    useEffect(() => {
        if (currentQuestion?.summarization_intro_sentence) {
            setHidePassage_ShowDropBox(true);
        } else {
            setHidePassage_ShowDropBox(false);
        }
    }, [currentQuestion]);

    if (!currentPassage) return <div className="text-center text-lg"><LoadingSpinner /></div>

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="container mx-auto p-4">
                <div className="space-y-8">
                    {/*                     
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold">TOEFL Reading Practice</h1>
                        <ModeToggle />
                    </div>

                    <Progress value={((currentQuestionIndex + 1) / totalQuestions) * 100} className="w-full" />
                     */}

                    <div className="grid gap-8 md:grid-cols-2">
                        <Card className={`md:row-span-2 ${showCardHeader ? "" : "pt-4"}`}>
                            {showCardHeader && (
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        <div className="flex gap-2">
                                            <ArrowDownNarrowWideIcon className="text-gray-500 cursor-pointer" onClick={() => { setShowCardHeader(false) }} />
                                            <div>Reading Passage</div>
                                        </div>
                                        <Button onClick={() => { setChangeTextSizeSmall(!changeTextSizeSmall) }}>Text Size</Button>
                                    </CardTitle>
                                </CardHeader>
                            )}
                            {!hidePassage_ShowDropBox ? (
                                <CardContent>
                                    <div className={`max-h-[60vh] ${showCardHeader ? "sm:max-h-[80vh]" : "sm:max-h-[100vh]"} overflow-y-auto pr-4 text-justify`}>
                                        <div
                                            className={`mb-2 ${changeTextSizeSmall ? "text-xs" : ""}`}
                                            dangerouslySetInnerHTML={{
                                                __html: (insertion_passage_extracted || highlightedPassage || currentPassage.passage).replace(/\n/g, "<br /><br/>")
                                            }}
                                        />
                                    </div>
                                </CardContent>
                            ) : (
                                <>
                                    <CardContent>
                                        <div className="p-4 border border-gray-300 rounded-lg">
                                            <h2 className="text-lg font-semibold"><span className="italic">{selectedSummarizationOptions.length > 0 && "ORDER - "}</span>Selected Answer</h2>

                                            {selectedSummarizationOptions.length > 0 ? (
                                                <div className="flex flex-wrap gap-2 my-10 space-y-1">
                                                    {selectedSummarizationOptions.map((option, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-3 bg-black text-white rounded-lg text-sm text-center font-semibold italic"
                                                        >
                                                            {option}
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-gray-500 italic">No options selected yet.</p>
                                            )}
                                        </div>
                                    </CardContent>
                                </>
                            )}
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <div>
                                        Question {currentQuestionIndex + 1}
                                    </div>
                                    {!showCardHeader && (
                                        <>
                                            <ArrowDownNarrowWideIcon className="text-gray-500 cursor-pointer" onClick={() => { setShowCardHeader(!showCardHeader) }} />
                                        </>
                                    )}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {!currentQuestion?.summarization_intro_sentence && (<p className="mb-4">{currentQuestion?.question}</p>)}
                                {currentQuestion?.insertion_sentence && (<p className="mb-5 font-bold italic">Sentence: {currentQuestion?.insertion_sentence}</p>)}

                                {currentQuestion?.summarization_intro_sentence ? (
                                    <div>
                                        <div className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
                                            <button
                                                onClick={() => setShowSummarizationDirections(!showSummarizationDirections)}
                                                className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 hover:text-blue-600 transition"
                                            >
                                                Directions
                                                {showSummarizationDirections ? (
                                                    <ChevronUp className="w-5 h-5 text-gray-500" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                                )}
                                            </button>
                                            <div
                                                className={`transition-all duration-300 overflow-hidden ${showSummarizationDirections ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                                                    }`}
                                            >
                                                <p className="text-gray-700 text-base leading-relaxed">
                                                    An introduction for a short summary of the passage appears below.
                                                    Complete the summary by selecting the <span className="font-bold">THREE</span> answer choices
                                                    that mention the most important points in the passage. Some sentences do not belong in the summary
                                                    because they express ideas that are not included in the passage or are minor points from the passage.
                                                </p>
                                                <p className="font-semibold italic text-gray-800 mt-2">
                                                    This question is worth 2 points.
                                                </p>
                                            </div>
                                        </div>
                                        {currentQuestion.options.map((option, index) => {
                                            const isStringAnsInOptions = currentQuestion.correct_answer
                                                .split("")
                                                .map(letter => currentQuestion.options[letter.charCodeAt(0) - 65]); // Convert to actual options

                                            const isCorrect = selectedSummarizationOptions.length === isStringAnsInOptions.length && selectedSummarizationOptions.every(option => isStringAnsInOptions.includes(option));
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => {
                                                        if (!showAfterSubmmitedPrompts) {
                                                            handleOptionSelect(option)
                                                        }
                                                    }}
                                                    className={`flex items-center justify-center p-3 mb-3 text-xs border rounded-lg transition-all duration-200 cursor-pointer 
                                                 ${selectedSummarizationOptions.includes(option)
                                                            ? `bg-gray-500 text-white border-gray-600 shadow-md ${isCorrect ? `${showAfterSubmmitedPrompts && "bg-green-400 shadow-[0_11px_20px_rgba(0,_255,_0,_0.7)] border-none"}` : `${showAfterSubmmitedPrompts && "bg-red-400 shadow-[0_11px_20px_rgba(255,_0,_0,_0.7)] border-none"}`}`
                                                            : "bg-white border-black/30 hover:bg-gray-50"
                                                        } 
                                                 ${!selectedSummarizationOptions.includes(option) && selectedSummarizationOptions.length >= 3 ? "opacity-50 cursor-not-allowed" : ""} 
                                             `}
                                                >
                                                    <span className="text-center w-full font-medium">{option}</span>
                                                </div>
                                            )
                                        })}
                                        <p className="mt-3 text-sm font-medium text-gray-700">
                                            {selectedSummarizationOptions.length}/3 selected
                                        </p>
                                    </div>
                                ) : (
                                    <RadioGroup value={currentSelectedAnswer || ""} onValueChange={handleAnswerChange}>
                                        {currentQuestion?.options.map((option, index) => {
                                            const answerLetters = ["A", "B", "C", "D"];

                                            // Convert correct answer letter (A, B, C, D) to full-length option
                                            const correctAnswerIndex = answerLetters.indexOf(currentQuestion.correct_answer ?? "");
                                            const ABCDtoOptionAnswer = correctAnswerIndex !== -1 ? currentQuestion.options[correctAnswerIndex] : null;

                                            // Compare the selected answer
                                            const isCorrect = currentSelectedAnswer === ABCDtoOptionAnswer;
                                            const isSelected = currentSelectedAnswer === option;

                                            return (
                                                <div
                                                    key={index}
                                                    className={`flex items-center space-x-2 mb-2 rounded-md transition-all duration-200 ${showAfterSubmmitedPrompts && isSelected
                                                        ? isCorrect
                                                            ? "bg-green-500 text-white shadow-[0_10px_20px_rgba(0,_255,_0,_0.7)] cursor-not-allowed p-3"
                                                            : "bg-red-500 text-white shadow-[0_10px_20px_rgba(255,_0,_0,_0.7)] cursor-not-allowed p-3"
                                                        : ""
                                                        }`}>
                                                    <RadioGroupItem value={option} id={`option-${index}`} disabled={showAfterSubmmitedPrompts} />
                                                    <Label htmlFor={`option-${index}`}
                                                    >
                                                        {option}
                                                    </Label>
                                                </div>
                                            )
                                        })}
                                    </RadioGroup>
                                )}
                                {showAfterSubmmitedPrompts && (<Button onClick={() => { setIsExplanationModalOpen(true) }} className="mt-4">Show Explanation</Button>)}
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex justify-between items-center">
                        <Button
                            variant="outline"
                            onClick={handlePrevious}
                            disabled={currentQuestionIndex === 0}
                        >
                            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>
                        <span className="text-sm text-muted-foreground">
                            Question {currentQuestionIndex + 1} of {totalQuestions}
                        </span>
                        <Button onClick={handleNext}>
                            {currentQuestionIndex === totalQuestions - 1 ? (showAfterSubmmitedPrompts ? "Next Passage" : "Submit") : "Next"}
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    <Dialog open={showResultsModal} onOpenChange={setShowResultsModal}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-xl font-semibold">Your Test Results</DialogTitle>
                            </DialogHeader>
                            <div className="text-center">
                                <p className="text-lg font-medium text-gray-800">
                                    You answered <span className="font-bold">{correctAnswersCount}</span> out of <span className="font-bold">{totalQuestions}</span> questions correctly!
                                </p>
                            </div>
                            <DialogFooter className="flex justify-between">
                                <button
                                    onClick={() => {
                                        setShowResultsModal(false);
                                        setShowAfterSubmmitedPrompts(true)
                                    }}
                                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={() => {
                                        setShowResultsModal(false);
                                        setShowAfterSubmmitedPrompts(true)
                                        setCurrentQuestionIndex(0);
                                        setCurrentSelectedAnswer(totalSelectedAnswersString[0] || null);
                                    }}
                                    className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
                                >
                                    Review
                                </button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    <Dialog open={isExplanationModalOpen} onOpenChange={setIsExplanationModalOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-xl font-semibold">Explanation</DialogTitle>
                            </DialogHeader>
                            <div className="overflow-y-auto h-[60vh] font-semibold text-sm leading-relaxed">
                                <div
                                    className={`mb-2 ${changeTextSizeSmall ? "" : "text-base"}`}
                                    dangerouslySetInnerHTML={{
                                        __html: (currentQuestion?.answer_explanation || "No explanation available for this question.").replace(/\n/g, "<br />")
                                    }}
                                />
                            </div>
                            <DialogFooter className="flex justify-end">
                                <button onClick={() => { setIsExplanationModalOpen(false) }} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                                    Close
                                </button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </main>
        </ThemeProvider >
    )
}

