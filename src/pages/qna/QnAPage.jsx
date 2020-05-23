import React from 'react';
import styled from 'styled-components';
import DarkGreenOverlay from '../../components/DarkGreenOverlay';
import BackButton from '../../components/icons/BackButton';
import PageTitle from '../../components/PageTitle'
import TextBox from '../../components/TextBox'
import Pill from '../../components/Pill'
import {CommentButton, CommentWrapper, LikeButton, LikeWrapper,CommentNLikeWrapper} from '../../components/icons/Comment-N-Like-Button'
import ThreadBox from '../../components/ThreadBox';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import dropdownstyles from './Dropdown.module.css';


import {qnaData} from '../../mockData';


const AskAQuestionButton = styled.button`
  font-size: 24px;
  padding: 0.25em 1em;
  border-radius: 20px;
  height: 75px;
  width: 60vw;
  max-width: 500px;
  margin:auto;
  margin-top: 45px;
  margin-bottom: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`


const DropdownContainer = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
`

function DropdownSelection(){
    const options = [
        {value: 'Latest Questions', label: 'Latest Questions'},
        {value: 'Resistive', label: 'Resistive'},
        {value: 'Physical Aggression', label: 'Physical Aggression'},
        {value: 'Wandering', label: 'Wandering'},
    ];
    const defaultOption = options[0]; //default is Latest Questions
    return(
        <DropdownContainer>
            <Dropdown options={options} onChange={(e)=>console.log(e.value)} value={defaultOption} placeholder="Select an option" controlClassName={dropdownstyles.dropdownWrapper}/>
        </DropdownContainer>
    )
}  

function QnAPage(){
    //const latestQuestions = qnaData.latestQuestions;
    return(
        <>
        <AskAQuestionButton onClick={()=>{console.log('Ask a Question Button clicked')}}>Ask a question</AskAQuestionButton>
        <DropdownSelection/>
        <DarkGreenOverlay>

            {qnaData.latestQuestions.map(( item )=>( // attributes: trait, hoursAgo, question, commentsNum, likesNum
                <ThreadBox trait={item.trait}hoursAgo={item.hoursAgo} question={item.question} commentsNum={item.commentsNum} likesNum={item.likesNum} />
            )
            )}

        </DarkGreenOverlay>
        </>
    )
}

export default QnAPage;



//Just archive on how to use BackButton and PageTitle
/* 

function QnAPage(){
    //const latestQuestions = qnaData.latestQuestions;
    return(
        <>
        <BackButton/>
        <PageTitle>Q&A Page</PageTitle>
        <DarkGreenOverlay>

            {qnaData.latestQuestions.map(( item )=>( // attributes: trait, hoursAgo, question, commentsNum, likesNum
                <ThreadBox trait={item.trait}hoursAgo={item.hoursAgo} question={item.question} commentsNum={item.commentsNum} likesNum={item.likesNum} />
            )
            )}
            
        </DarkGreenOverlay>
        </>
    )
}

export default QnAPage;


*/
