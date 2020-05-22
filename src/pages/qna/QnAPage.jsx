import React from 'react';
import DarkGreenOverlay from '../../components/DarkGreenOverlay';
import BackButton from '../../components/icons/BackButton';
import PageTitle from '../../components/PageTitle'
import TextBox from '../../components/TextBox'
import Pill from '../../components/Pill'
import {CommentButton, CommentWrapper, LikeButton, LikeWrapper,CommentNLikeWrapper} from '../../components/icons/Comment-N-Like-Button'
import ThreadBox from '../../components/ThreadBox';

import {qnaData} from '../../mockData';

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



