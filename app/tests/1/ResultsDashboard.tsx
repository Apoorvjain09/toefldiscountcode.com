import React, { useState } from 'react';
import { readingQuestions, listeningQuestions } from './questions'; // Adjust the import path as necessary
import WritingSection from './WritingSection';

interface ResultsDashboardProps {
    readingAnswers: number[];
    summaryAnswers1: number[];
    summaryAnswers2: number[];
    totalScoreReading: number;
    totalScoreListening: number;
    listeningAnswers: number[],
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


const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ readingAnswers, summaryAnswers1, summaryAnswers2, totalScoreReading, totalScoreListening, listeningAnswers, writingScores, speakingScores }) => {
    console.log(totalScoreReading)
    const [selectedSection, setSelectedSection] = useState<'reading' | 'listening' | 'writing' | 'speaking' | null>(null);

    const handleSectionClick = (section: 'reading' | 'listening' | 'writing' | 'speaking') => {
        setSelectedSection(section);
    };

    const renderCorrectAnswer = (correctAnswer: number | number[] | undefined, options: string[]) => {
        if (correctAnswer === undefined) {
            return "No Answer";
        }
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
                            <h4 className="text-lg font-bold mb-4 mt-10">Reading Section Results (Total Score: {totalScoreReading}/22)</h4>
                            {readingQuestions.map((q, index) => {
                                if (q.id === 10) {
                                    const question10 = readingQuestions.find(q => q.id === 10);
                                    return (
                                        <div key={q.id} className="mb-4 border p-2 rounded-2xl">
                                            <h4 className="text-lg font-bold mb-4">Summary Questions - Passage 1 [0:A, 1:B, 2:C, 3:D ,4:E ,5:F]</h4>
                                            <ul className="list-disc ml-6 mb-2">
                                                {summaryAnswers1.map((answer, idx) => {
                                                    const isCorrect = question10?.summaryAnswer?.includes(answer);
                                                    return (
                                                        <li
                                                            key={idx}
                                                            style={{
                                                                backgroundColor: isCorrect ? 'lightgreen' : 'lightcoral',
                                                                padding: '5px',
                                                                borderRadius: '5px',
                                                                marginBottom: '10px'
                                                            }}
                                                        >
                                                            Answer {idx + 1}: {answer}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                            <strong>Correct Answer:</strong> <div dangerouslySetInnerHTML={{ __html: question10?.summaryAnswer?.map((idx: number) => question10.options[idx]).join('<br/>') || 'No Correct Answer' }} />
                                        </div>
                                    );
                                } else if (q.id === 20) {
                                    const question20 = readingQuestions.find(q => q.id === 20);
                                    return (
                                        <div key={q.id} className="mb-4 border p-2 rounded-2xl">
                                            <h4 className="text-lg font-bold mb-4">Summary Questions - Passage 2 [0:A, 1:B, 2:C, 3:D ,4:E ,5:F]</h4>
                                            <ul className="list-disc ml-6 mb-2">
                                                {summaryAnswers2.map((answer, idx) => {
                                                    const isCorrect = question20?.summaryAnswer?.includes(answer);
                                                    return (
                                                        <li
                                                            key={idx}
                                                            style={{
                                                                backgroundColor: isCorrect ? 'lightgreen' : 'lightcoral',
                                                                padding: '5px',
                                                                borderRadius: '5px',
                                                                marginBottom: '10px'
                                                            }}
                                                        >
                                                            Answer {idx + 1}: {answer}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                            <strong>Correct Answer:</strong> <div dangerouslySetInnerHTML={{ __html: question20?.summaryAnswer?.map((idx: number) => question20.options[idx]).join('<br/>') || 'No Correct Answer' }} />
                                        </div>
                                    );
                                } else {
                                    const isCorrect = readingAnswers[index + 1] === q.answer;
                                    return (
                                        <div key={q.id} className="mb-4 border p-2 rounded-2xl">
                                            <p><strong>Question {index + 1}:</strong> {q.question}</p>
                                            <ul className="list-disc ml-6 mb-2">
                                                {q.options.map((option, i) => (
                                                    <li key={i}>{option}</li>
                                                ))}
                                            </ul>
                                            <p style={{ backgroundColor: isCorrect ? 'lightgreen' : 'lightcoral', padding: '5px', borderRadius: '5px' }}>
                                                <strong>Your Answer:</strong> {renderCorrectAnswer(readingAnswers[index + 1], q.options)}
                                            </p>
                                            <p><strong>Correct Answer:</strong> {renderCorrectAnswer(q.answer, q.options)}</p>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    )}

                    {selectedSection === 'listening' && (
                        <div>
                            <h4 className="text-lg font-bold mb-4 mt-10">Listening Section Results (Total Score: {totalScoreListening}/28)</h4>
                            {listeningQuestions.map((q, index) => {
                                const isCorrect = listeningAnswers[index] === q.answer;
                                return (
                                    <div key={q.id} className="mb-4 border p-2 rounded-2xl">
                                        <p><strong>Question {index + 1}:</strong> {q.question}</p>
                                        <ul className="list-disc ml-6 mb-2">
                                            {q.options.map((option, i) => (
                                                <li key={i}>{option}</li>
                                            ))}
                                        </ul>
                                        <p style={{
                                            backgroundColor: isCorrect ? 'lightgreen' : 'lightcoral',
                                            padding: '5px',
                                            borderRadius: '5px'
                                        }}>
                                            <strong>Your Answer:</strong> {q.options[listeningAnswers[index]]}
                                        </p>
                                        <p><strong>Correct Answer:</strong> {renderCorrectAnswer(q.answer, q.options)}</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    {selectedSection === 'writing' && (
                        <div>
                            <h4 className="text-lg font-bold mb-4 mt-10">
                                Writing Section Results (Total Score: {Math.round(((writingScores.task1?.score ?? 0) + (writingScores.task2?.score ?? 0)) * 3)}/30)
                            </h4>
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
                            <h4 className="text-lg font-bold mb-4 mt-10">
                                Speaking Section Results (Total Score: {Math.round(((speakingScores.task1?.score ?? 0) + (speakingScores.task2?.score ?? 0) + (speakingScores.task3?.score ?? 0) + (speakingScores.task4?.score ?? 0)) * 1.875)}/30)
                            </h4>                            
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
