"use client"

import React, { useState, useEffect, useRef } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { MdError } from "react-icons/md";
import ReactAudioPlayer from 'react-audio-player';
import Draggable from 'react-draggable';
import WritingSection from './WritingSection';
import SpeakingSection from './SpeakingSection';
import ResultsDashboard from './ResultsDashboard';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import AfterTestDetailsModal from '@/components/tests-ui/AfterTestDetailsModal';
import { X } from 'lucide-react';

interface ReadingQuestion {
    id: number;
    passage?: string;
    question: string;
    options: string[];
    answer: number;
    summaryAnswer?: number[];
    highlight?: string
    instructions?: string
    introductorySentence?: string
}

export interface ListeningQuestion {
    id: number;
    question: string;
    options: string[];
    answer: number;
    audio: string;
}

const ReadingListeningSection = () => {
    const DraggableModalRef = useRef(null);
    const [isReducedFontSize, setIsReducedFontSize] = useState(false)
    const [isAfterTestDetailsModalopen, setIsAfterTestDetailsModalopen] = useState(false)
    const [tryReloadAudio, setTryReloadAudio] = useState(0);
    const [stage, setStage] = useState<'instructions' | 'reading' | 'readingPassage1' | 'readingSummaryQuestions1' | 'readingPassage2' | 'readingSummaryQuestions2' | 'listeningInstructions' | 'listeningConversation1' | 'listeningQuestions1' | 'listeningConversation2' | 'listeningQuestions2' | 'listeningConversation3' | 'listeningQuestions3' | 'listeningConversation4' | 'listeningQuestions4' | 'listeningConversation5' | 'listeningQuestions5' | 'writing' | 'speaking' | 'resultsDashboard'>('instructions');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>(Array(20).fill(-1));
    const [listeningAnswers, setListeningAnswers] = useState<number[]>(Array(28).fill(-1));
    const [currentListeningQuestion, setCurrentListeningQuestion] = useState(0);
    const [selectedAnswers1, setSelectedAnswers1] = useState<number[]>([]);
    const [selectedAnswers2, setSelectedAnswers2] = useState<number[]>([]);
    const [totalScoreReading, setTotalScoreReading] = useState<number>(0);
    const [totalScoreListening, setTotalScoreListening] = useState<number>(0);
    const [writingScores, setWritingScores] = useState<{ task1: { score: number; feedback: string } | null, task2: { score: number; feedback: string } | null }>({
        task1: null,
        task2: null,
    });
    const [speakingScores, setSpeakingScores] = useState<{
        task1: { score: number; feedback: string } | null,
        task2: { score: number; feedback: string } | null,
        task3: { score: number; feedback: string } | null,
        task4: { score: number; feedback: string } | null
    }>({
        task1: null,
        task2: null,
        task3: null,
        task4: null,
    });

    const pathname = usePathname();
    const id = pathname.split('/').pop();

    if (!id) {
        return <div>Loading...</div>;
    }

    let readingQuestions: any;
    let listeningQuestions: any;
    let listeningAudios: any;
    let listeningAudiosPhotos: any;

    try {
        const questionsModule = require(`../questions/${id}`);
        readingQuestions = questionsModule.readingQuestions;
        listeningQuestions = questionsModule.listeningQuestions;
        listeningAudios = questionsModule.listeningAudios;
        listeningAudiosPhotos = questionsModule.listeningAudiosPhotos;
    } catch (error) {
        console.error(`Questions file for Test ${id} not found.`);
        return <div>Test questions not found.</div>;
    }

    const handleContinueClick = () => {
        if (stage === 'instructions') {
            setStage('reading');
        } else if (stage === 'reading') {
            setStage('readingPassage1');
        } else if (stage === 'readingPassage1' && currentQuestion + 1 >= 9) {
            setStage('readingSummaryQuestions1');
        } else if (stage === 'readingSummaryQuestions1') {
            setStage('readingPassage2');
        } else if (stage === 'readingPassage2' && currentQuestion + 1 >= 19) {
            setStage('readingSummaryQuestions2');
        } else if (stage === 'readingSummaryQuestions2') {
            setStage('listeningInstructions');
        } else if (stage === 'listeningInstructions') {
            setStage('listeningConversation1');
        } else if (stage === 'listeningConversation1') {
            setStage('listeningQuestions1');
        } else if (stage === 'listeningQuestions1') {
            setStage('listeningConversation2');
            setCurrentQuestion(0); // Reset current question for next set of questions
        } else if (stage === 'listeningConversation2') {
            setStage('listeningQuestions2');
        } else if (stage === 'listeningQuestions2') {
            setStage('listeningConversation3');
            setCurrentQuestion(0); // Reset current question for next set of questions
        } else if (stage === 'listeningConversation3') {
            setStage('listeningQuestions3');
        } else if (stage === 'listeningQuestions3') {
            setStage('listeningConversation4');
            setCurrentQuestion(0); // Reset current question for next set of questions
        } else if (stage === 'listeningConversation4') {
            setStage('listeningQuestions4');
        } else if (stage === 'listeningQuestions4') {
            setStage('listeningConversation5');
            setCurrentQuestion(0); // Reset current question for next set of questions
        } else if (stage === 'listeningConversation5') {
            setStage('listeningQuestions5');
        } else if (stage === 'listeningQuestions5') {
            calculateScore(); // Calculate score when all questions are answered
            setStage('writing');
        } else if (stage === 'writing') {
            setStage('speaking');
        }
    };

    const handleOptionChange = (questionIndex: number, optionIndex: number) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);
    };

    const handleListeningOptionChange = (questionIndex: number, optionIndex: number) => {
        const newAnswers = [...listeningAnswers];
        newAnswers[questionIndex] = optionIndex;
        setListeningAnswers(newAnswers);
    };

    const calculateScore = () => {
        console.log(answers)
        let readingScore = 0;
        let listeningScore = 0;

        // Calculate Reading Score for Passage Questions
        readingQuestions.forEach((question: ReadingQuestion, index: number) => {
            if (answers[index + 1] === question.answer) {
                readingScore++;
            }
        });

        const correctSummaryAnswers1 = readingQuestions.find((q: ReadingQuestion) => q.id === 10)?.summaryAnswer || [];
        const correctSummaryAnswers2 = readingQuestions.find((q: ReadingQuestion) => q.id === 20)?.summaryAnswer || [];

        // Check if selected summary answers match correct answers
        console.log(selectedAnswers1)
        if (arraysMatch(selectedAnswers1, correctSummaryAnswers1)) {
            readingScore += 2;
        }
        if (arraysMatch(selectedAnswers2, correctSummaryAnswers2)) {
            readingScore += 2;
        }

        // Calculate Listening Score
        listeningQuestions.forEach((question: ReadingQuestion, index: number) => {
            if (listeningAnswers[index] === question.answer) {
                listeningScore++;
            }
        });

        const totalScore = readingScore + listeningScore;
        setTotalScoreReading(readingScore);
        setTotalScoreListening(listeningScore);
        console.log('Reading Score:', readingScore);
        console.log('Listening Score:', listeningScore);
        console.log('Total Score:', totalScore);
    };

    // Helper function to check if two arrays contain the same elements (order-sensitive)
    const arraysMatch = (arr1: number[], arr2: number[]) => {
        if (arr1.length !== arr2.length) return false;

        const sortedArr1 = [...arr1].sort();
        const sortedArr2 = [...arr2].sort();

        for (let i = 0; i < sortedArr1.length; i++) {
            if (sortedArr1[i] !== sortedArr2[i]) return false;
        }

        return true;
    };

    useEffect(() => {
        if (stage === 'listeningQuestions5' && currentQuestion + 1 >= 28) {
            // calculateScore();
        }
    }, [currentQuestion, stage]);

    const handleWritingCompletion = () => {
        // setStage('resultsDashboard');
        setStage('speaking');
    };

    const handleSpeakingCompletion = async () => {
        setIsAfterTestDetailsModalopen(true)
        setStage('resultsDashboard');

        const testNumber = id
        const testData = {
            summaryAnswers1: selectedAnswers1,
            summaryAnswers2: selectedAnswers2,
            readingAnswers: answers,
            totalScoreReading,
            totalScoreListening,
            listeningAnswers,
            writingScores,
            speakingScores,
            timestamp: new Date().toISOString(),
        };

        // try {
        //     const testRef = doc(db, `${user?.id}/test/${testNumber}`);
        //     await setDoc(testRef, testData);
        //     console.log("Test results stored successfully");
        // } catch (error) {
        //     console.error("Error storing test results:", error);
        // }
    };

    const handleSpeakingComplete = (task: number, evaluation: { score: number; feedback: string }) => {
        setSpeakingScores(prevScores => ({
            ...prevScores,
            [`task${task}`]: evaluation,
        }));
    };

    const handleWritingComplete = (task: number, evaluation: { score: number; feedback: string }) => {
        setWritingScores(prevScores => ({
            ...prevScores,
            [`task${task}`]: evaluation,
        }));
    };

    const highlightText = (text: string, highlight?: string) => {
        if (!highlight) return text;
        const trimmedHighlight = highlight.trim();
        const sentences = text.match(/[^.!?]+[.!?]*/g) || [text];

        return sentences.map((sentence, index) => {
            if (sentence.includes(trimmedHighlight)) {
                const parts = sentence.split(new RegExp(`(${trimmedHighlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
                return (
                    <span key={index}>
                        {parts.map((part, index) =>
                            part.toLowerCase() === trimmedHighlight.toLowerCase() ? (
                                <span key={index} className="bg-yellow-200">{part}</span>
                            ) : (
                                part
                            )
                        )}
                    </span>
                );
            }
            return <span key={index}>{sentence}</span>;
        });
    };

    const handleSummaryOptionClick1 = (optionIndex: number) => {
        setSelectedAnswers1((prev) => {
            if (prev.includes(optionIndex)) {
                return prev.filter((index) => index !== optionIndex);
            } else {
                return [...prev, optionIndex];
            }
        });
    };

    const handleSummaryOptionClick2 = (optionIndex: number) => {
        setSelectedAnswers2((prev) => {
            if (prev.includes(optionIndex)) {
                return prev.filter((index) => index !== optionIndex);
            } else {
                return [...prev, optionIndex];
            }
        });
    };


    const handleExitClick = () => {
        if (stage === 'instructions') {
            setStage('reading');
        } else if (stage === 'reading') {
            setStage('listeningInstructions');
        } else if (stage === 'readingPassage1') {
            setStage('listeningInstructions');
        } else if (stage === 'readingSummaryQuestions1') {
            setStage('listeningInstructions');
        } else if (stage === 'readingPassage2') {
            setStage('listeningInstructions');
        } else if (stage === 'readingSummaryQuestions2') {
            setStage('listeningInstructions');
        } else if (stage === 'listeningInstructions') {
            setStage('writing');
        } else if (stage === 'listeningConversation1') {
            setStage('writing');
        } else if (stage === 'listeningQuestions1') {
            setStage('writing');
            setCurrentQuestion(0); // Reset current question for next set of questions
        } else if (stage === 'listeningConversation2') {
            setStage('writing');
        } else if (stage === 'listeningQuestions2') {
            setStage('writing');
            setCurrentQuestion(0); // Reset current question for next set of questions
        } else if (stage === 'listeningConversation3') {
            setStage('writing');
        } else if (stage === 'listeningQuestions3') {
            setStage('writing');
            setCurrentQuestion(0); // Reset current question for next set of questions
        } else if (stage === 'listeningConversation4') {
            setStage('writing');
        } else if (stage === 'listeningQuestions4') {
            setStage('writing');
            setCurrentQuestion(0); // Reset current question for next set of questions
        } else if (stage === 'listeningConversation5') {
            setStage('writing');
        } else if (stage === 'listeningQuestions5') {
            calculateScore(); // Calculate score when all questions are answered
            setStage('writing');
        } else if (stage === 'writing') {
            setStage('speaking');
        } else if (stage === 'speaking') {
            handleSpeakingCompletion()
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };
    const handleModalToggle2 = () => {
        setIsModalOpen2(!isModalOpen2);
    };

    const [showReportModal, setShowReportModal] = useState(false);
    const [reportMessage, setReportMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleReportClick = () => {
        setShowReportModal(true);
    };

    const handleReportSubmit = async () => {
        setLoading(true);
        setError("");
        setSuccess("");
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ values: { message: reportMessage, userid: "USER_ID" } }),
            });

            if (response.ok) {
                setSuccess("Your query will be resolved within 24hrs!");
            } else {
                setError("Failed to send email.");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className={`min-h-[80vh] md::py-10 px-4 ${isReducedFontSize && "text-xs"}`}>
            <div className='flex flex-col md:flex-row justify-between px-10 mb-5 gap-10 '>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-center">TOEFL Full Length Test</h2>
                <div className='flex flex-row flex-wrap items-center justify-center gap-5'>
                    <Button onClick={handleExitClick} variant="outline" >
                        <FaSignOutAlt />
                        Exit Section
                    </Button>
                    <Button onClick={() => { setIsReducedFontSize(!isReducedFontSize) }}>
                        Font Size
                    </Button>
                    <Button onClick={handleReportClick} variant="outline">
                        <MdError />
                        Report
                    </Button>
                </div>
            </div>

            {showReportModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Report an Error</h2>
                        <textarea
                            value={reportMessage}
                            onChange={(e) => setReportMessage(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                            rows={4}
                            placeholder="Describe the error you faced"
                        />
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        {success && <p className="text-green-500 mb-4">{success}</p>}
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setShowReportModal(false)}
                                className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleReportSubmit}
                                className="bg-blue-600 text-white py-2 px-4 rounded-lg"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Submit"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {stage === 'instructions' && (
                <div className="shadow-sm p-6 rounded-lg border">
                    <h3 className="text-xl font-bold text-center mb-8">General Test Instructions</h3>
                    {[
                        "This test measures your ability to use English in an academic context. There are 4 sections.",
                        "In the Reading section, you will read two passages and answer questions about them.",
                        "In the Listening section, you will hear several conversations and lectures and answer questions about them.",
                        "In the Speaking section, you will answer 6 or 5 questions depending upon the task. Some of the questions ask you to speak about your own experience. Other questions ask you to speak about lectures and reading passages.",
                        "In the Writing section you will answer 2 questions. The first question asks you to write about the relationship between a lecture you will hear and a passage you will read. The second question asks you to write an essay about a topic of general based on your experience.",
                        "There will be directions for each section which explain how to answer the questions in that section.",
                        "You should work quickly but carefully on the Reading and Listening questions. Some questions are more difficult than others, but try to answer every one to the best of your ability. If you are not sure of the answer to a question, make the best guess that you can."
                    ].map((text, index) => (
                        <p key={index} className='mb-4'>{text}</p>
                    ))}
                    <div className="text-center mt-8">
                        <Button variant="outline" onClick={handleContinueClick}>
                            Continue
                        </Button>
                    </div>
                </div>
            )}

            {stage === 'reading' && (
                <div className="bg-white shadow p-6 rounded mb-8">
                    <h3 className="text-xl font-bold mb-4 text-center">Reading Section Directions</h3>
                    {[
                        "This section measures your ability to understand academic passages in English. You will read 2 passages and answer 10 questions per passage. In the test center, you have 36 minutes to read all the passages and answer all the questions.",
                        "Most questions are worth 1 point, but the last question in each set is worth more than 1 point. The directions indicate how many points you may receive.",
                        "Some passages include a word or phrase that is underlined in yellow. In the Official TOEFL, you will be able to click on the underlined word to see an example and explanation of the word.",
                        "Within this section, you can go to the next question by clicking Next. You may skip questions in the current passage and go back to them later. If you want to return to previous questions, click on Back.",
                        "Remember once you go to the summary questions (which is 10th and 20th question) you can't check your previous inputs for the reading passage questions. So try not to leave questions for later."
                    ].map((text, index, arr) => (
                        <p
                            key={index}
                            className={`mb-4 ${index === arr.length - 1 ? 'font-bold' : ''}`}
                        >
                            {text}
                        </p>
                    ))}
                    <div className="text-center mt-8">
                        <Button variant="outline" onClick={handleContinueClick}>
                            Continue
                        </Button>
                    </div>
                </div>
            )}

            {['readingPassage1', 'readingPassage2'].includes(stage) && (
                <div className="bg-white shadow p-3 sm:p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">
                        Reading Section - {stage === 'readingPassage1' ? 'Passage 1' : 'Passage 2'}
                    </h3>
                    {readingQuestions.slice(currentQuestion, currentQuestion + 1).map((q: ReadingQuestion) => (
                        <div key={q.id} className="mb-8 flex flex-col lg:flex-row gap-10">
                            <p className="mb-2 whitespace-pre-line lg:w-[55%] overflow-y-scroll h-[35rem] p-2">
                                <strong>Passage:</strong> {highlightText(q.passage ?? "", q.highlight ?? "")}
                            </p>
                            <div className='border p-4 rounded-lg lg:w-[45%] text-base'>
                                <div className='font-bold mb-3'>Question {currentQuestion + 1}: </div>
                                <div className='mb-3'>{q.question}</div>
                                <ul className="list-none mb-4">
                                    {q.options.map((option, i) => (
                                        <li key={i} className="mb-2">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name={`question-${q.id}`}
                                                    checked={answers[q.id] === i}
                                                    onChange={() => handleOptionChange(q.id, i)}
                                                    className="form-checkbox"
                                                />
                                                <span className="ml-2">{option}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                    <div className="text-center gap-10 flex justify-center">
                        <button
                            onClick={() => {
                                if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            {stage === 'readingPassage1' && currentQuestion > 0 ? 'Back' : 'Prev'}
                        </button>
                        <button
                            onClick={() => {
                                if ((stage === 'readingPassage1' && currentQuestion < 8) || (stage === 'readingPassage2' && currentQuestion < 18)) {
                                    setCurrentQuestion(currentQuestion + 1);
                                    calculateScore();
                                } else {
                                    calculateScore();
                                    setCurrentQuestion(currentQuestion + 1);
                                    stage === 'readingPassage1' ? handleContinueClick() : setStage('readingSummaryQuestions2');
                                }
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            {(stage === 'readingPassage1' && currentQuestion < 8) || (stage === 'readingPassage2' && currentQuestion < 18)
                                ? 'Next'
                                : 'Continue'}
                        </button>
                    </div>
                </div>
            )}

            {['readingSummaryQuestions1', 'readingSummaryQuestions2'].includes(stage) && (
                <div className="bg-white shadow p-3 sm:p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">
                        Reading Section - {stage === 'readingSummaryQuestions1' ? 'Passage 1 Summary' : 'Passage 2 Summary'}
                    </h3>
                    {readingQuestions.slice(stage === 'readingSummaryQuestions1' ? 9 : 19, stage === 'readingSummaryQuestions1' ? 10 : 20).map((q: ReadingQuestion) => (
                        <div key={q.id}>
                            <p><strong>Directions:</strong> {q.instructions}</p>
                            <p><strong>Introductory Sentence:</strong> {q.introductorySentence}</p>
                            <div className="flex flex-wrap justify-evenly mt-4">
                                <div className="sm:w-[45%]">
                                    {q.options.map((option, i) => (
                                        <div
                                            key={i}
                                            className={`p-2 mb-2 border rounded cursor-pointer ${stage === 'readingSummaryQuestions1'
                                                ? selectedAnswers1.includes(i)
                                                    ? 'bg-blue-200'
                                                    : 'bg-white'
                                                : selectedAnswers2.includes(i)
                                                    ? 'bg-blue-200'
                                                    : 'bg-white'
                                                }`}
                                            onClick={() => stage === 'readingSummaryQuestions1' ? handleSummaryOptionClick1(i) : handleSummaryOptionClick2(i)}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                                <div className="sm:h-auto min-h-40 w-[100%] sm:w-[45%] bg-gray-200 p-2 rounded">
                                    {(stage === 'readingSummaryQuestions1' ? selectedAnswers1 : selectedAnswers2).map((index) => (
                                        <div
                                            key={index}
                                            className="p-2 mb-2 border rounded bg-white cursor-pointer"
                                            onClick={() =>
                                                stage === 'readingSummaryQuestions1'
                                                    ? handleSummaryOptionClick1(index)
                                                    : handleSummaryOptionClick2(index)
                                            }
                                        >
                                            {q.options[index]}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="text-center mt-4 mx-8 gap-10 flex justify-center">
                        <button
                            onClick={() => {
                                stage === 'readingSummaryQuestions1' ? handleModalToggle() : handleModalToggle2();
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            Read Passage
                        </button>
                        <button
                            onClick={() => {
                                calculateScore();
                                if (stage === 'readingSummaryQuestions1') {
                                    setStage('readingPassage2');
                                    setCurrentQuestion(10);
                                } else {
                                    setStage('listeningInstructions');
                                    setCurrentQuestion(0);
                                }
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}

            {(isModalOpen || isModalOpen2) && (() => {
                const isFirstModal = isModalOpen;
                const modalIndex = isFirstModal ? 10 : 20;
                const passageContent = readingQuestions
                    .find((q: ReadingQuestion) => q.id === modalIndex)
                    ?.passage.split("\n\n")
                    .filter((line: string) => line.trim() !== "")
                    .map((line: string) => `<p>${line.trim()}</p><br/>`)
                    .join("");

                const handleClose = isFirstModal ? handleModalToggle : handleModalToggle2;

                return (
                    <Draggable nodeRef={DraggableModalRef} handle=".modal-header">
                        <div ref={DraggableModalRef} className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden h-full">
                            <div className="relative p-4 w-full max-w-[80%] max-h-full">
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div className="modal-header flex items-center justify-between p-4 md:p-5 border-b rounded-t cursor-move dark:border-gray-600">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Passage (Draggable)
                                        </h3>
                                        <Button onClick={handleClose} variant="outline">
                                            <X className='h-5 w-5' />
                                        </Button>
                                    </div>
                                    <div className="p-4 md:p-5 space-y-4 text-gray-600">
                                        <div dangerouslySetInnerHTML={{ __html: passageContent || "" }}></div>
                                    </div>
                                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <Button onClick={handleClose} variant="default">
                                            Close
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Draggable>
                );
            })()}

            {stage === 'listeningInstructions' && (
                <section className="bg-white shadow p-6 rounded mb-5">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening Section Directions</h3>
                    {[
                        "This section measures your ability to understand spoken English in an academic setting. You will hear several conversations and lectures and answer questions about them. You have 40 minutes to answer all the questions.",
                        "Each conversation or lecture is followed by a set of questions. Listen carefully to the conversations and lectures and try to answer every question.",
                        "You may take notes while you listen. You can use your notes to help answer the questions. Your notes will not be scored.",
                        'Click on "Continue" to begin the listening section.'
                    ].map((text, index) => (
                        <p key={index} className="mb-4">{text}</p>
                    ))}
                    <div className="text-center mt-5">
                        <Button onClick={handleContinueClick} variant="outline" >
                            Continue
                        </Button>
                    </div>
                </section>
            )}

            {['listeningConversation2', 'listeningConversation3', 'listeningConversation1', 'listeningConversation4', 'listeningConversation5'].includes(stage) && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold mb-4 text-center">
                        {`Listening Conversation ${stage.replace('listeningConversation', '')}`}
                    </h3>
                    <p className="mb-4">[Use Headphones For Better Quality]</p>
                    <div className="custom-audio-container flex-col flex gap-10">
                        <img src={listeningAudiosPhotos[parseInt(stage.replace('listeningConversation', '')) - 1]} alt="Audio Visual" />
                        <ReactAudioPlayer
                            key={tryReloadAudio}
                            src={listeningAudios[parseInt(stage.replace('listeningConversation', '')) - 1]}
                            controls
                            className="custom-audio-player"
                        />
                    </div>
                    <div className="flex text-center mt-10 gap-5">
                        <Button onClick={() => setTryReloadAudio(prev => prev + 1)} variant="default">Reload Audio</Button>
                        <Button onClick={handleContinueClick} variant="outline">Continue</Button>
                    </div>
                </div>
            )}

            {['listeningQuestions1', 'listeningQuestions2', 'listeningQuestions3', 'listeningQuestions4', 'listeningQuestions5'].includes(stage) && (
                <div className="shadow-sm border rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening Section</h3>
                    {(() => {
                        const section = parseInt(stage.replace('listeningQuestions', ''));
                        const start = section === 1 ? 0 : section === 2 ? 6 : section === 3 ? 12 : section === 4 ? 18 : 23;
                        const end = section === 1 ? 6 : section === 2 ? 12 : section === 3 ? 18 : section === 4 ? 23 : 28;

                        return listeningQuestions
                            .slice(start, end)
                            .slice(currentListeningQuestion, currentListeningQuestion + 1)
                            .map((q: ListeningQuestion) => (
                                <div key={q.id} className="mb-8 space-y-5">
                                    <p className="border rounded-lg shadow-sm p-4 sm:p-6">
                                        <strong>Question {start + currentListeningQuestion + 1}:</strong> {q.question}
                                    </p>
                                    {q.audio && (
                                        <div className="flex items-center justify-center gap-3">
                                            <ReactAudioPlayer
                                                key={tryReloadAudio}
                                                src={q.audio}
                                                controls
                                                className="custom-audio-player my-2"
                                            />
                                            <Button
                                                onClick={() => setTryReloadAudio(prev => prev + 1)}
                                                variant="default"
                                            >
                                                <ReloadIcon />
                                            </Button>
                                        </div>
                                    )}
                                    <ul className="list-none border shadow-sm rounded-lg p-4 sm:p-6">
                                        {q.options.map((option, i) => (
                                            <li key={i} className="mb-2">
                                                <label className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={listeningAnswers[start + currentListeningQuestion] === i}
                                                        onChange={() =>
                                                            handleListeningOptionChange(start + currentListeningQuestion, i)
                                                        }
                                                        className="form-checkbox"
                                                    />
                                                    <span className="ml-2">{option}</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-center">
                                        <Button variant="default" onClick={() => {
                                            if (currentListeningQuestion < end - start - 1) {
                                                setCurrentListeningQuestion(currentListeningQuestion + 1);
                                            } else {
                                                setCurrentListeningQuestion(0);
                                                if (section === 5) {
                                                    calculateScore();
                                                }
                                                handleContinueClick();
                                            }
                                            calculateScore();
                                        }}
                                        >
                                            {currentListeningQuestion < end - start - 1 ? 'Next' : 'Continue'}
                                        </Button>
                                    </div>
                                </div>
                            ));
                    })()}
                </div>
            )}

            {stage === 'writing' && (
                <WritingSection onComplete={handleWritingCompletion} onTaskComplete={handleWritingComplete} />
            )}
            {stage === 'speaking' && (
                <SpeakingSection onComplete={handleSpeakingCompletion} onTaskComplete={handleSpeakingComplete} />
            )}
            {stage === 'resultsDashboard' && (
                <ResultsDashboard
                    summaryAnswers1={selectedAnswers1}
                    summaryAnswers2={selectedAnswers2}
                    readingAnswers={answers}
                    totalScoreReading={totalScoreReading}
                    totalScoreListening={totalScoreListening}
                    listeningAnswers={listeningAnswers}
                    writingScores={writingScores}
                    speakingScores={speakingScores}
                />
            )}
            {(id === "test1") && (
                <div className='max-w-[100vw]'>
                    <AfterTestDetailsModal type={id} isOpen={isAfterTestDetailsModalopen} onClose={() => { setIsAfterTestDetailsModalopen(false) }} />
                </div>
            )}
        </div >
    );
};

export default ReadingListeningSection;
