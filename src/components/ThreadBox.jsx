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
  margin-bottom: 10px;
`


//Inputs needed: Trait name, Number of hours ago (hardcoded for now), Main content text, Number of comments, Number of likes
//i.e.: trait, hoursAgo, question, commentsNum, likesNum

function ThreadBox({trait, hoursAgo, question, commentsNum, likesNum, onClick}){
    return(
        <>
        <TextBox onClick={onClick}>
            <TopContainer onClick={onClick}>
            <Pill onClick={()=>console.log('clickss')}>{trait}</Pill> <LapsedText>{hoursAgo}</LapsedText>
            </TopContainer>
                <QuestionContainer onClick={onClick}>{question}</QuestionContainer>
            <CommentNLikeWrapper commentsNum={commentsNum} likesNum={likesNum} />
        </TextBox>
        </>
    )
}

export default ThreadBox;