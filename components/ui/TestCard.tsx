import React from 'react';
import Link from 'next/link';
import { PinContainer } from './3d-pin';

interface TestCardProps {
    testNumber: number;
}

const TestCard: React.FC<TestCardProps> = ({ testNumber }) => {
    return (
        // <div className="bg-white shadow p-6 rounded text-center">
        //     <h3 className="text-xl font-bold mb-4">Test {testNumber}</h3>
        //     <p>Practice test to help you prepare for the TOEFL exam.</p>    
        //     <Link href={`/tests/${testNumber}`} className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded">
        //             Start Test
        //     </Link>
        // </div>
        <div className="mt-10 w-full sm:w-[auto] flex items-center justify-center ">
            <PinContainer
                title={`/tests/${testNumber}`}
                href={`/tests/${testNumber}`}
            >
                {/* <Link href={`/tests/${testNumber}`}> */}
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[17rem] sm:w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        Test {testNumber}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                            Practice test to help you prepare for the TOEFL exam.
                        </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 items-center justify-center text-black font-mono font-extrabold " >Test {testNumber}</div>
                </div>
                {/* </Link> */}
            </PinContainer>
        </div>
    );
};

export default TestCard;
