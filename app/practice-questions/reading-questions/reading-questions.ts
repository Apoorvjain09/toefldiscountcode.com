import { dedent } from 'ts-dedent'

export interface Question {
    id: number,
    question?: string
    options: string[]
    correct_answer: string
    answer_explanation: string
    highlighted_sentence?: string;
    insertion_sentence?: string;
    insertion_passage?: string;
    summarization_intro_sentence?: string;
}

export interface Passage {
    id: number
    passage: string
    questions: Question[]
}

export const quizData: { passages: Passage[] } = {
    passages: [
        {
            id: 1,
            passage: dedent`
                [1] The epic poem Beowulf, written in Old English, is the earliest existing Germanic epic and one of four surviving Anglo-Saxon manuscripts. Although Beowulf was written by an anonymous Englishman in Old English, the tale takes place in that part of Scandinavia from which Germanic tribes emigrated to England. Beowulf comes from Geatland, the southeastern part of what is now Sweden. Hrothgar, king of the Danes, lives near what is now Leire, on Zealand, Denmark's largest island. The Beowulf epic contains three major tales about Beowulf and several minor tales that reflect a rich Germanic oral tradition of myths, legends, and folklore
                [2] The Beowulf warriors have a foot in both the Bronze and Iron Ages. Their mead-halls reflect the wealthy living of the Bronze Age Northmen, and their wooden shields, wood-shafted spears, and bronze-hilted swords are those of the Bronze Age warrior. However, they carry iron-tipped spears, and their best swords have iron or iron-edged blades. Beowulf also orders an iron shield for his fight with a dragon. Iron replaced bronze because it produced a blade with a cutting edge that was stronger and sharper. The Northmen learned how to forge iron in about 500 s.c. Although they had been superior to the European Celts in bronze work, it was the Celts who taught them how to make and design iron work. Iron was accessible everywhere in Scandinavia, usually in the form of "bog-iron" found in the layers of peat in peat bogs.
                [3] The Beowulf epic also reveals interesting aspects of the lives of the AngloSaxons who lived in England at the time of the anonymous Beowulf poet. The Germanic tribes, including the Angles, the Saxons, and the Jutes, invaded England from about A.O. 450 to 600. By the time of the Beowulf poet Anglo-Saxon society in England was neither primative nor uncultured.
                [4] Although the Beowulf manuscript was written in about A.O. 1000, it was not discovered until the seventeenth century. Scholars do not know whether Beowulf is the sole surviving epic from a flourishing Anglo-Saxon literary period that produced other great epics or whether it was unique even in its own time. Many scholars think that the epic was probably written sometime between the late seventh century and the early ninth century. If they are correct, the original manuscript was probably lost during the ninth-century Viking invasions of Anglia, in which the Danes destroyed the Anglo-Saxon monasteries and their great libraries. However, other scholars think that the poet's favorable attitude toward the Danes must place the epic's composition after the Viking invasions and at the start of the eleventh century, when this Beowulf manuscript was written.
                [5] The identity of the Beowulf poet is also uncertain. He apparently was a Christian who loved the pagan heroic tradition of his ancestors and blended the values of the pagan hero with the Christian values of his own country and time. Because he wrote in the Anglian dialect, he probably was either a monk in a monastery or a poet in an Anglo-Saxon court located north of the Thames River.
                [6] Beowulf interests contemporary readers for many reasons. First, it is an outstanding adventure story. Grendel, Grendel's mother, and the dragon are marvelous characters, and each fight is unique, action-packed, and exciting. Second, Beowulf is a very appealing hero. He is the perfect warrior, combining extraordinary strength, skill, courage, and loyalty. Like Hercules, he devotes his life to making the world a safer place. He chooses to risk death in order to help other people, and he faces his inevitable death with heroism and dignity. Third, the Beowulf poet is interested in the psychological aspects of human behavior. For example, the Danish hero's welcoming speech illustrates his jealousy of Beowulf. The behavior of Beowulf's warriors in the dragon fight reveals their cowardice. Beowulf's attitudes toward heroism reflect his maturity and experience, while King Hrothgar's attitudes toward life show the experiences of an aged nobleman.
                [7] Finally, the Beowulf poet exhibits a mature appreciation of the transitory nature of human life and achievement. In Beowulf, as in the major epics of other cultures, the hero must create a meaningful life in a world that is often dangerous and uncaring. He must accept the inevitability of death. He chooses to reject despair; instead, he takes pride in himself and in his accomplishments, and he values human relationships.
            `,
            questions: [
                {
                    id: 1,
                    question: 'According to paragraph 1, which of the following is true about Beowulf?',
                    options: [
                        'It the only manuscript from the Anglo-Saxon period.',
                        'The original story was written in a German dialect.',
                        'The author did not sign his name to the poem.',
                        'It is one of several epics from the first century.'
                    ],
                    correct_answer: 'C',
                    answer_explanation: dedent`
                        The passage states that Beowulf was written by an anonymous Englishman. The word "anonymous" means that the author's name is unknown, which directly supports option (C).

                        ❌ Option A ("It is the only manuscript from the Anglo-Saxon period") is incorrect because the passage states that Beowulf is one of four surviving Anglo-Saxon manuscripts.
                        ❌ Option B ("The original story was written in a German dialect") is incorrect because it was written in Old English, not German.
                        ❌ Option D ("It is one of several epics from the first century") is incorrect because the passage suggests uncertainty about whether there were other Anglo-Saxon epics, and it also indicates that Beowulf was likely composed between the 7th and 9th centuries, not the first century.

                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: 'The word major in the passage is closest in meaning to',
                    options: [
                        "basic",
                        "principal",
                        "distinct",
                        "current",
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`
                        The passage states that the Beowulf epic contains three major tales about Beowulf. The word "major" in this context refers to the most significant or important tales, which aligns with the meaning of "principal".

                        ❌ Option A ("basic") is incorrect because "basic" means fundamental or simple, which does not match the meaning of "major" in the passage.
                        ❌ Option C ("distinct") is incorrect because "distinct" means separate or different, which does not convey the sense of importance that "major" does.
                        ❌ Option D ("current") is incorrect because "current" refers to something happening now, which is unrelated to the passage's meaning.
                                        
                        Thus, option B ("principal") is the best answer.
                    `
                },
                {
                    id: 3,
                    question: 'Why does the author mention "bog-iron" in paragraph 2?',
                    options: [
                        "To demonstrate the availability of iron in Scandinavia",
                        "To prove that iron was better than bronze for weapons",
                        "To argue that the Celts provided the materials to make iron",
                        "To suggest that 500 B.c. was the date that the Iron Age began",
                    ],
                    correct_answer: 'A',
                    answer_explanation: dedent`
                        The passage states that iron was widely accessible in Scandinavia, particularly in the form of "bog-iron" found in peat bogs. This detail highlights that iron was readily available in the region, supporting the development of iron weapons.

                        ❌ Option B ("To prove that iron was better than bronze for weapons") is incorrect because while the passage mentions that iron replaced bronze for its superior cutting edge, the reference to bog-iron specifically focuses on its availability rather than its quality.
                        ❌ Option C ("To argue that the Celts provided the materials to make iron") is incorrect because the passage states that the Celts taught the Northmen how to forge iron, but it does not suggest that they supplied the raw material.
                        ❌ Option D ("To suggest that 500 s.c. was the date that the Iron Age began") is incorrect because the passage only mentions that the Northmen learned iron forging around 500 s.c., not that it marks the start of the Iron Age.
                                        
                        Thus, option A ("To demonstrate the availability of iron in Scandinavia") is the best answer.
                    `
                },
                {
                    id: 4,
                    question: 'Which of the sentences below best expresses the information in the highlighted statement in the passage?',
                    highlighted_sentence: "By the time of the Beowulf poet Anglo-Saxon society in England was neither primative nor uncultured.",
                    options: [
                        "Society in Anglo-Saxon England was both advanced and cultured.",
                        "The society of the Anglo-Saxon·s was not primitive or cultured.",
                        "The Anglo-Saxons had a society that was primitive, not cultured.",
                        "England during the Anglo-Saxon society was advanced, not cultured.",
                    ],
                    correct_answer: 'A',
                    answer_explanation: dedent`
                        The highlighted statement in the passage states that Anglo-Saxon society in England was neither primitive nor uncultured. This means that their society was developed and had cultural sophistication.

                        ✅ Option A ("Society in Anglo-Saxon England was both advanced and cultured.") accurately captures this meaning by affirming that the society was not primitive but rather developed and cultured.

                        ❌ Option B ("The society of the Anglo-Saxons was not primitive or cultured.") is incorrect because it incorrectly suggests that the society lacked culture, which contradicts the passage.
                        ❌ Option C ("The Anglo-Saxons had a society that was primitive, not cultured.") is incorrect because it states the exact opposite of what the passage says.
                        ❌ Option D ("England during the Anglo-Saxon society was advanced, not cultured.") is incorrect because it falsely implies that Anglo-Saxon society was advanced but lacked culture, whereas the passage indicates it was both advanced and cultured.

                        Thus, option A is the best answer.
                    `
                },
                {
                    id: 5,
                    question: 'the word unique the passage is closest in meaning to',
                    options: [
                        "old",
                        "rare",
                        "perfect",
                        "weak",
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`
                        The passage states that scholars are uncertain whether Beowulf was the only surviving epic from a flourishing Anglo-Saxon literary period or if it was unique even in its own time. In this context, "unique" means something that is one of a kind or rare.

                        ❌ Option A ("old") is incorrect because "unique" does not refer to the age of Beowulf, but rather to its rarity.
                        ❌ Option C ("perfect") is incorrect because "unique" does not imply perfection, only that it is distinct or uncommon.
                        ❌ Option D ("weak") is incorrect because "unique" does not suggest any form of weakness.
                                        
                        Thus, option B ("rare") is the best answer.
                    `
                },
                {
                    id: 6,
                    question: 'According to paragraph 4, why do many scholars believe that the original manuscript for Beowulf was lost?',
                    options: [
                        "Because it is not like other manuscripts",
                        "Because many libraries were burned",
                        "Because the Danes were allies of the Anglo-Saxons",
                        "Because no copies were found in monasteries",
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`
                        The passage states that many scholars believe the original Beowulf manuscript was likely lost during the ninth-century Viking invasions of Anglia, during which the Danes destroyed Anglo-Saxon monasteries and their great libraries. This directly supports the idea that the manuscript was lost because many libraries were burned.

                        ❌ Option A ("Because it is not like other manuscripts") is incorrect because the passage does not compare Beowulf to other manuscripts in this way.
                        ❌ Option C ("Because the Danes were allies of the Anglo-Saxons") is incorrect because the passage does not say the Danes were allies but rather that they invaded and destroyed libraries.
                        ❌ Option D ("Because no copies were found in monasteries") is incorrect because the passage attributes the loss to the destruction of monasteries, not just the absence of copies.

                        Thus, option B ("Because many libraries were burned") is the best answer.
                    `
                },
                {
                    id: 7,
                    question: 'Why does the author of this passage use the word "apparently" in paragraph 5',
                    options: [
                        "He is not certain that the author of Beowulf was a Christian.",
                        "He is mentioning facts that are obvious to the readers.",
                        "He is giving an example from a historical reference.",
                        "D He is introducing evidence about the author of Beowulf",
                    ],
                    correct_answer: 'A',
                    answer_explanation: dedent`
                        The passage states that the identity of the Beowulf poet is uncertain, but the poet "apparently" was a Christian who admired the pagan heroic tradition. The word "apparently" suggests that this conclusion is based on interpretation rather than direct evidence, indicating some level of uncertainty.

                        ❌ Option B ("He is mentioning facts that are obvious to the readers.") is incorrect because the author is discussing something uncertain, not an obvious fact.
                        ❌ Option C ("He is giving an example from a historical reference.") is incorrect because the passage does not cite a specific historical reference as proof.
                        ❌ Option D ("He is introducing evidence about the author of Beowulf.") is incorrect because the passage does not provide definitive evidence about the poet’s identity, only speculation.

                        Thus, option A ("He is not certain that the author of Beowulf was a Christian.") is the best answer.
                    `
                },
                {
                    id: 8,
                    question: 'Why did the author compare the Beowulf character to Hercules?',
                    options: [
                        "They are both examples of the ideal hero.",
                        "Their adventures with a dragon are very similar.",
                        "The speeches that they make are inspiring.",
                        "They lived at about the same time.",
                    ],
                    correct_answer: 'A',
                    answer_explanation: dedent`
                        The passage describes Beowulf as a perfect warrior with extraordinary strength, skill, courage, and loyalty and compares him to Hercules. This suggests that the comparison is made because both characters embody the traits of an ideal hero who fights for the greater good.

                        ❌ Option B ("Their adventures with a dragon are very similar.") is incorrect because while Beowulf fights a dragon, Hercules' adventures involve various mythical creatures, not just dragons.
                        ❌ Option C ("The speeches that they make are inspiring.") is incorrect because the passage does not mention their speeches as a reason for comparison.
                        ❌ Option D ("They lived at about the same time.") is incorrect because Hercules is a figure from ancient Greek mythology, while Beowulf is from the Anglo-Saxon period, and the passage does not suggest they lived in the same era.

                        Thus, option A ("They are both examples of the ideal hero.") is the best answer.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] The epic poem Beowulf, written in Old English, is the earliest existing Germanic epic and one of four surviving Anglo-Saxon manuscripts. Although Beowulf was written by an anonymous Englishman in Old English, the tale takes place in that part of Scandinavia from which Germanic tribes emigrated to England. Beowulf comes from Geatland, the southeastern part of what is now Sweden. Hrothgar, king of the Danes, lives near what is now Leire, on Zealand, Denmark's largest island. The Beowulf epic contains three major tales about Beowulf and several minor tales that reflect a rich Germanic oral tradition of myths, legends, and folklore
                        [2] The Beowulf warriors have a foot in both the Bronze and Iron Ages. Their mead-halls reflect the wealthy living of the Bronze Age Northmen, and their wooden shields, wood-shafted spears, and bronze-hilted swords are those of the Bronze Age warrior. However, they carry iron-tipped spears, and their best swords have iron or iron-edged blades. Beowulf also orders an iron shield for his fight with a dragon. Iron replaced bronze because it produced a blade with a cutting edge that was stronger and sharper. The Northmen learned how to forge iron in about 500 s.c. Although they had been superior to the European Celts in bronze work, it was the Celts who taught them how to make and design iron work. Iron was accessible everywhere in Scandinavia, usually in the form of "bog-iron" found in the layers of peat in peat bogs.
                        [3] The Beowulf epic also reveals interesting aspects of the lives of the AngloSaxons who lived in England at the time of the anonymous Beowulf poet. The Germanic tribes, including the Angles, the Saxons, and the Jutes, invaded England from about A.O. 450 to 600. By the time of the Beowulf poet Anglo-Saxon society in England was neither primative nor uncultured. ⬛ [A]
                        [4] Although the Beowulf manuscript was written in about A.O. 1000, it was not discovered until the seventeenth century. ⬛ [B] Scholars do not know whether Beowulf is the sole surviving epic from a flourishing Anglo-Saxon literary period that produced other great epics or whether it was unique even in its own time. ⬛ [C] Many scholars think that the epic was probably written sometime between the late seventh century and the early ninth century. If they are correct, the original manuscript was probably lost during the ninth-century Viking invasions of Anglia, in which the Danes destroyed the Anglo-Saxon monasteries and their great libraries. However, other scholars think that the poet's favorable attitude toward the Danes must place the epic's composition after the Viking invasions and at the start of the eleventh century, when this Beowulf manuscript was written.
                        [5] The identity of the Beowulf poet is also uncertain. ⬛ [D] He apparently was a Christian who loved the pagan heroic tradition of his ancestors and blended the values of the pagan hero with the Christian values of his own country and time. Because he wrote in the Anglian dialect, he probably was either a monk in a monastery or a poet in an Anglo-Saxon court located north of the Thames River.
                        [6] Beowulf interests contemporary readers for many reasons. First, it is an outstanding adventure story. Grendel, Grendel's mother, and the dragon are marvelous characters, and each fight is unique, action-packed, and exciting. Second, Beowulf is a very appealing hero. He is the perfect warrior, combining extraordinary strength, skill, courage, and loyalty. Like Hercules, he devotes his life to making the world a safer place. He chooses to risk death in order to help other people, and he faces his inevitable death with heroism and dignity. Third, the Beowulf poet is interested in the psychological aspects of human behavior. For example, the Danish hero's welcoming speech illustrates his jealousy of Beowulf. The behavior of Beowulf's warriors in the dragon fight reveals their cowardice. Beowulf's attitudes toward heroism reflect his maturity and experience, while King Hrothgar's attitudes toward life show the experiences of an aged nobleman.
                        [7] Finally, the Beowulf poet exhibits a mature appreciation of the transitory nature of human life and achievement. In Beowulf, as in the major epics of other cultures, the hero must create a meaningful life in a world that is often dangerous and uncaring. He must accept the inevitability of death. He chooses to reject despair; instead, he takes pride in himself and in his accomplishments, and he values human relationships.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "Moreover, they disagree as to whether this Beowulf is a copy of an earlier manuscript.",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'C',
                    answer_explanation: dedent`
                        The sentence "Moreover, they disagree as to whether this Beowulf is a copy of an earlier manuscript." introduces scholarly disagreement about the origins of Beowulf.

                        ✅ Blank C is the best location because it follows the sentence discussing uncertainty about whether Beowulf was the sole surviving epic or unique in its time. Placing the insertion sentence here smoothly continues the discussion by adding another layer of scholarly debate—whether Beowulf was a copy of an earlier manuscript.
                                        
                        ❌ Blank A is incorrect because it appears in a section discussing Anglo-Saxon society, not the origins of Beowulf.
                        ❌ Blank B is incorrect because it would interrupt the flow of information about when the Beowulf manuscript was discovered.
                        ❌ Blank D is incorrect because it shifts the discussion to the identity of the poet, unrelated to whether Beowulf was a copied work.
                                        
                        Thus, option C ("Blank C") is the best choice.
                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "Beowulf is the oldest Anglo-Saxon epic poem that has survived to the present day.",
                    options: [
                        "The Northmen were adept in crafting tools and weapons made of bronze, but the Celts were superior in designing and working in iron.",
                        "In the Viking invasions of England, the Danish armies destroyed monasteries, some of which contained extensive libraries.",
                        "King Hrothgar and Beowulf become friends at the end of their lives, after having spent decades opposing each other on the battlefield.",
                        "The poem chronicles life in Anglo-Saxon society during the Bronze. and Iron Ages when Germanic tribes were invading England.",
                        "Although Beowulf was written by an anonymous poet, probably a Christian, about A.D. 1000, it was not found until the seventeenth century.",
                        "Beowulf is still interesting because it has engaging characters, an adventurous plot, and an appreciation for human behavior and relationships."
                    ],
                    correct_answer: "EDF",
                    answer_explanation: dedent`
                        The correct answers are E, D, and F, as they accurately summarize key aspects of Beowulf.

                        ✅ Option E ("Although Beowulf was written by an anonymous poet, probably a Christian, about A.D. 1000, it was not found until the seventeenth century.") is correct because it states an important historical fact about the poem’s authorship and discovery.
                        ✅ Option D ("The poem chronicles life in Anglo-Saxon society during the Bronze and Iron Ages when Germanic tribes were invading England.") is correct because it reflects the passage’s discussion of the Anglo-Saxon period and societal aspects described in Beowulf.
                        ✅ Option F ("Beowulf is still interesting because it has engaging characters, an adventurous plot, and an appreciation for human behavior and relationships.") is correct as it captures why Beowulf remains relevant and engaging to modern audiences.
                                        
                        ❌ Option A ("The Northmen were adept in crafting tools and weapons made of bronze, but the Celts were superior in designing and working in iron.") is incorrect because it focuses on metalworking but does not summarize the poem’s main themes.
                        ❌ Option B ("In the Viking invasions of England, the Danish armies destroyed monasteries, some of which contained extensive libraries.") is incorrect because it is a historical detail rather than a core theme of Beowulf.
                        ❌ Option C ("King Hrothgar and Beowulf become friends at the end of their lives, after having spent decades opposing each other on the battlefield.") is incorrect because the passage does not suggest that Beowulf and Hrothgar were longtime enemies before becoming friends.
                                        
                        Thus, E, D, and F provide the best summary of Beowulf.
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            id: 2,
            passage: dedent`
                [1] Mammals and birds generally maintain body temperature within a narrow range (36-38°C for most mammals and 39-42°C for most birds) that is usually considerably warmer than the environment. Because heat always flows from a warm object to cooler surroundings, birds and mammals must counteract the constant heat loss. This maintenance of warm body temperature depends on several key adaptations. The most basic mechanism is the high metabolic rate of endothermy itself. Endotherms can produce large amounts of metabolic heat that replace the flow of heat to the environment, and they can vary heat production to match changing rates of heat loss. Heat production is increased by such muscle activity as moving or shivering. In some mammals, certain hormones can cause mitochondria to increase their metabolic activity and produce heat instead of ATP. This nonshivering thermogenesis (Nsn takes place throughout the body, but some mammals also have a tissue called brown fat in the neck and between the shoulders that is specialized for rapid heat production. Through shivering and NST, mammals and birds in cold environments can increase their metabolic heat production by as much as 5 to 10 times above the minimal levels that occur in warm conditions.
                [2] Another major thermoregulatory adaptation that evolved in mammals and birds is insulation (hair, feathers, and fat layers), which reduces the flow of heat and lowers the energy cost of keeping warm. Most land mammals and birds react to cold by raising their fur or feathers, thereby trapping a thicker layer of air. Humans rely more on a layer of fat just beneath the skin as insulation; goose bumps are a vestige of hair-raising left over from our furry ancestors. Vasodilation and vasoconstriction also regulate heat exchange and may contribute to regional temperature differences within the animal. For example, heat loss from a human is reduced when arms and legs cool to several degrees below the temperature of the body core, where most vital organs are located. 
                [3] Hair loses most of its insulating power when wet. Marine mammals such as whales and seals have a very thick layer of insulation fat called blubber, just under the skin. Marine mammals swim in water colder than their body core temperature, and many species spend at least part of the year in nearly freezing polar seas. The loss of heat to water occurs 50 to 100 times more rapidly than heat loss to air, and the skin temperature of a marine mammal is close to water temperature. Even so, the blubber insulation is so effective that marine mammals maintain body core temperatures of about 36-38°C with metabolic rates about the same as those of land mammals of similar size. The flippers or tail of a whale or seal lack insulating blubber, but countercurrent heat exchangers greatly reduce heat loss in these extremities, as they do in the legs of many birds.
                [4] Through metabolic heat production, insulation, and vascular adjustments, birds and mammals are capable of astonishing feats of thermoregulation. For example, small birds called chickadees, which weigh only 20 grams, can remain active and hold body temperature nearly constant at 40°C in environmental temperatures as low as -40°C-as long as they have enough food to supply the large amount of energy necessary for heat production.
            `,
            questions: [
                {
                    id: 1,
                    question: 'Based on information in paragraph 1, which of the following best explains the term "thermogenesis"?',
                    options: [
                        "Heat loss that must be reversed",
                        "The adaptation of brown fat tissue in the neck",
                        "The maintenance _ of healthy environmental conditions",
                        "Conditions that affect the metabolism",
                    ],
                    correct_answer: 'D',
                    answer_explanation: dedent`
                        The passage in paragraph 1 discusses how thermogenesis relates to metabolic processes that generate heat. This directly supports option (D), as thermogenesis involves conditions that influence metabolism.

                        ❌ Option A ("Heat loss that must be reversed") is incorrect because thermogenesis refers to heat production, not just counteracting heat loss.
                        ❌ Option B ("The adaptation of brown fat tissue in the neck") is incorrect because, while brown fat plays a role in thermogenesis, the term itself refers more broadly to metabolic heat production.
                        ❌ Option C ("The maintenance of healthy environmental conditions") is incorrect because thermogenesis is a biological process, not an environmental regulation mechanism.

                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: 'Which of the sentences below best expresses the information in the highlighted statement in the passage? The other choices change the meaning or leave out important information.',
                    options: [
                        "An increase in heat production causes muscle activity such as moving or shivering.",
                        "Muscle activity like moving and shivering will increase·heat production.",
                        "Moving and shivering are muscle activities that increase with heat.",
                        "When heat increases, the production of muscle activity also increases",
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`
                        The highlighted statement in the passage indicates that muscle activity, such as moving and shivering, leads to increased heat production. Option (B) correctly restates this idea, maintaining the original meaning.

                        ❌ Option A ("An increase in heat production causes muscle activity such as moving or shivering.") is incorrect because it reverses the cause-and-effect relationship. Muscle activity leads to heat production, not the other way around.
                        ❌ Option C ("Moving and shivering are muscle activities that increase with heat.") is incorrect because it suggests that these activities are a response to heat, whereas the passage indicates they are a response to cold.
                        ❌ Option D ("When heat increases, the production of muscle activity also increases.") is incorrect because it implies that heat causes muscle activity, rather than muscle activity generating heat.

                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 3,
                    question: 'The word minimal in the passage is closest in meaning to',
                    options: [
                        "most recent",
                        "most active",
                        "newest",
                        "smallest",
                    ],
                    correct_answer: 'D',
                    answer_explanation: dedent`
                        In the passage, the phrase "metabolic heat production by as much as 5 to 10 times above the minimal levels" suggests that "minimal" refers to the lowest or smallest amount of heat production. This directly supports option (D), "smallest."

                        ❌ Option A ("most recent") is incorrect because "minimal" does not relate to time or recency.
                        ❌ Option B ("most active") is incorrect because "minimal" implies the least amount, not the most.
                        ❌ Option C ("newest") is incorrect because "minimal" does not refer to something being new.

                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: '. In paragraph 2, how does the author explain the concept of vasodilation and vasoconstriction?',
                    options: [
                        "Describing the evolution in our ancestors",
                        "Giving an example of heat loss in the extremities",
                        "Comparing the process in humans and animals",
                        "Identifying various types of insulation",
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`
                        In paragraph 2, the passage explains vasodilation and vasoconstriction by discussing how they regulate heat exchange and contribute to temperature differences in the body. The example given is how heat loss is reduced when arms and legs cool to several degrees below the core body temperature. This directly supports option (B), "Giving an example of heat loss in the extremities."

                        ❌ Option A ("Describing the evolution in our ancestors") is incorrect because the passage mentions goosebumps as a vestige of evolution but not in relation to vasodilation and vasoconstriction.
                        ❌ Option C ("Comparing the process in humans and animals") is incorrect because the passage does not make a direct comparison between humans and animals regarding this process.
                        ❌ Option D ("Identifying various types of insulation") is incorrect because insulation is discussed separately in the paragraph and is not related to vasodilation and vasoconstriction.

                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 5,
                    question: 'The word regulate in the passage is closest in meaning to',
                    options: [
                        "protect",
                        "create",
                        "reduce",
                        "control",
                    ],
                    correct_answer: 'D',
                    answer_explanation: dedent`
                        In the passage, the word "regulate" appears in the context of vasodilation and vasoconstriction, which help control heat exchange and maintain body temperature. This meaning aligns with option (D), "control."

                        ❌ Option A ("protect") is incorrect because regulating does not necessarily mean providing protection.
                        ❌ Option B ("create") is incorrect because regulating refers to managing or adjusting something, not generating it.
                        ❌ Option C ("reduce") is incorrect because regulation does not always imply a decrease; it means maintaining balance.

                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 6,
                    question: 'According to paragraph 3, why do many marine animals require a layer of blubber?',
                    options: [
                        "Because marine animals have lost their hair during evolution",
                        "Because heat is lost in water much faster than it is in air",
                        "Because dry hair does not insulate marine animals",
                        "Because they are so large that they require more insulation",
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`
                        Paragraph 3 states that marine mammals swim in water colder than their body temperature and that heat loss to water occurs 50 to 100 times more rapidly than to air. This directly supports option (B), "Because heat is lost in water much faster than it is in air."

                        ❌ Option A ("Because marine animals have lost their hair during evolution") is incorrect because while some marine mammals lack hair, the passage does not connect this directly to the need for blubber.
                        ❌ Option C ("Because dry hair does not insulate marine animals") is incorrect because the passage mentions that hair loses insulating power when wet, but it does not say this is why marine animals need blubber.
                        ❌ Option D ("Because they are so large that they require more insulation") is incorrect because the passage does not state that body size determines the need for blubber.

                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 7,
                    question: 'Why does the author mention "chickadees" in paragraph 4?',
                    options: [
                        "To discuss an animal that regulates heat very well",
                        "To demonstrate why chickadees have to eat so much",
                        "To mention an exception to the rules of thermoregulation",
                        "To give a reason for heat production in small animals",
                    ],
                    correct_answer: 'A',
                    answer_explanation: dedent`
                        In paragraph 4, the passage describes how chickadees, despite their small size, can regulate their body temperature in extreme cold by producing enough heat. This supports option (A), "To discuss an animal that regulates heat very well."

                        ❌ Option B ("To demonstrate why chickadees have to eat so much") is incorrect because although food is mentioned as necessary for heat production, the focus is on thermoregulation.
                        ❌ Option C ("To mention an exception to the rules of thermoregulation") is incorrect because chickadees are not presented as an exception but rather as an example of successful thermoregulation.
                        ❌ Option D ("To give a reason for heat production in small animals") is incorrect because the passage discusses heat production in both small and large animals, not just in chickadees.

                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 8,
                    question: 'The word sufficient in the passage is closest in meaning to',
                    options: [
                        "established",
                        "valuable",
                        "safe",
                        "adequate",
                    ],
                    correct_answer: 'D',
                    answer_explanation: dedent`
                        In the passage, "sufficient" refers to the amount of heat or food needed to maintain body temperature. This aligns with option (D), "adequate," which means enough to meet a need.

                        ❌ Option A ("established") is incorrect because "sufficient" does not refer to something being set up or founded.
                        ❌ Option B ("valuable") is incorrect because "sufficient" relates to quantity, not worth.
                        ❌ Option C ("safe") is incorrect because "sufficient" does not imply protection or security.

                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] Mammals and birds generally maintain body temperature within a narrow range (36-38°C for most mammals and 39-42°C for most birds) that is usually considerably warmer than the environment. Because heat always flows from a warm object to cooler surroundings, birds and mammals must counteract the constant heat loss. This maintenance of warm body temperature depends on several key adaptations. The most basic mechanism is the high metabolic rate of endothermy itself. Endotherms can produce large amounts of metabolic heat that replace the flow of heat to the environment, and they can vary heat production to match changing rates of heat loss. Heat production is increased by such muscle activity as moving or shivering. In some mammals, certain hormones can cause mitochondria to increase their metabolic activity and produce heat instead of ATP. This nonshivering thermogenesis (Nsn takes place throughout the body, but some mammals also have a tissue called brown fat in the neck and between the shoulders that is specialized for rapid heat production. Through shivering and NST, mammals and birds in cold environments can increase their metabolic heat production by as much as 5 to 10 times above the minimal levels that occur in warm conditions.
                        [2] Another major thermoregulatory adaptation that evolved in mammals and birds is insulation (hair, feathers, and fat layers), which reduces the flow of heat and lowers the energy cost of keeping warm. Most land mammals and birds react to cold by raising their fur or feathers, thereby trapping a thicker layer of air. ⬛ [A]  Humans rely more on a layer of fat just beneath the skin as insulation; goose bumps are a vestige of hair-raising left over from our furry ancestors. ⬛ [B] Vasodilation and vasoconstriction also regulate heat exchange and may contribute to regional temperature differences within the animal. ⬛ [C] For example, heat loss from a human is reduced when arms and legs cool to several degrees below the temperature of the body core, where most vital organs are located. [D] ⬛ 
                        [3] Hair loses most of its insulating power when wet. Marine mammals such as whales and seals have a very thick layer of insulation fat called blubber, just under the skin. Marine mammals swim in water colder than their body core temperature, and many species spend at least part of the year in nearly freezing polar seas. The loss of heat to water occurs 50 to 100 times more rapidly than heat loss to air, and the skin temperature of a marine mammal is close to water temperature. Even so, the blubber insulation is so effective that marine mammals maintain body core temperatures of about 36-38°C with metabolic rates about the same as those of land mammals of similar size. The flippers or tail of a whale or seal lack insulating blubber, but countercurrent heat exchangers greatly reduce heat loss in these extremities, as they do in the legs of many birds.
                        [4] Through metabolic heat production, insulation, and vascular adjustments, birds and mammals are capable of astonishing feats of thermoregulation. For example, small birds called chickadees, which weigh only 20 grams, can remain active and hold body temperature nearly constant at 40°C in environmental temperatures as low as -40°C-as long as they have enough food to supply the large amount of energy necessary for heat production.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "The insulating power of a layer of fur or feathers mainly depends on how much still air the layer traps.",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'A',
                    answer_explanation: dedent`
                        The sentence, "The insulating power of a layer of fur or feathers mainly depends on how much still air the layer traps," explains how insulation works. It fits best before the mention of fur and feathers raising to trap air, which is found in Blank A.

                        ❌ Option B is incorrect because it discusses vasodilation and vasoconstriction, which are unrelated to insulation.
                        ❌ Option C is incorrect because it provides an example of heat loss reduction, rather than explaining insulation.
                        ❌ Option D is incorrect because it is too far from the relevant discussion of fur and feathers.

                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "Thermoregulation is the process by which animals control body temperatures within healthy limits.",
                    options: [
                        "Although hair can be a very efficient insulation when it is dry and it can be raised, hair becomes ineffective when it is submerged in cold water.",
                        "Some animals with few adaptations for thermoregulation migrate to moderate climates to avoid the extreme weather in the polar regions and the tropics.",
                        "Mammals and birds use insulation to mitigate heat loss, including hair and feathers that can be raised to trap air as well as fat or blubber under the skin.",
                        "Some birds have a special pouch in the mouth, which can be fluttered to increase evaporation and decrease their body temperatures by as much as 20°c.",
                        "Endotherms generate heat by increasing muscle activity, by releasing hormones into their blood streams, or by producing heat in brown fat tissues.",
                        "Panting, sweating, and spreading saliva or urine on their bodies are all options for the evaporative cooling of animals in hot environmental conditions."
                    ],
                    correct_answer: "ECF",
                    answer_explanation: dedent`
                        The introduction sentence defines thermoregulation as controlling body temperature. The correct answer should summarize key strategies used by animals for maintaining heat balance.

                        ✅ Option E ("Endotherms generate heat by increasing muscle activity, by releasing hormones into their bloodstreams, or by producing heat in brown fat tissues.") is correct because it explains how animals produce heat.
                        ✅ Option C ("Mammals and birds use insulation to mitigate heat loss, including hair and feathers that can be raised to trap air as well as fat or blubber under the skin.") is correct because it describes how animals prevent heat loss.
                        ✅ Option F ("Panting, sweating, and spreading saliva or urine on their bodies are all options for the evaporative cooling of animals in hot environmental conditions.") is correct because it explains cooling mechanisms.

                        ❌ Option A is incorrect because it focuses on hair’s effectiveness in water rather than general thermoregulation.
                        ❌ Option B is incorrect because migration is an avoidance strategy rather than an active thermoregulation method.
                        ❌ Option D is incorrect because it describes a specific adaptation of certain birds rather than general thermoregulation strategies.

                        Thus, options (E), (C), and (F) are the best choices.
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            id: 3,
            passage: dedent`
                [1] In 1967, Holmes and Rahe developed the Social Readjustment Rating Scale (SRRS) to measure life change as a form of stress. The scale assigns numerical values to 43 major life events that are supposed to reflect the magnitude of the readjustment required by each change. In responding to the scale, respondents are asked to indicate how often they experienced any of these 43 events during a certain time period (typically, the past year). The person then adds up the numbers associated with each event checked.
                [2] The SRRS and similar scales have been used in thousands of studies by researchers all over the world. Overall, these studies have shown that people with higher scores on the SRRS tend to be more vulnerable to many kinds of physical illness—and many types of psychological problems as well. More recently, however, experts have criticized this research, citing problems with the methods used and raising questions about the meaning of the findings. 
                [3] First, the assumption that the SRRS measures change exclusively has been shown to be inaccurate. We now have ample evidence that the desirability of events affects adaptational outcomes more than the amount of change that they require. Thus, it seems prudent to view the SRRS as a measure of diverse forms of stress, rather than as a measure of change-related stress.
                [4] Second, the SRRS fails to take into account differences among people in their subjective perception of how stressful an event is. For instance, while divorce may deserve a stress value of 73 for most people, a particular person's divorce might generate much less stress and merit a value of only 25.
                [5] Third, many of the events listed on the SRRS and similar scales are highly ambiguous, leading people to be inconsistent as to which events they report experiencing. For instance, what qualifies as "trouble with the boss"? Should you check that because you're sick and tired of your supervisor? What constitutes a "change in living conditions"? Does your purchase of a great new sound system qualify? As you can see, the SRRS includes many "events" that are described inadequately, producing considerable ambiguity about the meaning of one's response. Problems in recalling events over a period of a year also lead to inconsistent responding on stress scales, thus lowering their reliability.
                [6] Fourth, the SRRS does not sample from the domain of stressful events very thoroughly. Do the 43 events listed on the SRRS exhaust all the major stresses that people typically experience? Studies designed to explore that question have found many significant omissions.
                [7] Fifth, the correlation between SRRS scores and health may be inflated because subjects' neuroticism affects both their responses to stress scales and their self-reports of health problems. Neurotic individuals have a tendency to recall more stress than others and to recall more symptoms of illness than others. These tendencies mean that some of the correlation between high stress and high illness may simply reflect the effects of subjects' neuroticism. The possible contaminating effects of neuroticism obscure the meaning of scores on the SRRS and similar measures of stress.
                [8] In the light of these problems, a number of researchers have attempted to develop improved versions of the SRRS. For example, the Life Experiences Survey (LES), assembled by Irwin Sarason and colleagues, has become a widely used measure of stress in contemporary research. The LES revises and builds on the SRRS survey in a variety of ways that correct, at least in part, most of the problems just discussed.
                [9] Specifically, the LES recognizes that stress involves more than mere change and asks respondents to indicate whether events had a positive or negative impact on them. This strategy permits the computation of positive change, negative change, and total change scores, which helps researchers gain much more insight into which facets of stress are most crucial. The LES also takes into consideration differences among people in their appraisal of stress, by dropping the normative weights and replacing them with personally assigned weightings of the impact of relevant events. Ambiguity in items is decreased by providing more elaborate descriptions of many items to clarify their meaning.
                [10] The LES deals with the failure of the SRRS to sample the full domain of stressful events in several ways. First, some significant omissions from the SRRS have been added to the LES. Second, the LES allows the respondent to write in personally important events that are not included on the scale. Third, the LES has an extra section just for students. Sarason and colleagues suggest that special, tailored sections of this sort be added for specific populations whenever it is useful.
            `,
            questions: [
                {
                    id: 1,
                    question: 'Based on the information in paragraph 1 and paragraph 2, what can be inferred about a person with a score of 30 on the SRRS?',
                    options: [
                        "A person with a higher score will experience less stress than this person will.",
                        "It is likely that this person has not suffered any major problems in the past year.",
                        "The amount of positive change is greater than that of a person with a score of 40.",
                        "This person has a greater probability to be ill than a person with a 20 score.",
                    ],
                    correct_answer: 'D',
                    answer_explanation: dedent`
                        Paragraphs 1 and 2 explain that the SRRS assigns numerical values to life events to measure stress levels. Studies have found that people with higher SRRS scores tend to be more vulnerable to illness. This directly supports option (D), as a score of 30 suggests a higher probability of illness compared to someone with a score of 20.

                        ❌ Option A ("A person with a higher score will experience less stress than this person will.") is incorrect because higher scores indicate greater stress, not less.
                        ❌ Option B ("It is likely that this person has not suffered any major problems in the past year.") is incorrect because a score of 30 still suggests some level of stress, though not extreme.
                        ❌ Option C ("The amount of positive change is greater than that of a person with a score of 40.") is incorrect because the SRRS does not differentiate between positive and negative change.

                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: 'The word outcomes in the passage is closest in meaning to',
                    options: [
                        "opportunities",
                        "conditions",
                        "results",
                        "issues",
                    ],
                    correct_answer: 'C',
                    answer_explanation: dedent`
                        The word "outcomes" appears in the passage in the context of how the desirability of events affects "adaptational outcomes." In this context, "outcomes" refers to the consequences or effects of an event, which aligns with option (C), "results."

                        ❌ Option A ("opportunities") is incorrect because "outcomes" refers to effects rather than chances for advancement.
                        ❌ Option B ("conditions") is incorrect because "outcomes" describe end results, not existing states.
                        ❌ Option D ("issues") is incorrect because while some outcomes might be problems, the term itself is neutral.

                        Thus, option (C) is the best answer.
                    `

                },
                {
                    id: 3,
                    question: 'The word diverse in the passage is closest in meaning to',
                    options: [
                        "necessary",
                        "steady",
                        "limited",
                        "different",
                    ],
                    correct_answer: 'D',
                    answer_explanation: dedent`
                        The passage states that the SRRS should be seen as a measure of "diverse forms of stress," meaning that it accounts for various types of stress. This aligns with option (D), "different," as "diverse" refers to a range of varying elements.

                        ❌ Option A ("necessary") is incorrect because "diverse" does not imply something is required.
                        ❌ Option B ("steady") is incorrect because "diverse" refers to variety, not stability.
                        ❌ Option C ("limited") is incorrect because "diverse" suggests a broad range, not restrictions.

                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: 'In paragraph 4, why does the author use divorce as an example?',
                    options: [
                        "To show how most people respond to high stress situations in their lives",
                        "To demonstrate the serious nature of a situation that is listed as a stressful event",
                        "To illustrate the subjective importance of a situation listed _ on the scale",
                        "To identify the numerical value for a stressful event on the SRRS                        ",
                    ],
                    correct_answer: 'C',
                    answer_explanation: dedent`
                        In paragraph 4, the author discusses how the SRRS does not account for individual differences in perceiving stress. The example of divorce, which has a standard stress value of 73 but might only be 25 for some individuals, highlights this subjectivity. This directly supports option (C), "To illustrate the subjective importance of a situation listed on the scale."

                        ❌ Option A ("To show how most people respond to high stress situations in their lives.") is incorrect because the example focuses on variation in stress perception, not general responses.
                        ❌ Option B ("To demonstrate the serious nature of a situation that is listed as a stressful event.") is incorrect because the point is not about the severity of divorce but rather about different stress perceptions.
                        ❌ Option D ("To identify the numerical value for a stressful event on the SRRS.") is incorrect because the author uses the number to explain subjectivity, not just to state a value.

                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 5,
                    question: 'In paragraph 5, how does the author demonstrate that the response events on the SRRS are not consistent?',
                    options: [
                        "By asking questions that could be answered in more than one way",
                        "By giving examples of responses that are confusing",
                        "By comparing several ways to score the stress scales",
                        "By suggesting that people do not respond carefully",
                    ],
                    correct_answer: 'A',
                    answer_explanation: dedent`
                        In paragraph 5, the author highlights how certain events on the SRRS, such as "trouble with the boss" or "change in living conditions," are vague and open to interpretation. This supports option (A), "By asking questions that could be answered in more than one way."

                        ❌ Option B ("By giving examples of responses that are confusing") is incorrect because the passage focuses on the ambiguity of the event descriptions, not the responses themselves.
                        ❌ Option C ("By comparing several ways to score the stress scales") is incorrect because the paragraph does not compare scoring methods.
                        ❌ Option D ("By suggesting that people do not respond carefully") is incorrect because the passage attributes inconsistency to vague wording, not respondent carelessness.

                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 6,
                    question: 'According to paragraph 7, why is the SRRS inappropriate for people with neuroses?',
                    options: [
                        "They are ill more often, which affects their scores on the scale.",
                        "Their self-reporting on the scale is affected by their neuroses.",
                        "They tend to suffer more stress than people withou, neuroses.",
                        "Their response to stress will probably not be recorded on the scale",
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`
                        Paragraph 7 states that neurotic individuals tend to recall more stress and more symptoms of illness than others. This suggests that their self-reporting on the SRRS is influenced by their neuroticism, leading to inflated scores. This directly supports option (B), "Their self-reporting on the scale is affected by their neuroses."

                        ❌ Option A ("They are ill more often, which affects their scores on the scale.") is incorrect because the passage emphasizes their tendency to recall more symptoms, not necessarily being ill more often.
                        ❌ Option C ("They tend to suffer more stress than people without neuroses.") is incorrect because the passage focuses on their recall tendencies rather than their actual stress levels.
                        ❌ Option D ("Their response to stress will probably not be recorded on the scale.") is incorrect because their responses are recorded, but they may be exaggerated.

                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 7,
                    question: 'The word assembled: in the passage is closest in meaning to',
                    options: [
                        "announced",
                        "influenced",
                        "arranged",
                        "distributed",
                    ],
                    correct_answer: 'C',
                    answer_explanation: dedent`
                        The passage states that Irwin Sarason and colleagues "assembled" the Life Experiences Survey (LES). In this context, "assembled" means they put together or organized the survey, which aligns with option (C), "arranged."

                        ❌ Option A ("announced") is incorrect because "assembled" refers to creating something, not making a public statement.
                        ❌ Option B ("influenced") is incorrect because "assembled" does not mean to have an effect on something.
                        ❌ Option D ("distributed") is incorrect because assembling refers to the process of putting together, not handing out.

                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 8,
                    question: 'According to paragraph 9, why does the LES ask respondents to classify change as positive or negative?',
                    options: [
                        "To analyze the long-term consequences of change",
                        "To determine which aspects of change are personally significant",
                        "To explain why some people handle stress better than others",
                        "CID To introduce normative weighting of stress events",
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`
                        Paragraph 9 explains that the LES recognizes stress involves more than just change and asks respondents to classify events as positive or negative. This allows researchers to analyze how different aspects of stress impact individuals. This supports option (B), "To determine which aspects of change are personally significant."

                        ❌ Option A ("To analyze the long-term consequences of change") is incorrect because the passage does not discuss long-term effects.
                        ❌ Option C ("To explain why some people handle stress better than others") is incorrect because the LES focuses on classifying stress, not explaining coping mechanisms.
                        ❌ Option D ("To introduce normative weighting of stress events") is incorrect because the LES removes normative weights and replaces them with personal assessments.

                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] In 1967, Holmes and Rahe developed the Social Readjustment Rating Scale (SRRS) to measure life change as a form of stress. The scale assigns numerical values to 43 major life events that are supposed to reflect the magnitude of the readjustment required by each change. In responding to the scale, respondents are asked to indicate how often they experienced any of these 43 events during a certain time period (typically, the past year). The person then adds up the numbers associated with each event checked.
                        [2] The SRRS and similar scales have been used in thousands of studies by researchers all over the world. Overall, these studies have shown that people with higher scores on the SRRS tend to be more vulnerable to many kinds of physical illness—and many types of psychological problems as well. More recently, however, experts have criticized this research, citing problems with the methods used and raising questions about the meaning of the findings. 
                        [3] First, the assumption that the SRRS measures change exclusively has been shown to be inaccurate. We now have ample evidence that the desirability of events affects adaptational outcomes more than the amount of change that they require. Thus, it seems prudent to view the SRRS as a measure of diverse forms of stress, rather than as a measure of change-related stress.
                        [4] Second, the SRRS fails to take into account differences among people in their subjective perception of how stressful an event is. For instance, while divorce may deserve a stress value of 73 for most people, a particular person's divorce might generate much less stress and merit a value of only 25.
                        [5] Third, many of the events listed on the SRRS and similar scales are highly ambiguous, leading people to be inconsistent as to which events they report experiencing. For instance, what qualifies as "trouble with the boss"? Should you check that because you're sick and tired of your supervisor? What constitutes a "change in living conditions"? Does your purchase of a great new sound system qualify? As you can see, the SRRS includes many "events" that are described inadequately, producing considerable ambiguity about the meaning of one's response. Problems in recalling events over a period of a year also lead to inconsistent responding on stress scales, thus lowering their reliability.
                        [6] Fourth, the SRRS does not sample from the domain of stressful events very thoroughly. Do the 43 events listed on the SRRS exhaust all the major stresses that people typically experience? Studies designed to explore that question have found many significant omissions.
                        [7] Fifth, the correlation between SRRS scores and health may be inflated because subjects' neuroticism affects both their responses to stress scales and their self-reports of health problems. Neurotic individuals have a tendency to recall more stress than others and to recall more symptoms of illness than others. These tendencies mean that some of the correlation between high stress and high illness may simply reflect the effects of subjects' neuroticism. The possible contaminating effects of neuroticism obscure the meaning of scores on the SRRS and similar measures of stress.
                        [8] In the light of these problems, a number of researchers have attempted to develop improved versions of the SRRS. For example, the Life Experiences Survey (LES), assembled by Irwin Sarason and colleagues, has become a widely used measure of stress in contemporary research. The LES revises and builds on the SRRS survey in a variety of ways that correct, at least in part, most of the problems just discussed.
                        [9] Specifically, the LES recognizes that stress involves more than mere change and asks respondents to indicate whether events had a positive or negative impact on them. This strategy permits the computation of positive change, negative change, and total change scores, which helps researchers gain much more insight into which facets of stress are most crucial. The LES also takes into consideration differences among people in their appraisal of stress, by dropping the normative weights and replacing them with personally assigned weightings of the impact of relevant events. Ambiguity in items is decreased by providing more elaborate descriptions of many items to clarify their meaning.
                        [10] The LES deals with the failure of the SRRS to sample the full domain of stressful events in several ways. First, some significant omissions from the SRRS have been added to the LES. Second, the LES allows the respondent to write in personally important events that are not included on the scale. Third, the LES has an extra section just for students. Sarason and colleagues suggest that special, tailored sections of this sort be added for specific populations whenever it is useful.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "This sum is an index of the amount of change-related stress the person has recently experienced.",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`
                        The insertion sentence, "This sum is an index of the amount of change-related stress the person has recently experienced," explains the purpose of adding up the numbers from the SRRS scale. It logically follows the sentence stating that respondents add up their scores, which appears in paragraph 1.

                        ✅ Option B is correct because it fits naturally after the explanation that respondents sum their scores, reinforcing that this total reflects change-related stress.

                        ❌ Option A is incorrect because it would introduce the sentence too early, before explaining how respondents add up their scores.
                        ❌ Option C is incorrect because it appears in a paragraph discussing the SRRS as a measure of diverse stress, which is unrelated to explaining how the index is calculated.
                        ❌ Option D is incorrect because it appears too late in the passage when discussing criticisms and improvements of the SRRS.

                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "Several social readjustment scales have been developed to measure stress from life changing events.",
                    options: [
                        "The Life Experiences Survey (LES) takes into consideration both positive and negative changes as well as the individual differences among people assigning values for stressful events.",
                        "The Life Experiences Survey (LES) was developed to correct a number of problems in the Social Readjustment Rating Scale (SAAS).",
                        "The Social Readjustment Rating Scale (SAAS) assigns mathematical values to major life events and collects data about the events that an individual has experienced during a specific time.",
                        "Researchers have called into question the usefulness of instruments like the Social Readjustment Rating Scale (SAAS) and the Life Experiences Survey (LES) and have begun to develop a new scale to measure stress.",
                        "People who have neurotic tendencies are not good candidates to take the Social Readjustment Scale (SRRS) because they may provide higher values for stressful events.",
                        "Positive events and negative events can both cause stress, according to social readjustment scales designed to measure them.",
                    ],
                    correct_answer: "ABC",
                    answer_explanation: dedent`
                        The introduction sentence states that social readjustment scales measure stress from life-changing events. The correct answer should include key details about these scales and their improvements.

                        ✅ Option A ("The Life Experiences Survey (LES) takes into consideration both positive and negative changes as well as the individual differences among people assigning values for stressful events.") is correct because it describes a key improvement of the LES, making it a more refined stress measurement tool.
                        ✅ Option B ("The Life Experiences Survey (LES) was developed to correct a number of problems in the Social Readjustment Rating Scale (SRRS).") is correct because it highlights why the LES was created, which is relevant to understanding the evolution of stress measurement scales.
                        ✅ Option C ("The Social Readjustment Rating Scale (SRRS) assigns mathematical values to major life events and collects data about the events that an individual has experienced during a specific time.") is correct because it explains how the SRRS works, providing necessary background.

                        ❌ Option D is incorrect because it suggests that researchers are moving away from these scales entirely, which is not stated in the passage.
                        ❌ Option E is incorrect because, while neuroticism is a factor affecting SRRS results, it does not summarize the key concepts of stress measurement scales.
                        ❌ Option F is incorrect because it only mentions the fact that both positive and negative events can cause stress, but does not explain how the scales measure stress.

                        Thus, options (A), (B), and (C) are the best choices.
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            id: 4,
            passage: dedent`
                [1] While the much-anticipated expansion of the western frontier was unfolding in accordance with the design of the National Policy, a new northern frontier was opening up to enhance the prospects of Canadian industrial development. Long the· preserve of the fur trade, the Canadian Shield and the western Cordilleras became a treasury of minerals, timber and hydroelectric power in the late 19th and early 20th centuries. As early as 1883, CPR [Canadian Pacific Railway) construction crews blasting through the rugged terrain of northern Ontario discovered copper and nickel deposits in the vicinity of Sudbury. As refining processes, uses, and markets for the metal developed, Sudbury became the world's largest nickel producer. The building of the Temiskaming and Northern Ontario Railway led to the discovery of rich silver deposits around Cobalt north of Lake Nipissing in 1903 and touched off a mining boom that spread northward to Kirkland Lake and the Porcupine district. Although the economic importance of these mining operations was enduring, they did not capture the public imagination to the same extent as the Klondike gold rush of the late 1890s.
                [2] Fortune-seekers from all parts of the world flocked to the Klondike and Yukon River valleys to pan for gold starting in 1896. At the height of the gold rush in 1898, the previously unsettled subarctic frontier had a population of about 30,000, more than half of which was concentrated in the newly established town of Dawson. In the same year, the federal government created the Yukon Territory, administered by an appointed commissioner, in an effort to ward off the prospect of annexation to Alaska. Even if the economic significance of the Klondike strike was somewhat exaggerated and short-lived, the tales of sudden riches, heroic and tragic exploits, and the rowdiness and lawlessness of the mining frontier were immortalized through popular fiction and folklore, notably the poetic verses of Robert W. Service.
                [3] Perhaps less romantic than the mining booms, the exploitation of forest and water resources was just as vital to national development. The Douglas fir, spruce, and cedar stands of British Columbia along with the white pine forests of Ontario satisfied construction demands on the treeless prair:ies as well as in the growing cities and towns of central Canada and the United States. British Columbia's forests also supplied lumber to Asia. In addition, the softwood forest wealth of the Cordilleras and the Shield was a valuable source of pulpwood for the development of the pulp and paper industry, which made Canada one of the world's leading exporters of newsprint. Furthermore, the fast flowing rivers of the Shield and Cordilleras could readily be harnessed as sources of hydroelectric power, replacing coal in the booming factories of central Canada as well as in the evolving mining and pulp and paper industries. The age of electricity under public ownership and control was ushered in by the creation of the Ontario Hydro-Electric Power Commission (now Ontario Hydro) in 1906 to distribute and eventually to produce this vital source of energy.
                [4] Western settlement and the opening of the northern resource frontier stimulated industrial expansion, particularly in central Canada. As the National Policy had intended, a growing agricultural population in the West increased the demand for eastern manufactured goods, thereby giving rise to agricultural implements works, iron and steel foundries, machine shops, railway yards, textile mills, boot and shoe factories, and numerous smaller manufacturing enterprises that supplied consumer goods. By keeping out lower-priced foreign manufactured goods, the high tariff policies of the federal government received much credit for protecting existing industries and encouraging  the creation of new enterprises. To climb the tariff wall, large American industrial firms opened branches in Canada, and the governments of Ontario and Quebec aggressively urged them on by offering bonuses, subsidies, and guarantees to locate new plants within their borders. Canadian industrial enterprises became increasingly attractive to foreign investors, especially from the United States and Great Britain. Much of the over $600 million of American capital that flowed into Canada from 1900 to 1913 was earmarked for mining and the pulp and paper industry, while British investors contributed near $1.8 billion, mostly in railway building, business development, and the construction of urban infrastructure. As a result, the gross value of Canadian manufactured products quadrupled from 1891 to 1916.
            `,
            questions: [
                {
                    id: 1,
                    question: 'Why does the author mention "the railroads" in paragraph 1?',
                    options: [
                        "Because miners were traveling to camps in the West",
                        "Because mineral deposits were discovered when the railroads were built",
                        "Because the western frontier was being settled by families",
                        "Because traders used the railroads to transport their goods ",
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`
                        Paragraph 1 explains that the construction of the Canadian Pacific Railway (CPR) led to the discovery of copper and nickel deposits in Northern Ontario. This directly supports option (B), as the railroads played a key role in uncovering valuable mineral resources.

                        ❌ Option A is incorrect because miners were primarily drawn to the Klondike Gold Rush, not the railway construction sites.
                        ❌ Option C is incorrect because paragraph 1 discusses mining and industrial growth, not family settlement.
                        ❌ Option D is incorrect because the focus is on resource discovery, not trade transportation.

                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: 'In paragraph 1, how does the author identify Sudbury?',
                    options: [
                        "An important stop on the new railroad line",
                        "A large market for the metals produced in Ontario",
                        "A major industrial center for the production of nickel",
                        "A mining town in the Klondike region",
                    ],
                    correct_answer: 'C',
                    answer_explanation: dedent`
                        The passage describes Sudbury as the world's largest nickel producer, emphasizing its industrial significance. This aligns with option (C), "A major industrial center for the production of nickel."

                        ❌ Option A is incorrect because Sudbury is mentioned for its mining industry, not as a stop on the railroad.
                        ❌ Option B is incorrect because Sudbury is a producer, not a marketplace for metals.
                        ❌ Option D is incorrect because Sudbury is located in Ontario, not the Klondike region.

                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 3,
                    question: 'The word enduring in the passage is closest in meaning to',
                    options: [
                        "disruptive",
                        "restored",
                        "identifiable",
                        "lasting",
                    ],
                    correct_answer: 'D',
                    answer_explanation: dedent`
                        The passage states that mining operations had long-term economic importance, which suggests that "enduring" means "lasting."

                        ❌ Option A is incorrect because "disruptive" means causing disturbance, which is unrelated to longevity.
                        ❌ Option B is incorrect because "restored" refers to bringing something back, not lasting over time.
                        ❌ Option C is incorrect because "identifiable" refers to recognition, not durability.

                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: 'According to paragraph 2, why was the Yukon Territory created?',
                    options: [
                        "To encourage people to settle the region",
                        "To prevent Alaska from acquiring it",
                        "To establish law and order in the area",
                        "To legalize the mining claims"
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`
                        Paragraph 2 explains that the Yukon Territory was created in 1898 to prevent its annexation by Alaska. This supports option (B).

                        ❌ Option A is incorrect because settlement was a result, not the primary reason for creating the territory.
                        ❌ Option C is incorrect because establishing law and order was a function of the administration but not the main reason for its creation.
                        ❌ Option D is incorrect because mining claims were already being staked before the territory was created.

                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 5,
                    question: 'The word "previously" in the passage is closest in meaning to',
                    options: [
                        "frequently",
                        "suddenly",
                        "routinely",
                        "formerly"
                    ],
                    correct_answer: 'D',
                    answer_explanation: dedent`
                       The word "previously" refers to something that happened before, which is closest in meaning to "formerly."

                        ❌ Option A is incorrect because "frequently" refers to repetition, not past events.
                        ❌ Option B is incorrect because "suddenly" refers to something happening quickly, not previously.
                        ❌ Option C is incorrect because "routinely" refers to regularity, not a past event.

                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 6,
                    question: "How did the poetry by Robert Service contribute to the development of Canada?",
                    options: [
                        "It made the Klondike gold rush famous.",
                        "It encouraged families to settle in the Klondike.",
                        "It captured the beauty of the western Klondike.",
                        "It prevented the Klondike's annexation to Alaska."
                    ],
                    correct_answer: 'A',
                    answer_explanation: dedent`
                       The passage states that Robert Service’s poetry immortalized the Klondike Gold Rush, making it famous. This supports option (A).

                        ❌ Option B is incorrect because his poetry focused on adventure and hardship, not settlement.
                        ❌ Option C is incorrect because his poetry described the experiences of miners rather than the landscape.
                        ❌ Option D is incorrect because there is no evidence that his poetry influenced territorial claims.

                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 7,
                    question: 'According to paragraph 3, the forest industry supported the development of Canada in all of the following ways EXCEPT',
                    options: [
                        "by supplying wood for the construction of homes and buildings",
                        "by clearing the land for expanded agricultural uses",
                        "by producing the power for the hydroelectric plants",
                        "by exporting wood and newsprint to foreign markets"
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`
                        
                    `
                },
                {
                    id: 8,
                    question: 'The word Furtnermore in the passage is closest in meaning to',
                    options: [
                        "Although",
                        "Because",
                        "Therefore",
                        "Moreover",
                    ],
                    correct_answer: 'D',
                    answer_explanation: dedent`
                        "Furthermore" is used to add additional information, which is closest in meaning to "Moreover."

                        ❌ Option A is incorrect because "Although" introduces contrast, not additional information.
                        ❌ Option B is incorrect because "Because" introduces a reason, not an additional point.
                        ❌ Option C is incorrect because "Therefore" indicates a conclusion, not further information.

                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] While the much-anticipated expansion of the western frontier was unfolding in accordance with the design of the National Policy, a new northern frontier was opening up to enhance the prospects of Canadian industrial development. ⬛ [A] Long the· preserve of the fur trade, the Canadian Shield and the western Cordilleras became a treasury of minerals, timber and hydroelectric power in the late 19th and early 20th centuries. As early as 1883, CPR [Canadian Pacific Railway) construction crews blasting through the rugged terrain of northern Ontario discovered copper and nickel deposits in the vicinity of Sudbury. ⬛ [B] As refining processes, uses, and markets for the metal developed, Sudbury became the world's largest nickel producer. The building of the Temiskaming and Northern Ontario Railway led to the discovery of rich silver deposits around Cobalt north of Lake Nipissing in 1903 and touched off a mining boom that spread northward to Kirkland Lake and the Porcupine district. ⬛ [C] Although the economic importance of these mining operations was enduring, they did not capture the public imagination to the same extent as the Klondike gold rush of the late 1890s. [D] ⬛
                        [2] Fortune-seekers from all parts of the world flocked to the Klondike and Yukon River valleys to pan for gold starting in 1896. At the height of the gold rush in 1898, the previously unsettled subarctic frontier had a population of about 30,000, more than half of which was concentrated in the newly established town of Dawson. In the same year, the federal government created the Yukon Territory, administered by an appointed commissioner, in an effort to ward off the prospect of annexation to Alaska. Even if the economic significance of the Klondike strike was somewhat exaggerated and short-lived, the tales of sudden riches, heroic and tragic exploits, and the rowdiness and lawlessness of the mining frontier were immortalized through popular fiction and folklore, notably the poetic verses of Robert W. Service.
                        [3] Perhaps less romantic than the mining booms, the exploitation of forest and water resources was just as vital to national development. The Douglas fir, spruce, and cedar stands of British Columbia along with the white pine forests of Ontario satisfied construction demands on the treeless prair:ies as well as in the growing cities and towns of central Canada and the United States. British Columbia's forests also supplied lumber to Asia. In addition, the softwood forest wealth of the Cordilleras and the Shield was a valuable source of pulpwood for the development of the pulp and paper industry, which made Canada one of the world's leading exporters of newsprint. Furthermore, the fast flowing rivers of the Shield and Cordilleras could readily be harnessed as sources of hydroelectric power, replacing coal in the booming factories of central Canada as well as in the evolving mining and pulp and paper industries. The age of electricity under public ownership and control was ushered in by the creation of the Ontario Hydro-Electric Power Commission (now Ontario Hydro) in 1906 to distribute and eventually to produce this vital source of energy.
                        [4] Western settlement and the opening of the northern resource frontier stimulated industrial expansion, particularly in central Canada. As the National Policy had intended, a growing agricultural population in the West increased the demand for eastern manufactured goods, thereby giving rise to agricultural implements works, iron and steel foundries, machine shops, railway yards, textile mills, boot and shoe factories, and numerous smaller manufacturing enterprises that supplied consumer goods. By keeping out lower-priced foreign manufactured goods, the high tariff policies of the federal government received much credit for protecting existing industries and encouraging  the creation of new enterprises. To climb the tariff wall, large American industrial firms opened branches in Canada, and the governments of Ontario and Quebec aggressively urged them on by offering bonuses, subsidies, and guarantees to locate new plants within their borders. Canadian industrial enterprises became increasingly attractive to foreign investors, especially from the United States and Great Britain. Much of the over $600 million of American capital that flowed into Canada from 1900 to 1913 was earmarked for mining and the pulp and paper industry, while British investors contributed near $1.8 billion, mostly in railway building, business development, and the construction of urban infrastructure. As a result, the gross value of Canadian manufactured products quadrupled from 1891 to 1916.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "Railway construction through the Kootenay region of southeastern British Columbia also led to significant discoveries of gold, silver, copper, lead, and zinc.",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'C',
                    answer_explanation: dedent`
                       The sentence discusses railway-related mineral discoveries, making Blank C the best location since it follows a discussion about mining.

                        ❌ Option A is incorrect because it appears before mining is introduced.
                        ❌ Option B is incorrect because it interrupts a specific mention of Sudbury.
                        ❌ Option D is incorrect because it comes after the main discussion of mining.

                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "The northern frontier provided many natural resources that contributed to the industrial expansion of Canada.",
                    options: [
                        "The Yukon Territory was created in 1898 during the gold rush in the Klondike and Yukon River valleys.",
                        "The frontier was documented in the popular press, which published tales of heroes and gold strikes.",
                        "Significant discoveries of mineral deposits encouraged prospectors and settlers to move into the territories.",
                        "Wheat and other agricultural crops were planted after the forests were cleared, creating the central plains.",
                        "Powered by hydroelectricity, lumber and paper mills exploited the forests for both domestic and foreign markets.",
                        "Incentives encouraged American and British investors to help expand manufacturing plants in Canada."
                    ],

                    correct_answer: "CEF",
                    answer_explanation: dedent`
                        The summarization statement highlights the northern frontier's role in providing natural resources that fueled industrial expansion in Canada. The correct options should focus on key aspects of resource extraction and economic growth.
                    
                        ✅ Option C ("Significant discoveries of mineral deposits encouraged prospectors and settlers to move into the territories.") is correct because mineral resources played a crucial role in industrial expansion.
                        ✅ Option E ("Powered by hydroelectricity, lumber and paper mills exploited the forests for both domestic and foreign markets.") is correct because hydroelectric power and forestry were essential for industrialization.
                        ✅ Option F ("Incentives encouraged American and British investors to help expand manufacturing plants in Canada.") is correct because foreign investment supported industrial growth.
                    
                        ❌ Option A is incorrect because the creation of the Yukon Territory was a political move rather than a direct contributor to industrial expansion.
                        ❌ Option B is incorrect because the documentation of the frontier in the press does not directly relate to resource-based industrial expansion.
                        ❌ Option D is incorrect because agricultural development, while important, is not directly tied to the northern frontier's industrial resource contributions.
                    
                        Thus, options (C), (E), and (F) are the best answers.
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            id: 5,
            passage: dedent`
                [1] One of the primary ways of approaching the Greek theatre is through archeofogy, the systematic study of material remains such as arch,tecture, inscriptions, sculpture, vase painting, and other forms of decorative art. Serious on-site excavations began in Greece around 1870, but W. Dorpfeld did not begin the first extensive study of the Theatre of Dionysus until 1886. Since that time, more than 167 other Greek theatres have been identified and many of them have been excavated. Nevertheless, they still do not permit us to describe the precise appearance of the skene (illustrations printed in books are conjectural reconstructions), since many pieces are irrevocably lost because the buildings in later periods became sources of stone for other projects and what remains is usually broken and scattered. That most of the buildings were remodeled many times has created great problems for those seeking to date the successive versions. Despite these drawbacks, archeology provides the most concrete evidence we have about the theatre structures of ancient Greece. But, if they have told us much, archeologists have not completed their work, and many sites have scarcely been touched.
                [2] Perhaps the most controversial use of archeological evidence in theatre history is vase paintings, thousands of which have survived from ancient Greece. (Most of those used by theatre scholars are reproduced in Margarete Bieber's The History of the Greek and Roman Theatre.) Depicting scenes from mythology and daily life, the vases are the most graphic pictorial evidence we have. But they are also easy to misinterpret. Some scholars have considered any vase that depicts a subject treated in a surviving drama or any scene showing masks, flute players, or ceremonials to be valid evidence of theatrical practice. This is a highly questionable assumption, since the Greeks made widespread use of masks, dances, and music outside the theatre and since the myths on which dramatists drew were known to everyone, including vase painters, who might well depict the same subjects as dramatists without being indebted to them. Those vases showing scenes unquestionably theatrical are few in number.
                [3] The texts to classical Greek plays were written down soon after the performance and possibly even before, though it is not always clear when or by whom. By 400 s.c.E., there was a flourishing book trade in Greece, but the texts for plays were a challenge. Hellenistic scholars dedicated years to sorting out .the text and removing what they believed to be corruptions generally added by actors, but each time a text was copied there were new possibilities for errors.
                [4] The oldest surviving manuscripts of Greek plays date from around the tenth century c.E., some 1,500 years after they were first performed. Nevertheless, the scripts offer us our readiest access to the cultural and theatrical conditions out of which they came. But these scripts, like other kinds of evidence, are subject to varying interpretations. Certainly performances embodied a male perspective, for example, since the plays were written, selected, staged, and acted by men. Yet the existing plays feature numerous choruses of women and many feature strong female characters. Because these characters often seem victims of their own powerlessness and appear to be governed, especially in the comedies, by sexual desire, some critics have seen these plays as rationalizations by the male-dominated culture for keeping women segregated and cloistered. Other critics, however, have seen in these same plays an attempt by male authors to force their male audiences to examine and call into question this segregation and cloistering of Athenian women.
                [5] By far the majority of written references to Greek theatre date from several hundred years after the events they report. The writers seldom mention their sources of evidence, and thus we do not know what credence to give them. In the absence of material nearer in time to the events, however, historians have used the accounts and have been grateful to have them. Overall, historical treatment of the Greek theatre is something like assembling a jigsaw puzzle from which many pieces are missing: historians arrange what they have and imagine (with the aid of the remaining evidence and logic) what has been lost. As a result, though the , broad outlines of Greek theatre history are reasonably clear, many of the details remain open to doubt.
            `,
            questions: [
                {
                    id: 1,
                    question: "According to paragraph 1, why is it impossible to identify the time period for theatres in Greece?",
                    options: [
                        "There are too few sites that have been excavated and very little data collected about them.",
                        "The archeologists from earlier periods were not careful, and many artifacts were broken.",
                        "It is confusing because stones from early sites were used to build later structures.",
                        "Because it is very difficult to date the concrete that was used in construction during early periods."
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        Paragraph 1 states that stones from early sites were often repurposed for later constructions, making it difficult to determine the original time period of theatres. This supports option (C).

                        ❌ Option A is incorrect because excavation has been done, but dating is difficult due to reconstruction.
                        ❌ Option B is incorrect because the issue is with reused materials, not careless archaeologists.
                        ❌ Option D is incorrect because concrete dating is not mentioned as the primary issue.

                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: "What can be inferred from paragraph 1 about the skene in theatre history?",
                    options: [
                        "Drawings in books are the only accurate visual records.",
                        "Not enough evidence is available to make a precise model.",
                        "Archeologists have excavated a large number of them.",
                        "It was not identified or studied until the early 1800s."
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage implies that there is insufficient evidence to create an exact reconstruction of the skene. This supports option (B).

                        ❌ Option A is incorrect because the passage does not state that books are the only accurate records.
                        ❌ Option C is incorrect because there is no mention of a large number of excavations.
                        ❌ Option D is incorrect because the passage does not suggest that the skene was unidentified until the 1800s.

                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 3,
                    question: "The word 'primary' in the passage is closest in meaning to",
                    options: [
                        "reliable",
                        "important",
                        "unusual",
                        "accepted"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The word "primary" refers to something that is of chief importance or fundamental, which aligns best with "important."

                        ❌ Option A is incorrect because "reliable" refers to dependability, not significance.
                        ❌ Option C is incorrect because "unusual" means uncommon, which does not match "primary."
                        ❌ Option D is incorrect because "accepted" means widely agreed upon, not most significant.

                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: "The word 'precise' in the passage is closest in meaning to",
                    options: [
                        "attractive",
                        "simple",
                        "difficult",
                        "exact"
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        The word "precise" means highly accurate or exact, making option (D) the best choice.

                        ❌ Option A is incorrect because "attractive" refers to beauty, not accuracy.
                        ❌ Option B is incorrect because "simple" suggests ease, not precision.
                        ❌ Option C is incorrect because "difficult" refers to complexity, not accuracy.

                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 5,
                    question: "In paragraph 2, how does the author explain that all vases with paintings of masks or musicians may not be evidence of theatrical subjects?",
                    options: [
                        "By arguing that the subjects could have been used by artists without reference to a drama",
                        "By identifying some of the vases as reproductions that were painted years after the originals",
                        "By casting doubt on the qualifications of the scholars who produced the vases as evidence",
                        "By pointing out that there are very few vases that have survived from the time of early dramas"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        The passage suggests that paintings on vases may not necessarily be linked to theatre but could be artistic representations, supporting option (A).
                            
                        ❌ Option B is incorrect because there is no mention of reproductions being painted later.
                        ❌ Option C is incorrect because scholars’ qualifications are not questioned.
                        ❌ Option D is incorrect because the focus is on misinterpretation, not rarity.
                            
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 6,
                    question: "The word 'controversial' in the passage is closest in meaning to",
                    options: [
                        "accepted",
                        "debated",
                        "limited",
                        "complicated"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        "Controversial" means something that is subject to debate, making option (B) the best choice.

                        ❌ Option A is incorrect because "accepted" means widely agreed upon, which is the opposite of controversial.
                        ❌ Option C is incorrect because "limited" refers to restriction, not debate.
                        ❌ Option D is incorrect because "complicated" refers to complexity, not disagreement.

                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 7,
                    question: "Which of the following statements most accurately reflects the author's opinion about vase paintings?",
                    options: [
                        "Evidence from written documents is older than evidence from vase paintings.",
                        "The sources for vase paintings are clear because of the images on them.",
                        "The details in vase paintings are not obvious because of their age.",
                        "There is disagreement among scholars regarding vase paintings."
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        The passage discusses differing scholarly opinions on the interpretation of vase paintings, making option (D) the best choice.

                        ❌ Option A is incorrect because the passage does not compare the age of written documents and vases.
                        ❌ Option B is incorrect because the passage suggests that interpretation is not clear.
                        ❌ Option C is incorrect because the argument is about interpretation, not the legibility of details.

                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 8,
                    question: "According to paragraph 3, scripts of plays may not be accurate for which reason?",
                    options: [
                        "The sources cited are not well known.",
                        "Copies by hand may contain many errors.",
                        "They are written in very old language.",
                        "The printing is difficult to read."
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage explains that handwritten copies of plays may contain numerous errors due to manual transcription, making option (B) the best choice.

                        ❌ Option A is incorrect because the reliability of sources is not questioned.
                        ❌ Option C is incorrect because the language is not cited as a primary issue.
                        ❌ Option D is incorrect because printing difficulties are not mentioned.

                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] One of the primary ways of approaching the Greek theatre is through archeofogy, the systematic study of material remains such as arch,tecture, inscriptions, sculpture, vase painting, and other forms of decorative art. ⬛ [A] Serious on-site excavations began in Greece around 1870, but W. Dorpfeld did not begin the first extensive study of the Theatre of Dionysus until 1886. ⬛ [B] Since that time, more than 167 other Greek theatres have been identified and many of them have been excavated. ⬛ [C] Nevertheless, they still do not permit us to describe the precise appearance of the skene (illustrations printed in books are conjectural reconstructions), since many pieces are irrevocably lost because the buildings in later periods became sources of stone for other projects and what remains is usually broken and scattered. ⬛ [D] That most of the buildings were remodeled many times has created great problems for those seeking to date the successive versions. Despite these drawbacks, archeology provides the most concrete evidence we have about the theatre structures of ancient Greece. But, if they have told us much, archeologists have not completed their work, and many sites have scarcely been touched.
                        [2] Perhaps the most controversial use of archeological evidence in theatre history is vase paintings, thousands of which have survived from ancient Greece. (Most of those used by theatre scholars are reproduced in Margarete Bieber's The History of the Greek and Roman Theatre.) Depicting scenes from mythology and daily life, the vases are the most graphic pictorial evidence we have. But they are also easy to misinterpret. Some scholars have considered any vase that depicts a subject treated in a surviving drama or any scene showing masks, flute players, or ceremonials to be valid evidence of theatrical practice. This is a highly questionable assumption, since the Greeks made widespread use of masks, dances, and music outside the theatre and since the myths on which dramatists drew were known to everyone, including vase painters, who might well depict the same subjects as dramatists without being indebted to them. Those vases showing scenes unquestionably theatrical are few in number.
                        [3] The texts to classical Greek plays were written down soon after the performance and possibly even before, though it is not always clear when or by whom. By 400 s.c.E., there was a flourishing book trade in Greece, but the texts for plays were a challenge. Hellenistic scholars dedicated years to sorting out .the text and removing what they believed to be corruptions generally added by actors, but each time a text was copied there were new possibilities for errors.
                        [4] The oldest surviving manuscripts of Greek plays date from around the tenth century c.E., some 1,500 years after they were first performed. Nevertheless, the scripts offer us our readiest access to the cultural and theatrical conditions out of which they came. But these scripts, like other kinds of evidence, are subject to varying interpretations. Certainly performances embodied a male perspective, for example, since the plays were written, selected, staged, and acted by men. Yet the existing plays feature numerous choruses of women and many feature strong female characters. Because these characters often seem victims of their own powerlessness and appear to be governed, especially in the comedies, by sexual desire, some critics have seen these plays as rationalizations by the male-dominated culture for keeping women segregated and cloistered. Other critics, however, have seen in these same plays an attempt by male authors to force their male audiences to examine and call into question this segregation and cloistering of Athenian women.
                        [5] By far the majority of written references to Greek theatre date from several hundred years after the events they report. The writers seldom mention their sources of evidence, and thus we do not know what credence to give them. In the absence of material nearer in time to the events, however, historians have used the accounts and have been grateful to have them. Overall, historical treatment of the Greek theatre is something like assembling a jigsaw puzzle from which many pieces are missing: historians arrange what they have and imagine (with the aid of the remaining evidence and logic) what has been lost. As a result, though the , broad outlines of Greek theatre history are reasonably clear, many of the details remain open to doubt.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "These excavations have revealed much that was previously unknown, especially about the dimensions and layout of theatres.",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'C',
                    answer_explanation: dedent`
                        The best placement for the sentence is Blank C, as it logically follows the discussion of excavation work and how much information has been gained from it.

                        ❌ Option A is incorrect because the sentence would disrupt the introduction of excavation studies.
                        ❌ Option B is incorrect because it appears before stating that many theatres have been excavated.
                        ❌ Option D is incorrect because it follows the discussion of lost and broken pieces, which would make the insertion awkward.

                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "Greek theatre has been studied by a variety of methods .",
                    options: [
                        "Because the Greeks enjoyed dancing and music for entertainment outside of the theatre, many scenes on vases are ambiguous.",
                        "Historical accounts as sembled many years after the actual theatrical works were presented give us a broad perspective of the earlier theatre.",
                        "Although considered less reliable, written records, including scripts, provide insights into the cultural aspects of theatre.",
                        "Archeological excavations have uncovered buildings and artifacts, many of which were vases with theatrical scenes painted on them.",
                        "For the most part, men wrote the plays for Greek theatre, but choruses and even strong roles were played by women.",
                        "Computer simulations can recreate the image of a building that is crumbling as long as the dimensions and layout are known.",
                    ],

                    correct_answer: "BDC",
                    answer_explanation: dedent`
                        The correct answer choices highlight the primary methods of studying Greek theatre.
                    
                        ✅ Option B is correct because historical accounts provide a broad perspective, even if written long after the events.
                        ✅ Option D is correct because archaeological excavations contribute significantly by uncovering buildings and artifacts.
                        ✅ Option C is correct because written records, including scripts, offer cultural insights, even if they are considered less reliable.
                    
                        ❌ Option A is incorrect because it focuses on ambiguity in vase paintings rather than methods of studying Greek theatre.
                        ❌ Option E is incorrect because while men wrote the plays, this fact is not a method of study.
                        ❌ Option F is incorrect because computer simulations are not mentioned as a primary study method.
                    
                        Thus, the best answer is "BDC."
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            id: 6,
            passage: dedent`
                [1] Geothermal energy is natural heat from the interior of the Earth that is converted to heat buildings and generate electricity. The idea of harnessing Earth's internal heat is not new. As early as 1904, geothermal power was used in Italy. Today, Earth's natural internal heat is being used to generate electricity in 21 countries, including Russia, Japan, New Zealand, Iceland, Mexico, Ethiopia, Guatemala, El Salvador, the Philippines, and the United States. Total worldwide production is approaching 9,000 MW (equivalent to nine large modern coal-burning or nuclear power plants)-double the amount in 1980. Some 40 million people today receive their electricity from geothermal energy at a cost competitive with that of alternative energy sources. In El Salvador, geothermal energy is supplying 30% of the total electric energy used. However, at the global level, geothermal energy supplies less than 0.15% of the total energy supply
                [2] Geothermal energy may be considered a nonrenewable energy source when rates of extraction are greater than rates of natural replenishment. However, geothermal energy has its origin in the natural heat production within Earth, and only a small fraction of the vast total resource base is being utilized today. Although most geothermal enery production involves the tapping of high heat sources, people are also using the low-temprature geothermal energy of groundwater in some applications.
                [3] The average heat flow from the interior of the Earth is very low, about 0.06 W/m2. This amount is trivial compared with the 177 W/m2 from solar heat at the surface in the United States. However, in some areas, heat flow is sufficiently high to be useful for producing energy. For the most part, areas of high heat flow are associated with plate tectonic boundaries. Oceanic ridge systems (divergent plate boundaries) and areas where mountains are being uplifted and volcanic island arcs are forming (convergent plate boundaries) are areas where this natural heat flow is anomalously high.
                [4] On the basis of geological criteria, several types of hot geothermal systems (with temperatures greater than about 80°C, or 176° F) have been defined, and the resource base is larger than that of fossil fuels and nuclear energy combined. A common system for energy development is hydrothermal convection, characterized by the circulation of steam and/or hot water that transfers heat from depths to the surface.
                [5] The environmental impact of geothermal energy may not be as extensive as that of other sources of energy. When geothermal energy is developed at a particular site, environmental problems include on-site noise, emissions of gas, and disturbance of the land at drilling sites, disposal sites, roads and pipelines, and power plants. Development of geothermal energy does not require large-scale transportation of raw materials or refining of chemicals, as development of fossil fuels does. Furthermore, geothermal energy does not produce the atmospheric pollutants associated with burning fossil fuels or the radioactive waste associated with nuclear energy. However, geothermal development often does produce considerable thermal pollution from hot waste-waters, which may be saline or highly corrosive.
                [6] Geothermal power is not always popular. For instance, geothermal energy has been produced for years on the island of Hawaii, where active volcanic processes provide abundant near-surface heat. There is controversy, however, over further exploration and development. Native Hawaiians and others have argued that the exploration and development of geothermal energy degrade the tropical forest as developers construct roads, build facilities, and drill wells. In addition, religious and cultural issues in Hawaii relate to the use of geothermal energy. For example, some people are offended by using the "breath and water of Pele" (the volcano goddess) to make electricity. This issue points out the importance of being sensitive to the values and cultures of people where development is planned.
                [7] At present, the United States produces only 2800 MN of geothermal energy. However, if developed, known geothermal resources in the United States could produce about 20,000 MW which is about 10% of the electricity needed for the western states. Geohydrothermal resources not yet discovered could conservatively provide four times that amount (approximately 10% of total U.S. electric capacity), about equivalent to the electricity produced from water power today.
            `,
            questions: [
                {
                    id: 1,
                    question: "In paragraph 1, how does the author introduce the concept of geothermal energy?",
                    options: [
                        "By explaining the history of this energy source worldwide",
                        "By arguing that this energy source has been tried unsuccessfully",
                        "By comparing the production with that of other energy sources",
                        "By describing the alternatives for generating electric power"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        Paragraph 1 introduces geothermal energy by explaining its historical use worldwide, mentioning its early adoption in Italy and its current presence in multiple countries. This supports option (A).
                
                        ❌ Option B is incorrect because the passage does not discuss unsuccessful attempts.
                        ❌ Option C is incorrect because the passage provides production numbers but does not compare them extensively.
                        ❌ Option D is incorrect because alternative energy sources are not a primary focus.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: "What is true about geothermal energy production worldwide?",
                    options: [
                        "Because it is a new idea, very few countries are developing geothermal energy sources.",
                        "Only countries in the Southern Hemisphere are using geothermal energy on a large scale.",
                        "Until the cost of geothermal energy becomes competitive, it will not be used globally.",
                        "Geothermal energy is already being used in a number of nations, but it is not yet a major source of power."
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        The passage states that geothermal energy is used in multiple countries but provides less than 0.15% of the total energy supply, making it a minor source. This supports option (D).
                
                        ❌ Option A is incorrect because geothermal energy has been used since 1904.
                        ❌ Option B is incorrect because countries mentioned are in both hemispheres.
                        ❌ Option C is incorrect because the passage states that geothermal energy is already competitive in some areas.
                
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 3,
                    question: "The word 'approaching' in the passage is closest in meaning to",
                    options: [
                        "hardly",
                        "mostly",
                        "nearly",
                        "briefly"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The word "approaching" means getting close to something, which is closest in meaning to "nearly."
                
                        ❌ Option A is incorrect because "hardly" means barely, which is the opposite.
                        ❌ Option B is incorrect because "mostly" means a majority, not close to a target.
                        ❌ Option D is incorrect because "briefly" refers to time, not proximity.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: "The word 'alternative' in the passage is closest in meaning to",
                    options: [
                        "numerous",
                        "optional",
                        "nearby",
                        "equivalent"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        "Alternative" refers to something that can be used instead, making "optional" the closest meaning.
                
                        ❌ Option A is incorrect because "numerous" means many, not something that can be chosen instead.
                        ❌ Option C is incorrect because "nearby" refers to location, not choice.
                        ❌ Option D is incorrect because "equivalent" means equal in value, not another option.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 5,
                    question: "In paragraph 2, why does the author state that geothermal energy is considered a nonrenewable resource?",
                    options: [
                        "The production of geothermal energy is a natural process.",
                        "Geothermal energy comes from the Earth.",
                        "We are not using very much geothermal energy now.",
                        "We could use more geothermal energy than is naturally replaced."
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        Paragraph 2 states that geothermal energy is considered nonrenewable when extraction rates exceed replenishment rates, supporting option (D).
                
                        ❌ Option A is incorrect because natural production does not determine renewability.
                        ❌ Option B is incorrect because coming from the Earth does not make it renewable.
                        ❌ Option C is incorrect because current usage levels do not define nonrenewability.
                
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 6,
                    question: "Which of the sentences below best expresses the information in the highlighted statement in the passage?",
                    highlighted_sentence: "Although most geothermal enery production involves the tapping of high heat sources, people are also using the low-temprature geothermal energy of groundwater in some applications.",
                    options: [
                        "High heat is the source of most of the geothermal energy but low heat groundwater is also used sometimes.",
                        "Even though low temperatures are possible, high heat is the best resource for energy production for groundwater.",
                        "Both high heat and low heat sources are used for the production of geothermal energy from groundwater.",
                        "Most high heat sources for geothermal energy are tapped from applications that involve low heat in groundwater."
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`

                    `
                },
                {
                    id: 7,
                    question: "According to paragraph 3, which statement is true about the heat flow necessary for the production of geothermal energy?",
                    options: [
                        "It is like solar heat on the Earth's surface.",
                        "It happens near tectonic plate boundaries.",
                        "It must always be artificially increased.",
                        "It may be impractical because of its location."
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        Paragraph 3 states that high heat flow occurs mostly at tectonic plate boundaries, supporting option (B).
                
                        ❌ Option A is incorrect because geothermal heat flow is much lower than solar heat.
                        ❌ Option C is incorrect because the passage does not say heat flow must always be increased.
                        ❌ Option D is incorrect because location challenges are not the main focus.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 8,
                    question: "The word 'considerable' in the passage is closest in meaning to",
                    options: [
                        "large",
                        "dangerous",
                        "steady",
                        "unexpected"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] Geothermal energy is natural heat from the interior of the Earth that is converted to heat buildings and generate electricity. The idea of harnessing Earth's internal heat is not new. As early as 1904, geothermal power was used in Italy. Today, Earth's natural internal heat is being used to generate electricity in 21 countries, including Russia, Japan, New Zealand, Iceland, Mexico, Ethiopia, Guatemala, El Salvador, the Philippines, and the United States. Total worldwide production is approaching 9,000 MW (equivalent to nine large modern coal-burning or nuclear power plants)-double the amount in 1980. Some 40 million people today receive their electricity from geothermal energy at a cost competitive with that of alternative energy sources. In El Salvador, geothermal energy is supplying 30% of the total electric energy used. However, at the global level, geothermal energy supplies less than 0.15% of the total energy supply
                        [2] Geothermal energy may be considered a nonrenewable energy source when rates of extraction are greater than rates of natural replenishment. However, geothermal energy has its origin in the natural heat production within Earth, and only a small fraction of the vast total resource base is being utilized today. Although most geothermal enery production involves the tapping of high heat sources, people are also using the low-temprature geothermal energy of groundwater in some applications.
                        [3] The average heat flow from the interior of the Earth is very low, about 0.06 W/m2. This amount is trivial compared with the 177 W/m2 from solar heat at the surface in the United States. However, in some areas, heat flow is sufficiently high to be useful for producing energy. For the most part, areas of high heat flow are associated with plate tectonic boundaries. Oceanic ridge systems (divergent plate boundaries) and areas where mountains are being uplifted and volcanic island arcs are forming (convergent plate boundaries) are areas where this natural heat flow is anomalously high.
                        [4] On the basis of geological criteria, several types of hot geothermal systems (with temperatures greater than about 80°C, or 176° F) have been defined, and the resource base is larger than that of fossil fuels and nuclear energy combined. A common system for energy development is hydrothermal convection, characterized by the circulation of steam and/or hot water that transfers heat from depths to the surface.
                        [5] The environmental impact of geothermal energy may not be as extensive as that of other sources of energy. When geothermal energy is developed at a particular site, environmental problems include on-site noise, emissions of gas, and disturbance of the land at drilling sites, disposal sites, roads and pipelines, and power plants. Development of geothermal energy does not require large-scale transportation of raw materials or refining of chemicals, as development of fossil fuels does. Furthermore, geothermal energy does not produce the atmospheric pollutants associated with burning fossil fuels or the radioactive waste associated with nuclear energy. However, geothermal development often does produce considerable thermal pollution from hot waste-waters, which may be saline or highly corrosive.
                        [6] Geothermal power is not always popular. For instance, geothermal energy has been produced for years on the island of Hawaii, where active volcanic processes provide abundant near-surface heat. There is controversy, however, over further exploration and development. Native Hawaiians and others have argued that the exploration and development of geothermal energy degrade the tropical forest as developers construct roads, build facilities, and drill wells. In addition, religious and cultural issues in Hawaii relate to the use of geothermal energy. For example, some people are offended by using the "breath and water of Pele" (the volcano goddess) to make electricity. This issue points out the importance of being sensitive to the values and cultures of people where development is planned.
                        [7] At present, the United States produces only 2800 MN of geothermal energy. However, if developed, known geothermal resources in the United States could produce about 20,000 MW which is about 10% of the electricity needed for the western states. Geohydrothermal resources not yet discovered could conservatively provide four times that amount (approximately 10% of total U.S. electric capacity), about equivalent to the electricity produced from water power today.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "One such region is located in the western United States, where recent tectonic and volcanic activity has occurred.",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'C',
                    answer_explanation: dedent`

                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "Geothermal energy is natural heat from the interior of the Earth that is converted to electricity.",
                    options: [
                        "Geothermal energy sources that convert natural heat to electricity account for 30% of the total energy supply in El Salvador at relatively competitive cost to the consumers.",
                        "Although geothermal energy is non-renewable when more is used than can be replaced naturally, only a small amount of the potential energy is being exploited worldwide.",
                        "The heat from geothermal sites is thought to be the breath and water of the volcanic goddess Pele, worshiped by some native groups on the Hawaiian Islands.",
                        "Hot geothermal systems at both divergent plate boundaries and convergent plate boundaries could provide more energy than fossil fuels and nuclear power.",
                        "Some groups oppose the exploitation of geothermal sources because of pollution and other environmental problems or because of their cultural values.",
                        "Thermal waste water can be very corrosive or can contain high levels of saline which causes problems in disposal and water treatment at development sites.",
                    ],
                    correct_answer: "BDE",
                    answer_explanation: dedent`
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            id: 7,
            passage: dedent`
                [1] The Asian migration hypothesis is today supported by most of the scientific evidence. The first "hard" data linking American Indians with Asians appeared in the 1980s with the finding that Indians and northeast Asians share a common and distinctive pattern in the arrangement of the teeth. But perhaps the most compelling support for the hypothesis comes from genetic research. Studies comparing the DNA variation of populations around the world consistently demonstrate the close genetic relationship of the two populations, and recently geneticists studying a virus sequestered in the kidneys of all humans found that the strain of virus carried by Navajos and Japanese is nearly identical, while that carried by Europeans and Africans is quite different.
                [2] The migration could have begun over a land bridge connecting the continents. During the last Ice Age 70,000 to 10,000 years ago, huge glaciers locked up massive volumes of water and sea levels were as much as 300 feet lower than today. Asia and North America were joined by a huge subcontinent of ice-free, treeless grassland, 750 miles wide. Geologists have named this area Beringia, from the Bering Straits. Summers there were warm, winters were cold, dry and almost snow-free: This was a perfect environment for large mammals-mammoth and mastodon, bison, horse, reindeer, camel, and saiga (a goatlike antelope). Small bands of Stone Age hunter-gatherers were attracted by these animal populations, which provided them not only with food but with hides for clothing and shelter, dung for fuel, and bones for tools and weapons. Accompanied py a husky-like species of dog, hunting bands gradually moved as far east as the Yukon River basin of northern Canada, where field excavations have uncovered the fossilized jawbones of several dogs and bone tools estimated to be about 27,000 years old.
                [3] Other evidence suggests that the migration from Asia began about 30,000 years ago-around the same time that Japan and Scandinavia were being settled. This evidence is based on blood type. The vast majority of modern Native Americans have type O blood and a few have type A, but almost none have type B. Because modern Asian populations include all three blood types, however, the migrations must have begun before the evolution of type B, which geneticists believe occurred about 30,000 years ago.
                [4] By 25,000 years ago human communities were established in western Beringia, which is present-day Alaska. But access to the south was blocked by a huge glacial sheet covering much of what is today Canada. How did the hunters get over those 2,000 miles of deep ice? The argument is that the climate began to warm with the passing of the Ice Age, and about 13,000 s.c.E. glacial melting created an ice-free corridor along the eastern front range of the Rocky Mountains. Soon hunters of big game had reached the Great Plains. 
                [5] In the past several years, however, new archaeological finds along the Pacific coast of North and South America have thrown this theory into question. The most spectacular find, at Monte Verde in southern Chile, produced striking evidence of tool making, house building, rock painting, and human footprints conservatively dated long before the highway had been cleared of ice. Many archaeologists now believe that migrants moved south in boats along a coastal route rather than overland. These people were probably gatherers and fishers rather than hunters of big game.
                [6] There were two later migrations into North America. About 5000 s.c.E. the Athapascan or Na-Dene people began to settle the forests in the northwestern area of the continent. Eventually Athapascan speakers, the ancestors of the Navajos and Apaches, migrated across the Great Plains to the Southwest. The final migration began about 3000 B.C.E after beringia had been submerged, when a maritime hunting people crossed the Bering Straits in small boats. The Inuits (also known as the Eskimos) colonized the polar coasts of the Arctic, the Yupiks the coast of southwestern Alaska, and the Aleuts the Aleutian Islands.
                [7] While scientists debate the timing and mapping of these migrations, many Indian people hold to oral traditions that include a long journey from a distant place of origin to a new homeland.
            `,
            questions: [
                {
                    id: 1,
                    question: "The word 'distinctive' in the passage is closest in meaning to",
                    options: [
                        "new",
                        "simple",
                        "different",
                        "particular"
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                    `
                },
                {
                    id: 2,
                    question: "According to paragraph 2, why did Stone Age tribes begin to migrate into Beringia?",
                    options: [
                        "To intermarry with tribes living there",
                        "To trade with tribes that made tools",
                        "To hunt for animals in the area",
                        "To capture domesticated dogs"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        Paragraph 2 states that Stone Age hunter-gatherers moved into Beringia because of the abundance of large mammals, supporting option (C).

                        ❌ Option A is incorrect because intermarriage is not mentioned.
                        ❌ Option B is incorrect because there is no reference to trading.
                        ❌ Option D is incorrect because the passage mentions dogs accompanying them, not being captured.

                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 3,
                    question: "The phrase 'Accompanied' in the passage is closest in meaning to",
                    options: [
                        "Found with",
                        "Joined by",
                        "Threatened by",
                        "Detoured with"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        "Accompanied" means to be together with something or someone, which is closest in meaning to "Joined by."

                        ❌ Option A is incorrect because "Found with" implies being discovered, not moving together.
                        ❌ Option C is incorrect because "Threatened by" implies danger, which is not the case here.
                        ❌ Option D is incorrect because "Detoured with" suggests taking a different path, which is unrelated.

                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: "The word 'estimate' in the passage is closest in meaning to",
                    options: [
                        "clarified",
                        "judged",
                        "changed",
                        "noticed"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        "Estimate" means to make an approximate calculation or judgment, making option (B) the best choice.
                
                        ❌ Option A is incorrect because "clarified" means to make clear, not to approximate.
                        ❌ Option C is incorrect because "changed" refers to modification, not calculation.
                        ❌ Option D is incorrect because "noticed" refers to observation, not judgment.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 5,
                    question: "Why does the author mention 'blood types' in paragraph 3?",
                    options: [
                        "Blood types offered proof that the migration had come from Scandinavia.",
                        "The presence of type B in Native Americans was evidence of the migration.",
                        "The blood typing was similar to data from both Japan and Scandinavia.",
                        "Comparisons of blood types in Asia and North America established the date of migration."
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        The passage states that blood type evidence was used to establish when migration from Asia occurred, supporting option (D).
                    
                        ❌ Option A is incorrect because migration from Scandinavia is not mentioned.
                        ❌ Option B is incorrect because type B was largely absent in Native Americans.
                        ❌ Option C is incorrect because the passage does not directly compare Japan and Scandinavia.
                    
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 6,
                    question: "How did groups migrate into the Great Plains?",
                    options: [
                        "By walking on a corridor covered with ice",
                        "By using the path that big game had made",
                        "By detouring around a huge ice sheet",
                        "By following a mountain trail"
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                    `
                },
                {
                    id: 7,
                    question: "According to paragraph 6, all of the following are true about the later migrations EXCEPT",
                    options: [
                        "The Athapascans traveled into the Southwest United States.",
                        "The Eskimos established homes in the Arctic polar region.",
                        "The Aleuts migrated in small boats to settle coastal islands.",
                        "The Yupiks established settlements on the Great Plains."
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        The passage states that the Yupiks settled in southwestern Alaska, not the Great Plains, making option (D) the correct answer.
                    
                        ❌ Option A is incorrect because the Athapascans did migrate to the Southwest.
                        ❌ Option B is incorrect because the Eskimos did settle in the Arctic.
                        ❌ Option C is incorrect because the Aleuts migrated in small boats.
                    
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 8,
                    question: "Which of the following statements most accurately reflects the author's opinion about the settlement of the North American continent?",
                    options: [
                        "The oral traditions do not support the migration theory.",
                        "The anthropological evidence for migration should be reexamined.",
                        "Migration theories are probably not valid explanations for the physical evidence.",
                        "Genetic markers are the best evidence of a migration from Asia."
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        The passage emphasizes genetic evidence, such as DNA variation and virus studies, as the strongest support for migration from Asia, making option (D) the best choice.
                    
                        ❌ Option A is incorrect because the passage acknowledges oral traditions but does not dismiss migration theories.
                        ❌ Option B is incorrect because the passage supports migration theories rather than questioning them.
                        ❌ Option C is incorrect because the passage presents physical evidence supporting migration.
                    
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] The Asian migration hypothesis is today supported by most of the scientific evidence. The first "hard" data linking American Indians with Asians appeared in the 1980s with the finding that Indians and northeast Asians share a common and distinctive pattern in the arrangement of the teeth. But perhaps the most compelling support for the hypothesis comes from genetic research. Studies comparing the DNA variation of populations around the world consistently demonstrate the close genetic relationship of the two populations, and recently geneticists studying a virus sequestered in the kidneys of all humans found that the strain of virus carried by Navajos and Japanese is nearly identical, while that carried by Europeans and Africans is quite different.
                        [2] The migration could have begun over a land bridge connecting the continents. During the last Ice Age 70,000 to 10,000 years ago, huge glaciers locked up massive volumes of water and sea levels were as much as 300 feet lower than today. Asia and North America were joined by a huge subcontinent of ice-free, treeless grassland, 750 miles wide. Geologists have named this area Beringia, from the Bering Straits. Summers there were warm, winters were cold, dry and almost snow-free: This was a perfect environment for large mammals-mammoth and mastodon, bison, horse, reindeer, camel, and saiga (a goatlike antelope). Small bands of Stone Age hunter-gatherers were attracted by these animal populations, which provided them not only with food but with hides for clothing and shelter, dung for fuel, and bones for tools and weapons. Accompanied py a husky-like species of dog, hunting bands gradually moved as far east as the Yukon River basin of northern Canada, where field excavations have uncovered the fossilized jawbones of several dogs and bone tools estimated to be about 27,000 years old.
                        [3] Other evidence suggests that the migration from Asia began about 30,000 years ago-around the same time that Japan and Scandinavia were being settled. This evidence is based on blood type. The vast majority of modern Native Americans have type O blood and a few have type A, but almost none have type B. Because modern Asian populations include all three blood types, however, the migrations must have begun before the evolution of type B, which geneticists believe occurred about 30,000 years ago.
                        [4] By 25,000 years ago human communities were established in western Beringia, which is present-day Alaska. But access to the south was blocked by a huge glacial sheet covering much of what is today Canada. How did the hunters get over those 2,000 miles of deep ice? The argument is that the climate began to warm with the passing of the Ice Age, and about 13,000 s.c.E. glacial melting created an ice-free corridor along the eastern front range of the Rocky Mountains. Soon hunters of big game had reached the Great Plains. 
                        [5] In the past several years, however, new archaeological finds along the Pacific coast of North and South America have thrown this theory into question. The most spectacular find, at Monte Verde in southern Chile, produced striking evidence of tool making, house building, rock painting, and human footprints conservatively dated long before the highway had been cleared of ice. Many archaeologists now believe that migrants moved south in boats along a coastal route rather than overland. These people were probably gatherers and fishers rather than hunters of big game.
                        [6] There were two later migrations into North America. About 5000 s.c.E. the Athapascan or Na-Dene people began to settle the forests in the northwestern area of the continent. Eventually Athapascan speakers, the ancestors of the Navajos and Apaches, migrated across the Great Plains to the Southwest. The final migration began about 3000 B.C.E after beringia had been submerged, when a maritime hunting people crossed the Bering Straits in small boats. The Inuits (also known as the Eskimos) colonized the polar coasts of the Arctic, the Yupiks the coast of southwestern Alaska, and the Aleuts the Aleutian Islands.
                        [7] While scientists debate the timing and mapping of these migrations, many Indian people hold to oral traditions that include a long journey from a distant place of origin to a new homeland.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "Newly excavated early human sites in Washington State, California, and Peru have been radiocarbon dated to be 11,000 to 12,000 years old.",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'C',
                    answer_explanation: dedent`

                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "There is considerable evidence supporting a theory of multiple migrations from Asia to the Americas.",
                    options: [
                        "Ancient stories of migrations from a faraway place are common in the cultures of many Native American nations.",
                        "The people who inhabited Monte Verde in southern Chile were a highly evolved culture as evidenced by their tools and homes",
                        "Genetic similarities between Native American peoples and Asians include the arrangement of teeth, viruses, and blood types.",
                        "Hunters followed the herds of big game from Beringia south along the Rocky Mountains into what is now called the Great Plains.",
                        "Excavations at archaeological sites provide artifacts that can be used to date the various migrations that occurred by land and sea.",
                        "The climate began to get warmer and warmer, melting the glacial ice about 13,000 B.C.E.",
                    ],
                    correct_answer: "EDC",
                    answer_explanation: dedent`
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            id: 8,
            passage: dedent`
                [1] Symbiosis is a close, long-lasting physical relationship between two different species. In other words, the two species are usually in physical contact and at least one of them derives some sort of benefit from this contact. There are three different categories of symbiotic relationships: parasitism, commensalism, and mutualism
                [2] Parasitism is a relationship in which one organism, known as the parasite, lives in or on another organism, known as the host, from which it derives nourishment. Generally, the parasite is much smaller than the host. Although the host is harmed by the interaction, it is generally not killed immediately by the parasite, and some host individuals may live a long time and be relatively little affected by their parasites. Some parasites are much more destructive than others, however newly established parasite-host relationship are likely to be more destructtive than those that, haave a long evolutionary history. With a longstanding interaction between the parasite and the host, the two species generally evolve in such a way that they can accommodate one another. It is not in the parasite's best interest to kill its host. If it does, it must find another. Likewise, the host evolves defenses against the parasite, often reducing the harm done by the parasite to a level the host can tolerate.
                [3] Parasites that live on the surface of their hosts are known as ectoparasites. Fleas, lice, and some molds and mildews are examples of ectoparasites. Many other parasites, such as tapeworms, malaria parasites, many kinds of bacteria, and some fungi, are called endoparasites because they live inside the bodies of their hosts. A tapeworm lives in the intestines of its host where it is able to resist being digested and makes use of the nutrients in the intestine.
                [4] Even plants can be parasites. Mistletoe is a flowering plant that is parasitic on trees. It establishes itself on the surface of a tree when a bird transfers the seed to the tree. It then grows down into the water-conducting tissues of the tree and uses the water and minerars it obtains from these tissues to support its own growth.
                [5] Commensalism is a relationship between organisms in which one organism benefits while the other is not affected. It is possible to visualize a parasitic relationship evolving into a commensal one. Since parasites generally evolve to do as little harm to their host as possible and the host is combating the negative effects of the parasite, they might eventually evolve to the point where the host is not harmed at all.
                [6] Many examples of commensal relationships exist. Many orchids use trees as a surface upon which to grow. The tree is not harmed or helped, but the orchid needs a surface upon which to establish itself and also benefits by being close to the top of the tree, where it can get more sunlight and rain. Some mosses, ferns, and many vines also make use of the surfaces of trees in this way.
                [7] In the ocean, many sharks have a smaller fish known as a remora attached to them. Remoras have a sucker on the top of their heads that they can use to attach to the shark. In this way, they can hitchhike a ride as the shark swims along. When the shark feeds, the remora frees itself and obtains small bits of food that the shark misses. Then, the remora reattaches. The shark does not appear to be positively or negatively affected by remoras.
                [8] Mutualism is another kind of symbiotic relationship and is actually beneficial to both species involved. In many mutualistic relationships, the relationship is obligatory; the species cannot live without each other. In others, the species can exist separately but are more successful when they are involved in a mutualistic relationship. Some species of Acacia, a thorny tree, provide food in the form of sugar solutions in little structures on their stems. Certain species of ants feed on the solutions and live in the tree, which they will protect from other animals by attacking any animal that begins to feed on the tree. Both organisms benefit; the ants receive food and a place to live, and the tree is protected from animals that would use it as food.
                [9] One soil nutrient that is usually a limiting factor for plant growth is nitrogen. Many kinds of plants, such as legumes, beans, clover, Acacia trees, and Alder trees, have bacteria that live in their roots in little nodules. The roots form these nodules when they are infected with certain kinds of bacteria. The bacteria do not cause disease but provide the plants with nitrogen-containing molecules that the plants can use for growth. The nitrogen-fixing bacteria benefit from the living site and nutrients that the plants provide, and the plants benefit from the ·nitrogen they receive.
            `,
            questions: [
                {
                    id: 1,
                    question: "The word 'derives' in the passage is closest in meaning to",
                    options: [
                        "requests",
                        "pursues",
                        "obtains",
                        "rejects"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The word "derives" means to get or obtain something, making option (C) the best choice.
                
                        ❌ Option A is incorrect because "requests" means to ask for, not to obtain.
                        ❌ Option B is incorrect because "pursues" means to chase or seek, not necessarily to receive.
                        ❌ Option D is incorrect because "rejects" means to refuse, which is the opposite meaning.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: "The word 'categories' in the passage is closest in meaning to",
                    options: [
                        "sources",
                        "ideas",
                        "classifications",
                        "problems"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The word "categories" refers to different groups or classifications, making option (C) the best choice.
                
                        ❌ Option A is incorrect because "sources" means origins, not classifications.
                        ❌ Option B is incorrect because "ideas" refer to concepts rather than groups.
                        ❌ Option D is incorrect because "problems" are difficulties, not classifications.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 3,
                    question: "The word 'relatively' in the passage is closest in meaning to",
                    options: [
                        "comparatively",
                        "routinely",
                        "adversely",
                        "frequently"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        The word "relatively" means in comparison to something else, which is closest in meaning to "comparatively."
                
                        ❌ Option B is incorrect because "routinely" means regularly, not in comparison.
                        ❌ Option C is incorrect because "adversely" means negatively, which is unrelated.
                        ❌ Option D is incorrect because "frequently" means often, not in comparison.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: "Which of the sentences below best expresses the information in the highlighted statement in the passage? The other choices change the meaning or leave out important information.",
                    highlighted_sentence: "newly established parasite-host relationship are likely to be more destructtive than those that, haave a long evolutionary history.",
                    options: [
                        "A parasite is less likely to destroy the host when it attaches itself at first.",
                        "Parasites that have lived on a host for a long time have probably done a lot of damage.",
                        "The most destructive phase for a host is when the parasite first invades it.",
                        "The relationship between a parasite and a host will evolve over time."
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                    `
                },
                {
                    id: 5,
                    question: "The word 'tolerate' in the passage is closest in meaning to",
                    options: [
                        "permit",
                        "oppose",
                        "profit",
                        "avoid"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        "Tolerate" means to allow or endure something without significant resistance, which matches "permit."
                
                        ❌ Option B is incorrect because "oppose" means to resist or fight against.
                        ❌ Option C is incorrect because "profit" means to gain, not to endure.
                        ❌ Option D is incorrect because "avoid" means to stay away from.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 6,
                    question: "According to paragraph 3, how do ectoparasites survive?",
                    options: [
                        "They live in mold and mildew on their hosts.",
                        "They digest food in the intestines of their hosts.",
                        "They live on the nutrients in their bacterial hosts.",
                        "They inhabit the outside parts of their hosts."
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        Paragraph 3 explains that ectoparasites, like fleas and lice, live on the surface of their hosts, making option (D) the best choice.
                
                        ❌ Option A is incorrect because ectoparasites do not necessarily live in mold or mildew.
                        ❌ Option B is incorrect because digesting food in intestines is characteristic of endoparasites, not ectoparasites.
                        ❌ Option C is incorrect because there is no mention of ectoparasites living inside bacterial hosts.
                
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 7,
                    question: "The word 'actually' in the passage is closest in meaning to",
                    options: [
                        "frequently",
                        "initially",
                        "really",
                        "usually"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        "Actually" means something that is real or true, which is closest in meaning to "really."
                
                        ❌ Option A is incorrect because "frequently" refers to how often something happens.
                        ❌ Option B is incorrect because "initially" means at the beginning, not emphasizing truth.
                        ❌ Option D is incorrect because "usually" means commonly, which is unrelated.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 8,
                    question: "In paragraph 8, why does the author use the example of the Acacia tree?",
                    options: [
                        "To demonstrate how ants survive by living in trees",
                        "To explain how two species can benefit from contact",
                        "To show the relationship between plants and animals",
                        "To present a problem that occurs often in nature"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage describes how the Acacia tree and ants have a mutually beneficial relationship, supporting option (B).
                
                        ❌ Option A is incorrect because the example focuses on mutualism, not just ant survival.
                        ❌ Option C is incorrect because the focus is on mutual benefit, not plant-animal relationships in general.
                        ❌ Option D is incorrect because no problem is being presented.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] Symbiosis is a close, long-lasting physical relationship between two different species. In other words, the two species are usually in physical contact and at least one of them derives some sort of benefit from this contact. There are three different categories of symbiotic relationships: parasitism, commensalism, and mutualism
                        [2] Parasitism is a relationship in which one organism, known as the parasite, lives in or on another organism, known as the host, from which it derives nourishment. Generally, the parasite is much smaller than the host. Although the host is harmed by the interaction, it is generally not killed immediately by the parasite, and some host individuals may live a long time and be relatively little affected by their parasites. Some parasites are much more destructive than others, however newly established parasite-host relationship are likely to be more destructtive than those that, haave a long evolutionary history. With a longstanding interaction between the parasite and the host, the two species generally evolve in such a way that they can accommodate one another. It is not in the parasite's best interest to kill its host. If it does, it must find another. Likewise, the host evolves defenses against the parasite, often reducing the harm done by the parasite to a level the host can tolerate.
                        [3] Parasites that live on the surface of their hosts are known as ectoparasites. ⬛ [A] Fleas, lice, and some molds and mildews are examples of ectoparasites. Many other parasites, such as tapeworms, malaria parasites, many kinds of bacteria, and some fungi, are called endoparasites because they live inside the bodies of their hosts. ⬛ [B] A tapeworm lives in the intestines of its host where it is able to resist being digested and makes use of the nutrients in the intestine. [C] ⬛
                        [4] Even plants can be parasites. Mistletoe is a flowering plant that is parasitic on trees. It establishes itself on the surface of a tree when a bird transfers the seed to the tree. It then grows down into the water-conducting tissues of the tree and uses the water and minerars it obtains from these tissues to support its own growth. [D] ⬛
                        [5] Commensalism is a relationship between organisms in which one organism benefits while the other is not affected. It is possible to visualize a parasitic relationship evolving into a commensal one. Since parasites generally evolve to do as little harm to their host as possible and the host is combating the negative effects of the parasite, they might eventually evolve to the point where the host is not harmed at all.
                        [6] Many examples of commensal relationships exist. Many orchids use trees as a surface upon which to grow. The tree is not harmed or helped, but the orchid needs a surface upon which to establish itself and also benefits by being close to the top of the tree, where it can get more sunlight and rain. Some mosses, ferns, and many vines also make use of the surfaces of trees in this way.
                        [7] In the ocean, many sharks have a smaller fish known as a remora attached to them. Remoras have a sucker on the top of their heads that they can use to attach to the shark. In this way, they can hitchhike a ride as the shark swims along. When the shark feeds, the remora frees itself and obtains small bits of food that the shark misses. Then, the remora reattaches. The shark does not appear to be positively or negatively affected by remoras.
                        [8] Mutualism is another kind of symbiotic relationship and is actually beneficial to both species involved. In many mutualistic relationships, the relationship is obligatory; the species cannot live without each other. In others, the species can exist separately but are more successful when they are involved in a mutualistic relationship. Some species of Acacia, a thorny tree, provide food in the form of sugar solutions in little structures on their stems. Certain species of ants feed on the solutions and live in the tree, which they will protect from other animals by attacking any animal that begins to feed on the tree. Both organisms benefit; the ants receive food and a place to live, and the tree is protected from animals that would use it as food.
                        [9] One soil nutrient that is usually a limiting factor for plant growth is nitrogen. Many kinds of plants, such as legumes, beans, clover, Acacia trees, and Alder trees, have bacteria that live in their roots in little nodules. The roots form these nodules when they are infected with certain kinds of bacteria. The bacteria do not cause disease but provide the plants with nitrogen-containing molecules that the plants can use for growth. The nitrogen-fixing bacteria benefit from the living site and nutrients that the plants provide, and the plants benefit from the ·nitrogen they receive.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "They live on the feathers of birds or the fur of animals.",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'A',
                    answer_explanation: dedent`

                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "There is considerable evidence supporting a theory of multiple migrations from Asia to the Americas.",
                    options: [
                        "Parasitic species will feed on the host species, causing varying degrees of damage to the host as a result of the relationship.",
                        "Orchids benefit from being near the top of a tree where they can be exposed to more sunlight and rain.",
                        "Nodules in the roots of plants supply nitrogen from bacteria, thereby enriching the soil.",
                        "In commensalism, one species will benefit from the relationship, but the other species is not affected by it.",
                        "Certain species form mutualistic relationships in which both species benefit from the physical contact.",
                        "Evolutionary changes in species may allow them to live in close physical contact with little damage to each other."
                    ],
                    correct_answer: "ADE",
                    answer_explanation: dedent`
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            id: 9,
            passage: dedent`
                [1] Between 4000 and 3000 B.C., significant technological developments began to transform the Neolithic towns. The invention of writing enabled records to be kept, and the use of metals marked a new level of human control over the environment and its resources. Already before 4000 B.C., craftspeople had discovered that metal-bearing rocks could be heated to liquefy metals, which could then be cast in molds to produce tools and weapons that were more useful than stone instruments. Although copper was the first metal to be utilized in producing tools, after 4000 s.c. craftspeople in western Asia discovered that a combination of copper and tin produced bronze, a much harder and more durable metal than copper. Its widespread use has led historians to call the period the Bronze Age; thereafter, froni around 3000 to 1200 B.C., bronze was increasingly replaced by iron.
                [2] At first, Neolithic settlements were nc1r:gJy. more than villages. But as their inhabitants mastered the art of farming, more complex human societies emerged. As wealth increased, these societies began to develop armies and to build walled cities. By the beginning of the Bronze Age, the concentration of larger numbers of people in the river valleys of Southwest Asia and Egypt was leading to a whole new pattern for human life.
                [3] As we have seen, early human beings formed small groups that developed a simple culture that enabled them to survive. As human societies grew and developed greater complexity, a new form of human existence-called civilization-came into being. A civilization is a complex culture in which large numbers of human beings share a number of common elements. Historians have identified a number of basic characteristics of civilization, most of which are evident in the Soutwest Asian and Egyptian civilizations. These include (1) an urban focus: cities became the centers of political, economic, social, cultural, and religious development; (2) a distinct religious structure: the gods were deemed crucial to the community's success, and professional priestly classes, as stewards of the gods' property, regulated relations with the gods; (3) new political and military structures: an organized government bureaucracy arose to meet the administrative demands of the growing population while armies were organized to gain land and power and for defense; (4) a new social structure based on economic power: while kings and an upper class of priests, political leaders, and warriors dominated, there also existed large groups of free people (farmers, artisans, craftspeople) and at the very bottom, socially, a class of slaves; (5) the development of writing: kings, priests, merchants, and artisans used writing to keep records; and (6) new forms of significant artistic and intellectual activity: monumental architectural structures, usually religious, occupied a prominent place in urban environments.
                [4] Why early civilizations developed remains difficult to explain. Since civilizations developed independently in India, China, Mesopotamia, and Egypt, can general causes be identified that would explain why all of these civilizations emerged? A number of possible explanations of the beginning of civilization have been suggested. A theory of challenge and response maintains that challenges forced human beings to make efforts that resulted in the rise of civilization. Some scholars have adhered to a material explanation. Material forces, such as the growth of food surpluses, made possible the specialization of labor and development of large communities with bureaucratic organization. But the area of the Fertile Crescent, in which civilization emerged in Southwest Asia, was not naturally conducive to agriculture. Abundant food could be produced only with a massive human effort to carefully manage the water, an effort that created the need for organization and bureaucratic control and led to civilized cities. Some historians have argued that nonmaterial forces, primarily religious, provided the sense of unity and purpose that made such organized activities possible. Finally, some scholars doubt that we are capable of ever discovering the actual causes of early civilization.
            `,
            questions: [
                {
                    id: 1,
                    question: "Which of the following is the best definition of a 'civilization'?",
                    options: [
                        "Neolithic towns and cities",
                        "Types of complex cultures",
                        "An agricultural community",
                        "Large population centers"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage defines civilization as a complex culture in which large numbers of people share common elements, making option (B) the best choice.
                
                        ❌ Option A is incorrect because civilization is broader than just Neolithic towns and cities.
                        ❌ Option C is incorrect because agricultural communities do not necessarily meet all the criteria of civilization.
                        ❌ Option D is incorrect because while population centers are part of civilization, they are not the full definition.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: "The word 'utilized' in the passage is closest in meaning to",
                    options: [
                        "located",
                        "used",
                        "described",
                        "improved"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The word "utilized" means to make use of something, which is closest in meaning to "used."
                
                        ❌ Option A is incorrect because "located" means found or identified, not used.
                        ❌ Option C is incorrect because "described" means to explain something, not to use it.
                        ❌ Option D is incorrect because "improved" means to make better, not simply to use.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 3,
                    question: "According to paragraph 2, what happens as societies become more prosperous?",
                    options: [
                        "More goods are produced.",
                        "Walled cities are built.",
                        "Laws are instituted.",
                        "The size of families increased."
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        Paragraph 2 states that as wealth increased, societies built walled cities for protection, supporting option (B).
                
                        ❌ Option A is incorrect because the passage does not discuss increased production of goods in relation to prosperity.
                        ❌ Option C is incorrect because the passage does not mention laws as a direct result of prosperity.
                        ❌ Option D is incorrect because there is no mention of family size increasing with prosperity.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: "The word 'hardly' in the passage is closest in meaning to",
                    options: [
                        "frequently",
                        "likely",
                        "barely",
                        "obviously"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The word "hardly" means barely or scarcely, making option (C) the best choice.
                
                        ❌ Option A is incorrect because "frequently" means often, which is the opposite of "hardly."
                        ❌ Option B is incorrect because "likely" refers to probability, not minimal extent.
                        ❌ Option D is incorrect because "obviously" means something is clear or evident, not scarce.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 5,
                    question: "Why does the author mention 'Neolithic settlements' in paragraph 2?",
                    options: [
                        "To give an example of a civilization",
                        "To explain the invention of writing systems",
                        "To argue that they should be classified as villages",
                        "To contrast them with the civilizations that evolved"
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        The passage contrasts Neolithic settlements, which were simple villages, with the more complex civilizations that followed, making option (D) the best choice.
                
                        ❌ Option A is incorrect because Neolithic settlements are not described as civilizations.
                        ❌ Option B is incorrect because the passage does not link Neolithic settlements to the invention of writing.
                        ❌ Option C is incorrect because the passage does not argue that they should be classified as villages—it states that they were villages.
                
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 6,
                    question: "According to paragraph 3, how was the class system structured?",
                    options: [
                        "An upper class and a lower class",
                        "Slaves, free people, and a ruling class",
                        "A king, an army, and slaves",
                        "Intellectuals and uneducated farmers and workers"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage describes a class system with a ruling elite (kings, priests, and warriors), free people (farmers, artisans, craftspeople), and slaves, supporting option (B).
                
                        ❌ Option A is incorrect because the passage describes more than just two classes.
                        ❌ Option C is incorrect because an army is not listed as a distinct social class.
                        ❌ Option D is incorrect because the passage does not divide the class system based on intellectuals versus uneducated workers.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 7,
                    question: "The word 'prominent' in the passage is closest in meaning to",
                    options: [
                        "weak",
                        "important",
                        "small",
                        "new"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The word "prominent" means something that is important or stands out, making option (B) the best choice.
                
                        ❌ Option A is incorrect because "weak" is the opposite of prominent.
                        ❌ Option C is incorrect because "small" does not mean significant or noticeable.
                        ❌ Option D is incorrect because "new" refers to recent developments, not prominence.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 8,
                    question: "According to paragraph 4, how can the independent development of civilization in different geographic regions be explained?",
                    options: [
                        "Scholars agree that food surpluses encouraged populations to be concentrated in certain areas.",
                        "There are several theories that explain the rise of civilization in the ancient world.",
                        "The model of civilization was probably carried from one region to another along trade routes.",
                        "Historians attribute the emergence of early cities at about the same time as a coincidence."
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        Paragraph 4 discusses multiple theories that explain the independent rise of civilizations in different regions, making option (B) the best choice.
                
                        ❌ Option A is incorrect because while food surpluses are mentioned, scholars do not unanimously agree that they caused civilization.
                        ❌ Option C is incorrect because there is no mention of civilization being carried via trade routes.
                        ❌ Option D is incorrect because historians do not describe the emergence of civilization as a mere coincidence.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] Between 4000 and 3000 B.C., significant technological developments began to transform the Neolithic towns. The invention of writing enabled records to be kept, and the use of metals marked a new level of human control over the environment and its resources. Already before 4000 B.C., craftspeople had discovered that metal-bearing rocks could be heated to liquefy metals, which could then be cast in molds to produce tools and weapons that were more useful than stone instruments. Although copper was the first metal to be utilized in producing tools, after 4000 s.c. craftspeople in western Asia discovered that a combination of copper and tin produced bronze, a much harder and more durable metal than copper. Its widespread use has led historians to call the period the Bronze Age; thereafter, froni around 3000 to 1200 B.C., bronze was increasingly replaced by iron.
                        [2] At first, Neolithic settlements were nc1r:gJy. more than villages. But as their inhabitants mastered the art of farming, more complex human societies emerged. As wealth increased, these societies began to develop armies and to build walled cities. By the beginning of the Bronze Age, the concentration of larger numbers of people in the river valleys of Southwest Asia and Egypt was leading to a whole new pattern for human life.
                        [3] As we have seen, early human beings formed small groups that developed a simple culture that enabled them to survive. As human societies grew and developed greater complexity, a new form of human existence-called civilization-came into being. A civilization is a complex culture in which large numbers of human beings share a number of common elements. Historians have identified a number of basic characteristics of civilization, most of which are evident in the Soutwest Asian and Egyptian civilizations. These include (1) an urban focus: cities became the centers of political, economic, social, cultural, and religious development; (2) a distinct religious structure: the gods were deemed crucial to the community's success, and professional priestly classes, as stewards of the gods' property, regulated relations with the gods; (3) new political and military structures: an organized government bureaucracy arose to meet the administrative demands of the growing population while armies were organized to gain land and power and for defense; (4) a new social structure based on economic power: while kings and an upper class of priests, political leaders, and warriors dominated, there also existed large groups of free people (farmers, artisans, craftspeople) and at the very bottom, socially, a class of slaves; (5) the development of writing: kings, priests, merchants, and artisans used writing to keep records; and (6) new forms of significant artistic and intellectual activity: monumental architectural structures, usually religious, occupied a prominent place in urban environments.
                        [4] Why early civilizations developed remains difficult to explain. ⬛ [A] Since civilizations developed independently in India, China, Mesopotamia, and Egypt, can general causes be identified that would explain why all of these civilizations emerged? ⬛ [B] A number of possible explanations of the beginning of civilization have been suggested. A theory of challenge and response maintains that challenges forced human beings to make efforts that resulted in the rise of civilization. Some scholars have adhered to a material explanation. ⬛ [C] Material forces, such as the growth of food surpluses, made possible the specialization of labor and development of large communities with bureaucratic organization. ⬛ [D] But the area of the Fertile Crescent, in which civilization emerged in Southwest Asia, was not naturally conducive to agriculture. Abundant food could be produced only with a massive human effort to carefully manage the water, an effort that created the need for organization and bureaucratic control and led to civilized cities. Some historians have argued that nonmaterial forces, primarily religious, provided the sense of unity and purpose that made such organized activities possible. Finally, some scholars doubt that we are capable of ever discovering the actual causes of early civilization.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "Some historians believe they can be established.",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`

                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "Certain qualities appear to define a civilization.",
                    options: [
                        "Free citizens who work in professions for pay.",
                        "Bureaucracies for the government and armies.",
                        "Libraries to house art and written records.",
                        "A strategic location near rivers or the sea.",
                        "Organized religion, writing, and art.",
                        "A densely populated group with a class structure."
                    ],
                    correct_answer: "BEF",
                    answer_explanation: dedent`
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            //B15, modalTest3, readingPassage3
            id: 10,
            passage: dedent`
                [1] Although we can imagine life based on something other than carbon chemistry, we know of no examples to tell us how such life might arise and · survive. We must limit our discussion to life as we know it and the conditions it requires. The most important requirement is the presence of liquid water, not only as part of the chemical reactions of life, but also as a medium to transport nutrients and wastes within the organism.
                [2] The water requirement automatically eliminates many worlds in our solar system. The moon is airless, and although some data suggest ice frozen in the soil at its poles, it has never had liquid water on its surface. In the vacuum of the lunar surface, liquid water would boil away rapidly. Mercury too is airless and cannot have had liquid water on its surface for long periods of time. Venus has some traces of water vapor in its atmosphere, but it is much too hot for liquid water to survive. If there were any lakes or oceans of water on its surface when it was young, they must have evaporated quickly. Even if life began there, no traces would be left now.
                [3] The inner solar system seems too hot, and the outer solar system seems too cold. The Jovian planets have deep atmospheres, and at a certain level, they have moderate temperatures where water might condense into liquid droplets. But it seems unlikely that life could begin there. The Jovian planets have no surfaces where oceans could nurture the beginning of life, and currents in the atmosphere seem destined to circulate gas and water droplets from regions of moderate temperature to other levels that are much too hot or too cold for life to survive.
                [4] A few of the satellites of the Jovian planets might have suitable conditions for life. Jupiter's moon Europa seems to have a liquid-water ocean below its icy crust, and minerals dissolved in that water would provide a rich broth of possibilities for chemical evolution. Nevertheless, Europa is not a promising site to search for life because conditions may not have remained stable for the billions of years needed for life to evolve beyond the microscopic stage. If Jupiter's moons interact gravitationally and modify their orbits, Europa may have been frozen solid at some points in history.
                [5] Saturn's moon Titan has an atmosphere of nitrogen, argon, and methane and may have oceans of liquid methane and ethane on its surface. The chemistry of life that might crawl or swim on such a world is unknown, but life there may be unlikely because of the temperature. The surface of Titan is a deadly -179°C (-290° F). Chemical reactions occur slowly or not at all at such low temperatures, so the chemical evolution needed to begin life may never have occurred on Titan.
                [6] Mars is the most likely place for life in our solar system. The evidence, however, is not encouraging. Meteorite ALH84001 was found on the Antarctic ice in 1984. It was probably part of debris ejected into space by a large impact on Mars. ALH84001 is important because a team of scientists studied it and announced in 1996 that it contained chemical and physical traces of ancient life on Mars.
                [7] Scientists were excited too, but being professionally skeptical, they began testing the results immediately. In many cases, the results did not confirm the conclusion that life once existed on Mars. Some chemical contamination from water on Earth has occurred, and some chemicals in the meteorite may have originated without the presence of life. The physical features that look like fossil bacteria may be mineral formations in the rock.
                [8] Spacecraft now visiting Mars may help us understand the past history of water there and paint a more detailed picture of present conditions. Nevertheless, conclusive evidence may have to wait until a geologist in a space suit can wander the dry streambeds of Mars cracking open rocks and searching for fossils.
                [9] We are left to conclude that, so far as we know, our solar system is bare of life except for Earth. Consequently, our search for life in the universe takes us to other planetary systems.
            `,
            questions: [
                {
                    id: 1,
                    question: "The word 'automatically' in the passage is closest in meaning to",
                    options: [
                        "partially",
                        "actually",
                        "occasionally",
                        "naturally"
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        The word "automatically" in the passage means something that happens naturally without additional action, making option (D) the best choice.
                
                        ❌ Option A is incorrect because "partially" means incompletely, which does not match "automatically."
                        ❌ Option B is incorrect because "actually" means truly or in reality, which is not the intended meaning.
                        ❌ Option C is incorrect because "occasionally" means sometimes, which is unrelated.
                
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: "The word 'data' in the passage is closest in meaning to",
                    options: [
                        "improvements",
                        "agreements",
                        "facts",
                        "methods"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The word "data" refers to collected facts or information, making option (C) the best choice.
                
                        ❌ Option A is incorrect because "improvements" refer to enhancements, not factual information.
                        ❌ Option B is incorrect because "agreements" refer to mutual decisions, not facts.
                        ❌ Option D is incorrect because "methods" refer to ways of doing something, not data.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 3,
                    question: "Which of the following statements about the water on Venus is true?",
                    options: [
                        "The water evaporated because of the high temperatures.",
                        "The water became frozen in the polar regions.",
                        "Only a little water is left in small lakes on the surface.",
                        "Rain does not fall because there is no atmosphere."
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        The passage states that Venus was once believed to have water, but its high temperatures caused it to evaporate, supporting option (A).
                
                        ❌ Option B is incorrect because Venus does not have frozen water at the poles.
                        ❌ Option C is incorrect because there are no small lakes left on Venus.
                        ❌ Option D is incorrect because Venus does have an atmosphere, though not one suitable for rain.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: "The word 'stable' in the passage is closest in meaning to",
                    options: [
                        "visible",
                        "active",
                        "constant",
                        "strong"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The word "stable" refers to something that remains unchanged or steady, making option (C) the best choice.
                
                        ❌ Option A is incorrect because "visible" refers to something that can be seen, not stability.
                        ❌ Option B is incorrect because "active" refers to motion or energy, not steadiness.
                        ❌ Option D is incorrect because "strong" refers to strength, not consistency.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 5,
                    question: "What can be inferred from the passage about the Jovian planets?",
                    options: [
                        "Some of the Jovian planets may have conditions that could support life.",
                        "Jupiter is classified as one of the Jovian planets.",
                        "Europa is the largest of the moons that revolve around Jupiter.",
                        "The orbits of the Jovian planets have changed over time."
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                    `
                },
                {
                    id: 6,
                    question: "Why does the author mention the meteorite 'ALH84001' in paragraph 6?",
                    options: [
                        "Because it was found in Antarctica about fifty years ago",
                        "Because it was evidence of a recent impact on Mars",
                        "Because scientists thought that it contained evidence of life on Mars",
                        "Because the meteorite probably came from Mars a long time ago"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The passage states that scientists believed ALH84001 contained traces of ancient life, supporting option (C).
                
                        ❌ Option A is incorrect because while it was found in Antarctica, this is not its significance.
                        ❌ Option B is incorrect because it was not evidence of a recent impact.
                        ❌ Option D is incorrect because the passage focuses on its potential evidence of life, not just its Martian origin.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 7,
                    question: "How will scientists confirm the existence of life on Mars?",
                    options: [
                        "By sending unmanned spacecraft to Mars",
                        "By looking at fossils on Mars",
                        "By viewing pictures taken of Mars",
                        "By studying the present conditions on Mars"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage states that conclusive evidence may require a geologist to search for fossils on Mars, supporting option (B).
                
                        ❌ Option A is incorrect because unmanned spacecraft can provide data but may not confirm life.
                        ❌ Option C is incorrect because pictures alone cannot confirm past or present life.
                        ❌ Option D is incorrect because studying conditions helps but does not prove past life.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 8,
                    question: "Which of the following statements most accurately reflects the author's opinion about life in our solar system?",
                    options: [
                        "Life is probably limited to planets in the inner solar system.",
                        "There is a large body of evidence supporting life on Mars.",
                        "There is little probability of life on other planets.",
                        "We should explore our solar system for conditions that support life."
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] Although we can imagine life based on something other than carbon chemistry, we know of no examples to tell us how such life might arise and · survive. We must limit our discussion to life as we know it and the conditions it requires. The most important requirement is the presence of liquid water, not only as part of the chemical reactions of life, but also as a medium to transport nutrients and wastes within the organism.
                        [2] The water requirement automatically eliminates many worlds in our solar system. The moon is airless, and although some data suggest ice frozen in the soil at its poles, it has never had liquid water on its surface. In the vacuum of the lunar surface, liquid water would boil away rapidly. Mercury too is airless and cannot have had liquid water on its surface for long periods of time. Venus has some traces of water vapor in its atmosphere, but it is much too hot for liquid water to survive. If there were any lakes or oceans of water on its surface when it was young, they must have evaporated quickly. Even if life began there, no traces would be left now.
                        [3] The inner solar system seems too hot, and the outer solar system seems too cold. The Jovian planets have deep atmospheres, and at a certain level, they have moderate temperatures where water might condense into liquid droplets. But it seems unlikely that life could begin there. The Jovian planets have no surfaces where oceans could nurture the beginning of life, and currents in the atmosphere seem destined to circulate gas and water droplets from regions of moderate temperature to other levels that are much too hot or too cold for life to survive.
                        [4] A few of the satellites of the Jovian planets might have suitable conditions for life. Jupiter's moon Europa seems to have a liquid-water ocean below its icy crust, and minerals dissolved in that water would provide a rich broth of possibilities for chemical evolution.⬛ [A] Nevertheless, Europa is not a promising site to search for life because conditions may not have remained stable for the billions of years needed for life to evolve beyond the microscopic stage. ⬛ [B] If Jupiter's moons interact gravitationally and modify their orbits, Europa may have been frozen solid at some points in history. [C] ⬛
                        [5] Saturn's moon Titan has an atmosphere of nitrogen, argon, and methane and may have oceans of liquid methane and ethane on its surface. ⬛ [D] The chemistry of life that might crawl or swim on such a world is unknown, but life there may be unlikely because of the temperature. The surface of Titan is a deadly -179°C (-290° F). Chemical reactions occur slowly or not at all at such low temperatures, so the chemical evolution needed to begin life may never have occurred on Titan.
                        [6] Mars is the most likely place for life in our solar system. The evidence, however, is not encouraging. Meteorite ALH84001 was found on the Antarctic ice in 1984. It was probably part of debris ejected into space by a large impact on Mars. ALH84001 is important because a team of scientists studied it and announced in 1996 that it contained chemical and physical traces of ancient life on Mars.
                        [7] Scientists were excited too, but being professionally skeptical, they began testing the results immediately. In many cases, the results did not confirm the conclusion that life once existed on Mars. Some chemical contamination from water on Earth has occurred, and some chemicals in the meteorite may have originated without the presence of life. The physical features that look like fossil bacteria may be mineral formations in the rock.
                        [8] Spacecraft now visiting Mars may help us understand the past history of water there and paint a more detailed picture of present conditions. Nevertheless, conclusive evidence may have to wait until a geologist in a space suit can wander the dry streambeds of Mars cracking open rocks and searching for fossils.
                        [9] We are left to conclude that, so far as we know, our solar system is bare of life except for Earth. Consequently, our search for life in the universe takes us to other planetary systems.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "Such periods of freezing would probably prevent life from developing.",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'C',
                    answer_explanation: dedent`

                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "Current evidence does not support the theory of life in our solar system",
                    options: [
                        "The meteorite that was discovered in the Antarctic in the 1980s was thought to contain evidence of early life on Mars, but it was later disputed.",
                        "The planet that has the greatest probability for life in the past or now is Mars, but more investigation is required to draw conclusions.",
                        "Europa has an ocean under the ice on the surface of the moon, which may contain the chemical combinations required for life to evolve.",
                        "Although some of the moons that revolve around Saturn and Jupiter have conditions that might support life, the evidence contradicts this possibility.",
                        "Other planetary systems must have life that is similar to that which has evolved on Earth because of the principles of carbon chemistry.",
                        "It is too hot for life on the planets near the Sun in the inner solar system and too cold on the planets most removed from the Sun in the outer solar system."
                    ],
                    correct_answer: "FDB",
                    answer_explanation: dedent`
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            //B15, modalTest4, readingPassage1
            id: 11,
            passage: dedent`
                [1] Taken together, income, occupation, and education are good measures of people's social standing. Using a layered model of stratification, most sociologists describe the class system in the United States as divided into several classes: upper, upper middle, middle, lower middle, and lower class. The different classes are arrayed along a continuum with those with the most money, education, and prestige at the top and those with the least at the bottom.
                [2] In the United States, the upper class owns the major share of corporate and personal wealth; it includes those who have held wealth for generations as well as those who have recently become rich. Only a very small proportion of people actually constitute the upper class, but they control vast amounts of wealth and power in the United States. Those in this class exercise enormous control throughout society. Some wealthy individuals can wield as much power as entire nations.
                [3] Despite social myths to the contrary, the predictor of future wealth is the family into which you are born. Each year, the business magazine Forbes publishes a list of the 400 wealthiest families and individuals in the country. Of all the wealth represented on the Forbes 400 list, most is inherited, although since the 1990s, there has been some increase in the number of people on the list with self-created wealth. Those in the upper class with newly acquired wealth are known as the nouveau riche. Luxury vehicles, high-priced real estate, and exclusive vacations may mark the lifestyle of the newly rich. However, although they may have vast amounts of money, they are often not accepted into "old rich" circles.
                [4] The upper middle class includes those with high incomes and high social prestige. They tend to be well-educated professionals or business executives. Their earnings can be quite high indeed-successful business executives can earn millions of dollars a year. It is difficult to estimate exactly how many people fall into this group because of the difficulty of drawing lines between the upper, upper middle, and middle classes. Indeed, the upper middle class is often thought of as "middle class" because their lifestyle sets the standard to which many aspire, but this lifestyle is actually unattainable by most.The upper middle class includes those with high incomes and high social prestige. They tend to be well-educated professionals or business executives. Their earnings can be quite high indeed-successful business executives can earn millions of dollars a year. It is difficult to estimate exactly how many people fall into this group because of the difficulty of drawing lines between the upper, upper middle, and middle classes. Indeed, the upper middle class is often thought of as "middle class" because their lifestyle sets the standard to which many aspire, but this lifestyle is actually unattainable by most.
                [5] The middle class is hard to define, in part because being "middle class" is more than just economic position. A very large portion of Americans identify themselves as middle class even though they vary widely in lifestyle and in resources at their disposal. But the idea that the United States is an open-class system leads many to think that the majority have a middle-class lifestyle; thus, the middle class becomes the ubiquitous norm even though many who call themselves middle class have a tenuous hold on this class position.
                [6] The lower middle class includes workers in the skilled trades and lowincome bureaucratic workers, many of whom may actually define themselves as middle class. Also known as the working class, this class includes bluecollar workers (those in skilled trades who do manual labor) and many service workers, such as secretaries, hair stylists, food servers, police, and firefighters. Medium to low income, education, and occupational prestige define the lower middle class relative to the class groups above it. The term lower in this class designation refers to the relative position of the group in the stratification system, but it has a pejorative sound to many people, especially to people who are members of this class, many of whom think of themselves as middle class.
                [7] The lower class is composed primarilY: of the displaced and poor. People in this class have little formal education and are often unemployed or working in minimum-wage jobs. People of color and women make up a disproportionate part of this class. The poor include the working poor-those who work at least 27 hours a week but whose wages fall below the federal poverty level. Six percent of all working people now live below the poverty line. The concept of the underclass has been added to the lower class. The underclass includes those who are likely to be permanently unemployed and without means of economic support. Rejected from the economic system, those in the underclass may become dependent on public assistance or illegal activities.
            `,
            questions: [
                {
                    id: 1,
                    question: "The word 'constitute' in the passage is closest in meaning to",
                    options: [
                        "explain",
                        "reject",
                        "form",
                        "modify"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The word "constitute" means to make up or form something, making option (C) the best choice.
                
                        ❌ Option A is incorrect because "explain" refers to clarifying, not forming.
                        ❌ Option B is incorrect because "reject" means to refuse or decline.
                        ❌ Option D is incorrect because "modify" means to change slightly, not to form.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: "The word 'enormous' in the passage is closest in meaning to",
                    options: [
                        "very large",
                        "very new",
                        "very early",
                        "very good"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        The word "enormous" means extremely large in size or extent, making option (A) the best choice.
                
                        ❌ Option B is incorrect because "very new" refers to recency, not size.
                        ❌ Option C is incorrect because "very early" refers to time, not magnitude.
                        ❌ Option D is incorrect because "very good" refers to quality, not extent.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 3,
                    question: "Which of the sentences below best expresses the information in the highlighted statement in the passage? The other choices change the meaning or leave out important information.",
                    options: [
                        "Although it is not generally accepted, your family provides the best prediction of your future wealth.",
                        "You can achieve great future wealth in spite of the family in which you may have been born.",
                        "It is not true that your family will restrict the acquisition of your future wealth and level of social status.",
                        "Social myths are contrary to the facts about the future wealth and social status of your family."
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        The passage states that future wealth is most accurately predicted by the family one is born into, making option (A) the best choice.
                
                        ❌ Option B is incorrect because the passage does not emphasize overcoming one's family background.
                        ❌ Option C is incorrect because the passage does not claim that family does not affect wealth.
                        ❌ Option D is incorrect because the passage focuses on economic prediction rather than social myths.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: "Why does the author mention the Forbes 400 in paragraph 3?",
                    options: [
                        "To explain the meaning of the listing that appears every year",
                        "To support the statement that most wealthy people inherit their money",
                        "To cast doubt on the claim that family income predicts individual wealth",
                        "To give examples of successful people who have modest family connections"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage states that most of the wealth on the Forbes 400 list is inherited, supporting option (B).
                
                        ❌ Option A is incorrect because the author does not focus on explaining the Forbes 400 list itself.
                        ❌ Option C is incorrect because the passage supports, rather than doubts, the idea that family wealth predicts future wealth.
                        ❌ Option D is incorrect because the passage does not emphasize modest family connections.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 5,
                    question: "The word 'exclusive' in the passage is closest in meaning to",
                    options: [
                        "long",
                        "expensive",
                        "frequent",
                        "relaxing"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The word "exclusive" in the passage refers to things that are limited to a select few and often expensive, making option (B) the best choice.
                
                        ❌ Option A is incorrect because "long" refers to duration, not exclusivity.
                        ❌ Option C is incorrect because "frequent" means occurring often, which is not relevant.
                        ❌ Option D is incorrect because "relaxing" refers to comfort, not exclusivity.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 6,
                    question: "In paragraph 4, the author states that business and professional people with educational advantages are most often members of which class?",
                    options: [
                        "lower middle class",
                        "upper middle class",
                        "nouveau riche",
                        "upper class"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage describes the upper middle class as consisting of well-educated professionals and business executives, making option (B) the best choice.
                
                        ❌ Option A is incorrect because the lower middle class consists of skilled tradespeople and lower-income workers.
                        ❌ Option C is incorrect because the nouveau riche refers to those with newly acquired wealth, not professionals.
                        ❌ Option D is incorrect because the upper class consists of the wealthiest individuals, not professionals.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 7,
                    question: "What can be inferred about the working class in the United States?",
                    options: [
                        "They are often not able to find entry-level jobs.",
                        "They work in jobs that pay minimum wage.",
                        "They are service workers and manual laborers.",
                        "They are considered lower class."
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The passage describes the working class as including blue-collar workers and service workers, supporting option (C).
                
                        ❌ Option A is incorrect because the passage does not state that they struggle to find entry-level jobs.
                        ❌ Option B is incorrect because while some may earn minimum wage, the passage does not claim this for all.
                        ❌ Option D is incorrect because the working class is identified as lower middle class, not lower class.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 8,
                    question: "According to paragraph 7, why has the underclass emerged?",
                    options: [
                        "The new term was necessary because the lower class enjoyed a higher lifestyle than it had previously.",
                        "The increase in crime has supported a new class of people who live by engaging in illegal activities.",
                        "Changes in the economy have caused an entire class of people to survive by welfare or crime.",
                        "Minimum-wage jobs no longer support a class of people at a standard level in the economic system."
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The passage states that the underclass includes those who are unemployed or reliant on welfare or illegal activities, supporting option (C).
                
                        ❌ Option A is incorrect because the passage does not suggest that the lower class has improved its lifestyle.
                        ❌ Option B is incorrect because crime is mentioned, but not as the sole reason for the emergence of the underclass.
                        ❌ Option D is incorrect because while minimum-wage jobs are discussed, they are not the main reason for the underclass.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] Taken together, income, occupation, and education are good measures of people's social standing. Using a layered model of stratification, most sociologists describe the class system in the United States as divided into several classes: upper, upper middle, middle, lower middle, and lower class. The different classes are arrayed along a continuum with those with the most money, education, and prestige at the top and those with the least at the bottom.
                        [2] In the United States, the upper class owns the major share of corporate and personal wealth; it includes those who have held wealth for generations as well as those who have recently become rich. Only a very small proportion of people actually constitute the upper class, but they control vast amounts of wealth and power in the United States. Those in this class exercise enormous control throughout society. Some wealthy individuals can wield as much power as entire nations.
                        [3] Despite social myths to the contrary, the predictor of future wealth is the family into which you are born. Each year, the business magazine Forbes publishes a list of the 400 wealthiest families and individuals in the country. Of all the wealth represented on the Forbes 400 list, most is inherited, although since the 1990s, there has been some increase in the number of people on the list with self-created wealth. Those in the upper class with newly acquired wealth are known as the nouveau riche. Luxury vehicles, high-priced real estate, and exclusive vacations may mark the lifestyle of the newly rich. However, although they may have vast amounts of money, they are often not accepted into "old rich" circles.
                        [4] The upper middle class includes those with high incomes and high social prestige. They tend to be well-educated professionals or business executives. Their earnings can be quite high indeed-successful business executives can earn millions of dollars a year. It is difficult to estimate exactly how many people fall into this group because of the difficulty of drawing lines between the upper, upper middle, and middle classes. Indeed, the upper middle class is often thought of as "middle class" because their lifestyle sets the standard to which many aspire, but this lifestyle is actually unattainable by most.The upper middle class includes those with high incomes and high social prestige. They tend to be well-educated professionals or business executives. Their earnings can be quite high indeed-successful business executives can earn millions of dollars a year. It is difficult to estimate exactly how many people fall into this group because of the difficulty of drawing lines between the upper, upper middle, and middle classes. Indeed, the upper middle class is often thought of as "middle class" because their lifestyle sets the standard to which many aspire, but this lifestyle is actually unattainable by most.
                        [5] The middle class is hard to define, in part because being "middle class" is more than just economic position. A very large portion of Americans identify themselves as middle class even though they vary widely in lifestyle and in resources at their disposal. But the idea that the United States is an open-class system leads many to think that the majority have a middle-class lifestyle; thus, the middle class becomes the ubiquitous norm even though many who call themselves middle class have a tenuous hold on this class position.
                        [6] The lower middle class includes workers in the skilled trades and lowincome bureaucratic workers, many of whom may actually define themselves as middle class. Also known as the working class, this class includes bluecollar workers (those in skilled trades who do manual labor) and many service workers, such as secretaries, hair stylists, food servers, police, and firefighters. Medium to low income, education, and occupational prestige define the lower middle class relative to the class groups above it. The term lower in this class designation refers to the relative position of the group in the stratification system, but it has a pejorative sound to many people, especially to people who are members of this class, many of whom think of themselves as middle class.
                        [7] The lower class is composed primarilY: of the displaced and poor. People in this class have little formal education and are often unemployed or working in minimum-wage jobs. People of color and women make up a disproportionate part of this class. The poor include the working poor-those who work at least 27 hours a week but whose wages fall below the federal poverty level. Six percent of all working people now live below the poverty line. The concept of the underclass has been added to the lower class. The underclass includes those who are likely to be permanently unemployed and without means of economic support. Rejected from the economic system, those in the underclass may become dependent on public assistance or illegal activities.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "The working poor constitute a large portion of those who are poor",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'A',
                    answer_explanation: dedent`

                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "The levels of education, the acquisition of wealth, and occupational prestige determine social status in the United States.",
                    options: [
                        "People who have made their money more recently tend not to be accepted by those who have inherited their wealth from family holdings.",
                        "The lower class includes working people with low incomes and a new underclass of people who are dependent on welfare or engage in crime.",
                        "The upper class tends to acquire wealth through inheritance, whereas the upper middle class has a high income that they earn in their professions.",
                        "Although the lifestyle of the upper middle class is the goal for the majority, it is difficult for many people to maintain this standard of living.",
                        "Most people identify themselves as middle class, including blue-collar workers and service workers as well as bureaucratic employees.",
                        "It is still possible to move from one social class to another in the United States by working your way up the ladder in a corporate environment."
                    ],
                    correct_answer: "CEB",
                    answer_explanation: dedent`
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            //B15, modalTest4, readingPassage2
            id: 12,
            passage: dedent`
                [1] Weather and climate are closely related, but they are not quite the same thing. In any particular location, some days may be hotter or cooler, clearer or cloudier, calmer or stormier than others. The ever-varying combination of winds, clouds, temperature, and pressure is what we call weather. Climate is the long-term average of weather, which means it can change only on much longer time scales. The complexity of weather makes it difficult to predict, and at best, the local weather can be predicted only a week or so in advance.
                [2] Scientists today have a very good understanding of the physical laws and mathematical equations that govern the behavior and motion of atoms in the air, oceans, and land. Why, then, do we have so much trouble predicting the weather? To understand why the weather is so unpredictable we must look at the nature of scientific prediction.
                [3] Suppose you want to predict the location of a car on a road 1 minute from now. You need two basic pieces of information: where the car is now, and how fast it is moving. If the car is now passing Smith Road and heading north at 1 mile per minute, it will be 1 mile north of Smith Road in 1 minute.
                [4] Now, suppose you want to predict the weather. Again, you need two basic types of information: (1) the current weather and (2) how weather changes from one moment to the next. You could attempt to predict the weather by creating a "model world." For example, you could overlay a globe of the Earth with graph paper and then specify the current temperature, pressure, cloud cover, and wind within each square. These are your starting points, or initial conditions. Next, you could input all the initial conditions into a computer, along with a set of equations (physical laws) that describe the processes that can change weather from one moment to the next.
                [5] Suppose the initial conditions represent the weather around the Earth at this very moment and you run your computer model to predict the weather for the next month in New York City. The model might tell you that tomorrow will be warm and sunny, with cooling during the next week and a major storm passing through a month from now. But suppose you run the model again, making one minor change in the initial conditions-say, a small change in the wind speed somewhere over Brazil. This slightly different initial condition will not change the weather prediction for tomorrow in New York City. But for next month's weather, the two predictions may not agree at all!
                [6] The disagreement between the two predictions arises because the laws governing weather can cause very tiny changes in initial conditions to be greatly magnified over time. This extreme sensitivity to initial conditions is sometimes called the butterfly effect: If initial conditions change by as much as the flap of a butterfly's wings, the resulting prediction may be very different.
                [7] The butterfly effect is a hallmark of chaotic systems. Simple systems are described by linear equations in which, for example, increasing a cause produces a proportional increase in an effect. In contrast, chaotic systems are described by nonlinear equations, which allow for subtler and more intricate interactions. For example, the economy is nonlinear because a rise in interest rates does not automatically produce a corresponding change in consumer spending. Weather is nonlinear because a change in the wind speed in one location does not automatically produce a corresponding change in another location.
                [8] Despite their name, chaotic systems are not necessarily random In fact, many chaotic systems have a kind of underlying order that explains the general features of their behavior even while details at any particular moment remain unpredictable. In a sense, many chaotic systems-like the weatherare "predictably unpredictable." Our understanding of chaotic systems is increasing at a tremendous rate, but much remains to be learned about them.
            `,
            questions: [
                {
                    id: 1,
                    question: "According to the passage, why will it be difficult to predict weather?",
                    options: [
                        "We have to learn more about chaotic systems.",
                        "We don't communicate globally.",
                        "We need more powerful computers.",
                        "We must understand the physical laws of atoms."
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        The passage explains that weather is a chaotic system, and understanding chaotic systems is crucial for improving weather prediction. This supports option (A).
                
                        ❌ Option B is incorrect because global communication is not mentioned as a limiting factor.
                        ❌ Option C is incorrect because while computers help, the main issue is the nature of chaotic systems.
                        ❌ Option D is incorrect because scientists already understand the physical laws of atoms.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: "Why does the author mention 'a car' in paragraph 3?",
                    options: [
                        "The car is an example of how conditions are used to make predictions.",
                        "The author digresses in order to tell a story about a car.",
                        "The car introduces the concept of computer models.",
                        "The mathematical equations for the car are very simple to understand."
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        The passage uses the car as an analogy to explain how initial conditions influence predictions, making option (A) the best choice.
                
                        ❌ Option B is incorrect because the car is used as an example, not as a diversion.
                        ❌ Option C is incorrect because the car analogy precedes the discussion of computer models.
                        ❌ Option D is incorrect because the emphasis is on prediction, not the complexity of equations.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 3,
                    question: "Why do the predictions disagree for the computer model described in paragraph 5?",
                    options: [
                        "The conditions at the beginning were very different.",
                        "The model was not accurately programmed.",
                        "Computer models cannot predict weather.",
                        "Over time models are less reliable."
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        The passage explains that even a small change in initial conditions can result in a drastically different outcome over time, making option (D) the best choice.
                
                        ❌ Option A is incorrect because the initial conditions were only slightly altered.
                        ❌ Option B is incorrect because the model itself was not faulty.
                        ❌ Option C is incorrect because the passage does not state that computer models are entirely useless.
                
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: "Why is weather considered a chaotic system?",
                    options: [
                        "Because it is made up of random features.",
                        "Because it is not yet very well understood.",
                        "Because it is described by nonlinear equations.",
                        "Because it does not have an orderly structure."
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The passage states that weather is described by nonlinear equations, which makes it a chaotic system, supporting option (C).
                
                        ❌ Option A is incorrect because chaotic systems are not necessarily random.
                        ❌ Option B is incorrect because the passage states that scientists have a good understanding of the physical laws governing weather.
                        ❌ Option D is incorrect because weather does have an underlying order, despite being chaotic.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 5,
                    question: "Based on information in paragraph 6, which of the following best explains the term 'butterfly effect'?",
                    options: [
                        "Slight variations in initial conditions can cause very different results.",
                        "A butterfly's wings can be used to predict different conditions in various locations.",
                        "The weather is as difficult to predict as the rate of a butterfly's wings when it flaps them.",
                        "A butterfly flaps its wings in one location, which automatically produces a result in another place."
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        The passage explains that small changes in initial conditions can lead to vastly different outcomes, making option (A) the best choice.
                
                        ❌ Option B is incorrect because butterfly wings are used as a metaphor, not an actual predictive tool.
                        ❌ Option C is incorrect because the passage does not compare weather prediction to butterfly wing motion.
                        ❌ Option D is incorrect because the butterfly's action does not directly cause another event.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 6,
                    question: "Why does the author mention 'the economy' in paragraph 7?",
                    options: [
                        "To contrast a simple system with a chaotic system.",
                        "To provide an example of another chaotic system.",
                        "To compare nonlinear equations with linear equations.",
                        "To prove that all nonlinear systems are not chaotic."
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage states that the economy, like weather, is a chaotic system governed by nonlinear equations, making option (B) the best choice.
                
                        ❌ Option A is incorrect because the economy is not being contrasted with a simple system.
                        ❌ Option C is incorrect because the focus is not on comparing equations but on explaining chaotic systems.
                        ❌ Option D is incorrect because the passage does not argue that all nonlinear systems are not chaotic.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 7,
                    question: "The word 'features' in the passage is closest in meaning to",
                    options: [
                        "problems",
                        "exceptions",
                        "characteristics",
                        "benefits"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The word "features" refers to defining aspects or traits, which aligns with "characteristics," making option (C) the best choice.
                
                        ❌ Option A is incorrect because "problems" implies difficulties, which is not the intended meaning.
                        ❌ Option B is incorrect because "exceptions" refers to outliers rather than traits.
                        ❌ Option D is incorrect because "benefits" refers to advantages, not defining aspects.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 8,
                    question: "In paragraph 8, what does the author suggest about our knowledge of chaotic systems?",
                    options: [
                        "It will never allow us to make accurate predictions.",
                        "It has not improved very much over the years.",
                        "It reveals details that can be predicted quite accurately.",
                        "It requires more research by the scientific community."
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        The passage states that our understanding of chaotic systems is increasing but that much remains to be learned, making option (D) the best choice.
                
                        ❌ Option A is incorrect because the passage does not claim that accurate predictions are impossible.
                        ❌ Option B is incorrect because the passage states that knowledge has improved significantly.
                        ❌ Option C is incorrect because while general trends can be understood, chaotic systems remain difficult to predict in detail.
                
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] Weather and climate are closely related, but they are not quite the same thing. In any particular location, some days may be hotter or cooler, clearer or cloudier, calmer or stormier than others. The ever-varying combination of winds, clouds, temperature, and pressure is what we call weather. Climate is the long-term average of weather, which means it can change only on much longer time scales. The complexity of weather makes it difficult to predict, and at best, the local weather can be predicted only a week or so in advance.
                        [2] Scientists today have a very good understanding of the physical laws and mathematical equations that govern the behavior and motion of atoms in the air, oceans, and land. Why, then, do we have so much trouble predicting the weather? To understand why the weather is so unpredictable we must look at the nature of scientific prediction.
                        [3] Suppose you want to predict the location of a car on a road 1 minute from now. You need two basic pieces of information: where the car is now, and how fast it is moving. If the car is now passing Smith Road and heading north at 1 mile per minute, it will be 1 mile north of Smith Road in 1 minute.
                        [4] Now, suppose you want to predict the weather. Again, you need two basic types of information: (1) the current weather and (2) how weather changes from one moment to the next. You could attempt to predict the weather by creating a "model world." For example, you could overlay a globe of the Earth with graph paper and then specify the current temperature, pressure, cloud cover, and wind within each square. These are your starting points, or initial conditions. Next, you could input all the initial conditions into a computer, along with a set of equations (physical laws) that describe the processes that can change weather from one moment to the next.
                        [5] Suppose the initial conditions represent the weather around the Earth at this very moment and you run your computer model to predict the weather for the next month in New York City. The model might tell you that tomorrow will be warm and sunny, with cooling during the next week and a major storm passing through a month from now. But suppose you run the model again, making one minor change in the initial conditions-say, a small change in the wind speed somewhere over Brazil. ⬛ [A] This slightly different initial condition will not change the weather prediction for tomorrow in New York City. ⬛ [B] But for next month's weather, the two predictions may not agree at all! [C] ⬛
                        [6] The disagreement between the two predictions arises because the laws governing weather can cause very tiny changes in initial conditions to be greatly magnified over time. ⬛ [D] This extreme sensitivity to initial conditions is sometimes called the butterfly effect: If initial conditions change by as much as the flap of a butterfly's wings, the resulting prediction may be very different.
                        [7] The butterfly effect is a hallmark of chaotic systems. Simple systems are described by linear equations in which, for example, increasing a cause produces a proportional increase in an effect. In contrast, chaotic systems are described by nonlinear equations, which allow for subtler and more intricate interactions. For example, the economy is nonlinear because a rise in interest rates does not automatically produce a corresponding change in consumer spending. Weather is nonlinear because a change in the wind speed in one location does not automatically produce a corresponding change in another location.
                        [8] Despite their name, chaotic systems are not necessarily random In fact, many chaotic systems have a kind of underlying order that explains the general features of their behavior even while details at any particular moment remain unpredictable. In a sense, many chaotic systems-like the weatherare "predictably unpredictable." Our understanding of chaotic systems is increasing at a tremendous rate, but much remains to be learned about them.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "For next week's weather, the new model may yield a slightly different prediction.",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`

                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "Because weather is a chaotic system, it is very difficult to predict .",
                    options: [
                        "The accuracy of weather prediction will improve as we make progress in the application of computers to equations.",
                        "It is very easy to make predictions about the location of a car when you know where it is and how fast it is going.",
                        "A slight variation in initial conditions will cause a very different prediction for weather over the long term.",
                        "Because weather is chaotic but not random, it may be described by nonlinear equations that provide for sensitive interactions.",
                        "The economic system demonstrates chaotic behavior, and it must be represented by a nonlinear equation.",
                        "Weather is predictable only within a time frame of a few weeks because of the nature of scientific prediction."
                    ],
                    correct_answer: "DFC",
                    answer_explanation: dedent`
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            //B15, modalTest4, readingPassage3
            id: 13,
            passage: dedent`
                [1] Although the round arch was used by the ancient peoples of Mesopotamia several centuries before our common era, it was most fully developed by the Romans, who perfected the form in the 2nd century s.c.E. The arch has many virtues. In addition to being an attractive form, it enables the architect to open up fairly large spaces in a wall without risking the building's structural soundness. These spaces admit light, reduce the weight of the walls, and decrease the amount of material needed. As utilized by the Romans, the arch is a perfect semicircle, although it may seem elongated if it rests on columns. It is constructed from wedge-shaped pieces of stone that meet at an angle always perpendicular to the curve of the arch. Because of tensions and compressions inherent in the form, the arch is stable only when it is complete, when the topmost stone, the keystone, has been set in place. For this reason an arch under construction must be supported from below, usually by a wooden framework.
                [2] Among the most elegant and enduring of Roman structures based on the arch is the Pont du Gard at Nimes, France, built about 15 c.E. when the empire was nearing its farthest expansion. At this time, Roman industry, commerce, and agriculture were at their peak. Engineering was applied to an ambitious system of public-works projects, not just in Italy but in the outlying areas as well. The Pont du Gard functioned as an aqueduct, a structure meant to transport water, and its lower level served as a footbridge across the river. That it stands today virtually intact after nearly two thousand years (and is crossed by cyclists on the route of the famous Tour de France bicycle race) testifies to the Romans' brilliant engineering skills. Visually, the Pont du Gard exemplifies the best qualities of arch construction. Solid and heavy, obviously durable, it is shot through with open spaces that make it seem light and its weight-bearing capabilities effortless.
                [3] When the arch is extended in depth-when it is, in reality, many arches placed flush one behind the other-the result is called a barrel vault. This vault construction makes it possible to create large interior spaces. The Romans made great use of the barrel vault, but for its finest expression we look many hundreds of years later, to the churches of the Middle Ages.
                [4] The church of Sainte-Foy, in the French city of Conques, is an example of the style prevalent throughout Western Europe from about 1050 to 1200-a style known as Romanesque. Earlier churches had used the Roman round arch and barrel vault so as to add height to their churches. Until this period most churches has beamed wooden roots, which not only posed a threat of fire but also limited the height to which architects could aspire. With the stone barrel vault, they could achieve the soaring, majestic space we see in the nave of Sainte-Foy to span the spaces between the interior columns that ultimately held up the roof. With the Romanesque style, builders set a stone barrel vault as a ceiling over the nave, hiding the roof structure from view. The barrel vault unified the interior visually, providing a soaring, majestic climax to the rhythms announced by the arches below.
                [5] While the round arch and vault of the Romanesque era solved many problems and made many things possible, they nevertheless had certain drawbacks. For one thing, a round arch, to be stable, must be a semicircle; therefore, the height of the arch is limited by its width. Two other difficulties were weight and darkness. Barrel vaults are both literally and visually heavy, calling for huge masses of stone to maintain their structural stability. They exert an outward thrust all along their base, which builders countered by setting them in massive walls that they dared not weaken with light-admitting openings. The Gothic period in Europe, which followed the Romanesque, solved these problems with the pointed arch.
                [6] The pointed arch, while seemingly not very different from the round one, offers many advantages. Because the sides arc up to a point, weight is channeled down to the ground at a steeper angle, and therefore the arch can be taller. The vault constructed from such an arch also can be much taller than a barrel vault. Architects of the Gothic period found they did not need heavy masses of material throughout the curve of the vault, as long as the major points of intersection were reinforced.
            `,
            questions: [
                {
                    id: 1,
                    question: "Why does the author mention the 'keystone' in paragraph 1?",
                    options: [
                        "To explain the engineering of an arch",
                        "To provide historical background on arches",
                        "To point out one of the virtues of arches",
                        "To suggest an alternative to the arch"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        The passage states that the keystone is the topmost stone that completes an arch, explaining its role in maintaining the arch's structural stability. This supports option (A).
                
                        ❌ Option B is incorrect because the keystone is explained in an engineering context, not historical background.
                        ❌ Option C is incorrect because the keystone itself is not a virtue but a necessity.
                        ❌ Option D is incorrect because the passage does not suggest replacing the arch.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: "The word 'inherent' in the passage is closest in meaning to",
                    options: [
                        "uncertain",
                        "unsatisfactory",
                        "expansive",
                        "essential"
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        "Inherent" means something that is a fundamental part of something else, which aligns with "essential," making option (D) the best choice.
                
                        ❌ Option A is incorrect because "uncertain" means doubtful, which does not match "inherent."
                        ❌ Option B is incorrect because "unsatisfactory" means not good enough, which is unrelated.
                        ❌ Option C is incorrect because "expansive" refers to being large or wide, which is not the meaning here.
                
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 3,
                    question: "The Pont du Gard mentioned in paragraph 2 has all of the following characteristics EXCEPT",
                    options: [
                        "It was an aqueduct.",
                        "It is still being used.",
                        "It was built 2,000 years ago.",
                        "It was repaired recently."
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        The passage describes the Pont du Gard as an aqueduct built nearly 2,000 years ago and still in use. However, it does not mention any recent repairs, making option (D) the best choice.
                
                        ❌ Option A is incorrect because the passage states that it functioned as an aqueduct.
                        ❌ Option B is incorrect because it mentions that cyclists still use it.
                        ❌ Option C is incorrect because the passage states it was built around 15 C.E.
                
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: "The word 'virtually' in the passage is closest in meaning to",
                    options: [
                        "obviously",
                        "accurately",
                        "routinely",
                        "practically"
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        "Virtually" means "almost" or "practically," making option (D) the best choice.
                
                        ❌ Option A is incorrect because "obviously" implies certainty rather than approximation.
                        ❌ Option B is incorrect because "accurately" refers to precision, which is not the intended meaning.
                        ❌ Option C is incorrect because "routinely" means regularly, which does not fit here.
                
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 5,
                    question: "According to paragraph 3, what is the advantage of a barrel vault?",
                    options: [
                        "It was used in the Middle Ages.",
                        "Many arches were joined.",
                        "The space inside was larger.",
                        "It was a typical Roman look."
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The passage explains that barrel vaults allowed the creation of larger interior spaces, making option (C) the best choice.
                
                        ❌ Option A is incorrect because while barrel vaults were used in the Middle Ages, the question asks about their advantage.
                        ❌ Option B is incorrect because joining arches is a characteristic, not necessarily the advantage.
                        ❌ Option D is incorrect because the focus is on structural benefits, not aesthetics.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 6,
                    question: "The word 'ultimately' in the passage is closest in meaning to",
                    options: [
                        "partially",
                        "frequently",
                        "carefully",
                        "finally"
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        "Ultimately" means "in the end" or "finally," making option (D) the best choice.
                
                        ❌ Option A is incorrect because "partially" means incompletely, which does not match the meaning.
                        ❌ Option B is incorrect because "frequently" refers to repetition, not finality.
                        ❌ Option C is incorrect because "carefully" refers to caution, not a final outcome.
                
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 7,
                    question: "According to paragraph 5, why are Romanesque churches so dark?",
                    options: [
                        "It was a characteristic of construction with pointed arches.",
                        "It was too difficult to make windows in the heavy materials.",
                        "Openings for light could have compromised the structure.",
                        "Reinforcements covered the areas where light could shine in."
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The passage explains that the thick stone walls required for stability limited the number of openings, making option (C) the best choice.
                
                        ❌ Option A is incorrect because pointed arches were a Gothic feature, not Romanesque.
                        ❌ Option B is incorrect because difficulty in making windows is not mentioned as the main reason.
                        ❌ Option D is incorrect because reinforcement is not cited as the reason for limited light.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 8,
                    question: "How did Gothic architects extend the height of their arches?",
                    options: [
                        "By using barrel vaults",
                        "By designing pointed arches",
                        "By including a nave",
                        "By adding windows"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage explains that the pointed arch allowed for greater height by directing weight downward more efficiently, making option (B) the best choice.
                
                        ❌ Option A is incorrect because barrel vaults were used earlier in Romanesque architecture.
                        ❌ Option C is incorrect because the nave is a part of a church, not a method for extending height.
                        ❌ Option D is incorrect because windows were a result of pointed arches, not the method for increasing height.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] Although the round arch was used by the ancient peoples of Mesopotamia several centuries before our common era, it was most fully developed by the Romans, who perfected the form in the 2nd century s.c.E. The arch has many virtues. In addition to being an attractive form, it enables the architect to open up fairly large spaces in a wall without risking the building's structural soundness. These spaces admit light, reduce the weight of the walls, and decrease the amount of material needed. As utilized by the Romans, the arch is a perfect semicircle, although it may seem elongated if it rests on columns. It is constructed from wedge-shaped pieces of stone that meet at an angle always perpendicular to the curve of the arch. Because of tensions and compressions inherent in the form, the arch is stable only when it is complete, when the topmost stone, the keystone, has been set in place. For this reason an arch under construction must be supported from below, usually by a wooden framework.
                        [2] Among the most elegant and enduring of Roman structures based on the arch is the Pont du Gard at Nimes, France, built about 15 c.E. when the empire was nearing its farthest expansion. At this time, Roman industry, commerce, and agriculture were at their peak. Engineering was applied to an ambitious system of public-works projects, not just in Italy but in the outlying areas as well. The Pont du Gard functioned as an aqueduct, a structure meant to transport water, and its lower level served as a footbridge across the river. That it stands today virtually intact after nearly two thousand years (and is crossed by cyclists on the route of the famous Tour de France bicycle race) testifies to the Romans' brilliant engineering skills. Visually, the Pont du Gard exemplifies the best qualities of arch construction. Solid and heavy, obviously durable, it is shot through with open spaces that make it seem light and its weight-bearing capabilities effortless.
                        [3] When the arch is extended in depth-when it is, in reality, many arches placed flush one behind the other-the result is called a barrel vault. This vault construction makes it possible to create large interior spaces. The Romans made great use of the barrel vault, but for its finest expression we look many hundreds of years later, to the churches of the Middle Ages.
                        [4] The church of Sainte-Foy, in the French city of Conques, is an example of the style prevalent throughout Western Europe from about 1050 to 1200-a style known as Romanesque. Earlier churches had used the Roman round arch and barrel vault so as to add height to their churches. Until this period most churches has beamed wooden roots, which not only posed a threat of fire but also limited the height to which architects could aspire. With the stone barrel vault, they could achieve the soaring, majestic space we see in the nave of Sainte-Foy to span the spaces between the interior columns that ultimately held up the roof. With the Romanesque style, builders set a stone barrel vault as a ceiling over the nave, hiding the roof structure from view. The barrel vault unified the interior visually, providing a soaring, majestic climax to the rhythms announced by the arches below.
                        [5] While the round arch and vault of the Romanesque era solved many problems and made many things possible, they nevertheless had certain drawbacks. For one thing, a round arch, to be stable, must be a semicircle; therefore, the height of the arch is limited by its width. Two other difficulties were weight and darkness. Barrel vaults are both literally and visually heavy, calling for huge masses of stone to maintain their structural stability. They exert an outward thrust all along their base, which builders countered by setting them in massive walls that they dared not weaken with light-admitting openings. The Gothic period in Europe, which followed the Romanesque, solved these problems with the pointed arch.
                        [6] The pointed arch, while seemingly not very different from the round one, offers many advantages. Because the sides arc up to a point, weight is channeled down to the ground at a steeper angle, and therefore the arch can be taller. The vault constructed from such an arch also can be much taller than a barrel vault. Architects of the Gothic period found they did not need heavy masses of material throughout the curve of the vault, as long as the major points of intersection were reinforced.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "These reinforcements, called ribs, are visible in the nave ceiling of Reims Cathedral",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'D',
                    answer_explanation: dedent`

                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "Because weather is a chaotic system, it is very difficult to predict .",
                    options: [
                        "The Romans perfected the round arch, which allowed for structurally sound, open spaces in architecture, later influencing medieval church construction.",
                        "The Pont du Gard exemplifies Roman engineering skills, demonstrating both functionality as an aqueduct and the aesthetic qualities of arch construction.",
                        "The Gothic period improved upon Romanesque architecture by using the pointed arch, which allowed for taller and lighter structures.",
                        "Roman arches were unstable and often collapsed, leading architects to abandon their use in favor of wooden structures.",
                        "The round arch was originally developed during the Gothic period and was later modified by Roman architects.",
                        "The Romanesque style rejected Roman arches in favor of simpler, less ambitious wooden structures."
                    ],
                    correct_answer: "ABC",
                    answer_explanation: dedent`
                        ✅ Correct Summaries:
                        "The Romans perfected the round arch, which allowed for structurally sound, open spaces in architecture, later influencing medieval church construction."

                        This is correct because the passage explains how Romans fully developed the round arch, which enabled large openings while maintaining structural integrity (paragraph 1). It also describes how this innovation influenced medieval church architecture, specifically the Romanesque style (paragraphs 3 and 4).
                        "The Pont du Gard exemplifies Roman engineering skills, demonstrating both functionality as an aqueduct and the aesthetic qualities of arch construction."

                        This is correct because paragraph 2 highlights the Pont du Gard’s function as an aqueduct and footbridge, as well as its impressive durability and aesthetic balance between solidity and openness.
                        "The Gothic period improved upon Romanesque architecture by using the pointed arch, which allowed for taller and lighter structures."

                        This is correct because paragraph 6 explains how the pointed arch solved the structural issues of the Romanesque round arch, enabling taller and lighter buildings.
                        ❌ Incorrect Summaries:
                        "Roman arches were unstable and often collapsed, leading architects to abandon their use in favor of wooden structures."

                        This is incorrect because the passage states that Roman arches were highly stable once complete, and they were widely used (paragraph 1). The passage also contrasts them with wooden structures, which were more vulnerable to fire (paragraph 4).
                        "The round arch was originally developed during the Gothic period and was later modified by Roman architects."

                        This is incorrect because the passage explicitly states that the round arch was used in Mesopotamia before the Romans, who later perfected it (paragraph 1). The Gothic period actually introduced the pointed arch (paragraph 6).
                        "The Romanesque style rejected Roman arches in favor of simpler, less ambitious wooden structures."

                        This is incorrect because the passage states the Romanesque style embraced and enhanced the Roman arch, using stone barrel vaults instead of wooden roofs (paragraph 4).
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            //B15, modalTest4, readingPassage4
            id: 14,
            passage: dedent`
                [1] Analysis of birds and of reptilian fossils indicate that birds belong to the group called therapods. Several species of dinosaurs closely related to birds had feathers with vanes, and a wider range of species had filamentous feathers. Such findings imply that feathers evolved long before powered flight. Among the possible functions of these early feathers were insulation, camouflage, and courtship display.
                [2] Many of the characteristics of birds are adaptations that facilitate flight, including weight-saving modifications that make flying more efficient. For example, birds lack a urinary bladder, and the females of most species have only one ovary. Living birds are also toothless, an adaptation that trims the weight of the head.
                [3] A bird's most obvious adaptations for flight are its wings and feathers. Feathers are made of the protein B-keratin, which is also found in the scales of other reptiles. The shape and arrangement of the feathers form the wings into airfoils, and they illustrate some of the same principles of aerodynamics as the wings of an airplane. Power for flapping the wings comes from contractions of large pectoral (breast) muscles anchored to a keel on the sternum {breastbone). Some birds, such as eagles and hawks, have wings adapted for soaring on air currents and flap their wings only occasionally; other birds, including hummingbirds, must flap their wings continuously to stay aloft. Among the fastest birds are the appropriately named swifts, which can fly up to 170 km/hr.
                [4] Flight provides numerous benefits. It enhances hunting and scavenging; many birds consume flying insects, an abundant, highly nutritious food resource. Flight also provides ready escape from earthbound predators and enables some birds to migrate great distances to exploit different food resources and seasonal breeding areas.
                [5] Flying requires a great expenditure of energy from an active metabolism. Birds are endothermic; they use their own metabolic heat to maintain a high, constant body temperature. Feathers, and in some species layers of fat, provide insulation that enables birds to retain their body heat. The lungs have tiny tubes leading to and from elastic air sacs that improve airflow and oxygen uptake. This efficient respiratory system with a four-chambered heart keep tissues well supplied with oxygen and nutrients, supporting a high rate of metabolism.
                [6] Flight also requires both acute vision and fine muscle control. Birds have excellent eyesight. The visual and motor areas of the brain are well developed, and the brain is proportionately larger than those of amphibians and nonbird reptiles. Birds generally display very complex behaviors, particularly during breeding season, when they engage in elaborate courtship rituals.
                [7] How did flight evolve in the therapods? In one scenario, feathers may have enabled the small, running dinosaurs chasing prey or escaping predators to gain extra lift as they jumped up into the air. Or, small dinosaurs could have gained traction as they ran up hills by flapping their feathered forelimbs-a behavior seen in birds today. In a third scenario, some dinosaurs could have climbed trees and glided, aided by feathers. Whether birds took to the air from the ground up or from the trees down, an essential question being studied by scientists ranging from paleontologists to engineers is how their efficient flight stroke evolved.
                [8] By 150 million years ago, feathered therapods had evolved into birds. Archaeopteryx, which was discovered in a German limestone quarry in 1861, remains the earliest known bird. It had feathered wings but retained ancestral characteristics such as teeth, clawed digits in its wings, and a long tail. Archaeopteryx flew well at high speeds, but unlike a present-day bird, it could not take off from a standing position. Fossils of later birds from the Cretaceous show a gradual loss of certain ancestral dinosaur features, such as teeth and clawed forelimbs, as well as the acquisition of innovations found in extant birds, including a short tail covered by a fan of feathers.
            `,
            questions: [
                {
                    id: 1,
                    question: "Which of the sentences below best expresses the information in the highlighted statement in the passage?",
                    options: [
                        "Results of investigations indicate that birds probably flew before they had feathers.",
                        "Analysis suggests that birds did not fly immediately after they had developed feathers.",
                        "The time frame for the evolution of feathers is not clear from the studies cited.",
                        "According to researchers, birds developed feathers in order to achieve flight."
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage states that feathers evolved long before powered flight, implying that birds did not immediately fly upon developing feathers. This supports option (B).
                
                        ❌ Option A is incorrect because there is no claim that birds flew before having feathers.
                        ❌ Option C is incorrect because the evolution of feathers is described clearly.
                        ❌ Option D is incorrect because feathers may have evolved for other purposes, not just flight.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: "According to paragraph 2, how did birds adapt to achieve efficient flight?",
                    options: [
                        "They developed new, lighter organs.",
                        "Their muscles became smaller over time.",
                        "Most of their weight was distributed in their heads.",
                        "Heavy teeth disappeared during evolution."
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        The passage states that living birds are toothless, which helps reduce the weight of the head and makes flight more efficient, supporting option (D).
                
                        ❌ Option A is incorrect because lighter organs are not mentioned.
                        ❌ Option B is incorrect because reducing muscle size is not a stated adaptation.
                        ❌ Option C is incorrect because weight distribution in the head is not a factor.
                
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 3,
                    question: "In paragraph 3, how does the author explain the term 'keratin'?",
                    options: [
                        "By identifying it in feathers and scales",
                        "By comparing it to airfoils",
                        "By providing a definition in the text",
                        "By describing the way that it looks"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        The passage states that feathers are made of keratin, which is also found in reptile scales, identifying it through its occurrence in both, making option (A) the best choice.
                
                        ❌ Option B is incorrect because keratin is not compared to airfoils.
                        ❌ Option C is incorrect because no explicit definition is provided.
                        ❌ Option D is incorrect because its appearance is not described.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: "According to paragraph 3, which of the following is true about the wings of birds?",
                    options: [
                        "All birds flap their wings constantly by using breast muscles.",
                        "Eagles and hawks have wings that propel them at 170 km/hr.",
                        "The airfoils of birds function like the wings on airplanes.",
                        "Wings are attached to airfoils in the bird's skeletal structure."
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The passage states that the shape and arrangement of feathers form wings into airfoils, illustrating aerodynamics similar to airplane wings. This supports option (C).
                
                        ❌ Option A is incorrect because some birds soar without flapping constantly.
                        ❌ Option B is incorrect because swifts, not eagles or hawks, are noted for their speed.
                        ❌ Option D is incorrect because airfoils describe the function of wings, not their attachment.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 5,
                    question: "The word 'elaborate' in the passage is opposite in meaning to",
                    options: [
                        "simple",
                        "quiet",
                        "sad",
                        "short"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        "Elaborate" means detailed or intricate, making "simple" its opposite. Thus, option (A) is the best answer.
                
                        ❌ Option B is incorrect because "quiet" is unrelated.
                        ❌ Option C is incorrect because "sad" does not relate to complexity.
                        ❌ Option D is incorrect because "short" refers to length, not complexity.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 6,
                    question: "The word 'essential' in the passage is closest in meaning to",
                    options: [
                        "very clear",
                        "very important",
                        "very difficult",
                        "very new"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        "Essential" means something that is crucial or very important, making option (B) the best choice.
                
                        ❌ Option A is incorrect because "very clear" does not capture the meaning of necessity.
                        ❌ Option C is incorrect because "very difficult" refers to complexity, not importance.
                        ❌ Option D is incorrect because "very new" relates to novelty, not necessity.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 7,
                    question: "According to the passage, how did therapods develop flight?",
                    options: [
                        "Engineers believe that they flapped their wings to gain lift.",
                        "Scientists have proposed several different possibilities for flight.",
                        "Paleontologists think that they glided down from high trees.",
                        "Researchers confirm that flight began with running and jumping."
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage presents multiple theories on how therapods developed flight, indicating that scientists have proposed different possibilities, supporting option (B).
                
                        ❌ Option A is incorrect because engineers are only studying the mechanics, not confirming a specific theory.
                        ❌ Option C is incorrect because tree gliding is just one of multiple possibilities.
                        ❌ Option D is incorrect because the passage does not confirm a single origin of flight.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 8,
                    question: "According to paragraph 8, what can be inferred about Archaeopteryx?",
                    options: [
                        "A feathered fantail was prominent.",
                        "Lift off was achieved by running or gliding.",
                        "Teeth had been replaced by a beak.",
                        "The habitat extended throughout Europe."
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage states that Archaeopteryx could not take off from a standing position, implying that it used running or gliding to achieve lift-off, supporting option (B).
                
                        ❌ Option A is incorrect because a feathered fantail is not mentioned.
                        ❌ Option C is incorrect because Archaeopteryx still had teeth.
                        ❌ Option D is incorrect because its habitat is not described as extending across Europe.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] Analysis of birds and of reptilian fossils indicate that birds belong to the group called therapods. Several species of dinosaurs closely related to birds had feathers with vanes, and a wider range of species had filamentous feathers. Such findings imply that feathers evolved long before powered flight. Among the possible functions of these early feathers were insulation, camouflage, and courtship display.
                        [2] Many of the characteristics of birds are adaptations that facilitate flight, including weight-saving modifications that make flying more efficient. For example, birds lack a urinary bladder, and the females of most species have only one ovary. Living birds are also toothless, an adaptation that trims the weight of the head.
                        [3] A bird's most obvious adaptations for flight are its wings and feathers. Feathers are made of the protein B-keratin, which is also found in the scales of other reptiles. The shape and arrangement of the feathers form the wings into airfoils, and they illustrate some of the same principles of aerodynamics as the wings of an airplane. Power for flapping the wings comes from contractions of large pectoral (breast) muscles anchored to a keel on the sternum {breastbone). Some birds, such as eagles and hawks, have wings adapted for soaring on air currents and flap their wings only occasionally; other birds, including hummingbirds, must flap their wings continuously to stay aloft. Among the fastest birds are the appropriately named swifts, which can fly up to 170 km/hr.
                        [4] Flight provides numerous benefits. It enhances hunting and scavenging; many birds consume flying insects, an abundant, highly nutritious food resource. Flight also provides ready escape from earthbound predators and enables some birds to migrate great distances to exploit different food resources and seasonal breeding areas.
                        [5] Flying requires a great expenditure of energy from an active metabolism. Birds are endothermic; they use their own metabolic heat to maintain a high, constant body temperature. Feathers, and in some species layers of fat, provide insulation that enables birds to retain their body heat. The lungs have tiny tubes leading to and from elastic air sacs that improve airflow and oxygen uptake. This efficient respiratory system with a four-chambered heart keep tissues well supplied with oxygen and nutrients, supporting a high rate of metabolism.
                        [6] Flight also requires both acute vision and fine muscle control. Birds have excellent eyesight. The visual and motor areas of the brain are well developed, and the brain is proportionately larger than those of amphibians and nonbird reptiles. Birds generally display very complex behaviors, particularly during breeding season, when they engage in elaborate courtship rituals.
                        [7] How did flight evolve in the therapods? In one scenario, feathers may have enabled the small, running dinosaurs chasing prey or escaping predators to gain extra lift as they jumped up into the air. Or, small dinosaurs could have gained traction as they ran up hills by flapping their feathered forelimbs-a behavior seen in birds today. In a third scenario, some dinosaurs could have climbed trees and glided, aided by feathers. Whether birds took to the air from the ground up or from the trees down, an essential question being studied by scientists ranging from paleontologists to engineers is how their efficient flight stroke evolved.
                        [8] By 150 million years ago, feathered therapods had evolved into birds. Archaeopteryx, which was discovered in a German limestone quarry in 1861, remains the earliest known bird. It had feathered wings but retained ancestral characteristics such as teeth, clawed digits in its wings, and a long tail. Archaeopteryx flew well at high speeds, but unlike a present-day bird, it could not take off from a standing position. Fossils of later birds from the Cretaceous show a gradual loss of certain ancestral dinosaur features, such as teeth and clawed forelimbs, as well as the acquisition of innovations found in extant birds, including a short tail covered by a fan of feathers.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "Furthermore, migration allows birds to avoid climates that are too hot or too cold during certain seasons.",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'C',
                    answer_explanation: dedent`

                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "Birds evolved 150 million years ago.",
                    options: [
                        "Birds and reptiles are most probably related.",
                        "Feathers are among the most unusual evolutionary changes.",
                        "Many structural adaptations were required for birds to fly.",
                        "Therapods are relatively small, meat-eating dinosaurs.",
                        "There are a number of advantages for creatures that fly.",
                        "Migration patterns are typical of many species of birds."
                    ],
                    correct_answer: "ACE",
                    answer_explanation: dedent`
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            //B15, modalTest5, readingPassage2, skipped rP1
            id: 15,
            passage: dedent`
                [1] One of the most striking personalities in the development of early-twentiethcentury architecture was Frank Lloyd Wright (1867-1959). Wright moved to Chicago, where he eventually joined the firm headed by Louis Sullivan. Wright set out to create "architecture of democracy." Always a believer in architecture as "natural" and "organic," Wright saw it as serving free individuals who have the right to move within a "free" space, envisioned as a nonsymmetrical design interacting spatially with its natural surroundings. He sought to develop an organic unity of planning, structure, materials, and site. Wright identified the principle of continuity as fundamental to understanding his view of organic unity: "Classic architecture was all fixation . ... Now why not let walls, ceilings, floors become seen as component parts of each other? ... This ideal, profound in its architectural implications . .. I called .. . continuity."
                [2] Wright manifested his vigorous originality early, and by 1900 he had arrived at a style entirely his own. In his work during the first decade of the twentieth century, his cross-axial plan and his fabric of continuous roof planes and screens defined a new domestic architecture.
                [3] Wright fully expressed these elements and concepts in Robie House, built between 1907 and 1909. Like other buildings in the Chicago area he designed at about the same time, he called this home a "prairie house." Wright conceived the long, sweeping ground-hugging lines, unconfined by abrupt wall limits, as reaching out toward and capturing the expansiveness of the Midwest's great flatlands. Abandoning all symmetry, the architect eliminated a facade, extended the roofs far beyond the walls, and all but concealed the entrance. Wright filled the "wandering" plan of the Robie House with intricately joined spaces (some large and open, others closed), grouped freely around a great central fireplace. (He believed strongly in the hearth's age-old domestic significance.) Wright designed enclosed patios, overhanging roofs, and strip windows to provide unexpected light sources and glimpses of the outdoors as people move through the interior space. These elements, together with the open ground plan, create a sense of space-in-motion inside and out. The flow of interior space determined the sharp, angular placement of exterior walls.
                [4] The Robie House is a good example of Wright's "naturalism," his adjusting of a building to its site. In this particular case, however, the confines of the city lot constrained the building-to-site relationship more than did the sites of some of Wright's more expansive suburban and country homes. The Kaufmann House, nicknamed "Fallingwater" and designed as a weekend retreat at Bear Run near Pittsburgh, is a prime example of the latter. Perched on a rocky hillside over a small waterfall, this structure extends the Robie House's blocky masses in all four directions. Since the completion of this residence, architects and the public alike have marveled at the fluid interplay between interior and exterior. In designing Fallingwater, Wright, in keeping with his commitment to an "architecture of democracy," sought to incorporate the structure more fully into the site, thereby ensuring a fluid, dynamic exchange between the interior of the house and the natural environment outside. Rather than build a house overlooking or next to the waterfall, Wright decided to build it over the waterfall, because he believed that the inhabitants would become desensitized to the waterfall's presence and power if they merely overlooked it. To take advantage of the location, Wright designed a series of terraces on three levels from a central core structure. The contrast in textures between concrete, painted metal, and natural stones in its walls enliven its shapes, as does Wright's use of fulllength strip windows to create a stunning interweaving of interior and exterior space.
                [5] The implied message of Wright's new architecture was space, not mass-a space designed to fit the patron's life and enclosed and divided as required. Wright took special pains to meet his client's requirements, often designing all the accessories of a house. In the late 1930s, he acted on a cherished dream to provide good architectural design for less prosperous people by adapting the ideas of his prairie house to plans for smaller, less expensive dwellings. The publication of Wright's plans brought him a measure of fame in Europe, especially in Holland and Germany. The issuance in Berlin in 1910 of a portfolio of his work and an exhibition of his designs the following year stimulated younger architects to adopt some of his ideas about open plans. Some forty years before his career ended, his work was already of revolutionary significance.
            `,
            questions: [
                {
                    id: 1,
                    question: "Which of the following is the main idea of this passage?",
                    options: [
                        "The design of Robie House",
                        "Twentieth-century architecture",
                        "Frank Lloyd Wright's work",
                        "Residences of the Midwest"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The passage focuses on Frank Lloyd Wright’s architectural philosophy, innovations, and specific works like Robie House and Fallingwater, making option (C) the best choice.
                
                        ❌ Option A is incorrect because Robie House is only one example of his work.
                        ❌ Option B is incorrect because the passage focuses on Wright rather than the entire period.
                        ❌ Option D is incorrect because the focus is not on general Midwest residences.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: "What did Wright mean by the term 'organic' in paragraph 1?",
                    options: [
                        "Fixation",
                        "Ideal",
                        "Continuity",
                        "Classic"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        Wright described organic architecture as one where walls, ceilings, and floors are components of each other, emphasizing continuity, making option (C) the best choice.
                
                        ❌ Option A is incorrect because fixation implies rigidity, which Wright opposed.
                        ❌ Option B is incorrect because while organic architecture was an ideal, continuity defines it better.
                        ❌ Option D is incorrect because classic architecture is contrasted with organic architecture.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 3,
                    question: "The phrase 'his own' in the passage refers to",
                    options: [
                        "style",
                        "originality",
                        "work",
                        "plan"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        The passage states that by 1900, Wright had developed a style entirely his own, making option (A) the best choice.
                
                        ❌ Option B is incorrect because it refers to originality, not style.
                        ❌ Option C is incorrect because “his work” is a broader term than what the phrase refers to.
                        ❌ Option D is incorrect because "plan" is not mentioned in this context.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: "It can be inferred from paragraph 3 that the author gives details for the design of the Robie House for which reason?",
                    options: [
                        "The design included both indoor and outdoor plans.",
                        "Robie House included many of Wright's original ideas.",
                        "All of the accessories of the house were included in the design.",
                        "Wright lived in Robie House between 1907 and 1909."
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage describes several unique architectural elements of Robie House that reflect Wright’s original ideas, supporting option (B).
                
                        ❌ Option A is incorrect because it does not emphasize Wright’s originality.
                        ❌ Option C is incorrect because accessories are mentioned later, not in this section.
                        ❌ Option D is incorrect because Wright did not live in Robie House.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 5,
                    question: "The word 'prime' in the passage is closest in meaning to",
                    options: [
                        "most important",
                        "most numerous",
                        "most common",
                        "most accepted"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        "Prime example" suggests that Fallingwater is the most important or outstanding representation of Wright’s naturalistic architecture, making option (A) the best choice.
                
                        ❌ Option B is incorrect because it does not refer to quantity.
                        ❌ Option C is incorrect because it does not suggest commonality.
                        ❌ Option D is incorrect because "prime" means outstanding, not widely accepted.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 6,
                    question: "How was 'Fallingwater' different from the 'Robie House'?",
                    options: [
                        "'Fallingwater' was an earlier example of naturalism than 'Robie House.'",
                        "'Fallingwater' was much smaller than 'Robie House' because it was a retreat.",
                        "'Fallingwater' was better suited to the site with views through huge windows.",
                        "'Fallingwater' was built with an open floor plan, unlike 'Robie House.'"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The passage explains how Fallingwater was designed to interact with its natural surroundings more fully than Robie House, making option (C) the best choice.
                
                        ❌ Option A is incorrect because Robie House was an earlier example of Wright's ideas.
                        ❌ Option B is incorrect because size is not the main distinction.
                        ❌ Option D is incorrect because both houses had open floor plans.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 7,
                    question: "According to paragraph 5, why did Wright's work become well known in Europe?",
                    options: [
                        "His plans were published and he held exhibitions.",
                        "He visited several universities and gave lectures.",
                        "His revolutionary ideas appealed to younger architects.",
                        "He was already very famous in the United States."
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        The passage states that Wright’s plans were published in Berlin, and an exhibition followed, making option (A) the best choice.
                
                        ❌ Option B is incorrect because there is no mention of university visits or lectures.
                        ❌ Option C is incorrect because although younger architects were influenced, this was not the primary reason for his recognition.
                        ❌ Option D is incorrect because his international fame is emphasized.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 8,
                    question: "According to the passage, a prairie house has all of the following features EXCEPT",
                    options: [
                        "a central fireplace",
                        "enclosed patios",
                        "an inviting entrance",
                        "strip windows"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The passage describes the entrance of Robie House as being "all but concealed," meaning it was not designed to be inviting, making option (C) the best choice.
                
                        ❌ Option A is incorrect because Wright emphasized the importance of the central fireplace.
                        ❌ Option B is incorrect because enclosed patios are mentioned as a feature.
                        ❌ Option D is incorrect because strip windows are described as part of the design.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] One of the most striking personalities in the development of early-twentiethcentury architecture was Frank Lloyd Wright (1867-1959). Wright moved to Chicago, where he eventually joined the firm headed by Louis Sullivan. Wright set out to create "architecture of democracy." Always a believer in architecture as "natural" and "organic," Wright saw it as serving free individuals who have the right to move within a "free" space, envisioned as a nonsymmetrical design interacting spatially with its natural surroundings. He sought to develop an organic unity of planning, structure, materials, and site. Wright identified the principle of continuity as fundamental to understanding his view of organic unity: "Classic architecture was all fixation . ... Now why not let walls, ceilings, floors become seen as component parts of each other? ... This ideal, profound in its architectural implications . .. I called .. . continuity."
                        [2] Wright manifested his vigorous originality early, and by 1900 he had arrived at a style entirely his own. In his work during the first decade of the twentieth century, his cross-axial plan and his fabric of continuous roof planes and screens defined a new domestic architecture.
                        [3] Wright fully expressed these elements and concepts in Robie House, built between 1907 and 1909. Like other buildings in the Chicago area he designed at about the same time, he called this home a "prairie house." Wright conceived the long, sweeping ground-hugging lines, unconfined by abrupt wall limits, as reaching out toward and capturing the expansiveness of the Midwest's great flatlands. Abandoning all symmetry, the architect eliminated a facade, extended the roofs far beyond the walls, and all but concealed the entrance. Wright filled the "wandering" plan of the Robie House with intricately joined spaces (some large and open, others closed), grouped freely around a great central fireplace. ⬛ [A] (He believed strongly in the hearth's age-old domestic significance.) Wright designed enclosed patios, overhanging roofs, and strip windows to provide unexpected light sources and glimpses of the outdoors as people move through the interior space. ⬛ [B] These elements, together with the open ground plan, create a sense of space-in-motion inside and out. ⬛ [C] The flow of interior space determined the sharp, angular placement of exterior walls. [D] ⬛
                        [4] The Robie House is a good example of Wright's "naturalism," his adjusting of a building to its site. In this particular case, however, the confines of the city lot constrained the building-to-site relationship more than did the sites of some of Wright's more expansive suburban and country homes. The Kaufmann House, nicknamed "Fallingwater" and designed as a weekend retreat at Bear Run near Pittsburgh, is a prime example of the latter. Perched on a rocky hillside over a small waterfall, this structure extends the Robie House's blocky masses in all four directions. Since the completion of this residence, architects and the public alike have marveled at the fluid interplay between interior and exterior. In designing Fallingwater, Wright, in keeping with his commitment to an "architecture of democracy," sought to incorporate the structure more fully into the site, thereby ensuring a fluid, dynamic exchange between the interior of the house and the natural environment outside. Rather than build a house overlooking or next to the waterfall, Wright decided to build it over the waterfall, because he believed that the inhabitants would become desensitized to the waterfall's presence and power if they merely overlooked it. To take advantage of the location, Wright designed a series of terraces on three levels from a central core structure. The contrast in textures between concrete, painted metal, and natural stones in its walls enliven its shapes, as does Wright's use of fulllength strip windows to create a stunning interweaving of interior and exterior space.
                        [5] The implied message of Wright's new architecture was space, not mass-a space designed to fit the patron's life and enclosed and divided as required. Wright took special pains to meet his client's requirements, often designing all the accessories of a house. In the late 1930s, he acted on a cherished dream to provide good architectural design for less prosperous people by adapting the ideas of his prairie house to plans for smaller, less expensive dwellings. The publication of Wright's plans brought him a measure of fame in Europe, especially in Holland and Germany. The issuance in Berlin in 1910 of a portfolio of his work and an exhibition of his designs the following year stimulated younger architects to adopt some of his ideas about open plans. Some forty years before his career ended, his work was already of revolutionary significance.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "Wright matched his new and fundamental interior spatial arrangement in his exterior treatment.",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'B',
                    answer_explanation: dedent`

                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "By 1900, Frank Lloyd Wright had developed a unique style of architecture.",
                    options: [
                        "Wright spent a few years extending his influence to Europe where he was well known.",
                        "Frank Lloyd Wright had attended the University of Wisconsin prior to taking a position with a Chicago firm.",
                        "Wright became famous for spaces that were true to their organic functions.",
                        "“Fallingwater,” like other suburban and country homes that Wright built, joined the structure to the natural setting.",
                        "Wright was interested in the design of German building blocks for children created by Friedrich Froebel.",
                        "Robie House and other buildings in Chicago were examples of an organic structure called a “prairie house.”"
                    ],
                    correct_answer: "CFD",
                    answer_explanation: dedent`
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            //B15, modalTest5, readingPassage3
            id: 16,
            passage: dedent`
                [1] The status of women in a society depends in large measure on their role in the economy. The reinterpretation of the Paleolithic past centers on new views of the role of women in the food-foraging economy. Amassing critical and previously overlooked evidence from Dolnf Vestonice and the neighboring site of Pavlov, researchers Olga Soffer, James Adovasio, and David Hyland now propose that human survival there had little to do with men hurling spears at big-game animals. Instead, observes Soffer, one of the world's leading authorities on Ice Age hunters and gatherers and an archeologist at the University of Illinois in Champaign-Urbana, it depended largely on women, plants, and a technique of hunting previously invisible in the archeological evidence-net hunting. "This is not the image we've always had of Upper Paleolithic macho guys out killing animals up close and personal," Soffer explains. "Net hunting is communal, and it involves the labor of children and women. And this has lots of implications."
                [2] Many of these implications make her conservative colleagues cringe because they raise serious questions about the focus of previous studies. European archeologists have long concentrated on analyzing broken stone tools and butchered big-game bones, the most plentiful and best preserved relics of the Upper Paleolithic era (which stretched from 40,000 to 12,000 years ago). From these analyses, researchers have developed theories about how these societies once hunted and gathered food. Most researchers ruled out the possibility of women hunters for biological reasons. Adult females, they reasoned, had to devote themselves to breast-feeding and tending infants. "Human babies have always been immature and dependent," says Soffer. "If women are the people who are always involved with biological reproduction and the rearing of the young, then that is going to their behavior. They have to provision that child. For fathers, provisioning is optional."
                [3] To test theories about Upper Paleolithic life, researchers looked to ethnography, the scientific description of modern and historical cultural groups. While the lives of modern hunters do not exactly duplicate those of ancient hunters, they supply valuable clues to universal human behavior. In many historical socities, Soffer observes, women played a key part in net hunting, since the technique did not call for brute strength nor did it place young mothers in a physical peril. Among Australian Aborigines, for example, women as well as men knotted the mesh, laboring for as much as two or three years on a fine net. Among Native American groups, they helped lay out their handiwork on poles across a valley floor. Then the entire camp joined forces as beaters. Fanning out across the valley, men, women, and children alike shouted and screamed, flushing out game and driving it in the direction of the net. "Everybody and their mother could participate," says Soffer. "Some people were beating, others were screaming or holding the net. And once you got the net on these animals, they were immobilized. You didn't need brute force. You could club them, hit them any old way."
                [4] People seldom returned home empty-handed. Researchers living among the net hunting Mbuti in the forests of the Congo report that they capture game every time they lay out their woven traps, scooping up 50 percent of the animals encountered. "Nets are a far more valued item in their panoply of food-producing things than bows and arrows are," says Adovasio. So lethal are these traps that the Mbuti generally rack up more meat than they can consume, trading the surplus with neighbors. Other net hunters traditionally smoked or dried their catch and stored it for leaner times.
                [5] Soffer doubts that the inhabitants of Dolnf V stonice and Pavlov were the only net makers in Ice Age Europe. Camps stretching from Germany to Russia are littered with a notable abundance of small-game bones, from hares to birds like ptarmigan. And at least some of their inhabitants whittled bone tools that look much like the awls and net spacers favored by historical net makers
                [6] Although the full range of their activities is unlikely ever to be known for certain, there is good reason to believe that Ice Age women played a host of powerful roles. And the research that suggests those roles is rapidly changing our mental images of the past. For Soffer and others, these are exciting times.
            `,
            questions: [
                {
                    id: 1,
                    question: "How do Soffer's theories compare with those of more conservative researchers?",
                    options: [
                        "They are in agreement for the most part regarding the activities that women performed.",
                        "Soffer has based her theories on archeological evidence that her colleagues had not considered.",
                        "Conservative researchers are doubtful about the studies of stone tools and big-game bones.",
                        "Her theories are much more difficult to prove because she relies on modern cultural evidence."
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        Soffer's research incorporates overlooked archeological evidence from sites like Dolní Vestonice and Pavlov, which had not been the primary focus of earlier studies, supporting option (B).
                
                        ❌ Option A is incorrect because Soffer's theories challenge previous views.
                        ❌ Option C is incorrect because conservative researchers focused on stone tools and bones rather than doubting them.
                        ❌ Option D is incorrect because she relies on both archeological and modern cultural evidence.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: "The word 'implications' in the passage is closest in meaning to",
                    options: [
                        "defects",
                        "advantages",
                        "suggestions",
                        "controversies"
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The word "implications" refers to the possible meanings or consequences of Soffer’s findings, making "suggestions" the best choice.
                
                        ❌ Option A is incorrect because "defects" implies faults, which is not the intended meaning.
                        ❌ Option B is incorrect because "advantages" implies benefits, which does not fit the context.
                        ❌ Option D is incorrect because "controversies" refers to disagreements, while implications can be neutral.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 3,
                    question: "What can be inferred about Dr. Soffer from paragraph 2?",
                    options: [
                        "She does not agree that women should be the primary caretakers for children.",
                        "She is probably not as conservative in her views as many of her colleagues.",
                        "She is most likely a biologist who is doing research on European women.",
                        "She has recently begun studying hunting and gathering in the Upper Paleolithic era."
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage states that many of Soffer's colleagues are conservative and that her ideas challenge traditional views, making option (B) the best choice.
                
                        ❌ Option A is incorrect because she acknowledges that women had responsibilities for children.
                        ❌ Option C is incorrect because she is an archeologist, not a biologist.
                        ❌ Option D is incorrect because she is an established expert in the field.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 4,
                    question: "The word 'constrain' in the passage is closest in meaning to",
                    options: [
                        "limit",
                        "plan",
                        "notice",
                        "improve"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        "Constrain" means to restrict or limit something, making "limit" the best choice.
                
                        ❌ Option B is incorrect because "plan" means to arrange something in advance.
                        ❌ Option C is incorrect because "notice" means to observe something.
                        ❌ Option D is incorrect because "improve" means to enhance, which is the opposite of "constrain."
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 5,
                    question: "Based on the information in paragraph 3, which of the following best explains the term 'net hunting'?",
                    options: [
                        "An approach to hunting developed by Australian fishermen",
                        "A very dangerous method of hunting large animals",
                        "A way for the camp to protect women and children from wild animals",
                        "A hunting technique that includes the entire community"
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        The passage describes net hunting as a method that involves men, women, and children, making option (D) the best choice.
                
                        ❌ Option A is incorrect because net hunting was used for land animals, not fish.
                        ❌ Option B is incorrect because net hunting is safer than traditional hunting.
                        ❌ Option C is incorrect because the focus is on catching prey, not protection.
                
                        Thus, option (D) is the best answer.
                    `
                },
                {
                    id: 6,
                    question: "Why does the author mention 'Native American and Aborigine' groups in paragraph 3?",
                    options: [
                        "To give examples of modern groups in which women participate in net hunting",
                        "To demonstrate how net hunting should be carried out in modern societies",
                        "To describe net hunting techniques that protect the women in the group",
                        "To contrast their net hunting techniques with those of the people in the Congo"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        The passage cites these groups as examples where women took part in net hunting, supporting option (A).
                
                        ❌ Option B is incorrect because the passage does not prescribe modern hunting methods.
                        ❌ Option C is incorrect because net hunting is not primarily about protection.
                        ❌ Option D is incorrect because the passage does not contrast their techniques with those of the Congo.
                
                        Thus, option (A) is the best answer.
                    `
                },
                {
                    id: 7,
                    question: "According to paragraph 4, which of the following is true about hunting in the Congo?",
                    options: [
                        "The Mbuti value their nets almost as much as their bows and arrows.",
                        "Trade with other tribes is limited because all food must be stored.",
                        "Net hunters are successful in capturing half of their prey.",
                        "Vegetables are the staple part of the diet for the Mbuti people."
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        The passage states that Mbuti net hunters capture game 50% of the time, making option (C) the best choice.
                
                        ❌ Option A is incorrect because nets are valued more than bows and arrows.
                        ❌ Option B is incorrect because trade is mentioned as an advantage, not a limitation.
                        ❌ Option D is incorrect because the passage does not state that vegetables are their staple diet.
                
                        Thus, option (C) is the best answer.
                    `
                },
                {
                    id: 8,
                    question: "According to paragraph 5, why does Soffer conclude that net hunting was widespread in Europe during the Ice Age?",
                    options: [
                        "Because there are a lot of small game still living in Europe",
                        "Because tools to make nets have been found in camps throughout Europe",
                        "Because the bones of small animals were found in Dolní Vestonice and Pavlov",
                        "Because German and Russian researchers have verified her data"
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        The passage states that Soffer's conclusion is based on the presence of net-making tools in multiple archeological sites, making option (B) the best choice.
                
                        ❌ Option A is incorrect because current small-game populations are irrelevant.
                        ❌ Option C is incorrect because bones alone do not prove net hunting.
                        ❌ Option D is incorrect because the passage does not mention verification from German and Russian researchers.
                
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] The status of women in a society depends in large measure on their role in the economy. The reinterpretation of the Paleolithic past centers on new views of the role of women in the food-foraging economy. Amassing critical and previously overlooked evidence from Dolnf Vestonice and the neighboring site of Pavlov, researchers Olga Soffer, James Adovasio, and David Hyland now propose that human survival there had little to do with men hurling spears at big-game animals. Instead, observes Soffer, one of the world's leading authorities on Ice Age hunters and gatherers and an archeologist at the University of Illinois in Champaign-Urbana, it depended largely on women, plants, and a technique of hunting previously invisible in the archeological evidence-net hunting. "This is not the image we've always had of Upper Paleolithic macho guys out killing animals up close and personal," Soffer explains. "Net hunting is communal, and it involves the labor of children and women. And this has lots of implications."
                        [2] Many of these implications make her conservative colleagues cringe because they raise serious questions about the focus of previous studies. European archeologists have long concentrated on analyzing broken stone tools and butchered big-game bones, the most plentiful and best preserved relics of the Upper Paleolithic era (which stretched from 40,000 to 12,000 years ago). From these analyses, researchers have developed theories about how these societies once hunted and gathered food. Most researchers ruled out the possibility of women hunters for biological reasons. Adult females, they reasoned, had to devote themselves to breast-feeding and tending infants. "Human babies have always been immature and dependent," says Soffer. "If women are the people who are always involved with biological reproduction and the rearing of the young, then that is going to their behavior. They have to provision that child. For fathers, provisioning is optional."
                        [3] To test theories about Upper Paleolithic life, researchers looked to ethnography, the scientific description of modern and historical cultural groups. While the lives of modern hunters do not exactly duplicate those of ancient hunters, they supply valuable clues to universal human behavior. In many historical socities, Soffer observes, women played a key part in net hunting, since the technique did not call for brute strength nor did it place young mothers in a physical peril. Among Australian Aborigines, for example, women as well as men knotted the mesh, laboring for as much as two or three years on a fine net. Among Native American groups, they helped lay out their handiwork on poles across a valley floor. Then the entire camp joined forces as beaters. Fanning out across the valley, men, women, and children alike shouted and screamed, flushing out game and driving it in the direction of the net. "Everybody and their mother could participate," says Soffer. "Some people were beating, others were screaming or holding the net. And once you got the net on these animals, they were immobilized. You didn't need brute force. You could club them, hit them any old way."
                        [4] People seldom returned home empty-handed. Researchers living among the net hunting Mbuti in the forests of the Congo report that they capture game every time they lay out their woven traps, scooping up 50 percent of the animals encountered. "Nets are a far more valued item in their panoply of food-producing things than bows and arrows are," says Adovasio. So lethal are these traps that the Mbuti generally rack up more meat than they can consume, trading the surplus with neighbors. Other net hunters traditionally smoked or dried their catch and stored it for leaner times.
                        [5] ⬛ [A] Soffer doubts that the inhabitants of Dolnf V stonice and Pavlov were the only net makers in Ice Age Europe. ⬛ [B] Camps stretching from Germany to Russia are littered with a notable abundance of small-game bones, from hares to birds like ptarmigan. And at least some of their inhabitants whittled bone tools that look much like the awls and net spacers favored by historical net makers. [C] ⬛ 
                        [6] Although the full range of their activities is unlikely ever to be known for certain, there is good reason to believe that Ice Age women played a host of powerful roles. ⬛ [D] And the research that suggests those roles is rapidly changing our mental images of the past. For Soffer and others, these are exciting times.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "Such findings, agree Soffer and Adovasio, reveal just how shaky the most widely accepted reconstructions of Upper Paleolithic life are",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'C',
                    answer_explanation: dedent`

                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "Although previous studies denied the participation of women in hunting parties during the Paleolithic era, more recent research provides evidence that they were involved in important hunts .",
                    options: [
                        "The Upper Paleolithic era extended from 40,000 to 12,000 years ago, a time also referred to as the Ice Age.",
                        "Net hunting involves the entire community, including women and children as well as men in the hunt for animals.",
                        "Australian Aborigines work for as many as three years weaving and knotting a net for hunting small game.",
                        "Modern net hunting in the Congo and Australia supports new theories that identify women as participants in Paleolithic hunting.",
                        "The introduction of farming methods during the agricultural revolution changed the status of women.",
                        "Paleolithic sites such as Dolní Věstonice and Pavlov provide evidence of net hunting that was previously overlooked."
                    ],
                    correct_answer: "BDF",
                    answer_explanation: dedent`
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            //TestAdmit, TPO1 Reading: Groundwater
            id: 17,
            passage: dedent`
                [1] Groundwater is the word used to describe water that saturates the ground, filling all the available spaces. By far the most abundant type of groundwater is meteoric water; this is the groundwater that circulates as part of the water cycle. Ordinary meteoric water is water that has soaked into the ground from the surface, from precipitation (rain and snow) and from lakes and streams. There it remains, sometimes for long periods, before emerging at the surface again. At first thought it seems incredible that there can be enough space in the “solid” ground underfoot to hold all this water.
                [2] The necessary space is there, however, in many forms. The commonest spaces are those among the particles—sand grains and tiny pebbles—of loose, unconsolidated sand and gravel. Beds of this material, out of sight beneath the soil, are common. They are found wherever fast rivers carrying loads of coarse sediment once flowed. For example, as the great ice sheets that covered North America during the last ice age steadily melted away, huge volumes of water flowed from them. The water was always laden with pebbles, gravel, and sand, known as glacial outwash , that was deposited as the flow slowed down.
                [3] The same thing happens to this day, though on a smaller scale, wherever a sediment-laden river or stream emerges from a mountain valley onto relatively flat land, dropping its load as the current slows: the water usually spreads out fanwise, depositing the sediment in the form of a smooth, fan-shaped slope. Sediments are also dropped where a river slows on entering a lake or the sea, the deposited sediments are on a lake floor or the seafloor at first, but will be located inland at some future date, when the sea level falls or the land rises; such beds are sometimes thousands of meters thick.
                [4] In lowland country almost any spot on the ground may overlie what was once the bed of a river that has since become buried by soil; if they are now below the water’s upper surface (the water table), the gravels and sands of the former riverbed, and its sandbars, will be saturated with groundwater.
                [5] So much for unconsolidated sediments. Consolidated (or cemented) sediments, too, contain millions of minute water-holding pores. This is because the gaps among the original grains are often not totally plugged with cementing chemicals; also, parts of the original grains may become dissolved by percolating groundwater, either while consolidation is taking place or at any time afterwards. The result is that sandstone, for example, can be as porous as the loose sand from which it was formed.
                [6] Thus a proportion of the total volume of any sediment, loose or cemented, consists of empty space. Most crystalline rocks are much more solid; a common exception is basalt, a form of solidified volcanic lava, which is sometimes full of tiny bubbles that make it very porous.
                [7] The proportion of empty space in a rock is known as its porosity. But note that porosity is not the same as permeability, which measures the ease with which water can flow through a material; this depends on the sizes of the individual cavities and the crevices linking them.
                [8] Much of the water in a sample of water-saturated sediment or rock will drain from it if the sample is put in a suitable dry place. But some will remain, clinging to all solid surfaces. It is held there by the force of surface tension without which water would drain instantly from any wet surface, leaving it totally dry. The total volume of water in the saturated sample must therefore be thought of as consisting of water that can, and water that cannot, drain away.
                [9] The relative amount of these two kinds of water varies greatly from one kind of rock or sediment to another, even though their porosities may be the same. What happens depends on pore size. If the pores are large, the water in them will exist as drops too heavy for surface tension to hold, and it will drain away; but if the pores are small enough, the water in them will exist as thin films, too light to overcome the force of surface tension holding them in place; then the water will be firmly held.
            `,
            questions: [
                {
                    id: 1,
                    question: "Which of the following can be inferred from paragraph 1 about the ground that we walk on?",
                    options: [
                        "It cannot hold rainwater for long periods of time.",
                        "It prevents most groundwater from circulating.",
                        "It has the capacity to store large amounts of water.",
                        "It absorbs most of the water it contains from rivers."
                    ],
                    correct_answer: "C",
                    answer_explanation: dedent`
                        Paragraph 1 emphasizes that groundwater saturates the ground, and although it may seem incredible, the ground has enough space to hold all this water. This clearly supports the idea that the ground has the capacity to store large amounts of water, making option (C) correct.
                    
                        ❌ Option A is incorrect because the paragraph says water can remain in the ground for long periods.
                        ❌ Option B is incorrect because it discusses circulation as part of the water cycle.
                        ❌ Option D is incorrect because the paragraph mentions multiple sources, not just rivers.
                    
                        Therefore, option (C) is the best answer.
                    `
                },
                {
                    id: 2,
                    question: "According to paragraph 2, where is groundwater usually found?",
                    options: [
                        "Inside pieces of sand and gravel",
                        "On top of beds of rock",
                        "In fast rivers that are flowing beneath the soil",
                        "In spaces between pieces of sediment"
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        Paragraph 2 explains that the most common locations for groundwater are the spaces between particles like sand grains and pebbles in loose, unconsolidated sand and gravel. These gaps hold the water, making option (D) correct.
                    
                        ❌ Option A is incorrect because groundwater is found between, not inside, the particles.
                        ❌ Option B is incorrect; the paragraph discusses beds beneath the soil, not on top of rock.
                        ❌ Option C is incorrect because it refers to past rivers that deposited sediment, not current underground rivers.
                    
                        Thus, the best answer is (D).
                    `
                },
                {
                    id: 3,
                    question: "The phrase “glacial outwash” in the passage refers to",
                    options: [
                        "fast rivers",
                        "glaciers",
                        "the huge volumes of water created by glacial melting",
                        "the particles carried in water from melting glaciers"
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        Paragraph 2 describes glacial outwash as pebbles, gravel, and sand carried by water flowing from melting glaciers. These sediments were deposited as the flow slowed down, making option (D) correct.
                    
                        ❌ Option A is incorrect because the outwash refers to the materials, not the rivers themselves.
                        ❌ Option B is incorrect as it refers to the source of the meltwater, not the outwash.
                        ❌ Option C is incorrect because it focuses on the water, not the particles it carried.
                    
                        Therefore, the best answer is (D).
                    `
                },
                {
                    id: 4,
                    question: "All of the following are mentioned in paragraph 3 as places that sediment-laden rivers can deposit their sediments EXCEPT",
                    options: [
                        "A mountain valley",
                        "Flat land",
                        "A lake floor",
                        "The seafloor"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        Paragraph 3 explains that when sediment-laden rivers slow down, they deposit sediments on flat land (as alluvial fans), in lakes, and in the sea. Mountain valleys are described as the origin of rivers, not as deposition sites, making option (A) correct.
                    
                        ✅ Option B, C, and D are explicitly mentioned as deposition areas.
                        ❌ Option A is incorrect because a mountain valley is a source, not a deposit site.
                    
                        Hence, the correct answer is (A).
                    `
                },
                {
                    id: 5,
                    question: "The word “overlie” in the passage is closest in meaning to",
                    options: [
                        "cover",
                        "change",
                        "separate",
                        "surround"
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        In paragraph 4, the word “overlie” is used in the context of the ground lying above former riverbeds. This suggests that it means “to cover” or “to lie on top of,” making option (A) the correct answer.
                    
                        ❌ Option B (“change”) and ❌ Option C (“separate”) do not fit the context of physical layering.
                        ❌ Option D (“surround”) is also incorrect as it implies enclosing rather than lying on top.
                    
                        Therefore, the correct answer is (A).
                    `
                },
                {
                    id: 6,
                    question: "According to paragraphs 6 and 7, why is basalt unlike most crystalline forms of rock?",
                    options: [
                        "It is unusually solid.",
                        "It often has high porosity.",
                        "It has a low proportion of empty space.",
                        "It is highly permeable."
                    ],
                    correct_answer: "B",
                    answer_explanation: dedent`
                        Paragraph 6 states that most crystalline rocks are solid, but basalt is an exception because it often contains many tiny bubbles, making it very porous. This makes option (B) correct.
                    
                        ❌ Option A is incorrect because basalt is mentioned as an exception to solid crystalline rocks.
                        ❌ Option C contradicts the passage, which says basalt has many pores.
                        ❌ Option D is incorrect because permeability is not specifically discussed in relation to basalt.
                    
                        Thus, option (B) is the best answer.
                    `
                },
                {
                    id: 7,
                    question: "What is the main purpose of paragraph 7?",
                    options: [
                        "To explain why water can flow through rock",
                        "To emphasize the large amount of empty space in all rock",
                        "To point out that a rock cannot be both porous and permeable",
                        "To distinguish between two related properties of rock"
                    ],
                    correct_answer: "D",
                    answer_explanation: dedent`
                        Paragraph 7 defines and contrasts porosity and permeability, emphasizing that while porosity refers to empty space in a material, permeability refers to how easily water can flow through it. This makes option (D) the correct answer.
                    
                        ❌ Option A is partially true but not the main focus.
                        ❌ Option B is incorrect because the paragraph doesn’t generalize about all rock.
                        ❌ Option C is incorrect; the paragraph doesn’t state that a rock cannot be both.
                    
                        Therefore, the main purpose is best captured by option (D).
                    `
                },
                {
                    id: 8,
                    question: "Which of the sentences below best expresses the essential information in the highlighted sentence in the passage? Incorrect choices change the meaning in important ways or leave out essential information.",
                    highlighted_sentence:"If the pores are large, the water in them will exist as drops too heavy for surface tension to hold, and it will drain away; but if the pores are small enough, the water in them will exist as thin films, too light to overcome the force of surface tension holding them in place; then the water will be firmly held.",
                    options: [
                        "Surface tension is not strong enough to retain drops of water in rocks with large pores, but it’s strong enough to hold on to thin films of water in rocks with small pores.",
                        "Water in rocks is held in place by large pores and drains away from small size pores through surface tension.",
                        "Small pores and large pores both interact with surface tension to determine whether a rock will hold water as heavy drops or as a thin film.",
                        "If the force of surface tension is too weak to hold water in place as heavy drops, the water will continue to be held firmly in place as a thin film when large pores exist."
                    ],
                    correct_answer: "A",
                    answer_explanation: dedent`
                        The highlighted sentence explains that water drains from large pores because it forms heavy drops that surface tension cannot hold, whereas in small pores, water remains as thin films that surface tension can retain. Option (A) captures this contrast accurately.
                    
                        ❌ Option B reverses the pore-size logic, which changes the meaning.
                        ❌ Option C is vague and does not clearly express the weight vs. film distinction.
                        ❌ Option D wrongly states that thin films are held in large pores, which contradicts the original idea.
                    
                        Therefore, option (A) is the best choice.
                    `
                },
                {
                    id: 9,
                    insertion_passage: dedent`
                        [1] Groundwater is the word used to describe water that saturates the ground, filling all the available spaces. By far the most abundant type of groundwater is meteoric water; this is the groundwater that circulates as part of the water cycle. Ordinary meteoric water is water that has soaked into the ground from the surface, from precipitation (rain and snow) and from lakes and streams. There it remains, sometimes for long periods, before emerging at the surface again. At first thought it seems incredible that there can be enough space in the “solid” ground underfoot to hold all this water.
                        [2] The necessary space is there, however, in many forms. The commonest spaces are those among the particles—sand grains and tiny pebbles—of loose, unconsolidated sand and gravel. Beds of this material, out of sight beneath the soil, are common. They are found wherever fast rivers carrying loads of coarse sediment once flowed. For example, as the great ice sheets that covered North America during the last ice age steadily melted away, huge volumes of water flowed from them. The water was always laden with pebbles, gravel, and sand, known as glacial outwash , that was deposited as the flow slowed down.
                        [3] The same thing happens to this day, though on a smaller scale, wherever a sediment-laden river or stream emerges from a mountain valley onto relatively flat land, dropping its load as the current slows: the water usually spreads out fanwise, depositing the sediment in the form of a smooth, fan-shaped slope. Sediments are also dropped where a river slows on entering a lake or the sea, the deposited sediments are on a lake floor or the seafloor at first, but will be located inland at some future date, when the sea level falls or the land rises; such beds are sometimes thousands of meters thick.
                        [4] In lowland country almost any spot on the ground may overlie what was once the bed of a river that has since become buried by soil; if they are now below the water’s upper surface (the water table), the gravels and sands of the former riverbed, and its sandbars, will be saturated with groundwater.
                        [5] So much for unconsolidated sediments. Consolidated (or cemented) sediments, too, contain millions of minute water-holding pores. This is because the gaps among the original grains are often not totally plugged with cementing chemicals; also, parts of the original grains may become dissolved by percolating groundwater, either while consolidation is taking place or at any time afterwards. The result is that sandstone, for example, can be as porous as the loose sand from which it was formed.
                        [6] Thus a proportion of the total volume of any sediment, loose or cemented, consists of empty space. Most crystalline rocks are much more solid; a common exception is basalt, a form of solidified volcanic lava, which is sometimes full of tiny bubbles that make it very porous.
                        [7] The proportion of empty space in a rock is known as its porosity. But note that porosity is not the same as permeability, which measures the ease with which water can flow through a material; this depends on the sizes of the individual cavities and the crevices linking them.
                        [8] Much of the water in a sample of water-saturated sediment or rock will drain from it if the sample is put in a suitable dry place. [A] ⬛ But some will remain, clinging to all solid surfaces. [B] ⬛ It is held there by the force of surface tension without which water would drain instantly from any wet surface, leaving it totally dry. [C] ⬛ The total volume of water in the saturated sample must therefore be thought of as consisting of water that can, and water that cannot, drain away. ⬛ [D]
                        [9] The relative amount of these two kinds of water varies greatly from one kind of rock or sediment to another, even though their porosities may be the same. What happens depends on pore size. If the pores are large, the water in them will exist as drops too heavy for surface tension to hold, and it will drain away; but if the pores are small enough, the water in them will exist as thin films, too light to overcome the force of surface tension holding them in place; then the water will be firmly held.
                    `,
                    question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                    insertion_sentence: "Such findings, agree Soffer and Adovasio, reveal just how shaky the most widely accepted reconstructions of Upper Paleolithic life are",
                    options: [
                        "Blank A",
                        "Blank B",
                        "Blank C",
                        "Blank D",
                    ],
                    correct_answer: 'C',
                    answer_explanation: dedent`

                    `
                },
                {
                    id: 10,
                    summarization_intro_sentence: "Much of the ground is actually saturated with water.",
                    options: [
                        "Sediments that hold water were spread by glaciers and are still spread by rivers and streams.",
                        "Water is stored underground in beds of loose sand and gravel or in cemented sediment",
                        "The size of a saturated rock’s pores determines how much water it will retain when the rock is put in a dry place.",
                        "Groundwater often remains underground for a long time before it emerges again.",
                        "Like sandstone, basalt is a crystalline rock that is very porous.",
                        "Beds of unconsolidated sediments are typically located at inland sites that were once underwater."
                    ],
                    correct_answer: "ABD",
                    answer_explanation: dedent`
                    `
                },
                // {
                //     id: 0,
                //     question: 'question1',
                //     highlighted_sentence: "highlighted_Sentence1",
                //     summarization_intro_sentence: "",
                //     insertion_passage: dedent``,
                //     insertion_sentence: "",
                //     options: [
                //         "option1",
                //         "option2",
                //         "option3",
                //         "option4",
                //     ],
                //     correct_answer: 'ABCD',
                //     answer_explanation: dedent`
                //         explanation
                //     `
                // },
            ]
        },
        {
            //TestAdmit, Reading - TestAdmit Mock Test 1 Reading: Habitat Selection in Birds 
            id: 18,
            passage: dedent`
                [1] Bird habitat selection is an extensive subject matter largely in part because both amateur and professional students of birds have accumulated an enormous amount of information on which birds live where, and how they operate in their environments. Additionally, birds are ideal subjects for studies of habitat selection, because they are highly mobile, often migrating thousands of miles and in the process passing over an enormous range of environments, and yet ordinarily forage, breed, and winter in very specific habitats. In order to better understand how bird behavior is altered either by natural phenomena or by human activities, and to stop the continued decline of bird populations, researchers record and study detailed observations of the habitat selections of birds.
                [2] Habitat erosion has either limited or eliminated access to appropriate habitats and is directly responsible for the declining populations of certain bird species. The populations of these species mainly continue to plummet due to constant development, disturbance by humans, and coastal erosion. Oil spills are even more disastrous, as toxic chemicals rapidly diminish the species’ already-shrinking populations. Further, the birds’ populations are jeopardized by introduced species, both domesticated and wild, which have continued the reduction of available habitat and reproduction success. It was thus reasoned that if the populations of these birds are declining because of habitat loss, then the creation of artificial beaches in areas inaccessible to people and their pets ought to attract breeding Black Skimmers and Piping Plovers, helping local populations rebound. Recent habitat restoration experiments have been conducted in southern California and have resulted in favorable outcomes when material raised from the bottom of the sea was used to produce artificial beaches and sandbars, allowing both of the aforementioned species of birds to occupy the sites and reproduce successfully.
                [3] Another promising habitat conversion technique based on the notion that specific species are linked to specific environments is habitat management. Exactly what type of management depends on a species’ food preferences, foraging strategies, and nest site requirements. Some birds can live in suburban and even urban environments; other species whose habitat requirements are specific, especially area-sensitive birds requiring large tracts of woodland or grassland, have more difficulty finding suitable habitat amidst our ever-developing human landscape. A current example of habitat management is the regular controlled burning of the low scrubby habitat of the Florida Scrub Jay, an endangered species numbering in the mere thousands. Once, the species’ habitat burned irregularly but naturally as a result of lightning strikes, creating a patchwork of scrub oak woodland with open, sandy patches surrounded by other plants. The scrub jays generally nest in wide areas of open pine or oak habitats. When the natural fires were quickly suppressed by the growing human communities in Florida though, the scrub oak thickets eventually became tall and dense. Initially, the Scrub Jay populations still fared relatively well under these conditions, but the subsequent arrival of egg-eating blue jays soon reduced their numbers. To counter the drop in populations, environmental groups within the state have made a strong effort at preserving Florida's remaining scrub through controlled burns and even clearing out areas of large trees to increase the size of a scrub habitat. Although the number of Scrub Jay breeding pairs is still thought to be dropping, the protection method seems to have slowed down the rate of decline.
                [4] In addition to the habitat conservation and management, the birds’ ability to breed more successfully in specific habitat types and their strong preferences for some places over others, even if they are capable of reproducing in a variety of environments must be taken into account. Researchers have found that individuals able to exercise their habitat preferences will generally leave more descendants than those unable to do so. While widespread findings have shown that members of an animal species often occupy both source habitats (where the population grows) and sink habitats (where the population declines), poor-quality sink habitats are utilized by individuals that are unable to insert themselves into superior source habitats, often because they are excluded by older, more experienced competitors and so must make the best of a bad situation elsewhere. A prime example of this phenomenon can be observed in the Black-throated Blue Warbler of North America, which prefers nesting in tall hardwood forests with a dense layer of shorter trees and shrubs even though it can breed in forests with a lower shrub density. Older, experienced warblers tend to occupy sites with a high shrub density, relegating younger birds to occupy woodlands with lower shrub density. Birds able to acquire territories in the forests with higher shrub density produce significantly more offspring than their lower shrub occupying counterparts. The same breeding success can also be observed in birds such as the Blue Tit, which have higher reproductive success in woodlands than in hedgerows.
            `,
            questions: [
                {
                  id: 1,
                  question: "The word “extensive” in the passage is closest in meaning to",
                  options: [
                    "A. wide",
                    "B. precise",
                    "C. growing",
                    "D. obscure"
                  ],
                  correct_answer: "A",
                  answer_explanation: dedent`
                    The word “extensive” refers to something that covers a large area or range. In this context, “wide” best captures the intended meaning. 
              
                    ❌ Option B (“precise”) and ❌ Option D (“obscure”) are unrelated to scale or breadth. 
                    ❌ Option C (“growing”) implies increase rather than existing extent.
              
                    ✅ Therefore, option (A) is correct.
                  `
                },
                {
                  id: 2,
                  question: "According to paragraph 1, all of the following characteristics make birds the perfect candidate for habitat selection EXCEPT",
                  options: [
                    "A. their ability to reproduce in various habitats",
                    "B. their preference to feed in certain types of environments ",
                    "C. the mobility allowing them to move quickly to other locations",
                    "D. the fact that they pass through different habitats in their migration"
                  ],
                  correct_answer: "A",
                  answer_explanation: dedent`
                    Paragraph 1 does not mention that birds reproduce in various habitats; it focuses on feeding preferences, mobility, and migration. 
              
                    ✅ Options B, C, and D are clearly supported in the paragraph. 
                    ❌ Option A is not mentioned, making it the correct EXCEPT answer.
                  `
                },
                {
                  id: 3,
                  question: "Why does the author mention the Black Skimmers and Piping Plovers?",
                  options: [
                    "A. To illustrate how continued coastal erosion has created suitable habitats for certain birds",
                    "B. To support the argument that introduced species have caused irreversible damage to indigenous wildlife",
                    "C. To provide an example of habitat restoration that increased declining bird populations",
                    "D. To demonstrate that particular species of birds will prefer undisturbed habitats over artificially built ones"
                  ],
                  correct_answer: "C",
                  answer_explanation: dedent`
                    The author uses these examples to show that restoration efforts helped recover populations of birds previously in decline.
              
                    ❌ Options A and B are not supported in the context.
                    ❌ Option D misses the focus on restoration impact.
              
                    ✅ Hence, option (C) is the best answer.
                  `
                },
                {
                  id: 4,
                  question: "The word “jeopardized” in the passage is closest in meaning to",
                  options: [
                    "A. mixed",
                    "B. suffered",
                    "C. expanded",
                    "D. endangered"
                  ],
                  correct_answer: "D",
                  answer_explanation: dedent`
                    “Jeopardized” means being put at risk or endangered.
              
                    ❌ Options A, B, and C do not convey the threat or risk implied.
              
                    ✅ Option (D) is correct as it best aligns with the meaning in context.
                  `
                },
                {
                  id: 5,
                  question: "The word “notion” in the passage is closest in meaning to",
                  options: [
                    "A. definition",
                    "B. possibility",
                    "C. reality",
                    "D. belief"
                  ],
                  correct_answer: "D",
                  answer_explanation: dedent`
                    “Notion” refers to an idea or belief. 
              
                    ❌ Options A and C suggest fixed or factual meanings.
                    ❌ Option B is not a good synonym in this context.
              
                    ✅ Option (D) is the correct meaning.
                  `
                },
                {
                  id: 6,
                  question: "Which of the sentences below best expresses the essential information in the highlighted sentence in the passage? Incorrect choices change the meaning in important ways or leave out essential information.",
                  highlighted_sentence:"Some birds can live in suburban and even urban environments; other species whose habitat requirements are specific, especially area-sensitive birds requiring large tracts of woodland or grassland, have more difficulty finding suitable habitat amidst our ever-developing human landscape.",
                  options: [
                    "A. The higher the birds’ area-sensitivity, the more they are to modify their food preference and breeding needs based on the changes in their habitat.",
                    "B. Being area-sensitive to large tracts of woodland, particular species of birds actively migrate to suitable habitats instead of adapting to emerging suburban or urban communities.",
                    "C. The landscape is forever changing due to human development so birds must be able to adapt or face elimination.",
                    "D. Often birds having the ability to live in suburban or urban environments can more easily adapt to habitats reshaped by human development."
                  ],
                  correct_answer: "D",
                  answer_explanation: dedent`
                    The highlighted sentence discusses adaptability of birds in altered environments. 
              
                    ✅ Option (D) best reflects that idea.
              
                    ❌ Option A distorts the focus. 
                    ❌ Option B overgeneralizes about specific habitats. 
                    ❌ Option C lacks detail about adaptability.
              
                    Therefore, option (D) is the correct answer.
                  `
                },
                {
                  id: 7,
                  question: "The author’s description of sink habitats mention all of the following EXCEPT",
                  options: [
                    "A. These habitats are mostly occupied by younger, inexperienced birds.",
                    "B. Birds that dwell in these habitats typically suffer a decline in population. ",
                    "C. Mature birds are unable to survive in such locations due to inferior conditions.",
                    "D. The habitats may be unfertile to birds but are still preferred when compared to uninhabitable ones."
                  ],
                  correct_answer: "C",
                  answer_explanation: dedent`
                    The passage mentions that younger birds often occupy sink habitats and that these areas lead to population decline.
              
                    ❌ Option C is not supported — mature birds are not said to be unable to survive.
              
                    ✅ Thus, option (C) is the correct EXCEPT choice.
                  `
                },
                {
                  id: 8,
                  question: "The author uses the Black-throated Blue Warbler of North America in paragraph 4 in order to",
                  options: [
                    "A. contrast the structural difference between source habitats and sink habitats.",
                    "B. illustrate how nesting preferences are passed on to offspring through experience .",
                    "C. explain why sink habitats are so valuable to the reproduction success of younger birds.",
                    "D. provide proof that more experienced birds prefer source habitats while being able to survive in sink habitats."
                  ],
                  correct_answer: "D",
                  answer_explanation: dedent`
                    The example of the Black-throated Blue Warbler shows that older birds prefer source habitats and have greater survival success.
              
                    ✅ This supports option (D). 
                    ❌ Options A, B, and C do not accurately reflect the key point made.
              
                    Thus, option (D) is the best choice.
                  `
                },
                {
                  id: 9,
                  question: 'Look at the four squares [⬛] that show where the following sentence could be inserted in the passage.',
                  insertion_sentence: "The loss of undeveloped beaches has, for example, threatened the Black Skimmer and Piping Plover along the Gulf Coast of the United States, both of which nest on sandy and shell beaches and islands.",
                  insertion_passage:`
                    1] Bird habitat selection is an extensive subject matter largely in part because both amateur and professional students of birds have accumulated an enormous amount of information on which birds live where, and how they operate in their environments. Additionally, birds are ideal subjects for studies of habitat selection, because they are highly mobile, often migrating thousands of miles and in the process passing over an enormous range of environments, and yet ordinarily forage, breed, and winter in very specific habitats. In order to better understand how bird behavior is altered either by natural phenomena or by human activities, and to stop the continued decline of bird populations, researchers record and study detailed observations of the habitat selections of birds.
                    [2] Habitat erosion has either limited or eliminated access to appropriate habitats and is directly responsible for the declining populations of certain bird species. [A] ⬛ The populations of these species mainly continue to plummet due to constant development, disturbance by humans, and coastal erosion. [B] ⬛ Oil spills are even more disastrous, as toxic chemicals rapidly diminish the species’ already-shrinking populations. [C] ⬛ Further, the birds’ populations are jeopardized by introduced species, both domesticated and wild, which have continued the reduction of available habitat and reproduction success. [D] ⬛ It was thus reasoned that if the populations of these birds are declining because of habitat loss, then the creation of artificial beaches in areas inaccessible to people and their pets ought to attract breeding Black Skimmers and Piping Plovers, helping local populations rebound. Recent habitat restoration experiments have been conducted in southern California and have resulted in favorable outcomes when material raised from the bottom of the sea was used to produce artificial beaches and sandbars, allowing both of the aforementioned species of birds to occupy the sites and reproduce successfully.
                    [3] Another promising habitat conversion technique based on the notion that specific species are linked to specific environments is habitat management. Exactly what type of management depends on a species’ food preferences, foraging strategies, and nest site requirements. Some birds can live in suburban and even urban environments; other species whose habitat requirements are specific, especially area-sensitive birds requiring large tracts of woodland or grassland, have more difficulty finding suitable habitat amidst our ever-developing human landscape. A current example of habitat management is the regular controlled burning of the low scrubby habitat of the Florida Scrub Jay, an endangered species numbering in the mere thousands. Once, the species’ habitat burned irregularly but naturally as a result of lightning strikes, creating a patchwork of scrub oak woodland with open, sandy patches surrounded by other plants. The scrub jays generally nest in wide areas of open pine or oak habitats. When the natural fires were quickly suppressed by the growing human communities in Florida though, the scrub oak thickets eventually became tall and dense. Initially, the Scrub Jay populations still fared relatively well under these conditions, but the subsequent arrival of egg-eating blue jays soon reduced their numbers. To counter the drop in populations, environmental groups within the state have made a strong effort at preserving Florida's remaining scrub through controlled burns and even clearing out areas of large trees to increase the size of a scrub habitat. Although the number of Scrub Jay breeding pairs is still thought to be dropping, the protection method seems to have slowed down the rate of decline.
                    [4] In addition to the habitat conservation and management, the birds’ ability to breed more successfully in specific habitat types and their strong preferences for some places over others, even if they are capable of reproducing in a variety of environments must be taken into account. Researchers have found that individuals able to exercise their habitat preferences will generally leave more descendants than those unable to do so. While widespread findings have shown that members of an animal species often occupy both source habitats (where the population grows) and sink habitats (where the population declines), poor-quality sink habitats are utilized by individuals that are unable to insert themselves into superior source habitats, often because they are excluded by older, more experienced competitors and so must make the best of a bad situation elsewhere. A prime example of this phenomenon can be observed in the Black-throated Blue Warbler of North America, which prefers nesting in tall hardwood forests with a dense layer of shorter trees and shrubs even though it can breed in forests with a lower shrub density. Older, experienced warblers tend to occupy sites with a high shrub density, relegating younger birds to occupy woodlands with lower shrub density. Birds able to acquire territories in the forests with higher shrub density produce significantly more offspring than their lower shrub occupying counterparts. The same breeding success can also be observed in birds such as the Blue Tit, which have higher reproductive success in woodlands than in hedgerows.
                  `,
                  options: [
                    "Blank A",
                    "Blank B",
                    "Blank C",
                    "Blank D",
                  ],
                  correct_answer: "B",
                  answer_explanation: dedent`
                    The sentence describes how loss of habitat has negatively impacted bird populations — the key idea is threat due to habitat loss.
              
                    ✅ Option (B) accurately reflects that idea.
                    ❌ Other options change or ignore the essential information.
              
                    Therefore, option (B) is correct.
                  `
                },
                {
                  id: 10,
                  summarization_intro_sentence: "Observations of the habitat selections of birds have brought habitat restoration and management plans greater success.",
                  options: [
                    "A. The arrival of certain kinds of birds has excluded some birds from their source habitats, further reducing their already dwindling populations. ",
                    "B. Planned fires generated by humans can sometimes restore bird habitats and decelerate population declines in bird species.",
                    "C. Decreased population density in source habitats lends support to the idea that better management of superior sink habitats may boost reproduction rates.",
                    "D. Habitat restoration projects and habitat management plans are based on the concept that a strong connection exists between changes to a habitat and population declines. ",
                    "E. Certain species of birds are able to breed in multiple habitats, but these species generally have more success breeding in preferred environments.",
                    "F. Despite efforts by environmental groups, habitat loss has not been slowed because of the increasing human population and its demand for land."
                  ],
                  correct_answer: "BDE",
                  answer_explanation: dedent`
                    ✅ Options B, D, and E align with the idea that knowledge of bird habitat selection helps improve restoration efforts.
              
                    ❌ Options A, C, and F either misinterpret the relationship or shift focus from habitat management.
              
                    So, the best answers are (B), (D), and (E).
                  `
                }
            ]
        },
    ]
}
