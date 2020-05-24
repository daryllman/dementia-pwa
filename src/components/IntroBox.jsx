import React from 'react';
import styled from 'styled-components';
import TextBox from './TextBox';
import Pill from './Pill';
import {CommentNLikeWrapper} from './icons/Comment-N-Like-Button';

const LapsedText = styled.div`
  color: var(--primary-green-color);
  font-size: 12px;
`

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  font-size: 20px;
  font-weight: bold;
`
const CareTakerIntro = styled.div`
  color: var(--primary-text-color);
  font-size: 20px;
  font-weight: bold;
`
// const TopTraitsText = styled.div`
//   color: var(--primary-text-color);
//   font-size: 
// `
// const TextHolder = styled.div`
//   text-align: left;
// `


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

        <Container>
            <WelcomeText>You are taking care of {nameOfSenior}</WelcomeText>
            <p>Top traits</p>
            <TopContainer>
                {traits.map((item)=>(
                    <Pill>{item.trait}</Pill>
                ) )}
                </TopContainer>
           
         
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