
import React from 'react';
import styled from 'styled-components';
// import DarkGreenOverlay from '../../components/DarkGreenOverlay';
// import BackButton from '../../components/icons/BackButton';
// import PageTitle from '../../components/PageTitle'
// import TextBox from '../../components/TextBox'
// import Pill from '../../components/Pill'
// import { CommentButton, CommentWrapper, LikeButton, LikeWrapper, CommentNLikeWrapper } from '../../components/icons/Comment-N-Like-Button'
// import ThreadBox from '../../components/ThreadBox';
// import IntroBox from '../../components/IntroBox';
// import TipBox from '../../components/TipBox';
import TipButton from '../../components/icons/TipsIconBox';
import ArticleButton from '../../components/icons/ArticleIconBox';
import ActivityButton from '../../components/icons/ActivityIconBox';
import SupportButton from '../../components/icons/SupportIconBox';
import FinancialButton from '../../components/icons/FinancialIconBox';
import LegalButton from '../../components/icons/LegalIconBox';
import ReportButton from '../../components/icons/ReportIconBox';
import OnlineButton from '../../components/icons/OnlineIconBox';
import BackButton from '../../components/icons/BackButton';
import DarkGreenOverlay from '../../components/DarkGreenOverlay';
//import Dropdown from 'react-dropdown';
//import 'react-dropdown/style.css';
//import dropdownstyles from './Dropdown.module.css';
import DementiaArticleBox from '../../components/DementiaArticleBox';
//import FirstArticleBox from '../../components/firstArticleBox';
//import DementiaArticleBox from '../../components/DementiaArticleBox'
import { dementiaArticles, qnaData, tipsForApp, userDataSample } from '../../mockData';
import firstImage from '../../assets/firstImage.png';
import secondImage from '../../assets/secondImage.jpg';
import thirdImage from '../../assets/thirdImage.jpg';
import fourthImage from '../../assets/fourthImage.jpg';
import fifthImage from '../../assets/fifthImage.png';
import sixthImage from '../../assets/sixthImage.png';
import seventhImage from '../../assets/seventhImage.png';
import eigthImage from '../../assets/eigthImage.jpg';
import ninthImage from '../../assets/ninthImage.jpg';
import tenthImage from '../../assets/tenthImage.jpg';
import ThreadBox from '../../components/ThreadBox';
import IntroBox from '../../components/IntroBox';
import TipBox from '../../components/TipBox';
import Pill from '../../components/Pill';

const Container = styled.div`
 
  display: flex;
  
  justify-content: space-around;
  `
const ResourcesText = styled.div`
margin-top:10px;
  color: var(--primary-white-text-color);
  font-size: 20px;
  font-weight: bold;
`

const DementiaText = styled.div`
margin-top:50px;
margin-bottom: 20px;
  color: var(--primary-white-text-color);
  font-size: 20px;
  font-weight: bold;
`

const AskAQuestionButton = styled.button`
  background: var(--primary-white-text-color);
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

const TextOnTipsPage = styled.div`
  color: var(--primary-white-text-color);
  font-size: 15px;
`

const Container1 = styled.div`
  display: 'flex';
  justifyContent:'center'; 
  alignItems:'center';
`

const TopContainer = styled.div`
  display: flex;
  flex: 1;
  row: space-around;
  justify-content: space-around;
  margin-top: 12px;
  margin-bottom: 12px;
`





function ArticlesPage({handleBackToResource}){
    const handleForgotPassword = () =>{
        console.log('Forgot password clicked');
    }

    return (
//         <>
//         <ResourcesText>Resources</ResourcesText>
//     <Container>
//     <TipButton></TipButton>
//     <ArticleButton></ArticleButton>
//     </Container>

// <Container>
// <ActivityButton></ActivityButton>
// <SupportButton></SupportButton>
// </Container>

// <Container>
//     <FinancialButton></FinancialButton>
//     <LegalButton></LegalButton>
// </Container>

// <Container>
//     <ReportButton></ReportButton>
//     <OnlineButton></OnlineButton>
// </Container>




// </>

<>
<BackButton onClick={handleBackToResource}></BackButton>
<DementiaText>Dementia Articles</DementiaText>
<DarkGreenOverlay>
        <Container>
          <DementiaArticleBox image={firstImage} title={dementiaArticles.articleTitles[0].title} by={dementiaArticles.articleTitles[0].by}></DementiaArticleBox>
          <DementiaArticleBox image={secondImage} title={dementiaArticles.articleTitles[1].title} by={dementiaArticles.articleTitles[1].by}></DementiaArticleBox>
        </Container>

        <Container>
          <DementiaArticleBox image={thirdImage} title={dementiaArticles.articleTitles[2].title} by={dementiaArticles.articleTitles[2].by}></DementiaArticleBox>
          <DementiaArticleBox image={fourthImage} title={dementiaArticles.articleTitles[3].title} by={dementiaArticles.articleTitles[3].by}></DementiaArticleBox>
        </Container>

        <Container>
          <DementiaArticleBox image={fifthImage} title={dementiaArticles.articleTitles[4].title} by={dementiaArticles.articleTitles[4].by}></DementiaArticleBox>
          <DementiaArticleBox image={sixthImage} title={dementiaArticles.articleTitles[5].title} by={dementiaArticles.articleTitles[5].by}></DementiaArticleBox>
        </Container>

        <Container>
          <DementiaArticleBox image={seventhImage} title={dementiaArticles.articleTitles[6].title} by={dementiaArticles.articleTitles[6].by}></DementiaArticleBox>
          <DementiaArticleBox image={eigthImage} title={dementiaArticles.articleTitles[7].title} by={dementiaArticles.articleTitles[7].by}></DementiaArticleBox>
        </Container>

        <Container>
          <DementiaArticleBox image={ninthImage} title={dementiaArticles.articleTitles[8].title} by={dementiaArticles.articleTitles[8].by}></DementiaArticleBox>
          <DementiaArticleBox image={tenthImage} title={dementiaArticles.articleTitles[9].title} by={dementiaArticles.articleTitles[9].by}></DementiaArticleBox>
        </Container>
        

</DarkGreenOverlay>
</> 


/*<>
<BackButton onClick={handleBackToResource} ></BackButton>
<DementiaText>Tips</DementiaText>
<DarkGreenOverlay>

<TextOnTipsPage>Top dementia tips for all</TextOnTipsPage>

<TipBox tips={tipsForApp.topTipsForAll}/> 
<TextOnTipsPage>Tips for you based on the attributes</TextOnTipsPage>
    <TopContainer><Pill>{userDataSample.patientTraits[0]}</Pill></TopContainer>
    <TipBox tips={tipsForApp.tipsForTrait0}/>
    <TopContainer><Pill>{userDataSample.patientTraits[1]}</Pill></TopContainer>
    <TipBox tips={tipsForApp.tipsForTrait1}/>
    <TopContainer><Pill>{userDataSample.patientTraits[2]}</Pill></TopContainer>
    <TipBox tips={tipsForApp.tipsForTrait2}/>
</DarkGreenOverlay>
</>*/
    
    )
}


export default ArticlesPage;