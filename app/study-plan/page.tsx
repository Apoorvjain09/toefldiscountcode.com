'use client';

import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the stage components
const Start = dynamic(() => import('./Start'), { suspense: true });
const SampleQuestions = dynamic(() => import('./SampleTestQuestionnaire'), { suspense: true });
const StudyPlan = dynamic(() => import('./Study-plan'), { suspense: true });
const Lectures = dynamic(() => import('./Lectures'), { suspense: true });

export default function Page() {
    const [stage, setStage] = useState<'start' | 'sampleQuestions' | 'studyPlan' | 'lectures'>('start');
    const [testData, setTestData] = useState({
        testDate: '',
        readingScore: 0,
        listeningScore: 0,
        writingScore: 0,
        targetScores: { reading: 0, listening: 0, speaking: 0, writing: 0 },
        totalTargetScore: 0,
    });

    const handleNext = (nextStage: 'sampleQuestions' | 'studyPlan' | 'lectures') => {
        setStage(nextStage);
    };

    const handleQuestionnaireComplete = (data: {
        testDate: string,
        readingScore: number,
        listeningScore: number,
        writingScore: number,
        targetScores: { reading: number, listening: number, speaking: number, writing: number },
        totalTargetScore: number,
    }) => {
        setTestData(data);
        handleNext('studyPlan');
    };

    return (
        <div className={stage === 'sampleQuestions' ? 'rounded-lg px-5 py-10 bg-gradient-to-r from-violet-600 to-indigo-400' : ''}>
            <Suspense fallback={<div>Loading...</div>}>
                {stage === 'start' && <Start onNext={() => handleNext('sampleQuestions')} />}
                {stage === 'sampleQuestions' && <SampleQuestions onComplete={handleQuestionnaireComplete} />}
                {stage === 'studyPlan' && (
                    <StudyPlan
                        testDate={testData.testDate}
                        readingScore={testData.readingScore}
                        listeningScore={testData.listeningScore}
                        writingScore={testData.writingScore}
                        targetScores={testData.targetScores}
                        totalTargetScore={testData.totalTargetScore}
                        onNext={() => handleNext('lectures')}
                    />
                )}
                {stage === 'lectures' && <Lectures />}
            </Suspense>
        </div>
    );
}
