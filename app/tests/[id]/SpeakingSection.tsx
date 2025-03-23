import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { FaSpinner } from 'react-icons/fa';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface SpeakingSectionProps {
    onComplete: () => void;
    onTaskComplete: (task: number, evaluation: { score: number; feedback: string }) => void;
}

const SpeakingSection: React.FC<SpeakingSectionProps> = ({ onComplete, onTaskComplete }) => {
    const [stage, setStage] = useState<'intro' | 'task1' | 'prepare' | 'speak' | 'task2Intro' | 'task2Passage' | 'task2Conversation' | 'task2QuestionPrepare' | 'task2Speak' | 'task3Intro' | 'task3Passage' | 'task3Conversation' | 'task3QuestionPrepare' | 'task3Speak' | 'task4Intro' | 'task4Conversation' | 'task4QuestionPrepare' | 'task4Speak'>('intro');
    const [key, setKey] = useState<number>(0);
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
    const [evaluation, setEvaluation] = useState<{ score: number; feedback: string } | null>(null);
    const { transcript, listening, resetTranscript } = useSpeechRecognition();
    const task2Intro = "In this question of the TOEFL Speaking Task 2, you'll first read a short passage about either a campus announcement or a student's letter. Next, you will hear a conversation between two students discussing their opinions on the passage you just read. You will then be asked a question about what you have read and heard. You'll have 30 seconds to prepare your answer and 60 seconds to speak.";
    const task3Intro = "In this question of the TOEFL Speaking Task 3, you'll first read a short passage about either a campus announcement or a student's letter. Next, you will hear a conversation between two students discussing their opinions on the passage you just read. You will then be asked a question about what you have read and heard. You'll have 30 seconds to prepare your answer and 60 seconds to speak.";
    const task4Intro = "In this question of the TOEFL Speaking Task 4, you'll first read a short passage on an academic topic. Next, you will hear a lecture on the same topic. You will then be asked a question about what you have read and heard. You'll have 30 seconds to prepare your answer and 60 seconds to speak.";
    const [currentTask, setCurrentTask] = useState<number>(0);
    const [tryReloadAudio, setTryReloadAudio] = useState(0);
    const [loading, setLoading] = useState(false)
    const pathname = usePathname();
    const id = pathname.split('/').pop();

    let speakingQuestions: any;

    try {
        const questionsModule = require(`../questions/${id}`);
        speakingQuestions = questionsModule.speakingQuestions;

    } catch (error) {
        console.error(`Questions file for Test ${id} not found.`);
    }

    const [question, setQuestion] = useState<string>(`${speakingQuestions[0].question1}`);
    const currentQuestion = speakingQuestions[currentTask];


    useEffect(() => {
        if (stage === 'task1') {
            const timer = setTimeout(() => {
                setStage('prepare');
                setKey(prevKey => prevKey + 1);
            }, 5000); // 5 seconds delay
            return () => clearTimeout(timer);
        }
    }, [stage]);

    useEffect(() => {
        if (stage === 'prepare') {
            const timer = setTimeout(() => {
                setStage('speak');
                setKey(prevKey => prevKey + 1);
            }, 15000); // 15 seconds delay
            return () => clearTimeout(timer);
        }
    }, [stage]);

    useEffect(() => {
        if (stage === 'speak') {
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
            const timer = setTimeout(() => {
                SpeechRecognition.stopListening();
                setIsTimerRunning(false);
            }, 45000); // 45 seconds delay
            return () => clearTimeout(timer);
        }
    }, [stage, resetTranscript]);

    useEffect(() => {
        if (stage === 'task2Speak') {
            setQuestion(`${speakingQuestions[0].question2}`)
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
            const timer = setTimeout(() => {
                SpeechRecognition.stopListening();
                setIsTimerRunning(false);
            }, 60000); // 60 seconds delay
            return () => clearTimeout(timer);
        }
    }, [stage, resetTranscript]);

    useEffect(() => {
        if (stage === 'task3Speak') {
            setQuestion(`${speakingQuestions[0].question3}`)
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
            const timer = setTimeout(() => {
                SpeechRecognition.stopListening();
                setIsTimerRunning(false);
            }, 60000); // 60 seconds delay
            return () => clearTimeout(timer);
        }
    }, [stage, resetTranscript]);

    useEffect(() => {
        if (stage === 'task4Speak') {
            setQuestion(`${speakingQuestions[0].question4}`)
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
            const timer = setTimeout(() => {
                SpeechRecognition.stopListening();
                setIsTimerRunning(false);
                // console.log(transcript);
            }, 60000); // 60 seconds delay
            return () => clearTimeout(timer);
        }
    }, [stage, resetTranscript]);

    const handleContinueToTask2 = () => {
        setStage('task2Passage');
        setIsTimerRunning(true); // Restart the timer for Task 2 passage
        setKey(prevKey => prevKey + 1); // Reset the timer key
    };
    const handleContinueToTask3 = () => {
        setStage('task3Passage');
        setIsTimerRunning(true); // Restart the timer for Task 2 passage
        setKey(prevKey => prevKey + 1); // Reset the timer key
    };

    const handleContinueToQuestion = () => {
        setStage('task2QuestionPrepare');
        setIsTimerRunning(true); // Restart the timer for question preparation
        setKey(prevKey => prevKey + 1); // Reset the timer key
    };
    const handleContinueTo4Question = () => {
        setStage('task4QuestionPrepare');
        setIsTimerRunning(true); // Restart the timer for question preparation
        setKey(prevKey => prevKey + 1); // Reset the timer key
    };

    const renderTimer = (duration: number, onComplete: () => void) => (
        <CountdownCircleTimer
            key={key}
            isPlaying={isTimerRunning}
            duration={duration}
            colors={['#004777', '#F7B801', '#A30000']}
            colorsTime={[duration * 0.67, duration * 0.33, 0]}
            onComplete={onComplete}
        >
            {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
    );

    if (!SpeechRecognition.browserSupportsSpeechRecognition) {
        return <span>Browser doesn&apos;t support speech recognition.</span>;
    }

    const handleTranscriptSubmit = async () => {
        if (transcript.trim() === '') {
            // If the transcript is empty, just move to the next stage without sending to the API
            if (stage === 'speak') {
                setStage('task2Intro');
                onTaskComplete(1, { score: 0, feedback: 'No transcript provided.' });
            }
            if (stage === 'task2Speak') {
                setStage('task3Intro');
                onTaskComplete(2, { score: 0, feedback: 'No transcript provided.' });
            }
            if (stage === 'task3Speak') {
                setStage('task4Intro');
                onTaskComplete(3, { score: 0, feedback: 'No transcript provided.' });
            }
            if (stage === 'task4Speak') {
                onTaskComplete(4, { score: 0, feedback: 'No transcript provided.' });
                onComplete();
            }
            return;
        }
        console.log(question)
        console.log(transcript)
        try {
            setLoading(true);
            const response = await fetch('/api/evaluate-speaking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question, transcript }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit task');
            }

            const data = await response.json();
            setEvaluation(data);
            console.log('Evaluation:', data);

            if (stage === 'speak') {
                setStage('task2Intro');
                onTaskComplete(1, data);
            }
            if (stage === 'task2Speak') {
                setStage('task3Intro');
                onTaskComplete(2, data);
            }
            if (stage === 'task3Speak') {
                setStage('task4Intro');
                onTaskComplete(3, data);
            }
            if (stage === 'task4Speak') {
                onTaskComplete(4, data);
                onComplete();
            }

        } catch (error) {
            console.error('Error submitting task:', error);
        }
        setLoading(false);
    };


    return (
        <div className="min-h-[80vh] mx-auto py-10 px-4 md:py-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10 text-center">Speaking Section</h2>
            {stage === 'intro' && (
                <div className="flex flex-col items-center justify-center space-y-10 border shadow-2xl p-6 rounded-2xl">
                    <p className="">
                        In this question of the TOEFL Speaking Task 1, you&apos;ll speak about a familiar topic. Your response will be scored on your ability to speak clearly and coherently about the topics. You&apos;ll have 15 seconds to prepare your answer and 45 seconds to speak.
                    </p>
                    <p className="">
                        We recommend you practice taking notes with a pen and paper like you will during your TOEFL exam.
                    </p>
                    <div className='flex flex-wrap items-center justify-center gap-10'>
                        <Button
                            variant="outline"
                            onClick={() => {
                                navigator.mediaDevices.getUserMedia({ audio: true })
                                    .then((stream) => {
                                        stream.getTracks().forEach(track => track.stop()); // stop the stream
                                        alert("Microphone permission granted ✅");
                                    })
                                    .catch((err) => {
                                        console.error("Microphone permission denied ❌", err);
                                        alert("Microphone access denied. Please check your browser settings.");
                                    });
                            }}
                        >
                            Test Microphone
                        </Button>
                        <Button variant="default" onClick={() => { setStage('task1') }}>
                            Start Task
                        </Button>
                    </div>
                </div>
            )}
            {stage === 'task1' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Task 1: Speak about a familiar topic</h3>
                    <p className="mb-4"><strong>Question:</strong> {currentQuestion.question1} </p>
                    {renderTimer(5, () => setStage('prepare'))}
                </div>
            )}
            {stage === 'prepare' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Prepare Your Answer</h3>
                    <p className="mb-4"><strong>Question:</strong> {currentQuestion.question1} </p>
                    <p className="mb-4">You have 15 seconds to PREPARE your answer.</p>
                    {renderTimer(15, () => setStage('speak'))}
                </div>
            )}
            {stage === 'speak' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Speak Now</h3>
                    <p className="mb-4"><strong>Question:</strong> {currentQuestion.question1} </p>
                    <p className="mb-4">You have 45 seconds to speak.</p>
                    {renderTimer(45, () => { })}
                    <div className="mt-4 w-full max-w-md">
                        {stage === 'speak' && !isTimerRunning && (
                            <Button variant="default" onClick={handleTranscriptSubmit}>
                                {loading ? (<div className='animate-spin'><FaSpinner /></div>) : ("Submit")}
                            </Button>
                        )}
                    </div>
                </div>
            )}
            {stage === 'task2Intro' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-4">Task 2 Instructions</h3>
                    <p className="mb-8 md:mb-10 w-full md:w-2/3 lg:w-1/2 text-center">
                        {task2Intro}
                    </p>
                    <Button variant="default" onClick={handleContinueToTask2}>
                        Continue to Task 2
                    </Button>
                </div>
            )}
            {stage === 'task2Passage' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Task 2 Passage</h3>
                    <p className="mb-4">{currentQuestion.passage2}</p>
                    {renderTimer(50, () => setStage('task2Conversation'))}
                </div>
            )}
            {stage === 'task2Conversation' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Listening to Conversation</h3>
                    <div className="custom-audio-container flex-col flex gap-10">
                        <img src={speakingQuestions[0].Audio2Photo}></img>
                        <ReactAudioPlayer
                            key={tryReloadAudio}
                            src={speakingQuestions[0].conversationAudio2}
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
                        <Button onClick={handleContinueToQuestion} variant="outline">
                            {loading ? (<div className='animate-spin'><FaSpinner /></div>) : ("Continue")}
                        </Button>
                    </div>
                </div>
            )}
            {stage === 'task2QuestionPrepare' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Task 2 Question</h3>
                    <p className="mb-4"><strong>Question:</strong> {currentQuestion.question2} </p>
                    <p className="mb-4">You have 40 seconds to PREPARE your answer.</p>
                    {renderTimer(40, () => setStage('task2Speak'))}
                </div>
            )}
            {stage === 'task2Speak' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Speak Now</h3>
                    <p className="mb-4"><strong>Question:</strong> {currentQuestion.question2} </p>
                    <p className="mb-4">You have 60 seconds to speak.</p>
                    {renderTimer(60, () => { })}
                    <div className="mt-4 w-full max-w-md">
                        {stage === 'task2Speak' && !isTimerRunning && (
                            <button onClick={handleTranscriptSubmit} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                                {loading ? (<div className='animate-spin'><FaSpinner /></div>) : ("Continue")}
                            </button>
                        )}
                    </div>
                </div>
            )}
            {stage === 'task3Intro' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-4">Task 3 Instructions</h3>
                    <p className="mb-8 md:mb-10 w-full md:w-2/3 lg:w-1/2 text-center">
                        {task3Intro}
                    </p>
                    <button onClick={handleContinueToTask3} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        Continue to Task 3
                    </button>
                </div>
            )}
            {stage === 'task3Passage' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Task 3 Passage</h3>
                    <p className="mb-4">{currentQuestion.passage3}</p>
                    {renderTimer(50, () => setStage('task3Conversation'))}
                </div>
            )}
            {stage === 'task3Conversation' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Listening to Lecture</h3>
                    <div className="custom-audio-container flex-col flex gap-10">
                        <img src={speakingQuestions[0].Audio3Photo}></img>
                        <ReactAudioPlayer
                            key={tryReloadAudio}
                            src={speakingQuestions[0].conversationAudio3}
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
                        <Button onClick={() => setStage('task3QuestionPrepare')} variant="outline">
                            Continue
                        </Button>
                    </div>
                </div>
            )}
            {stage === 'task3QuestionPrepare' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Task 3 Question</h3>
                    <p className="mb-4"><strong>Question:</strong> {currentQuestion.question3}</p>
                    <p className="mb-4">You have 40 seconds to prepare your answer.</p>
                    {renderTimer(40, () => setStage('task3Speak'))}
                </div>
            )}
            {stage === 'task3Speak' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Speak Now</h3>
                    <p className="mb-4"><strong>Question:</strong> {currentQuestion.question3}</p>
                    <p className="mb-4">You have 60 seconds to speak.</p>
                    {renderTimer(60, () => { })}
                    <div className="mt-4 w-full max-w-md">
                        {stage === 'task3Speak' && !isTimerRunning && (
                            <button onClick={handleTranscriptSubmit} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                                {loading ? (<div className='animate-spin'><FaSpinner /></div>) : ("Continue")}
                            </button>
                        )}
                    </div>
                </div>
            )}
            {stage === 'task4Intro' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-4">Task 4 Instructions</h3>
                    <p className="mb-8 md:mb-10 w-full md:w-2/3 lg:w-1/2 text-center">
                        {task4Intro}
                    </p>
                    <button onClick={() => setStage('task4Conversation')} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        Continue to Task 4
                    </button>
                </div>
            )}
            {stage === 'task4Conversation' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Listening to Conversation</h3>
                    <div className="custom-audio-container flex-col flex gap-10">
                        <img src={speakingQuestions[0].Audio4Photo}></img>
                        <ReactAudioPlayer
                            key={tryReloadAudio}
                            src={speakingQuestions[0].conversationAudio4}
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
                        <Button onClick={handleContinueTo4Question} variant="outline">
                            Continue
                        </Button>
                    </div>
                </div>
            )}
            {stage === 'task4QuestionPrepare' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Task 4 Question</h3>
                    <p className="mb-4"><strong>Question:</strong> {currentQuestion.question4}</p>
                    <p className="mb-4">You have 20 seconds to prepare your answer.</p>
                    {renderTimer(20, () => setStage('task4Speak'))}
                </div>
            )}
            {stage === 'task4Speak' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Speak Now</h3>
                    <p className="mb-4"><strong>Question:</strong> {currentQuestion.question4}</p>
                    <p className="mb-4">You have 60 seconds to speak.</p>
                    {renderTimer(60, () => { })}
                    <div className="mt-4 w-full max-w-md">
                        {stage === 'task4Speak' && !isTimerRunning && (
                            <button onClick={handleTranscriptSubmit} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                                {loading ? (<div className='animate-spin'><FaSpinner /></div>) : ("Continue")}
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpeakingSection;
