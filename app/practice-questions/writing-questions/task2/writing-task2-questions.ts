const writingTasksQuestions = [
    //https://www.examword.com/toefl-practice/writing-question last-4
    {
        opening_statement: "Your professor is teaching a class on sociology. Write a post responding to the professor's question.",
        teacher_statement: "Let's continue talking about consumer behavior. We have been discussing different ways people choose what products to buy, and there are many potential sources of information and advice for consumers. In your opinion, which is the better strategy for purchasing, relying on advice from friends and family or depending on information from online sources? Why?",
        student1_statement: "Asking friends and family members for product recommendations might seem easier, but getting all the necessary information might take too long. An internet search would be much more efficient. Many consumer magazines are available online that compile lots of data to compare the advantages and disadvantages of one product versus another.",
        student2_statement: "The last time I bought a computer, I just watched a few videos online to decide, and now I regret that. My friends could have advised me better because they know my preferences and the kind of features that I am interested in. Consumers should get advice from the people around them to find the most suitable products."
    },
    {
        opening_statement: "Your professor is teaching a class on sociology. Write a post responding to the professor's question.",
        teacher_statement: "This week, we’ll discuss ways to address air pollution. One idea is introducing environmental taxes on air travel. Such taxes, also called ecological or green taxes, are extra charges added to the price of airplane tickets. Money collected from these taxes could be invested in environmentally friendly technologies or in promoting other cleaner modes of transportation. Do you think there should be an environmental tax on air travel? Why or why not?",
        student1_statement: "We should impose environmental taxes on air travel. These taxes might encourage people to find cheaper, more eco-friendly ways to get places. In my country, many people use planes to fly short distances because flights are relatively inexpensive when they could just as quickly take a less polluting form of transportation.",
        student2_statement: "Additional taxes on air travel will do little to solve the air pollution problem. Airplane tickets would become more expensive, punishing passengers without incentivizing airlines to become more environmentally friendly. The airlines should pay the price to protect the environment, not their customers."
    },
    {
        opening_statement: "Your professor is teaching a class on sociology. Write a post responding to the professor's question.",
        teacher_statement: "Many companies provide important products and services but cause environmental damage. Some people believe the way to prevent these companies from damaging the environment is for the government to require more penalties, such as higher taxes and more significant fines. Do you think it is a good idea?",
        student1_statement: "Many companies make helpful products but hurt the environment, too. To stop the damage, the government should punish them more by raising taxes and fines. Doing that would hold corporations accountable and force them to change impactfully. We can have both innovation and sustainability if governments incentivize it properly through penalties.",
        student2_statement: "I can't entirely agree that we should penalize corporations more for environmental damage. Many companies are already taking steps to adopt greener practices, and higher taxes or fines could discourage innovation and hurt the economy. Instead of punishing businesses, the government should reward and incentivize sustainable choices through subsidies and tax breaks."
    },
    {
        opening_statement: "Your professor is teaching a class on sociology. Write a post responding to the professor's question.",
        teacher_statement: "When it comes to groceries, everyone has their preferred shopping destination. Some prefer the convenience and variety of supermarkets, while others enjoy small grocery stores' personal touch and community connection. Which do you like? Why?",
        student1_statement: "As a frequent shopper, I prefer supermarkets because of their more comprehensive selection of products, lower prices, and greater convenience. Supermarkets offer a one-stop shopping experience where shoppers can buy everything they need for their weekly meal planning. In addition, supermarkets have longer opening hours than small grocery stores, allowing for more flexibility to shop based on personal schedules.",
        student2_statement: "Small retailers usually cater to a niche market and carry a limited range of products. Small shops know their customers and tend to develop a rapport with them over time. This feeling of a connection to the store leads to repeat business. A small store requires a smaller square footage and can be close to a residential area, offering customers convenience and accessibility for quick shopping trips. Fulfilling customers' needs by taking special orders and bringing in unique products is one way to make the small shop a go-to place for customers looking for something specific."
    },
    {
        opening_statement: "Your professor is teaching a class on sociology. Write a post responding to the professor's question.",
        teacher_statement: "Over the next few weeks, we are going to look at lots of different materials about the role of television programs and television watching in people's lives. But first, I want to know what you think about this topic. So here's a question for the class discussion board:",
        board_statement: "What do you think is the most significant effect that watching television has on people? Why do you think television has this effect?",
        student1_statement: "I know that one way that television influences people's behavior is that when you are watching television, you are not moving around or exercising. This is especially true for children. When children spend a lot of time watching television, they have a greater tendency to be overweight.",
        student2_statement: "I think the main effect that television has on people is to broaden their experience. There are so many programs devoted to nature and travel. Think of all the different places in the world you can experience through television! Last night I watched a program about life in Antarctica, and it was fascinating!"
    },
    {
        opening_statement: "Your professor is teaching a class on business. Write a post responding to the professor's question.",
        teacher_statement: "We are all exposed to a lot of advertising, especially on the internet. And of course, businesses spend a lot of money to create and distribute advertising. Before next class, I would like for you to discuss this question:",
        board_statement: "Is advertising just a way of manipulating people to buy things they do not need, or is it an important source of information that helps people make informed consumer decisions?",
        student1_statement: "I don’t think most people consider ads to be valuable. I read that in just one year, from 2018 to 2019, the number of computers, tablets, and mobile phones using ad blockers increased from 142 million to 615 million.",
        student2_statement: "People can find out a lot about products from advertising. There's plenty of evidence that people usually begin the process of making a big purchase by looking at ads and reviews. I have to go to another class right now, but I’m going to post later about an advertisement that gave me a lot of useful information. ​"
    },
    {
        opening_statement: "Your professor is teaching a class on political science. Write a post responding to the professor's question.",
        teacher_statement: "As I mentioned in class, governments make public policies to describe their responses to various problems that affect a community. Part of this process involves setting and defending priorities about which issues deserve the most attention and resources. For example, governments need to decide whether they should spend more money on education or on environmental protections. If you were a policy maker, which issue would you argue is more important—education or environmental protections? Why?",
        student1_statement: "We all live on planet Earth, and it is the only planet we have. Therefore, we must take care of it. Clearly, protecting the environment should be the government's priority over education. I think the REAL question is, which approach to protecting the environment—restricting pollution, regulating population, promoting clean energy, or something else—should be the government's priority.",
        student2_statement: "I disagree with Kelly that the environment is more important than education. Education is actually the best way to protect the environment. Educated people can see how their decisions affect the world around them. Also, with better science and technology education, we can develop solutions to environmental problems. Therefore, I think the government should spend more money on education. ​"
    },
    {
        opening_statement: "Your professor is teaching a class on marketing. Write a post responding to the professor’s question.",
        teacher_statement: "Hello class!  Next week we will be discussing the impact of social media influencers on consumer behavior. With the rise of social media platforms like Instagram and YouTube, we’ve seen the emergence of a new type of celebrity: the social media influencer. These influencers have large followings and can sway consumer behavior by endorsing products or services. Here’s a question for the discussion board:",
        board_statement: "Do social media influencers have a major impact on consumers?  Why or why not?",
        student1_statement: "I think social media influencers have a significant impact. When young people start admiring these influencers and trust their recommendations, they are more likely to buy products or services that they endorse. However, I also think there are some concerns about the authenticity of these endorsements, as some influencers may promote products that they don’t actually use or believe in.",
        student2_statement: "I’m not convinced that social media influencers have a significant impact on consumer behavior. While they may have large followings, most people are smart enough to make their own purchasing decisions based on their needs and preferences. Plus, there are so many influencers out there promoting different products that it can be hard to know who to trust."
    },
    {
        opening_statement: "Your professor is teaching a class on political science. Write a post responding to the professor’s question.",
        teacher_statement: "Today we’re going to talk about the debate between economic growth and protecting the environment. Economic growth creates new jobs and gives people money they can use to improve their lives. On the other hand, if we protect the environment it can be enjoyed both by ourselves and future generations. If you had to choose between prioritizing economic growth or protecting the environment, which one would you choose.  Why?",
        student1_statement: "I would prioritize the environment. We only have one planet and if we don’t take care of it, we won’t have pleasant lives in the future. Economic growth can be important, but not at the expense of the environment. I think we need to shift towards more environmentally-friendly economic practices, such as investing in renewable energy and promoting environmentally-friendly technologies.  We’ll all live much healthier lives if the world around us is clean.",
        student2_statement: "While I agree with Alex that environmental sustainability is important, I think that economic growth is the only way to solve many of the social and economic problems we face. We need a strong economy to create jobs, reduce poverty, and improve standards of living.  Not only that, but when companies grow stronger and more profitable, they can develop new technologies that solve our environmental problems."
    },
    {
        opening_statement: "Your professor is teaching a class on business. Write a post responding to the professor’s question.",
        teacher_statement: "Next week, we’re going to spend a lot of time in class discussing the positive and negative ways in which companies affect the world around us.  Before we start talking about that in class, I want to hear what you think about the topic.  So here’s a question for the message board: In your opinion, what is the best way for a company to have a positive impact on society?",
        student1_statement: "I believe that companies should focus on making their operations more socially and environmentally friendly. While charitable giving can be beneficial, it doesn’t address the root causes of serious social and environmental problems. By doing business in more responsible ways, companies can have a more meaningful and lasting impact on society.  Moreover, if they attract positive attention from consumers they could inspire other companies to do the same.  That’s the only way we can really solve today’s problems.",
        student2_statement: "While those are very good points, I think that companies should focus on charitable giving. Philanthropy can provide immediate relief to those in need and contribute to the overall well-being of society right away.  It could take years or decades for business changes to have a positive impact on society, and most people just can’t wait that long."
    },
    //AI generated
    {
        opening_statement: "Your professor is teaching a class on education. Write a post responding to the professor’s question.",
        teacher_statement: "Over the past decade, online learning has become increasingly popular. Some argue that online courses provide flexibility and convenience, while others believe traditional classroom settings offer better interaction and learning experiences. Which do you think is the better way to learn, online courses or traditional classrooms? Why?",
        student1_statement: "Online learning is the future. It allows students to learn at their own pace, access a wider range of courses, and avoid the costs and time associated with commuting. With the advancement of technology, interactive tools can make online learning just as engaging as in-person classes.",
        student2_statement: "While online learning is convenient, I believe traditional classrooms are more effective. Face-to-face interaction with instructors and classmates enhances understanding and encourages active participation. Being in a physical classroom also fosters discipline and better time management."
    },
    {
        opening_statement: "Your professor is teaching a class on technology. Write a post responding to the professor’s question.",
        teacher_statement: "Many companies are adopting artificial intelligence (AI) in workplaces to improve efficiency. However, some people worry that AI will replace human jobs, while others believe it will create new opportunities. Do you think AI is beneficial for workplaces, or does it pose a threat to jobs?",
        student1_statement: "AI is beneficial because it can automate repetitive tasks, increase productivity, and allow humans to focus on more creative and strategic work. History has shown that technology often creates more jobs than it eliminates.",
        student2_statement: "I am concerned that AI will replace many jobs, especially in industries like manufacturing and customer service. Although new jobs may be created, not everyone will have the skills to transition into those roles. Governments should implement programs to help workers adapt."
    },
    {
        opening_statement: "Your professor is teaching a class on psychology. Write a post responding to the professor’s question.",
        teacher_statement: "Many studies suggest that social media has both positive and negative effects on mental health. While it helps people stay connected, excessive use has been linked to anxiety and low self-esteem. In your opinion, does social media do more harm than good? Why?",
        student1_statement: "Social media has a positive impact because it allows people to connect globally, share ideas, and access information. It can also be a source of support for those who struggle with loneliness or mental health issues.",
        student2_statement: "I believe social media does more harm than good. It creates unrealistic expectations, increases stress, and promotes unhealthy comparisons. People should limit their usage and focus on real-life interactions for better mental well-being."
    },
    {
        opening_statement: "Your professor is teaching a class on business. Write a post responding to the professor’s question.",
        teacher_statement: "The COVID-19 pandemic has changed how we work. Many employees now prefer working from home, while others believe office work is better for productivity and collaboration. Which work arrangement do you think is more effective, working from home or working in an office? Why?",
        student1_statement: "Working from home is more effective because it eliminates commuting time, allows for a flexible schedule, and enables employees to work in a comfortable environment, leading to higher productivity.",
        student2_statement: "I prefer working in an office because it encourages teamwork, provides a structured environment, and reduces distractions. Face-to-face communication also improves collaboration and builds stronger relationships among colleagues."
    },
    {
        opening_statement: "Your professor is teaching a class on the arts. Write a post responding to the professor’s question.",
        teacher_statement: "Some people believe that art is essential for society because it expresses culture and emotions, while others argue that resources should be spent on more practical fields like science and technology. In your opinion, is art important for society? Why?",
        student1_statement: "Art is crucial for society because it inspires creativity, preserves history, and brings people together. It also helps individuals express themselves and cope with emotions in ways that science and technology cannot.",
        student2_statement: "While art is valuable, I believe that funding should prioritize scientific and technological advancements that improve our lives. Art can be enjoyed as a hobby, but resources should go toward fields that drive progress and innovation."
    },
    {
        opening_statement: "Your professor is teaching a class on health and nutrition. Write a post responding to the professor’s question.",
        teacher_statement: "Fast food has become a major part of modern diets. Some argue that it is convenient and affordable, while others believe it contributes to serious health problems. Do you think fast food is beneficial or harmful to society? Why?",
        student1_statement: "Fast food is convenient, affordable, and time-saving, which makes it an essential part of life for busy individuals. Many restaurants are also introducing healthier options, so people can still make nutritious choices.",
        student2_statement: "I believe fast food is harmful because it is often high in calories, sugar, and unhealthy fats, leading to obesity and other health issues. The easy availability of fast food encourages poor eating habits, especially among young people."
    },
    {
        opening_statement: "Your professor is teaching a class on education policy. Write a post responding to the professor’s question.",
        teacher_statement: "Some people believe that university education should be free for all students, while others argue that students should pay tuition fees to support educational institutions. What is your opinion? Should university education be free? Why or why not?",
        student1_statement: "University education should be free because it provides equal opportunities for all students, regardless of their financial background. It can also lead to a more educated workforce and benefit society as a whole.",
        student2_statement: "I don’t think university education should be free. Universities need funding to maintain high-quality teaching and research. Instead of free education, governments should offer scholarships and financial aid to those who need it most."
    },
    {
        opening_statement: "Your professor is teaching a class on urban planning. Write a post responding to the professor’s question.",
        teacher_statement: "As cities grow, traffic congestion and pollution have become major problems. Some people believe that governments should encourage the use of public transport instead of private cars. Do you agree or disagree? Why?",
        student1_statement: "Yes, people should use public transport more often. It reduces traffic congestion, lowers pollution, and is more affordable than owning a private car. If more people relied on buses and trains, cities would be cleaner and more efficient.",
        student2_statement: "I disagree. Public transport is not always convenient, and it doesn’t reach every area. Many people rely on cars for work, emergencies, or personal comfort. Instead of discouraging car use, governments should invest in better roads and infrastructure."
    },
    {
        opening_statement: "Your professor is teaching a class on physical education. Write a post responding to the professor’s question.",
        teacher_statement: "Some schools emphasize academic subjects like math and science, while others prioritize sports and physical activities. Do you think sports should be a mandatory part of education? Why or why not?",
        student1_statement: "Sports should be mandatory in schools because they promote physical health, teamwork, and discipline. Regular exercise improves concentration and reduces stress, leading to better academic performance.",
        student2_statement: "I don’t think sports should be mandatory. Not all students enjoy physical activities, and some might prefer spending that time on academics or extracurricular activities like music and art. Schools should offer sports as an option, not a requirement."
    },
    {
        opening_statement: "Your professor is teaching a class on science and technology. Write a post responding to the professor’s question.",
        teacher_statement: "Governments spend billions of dollars on space exploration, but some people argue that this money should be used to solve problems on Earth instead. Do you think space exploration is worth the investment? Why or why not?",
        student1_statement: "Space exploration is essential for scientific progress. It helps us develop new technologies, discover new resources, and understand the universe better. Investing in space can also create new job opportunities and inspire future generations.",
        student2_statement: "While space exploration is interesting, I believe we should focus on problems like poverty, climate change, and healthcare. The money spent on space missions could be used to improve education, infrastructure, and social programs that benefit people directly."
    },


    // {
    //     opening_statement: "",
    //     teacher_statement: "",
    //     student1_statement: "",
    //     student2_statement: ""
    // },
];

export default writingTasksQuestions;
