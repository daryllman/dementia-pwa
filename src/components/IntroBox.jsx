import React from 'react';
import styled from 'styled-components';
import TextBox from './TextBox';
import Pill from './Pill';
import {CommentNLikeWrapper} from './icons/Comment-N-Like-Button';
import { Button } from '@material-ui/core';

const LapsedText = styled.div`
  color: var(--primary-green-color);
  font-size: 12px;
`

const TopContainer = styled.div`
  display: flex;
  flex: 1;
  row: space-around;
  justify-content: space-around;
  margin-bottom: 12px;
`

const QuestionContainer = styled.div`
  margin-bottom: 10px
`
  
// import React from 'react';
// import styled from 'styled-components'

const Container = styled.div`
  background-color: var(--primary-white-text-color);
  margin-top: 15px;
  margin-bottom: 25px;
  display:block;
  border-radius: 15px;
  height: auto;
  min-height: 40px;
  padding: 15px;
  width: auto;
  margin-left: 30px;
  margin-right:30px;
`



const WelcomeText = styled.div`
  color: var(--primary-text-color);
  font-size: 18px;
  font-weight: bold;
`
const CareTakerIntro = styled.div`
margin-top: 15px;
  color: var(--primary-white-text-color);
  font-size: 20px;
  font-weight: bold;
`
const TopTraitsText = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
  color: var(--primary-text-color);
  font-size: 16px;
`
const UpdateButton = styled.div`
shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.5,
   shadowRadius: 2,
  
  elevation: 20,
  color: var(--primary-text-color);
  font-size: 13px;
  
`


// function TextBox({children}){
//     return(
//     <Container>
//         <TextHolder>{children}</TextHolder>
//     </Container>
//     )
// }

//Inputs needed: Trait name, Number of hours ago (hardcoded for now), Main content text, Number of comments, Number of likes
//i.e.: trait, hoursAgo, question, commentsNum, likesNum

// {qnaData.latestQuestions.map(( item )=>( // attributes: trait, hoursAgo, question, commentsNum, likesNum
//     <ThreadBox trait={item.trait}hoursAgo={item.hoursAgo} question={item.question} commentsNum={item.commentsNum} likesNum={item.likesNum} />
// )
// )}

function IntroBox({traits, nameOfSenior, nameOfCareTaker}){
    return(
        <>
        <CareTakerIntro>Welcome back {nameOfCareTaker}!</CareTakerIntro>
        <Container>
            <WelcomeText>You are taking care of {nameOfSenior}</WelcomeText>
            <TopTraitsText>Top traits</TopTraitsText>
            <TopContainer>
                {/* {traits.map((item)=>(
                    <Pill>{item.trait}</Pill>
                ) )} */}

                {traits.map((value, index)=> <Pill key={index}>{value}</Pill>)}

                
                </TopContainer>
                <Button style={{color:'var(--primary-text-color)', font:'Roboto',}} onClick={()=>{console.log('Update Button clicked')}}>Update Profile</Button>
           
         
        </Container>
            {/* <TopContainer>
            <Pill>{trait}</Pill> <LapsedText>{hoursAgo}</LapsedText>
            </TopContainer>
                <QuestionContainer>{question}</QuestionContainer>
            <CommentNLikeWrapper commentsNum={commentsNum} likesNum={likesNum} />
        </TextBox> */}
        </>
    )
}

export default IntroBox;