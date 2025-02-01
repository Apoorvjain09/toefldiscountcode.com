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
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/13_HDJPCf8rH6P56DP2g9A4hqHzP9NhWE/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1KUZ2HtukcACOW8t1fGlurDrEgulszqXT/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/12rg92wsgm7Zt-izKIdQeOO8vyTdGGc6M/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1_LIL9todeJHppyWeP869vwwEgv9YS2GU/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1jXdTfhIW0mDgXs4_PsM-Cs35SSMVrqZ7/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/1ybBj3dCmY2YkakyC-WKY4o9NLrMdgEIq/view' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://drive.google.com/file/d/1tXZSY3CWP6YzT_6R8GDUt1oAy99R3OtT/view' },
                    ],
                },
                {
                    title: 'Shabd Part 1',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1ZQA39H45kcC8gLorA2k8RiLM406UVpT-/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1W792n7-rTJEodMtUy13NPUp36H1I29g_/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1djLXOg59QDVDcKGQLHTmr3dT7ZXkjKtP/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1TtazX1kgJALS44aaYACFy3ICOV-kF0fI/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1NClERfPqdFISq9l-lCIW3hjpP1emcpWx/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/1qRkf0V2SShgqMp-4oKVxIACW1Xntvu9D/view' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://drive.google.com/file/d/17hZVOdd6I-qYhPLxDVyXLwH1euOhi3cc/view' },
                        { id: 8, title: 'Lecture 8', videoUrl: 'https://drive.google.com/file/d/1YBzg9sNqyo2zybJT25Xx_Gectn2UhNeN/view' },
                    ],
                },
                {
                    title: 'Shabd Part 2',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1vBFoBoQ-p_e5iRP6QsUnr-WUC-phEVRy/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1E2IusIA5Mpe1F14CeNUrkNlAj8VNID26/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1ydkSIv0KhdccG7LRYxPUXPhGr6zIfnBp/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1Ke86yrr-SmfeAgFU-Elo7cEbmnLlhWUp/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1_Y3N8-yR7WlPJdsztSBn48UiSq6y4qAH/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/1En3t69Ust17lnPtHkEVBOEKP8ikUbW5D/view' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://drive.google.com/file/d/1Q-s3BL0726uUkBb7Im9z78sXAEF_n4Eq/view' },
                    ],
                },
                {
                    title: 'Office Office Part 1',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1MevJFet6pjekCqkqx0gFgorZeVaRvzLk/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1Qq0ZbSr_FB9N6xBwgdmBy90RHYI-dTW9/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1i81pG2Zuy00q-lB513aZYjt9waNhNQFG/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1sayXOEss-ZeO_d2H5EYUXtbGBEDoXLMN/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1wTasULznq2wyfiWeJE43TgPTNtZZ87uY/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/1zh9auw45BT_9GRxqQPYYnGiP6hLnwLYv/view' },
                    ],
                },
                {
                    title: 'Office Office Part 2',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1V_LUhFY_zxlnLGdIHplpvGmAKtR7MQ2n/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1_SrctGnPmLBb1YPbdaIha_huTVzfxjs6/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/18ZiTiSDnRUFzxHLNGiwZMdRgMzMKIVjH/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/14TTYkDVl_po5Phj7kAm_UJ7MXgqqgBrB/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1qOi76C65wkC2GpWClBcEblWWDyJA_DcG/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/1-H7X7XIBS8LjNCkrsyjk302_zF8EUEdt/view' },
                    ],
                },
                {
                    title: 'Money Matters',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1eVR_LIHeTjsfdg_hL5lZQ0OzGDIE4V14/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/14gksNoDzxg-C-LDnNarrvCDA8eipC7It/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1RgavHoBLmvJMBFQvcDaQVEDKn7hvp-FJ/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/10RcMZwTYlunLUq5e7rRyCAZWhE641n-O/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1bvJUohwCmkdoMdRVkggmaT6HfhpMw-F_/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/1x5QOgzH-GtlZBnTUfighEF8BVT1k21wN/view' },
                    ],
                },
                {
                    title: 'War and Peace',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/16p3VmJ4O1M8KKk8Vw_uzigkzAGjEPQ_z/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/157CUkJ8O1FxenmABVXr8Pi1Bpd6as8ZJ/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1OYTk6iieQfEX8NQcl4Q0Kq_riGXu5XUV/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1UkzAJ88gdUwTzL4Kk0u554tA1zxn8_wG/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1UHBPIQHxpymtdkMwyfJwg-ZqKmA-bP_m/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/14CUJhqLaIY2lmGoJ4PwdEMKdd1hJt72x/view' },
                    ],
                },
                {
                    title: 'Crime and pusnishment',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1ezbt5EJu_zcnXEVDGWV6r7dcoU7d8ljf/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1ykCV3aZZ8FYmhANLB99V420JWxaEtKpC/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1PriYG5_VYxHHFM2jAJuIzjOZxd8INPOQ/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1yA-Cf0ubkAsk1SM4f7Pxa3g7r85I7GgT/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1EP4aP7tyVHCSLXk9qPFwtCFD8povVCDK/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/1QuCYZyvv04PsHSUI3ILyBDWxADFxh2fs/view' },
                        { id: 7, title: 'Lecture 7', videoUrl: 'https://drive.google.com/file/d/1dM4m80VbgmJ7fLPydaeGBapirlKOf89r/view' },
                    ],
                },
                {
                    title: 'Break and Break',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1MrdQ2UMMqVmg9rdOFpc5MF8RW8eXvMVw/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/12uexg9tqfALogm6VaUzSIjELUbehgmLQ/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1Fzce4j8tVzjrqODLipHg0XAWQF4sXS9d/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1wKYXwAhLA637YaKV3e_qDAFuEvC7ingM/view' },
                    ],
                },
                {
                    title: 'Size Matters',
                    lectures: [
                        { id: 1, title: 'Lecture 1', videoUrl: 'https://drive.google.com/file/d/1vgQGZzS0pv9kZCbqte3I4WdbvmJ8WENx/view' },
                        { id: 2, title: 'Lecture 2', videoUrl: 'https://drive.google.com/file/d/1q8v41hSmhNDB7X20SDfyUmp4t-5o3wdU/view' },
                        { id: 3, title: 'Lecture 3', videoUrl: 'https://drive.google.com/file/d/1u1o8wmb9Fwel2-LLMDLQxzFNbcwHkb69/view' },
                        { id: 4, title: 'Lecture 4', videoUrl: 'https://drive.google.com/file/d/1K_ZiyWdn7NHuYOYYeY8uj94yPa1scFcI/view' },
                        { id: 5, title: 'Lecture 5', videoUrl: 'https://drive.google.com/file/d/1sCrIpMZxemVJ5N3_I6r0Cp0TFenqk-mT/view' },
                        { id: 6, title: 'Lecture 6', videoUrl: 'https://drive.google.com/file/d/1S5Vw0BFg1D8CLVTHB6q9EOyAeOA2rdID/view' },
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
