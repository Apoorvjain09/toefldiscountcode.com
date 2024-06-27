import React, { useState, useEffect } from 'react';

const rcAndVocabQuestions = [
    {
        question: `Read the following passage and answer the question: 'Cuttlefish are full of personality, as behavioral ecologist Alexandra Schnell found out while researching the cephalopod's potential to display self-control. . . . \"Self-control is thought to be the cornerstone of intelligence, as it is an important prerequisite for complex decision-making and planning for the future,\" says Schnell . . .' Why is self-control considered the cornerstone of intelligence?`,
        options: [
            "It helps in displaying personality traits.",
            "It is necessary for complex decision-making and planning for the future.",
            "It allows cephalopods to control their behavior.",
            "It is a unique characteristic of cuttlefish."
        ],
        correctAnswer: "It is necessary for complex decision-making and planning for the future.",
    },
    {
        question: "Which of the following is a synonym for 'proficient'?",
        options: ["Skilled", "Novice", "Inexperienced", "Amateur"],
        correctAnswer: "Skilled",
    },
    {
        question: "What does the term 'ubiquitous' mean?",
        options: ["Rare", "Common", "Difficult", "Expensive"],
        correctAnswer: "Common",
    },
];

const audioQuestions = [
    {
        question: "Why does the woman go to see her professor?",
        options: [
            "To get advice about memorizing information",
            "To clarify several terms that she doesn’t understand",
            "To get permission to bring her children to class",
            "To ask a question about classroom procedures"
        ],
        correctAnswer: "To clarify several terms that she doesn’t understand",
    },
    {
        question: "What do semantic memory and episodic memory have in common?",
        options: [
            "They are both included in short-term memory.",
            "They do not concentrate on each step in the process.",
            "They are subcategories of declarative memory.",
            "They are the two major types of long-term memory."
        ],
        correctAnswer: "They are subcategories of declarative memory.",
    },
    {
        question: "When the professor gives the example of riding a bicycle, what kind of memory is he referring to?",
        options: [
            "Declarative memory",
            "Episodic memory",
            "Procedural memory",
            "Semantic memory"
        ],
        correctAnswer: "Procedural memory",
    },
];

export default function SampleQuestions({ onComplete }: { onComplete: (data: { testDate: string, readingScore: number, listeningScore: number, writingScore: number, targetScores: { reading: number, listening: number, speaking: number, writing: number }, totalTargetScore: number }) => void }) {
    const [stage, setStage] = useState(1);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [writingAnswer, setWritingAnswer] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [testDate, setTestDate] = useState('');
    const [targetScores, setTargetScores] = useState({ reading: 0, listening: 0, speaking: 0, writing: 0 });
    const [totalTargetScore, setTotalTargetScore] = useState(0);

    const handleChange = (questionIndex: number, answer: string) => {
        setAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
    };

    const handleWritingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        setWritingAnswer(text);
        setWordCount(text.trim().split(/\s+/).length);
    };

    const evaluateWriting = (text: string) => {
        const words = text.trim().split(/\s+/).length;
        if (words >= 100) {
            return 5;
        } else if (words >= 80) {
            return 4;
        } else if (words >= 60) {
            return 3;
        } else if (words >= 40) {
            return 2;
        } else {
            return 1;
        }
    };

    const handleTargetScoreChange = (section: string, value: number) => {
        setTargetScores((prev) => {
            const newScores = { ...prev, [section]: value };
            if (Object.values(newScores).every(score => score > 0)) {
                setTotalTargetScore(Object.values(newScores).reduce((acc, score) => acc + score, 0));
            }
            return newScores;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let readingScore = 0;
        rcAndVocabQuestions.forEach((q, index) => {
            if (answers[index] === q.correctAnswer) {
                readingScore += 1;
            }
        });

        let listeningScore = 0;
        audioQuestions.forEach((q, index) => {
            if (answers[index + rcAndVocabQuestions.length] === q.correctAnswer) {
                listeningScore += 1;
            }
        });

        let writingScore = evaluateWriting(writingAnswer);

        onComplete({ testDate, readingScore, listeningScore, writingScore, targetScores, totalTargetScore });
    };

    return (
        <div className="mx-auto rounded-lg bg-white shadow-md overflow-hidden md:max-w-2xl ">
            <div className="md:flex">
                <div className="w-full">
                    <h2 className="text-2xl font-bold p-5 text-white text-center bg-gradient-to-r from-fuchsia-400 to-purple-600">Base Knowledge Assessment</h2>
                    <form onSubmit={handleSubmit} className='p-8'>
                        {stage === 1 && rcAndVocabQuestions.map((q, index) => (
                            <div key={index} className="mb-4">
                                <p className="text-lg font-semibold mb-2">{q.question}</p>
                                {q.options.map((option) => (
                                    <label key={option} className="block mb-2">
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            value={option}
                                            onChange={() => handleChange(index, option)}
                                            required
                                            className="mr-2"
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        ))}
                        {stage === 2 && (
                            <div>
                                <audio controls className="mb-4">
                                    <source src="https://www.dropbox.com/scl/fi/7yctxm3cggshlh1cjgrb7/T4C4.mp3?rlkey=5icl83p5kh5n2u9d5gs9ge3km&raw=1" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                {audioQuestions.map((q, index) => (
                                    <div key={index} className="mb-4">
                                        <p className="text-lg font-semibold mb-2">{q.question}</p>
                                        {q.options.map((option) => (
                                            <label key={option} className="block mb-2">
                                                <input
                                                    type="radio"
                                                    name={`question-${index + rcAndVocabQuestions.length}`}
                                                    value={option}
                                                    onChange={() => handleChange(index + rcAndVocabQuestions.length, option)}
                                                    required
                                                    className="mr-2"
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                        {stage === 3 && (
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Write a 100 words short essay on the following topic: 'The importance of learning English for global communication.'
                                    <textarea
                                        className="w-full mt-2 p-2 border rounded-md"
                                        rows={5}
                                        value={writingAnswer}
                                        onChange={handleWritingChange}
                                        required
                                    />
                                </label>
                                <p className="text-right">{wordCount} words</p>
                            </div>
                        )}
                        {stage === 4 && (
                            <>
                                <div className="mb-4">
                                    <label className="block mb-2">
                                        When is your TOEFL test date? (Or a likely date)
                                        <input
                                            type="date"
                                            value={testDate}
                                            onChange={(e) => setTestDate(e.target.value)}
                                            required
                                            className="w-full mt-2 p-2 border rounded-md"
                                        />
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">
                                        Target Reading Score
                                        <input
                                            type="number"
                                            value={targetScores.reading}
                                            onChange={(e) => handleTargetScoreChange('reading', parseInt(e.target.value))}
                                            required
                                            className="w-full mt-2 p-2 border rounded-md"
                                            min="0"
                                            max="30"
                                        />
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">
                                        Target Listening Score
                                        <input
                                            type="number"
                                            value={targetScores.listening}
                                            onChange={(e) => handleTargetScoreChange('listening', parseInt(e.target.value))}
                                            required
                                            className="w-full mt-2 p-2 border rounded-md"
                                            min="0"
                                            max="30"
                                        />
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">
                                        Target Speaking Score
                                        <input
                                            type="number"
                                            value={targetScores.speaking}
                                            onChange={(e) => handleTargetScoreChange('speaking', parseInt(e.target.value))}
                                            required
                                            className="w-full mt-2 p-2 border rounded-md"
                                            min="0"
                                            max="30"
                                        />
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">
                                        Target Writing Score
                                        <input
                                            type="number"
                                            value={targetScores.writing}
                                            onChange={(e) => handleTargetScoreChange('writing', parseInt(e.target.value))}
                                            required
                                            className="w-full mt-2 p-2 border rounded-md"
                                            min="0"
                                            max="30"
                                        />
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <p className="text-lg font-semibold">
                                        Total Target Score: {totalTargetScore}
                                    </p>
                                </div>
                            </>
                        )}
                        <div className="flex justify-between mt-5">
                            {stage > 1 && (
                                <button
                                    type="button"
                                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
                                    onClick={() => setStage(stage - 1)}
                                >
                                    Back
                                </button>
                            )}
                            {stage === 4 && (
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            >
                                Submit
                            </button>
                            )}
                            {stage < 4 && (
                                <button
                                    type="button"
                                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
                                    onClick={() => setStage(stage + 1)}
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
