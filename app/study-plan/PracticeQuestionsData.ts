interface ReadingQuestion {
    passage: string;
    questions: string[];
}

interface ListeningQuestion {
    audioUrl: string;
    questions: string[];
}

interface WritingPrompt {
    prompt: string;
}

interface SpeakingPrompt {
    prompt: string;
}

interface VocabularyExercise {
    question: string;
    choices: string[];
    answer: string;
}

export const readingComprehensionData: ReadingQuestion[] = [
    {
        passage: "Passage 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        questions: [
            "Question 1: What is the main idea of the passage?",
            "Question 2: What does 'Lorem ipsum' refer to in the passage?",
        ],
    },
    {
        passage: "Passage 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        questions: [
            "Question 1: What is the author’s purpose in this passage?",
            "Question 2: What does 'ullamco laboris' mean in the context of the passage?",
        ],
    },
    // Add more passages as needed
];

export const listeningComprehensionData: ListeningQuestion[] = [
    {
        audioUrl: "https://example.com/audio1.mp3",
        questions: [
            "Question 1: What is the main idea of the audio?",
            "Question 2: What detail does the speaker mention about ...?",
        ],
    },
    // Add more audio questions as needed
];

export const writingPrompts: WritingPrompt[] = [
    {
        prompt: "Describe a memorable event from your life and explain why it was significant.",
    },
    // Add more writing prompts as needed
];

export const speakingPrompts: SpeakingPrompt[] = [
    {
        prompt: "Talk about your favorite hobby and why you enjoy it.",
    },
    // Add more speaking prompts as needed
];

export const vocabularyExercises: VocabularyExercise[] = [
    {
        question: "Choose the correct definition for 'elaborate':",
        choices: ["a) Simple", "b) Detailed", "c) Quick", "d) Boring"],
        answer: "b) Detailed",
    },
    // Add more vocabulary exercises as needed
];
