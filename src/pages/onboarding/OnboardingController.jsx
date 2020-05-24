import React from 'react';
import {useState} from 'react'
import styled from 'styled-components';
import OnboardingPage1 from './OnboardingPage1';
import OnboardingPage2 from './OnboardingPage2';
import OnboardingPage3 from './OnboardingPage3';
import OnboardingPage4 from './OnboardingPage4';
import OnboardingPage5 from './OnboardingPage5';

function OnboardingController({handleOnboard}){
    const [onboardingPageCount, setOnboardingPageCount] = useState(1);
    const nextOnboardingPage = ()=>{
        setOnboardingPageCount(onboardingPageCount + 1)
    }
    const prevOnboardingPage = ()=>{
        setOnboardingPageCount(onboardingPageCount - 1)
    }

    const [onboardData, setOnboardData] = useState('random Onboard data');
    const addCaregiverData = () => {
        setOnboardData(onboardData + 'caregiverdata ')
    }
    const addDementiaPersonData = () => {
        setOnboardData(onboardData + 'dementiapersondata ')
    }
    const addDementiaTraitsData = () => {
        setOnboardData(onboardData + 'dementiatraitsdata ')
    }
    const saveOnboardData = () =>{
        handleOnboard(onboardData);
    }
    return (
        <>
        {onboardingPageCount==1 &&
            <OnboardingPage1 nextOnboardingPage={nextOnboardingPage}/>
        }
        {onboardingPageCount==2 &&
            <OnboardingPage2 nextOnboardingPage={nextOnboardingPage} prevOnboardingPage={prevOnboardingPage}/>
        }
        {onboardingPageCount==3 &&
            <OnboardingPage3 nextOnboardingPage={nextOnboardingPage} prevOnboardingPage={prevOnboardingPage}/>
        }
        {onboardingPageCount==4 &&
            <OnboardingPage4 nextOnboardingPage={nextOnboardingPage} prevOnboardingPage={prevOnboardingPage}/>
        }
        {onboardingPageCount==5 &&
            <OnboardingPage5 nextOnboardingPage={nextOnboardingPage} prevOnboardingPage={prevOnboardingPage} handleOnboard={saveOnboardData}/>
        }
        </>
    )
}

export default OnboardingController;