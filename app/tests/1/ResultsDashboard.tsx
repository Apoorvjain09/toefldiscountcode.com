import React, { useState } from 'react';
import { readingQuestions, listeningQuestions } from './questions'; // Adjust the import path as necessary
import WritingSection from './WritingSection';

interface ResultsDashboardProps {
    readingAnswers: number[];
    writingScores: {
        task1: { score: number; feedback: string } | null,
        task2: { score: number; feedback: string } | null
    };
    speakingScores: {
        task1: { score: number; feedback: string } | null,
        task2: { score: number; feedback: string } | null,
        task3: { score: number; feedback: string } | null,
        task4: { score: number; feedback: string } | null
    };
}




const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ readingAnswers, writingScores, speakingScores }) => {
    const [selectedSection, setSelectedSection] = useState<'reading' | 'listening' | 'writing' | 'speaking' | null>(null);

    const handleSectionClick = (section: 'reading' | 'listening' | 'writing' | 'speaking') => {
        setSelectedSection(section);
    };

    const renderCorrectAnswer = (correctAnswer: number | number[], options: string[]) => {
        if (Array.isArray(correctAnswer)) {
            return correctAnswer.map((index) => options[index]).join(', ');
        } else {
            return options[correctAnswer];
        }
    };

    return (
        <div className="bg-white shadow p-6 rounded mb-4 flex flex-col justify-center items-center gap-4">
            <h3 className="text-xl font-bold mb-4">Test Results</h3>
            {selectedSection === null ? (
                <div className="flex flex-col md:flex-row flex-wrap justify-around gap-4 md:gap-6 lg:gap-8 w-full">
                    <button onClick={() => handleSectionClick('reading')} className="bg-green-600 text-white py-2 px-4 rounded inline-block text-center">Reading Results</button>
                    <button onClick={() => handleSectionClick('listening')} className="bg-red-600 text-white py-2 px-4 rounded inline-block text-center">Listening Results</button>
                    <button onClick={() => handleSectionClick('writing')} className="bg-yellow-600 text-white py-2 px-4 rounded inline-block text-center">Writing Results</button>
                    <button onClick={() => handleSectionClick('speaking')} className="bg-purple-600 text-white py-2 px-4 rounded inline-block text-center">Speaking Results</button>
                </div>
            ) : (
                <>
                    <div className="flex flex-col md:flex-row flex-wrap justify-around gap-4 md:gap-6 lg:gap-8 w-full">
                        <button onClick={() => handleSectionClick('reading')} className="bg-green-600 text-white py-2 px-4 rounded inline-block text-center">Reading Results</button>
                        <button onClick={() => handleSectionClick('listening')} className="bg-red-600 text-white py-2 px-4 rounded inline-block text-center">Listening Results</button>
                        <button onClick={() => handleSectionClick('writing')} className="bg-yellow-600 text-white py-2 px-4 rounded inline-block text-center">Writing Results</button>
                        <button onClick={() => handleSectionClick('speaking')} className="bg-purple-600 text-white py-2 px-4 rounded inline-block text-center">Speaking Results</button>
                    </div>
                    {selectedSection === 'reading' && (
                        <div>
                            <h4 className="text-lg font-bold mb-4 mt-10">Reading Section Results</h4>
                            {readingQuestions.map((q, index) => (
                                <div key={q.id} className="mb-4 border p-2 rounded-2xl">
                                    <p><strong>Question {index + 1}:</strong> {q.question}</p>
                                    <ul className="list-disc ml-6 mb-2">
                                        {q.options.map((option, i) => (
                                            <li key={i}>{option}</li>
                                        ))}
                                    </ul>
                                    <p><strong>Your Answer:</strong> {renderCorrectAnswer(readingAnswers[index], q.options)}</p>
                                    <p><strong>Correct Answer:</strong> {renderCorrectAnswer(q.answer, q.options)}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {selectedSection === 'listening' && (
                        <div>
                            <h4 className="text-lg font-bold mb-4 mt-10">Listening Section Results</h4>
                            {listeningQuestions.map((q, index) => (
                                <div key={q.id} className="mb-4 border p-2 rounded-2xl">
                                    <p><strong>Question {index + 1}:</strong> {q.question}</p>
                                    <ul className="list-disc ml-6 mb-2">
                                        {q.options.map((option, i) => (
                                            <li key={i}>{option}</li>
                                        ))}
                                    </ul>
                                    <p><strong>Your Answer:</strong> {/* Show the user's answer here */}</p>
                                    <p><strong>Correct Answer:</strong> {renderCorrectAnswer(q.answer, q.options)}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {selectedSection === 'writing' && (
                        <div>
                            <h4 className="text-lg font-bold mb-4 mt-10">Writing Section Results</h4>
                            {writingScores.task1 && (
                                <div className="mb-4 border p-2 rounded-2xl">
                                    <h5 className="font-bold mb-2">Task 1</h5>
                                    <p><strong>Score:</strong> {writingScores.task1.score}</p>
                                    <p><strong>Feedback:</strong> {writingScores.task1.feedback}</p>
                                </div>
                            )}
                            {writingScores.task2 && (
                                <div className="mb-4 border p-2 rounded-2xl">
                                    <h5 className="font-bold mb-2">Task 2</h5>
                                    <p><strong>Score:</strong> {writingScores.task2.score}</p>
                                    <p><strong>Feedback:</strong> {writingScores.task2.feedback}</p>
                                </div>
                            )}
                        </div>
                    )}
                    {selectedSection === 'speaking' && (
                        <div>
                            <h4 className="text-lg font-bold mb-4 mt-10">Speaking Section Results</h4>
                            {speakingScores.task1 && (
                                <div className="mb-4 border p-2 rounded-2xl">
                                    <h5 className="font-bold mb-2">Task 1</h5>
                                    <p><strong>Score:</strong> {speakingScores.task1.score}</p>
                                    <p><strong>Feedback:</strong> {speakingScores.task1.feedback}</p>
                                </div>
                            )}
                            {speakingScores.task2 && (
                                <div className="mb-4 border p-2 rounded-2xl">
                                    <h5 className="font-bold mb-2">Task 2</h5>
                                    <p><strong>Score:</strong> {speakingScores.task2.score}</p>
                                    <p><strong>Feedback:</strong> {speakingScores.task2.feedback}</p>
                                </div>
                            )}
                            {speakingScores.task3 && (
                                <div className="mb-4 border p-2 rounded-2xl">
                                    <h5 className="font-bold mb-2">Task 3</h5>
                                    <p><strong>Score:</strong> {speakingScores.task3.score}</p>
                                    <p><strong>Feedback:</strong> {speakingScores.task3.feedback}</p>
                                </div>
                            )}
                            {speakingScores.task4 && (
                                <div className="mb-4 border p-2 rounded-2xl">
                                    <h5 className="font-bold mb-2">Task 4</h5>
                                    <p><strong>Score:</strong> {speakingScores.task4.score}</p>
                                    <p><strong>Feedback:</strong> {speakingScores.task4.feedback}</p>
                                </div>
                            )}
                        </div>
                    )}

                    <button onClick={() => setSelectedSection(null)} className="bg-blue-600 text-white py-2 px-4 rounded inline-block mt-4">Back to Sections</button>
                </>
            )}
        </div>
    );
};

export default ResultsDashboard;
