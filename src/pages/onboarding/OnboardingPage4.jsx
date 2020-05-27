import React from 'react';
import styled from 'styled-components';
//import BackButton from '../../components/icons/BackButton';
import RoundRectangleButton from '../../components/RoundRectangleButton';

const HeaderLabel = styled.div`
  color: var(--primary-white-text-color);
  font-size: 24px;
  font-weight: bold;
  margin-top: 30vh;
  margin-bottom: 13vh;
`

const MidText = styled.div`
    color: var(--primary-white-text-color);
    font-size: 18px;
    margin: auto;
    width: 80vw;
    text-align: center;
    margin-bottom: 1vh;
`

const DescriptionText = styled.div`
    color: var(--primary-white-text-color);
    font-size: 18px;
    font-weight: 300;
    margin: auto;
    width: 80vw;
    text-align: center;
    margin-bottom: 1vh;
`

function OnboardingPage4({nextOnboardingPage}){
    return (
        <>
        <HeaderLabel>Welcome Jack!</HeaderLabel>
        <MidText>We are left with the last section to Mr Lim Boon Kok’s Dementia profile.</MidText>
        <div style={{height: '10vh'}}></div>
        <DescriptionText>We are left with the last section to Mr Lim Boon Kok’s Dementia profile.</DescriptionText>
        <RoundRectangleButton onClick={nextOnboardingPage}>Let's Go</RoundRectangleButton>
        </>
    )
}

export default OnboardingPage4;