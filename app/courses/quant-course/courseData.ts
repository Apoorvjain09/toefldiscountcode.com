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
            title: 'Quant Video Lectures',
            chapters: [
                {
                    title: 'Number Systems',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1mVoQGHH98QHypQi6b_9uqaZpeTe11ecp/preview' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1hna8PGNM8n8kspTrY4CEkjmHQrzT01Cp/preview' },
                    ],
                },
                {
                    title: 'Profit & Loss',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1hAwxctxKgNu3lot8myJLbRl0piUvpXUr/preview' },
                    ],
                },
                {
                    title: 'Simple/Compound Intrest',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1CB2UnMQfmgsGBxI2n_prA-E2c_DlFBvc/preview' },
                    ],
                },
                {
                    title: 'Speed, time & Distance',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1hyRDGNa5F5wbVGuqGLkCxYqF2MUX10UL/preview' },
                    ],
                },
                {
                    title: 'Time & Work',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1nlm3BVpuysfEQVJzfC3d6DAgEUkD_E1T/preview' },
                    ],
                },
                {
                    title: 'Algebra',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1se5EF8nWtat3HPhH1NyQ4zt39Olsnc-x/preview' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1OO1ilM2qfp0tbPUM93eIjowC_sIR3hed/preview' },
                    ],
                },
                {
                    title: 'Sequence and series',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/182x5kFWX_vuDHmP37Z1Hd7keVrZM1dao/preview' },
                    ],
                },
                {
                    title: 'Geometric Mensuration',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1Kih-Mn3yxFIYvOvVuWyMK4bmjRfuoaIJ/preview' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1IMyhT4GJTIddJ-S_vyTPMFNmCSs2WCg6/preview' },
                    ],
                },
                {
                    title: 'Coordinate Geometry',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1-6GVH5YAQ-vBCl7kb_jPmZWOGzUt2UOx/preview' },
                    ],
                },
                {
                    title: 'Coordinate Geometry',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1xEhmL1KAf1T9O7yCvX3L-uBLMd8vQwpY/preview' },
                    ],
                },
                {
                    title: 'Set theory',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1duLSJ37jZ0z8Mmy0_nGgc6fxXWri_Woo/preview' },
                    ],
                },
                {
                    title: 'Permutation and Combination',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1xCXcLqKP_FoMnFImh4bSEY1pKh9yciDl/preview' },
                    ],
                },
                {
                    title: 'Probability and data interpretation',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1Nn_dMHH7TnOBxW6EVc8RWuVPVh7kJhZ3/preview' },
                    ],
                },
                {
                    title: 'Statistics, Normal Distribution & Standard deviation',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1Nn_dMHH7TnOBxW6EVc8RWuVPVh7kJhZ3/preview' },
                    ],
                },
                {
                    title: 'Data sufficiency',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1grILLqd_ahon0QpdLbKeFaGScAgkpukF/preview' }
                    ],
                },
            ],
        },
    ],
};
