import React from 'react';
import styled from 'styled-components';
import BackButton from '../../components/icons/BackButton';
import RoundRectangleButton from '../../components/RoundRectangleButton';

function OnboardingPage4({nextOnboardingPage, prevOnboardingPage}){
    return (
        <>
        <BackButton onClick={prevOnboardingPage}/>
        <p>OnboardingPage4</p>
        <RoundRectangleButton onClick={nextOnboardingPage}>Next</RoundRectangleButton>
        </>
    )
}

export default OnboardingPage4;