"use client"
import React, { useState } from 'react';
import { writingQuestions } from './questions';
import { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';

interface WritingSectionProps {
    onComplete: () => void;
    onTaskComplete: (task: number, evaluation: { score: number; feedback: string }) => void;
}

const WritingSection: React.FC<WritingSectionProps> = ({ onComplete, onTaskComplete }) => {
    const [stage, setStage] = useState<'instructions' | 'readingPassage' | 'audioLecture' | 'task1' | 'task2Instructions' | 'task2'>('instructions');
    const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
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
                // setTask1Submitted(true);
                setStage("task2")
            } else if (task === 2) {
                // setTask2Submitted(true);
            }
        } catch (error) {
            console.error('Error submitting task:', error);
        }
    };

    const handleTask1Submit = () => {
        if (writingTask1.trim() !== '') {
            handleTaskSubmit(1, writingTask1);
        } else {
            setStage("task2Instructions");
        }
    };


    const handleTask2Submit = () => {
        handleTaskSubmit(2, writingTask2);
        onComplete();
    };

    useEffect(() => {
        if (stage === 'readingPassage' && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            setStage('audioLecture');
        }
    }, [stage, timeLeft]);


    return (
        <div className="container mx-auto py-10 px-4 md:py-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10 text-center">Writing Section</h2>
            {stage === 'instructions' && (
                <div className="bg-white shadow p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4">Writing Based on Reading and Listening Directions</h3>
                    <p className="mb-4">
                        For this task, you will read a passage about an academic topic. A clock at the top of the screen will show how much time you have to read. You may take notes on the passage while you read. The passage will then be removed and you will listen to a lecture about the same topic. While you listen, you may also take notes. You will be able to see the reading passage again when it is time for you to write. You may use your notes to help you answer the question.
                    </p>
                    <p className="mb-4">
                        You will have 20 minutes to write a response to a question that asks you about the relationship between the lecture you heard and the reading passage. Try to answer the question as completely as possible using information from the reading passage and the lecture. The question does not ask you to express your personal opinion. Typically, an effective response will be 150 to 225 words.
                    </p>
                    <p className="mb-4">
                        Your response will be judged on the quality of your writing and on the completeness and accuracy of the content.
                    </p>
                    <p className="mb-4">
                        Now you will see the reading passage for 3 minutes. Remember that it will be available to you again when you write. Immediately after the reading time ends, the lecture will begin, so keep your headset on until the lecture is over.
                    </p>
                    <div className="text-center">
                        <button onClick={() => setStage('readingPassage')} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                            Continue
                        </button>
                    </div>
                </div>
            )}
            {stage === 'readingPassage' && (
                <div className="bg-white shadow p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4">Reading Passage</h3>
                    <div className="mb-4" dangerouslySetInnerHTML={{ __html: writingQuestions.task1.passage.replace(/\n/g, '<br>') }} />
                    <div className="text-right text-red-500">
                        Time left: {Math.floor(timeLeft / 60)}:{('0' + timeLeft % 60).slice(-2)}
                    </div>
                    <div className="text-center mt-10">
                        <button onClick={() => setStage("audioLecture")} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                            Continue
                        </button>
                    </div>
                </div>
            )}
            {stage === 'audioLecture' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening to the Lecture</h3>
                    <div className="custom-audio-container flex-col flex gap-10">
                            <img src="/assets/T1W1_Writing.webp"></img>
                            <ReactAudioPlayer
                                src="/assets/T1W1.mp3"
                                controls
                                className="custom-audio-player"
                            />
                        </div>
                    <div className="text-center mt-10">
                        <button onClick={() => setStage("task1")} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                            Continue
                        </button>
                    </div>
                </div>
            )}
            {stage === 'task1' && !task1Submitted && (
                <div className="bg-white shadow p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4">Task 1: Integrated Writing</h3>
                    <p>Question: Summarize the points made in the lecture, being sure to explain how they respond to the specific arguments made in the reading passage.</p>
                    <div className='flex flex-col lg:flex-row justify-between mt-10'>
                        <div className="mb-4 w-full lg:w-[45%]" dangerouslySetInnerHTML={{ __html: writingQuestions.task1.passage.replace(/\n/g, '<br>') }} />
                        <textarea
                            className="p-2 border rounded mb-4 w-full lg:w-[45%] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                            rows={9}
                            value={writingTask1}
                            onChange={(e) => setWritingTask1(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="text-center mt-5">
                        <button onClick={handleTask1Submit} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                            Submit Task 1
                        </button>
                    </div>
                </div>
            )}
            {stage === 'task2Instructions' && (
                <div className="bg-white shadow p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4">Writing Based on Knowledge and Experience Directions</h3>
                    <p className="mb-4">
                        For this task, you will read an online discussion. A professor has posted a question about a topic, and some classmates have responded with their ideas.
                    </p>
                    <p className="mb-4">
                        Write a response that contributes to the discussion. You will have 10 minutes to write your response. It is important to use your own words in the response.
                    </p>
                    <p className="mb-4">
                        Typically, an effective essay will contain a minimum of 100 words.
                    </p>
                    <div className="text-center">
                        <button onClick={() => setStage('task2')} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                            Continue
                        </button>
                    </div>
                </div>
            )}
            {stage === 'task2' && !task2Submitted && (
                <div className="bg-white shadow p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4">Task 2: Independent Writing</h3>
                    <div dangerouslySetInnerHTML={{ __html: writingQuestions.task2.conversation }} />
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
        </div>
    );
};

export default WritingSection;
