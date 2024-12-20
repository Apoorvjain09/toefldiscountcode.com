"use client"
import React, { useState, useEffect, Suspense } from 'react';
import { FaPlayCircle, FaSignOutAlt } from 'react-icons/fa';
import { MdError } from "react-icons/md";
// import { readingQuestions, listeningQuestions, listeningAudios } from './questions';
import ReactAudioPlayer from 'react-audio-player';
import Draggable from 'react-draggable';
import WritingSection from './WritingSection';
import SpeakingSection from './SpeakingSection';
import ResultsDashboard from './ResultsDashboard';
import { useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase"; // Import Firestore instance
import { ReloadIcon } from '@radix-ui/react-icons';
import AfterTestDetailsModal from '@/components/tests-ui/AfterTestDetailsModal';

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
    id: number; // Unique identifier for the question
    question: string; // The text of the question
    options: string[]; // Array of options for the question
    answer: number; // Index of the correct option in the options array
    audio: string;
}

const Test1 = () => {
    const { user } = useUser()
    const [isAfterTestDetailsModalopen, setIsAfterTestDetailsModalopen] = useState(false)
    const [tryReloadAudio, setTryReloadAudio] = useState(0);
    const [stage, setStage] = useState<'instructions' | 'reading' | 'readingPassage1' | 'readingSummaryQuestions1' | 'readingPassage2' | 'readingSummaryQuestions2' | 'listeningInstructions' | 'listeningConversation1' | 'listeningQuestions1' | 'listeningConversation2' | 'listeningQuestions2' | 'listeningConversation3' | 'listeningQuestions3' | 'listeningConversation4' | 'listeningQuestions4' | 'listeningConversation5' | 'listeningQuestions5' | 'writing' | 'speaking' | 'resultsDashboard'>('instructions');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>(Array(20).fill(-1));
    const [listeningAnswers, setListeningAnswers] = useState<number[]>(Array(28).fill(-1));
    const [currentListeningQuestion1, setCurrentListeningQuestion1] = useState(0);
    const [currentListeningQuestion2, setCurrentListeningQuestion2] = useState(0);
    const [currentListeningQuestion3, setCurrentListeningQuestion3] = useState(0);
    const [currentListeningQuestion4, setCurrentListeningQuestion4] = useState(0);
    const [currentListeningQuestion5, setCurrentListeningQuestion5] = useState(0);
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
    // Dynamically import the correct questions file
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

    const handleStartTestClick = () => {
        setStage('instructions');
    };

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

        // Trim any leading or trailing whitespace from the highlight text
        const trimmedHighlight = highlight.trim();

        // Split the passage into sentences.
        const sentences = text.match(/[^.!?]+[.!?]*/g) || [text];

        // Iterate through sentences to find and highlight the matching one.
        return sentences.map((sentence, index) => {
            if (sentence.includes(trimmedHighlight)) {
                const parts = sentence.split(new RegExp(`(${trimmedHighlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
                // console.log('Parts:', parts);
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

    const handleListeningContinueClick1 = () => {
        if (currentListeningQuestion1 < listeningQuestions.slice(0, 6).length - 1) {
            setCurrentListeningQuestion1(currentListeningQuestion1 + 1);
        } else {
            handleContinueClick();
        }
    };

    const handleListeningContinueClick2 = () => {
        if (currentListeningQuestion2 < listeningQuestions.slice(6, 12).length - 1) {
            setCurrentListeningQuestion2(currentListeningQuestion2 + 1);
        } else {
            handleContinueClick();
        }
    };

    const handleListeningContinueClick3 = () => {
        if (currentListeningQuestion3 < listeningQuestions.slice(12, 18).length - 1) {
            setCurrentListeningQuestion3(currentListeningQuestion3 + 1);
        } else {
            handleContinueClick();
        }
    };

    const handleListeningContinueClick4 = () => {
        if (currentListeningQuestion4 < listeningQuestions.slice(18, 23).length - 1) {
            setCurrentListeningQuestion4(currentListeningQuestion4 + 1);
        } else {
            handleContinueClick();
        }
    };

    const handleListeningContinueClick5 = () => {
        if (currentListeningQuestion5 < listeningQuestions.slice(23, 28).length - 1) {
            setCurrentListeningQuestion5(currentListeningQuestion5 + 1);
        } else {
            calculateScore();
            handleContinueClick();
        }
    };

    const handleExitClick = () => {
        if (stage === 'instructions') {
            setStage('reading');
        } else if (stage === 'reading') {
            // alert("pls click next if you are performing current question")
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
            // setStage('resultsDashboard');
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
                body: JSON.stringify({ values: { message: reportMessage, userid: user?.id || "test" } }),
            });

            if (response.ok) {
                setSuccess("Your query will be resolved within 24hrs!");
                // setShowReportModal(false);
            } else {
                setError("Failed to send email.");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-[80vh] md::py-10 px-4 ">
            <div className='flex flex-col md:flex-row justify-between px-10 mb-5 gap-10 '>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-center">TOEFL Full Length Test</h2>
                <div className='flex flex-row items-center justify-center gap-5'>
                    <Button onClick={handleExitClick} className="bg-blue-400 text-white" variant="outline" >
                        <FaSignOutAlt />
                        Exit Section
                    </Button>
                    <Button onClick={handleReportClick} className="" variant="destructive">
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
                <div className="bg-white shadow p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">General Test Instructions</h3>
                    <p className="mb-4">
                        This test measures your ability to use English in an academic context. There are 4 sections.
                    </p>
                    <p className="mb-4">
                        In the Reading section, you will read two passages and answer questions about them.
                    </p>
                    <p className="mb-4">
                        In the Listening section, you will hear several conversations and lectures and answer questions about them.
                    </p>
                    <p className="mb-4">
                        In the Speaking section, you will answer 6 or 5 questions depending upon the task. Some of the questions ask you to speak about your own experience. Other questions ask you to speak about lectures and reading passages.
                    </p>
                    <p className="mb-4">
                        In the Writing section you will answer 2 questions. The first question asks you to write about the relationship between a lecture you will hear and a passage you will read. The second question asks you to write an essay about a topic of general based on your experience.
                    </p>
                    <p className="mb-4">
                        There will be directions for each section which explain how to answer the questions in that section.
                    </p>
                    <p className="mb-4">
                        You should work quickly but carefully on the Reading and Listening questions. Some questions are more difficult than others, but try to answer every one to the best of your ability. If you are not sure of the answer to a question, make the best guess that you can.
                    </p>
                    <div className="text-center">
                        <button onClick={handleContinueClick} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                            Continue
                        </button>
                    </div>
                </div>
            )}
            {stage === 'reading' && (
                <div className="bg-white shadow p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">Reading Section Directions</h3>
                    <p className="mb-4">
                        This section measures your ability to understand academic passages in English. You will read 2 passages and answer 10 questions per passage. In the test center, You have 36 minutes to read all the passages and answer all the questions.
                    </p>
                    <p className="mb-4">
                        Most questions are worth 1 point, but the last question in each set is worth more than 1 point. The directions indicate how many points you may receive.
                    </p>
                    <p className="mb-4">
                        Some passages include a word or phrase that is underlined in yellow. In the Official TOEFL, you will be able to click on the underlined word to see an example and explanation of the word.
                    </p>
                    <p className="mb-4">
                        Within this section, you can go to the next question by clicking Next. You may skip questions in the current passage and go back to them later. If you want to return to previous questions, click on Back.
                    </p>
                    <p className="mb-4 font-bold">
                        Remember once you go to the summary questions (which is 10th and 20th question) you can't check your previous inputs for the reading passage questions. So try not to leave questions for later.
                    </p>
                    {/* <p className="mb-4">
                        You can click on Review at any time and the review screen will show you which questions you have answered and which you have not answered. From this review screen, you may go directly to any question you have already seen in the current passage.
                    </p>
                    <p className="mb-4">
                        You may now begin the Reading section. NOTE: In an actual test some test takers may receive 4 passages; those test takers will have 72 minutes (1 hour and 12 minutes) to answer the questions.
                    </p> */}
                    <div className="text-center">
                        <button onClick={handleContinueClick} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                            Continue
                        </button>
                    </div>
                </div>
            )}
            {stage === 'readingPassage1' && (
                <div className="bg-white shadow p-3 sm:p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">Reading Section - Passage 1</h3>
                    {readingQuestions.slice(currentQuestion, currentQuestion + 1).map((q: ReadingQuestion, index: Number) => (
                        <div key={q.id} className="mb-8 flex flex-col lg:flex-row gap-10">
                            <p className="mb-2 whitespace-pre-line lg:w-[55%] overflow-y-scroll h-[35rem] p-2">
                                <strong>Passage:</strong> {highlightText(q.passage ?? "", q.highlight ?? "")}
                            </p>
                            <div className='border p-2 rounded-lg lg:w-[45%]'>
                                <p className="mb-2"><strong>Question {currentQuestion + 1}:</strong> {q.question}</p>
                                <ul className="list-none mb-4">
                                    {q.options.map((option, i) => (
                                        <li key={i} className="mb-1">
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
                                if (currentQuestion > 0) {
                                    setCurrentQuestion(currentQuestion - 1);
                                }
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => {
                                if (currentQuestion < 8) {
                                    setCurrentQuestion(currentQuestion + 1);
                                    calculateScore()
                                } else {
                                    calculateScore()
                                    setCurrentQuestion(currentQuestion + 1);
                                    handleContinueClick();
                                }
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            {currentQuestion < 8 ? 'Next' : 'Continue'}
                        </button>
                    </div>
                </div>
            )}
            {stage === 'readingSummaryQuestions1' && (
                <div className="bg-white shadow p-3 sm:p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">Reading Section - Passage 1 Summary</h3>
                    {readingQuestions.slice(9, 10).map((q: ReadingQuestion, index: Number) => (
                        <div key={q.id}>
                            <p><strong>Directions:</strong> {q.instructions}</p>
                            <p><strong>Introductory Sentence:</strong> {q.introductorySentence}</p>
                            <div className="flex flex-wrap justify-evenly mt-4">
                                <div className="sm:w-[45%]">
                                    {q.options.map((option, i) => (
                                        <div
                                            key={i}
                                            className={`p-2 mb-2 border rounded cursor-pointer ${selectedAnswers1.includes(i) ? 'bg-blue-200' : 'bg-white'}`}
                                            onClick={() => handleSummaryOptionClick1(i)}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                                <div className="sm:h-auto min-h-40 w-[100%] sm:w-[45%] bg-gray-200 p-2 rounded">
                                    {selectedAnswers1.map((index) => (
                                        <div
                                            key={index}
                                            className="p-2 mb-2 border rounded bg-white cursor-pointer"
                                            onClick={() => handleSummaryOptionClick1(index)}
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
                                handleModalToggle(); // Toggle modal on button click
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            Read Passage
                        </button>
                        <button
                            onClick={() => {
                                setStage('readingPassage2');
                                setCurrentQuestion(10);
                                calculateScore()
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}
            {isModalOpen && (() => {
                const passageContent = readingQuestions
                    .find((q: ReadingQuestion) => q.id === 10)
                    ?.passage.split("\n\n")
                    .filter((line: string) => line.trim() !== "") // Remove empty lines
                    .map((line: string) => `<p>${line.trim()}</p>`)
                    .join("");

                return (
                    <Draggable handle=".modal-header">
                        <div
                            id="default-modal"
                            tabIndex={-1}
                            aria-hidden="true"
                            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden h-full"
                        >
                            <div className="relative p-4 w-full max-w-2xl max-h-full">
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div className="modal-header flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 cursor-move">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Passage (Draggable)
                                        </h3>
                                        <button
                                            type="button"
                                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={handleModalToggle}
                                        >
                                            <svg
                                                className="w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 14"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="p-4 md:p-5 space-y-4 text-gray-600">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: passageContent || "",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <button
                                            onClick={handleModalToggle}
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Draggable>
                );
            })()}
            {stage === 'readingPassage2' && (
                <div className="bg-white shadow p-3 sm:p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">Reading Section - Passage 2</h3>
                    {readingQuestions.slice(currentQuestion, currentQuestion + 1).map((q: ReadingQuestion, index: Number) => (
                        <div key={q.id} className="mb-8 flex flex-col lg:flex-row gap-10">
                            <p className="mb-2 whitespace-pre-line lg:w-[55%] overflow-y-scroll h-[35rem] p-2">
                                <strong>Passage:</strong> {highlightText(q.passage ?? "", q.highlight)}
                            </p>
                            <div className='border p-2 rounded-lg lg:w-[45%]'>
                                <p className="mb-2"><strong>Question {currentQuestion + 1}:</strong> {q.question}</p>
                                <ul className="list-none mb-4">
                                    {q.options.map((option, i) => (
                                        <li key={i} className="mb-1">
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
                                if (currentQuestion > 10) {
                                    setCurrentQuestion(currentQuestion - 1);
                                    console.log(currentQuestion)
                                }
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            Prev
                        </button>
                        <button
                            onClick={() => {
                                if (currentQuestion < 18) {
                                    setCurrentQuestion(currentQuestion + 1);
                                    calculateScore()
                                } else {
                                    handleContinueClick();
                                    setCurrentQuestion(currentQuestion + 1);
                                }
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            {currentQuestion < 18 ? 'Next' : 'Continue'}
                        </button>
                    </div>
                </div>
            )}
            {stage === 'readingSummaryQuestions2' && (
                <div className="bg-white shadow p-3 sm:p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">Reading Section - Passage 2 Summary</h3>
                    {readingQuestions.slice(19, 20).map((q: ReadingQuestion, index: Number) => (
                        <div key={q.id}>
                            <p><strong>Directions:</strong> {q.instructions}</p>
                            <p><strong>Introductory Sentence:</strong> {q.introductorySentence}</p>
                            <div className="flex flex-wrap justify-evenly mt-4">
                                <div className="sm:w-[45%]">
                                    {q.options.map((option, i) => (
                                        <div
                                            key={i}
                                            className={`p-2 mb-2 border rounded cursor-pointer ${selectedAnswers2.includes(i) ? 'bg-blue-200' : 'bg-white'}`}
                                            onClick={() => handleSummaryOptionClick2(i)}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                                <div className="sm:h-auto min-h-40 w-[100%] sm:w-[45%] bg-gray-200 p-2 rounded">
                                    {selectedAnswers2.map((index) => (
                                        <div
                                            key={index}
                                            className="p-2 mb-2 border rounded bg-white cursor-pointer"
                                            onClick={() => handleSummaryOptionClick2(index)}
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
                                handleModalToggle2(); // Toggle modal on button click
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            Read Passage
                        </button>
                        <button
                            onClick={() => {
                                calculateScore()
                                // setStage('resultsDashboard');
                                setStage('listeningInstructions');
                                setCurrentQuestion(0);
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            Continue
                        </button>

                    </div>
                </div>
            )}
            {isModalOpen2 && (
                <Draggable handle=".modal-header">
                    <div id="default-modal" tab-index="-1" aria-hidden="true" className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden h-full">
                        <div className="relative p-4 w-full max-w-2xl max-h-full">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="modal-header flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 cursor-move">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Passage
                                    </h3>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleModalToggle2}>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <div className="p-4 md:p-5 space-y-4">
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        {/* Insert the passage content here */}
                                        {readingQuestions.find((q: ReadingQuestion) => q.id === 20)?.passage}
                                    </p>
                                </div>
                                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button onClick={handleModalToggle2} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Draggable>
            )}
            {stage === 'listeningInstructions' && (
                <div className="bg-white shadow p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening Section Directions</h3>
                    <p className="mb-4">
                        This section measures your ability to understand spoken English in an academic setting. You will hear several conversations and lectures and answer questions about them. You have 40 minutes to answer all the questions.
                    </p>
                    <p className="mb-4">
                        Each conversation or lecture is followed by a set of questions. Listen carefully to the conversations and lectures and try to answer every question.
                    </p>
                    <p className="mb-4">
                        You may take notes while you listen. You can use your notes to help answer the questions. Your notes will not be scored.
                    </p>
                    <p className="mb-4">
                        Click on &quot;Continue&quot; to begin the listening section.
                    </p>
                    <div className="text-center">
                        <button onClick={handleContinueClick} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                            Continue
                        </button>
                    </div>
                </div>
            )}
            {stage === 'listeningConversation1' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening Conversation 1</h3>
                    <p className="mb-4">[Use Headphones For Better Quality]</p>
                    <div className="custom-audio-container flex-col flex gap-10">
                        <img src={listeningAudiosPhotos[0]}></img>
                        <ReactAudioPlayer
                            key={tryReloadAudio}
                            src={listeningAudios[0]}
                            controls
                            className="custom-audio-player"
                        />
                    </div>
                    <div className="flex text-center mt-10 gap-5">
                        <Button
                            onClick={() => { setTryReloadAudio((prevKey) => prevKey + 1) }}
                            variant="default"
                        >
                            Reload Audio
                        </Button>
                        <Button onClick={handleContinueClick} variant="outline">
                            Continue
                        </Button>
                    </div>
                </div>
            )}
            {stage === 'listeningQuestions1' && (
                <div className="bg-white shadow p-2 sm:p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening Section</h3>
                    {listeningQuestions.slice(0, 6).slice(currentListeningQuestion1, currentListeningQuestion1 + 1).map((q: ListeningQuestion, index: Number) => (
                        <div key={q.id} className="mb-8 border rounded-lg p-2">
                            <p className="mb-2"><strong>Question {currentListeningQuestion1 + 1}:</strong> {q.question}</p>
                            {q.audio && (
                                <div className='flex items-center justify-center gap-3'>
                                    <ReactAudioPlayer
                                        key={tryReloadAudio}
                                        src={q.audio}
                                        controls
                                        className="custom-audio-player my-2"
                                    />
                                    <Button
                                        onClick={() => { setTryReloadAudio((prevKey) => prevKey + 1) }}
                                        variant="default"
                                    >
                                        <ReloadIcon />
                                    </Button>
                                </div>
                            )}
                            <ul className="list-none mb-4">
                                {q.options.map((option: string, i: number) => (
                                    <li key={i} className="mb-1">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={listeningAnswers[currentListeningQuestion1] === i}
                                                onChange={() => handleListeningOptionChange(currentListeningQuestion1, i)}
                                                className="form-checkbox"
                                            />
                                            <span className="ml-2">{option}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="text-center">
                        <button
                            onClick={() => {
                                handleListeningContinueClick1();
                                calculateScore();
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            {currentListeningQuestion1 < listeningQuestions.slice(0, 6).length - 1 ? 'Next' : 'Continue'}
                        </button>
                    </div>
                </div>
            )}
            {stage === 'listeningConversation2' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening Conversation 2</h3>
                    <p className="mb-4">[Use Headphones For Better Quality]</p>
                    <div className="custom-audio-container flex-col flex gap-10">
                        <img src={listeningAudiosPhotos[1]}></img>
                        <ReactAudioPlayer
                            key={tryReloadAudio}
                            src={listeningAudios[1]}
                            controls
                            className="custom-audio-player"
                        />
                    </div>
                    <div className="flex text-center mt-10 gap-5">
                        <Button
                            onClick={() => { setTryReloadAudio((prevKey) => prevKey + 1) }}
                            variant="default"
                        >
                            Reload Audio
                        </Button>
                        <Button onClick={handleContinueClick} variant="outline">
                            Continue
                        </Button>
                    </div>
                </div>
            )}
            {stage === 'listeningQuestions2' && (
                <div className="bg-white shadow p-2 sm:p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening Section</h3>
                    {listeningQuestions.slice(6, 12).slice(currentListeningQuestion2, currentListeningQuestion2 + 1).map((q: ListeningQuestion, index: number) => (
                        <div key={q.id} className="mb-8 border rounded-lg p-2">
                            <p className="mb-2"><strong>Question {currentListeningQuestion2 + 7}:</strong> {q.question}</p>
                            {q.audio && (
                                <div className='flex items-center justify-center gap-3'>
                                    <ReactAudioPlayer
                                        key={tryReloadAudio}
                                        src={q.audio}
                                        controls
                                        className="custom-audio-player my-2"
                                    />
                                    <Button
                                        onClick={() => { setTryReloadAudio((prevKey) => prevKey + 1) }}
                                        variant="default"
                                    >
                                        <ReloadIcon />
                                    </Button>
                                </div>
                            )}
                            <ul className="list-none mb-4">
                                {q.options.map((option, i) => (
                                    <li key={i} className="mb-1">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={listeningAnswers[currentListeningQuestion2 + 6] === i}
                                                onChange={() => handleListeningOptionChange(currentListeningQuestion2 + 6, i)}
                                                className="form-checkbox"
                                            />
                                            <span className="ml-2">{option}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="text-center">
                        <button
                            onClick={() => {
                                handleListeningContinueClick2();
                                calculateScore();
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            {currentListeningQuestion2 < listeningQuestions.slice(6, 12).length - 1 ? 'Next' : 'Continue'}
                        </button>
                    </div>
                </div>
            )}
            {stage === 'listeningConversation3' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening Conversation 3</h3>
                    <p className="mb-4">[Use Headphones For Better Quality]</p>
                    <div className="custom-audio-container flex-col flex gap-10">
                        <img src={listeningAudiosPhotos[2]}></img>
                        <ReactAudioPlayer
                            key={tryReloadAudio}
                            src={listeningAudios[2]}
                            controls
                            className="custom-audio-player"
                        />
                    </div>
                    <div className="flex text-center mt-10 gap-5">
                        <Button
                            onClick={() => { setTryReloadAudio((prevKey) => prevKey + 1) }}
                            variant="default"
                        >
                            Reload Audio
                        </Button>
                        <Button onClick={handleContinueClick} variant="outline">
                            Continue
                        </Button>
                    </div>
                </div>
            )}
            {stage === 'listeningQuestions3' && (
                <div className="bg-white shadow p-2 sm:p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening Section</h3>
                    {listeningQuestions.slice(12, 18).slice(currentListeningQuestion3, currentListeningQuestion3 + 1).map((q: ListeningQuestion, index: number) => (
                        <div key={q.id} className="mb-8 border rounded-lg p-2">
                            <p className="mb-2"><strong>Question {currentListeningQuestion3 + 13}:</strong> {q.question}</p>
                            {q.audio && (
                                <div className='flex items-center justify-center gap-3'>
                                    <ReactAudioPlayer
                                        key={tryReloadAudio}
                                        src={q.audio}
                                        controls
                                        className="custom-audio-player my-2"
                                    />
                                    <Button
                                        onClick={() => { setTryReloadAudio((prevKey) => prevKey + 1) }}
                                        variant="default"
                                    >
                                        <ReloadIcon />
                                    </Button>
                                </div>
                            )}
                            <ul className="list-none mb-4">
                                {q.options.map((option, i) => (
                                    <li key={i} className="mb-1">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={listeningAnswers[currentListeningQuestion3 + 12] === i}
                                                onChange={() => handleListeningOptionChange(currentListeningQuestion3 + 12, i)}
                                                className="form-checkbox"
                                            />
                                            <span className="ml-2">{option}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="text-center">
                        <button
                            onClick={() => {
                                handleListeningContinueClick3();
                                calculateScore();
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            {currentListeningQuestion3 < listeningQuestions.slice(12, 18).length - 1 ? 'Next' : 'Continue'}
                        </button>
                    </div>
                </div>
            )}
            {stage === 'listeningConversation4' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening Conversation 4</h3>
                    <p className="mb-4">[Use Headphones For Better Quality]</p>
                    <div className="custom-audio-container flex-col flex gap-10">
                        <img src={listeningAudiosPhotos[3]}></img>
                        <ReactAudioPlayer
                            key={tryReloadAudio}
                            src={listeningAudios[3]}
                            controls
                            className="custom-audio-player"
                        />
                    </div>
                    <div className="flex text-center mt-10 gap-5">
                        <Button
                            onClick={() => { setTryReloadAudio((prevKey) => prevKey + 1) }}
                            variant="default"
                        >
                            Reload Audio
                        </Button>
                        <Button onClick={handleContinueClick} variant="outline">
                            Continue
                        </Button>
                    </div>
                </div>
            )}
            {stage === 'listeningQuestions4' && (
                <div className="bg-white shadow p-2 sm:p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening Section</h3>
                    {listeningQuestions.slice(18, 23).slice(currentListeningQuestion4, currentListeningQuestion4 + 1).map((q: ListeningQuestion, index: number) => (
                        <div key={q.id} className="mb-8 border rounded-lg p-2">
                            <p className="mb-2"><strong>Question {currentListeningQuestion4 + 19}:</strong> {q.question}</p>
                            {q.audio && (
                                <div className='flex items-center justify-center gap-3'>
                                    <ReactAudioPlayer
                                        key={tryReloadAudio}
                                        src={q.audio}
                                        controls
                                        className="custom-audio-player my-2"
                                    />
                                    <Button
                                        onClick={() => { setTryReloadAudio((prevKey) => prevKey + 1) }}
                                        variant="default"
                                    >
                                        <ReloadIcon />
                                    </Button>
                                </div>
                            )}
                            <ul className="list-none mb-4">
                                {q.options.map((option, i) => (
                                    <li key={i} className="mb-1">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={listeningAnswers[currentListeningQuestion4 + 18] === i}
                                                onChange={() => handleListeningOptionChange(currentListeningQuestion4 + 18, i)}
                                                className="form-checkbox"
                                            />
                                            <span className="ml-2">{option}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="text-center">
                        <button
                            onClick={() => {
                                handleListeningContinueClick4();
                                calculateScore();
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            {currentListeningQuestion4 < listeningQuestions.slice(18, 23).length - 1 ? 'Next' : 'Continue'}
                        </button>
                    </div>
                </div>
            )}
            {stage === 'listeningConversation5' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening Conversation 5</h3>
                    <p className="mb-4">[Use Headphones For Better Quality]</p>
                    <div className="custom-audio-container flex-col flex gap-10">
                        <img src={listeningAudiosPhotos[4]}></img>
                        <ReactAudioPlayer
                            key={tryReloadAudio}
                            src={listeningAudios[4]}
                            controls
                            className="custom-audio-player"
                        />
                    </div>
                    <div className="flex text-center mt-10 gap-5">
                        <Button
                            onClick={() => { setTryReloadAudio((prevKey) => prevKey + 1) }}
                            variant="default"
                        >
                            Reload Audio
                        </Button>
                        <Button onClick={handleContinueClick} variant="outline">
                            Continue
                        </Button>
                    </div>
                </div>
            )}
            {stage === 'listeningQuestions5' && (
                <div className="bg-white shadow p-2 sm:p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening Section</h3>
                    {listeningQuestions.slice(23, 28).slice(currentListeningQuestion5, currentListeningQuestion5 + 1).map((q: ListeningQuestion, index: number) => (
                        <div key={q.id} className="mb-8 border rounded-lg p-2">
                            <p className="mb-2"><strong>Question {currentListeningQuestion5 + 24}:</strong> {q.question}</p>
                            {q.audio && (
                                <div className='flex items-center justify-center gap-3'>
                                    <ReactAudioPlayer
                                        key={tryReloadAudio}
                                        src={q.audio}
                                        controls
                                        className="custom-audio-player my-2"
                                    />
                                    <Button
                                        onClick={() => { setTryReloadAudio((prevKey) => prevKey + 1) }}
                                        variant="default"
                                    >
                                        <ReloadIcon />
                                    </Button>
                                </div>
                            )}
                            <ul className="list-none mb-4">
                                {q.options.map((option, i) => (
                                    <li key={i} className="mb-1">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={listeningAnswers[currentListeningQuestion5 + 23] === i}
                                                onChange={() => handleListeningOptionChange(currentListeningQuestion5 + 23, i)}
                                                className="form-checkbox"
                                            />
                                            <span className="ml-2">{option}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="text-center">
                        <button
                            onClick={() => {
                                handleListeningContinueClick5();
                                calculateScore();
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            {currentListeningQuestion5 < listeningQuestions.slice(23, 28).length - 1 ? 'Next' : 'Continue'}
                        </button>
                    </div>
                </div>
            )}
            {stage === 'writing' && (
                <Suspense fallback={<div>Loading Writing Section...</div>}>
                    <WritingSection onComplete={handleWritingCompletion} onTaskComplete={handleWritingComplete} />
                </Suspense>
            )}
            {stage === 'speaking' && (
                <Suspense fallback={<div>Loading Speaking Section...</div>}>
                    <SpeakingSection onComplete={handleSpeakingCompletion} onTaskComplete={handleSpeakingComplete} />
                </Suspense>
            )}
            {stage === 'resultsDashboard' && (
                <Suspense fallback={<div>Loading Results...</div>}>
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
                </Suspense>
            )}
            {(id === "test1" || id === "test2") && (
                <AfterTestDetailsModal type={id} isOpen={isAfterTestDetailsModalopen} onClose={() => { setIsAfterTestDetailsModalopen(false) }} />
            )}
        </div >
    );
};

export default Test1;
