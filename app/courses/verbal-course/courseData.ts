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
            title: 'Verbal Video Lectures',
            chapters: [
                {
                    title: 'Reading Comprehension',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1bNJMfm1fvzSercnboyBv-vSlg_uo3cJH/preview' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1JYbnIgAzosjWs7YhlRNLYod5LDbCeyKe/preview' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1mc-ZPBEPmD3Ze57V9w_DEjJ-2IOwLFJi/preview' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1rWDe7R1Oxvm6ZOGJfR2re7bxpOQAts1v/preview' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/19HF59lt4o7N6X4BnJMKZ_Le3jFhG_hgX/preview' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/1MtX1Qk7h_DuBL_M1qMqhkkMhHtC82ldg/preview' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://drive.google.com/file/d/1UJ2gwco-gbHWRdqfKz6G3hSaV39Yd7MG/preview' },
                        { id: 8, title: 'Lecture 8', videoUrl: 'https://drive.google.com/file/d/1uGSPBM6iot6Q80eIFPpHdD-vrG6j7Jwk/preview' },
                    ],
                },
                {
                    title: 'AWA Classses',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1BjfBJ3nx6Cbi0gnk0qN1JVgIlidm0Wiy/preview' },
                    ],
                },
                {
                    title: 'TC/SE Classes',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1LljUwI7vIas1P2RxN2RniC_zW9kHOdYu/preview' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1ZpszJkvZYjvqvo7ZE62ZgiHF51vkUbPs/preview' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1E2dKQZqfMTPMP4wBMjI1j4SRDssrsT4L/preview' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1Q8yeKBvXf5UMCWbenHdGfEQ-u_aJyL0Q/preview' },
                    ],
                },
            ],
        },
    ],
};
