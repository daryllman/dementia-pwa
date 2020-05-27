import React from 'react'

// Toggle between app modes in development!
// 1: Dev - Start at Login Screen - use sample data (does not save anything)
// 2: Dev - Start at OnBoarding Screen
// 3: Dev - Start at main app view - use sample data
// 4: Dev - Start at Login Screen - save data 
// 5: Prod - Follow localStorage settings
export const appMode = 3;



// If user is not logged in
export const userData = null


// export const userData = {
//     hasOnboarded: false,
//     userName: 'Jack',
//     patientName: 'Mr Lim Boon Kok',
//     patientTraits: ['Wandering', 'Resistive', 'Physical Aggression']
// };

// rawuserData used for saving info
export const rawUserData = null

export const userDataSample = {
    hasOnboarded: false,
    userName: 'Jack',
    patientName: 'Mr Lim Boon Kok',
    patientTraits: ['Wandering', 'Resistive', 'Physical Aggression']
};

export const name = {
    name: 'Mr Lim',
}

export const onboardingData = {
    topTraits: [
        {
            trait: 'Resistive'
        },
        {
            trait: 'Physical Aggression'
        },
        {
            trait: 'Wandering'
        }
    ],
    name: 'Mr Lim',


}

export const patientTraitsData = {}

export const tipsForApp = {
    topTipsOfDay: ['Ensure that there are clear pathways with minimal clutter for the person to access the bed, closet, doorway and the bathroom.',
        'Take note of the amount of food they are ingesting. It may not be enough or they may not have apetite. Find ways to encourage them to eat more!'],
    topTipsForAll: ['Most importantly, try to understand and empathise. Your physical and mental health is important too. Take breaks for yourself.', 
    'Take note of the amount of food they are eating daily, especially water intake. It may not be enough or they may not have apetite. Find ways to encourage them to eat more!'],
    tipsForTrait0:['Before you get annoyed, understand why they may be doing so. It may be due to differing reasons. It may be to gain attention or a form of expression that they are feeling discomfort.',
    'If self-harming starts to worsen and become dangerous for themselves and others, you may want to seek doctor’s advise if you have not. It may be due to other reasons you may not know.',
    'Show that you are very concerned over their actions but do not show anger at all. Show that this is not okay and that you care. Dementia patients are able to feel emotions.'],
    tipsForTrait1:['Making them feel safe rather than stressed will make communication easier. Take a short break if you feel your fuse getting short. If they feel safe, there will be less tendency for aggression.',
    'Take a slow walk throughout the living spaces, keep all dangerous items and see how you can make the spaces less dangerous. You may even want to arrange the house to facilitate this.',
    'Start to realise and see patterns of their physical aggression. Though it may seem random at the start, most of the times it is not. It may be due to some trigger or routine.'],
    tipsForTrait2:['Keep communication short, simple, and clear. Give one direction or ask one question at a time. It helps to clear their mind and think of that simple message.',
    'If you cannot get them to do something, take a break for yourself. Empathise, understand, and try again afterwhile with a better understanding with what they are facing.',
    'Sometimes they resist due to an unspoken reason. Take a step back, what would you feel or think if you are in their shoes? Understand their facial expression, it may provide answers.'],
}

export const dementiaArticles = {
    articleTitles: [{
        title: 'What is Dementia exactly?',
        by: 'National Council of Social Service',
    },
    {
        title: 'Better living conditions for dementia patients',
        by: 'Global Dementia Federation',

    },
    {
        title: 'Top Dementia Behaviours',
        by: 'Global Dementia Society',
    },
    {
        title: 'Tips to manage caregivers’ physical and mental health',
        by: 'Singapore Dementia Society',
    },
    {
        title: 'The different causes of dementia',
        by: 'National Council of Social Service',
    },
    {
        title: 'Understanding the psychology of dementia',
        by: 'Global Dementia Federation',
    },
    {
        title: 'Ultimate dementia summary',
        by: 'John Kalens, Dementia Researcher',
    },
    {
        title: 'Ways for better control on dementia',
        by: 'Teena Jacker, Dementia Expert',
    },

    {
        title: 'Planning your schedule as a Caregiver',
        by: 'Singapore Council of Social Service',
    },
    {
        title: 'When should you seek a doctor’s help?',
        by: 'Global Dementia Federation',
    },




    ]
}

export const qnaData = {
    latestQuestions: [{
        trait: "Resistive",
        hoursAgo: "1 hour ago",
        question: "The person I am taking care of gets easily agitated and aggresive, what should I do?",
        commentsNum: 3,
        likesNum: 4,
    },
    {
        trait: "Physical Aggression",
        hoursAgo: "3 hours ago",
        question: "My grandpa is throwing his medicine at me, everytime I remind him to eat them, what do I do? He may even get really angry...",
        commentsNum: 3,
        likesNum: 0,
    },
    {
        trait: "Wandering",
        hoursAgo: "1 hour ago",
        question: "My grandpa likes to go down to the void deck himself. He has not get lost yet. But should I be worried?",
        commentsNum: 2,
        likesNum: 2,
    },
    {
        trait: "Physical Aggression",
        hoursAgo: "3 hours ago",
        question: "My mum is normal for the most part but sometimes she will display violent tendencies, which I think she thinks is okay. How do I try to tell her to stop that.",
        commentsNum: 0,
        likesNum: 0,
    },
    {
        trait: "Wandering",
        hoursAgo: "1 hour ago",
        question: "My grandpa is throwing his medicine at me, everytime I remind him to eat them, what do I do? He may even get really angry...",
        commentsNum: 12,
        likesNum: 23,
    },
    {
        trait: "Wandering",
        hoursAgo: "1 hour ago",
        question: "My grandpa is throwing his medicine at me, everytime I remind him to eat them, what do I do? He may even get really angry...",
        commentsNum: 12,
        likesNum: 23,
    },
    ]
}