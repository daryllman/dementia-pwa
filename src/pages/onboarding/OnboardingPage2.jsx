import React from 'react';
import styled from 'styled-components';
import BackButton from '../../components/icons/BackButton';
import RoundRectangleButton from '../../components/RoundRectangleButton';
import DarkGreenOverlay from '../../components/DarkGreenOverlay';
import {InputTextField} from '../../components/TextField';
import {ButtonOptionsForm} from '../../components/ButtonOptionsForm';

const data_a = ['Once a week', '2-3 times a week', 'More than 3 times a week'];
const data_b = ['Yes', 'No'];
const data_c = ['Less than 6 months', '6 months to a year', 'More than a year'];
const data_d = ['Understand dementia better', 'All in one guide platform',  'Get to know other people', 'Desperate to get help', 'Learn the suggested exercises or activities for dementia',  'External Support in providing care', 'Understanding my rights', 'Know the support services available'];


const HeaderTitle = styled.div`
  color: var(--primary-white-text-color);
  font-size: 24px;
  font-weight: bold;
  margin-top: 10vh;
  margin-bottom: 30px;
  text-align: left;
  width:70vw;
  padding-left: 25px;
`

const DescriptionText = styled.div`
    color: var(--primary-white-text-color);
    font-size: 18px;
    font-weight: 300;
    margin: auto;
    width: 50vw;
    text-align: center;
    margin-bottom: 1vh;
`

const OverlayInnerContainer = styled.div`
    padding-left: 25px;
    padding-right: 25px;
    text-align: left;
`

const QuestionText = styled.div`
    color: var(--primary-white-text-color);
    font-size: 18px;
    margin-bottom: 1vh;
`

const QuestionSegmentContainer = styled.div`
    margin-bottom: 30px;
`




function OnboardingPage2({nextOnboardingPage, prevOnboardingPage}){
    return (
        <>
        <BackButton onClick={prevOnboardingPage}/>
        <HeaderTitle>Tell me more about the dementia senior you are taking care of</HeaderTitle>
        <DarkGreenOverlay>
            <OverlayInnerContainer>
                {/*__________________________________________________________________ */}
                {/* <QuestionSegmentContainer>
                    <QuestionText>His/her name*</QuestionText>
                    <InputTextField onChange={(e)=>console.log(e.target.value)}/> 
                </QuestionSegmentContainer> */}

                {/*__________________________________________________________________ */}
                <QuestionSegmentContainer>
                    <QuestionText>On average, how often do you take care of your dementia patient?</QuestionText>
                    <ButtonOptionsForm type="single" options={data_a}/>
                </QuestionSegmentContainer>

                {/*__________________________________________________________________ */}
                <QuestionSegmentContainer>
                    <QuestionText>Are you taking care of him/ her for the whole day? I.e. you are able to attend to him/her at quickly</QuestionText>
                    <ButtonOptionsForm type="single" options={data_b}/>
                </QuestionSegmentContainer>

               {/*__________________________________________________________________ */}
                <QuestionSegmentContainer>
                    <QuestionText>How many years have you been taking care of him/her?</QuestionText>
                    <ButtonOptionsForm type="single" options={data_c}/>
                </QuestionSegmentContainer>

                {/*__________________________________________________________________ */}
                <QuestionSegmentContainer>
                    <QuestionText>What is your main aim of installing Dementia Besties? You can select more than one</QuestionText>
                    <ButtonOptionsForm type="multiple" options={data_d}/>
                </QuestionSegmentContainer>

                {/*__________________________________________________________________ */}

                <div style={{height: '85px'}}></div>
                <DescriptionText>Tell me more about the dementia senior you are taking care of</DescriptionText>

                <RoundRectangleButton onClick={nextOnboardingPage}>Next</RoundRectangleButton>
            </OverlayInnerContainer>
        </DarkGreenOverlay>

        </>
    )
}

export default OnboardingPage2;