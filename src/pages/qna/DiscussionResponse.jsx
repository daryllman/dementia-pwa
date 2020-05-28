import React from 'react';
import styled from 'styled-components';
import TextBox from '../../components/TextBox';
import Pill from '../../components/Pill';
import {LikeWrapper} from '../../components/icons/Comment-N-Like-Button';

const LapsedText = styled.div`
  color: var(--primary-green-color);
  font-size: 12px;
`

const ReplyText = styled.div`
  color: var(--primary-green-color);
  font-size: 15px;
`


const QuestionContainer = styled.div`
  margin-bottom: 10px;
`

const FlexContainer = styled.div`
  display: flex;
`

const FlexItems = styled.div`
  flex-wrap: wrap
`
const ImgContainer = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    margin-right: 15px;
`

const BadgesContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 15px;
`

const Badge = styled.img`
height: 14px;
display: flex;
padding: 5px;
`

const Name = styled.span`
font-weight: bold;
float: left;
margin-right: 5px;
`

const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


//Inputs needed: Trait name, Number of hours ago (hardcoded for now), Main content text, Number of comments, Number of likes
//i.e.: trait, hoursAgo, question, commentsNum, likesNum

function DiscussionResponse({ name, hoursAgo, question, commentsNum, likesNum, pic, badges}){
    return(
        <>
        <TextBox>
            <FlexContainer>
                <FlexItems>
                    <ImgContainer src={pic}/>
                    <BadgesContainer>
                        {badges.map((dpImg)=>{
                            return(
                                <Badge src={dpImg}/>
                            )
                        })}
                    </BadgesContainer>
                </FlexItems>

                <FlexItems>
                    <Name>{name}</Name><QuestionContainer>{question}</QuestionContainer>
                    <BottomContainer>
                        <LapsedText>{hoursAgo}</LapsedText>  <LapsedText>Reply</LapsedText> <LikeWrapper likesNum={likesNum}></LikeWrapper>
                    </BottomContainer>
                    <ReplyText>---------- View Replies ({commentsNum})</ReplyText>

                </FlexItems>
            </FlexContainer>
            
            
                
        </TextBox>
        </>
    )
}

export default DiscussionResponse;



