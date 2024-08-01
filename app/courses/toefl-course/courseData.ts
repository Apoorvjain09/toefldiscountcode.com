export interface Lecture {
    id: number;
    title: string;
    videoUrl: string;
}

export interface Chapter {
    title: string;
    lectures: Lecture[];
}

export interface Section {
    title: string;
    chapters: Chapter[];
}

export const courseData: { sections: Section[] } = {
    sections: [
        {
            title: 'Toefl Video Lectures',
            chapters: [
                {
                    title: 'Reading Comprehension',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1T0RavwD2dMFAe3vbL4FNzx0oqXh_xoOF/preview' },
                    ],
                },
                {
                    title: 'Listening Task',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/19MgcXpFcjTuV0AnIsFuOij0sRwbdz0QX/preview' },
                    ],
                },
                {
                    title: 'Speaking Task',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1ZCRVUU_seRv3_1YYLrqtZv9tZxEps1Bu/preview' },
                    ],
                },
                {
                    title: 'Writing Task',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1RDW-2iwUIVNGf6lHo27qjF256i3nO_Us/preview' },
                    ],
                },
            ],
        },
    ],
};
