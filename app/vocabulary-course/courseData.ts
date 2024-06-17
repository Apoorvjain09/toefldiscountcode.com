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
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/07Sep2020020923SHABD-PART-2-(Part-2).mp4' },
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
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/24Aug2020100821Office-office--1-(Part-6).mp4' },
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
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/07May2020060530Body disease 1(part1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/07May2020060511Body disease 1(part2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/07May2020060547Body disease 1(part 3).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/07May2020060532Body disease 1(part 4).mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/07May2020060505Body disease 1 (part 5).mp4' },
                    ],
                },
                {
                    title: 'Body and Disease Part-2',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/12May2020040502Body-and-disease---II-(part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/12May2020040505Body-and-disease---II-(part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/12May2020050528Body-and-disease---II-(part-3).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/12May2020050531Body-and-disease---II-(part-4).mp4' },
                    ],
                },
                {
                    title: 'Beautiful Mind Part-1',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/27Dec2022051219BEAUTIFUL-MIND---1--(Part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/03Jan2023070160BEAUTIFUL-MIND---1--(Part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/03Jan2023070159BEAUTIFUL-MIND---1--(Part-3).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/27Dec2022061222BEAUTIFUL-MIND---1--(Part-4).mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/11Jul2020060720BEAUTIFUL-MIND---1--(Part-5).mp4' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/13Jul2020070701BEAUTIFUL-MIND---1--(Part-6).mp4' },
                    ],
                },
                {
                    title: 'Beautiful Mind Part-2',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/10Jul2021080752BEAUTIFUL-MIND---2--(Part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/22Jan2021090104BEAUTIFUL-MIND---2--(Part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/22Jan2021090159BEAUTIFUL-MIND---2--(Part-3).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/22Jan2021090133BEAUTIFUL-MIND---2--(Part-4).mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/22Jan2021090132BEAUTIFUL-MIND---2--(Part-5).mp4' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/22Jan2021090104BEAUTIFUL-MIND---2--(Part-6).mp4' },
                    ],
                },
                {
                    title: 'Religion',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/26Jun2020050650RELIGION---Part-1.mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/26Jun2020050623RELIGION---Part-2.mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/26Jun2020060630RELIGION---Part-3.mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/26Jun2020070625RELIGION---Part-4.mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/26Jun2020070609RELIGION---Part-5.mp4' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/26Jun2020080603RELIGION---Part-6.mp4' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://mja.in/uploads/course_video/27Jun2020050636RELIGION---Part-7.mp4' },
                    ],
                },
                {
                    title: 'Rajneeti Part-1',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/29May2021020557Rajneeti-part-1-Part-1s.mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/29May2021020508Rajneeti-part-1-Part-2.mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/29May2021020547Rajneeti-part-1-Part-3.mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/29May2021020520Rajneeti-part-1-Part-4.mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/29May2021020518Rajneeti-part-1-Part-5.mp4' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/29May2021020535Rajneeti-part-1-Part-6.mp4' },
                    ],
                },
                {
                    title: 'Rajneeti Part-2',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/18Sep2020050933Rajneeti-part-2--(Part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/18Sep2020060952Rajneeti-part-2--(part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/18Sep2020070930Rajneeti-part-2--(part-3).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/18Sep2020080905Rajneeti-part-2--(part-4).mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/21Sep2020120926Rajneeti-part-2--(part-5).mp4' },
                    ],
                },
                {
                    title: 'Fifty Shades of joy',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/23May2020070551Fifty-shades-of-Joy-new---(Part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/23May2020080535Fifty-shades-of-Joy-new---(Part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/23May2020080503Fifty-shades-of-Joy-new---(Part-3).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/23May2020080541Fifty-shades-of-Joy-new---(Part-4).mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/23May2020080537Fifty-shades-of-Joy-new---(Part-5).mp4' },
                    ],
                },
                {
                    title: 'Krodh',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/07Jul2020040713NEW-KRODH--part-1.mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/07Jul2020050703NEW-KRODH---Part-2.mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/07Jul2020050753NEW-KRODH---Part-3.mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/07Jul2020050728NEW-KRODH---Part-4.mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/07Jul2020050750NEW-KRODH---Part-5.mp4' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/07Jul2020060748NEW-KRODH---Part-6.mp4' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://mja.in/uploads/course_video/07Jul2020060759NEW-KRODH---Part-7.mp4' },
                    ],
                },
                {
                    title: 'Criticism and Praise',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/30May2020020500CRITICISM-AND-PRAISE--(Part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/30May2020020545CRITICISM-AND-PRAISE--(Part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/30May2020020539CRITICISM-AND-PRAISE--(Part-3).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/30May2020040519CRITICISM-AND-PRAISE--(Part-4).mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/30May2020040532CRITICISM-AND-PRAISE--(Part-5).mp4' },
                    ],
                },
                {
                    title: 'Walk in the park',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/18May2020010513A-walk-in-the-park-new---(part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/18May2020010503A-walk-in-the-park-new--(part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/18May2020010544A-walk-in-the-park-new--(part-3).mp4' },
                    ],
                },
                {
                    title: 'Walk in the park',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/18May2020010513A-walk-in-the-park-new---(part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/18May2020010503A-walk-in-the-park-new--(part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/18May2020010544A-walk-in-the-park-new--(part-3).mp4' },
                    ],
                },
                {
                    title: 'Roti Kapda Makaan',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/26May2020070512Roti-Kapda-Makaan-(Part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/26May2020070535Roti-Kapda-Makaan-(Part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/26May2020070533Roti-Kapda-Makaan-(Part-3).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/26May2020080536Roti-Kapda-Makaan-(part-4).mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/26May2020080513Roti-Kapda-Makaan-(part-5).mp4' },
                    ],
                },
                {
                    title: 'Time Flies-Kal, Aaj, Aur Kal',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/04Jun2020020614Time-flies--kal,-aaj-aur-kal-(Part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/04Jun2020020636Time-flies--kal,-aaj-aur-kal-(Part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/04Jun2020030614Time-flies--kal,-aaj-aur-kal-(Part-3).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/04Jun2020040613Time-flies--kal,-aaj-aur-kal-(Part-4).mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/04Jun2020030614Time-flies--kal,-aaj-aur-kal-(Part-5).mp4' },
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
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/07Oct2020011052LSD-1-(part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/21Sep2020120922LSD-1-(part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/21Sep2020120904LSD-1-(part-3).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/21Sep2020010935LSD-1-(part-4).mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/21Sep2020010949LSD-1-(part-5).mp4' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/21Sep2020010927LSD-1-(part-6).mp4' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://mja.in/uploads/course_video/21Sep2020010958LSD-1-(part-7).mp4' },
                    ],
                },
                {
                    title: 'LSD Part-2',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://mja.in/uploads/course_video/11Oct2020021001LSD-Part-2-(part-1).mp4' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://mja.in/uploads/course_video/11Oct2020021003LSD-Part-2-(Part-2).mp4' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://mja.in/uploads/course_video/11Oct2020031003LSD-Part-2-(Part-4).mp4' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://mja.in/uploads/course_video/11Oct2020031045LSD-Part-2-(Part-3).mp4' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://mja.in/uploads/course_video/11Oct2020041016LSD-Part-2-(Part-5).mp4' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://mja.in/uploads/course_video/11Oct2020041009LSD-Part-2-(Part-6).mp4' },
                    ],
                },
            ],
        },
    ],
};
