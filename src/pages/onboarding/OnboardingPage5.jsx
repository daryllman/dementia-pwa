import React from 'react';
import styled from 'styled-components';
import BackButton from '../../components/icons/BackButton';
import RoundRectangleButton from '../../components/RoundRectangleButton';

function OnboardingPage5({handleOnboard, prevOnboardingPage}){
    return (
        <>
        <BackButton onClick={prevOnboardingPage}/>
        <p>OnboardingPage5</p>
        <RoundRectangleButton onClick={handleOnboard}>Next</RoundRectangleButton>
        </>
    )
}

export default OnboardingPage5;