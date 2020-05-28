import React from 'react';
import styled from 'styled-components';
import BackButton from '../../components/icons/BackButton';
import DarkGreenOverlay from '../../components/DarkGreenOverlay';
import DiscussionResponse from './DiscussionResponse';
import Star from './assets/star.png';
import Hat from './assets/hat.png';
import DaryllDP from './assets/darylldp.jpg';
import AndrewDP from './assets/andrewdp.png';
import ChewDP from './assets/chewdp.png';
import LowenDP from './assets/lowendp.png';

// have to export these data out to serve over api.
const thread1Data = {
    threads: [
        {
            name: 'Andrew_cheng ',
            comment: 'Put yourself in their shoes. Why might they feel agitated?',
            hoursAgo: '2h',
            likesNum : '3',
            commentsNum: '2',
            dp: DaryllDP,
            badges:[Star, Hat]
        },
        {
            name: 'Andrew_cheng ',
            comment: 'Put yourself in their shoes. Why might they feel agitated?',
            hoursAgo: '2h',
            likesNum : '3',
            commentsNum: '2',
            dp: DaryllDP,
            badges:[Star, Hat]
        },
        {
            name: 'Andrew_cheng ',
            comment: 'Put yourself in their shoes. Why might they feel agitated?',
            hoursAgo: '2h',
            likesNum : '3',
            commentsNum: '2',
            dp: DaryllDP,
            badges:[Star, Hat]
        },

    ]
}


const Container = styled.div`
  background-color: var(--primary-white-text-color);
  margin-top: 35px;
  margin-bottom: 25px;
  display:block;
  border-radius: 15px;
  height: auto;
  padding: 25px;
  width: auto;
  margin-left: 30px;
  margin-right:30px;
`

const TextHolder = styled.div`
  text-align: center;
`


function TextBox({children}){
    return(
    <Container>
        <TextHolder>{children}</TextHolder>
    </Container>
    )
}


function QuestionThreadPage({goBack}){
//function QuestionThreadPage({questionThread, goBack}){
    return(
        <>
        <div style={{height: '45px'}}></div>
        <BackButton onClick={()=>goBack('main')}/>
        <TextBox>The person I am taking care of gets easily agitated and aggresive, what do I do?</TextBox>
        <DarkGreenOverlay>

            {/* {thread1Data.threads.map((name, comment, hoursAgo, question, likesNum, commentsNum, dp, badges)=>{
                return (
                    <DiscussionResponse name={name} hoursAgo={hoursAgo} question={comment} commentsNum={commentsNum} likesNum={likesNum} pic={dp} badges={badges}/>
                )
            })} */}

            <DiscussionResponse name="Andrew Chng " hoursAgo="2h" question="Put yourself in their shoes. Why might they feel agitated?" commentsNum="6" likesNum="36" pic={AndrewDP} badges={[Star, Hat]}/>
            

            <DiscussionResponse name="Daryll Wong " hoursAgo="1h" question="Is this a sudden phenomenon or gradually worsening? Try to understand the cause." commentsNum="8" likesNum="27" pic={DaryllDP} badges={[Star]}/>
            <DiscussionResponse name="Chew Tan " hoursAgo="20min" question="Sometimes it may be something medical related. Have you consulted a doctor before?" commentsNum="10" likesNum="16" pic={ChewDP} badges={[Hat]}/>
            <DiscussionResponse name="Loewn " hoursAgo="20min" question="Try contacting the council for help" commentsNum="10" likesNum="14" pic={LowenDP} badges={[]}/>

        </DarkGreenOverlay>
        <p>Question Thread Page</p>
        </>
    )
}

export default QuestionThreadPage;


//Inputs needed: Trait name, Number of hours ago (hardcoded for now), Main content text, Number of comments, Number of likes
//i.e.: trait, hoursAgo, question, commentsNum, likesNum