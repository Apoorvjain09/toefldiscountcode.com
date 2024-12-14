import React from 'react';
import { PinContainer } from './3d-pin';

interface TestCardProps {
    testNumber: number;
}

const TestCard: React.FC<TestCardProps> = ({ testNumber }) => {

    const isFreeTest = testNumber === 1 || testNumber === 2;
    const testTitle = isFreeTest ? 'Free Test' : `Test ${testNumber}`;

    const testDescriptions = {
        1: "A free starter test to get you familiar with the TOEFL format and question types.",
        2: "Another free opportunity to assess your speaking skills, specially conversation listening.",
        3: "Challenge yourself with intermediate-level questions tailored for real exam readiness.",
        4: "Sharpen your skills with advanced questions designed for high-scoring strategies.",
        5: "Test your knowledge with a comprehensive set of questions to boost confidence.",
        6: "Prepare effectively with a simulated full-length test experience.",
    };
    const testDescription = testDescriptions[testNumber as keyof typeof testDescriptions] || "Prepare for TOEFL with this highly recommended practice test.";


    return (
        <div className="mt-10 w-full sm:w-[auto] flex items-center justify-center ">
            <PinContainer
                title={`Start ${testTitle}`}
                href={`/tests/test${testNumber}`}
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[17rem] sm:w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        {testTitle}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500">
                            {testDescription}
                        </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 items-center justify-center text-black font-mono font-extrabold">
                        {testTitle}
                    </div>
                </div>
            </PinContainer>
        </div>
    );
};

export default TestCard;
