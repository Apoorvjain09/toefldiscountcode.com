import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { useAuth } from '@clerk/nextjs';

async function fetchStudyPlan(testDate: string, readingScore: number, listeningScore: number, writingScore: number, targetScores: { reading: number, listening: number, speaking: number, writing: number }, totalTargetScore: number) {
    const response = await fetch('/api/generate-study-plan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ testDate, readingScore, listeningScore, writingScore, targetScores, totalTargetScore }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch study plan');
    }

    const data = await response.json();
    return data.studyPlan;
}

async function updateStudyPlanMetadata(userId: string, startDate: string, examDate: string, planType: string) {
    const response = await fetch('/api/updateStudyPlan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, startDate: startDate.split('T')[0], examDate, planType }),
    });

    if (!response.ok) {
        throw new Error('Failed to update user metadata');
    }

    const data = await response.json();
    return data;
}

export default function StudyPlan({ testDate, readingScore, listeningScore, writingScore, targetScores, totalTargetScore, onNext }: { testDate: string, readingScore: number, listeningScore: number, writingScore: number, targetScores: { reading: number, listening: number, speaking: number, writing: number }, totalTargetScore: number, onNext: (planType: string) => void }) {
    const [isLoading, setIsLoading] = useState(true);
    const [planType, setPlanType] = useState('');
    const { userId } = useAuth();

    useEffect(() => {
        async function getStudyPlan() {
            try {
                const today = new Date();
                const testDateObj = new Date(testDate);
                const timeDiff = testDateObj.getTime() - today.getTime();
                const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

                let calculatedPlanType = '';
                if (daysDiff <= 15) {
                    calculatedPlanType = '15-day plan';
                } else if (daysDiff <= 30) {
                    calculatedPlanType = '30-day plan';
                } else {
                    calculatedPlanType = '45-day plan';
                }

                setPlanType(calculatedPlanType);

                // Update user metadata with exam date and plan type
                if (userId) {
                    const startDate = today.toISOString().split('T')[0];
                    await updateStudyPlanMetadata(userId, startDate, testDate, calculatedPlanType);
                }

                // const plan = await fetchStudyPlan(testDate, readingScore, listeningScore, writingScore, targetScores, totalTargetScore);
                // setStudyPlan(plan);
            } catch (error) {
                console.error('Failed to fetch study plan:', error);
            } finally {
                setIsLoading(false);
            }
        }

        if (userId) {
            getStudyPlan();
        }
    }, [testDate, readingScore, listeningScore, writingScore, targetScores, totalTargetScore, userId]);

    const data = {
        labels: ['Reading', 'Listening', 'Speaking', 'Writing'],
        datasets: [
            {
                label: 'Current Score',
                data: [readingScore * 10, listeningScore * 10, 0, writingScore * 6], // Assuming speaking score is not available yet
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Target Score',
                data: [targetScores.reading, targetScores.listening, targetScores.speaking, targetScores.writing],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 30, // Adjust according to the max score range
            },
        },
    };

    return (
        <section>
            <div className="">
                {isLoading ? (
                    <div className="rounded-lg bg-blue-700 flex justify-center items-center h-[90vh]">
                        <div className="flex gap-2">
                            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-200"></div>
                            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-200"></div>
                            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-200"></div>
                        </div>
                        <p className="text-extrabold text-2xl text-white font-bold ml-4 animate-pulse">Generating study plan</p>
                    </div>
                ) : (
                    <div className="p-8">
                        <h2 className="text-2xl font-bold sm:text-3xl">Your Personalized TOEFL Study Plan</h2>
                        <div className="my-6 w-[70vw] sm:w-[30vw] items-center justify-center">
                            <Bar data={data} options={options} />
                        </div>
                        
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold mb-5">Personalized Study Tips</h3>
                            <div className="mt-2 p-2 rounded-lg bg-slate-50">
                                <h4 className="text-lg font-semibold">Reading Section:</h4>
                                <ul className="list-disc ml-5">
                                    <li>Read a variety of academic articles, essays, and passages.</li>
                                    <li>Practice summarizing main ideas, identifying details, and making inferences.</li>
                                    <li>Focus on understanding the main idea of each paragraph.</li>
                                    <li>Pay attention to transitional words for coherence.</li>
                                    <li>Practice skimming and scanning for key information.</li>
                                </ul>
                            </div>
                            <div className="mt-2 p-2 rounded-lg bg-slate-50">
                                <h4 className="text-lg font-semibold">Listening Section:</h4>
                                <ul className="list-disc ml-5">
                                    <li>Listen to podcasts, lectures, and TED talks in English.</li>
                                    <li>Practice taking notes while listening to improve retention.</li>
                                    <li>Focus on understanding the main ideas and supporting details.</li>
                                    <li>Practice predicting answers before they are provided.</li>
                                    <li>Familiarize yourself with different accents and speech patterns.</li>
                                </ul>
                            </div>
                            <div className="mt-2 p-2 rounded-lg bg-slate-50">
                                <h4 className="text-lg font-semibold">Speaking Section:</h4>
                                <ul className="list-disc ml-5">
                                    <li>Practice speaking English daily with a partner or in front of a mirror.</li>
                                    <li>Record yourself and listen to identify areas for improvement.</li>
                                    <li>Focus on fluency, pronunciation, and grammar.</li>
                                    <li>Structure your responses with clear introductions, explanations, and conclusions.</li>
                                    <li>Use a variety of vocabulary and grammar structures.</li>
                                </ul>
                            </div>
                            <div className="mt-2 p-2 rounded-lg bg-slate-50">
                                <h4 className="text-lg font-semibold">Writing Section:</h4>
                                <ul className="list-disc ml-5">
                                    <li>Practice writing essays on various topics under timed conditions.</li>
                                    <li>Review grammar and vocabulary usage in context.</li>
                                    <li>Focus on developing a clear thesis statement and supporting it with relevant examples.</li>
                                    <li>Practice organizing your ideas cohesively and using transitions effectively.</li>
                                    <li>Review grammar rules and work on improving sentence structure and coherence.</li>
                                </ul>
                            </div>
                        </div>

                        <button
                            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            onClick={() => onNext(planType)}
                        >
                            Start Preparation
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
