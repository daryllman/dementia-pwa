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


//Inputs needed: Trait name, Number of hours ago (hardcoded for now), Main content text, Number of comments, Number of likes
//i.e.: trait, hoursAgo, question, commentsNum, likesNum

function ThreadBox({trait, hoursAgo, question, commentsNum, likesNum}){
    return(
        <>
        <TextBox>
            <TopContainer>
            <Pill>{trait}</Pill> <LapsedText>{hoursAgo}</LapsedText>
            </TopContainer>
                {question}
            <CommentNLikeWrapper commentsNum={commentsNum} likesNum={likesNum} />
        </TextBox>
        </>
    )
}

export default ThreadBox;