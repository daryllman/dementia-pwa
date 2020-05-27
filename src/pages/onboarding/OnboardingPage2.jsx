import React from 'react';
import styled from 'styled-components';
import BackButton from '../../components/icons/BackButton';
import RoundRectangleButton from '../../components/RoundRectangleButton';
import DarkGreenOverlay from '../../components/DarkGreenOverlay';
import {InputTextField} from '../../components/TextField';
import {RoundRectangleOptionsButton2} from '../../components/ToggleOptionsForm';

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
                <QuestionSegmentContainer>
                    <QuestionText>His/her name*</QuestionText>
                    <InputTextField onChange={(e)=>console.log(e.target.value)}/> 
                </QuestionSegmentContainer>

                <QuestionSegmentContainer>
                    <QuestionText>His/her name*</QuestionText>
                    <InputTextField /> 
                </QuestionSegmentContainer>
                <RoundRectangleOptionsButton2 selected={false}>Yes</RoundRectangleOptionsButton2>
                    <RoundRectangleOptionsButton2 selected={true}>Less than 6 months sd sd</RoundRectangleOptionsButton2 >

                <RoundRectangleButton onClick={nextOnboardingPage}>Next</RoundRectangleButton>
            </OverlayInnerContainer>
        </DarkGreenOverlay>

        </>
    )
}

export default OnboardingPage2;