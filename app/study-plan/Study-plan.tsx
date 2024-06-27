import React, { useState, useEffect } from 'react';

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

export default function StudyPlan({ testDate, readingScore, listeningScore, writingScore, targetScores, totalTargetScore, onNext }: { testDate: string, readingScore: number, listeningScore: number, writingScore: number, targetScores: { reading: number, listening: number, speaking: number, writing: number }, totalTargetScore: number, onNext: () => void }) {
    const [isLoading, setIsLoading] = useState(true);
    const [studyPlan, setStudyPlan] = useState('');

    useEffect(() => {
        async function getStudyPlan() {
            try {
                const plan = await fetchStudyPlan(testDate, readingScore, listeningScore, writingScore, targetScores, totalTargetScore);
                setStudyPlan(plan);
            } catch (error) {
                console.error('Failed to fetch study plan:', error);
            } finally {
                setIsLoading(false);
            }
        }

        getStudyPlan();
    }, [testDate, readingScore, listeningScore, writingScore, targetScores, totalTargetScore]);

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
                        <pre className="mt-4 text-gray-800 whitespace-pre-wrap">{studyPlan}</pre>
                        <button
                            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            onClick={onNext}
                        >
                            Get in Touch
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
