import React from 'react';
import styled from 'styled-components';
import BackButton from '../../components/icons/BackButton';
import RoundRectangleButton from '../../components/RoundRectangleButton';

function OnboardingPage3({nextOnboardingPage, prevOnboardingPage}){
    return (
        <>
        <BackButton onClick={prevOnboardingPage}/>
        <p>OnboardingPage3</p>
        <RoundRectangleButton onClick={nextOnboardingPage}>Next</RoundRectangleButton>
        </>
    )
}

export default OnboardingPage3;