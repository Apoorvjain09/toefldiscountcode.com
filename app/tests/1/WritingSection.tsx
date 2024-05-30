"use client"
import React, { useState } from 'react';
import { writingQuestions } from './questions';

interface WritingSectionProps {
    onComplete: () => void;
    onTaskComplete: (task: number, evaluation: { score: number; feedback: string }) => void;
}

const WritingSection: React.FC<WritingSectionProps> = ({ onComplete, onTaskComplete }) => {
    const [writingTask1, setWritingTask1] = useState('');
    const [writingTask2, setWritingTask2] = useState('');
    const [task1Submitted, setTask1Submitted] = useState(false);
    const [task2Submitted, setTask2Submitted] = useState(false);
    const [evaluation, setEvaluation] = useState<{ score: number; feedback: string } | null>(null);
    
    const handleTaskSubmit = async (task: number, passage: string) => {
        try {
            const response = await fetch('/api/evaluate-writing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ task, passage }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit task');
            }

            const data = await response.json();
            setEvaluation(data);
            console.log(`Evaluation for Task ${task}:`, data);

            onTaskComplete(task, data);
            console.log(onTaskComplete(task, data))

            if (task === 1) {
                setTask1Submitted(true);
            } else if (task === 2) {
                setTask2Submitted(true);
            }
        } catch (error) {
            console.error('Error submitting task:', error);
        }
    };

    const handleTask1Submit = () => {
        handleTaskSubmit(1, writingTask1);
    };

    const handleTask2Submit = () => {
        handleTaskSubmit(2, writingTask2);
        onComplete();
    };

    return (
        <div className="container mx-auto py-10 px-4 md:py-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10 text-center">Writing Section</h2>
            {!task1Submitted && (
                <div className="bg-white shadow p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4">Task 1: Integrated Writing</h3>
                    <p className="mb-4">{writingQuestions.task1.passage}</p>
                    <textarea
                        className="w-full p-2 border rounded mb-4"
                        rows={10}
                        value={writingTask1}
                        onChange={(e) => setWritingTask1(e.target.value)}
                    ></textarea>
                    <div className="text-center">
                        <button onClick={handleTask1Submit} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                            Submit Task 1
                        </button>
                    </div>
                </div>
            )}
            {/* {task1Submitted && (
                <div className="bg-white shadow p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4">Evaluation for Task 1</h3>
                    <p><strong>Score:</strong> {evaluation?.score}</p>
                    <p><strong>Feedback:</strong> {evaluation?.feedback}</p>
                </div>
            )} */}
            {task1Submitted && !task2Submitted && (
                <div className="bg-white shadow p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4">Task 2: Independent Writing</h3>
                    <p className="mb-4">{writingQuestions.task2.prompt}</p>
                    <textarea
                        className="w-full p-2 border rounded mb-4"
                        rows={10}
                        value={writingTask2}
                        onChange={(e) => setWritingTask2(e.target.value)}
                    ></textarea>
                    <div className="text-center">
                        <button onClick={handleTask2Submit} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                            Submit Task 2
                        </button>
                    </div>
                </div>
            )}
            {/* {task2Submitted && (
                <>
                    <div className="bg-white shadow p-6 rounded mb-4">
                        <h3 className="text-xl font-bold mb-4">Evaluation for Task 2</h3>
                        <p><strong>Score:</strong> {evaluation?.score}</p>
                        <p><strong>Feedback:</strong> {evaluation?.feedback}</p>
                    </div>
                    <p className="text-center mt-10">Your answers have been submitted. Thank you!</p>
                    <div className="text-center mt-10">
                        <button onClick={onComplete} className="bg-green-600 text-white py-2 px-4 rounded inline-block">
                            Continue to Speaking Section
                        </button>
                    </div>
                </>
            )} */}
        </div>
    );
};

export default WritingSection;
