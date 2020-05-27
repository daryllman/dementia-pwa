import React, {useState} from 'react';
import styled from 'styled-components';
import BackButton from '../../components/icons/BackButton';
import RoundRectangleButton from '../../components/RoundRectangleButton';
import {TraitsOptionsForm} from '../../components/TraitsOptionsForm';

import WanderingPage from './traits/WanderingPage';
import SelfHarmingPage from './traits/SelfHarmingPage';
import VerbalAggressionPage from './traits/VerbalAggressionPage';
import PhysicalAggressionPage from './traits/PhysicalAggressionPage'
import ResistivePage from './traits/ResistivePage';
import InappropriatePage from './traits/InappropriatePage';
import QuietPage from './traits/QuietPage';
import ForgetfulPage from './traits/ForgetfulPage';




const traitOptions = ['Wandering', 'Self- Harming', 'Verbal Aggression', 'Physical Aggression', 'Resistive', 'Inappropriate', 'Quiet', 'Forgetful', 'Others']

const HeaderTitle = styled.div`
  color: var(--primary-white-text-color);
  font-size: 24px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 30px;
  max-width: 85vw;
`

function OnboardingPage5({handleOnboard, prevOnboardingPage}){
    const [traitsPage, setTraitsPage] = useState('main');
    const [activeTraits, setActiveTraits] = useState(()=>{
        let result = {}
        traitOptions.forEach(element => {
            result[element] = false;
        })
        console.log(result);
        return result
    });

    const handleSave = (page) =>{
        setActiveTraits(activeTraits => (
            {
            ...activeTraits,
            [page]: true
            }
        ));
        console.log(activeTraits);
        setTraitsPage('main');
    }
    return (
        <>
        {traitsPage=='main'&&
            <>
                <BackButton onClick={prevOnboardingPage}/>
                <HeaderTitle>Please fill up as many behaviourial traits as applicable</HeaderTitle>
                <TraitsOptionsForm options={traitOptions} setTraitsPage={setTraitsPage} activeTraits={activeTraits}/>
                <div style={{height:'5vh'}}></div>
                <RoundRectangleButton onClick={handleOnboard}>Done</RoundRectangleButton>
            </>
        }
        {traitsPage==traitOptions[0]&&
            <>
                <WanderingPage goBack={()=>setTraitsPage('main')} handleSave={()=>handleSave(traitOptions[0])}/>
            </>
        }
        {traitsPage==traitOptions[1]&&
            <>
                <SelfHarmingPage goBack={()=>setTraitsPage('main')} handleSave={()=>handleSave(traitOptions[1])}/>
            </>
        }
        {traitsPage==traitOptions[2]&&
            <>
                <VerbalAggressionPage goBack={()=>setTraitsPage('main')} handleSave={()=>handleSave(traitOptions[2])}/>
            </>
        }
        {traitsPage==traitOptions[3]&&
            <>
                <PhysicalAggressionPage goBack={()=>setTraitsPage('main')} handleSave={()=>handleSave(traitOptions[3])}/>
            </>
        }
        {traitsPage==traitOptions[4]&&
            <>
                <ResistivePage goBack={()=>setTraitsPage('main')} handleSave={()=>handleSave(traitOptions[4])}/>
            </>
        }
        {traitsPage==traitOptions[5]&&
            <>
                <InappropriatePage goBack={()=>setTraitsPage('main')} handleSave={()=>handleSave(traitOptions[5])}/>
            </>
        }
        {traitsPage==traitOptions[6]&&
            <>
                <QuietPage goBack={()=>setTraitsPage('main')} handleSave={()=>handleSave(traitOptions[6])}/>
            </>
        }
        {traitsPage==traitOptions[7]&&
            <>
                <ForgetfulPage goBack={()=>setTraitsPage('main')} handleSave={()=>handleSave(traitOptions[7])}/>
            </>
        }
        
        </>
    )
}

export default OnboardingPage5;