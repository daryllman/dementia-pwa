import React from 'react';
import styled from 'styled-components';
import BackButton from '../../components/icons/BackButton';
import RoundRectangleButton from '../../components/RoundRectangleButton';

function OnboardingPage1({nextOnboardingPage}){
    return (
        <>
        <BackButton/>
        <p>OnboardingPage1</p>
        <RoundRectangleButton onClick={nextOnboardingPage}>Next</RoundRectangleButton>
        </>
    )
}

export default OnboardingPage1;