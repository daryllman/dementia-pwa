import React from 'react';
import styled from 'styled-components'
import CommentIcon from '@material-ui/icons/Message';
import LikeIcon from '@material-ui/icons/ThumbUp';

const ButtonWrapper = styled.div`
  display: inline-flex;
`;

const Numbers = styled.div`
  font-size:15px;
  color: var(--primary-green-color);
  margin-left:3px;
`;

const BothWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 105px;
  margin-left: auto;
`;

function CommentButton(){
    return(
            <CommentIcon style={{color:'var(--primary-green-color)', height: '20px'}}/>
    )
}

function CommentWrapper({commentsNum}){
    return(
        <ButtonWrapper>
            <CommentButton/><Numbers>{commentsNum}</Numbers>
        </ButtonWrapper>
    )
}

function LikeButton(){
  return(
          <LikeIcon style={{color:'var(--primary-green-color)', height: '20px'}}/>
  )
}

function LikeWrapper({likesNum}){
  return(
      <ButtonWrapper>
          <LikeButton/><Numbers>{likesNum}</Numbers>
      </ButtonWrapper>
  )
}

function CommentNLikeWrapper({commentsNum, likesNum}){
  return(
      <BothWrapper>
          <CommentWrapper commentsNum={commentsNum}/><LikeWrapper likesNum={likesNum}/>
      </BothWrapper>
  )
}





export {CommentButton, CommentWrapper, LikeButton, LikeWrapper, CommentNLikeWrapper };

