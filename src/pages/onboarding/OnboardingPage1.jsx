import React from 'react';
import styled from 'styled-components';
//import BackButton from '../../components/icons/BackButton';
import RoundRectangleButton from '../../components/RoundRectangleButton';

const HeaderLabel = styled.div`
  color: var(--primary-white-text-color);
  font-size: 24px;
  font-weight: bold;
  margin-top: 35vh;
  margin-bottom: 10vh;
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

function OnboardingPage1({nextOnboardingPage}){
    return (
        <>
        <HeaderLabel>Welcome Jack!</HeaderLabel>
        <DescriptionText>Tell me more about yourself as a caregiver</DescriptionText>
        <RoundRectangleButton onClick={nextOnboardingPage}>Let's Go</RoundRectangleButton>
        </>
    )
}

export default OnboardingPage1;