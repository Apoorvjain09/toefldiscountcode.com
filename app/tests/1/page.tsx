"use client"
import React, { useState, useEffect } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { readingQuestions, listeningQuestions } from './questions';
import ReactAudioPlayer from 'react-audio-player';
import WritingSection from './WritingSection';
import SpeakingSection from './SpeakingSection';
import ResultsDashboard from './ResultsDashboard';

const Test1 = () => {
    const [stage, setStage] = useState<'intro' | 'instructions' | 'reading' | 'readingPassage1' | 'readingSummaryQuestions1' | 'readingPassage2' | 'readingSummaryQuestions2' | 'listeningInstructions' | 'listeningConversation1' | 'listeningQuestions1' | 'listeningConversation2' | 'listeningQuestions2' | 'listeningConversation3' | 'listeningQuestions3' | 'listeningConversation4' | 'listeningQuestions4' | 'listeningConversation5' | 'listeningQuestions5' | 'writing' | 'speaking' | 'resultsDashboard'>('intro');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>(Array(20).fill(-1));
    const [listeningAnswers, setListeningAnswers] = useState<number[]>(Array(28).fill(-1));
    const [selectedAnswers1, setSelectedAnswers1] = useState<number[]>([]);
    const [selectedAnswers2, setSelectedAnswers2] = useState<number[]>([]);
    const [totalScoreReading, setTotalScoreReading] = useState<number>(0);
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
        readingQuestions.forEach((question, index) => {
            if (answers[index + 1] === question.answer) {
                readingScore++;
            }
        });

        const correctSummaryAnswers1 = readingQuestions.find(q => q.id === 10)?.summaryAnswer || [];
        const correctSummaryAnswers2 = readingQuestions.find(q => q.id === 20)?.summaryAnswer || [];

        // Check if selected summary answers match correct answers
        console.log(selectedAnswers1)
        if (arraysMatch(selectedAnswers1, correctSummaryAnswers1)) {
            readingScore += 2;
        }
        if (arraysMatch(selectedAnswers2, correctSummaryAnswers2)) {
            readingScore += 2;
        }

        // Calculate Listening Score
        listeningQuestions.forEach((question, index) => {
            if (listeningAnswers[index] === question.answer) {
                listeningScore++;
            }
        });

        const totalScore = readingScore + listeningScore;
        setTotalScoreReading(totalScore);
        console.log('Reading Score:', readingScore);
        console.log('Listening Score:', listeningScore);
        console.log('Total Score:', totalScore);
    };

    // Helper function to check if two arrays contain the same elements (order-sensitive)
    const arraysMatch = (arr1: number[], arr2: number[]) => {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    };

    useEffect(() => {
        if (stage === 'listeningQuestions5' && currentQuestion + 1 >= 28) {
            // calculateScore();
        }
    }, [currentQuestion, stage]);

    const handleWritingCompletion = () => {
        setStage('speaking');
        // setStage('speaking');
    };
    const handleSpeakingCompletion = () => {
        setStage('resultsDashboard');
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


    return (
        <div className="container mx-auto py-10 px-4 md:py-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-center">TOEFL Full Length Test 1</h2>
            {stage === 'intro' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col items-center">
                    <p className="mb-8 md:mb-10 w-full md:w-2/3 lg:w-1/2 text-center">
                        A Full Length Test is similar to other toefl tests and takes around 2 hour to complete. It&apos;ll give you a good feel for what you can expect from our full TOEFL practice tests.
                    </p>
                    <button onClick={handleStartTestClick} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        <FaPlayCircle className="mr-2" size={24} />
                        Start Test
                    </button>
                    <div className="flex flex-col md:flex-row flex-wrap justify-around gap-4 md:gap-6 lg:gap-8 w-full">
                        <a href="#" className="bg-green-600 text-white py-2 px-4 rounded inline-block text-center">Reading</a>
                        <button onClick={() => setStage('writing')} className="bg-yellow-600 text-white py-2 px-4 rounded inline-block text-center">Writing</button>
                        <a href="#" className="bg-red-600 text-white py-2 px-4 rounded inline-block text-center">Listening</a>
                        <button onClick={() => setStage("speaking")} className="bg-purple-600 text-white py-2 px-4 rounded inline-block text-center">Speaking</button>
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
                        In the Speaking section, you will answer 6 questions. Some of the questions ask you to speak about your own experience. Other questions ask you to speak about lectures and reading passages.
                    </p>
                    <p className="mb-4">
                        In the Writing section you will answer 2 questions. The first question asks you to write about the relationship between a lecture you will hear and a passage you will read. The second question asks you to write an essay about a topic of general based on your experience.
                    </p>
                    <p className="mb-4">
                        There will be directions for each section which explain how to answer the questions in that section.
                    </p>
                    <p className="mb-4">
                        You should work quickly but carefully on the Reading and Listening questions. Some questions are more difficult than others, but try to answer every one to the best of your ability. If you are not sure of the answer to a question, make the best guess that you can. The questions that you answer by speaking and writing are each separately timed. Try to answer every one of these as completely as possible in the time allowed.
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
                        This section measures your ability to understand academic passages in English. You will read 2 passages and answer 10 questions per passage. You have 36 minutes to read all the passages and answer all the questions.
                    </p>
                    <p className="mb-4">
                        Most questions are worth 1 point, but the last question in each set is worth more than 1 point. The directions indicate how many points you may receive.
                    </p>
                    <p className="mb-4">
                        Some passages include a word or phrase that is underlined in blue. In the Official TOEFL, you will be able to click on the underlined word to see an example and explanation of the word.
                    </p>
                    <p className="mb-4">
                        Within this section, you can go to the next question by clicking Next. You may skip questions in the current passage and go back to them later. If you want to return to previous questions, click on Back.
                    </p>
                    <p className="mb-4">
                        You can click on Review at any time and the review screen will show you which questions you have answered and which you have not answered. From this review screen, you may go directly to any question you have already seen in the current passage.
                    </p>
                    <p className="mb-4">
                        You may now begin the Reading section. NOTE: In an actual test some test takers may receive 4 passages; those test takers will have 72 minutes (1 hour and 12 minutes) to answer the questions.
                    </p>
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
                    {readingQuestions.slice(currentQuestion, currentQuestion + 1).map((q, index) => (
                        <div key={q.id} className="mb-8 flex flex-col lg:flex-row gap-10">
                            <p className="mb-2 whitespace-pre-line lg:w-[55%] overflow-y-scroll h-[35rem] p-2">
                                <strong>Passage:</strong> {highlightText(q.passage, q.highlight)}
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
                    <div className="text-center">
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
                    {readingQuestions.slice(9, 10).map((q, index) => (
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
                    <div className="text-center mt-4">
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
            {stage === 'readingPassage2' && (
                <div className="bg-white shadow p-3 sm:p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">Reading Section - Passage 2</h3>
                    {readingQuestions.slice(currentQuestion, currentQuestion + 1).map((q, index) => (
                        <div key={q.id} className="mb-8 flex flex-col lg:flex-row gap-10">
                            <p className="mb-2 whitespace-pre-line lg:w-[55%] overflow-y-scroll h-[35rem] p-2">
                                <strong>Passage:</strong> {highlightText(q.passage, q.highlight)}
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
                    <div className="text-center">
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
                            {currentQuestion < 9 ? 'Next' : 'Continue'}
                        </button>
                    </div>
                </div>
            )}
            {stage === 'readingSummaryQuestions2' && (
                <div className="bg-white shadow p-3 sm:p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4 text-center">Reading Section - Passage 2 Summary</h3>
                    {readingQuestions.slice(19, 20).map((q, index) => (
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
                    <div className="text-center mt-4">
                        <button
                            onClick={() => {
                                calculateScore()
                                setStage('resultsDashboard');
                                // setStage('listeningInstructions');
                                setCurrentQuestion(0);
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            Continue
                        </button>
                    </div>
                </div>
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
            )
            }
            {
                stage === 'listeningConversation1' && (
                    <div className="bg-white shadow p-6 rounded mb-4 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold mb-4 text-center">Listening Conversation 1</h3>
                        <p className="mb-4">[Use Headphones For Better Quality]</p>
                        <ReactAudioPlayer
                            src="/assets/T1C1.mp4"
                            controls
                        />
                        <div className="text-center mt-10">
                            <button onClick={handleContinueClick} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                                Continue
                            </button>
                        </div>
                    </div>
                )
            }
            {
                stage === 'listeningQuestions1' && (
                    <div className="bg-white shadow p-2 sm:p-6 rounded mb-4">
                        <h3 className="text-xl font-bold mb-4 text-center">Listening Section</h3>
                        {listeningQuestions.slice(0, 6).map((q, index) => (
                            <div key={q.id} className="mb-8 border rounded-lg p-2">
                                <p className="mb-2"><strong>Question {index + 1}:</strong> {q.question}</p>
                                <ul className="list-none mb-4">
                                    {q.options.map((option, i) => (
                                        <li key={i} className="mb-1">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={listeningAnswers[index] === i}
                                                    onChange={() => handleListeningOptionChange(index, i)}
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
                            {/* <button
                            onClick={() => {
                                if (currentQuestion < 6) {
                                    setCurrentQuestion(currentQuestion + 1);
                                } else {
                                    handleContinueClick();
                                }
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            {currentQuestion < 6 ? 'Next' : 'Continue'}
                        </button> */}
                            <button
                                onClick={() => {
                                    {
                                        handleContinueClick();
                                    }
                                }}
                                className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                            >
                                {'Continue'}
                            </button>
                        </div>
                    </div>
                )
            }
            {
                stage === 'listeningConversation2' && (
                    <div className="bg-white shadow p-6 rounded mb-4 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold mb-4 text-center">Listening Conversation 2</h3>
                        <p className="mb-4">[Use Headphones For Better Quality]</p>
                        <ReactAudioPlayer
                            src="/assets/T1C2.mp4"
                            controls
                        />
                        <div className="text-center mt-10">
                            <button onClick={handleContinueClick} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                                Continue
                            </button>
                        </div>
                    </div>
                )
            }
            {
                stage === 'listeningQuestions2' && (
                    <div className="bg-white shadow p-2 sm:p-6 rounded mb-4">
                        <h3 className="text-xl font-bold mb-4 text-center">Listening Section</h3>
                        {listeningQuestions.slice(6, 12).map((q, index) => (
                            <div key={q.id} className="mb-8 border rounded-lg p-2">
                                <p className="mb-2"><strong>Question {index + 1}:</strong> {q.question}</p>
                                <ul className="list-none mb-4">
                                    {q.options.map((option, i) => (
                                        <li key={i} className="mb-1">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={listeningAnswers[index + 6] === i}
                                                    onChange={() => handleListeningOptionChange(index + 6, i)}
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
                            {/* <button
                            onClick={() => {
                                if (currentQuestion < 12) {
                                    setCurrentQuestion(currentQuestion + 1);
                                } else {
                                    handleContinueClick();
                                }
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            {currentQuestion < 12 ? 'Next' : 'Continue'}
                        </button> */}
                            <button
                                onClick={() => {
                                    {
                                        handleContinueClick();
                                    }
                                }}
                                className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                            >
                                {'Continue'}
                            </button>
                        </div>
                    </div>
                )
            }
            {
                stage === 'listeningConversation3' && (
                    <div className="bg-white shadow p-6 rounded mb-4 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold mb-4 text-center">Listening Conversation 3</h3>
                        <p className="mb-4">[Use Headphones For Better Quality]</p>
                        <ReactAudioPlayer
                            src="/assets/T1C3.mp3"
                            controls
                        />
                        <div className="text-center mt-10">
                            <button onClick={handleContinueClick} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                                Continue
                            </button>
                        </div>
                    </div>
                )
            }
            {
                stage === 'listeningQuestions3' && (
                    <div className="bg-white shadow p-2 sm:p-6 rounded mb-4">
                        <h3 className="text-xl font-bold mb-4 text-center">Listening Section</h3>
                        {listeningQuestions.slice(12, 18).map((q, index) => (
                            <div key={q.id} className="mb-8 border rounded-lg p-2">
                                <p className="mb-2"><strong>Question {index + 13}:</strong> {q.question}</p>
                                <ul className="list-none mb-4">
                                    {q.options.map((option, i) => (
                                        <li key={i} className="mb-1">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={listeningAnswers[index + 12] === i}
                                                    onChange={() => handleListeningOptionChange(index + 12, i)}
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
                            {/* <button
                            onClick={() => {
                                if (currentQuestion < 18) {
                                    setCurrentQuestion(currentQuestion + 1);
                                } else {
                                    handleContinueClick();
                                }
                            }}
                            className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                        >
                            {currentQuestion < 18 ? 'Next' : 'Continue'}
                        </button> */}
                            <button
                                onClick={() => {
                                    {
                                        handleContinueClick();
                                    }
                                }}
                                className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                            >
                                {'Continue'}
                            </button>
                        </div>
                    </div>
                )
            }
            {
                stage === 'listeningConversation4' && (
                    <div className="bg-white shadow p-6 rounded mb-4 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold mb-4 text-center">Listening Conversation 4</h3>
                        <p className="mb-4">[Use Headphones For Better Quality]</p>
                        <ReactAudioPlayer
                            src="/assets/T1C4.mp3"
                            controls
                        />
                        <div className="text-center mt-10">
                            <button onClick={handleContinueClick} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                                Continue
                            </button>
                        </div>
                    </div>
                )
            }
            {
                stage === 'listeningQuestions4' && (
                    <div className="bg-white shadow p-2 sm:p-6 rounded mb-4">
                        <h3 className="text-xl font-bold mb-4 text-center">Listening Section</h3>
                        {listeningQuestions.slice(18, 23).map((q, index) => (
                            <div key={q.id} className="mb-8 border rounded-lg p-2">
                                <p className="mb-2"><strong>Question {index + 19}:</strong> {q.question}</p>
                                <ul className="list-none mb-4">
                                    {q.options.map((option, i) => (
                                        <li key={i} className="mb-1">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={listeningAnswers[index + 18] === i}
                                                    onChange={() => handleListeningOptionChange(index + 18, i)}
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
                                    {
                                        handleContinueClick();
                                    }
                                }}
                                className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                            >
                                {'Continue'}
                            </button>
                        </div>
                    </div>
                )
            }
            {
                stage === 'listeningConversation5' && (
                    <div className="bg-white shadow p-6 rounded mb-4 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold mb-4 text-center">Listening Conversation 5</h3>
                        <p className="mb-4">[Use Headphones For Better Quality]</p>
                        <ReactAudioPlayer
                            src="/assets/T1C5.mp3"
                            controls
                        />
                        <div className="text-center mt-10">
                            <button onClick={handleContinueClick} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                                Continue
                            </button>
                        </div>
                    </div>
                )
            }
            {
                stage === 'listeningQuestions5' && (
                    <div className="bg-white shadow p-2 sm:p-6 rounded mb-4">
                        <h3 className="text-xl font-bold mb-4 text-center">Listening Section</h3>
                        {listeningQuestions.slice(23, 28).map((q, index) => (
                            <div key={q.id} className="mb-8 border rounded-lg p-2">
                                <p className="mb-2"><strong>Question {index + 24}:</strong> {q.question}</p>
                                <ul className="list-none mb-4">
                                    {q.options.map((option, i) => (
                                        <li key={i} className="mb-1">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={listeningAnswers[index + 23] === i}
                                                    onChange={() => handleListeningOptionChange(index + 23, i)}
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
                                    {
                                        handleContinueClick();
                                    }
                                }}
                                className="bg-blue-600 text-white py-2 px-4 rounded inline-block"
                            >
                                {'Continue'}
                            </button>
                        </div>
                    </div>
                )
            }
            {stage === 'writing' && <WritingSection onComplete={handleWritingCompletion} onTaskComplete={handleWritingComplete} />}
            {stage === 'speaking' && <SpeakingSection onComplete={handleSpeakingCompletion} onTaskComplete={handleSpeakingComplete} />}
            {stage === 'resultsDashboard' && <ResultsDashboard summaryAnswers1={selectedAnswers1} summaryAnswers2={selectedAnswers2} readingAnswers={answers} totalScoreReading={totalScoreReading} writingScores={writingScores} speakingScores={speakingScores} />}
        </div >
    );
};

export default Test1;
