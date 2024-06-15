import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { speakingQuestions } from './questions';

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
    const [question, setQuestion] = useState<string>("If you will choose a new roommate, which of the following qualities do you think is the best: quietness, friendliness, or cleanliness? Explain your response with examples.");
    const task2Intro = "In this question of the TOEFL Speaking Task 2, you'll first read a short passage about either a campus announcement or a student's letter. Next, you will hear a conversation between two students discussing their opinions on the passage you just read. You will then be asked a question about what you have read and heard. You'll have 30 seconds to prepare your answer and 60 seconds to speak.";
    const task3Intro = "In this question of the TOEFL Speaking Task 3, you'll first read a short passage about either a campus announcement or a student's letter. Next, you will hear a conversation between two students discussing their opinions on the passage you just read. You will then be asked a question about what you have read and heard. You'll have 30 seconds to prepare your answer and 60 seconds to speak.";
    const task4Intro = "In this question of the TOEFL Speaking Task 4, you'll first read a short passage on an academic topic. Next, you will hear a lecture on the same topic. You will then be asked a question about what you have read and heard. You'll have 30 seconds to prepare your answer and 60 seconds to speak.";
    const [currentTask, setCurrentTask] = useState<number>(0);
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
            setQuestion("The man expresses his opinion about the article in the school newspaper. Explain his opinion and the reasons he gives for holding that opinion.")
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
            setQuestion("Prey animals employ a variety of methods, including running and hiding, to avoid being caught by predators. Yet some animals do not hide but instead stand out. This is often accomplished through the method known as warning coloration. Animals utilizing warning coloration have brightly colored fur or skin. They are typically blue, purple, white, orange, red, or yellow in color. Many of these animals have lethal poison or venom. Predators that see brightly colored animals almost always avoid them. That is particularly true if the predators have had prior negative experiences with similar-looking animals.")
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
            setQuestion("Using points and examples from the talk, explain two ways that natural arches are formed.")
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

    const handleStartTask = () => {
        setStage('task1');
        // onComplete()
    };

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
    };


    return (
        <div className="container mx-auto py-10 px-4 md:py-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10 text-center">Speaking Section</h2>
            {stage === 'intro' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col items-center">
                    <p className="mb-8 md:mb-10 w-full md:w-2/3 lg:w-1/2 text-center">
                        In this question of the TOEFL Speaking Task 1, you&apos;ll speak about a familiar topic. Your response will be scored on your ability to speak clearly and coherently about the topics. You&apos;ll have 15 seconds to prepare your answer and 45 seconds to speak.
                    </p>
                    <p className="mb-8 md:mb-10 w-full md:w-2/3 lg:w-1/2 text-center">
                        We recommend you practice taking notes with a pen and paper like you will during your TOEFL exam.
                    </p>
                    <button onClick={handleStartTask} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        Start Task
                    </button>
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
                    <p className="mb-4">You have 15 seconds to prepare your answer.</p>
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
                            <button onClick={handleTranscriptSubmit} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                                Submit
                            </button>
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
                    <button onClick={handleContinueToTask2} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        Continue to Task 2
                    </button>
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
                    <ReactAudioPlayer
                        src="/assets/T2S1.mp3"
                        controls
                    />
                    <button onClick={handleContinueToQuestion} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        Continue to Question
                    </button>
                </div>
            )}
            {stage === 'task2QuestionPrepare' && (
                <div className="bg-white shadow p-6 rounded mb-4 text-center flex flex-col justify-center items-center gap-4">
                    <h3 className="text-xl font-bold mb-4">Task 2 Question</h3>
                    <p className="mb-4"><strong>Question:</strong> {currentQuestion.question2} </p>
                    <p className="mb-4">You have 40 seconds to prepare your answer.</p>
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
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            )}
            {stage === 'task3Intro' && (
                <div className="bg-white shadow p-6 rounded mb-4 flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-4">Task 3 Instructions</h3>
                    <p className="mb-8 md:mb-10 w-full md:w-2/3 lg:w-1/2 text-center">
                        {task2Intro}
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
                    <ReactAudioPlayer
                        src="/assets/T2S2.mp3"
                        controls
                    />
                    <button onClick={() => setStage('task3QuestionPrepare')} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        Continue to Question
                    </button>
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
                                Submit
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
                    <ReactAudioPlayer
                        src="/assets/T2S3.mp3"
                        controls
                    />
                    <button onClick={handleContinueTo4Question} className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-8 md:mb-10">
                        Continue to Question
                    </button>
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
                    {renderTimer(60, () => {})}
                    <div className="mt-4 w-full max-w-md">
                        {stage === 'task4Speak' && !isTimerRunning && (
                            <button onClick={handleTranscriptSubmit} className="bg-blue-600 text-white py-2 px-4 rounded inline-block">
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpeakingSection;
