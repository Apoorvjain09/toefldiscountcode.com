import React from 'react';
import Link from 'next/link';
import { PinContainer } from './3d-pin';
import { useUser } from '@clerk/nextjs';

interface TestCardProps {
    testNumber: number;
}

const TestCard: React.FC<TestCardProps> = ({ testNumber }) => {
    const { user } = useUser();

    const isFreeTest = testNumber === 1 || testNumber === 2;
    const testTitle = isFreeTest ? 'Free Test' : `Test ${testNumber}`;

    const handleTestClick = () => {
        if (!isFreeTest) {
            const hasMembership =
                user?.publicMetadata?.["6Month_Membership"] === "true" ||
                user?.publicMetadata?.["Monthly_Subscription"] === "true";

            if (!hasMembership) {
                window.location.href = '/payment';
                return;
            }
        }
        window.location.href = `/tests/${testNumber}`;
    };

    return (
        <div className="mt-10 w-full sm:w-[auto] flex items-center justify-center ">
            <PinContainer
                title={`Start ${testTitle}`}
                href={`/tests/${testNumber}`}
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[17rem] sm:w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        {testTitle}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500">
                            Practice test to help you prepare for the TOEFL exam.
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
