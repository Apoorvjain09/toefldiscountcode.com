"use client"
import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { FaSpinner } from 'react-icons/fa';

interface WritingSectionProps {
    onComplete: () => void;
    onTaskComplete: (task: number, evaluation: { score: number; feedback: string }) => void;
}

const WritingSection: React.FC<WritingSectionProps> = ({ onComplete, onTaskComplete }) => {
    const [stage, setStage] = useState<'instructions' | 'readingPassage' | 'audioLecture' | 'task1' | 'task2Instructions' | 'task2'>('instructions');
    const [timeLeft, setTimeLeft] = useState(180);
    const [writingTask1, setWritingTask1] = useState('');
    const [writingTask2, setWritingTask2] = useState('');
    const [task1Submitted, setTask1Submitted] = useState(false);
    const [task2Submitted, setTask2Submitted] = useState(false);
    const [evaluation, setEvaluation] = useState<{ score: number; feedback: string } | null>(null);
    const [tryReloadAudio, setTryReloadAudio] = useState(0);
    const [loading, setLoading] = useState(false)

    const pathname = usePathname();
    const id = pathname.split('/').pop();

    if (!id) {
        return <div>Loading...</div>;
    }
    let writingQuestions: any;
    try {
        const questionsModule = require(`../questions/${id}`);
        writingQuestions = questionsModule.writingQuestions;

    } catch (error) {
        console.error(`Questions file for Test ${id} not found.`);
        return <div>Test questions not found.</div>;
    }

    const handleTaskSubmit = async (testNumber: number, task: number, passage: string) => {
        try {
            setLoading(true)
            const response = await fetch('/api/evaluate-writing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ testNumber, task, passage }),
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
        setLoading(false)
    };

    const handleTask1Submit = () => {
        if (writingTask1.trim() !== '') {
            handleTaskSubmit(writingQuestions.task1.passage, 1, writingTask1);
        } else {
            setStage("task2Instructions");
        }
    };

    const handleTask2Submit = () => {
        handleTaskSubmit(writingQuestions.task2.conversation, 2, writingTask2);
        onComplete();
    };

    useEffect(() => {
        if (stage === 'readingPassage' && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (stage === 'readingPassage' && timeLeft === 0) {
            setStage('audioLecture');
        }
    }, [stage, timeLeft]);

    return (
        <div className="container mx-auto">
            {stage === 'instructions' && (
                <div className="shadow-sm p-6 border rounded-lg my-4">
                    <h3 className="text-xl font-bold mb-4">
                        Writing Based on Reading and Listening Directions
                    </h3>
                    {[
                        "For this task, you will read a passage about an academic topic. A clock at the top of the screen will show how much time you have to read. You may take notes on the passage while you read. The passage will then be removed and you will listen to a lecture about the same topic. While you listen, you may also take notes. You will be able to see the reading passage again when it is time for you to write. You may use your notes to help you answer the question.",
                        "You will have 20 minutes to write a response to a question that asks you about the relationship between the lecture you heard and the reading passage. Try to answer the question as completely as possible using information from the reading passage and the lecture. The question does not ask you to express your personal opinion. Typically, an effective response will be 150 to 225 words.",
                        "Your response will be judged on the quality of your writing and on the completeness and accuracy of the content.",
                        "Now you will see the reading passage for 3 minutes. Remember that it will be available to you again when you write. Immediately after the reading time ends, the lecture will begin, so keep your headset on until the lecture is over."
                    ].map((text, i) => (
                        <p key={i} className="mb-4">{text}</p>
                    ))}

                    <div className="text-center">
                        <Button variant="outline" onClick={() => setStage('readingPassage')}>
                            Continue
                        </Button>
                    </div>
                </div>
            )}
            {stage === 'readingPassage' && (
                <div className="bg-white shadow p-6 rounded mb-4">
                    <h3 className="text-xl font-bold">Reading Passage</h3>
                    <div className="mb-4" dangerouslySetInnerHTML={{ __html: writingQuestions.task1.passage.replace(/\n/g, '<br>') }} />
                    <div className="text-right text-red-500">
                        Time left: {Math.floor(timeLeft / 60)}:{('0' + timeLeft % 60).slice(-2)}
                    </div>
                    <div className="text-center mt-10">
                        <Button variant="outline" onClick={() => setStage("audioLecture")} >
                            Continue
                        </Button>
                    </div>
                </div>
            )}
            {stage === 'audioLecture' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold mb-4 text-center">Listening to the Lecture</h3>
                    <div className="custom-audio-container flex-col flex gap-10">
                        <img src={writingQuestions.task1_photo}></img>
                        <ReactAudioPlayer
                            key={tryReloadAudio}
                            src={writingQuestions.task1_audio}
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
                        <Button onClick={() => { setStage("task1"); console.log(stage) }} variant="outline">
                            Continue
                        </Button>
                    </div>
                </div>
            )}
            {stage === 'task1' && !task1Submitted && (
                <div className="bg-white shadow p-6 rounded mb-4 space-y-6">
                    <h3 className="text-xl font-bold">Task 1: Integrated Writing</h3>
                    <p className='p-4 border shadow-xl rounded-xl'>
                        <span className='font-bold'>Question:<br /></span> Summarize the points made in the lecture, being sure to explain how they respond to the specific arguments made in the reading passage.
                    </p>
                    <div className='flex flex-col lg:flex-row justify-between'>
                        <div className="w-full lg:w-[45%]" dangerouslySetInnerHTML={{ __html: writingQuestions.task1.passage.replace(/\n/g, '<br>') }} />
                        <textarea
                            className="p-2 border rounded-2xl mb-4 w-full lg:w-[45%] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                            rows={9}
                            value={writingTask1}
                            placeholder='start typing here....'
                            onChange={(e) => setWritingTask1(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <Button variant="default" onClick={handleTask1Submit}>
                            {loading ? (<div className='animate-spin'><FaSpinner /></div>) : ("Submit Task 1")}
                        </Button>
                    </div>
                </div>
            )}
            {stage === 'task2Instructions' && (
                <div className="border shadow-sm p-6 rounded-lg mb-4">
                    <h3 className="text-xl font-bold mb-4">Writing Based on Knowledge and Experience Directions</h3>
                    {[
                        "For this task, you will read an online discussion. A professor has posted a question about a topic, and some classmates have responded with their ideas.",
                        "Write a response that contributes to the discussion. You will have 10 minutes to write your response. It is important to use your own words in the response.",
                        "Typically, an effective essay will contain a minimum of 100 words."
                    ].map((text, i) => <p key={i} className="mb-4">{text}</p>)}
                    <div className="text-center mt-8">
                        <Button variant="outline" onClick={() => setStage('task2')}>
                            Continue
                        </Button>
                    </div>
                </div>
            )}
            {stage === 'task2' && !task2Submitted && (
                <div className="bg-white shadow p-6 rounded mb-4">
                    <h3 className="text-xl font-bold mb-4">Task 2: Independent Writing</h3>
                    <div dangerouslySetInnerHTML={{ __html: writingQuestions.task2.conversation }} />
                    <textarea
                        className="w-full p-2 border rounded-2xl mb-4 mt-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                        rows={10}
                        placeholder='start typing here....'
                        value={writingTask2}
                        onChange={(e) => setWritingTask2(e.target.value)}
                    ></textarea>
                    <div className="text-center">
                        <Button variant="outline" onClick={handleTask2Submit}>
                            {loading ? (<div className='animate-spin'><FaSpinner /></div>) : ("Submit Task 2")}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WritingSection;
