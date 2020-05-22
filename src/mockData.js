import React from 'react'

// If user is not logged in
// export const userData = null


export const userData = {
    hasOnboarded: true,
    userName: 'Jack',
    patientName: 'Mr Lim Boon Kok',
    patientTraits: ['Wandering', 'Resistive', 'Physical Aggression']
};

export const onboardingData = {}

export const patientTraitsData = {}

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