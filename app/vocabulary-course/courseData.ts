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
            title: 'Vocabulary Sessions 1',
            chapters: [
                {
                    title: 'Genesis and Apocalypse',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/30Jul2020030757Genesis-and-Apocalypse--Part-1.mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/30Jul2020030701Genesis-and-Apocalypse--Part-2.mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/30Jul2020030741Genesis-and-Apocalypse--Part-3.mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/30Jul2020040751Genesis-and-Apocalypse--Part-4.mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/30Jul2020040725Genesis-and-Apocalypse--Part-5.mp4' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/30Jul2020040737Genesis-and-Apocalypse--Part-6.mp4' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://mja.in/uploads/course_video/30Jul2020040747Genesis-and-Apocalypse--Part-7.mp4' },
                    ],
                },
                {
                    title: 'Shabd Part 1',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/03Sep2020110935Shabd-Part-1-(Part1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/03Sep2020110902Shabd-Part-1-(Part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/03Sep2020110942Shabd-Part-1-(Part-3).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/03Sep2020110926Shabd-Part-1-(Part-4).mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/03Sep2020110929Shabd-Part-1-(Part-5).mp4' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/03Sep2020110949Shabd-Part-1-(Part-6).mp4' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://mja.in/uploads/course_video/03Sep2020110911Shabd-Part-1-(Part-7).mp4' },
                        { id: 8, title: 'Lecture 8', videoUrl: 'https://mja.in/uploads/course_video/03Sep2020110900Shabd-Part-1-(Part-8).mp4' },
                    ],
                },
                {
                    title: 'Shabd Part 2',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/07Sep2020020924SHABD-PART-2-(Part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/07Sep2020030923SHABD-PART-2-(Part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/07Sep2020030916SHABD-PART-2-(Part-3).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/07Sep2020030948SHABD-PART-2-(Part-4).mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/07Sep2020030923SHABD-PART-2-(Part-5).mp4' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/07Sep2020030938SHABD-PART-2-(Part-6).mp4' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://mja.in/uploads/course_video/07Sep2020040926SHABD-PART-2-(Part-7).mp4' },
                    ],
                },
                {
                    title: 'Office Office Part 1',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/24Aug2020120825Office-office--1-(Part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/24Aug2020120822Office-office--1-(Part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/24Aug2020120848Office-office--1-(Part-3).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/24Aug2020120837Office-office--1-(Part-4).mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/24Aug2020120851Office-office--1-(Part-5).mp4' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/24Aug2020010821Office-office--1-(Part-6).mp4' },
                    ],
                },
                {
                    title: 'Office Office Part 2',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/30Aug2020030801Office-office-2-(Part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/31Aug2020100851Office-office-2-(Part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/31Aug2020110844Office-office-2-(Part-3).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/31Aug2020110838Office-office-2-(Part-4).mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/31Aug2020020836Office-office-2-(Part-5).mp4' },
                    ],
                },
                {
                    title: 'Money Matters',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/16Aug2020090859Apna-sapna-Money-Money--Part-1.mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/16Aug2020090858Apna-sapna-Money-Money--Part-2.mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/16Aug2020100822Apna-sapna-Money-Money--Part-3.mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/16Aug2020100830Apna-sapna-Money-Money--Part-4.mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/16Aug2020100818Apna-sapna-Money-Money--Part-5.mp4' },
                    ],
                },
                {
                    title: 'War and Peace',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/29Jul2020020714War-and-peace--part-1.mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/29Jul2020020744War-and-peace---Part-2.mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/29Jul2020020705War-and-peace---Part-3.mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/29Jul2020020713War-and-peace---Part-4.mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/29Jul2020020748War-and-peace---Part-5.mp4' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/29Jul2020030732War-and-peace---part-6.mp4' },
                    ],
                },
                {
                    title: 'Crime and pusnishment',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/22Aug2020020843Crime-and-Punishment--Part1.mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/22Aug2020020836Crime-and-Punishment--Part-2.mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/22Aug2020030852Crime-and-Punishment--Part-3.mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/22Aug2020100856Crime-and-Punishment--Part-4.mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/24Aug2020030833Crime-and-Punishment--Part-5-new.mp4' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/22Aug2020010840Crime-and-Punishment--Part-6.mp4' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://mja.in/uploads/course_video/22Aug2020010842Crime-and-Punishment--Part-7.mp4' },
                    ],
                },
                {
                    title: 'Break and Break',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/04Aug2020040805NEW-BREAK-AND-BRAKE-Part-1.mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/04Aug2020040852NEW-BREAK-AND-BRAKE-Part-2.mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/04Aug2020040831NEW-BREAK-AND-BRAKE-Part-3.mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/04Aug2020060823NEW-BREAK-AND-BRAKE-Part-4.mp4' },
                    ],
                },
                {
                    title: 'Size Matters',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/18Aug2020010810size-matters-recorded---Part-1.mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/18Aug2020010854size-matters-recorded---Part-2.mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/18Aug2020010820size-matters-recorded---Part-3.mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/18Aug2020010830size-matters-recorded---Part-4.mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/18Aug2020010826size-matters-recorded---Part-5.mp4' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/18Aug2020010835size-matters-recorded---Part-6.mp4' },
                    ],
                },
            ],
        },
        {
            title: 'Vocabulary Sessions 2',
            chapters: [
                {
                    title: 'Body and Disease Part-1',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1TL9icBeWfuqRRL-FnmmQGwy_NeZsWaa6/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1Unlr3NSYW2EJvlgugtcol4d16Y_6dZzM/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1jOTxW3VKdv6-CtAL-alhfxROK-oKt1_x/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1-k7H_l5hF2Br6gLaH26Zz00HQjdY8iek/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1WgpfeGTqH5nm3u2T0m9KOOTmTH1Cnxoh/view' },
                    ],
                },
                {
                    title: 'Body and Disease Part-2',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1nMIx_8tKb0aUhH0ypXRiA4j08h3xBPy4/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1ps7F-i9Lja1x4ha_h0iOfA_AOUW3FIOr/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1r5PTKfHFBxsIqasbM3puWOkYWC10ab9D/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1FNhGBz5QP_BAuzZjRXZx4Ynno16SL9iJ/view' },
                    ],
                },
                {
                    title: 'Beautiful Mind Part-1',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1Xleri3i5UBDghfzJnghUqniPnTlaVoSr/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1zPyAS6OXXe_aHE4evVvMQGH40iVWIvJz/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1YLgbWwg3W2BfkcyYOAK_Ojnm1LJTOCyW/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1atnEs0isNKEMx79b6JaJj3iuWo4OD2CL/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1ZTli0EzTSs7lC4sE7EtISzYTU-wRVDuP/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/1KcrdKjSXua79413Ewht_BmgmpUdetbRT/view' },
                    ],
                },
                {
                    title: 'Beautiful Mind Part-2',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1fsOJbckuxK4M8W7UWRnp5D-yLnW8LQZR/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1bTqKQH7kc7VS6XI-Z2Le0CzqeJVzTFZW/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1c3N6pHxof2kQz5jrNPOj5WjmP2kErRBj/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1erLtHrp7fRvMXnJEUkOF1D6PsXd6U10y/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1F4V58k0sFSBHYYIn3viEN1dxvofvJRS_/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/1BMgWKQnaQsV0s4q22kBtRzQQ_ekBiiyL/view' },
                    ],
                },
                {
                    title: 'Religion',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1pJJrXEHACazHgiEvIY2H0xZvKu4DaEHL/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1MsGmbtpAEWLB1q3Ud2sdtREYD9-z21MT/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/17_vmvf1AnLHQlwLIDnRh2FpwTXdHMiic/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1uIDs32MRrbG2czd7FhGbDA0v5zMYjEM0/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1K28U97PPPWNnScy2qbUiAFrfReR_kw5H/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/13McZ8f5W94NrEYLLwpzzSC7Xa5miLCbi/view' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://drive.google.com/file/d/1pbNt2aOQBuwAhFFauLhfIM9VMoGOK7MV/view' },
                    ],
                },
                {
                    title: 'Rajneeti Part-1',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1iwKcslQO8c6-2fg2F8iHh_a_L96QaQIP/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1fO2sn7TcHy9-e9PDiMHkj3z8jVf93hJC/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1Sas7M4GrjEOvFFkuPiB4Ptm0GTrrHlYT/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1OV8CHMSBESqZ22D3zkPHNbdbXV5eP_46/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1p7xHn4iGkdFKlLSR7bTNX_MaLRqJ1bas/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/1zoCRaqeUuhPy4__U0HKZYDFn5j8sJfBY/view' },
                    ],
                },
                {
                    title: 'Rajneeti Part-2',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1hhYvjOaLWAztS0_HRtVtchsdV-UJpuZO/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/14Y4Iw8GJ_IjSQ8gEpoYocTdoHHXGYHOr/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1vUCxG4qy4J02BCELpOYmKKtsQxVG-YCi/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1TILFY54jKybEB_GAoj2WDoRAcWwI5g2I/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1G5jTTx9sEdUbdDyYYhrBUM2z9zZpb7kw/view' },
                    ],
                },
                {
                    title: 'Fifty Shades of joy',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1Wl6kFy8-FeY8IUOUCrjqb2Tqqw5EXmeG/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1AMHO_CWZFmJ_ieNUjecT2c44WI1uPYiO/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1RJIInBg-PD-FXulaJx8cKe9pvIpmj6U6/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1AyshWbFrLJvOmcSNLQtm05fpBKuCB_MI/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1S0KQ8dIfQWFq4cC5WyrqpTonbrNvXgT2/view' },
                    ],
                },
                {
                    title: 'Krodh',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1truR16V6z0r1y24yKh3IF9KWLS3fSCCA/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1LxNk8755IvyUZQk6VIBEqgrF6DX1jOFF/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1_xVSTFzcjYDvApi3U5DnxSSXfLF1zZh-/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/19jeCvVpTC48yXPk-LoGDmJswvro4CW8x/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/193QHR8k6HG-aPxbpkYTDXzVyQMqfgdA1/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/1c3-O8Jbb5vRBp75pys4qLAZJLUdPdhWx/view' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://drive.google.com/file/d/1k2MTHM3OTW7YLhQ9JVMea9Fvk7ouIuLJ/view' },
                    ],
                },
                {
                    title: 'Criticism and Praise',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1QKiVbxc-4HHsDFVdZAHrKf_3BB0QiadZ/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1EI0awBovRyLnd_-LE69SQhybgqEpolx5/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/15cgRDCSpXk8S6gIFR4O5HTQ6We52MQk9/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1Xnd3fgEHQhA2yu_DE3gpLR32GLBWw8P6/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1r-VldQcMM79wTg6eoWsTZESG1yp_u_dT/view' },
                    ],
                },
                {
                    title: 'Walk in the park',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/12hmwQrsr9gtiTp-8fW5vTflB_xn_JSVH/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1Bu8SRl6-RVEQeghqZdpf8oPvCvVlhygT/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/14gdOcxzEKPSW20NnHrjGadVBelcniXjD/view' },
                    ],
                },
                {
                    title: 'Roti Kapda Makaan',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1su1JVE4AoQjfQg2D5jGmKqSsUoERiUne/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1HsPEhF_QqlPvb1YfT0gsJyPHjQuEn_6k/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1iGXV11-zNnh37V0TyN5LNOqJQ0N1iCaY/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/17h_61-k4ZSNX5HEyg_hnIwACmxgVh_Fm/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1ikWNevwwAauTwF6RnVx9o7b-qSV7s_vH/view' },
                    ],
                },
                {
                    title: 'Time Flies-Kal, Aaj, Aur Kal',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1euyyzTWaMEG6dQi9Jo0w0NTw0Kzc30mJ/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/17kQd8QpumfkNkMQ3DOjlldBVzN2Xngzi/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1SSNEg_EpM1uU-Jke5Rgc99RJgdx7-R7T/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1uKLj1jvCTabIuUpmjiO-loQ0-9Q9ssgW/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1J0HsKiHIhJYdld3RcZ_v0sCPz3_oS7mk/view' },
                    ],
                },
            ],
        },
        {
            title: 'Vocabulary Sessions 3',
            chapters: [
                {
                    title: 'LSD Part-1',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1lgroZXckIkYrGFqQ0rEOC7Pw2pGlwEtZ/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1Eg8joWFzK0NG4N6m6ejR4Jz9FTYnCuQ0/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1WsuR884qRG-e6N3LXVWaMo3JqIz3EAYP/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/181Ynh0W8fVXYkBD066vcWhD70vvw0V5L/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1BkSLXwJKjNEFEeaHSY9Ek-aMMw02sIv6/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/13nwhKm3DzHB0DL6yd39AGTQTKU49jQYv/view' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://drive.google.com/file/d/13KRb014WN_bUaF5OfcHUHYFpkwSQRv-G/view' },
                    ],
                },
                {
                    title: 'LSD Part-2',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1QHEoFqZsSAXcpP1AbQt6DllDGfD6U32m/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1BipNyRFS6FjpW_7FFyyHm8EG5QUJOQtj/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1ELA4zxF-9IpGlPpBqE8aWxPnjmnWWa34/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1isysN-ubbiPxXbs4Ret4SQsWsHj1fcMg/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1CGFRZ4SQCv7tXEv-1USJXSyWI0blvMjA/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/1PimP-33OtGyII1mScStYYYLb8QqNcE4_/view' },
                    ],
                },
            ],
        },
    ],
};
