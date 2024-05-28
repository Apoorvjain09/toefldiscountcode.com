import React from 'react';
import Link from 'next/link';

interface TestCardProps {
    testNumber: number;
}

const TestCard: React.FC<TestCardProps> = ({ testNumber }) => {
    return (
        <div className="bg-white shadow p-6 rounded text-center">
            <h3 className="text-xl font-bold mb-4">Test {testNumber}</h3>
            <p>Practice test to help you prepare for the TOEFL exam.</p>
            <Link href={`/tests/${testNumber}`} className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded">
                    Start Test
            </Link>
        </div>
    );
};

export default TestCard;
