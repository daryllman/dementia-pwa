import React from 'react';
import styled from 'styled-components';
import BackButton from '../../components/icons/BackButton';
import RoundRectangleButton from '../../components/RoundRectangleButton';
import DarkGreenOverlay from '../../components/DarkGreenOverlay';
import {InputTextField} from '../../components/TextField';
import {ButtonOptionsForm} from '../../components/ButtonOptionsForm';

//React-Select
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();


const data_a = ['Male', 'Female'];

const data_b = [
    { value: 'spouse', label: 'My Spouse' },
    { value: 'grandparent', label: 'My Grandparent' },
    { value: 'greatgrandparent', label: 'My Greatgrandparent' },
    { value: 'sibling', label: 'My Sibling' },
    { value: 'others', label: 'Others' },
  ];

const data_c = [
    { value: 'nil', label: "I don't know" },
    { value: 'Alcohol-related dementia', label: 'Alcohol-related dementia' },
    { value: 'Alzheimer’s Disease', label: 'Alzheimer’s Disease' },
    { value: 'Brain injury related dementia', label: 'My Brain injury related dementia' },
    { value: 'Brain tumor related dementia', label: 'Brain tumor related dementia' },
    { value: 'Corticobasal degeneration', label: 'Corticobasal degeneration' },
    { value: 'Creutzfelt Jakobs Disease', label: 'Creutzfelt Jakobs Disease' },
    { value: 'Dementia with Lewy Bodies', label: 'Dementia with Lewy Bodies' },
    { value: 'Frontotemporal Dementia', label: 'Frontotemporal Dementia' },
    { value: 'HIV-related dementia', label: 'HIV-related dementia' },
    { value: 'Huntington’s disease', label: 'Huntington’s disease' },
    { value: 'Mild Cognitive Impairment', label: 'Mild Cognitive Impairment' },
    { value: 'Mixed Dementia', label: 'Mixed Dementia' },
    { value: 'Motor neurone disease', label: 'Motor neurone disease' },
    { value: 'Multiple Schlerosis related cognitive impairment', label: 'Multiple Schlerosis related cognitive impairment' },
    { value: 'Normal pressure hydrocephalus', label: 'Normal pressure hydrocephalus' },
    { value: 'Parkinson’s dementia', label: 'Parkinson’s dementia' },
    { value: 'Posterior cortical atrophy', label: 'Posterior cortical atrophy' },
    { value: 'Primary Progressive Aphasia', label: 'Primary Progressive Aphasia' },
    { value: 'Progressive Supranuclear Palsy', label: 'Progressive Supranuclear Palsy' },
    { value: 'Vascular Dementia', label: 'Vascular Dementia' },
    { value: 'Wernicke-Korsakoff Syndrome', label: 'Wernicke-Korsakoff Syndrome' },
    { value: 'No diagnosis', label: 'No diagnosis' },
  ];

const data_d = [
    { value: 'nil', label: "I don't know" },
    { value: 'Early', label: 'Early' },
    { value: 'Moderate', label: 'Moderate' },
    { value: 'Severe', label: 'Severe' },
  ];
  
const data_e = ['Sports & Fitness', 'Outdoors',  'Music', 'Arts & Craft', 'Culinary & Baking',  'Foodholic', 'Politics', 'Reading', 'Puzzle & Games', 'Science', 'Exploring new things', 'Travel'];


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
    width: 80vw;
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
    margin-bottom: 0.5vh;
`

const QuestionSegmentContainer = styled.div`
    margin-bottom: 30px;
`

const BottomDescriptorText = styled.div`
    color: var(--primary-white-text-color);
    font-size: 10px;
    font-weight: 300;
    margin-top: 5px;
    margin-bottom: 1vh;
`

const ReactSelectContainer = styled.div`
    max-width: 500px;
`






function OnboardingPage3({nextOnboardingPage, prevOnboardingPage}){
    return (
        <>
        <BackButton onClick={prevOnboardingPage}/>
        <HeaderTitle>Tell me more about the dementia senior you are taking care of</HeaderTitle>
        <DarkGreenOverlay>
            <OverlayInnerContainer>
                {/*__________________________________________________________________ */}
                <QuestionSegmentContainer>
                    <QuestionText>His/her name*</QuestionText>
                    <InputTextField onChange={(e)=>console.log(e.target.value)}/> 
                    <BottomDescriptorText>* the name is only used for addressing purpose within the app</BottomDescriptorText>
                </QuestionSegmentContainer>

                {/*__________________________________________________________________ */}
                <QuestionSegmentContainer>
                    <QuestionText>Gender</QuestionText>
                    <ButtonOptionsForm type="single" options={data_a}/>
                </QuestionSegmentContainer>

                {/*__________________________________________________________________ */}
                <QuestionSegmentContainer>
                    <QuestionText>How old is he/her?</QuestionText>
                    <InputTextField onChange={(e)=>console.log(e.target.value)}/> 
                </QuestionSegmentContainer>

               {/*__________________________________________________________________ */}
                <QuestionSegmentContainer>
                    <QuestionText>Relationship to him/her?</QuestionText>
                    <ReactSelectContainer>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            // defaultValue={[colourOptions[4], colourOptions[5]]}
                            //isMulti
                            options={data_b}
                            onChange={e => console.log(e)}
                        />
                    </ReactSelectContainer>
                </QuestionSegmentContainer>

                {/*__________________________________________________________________ */}
                <QuestionSegmentContainer>
                    <QuestionText>Do you know their dementia diagnosis? Select more than one if applicable</QuestionText>
                    <ReactSelectContainer>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue={data_c[0]}
                            isMulti
                            options={data_c}
                            onChange={e => console.log(e)}
                        />
                    </ReactSelectContainer>
                </QuestionSegmentContainer>

                {/*__________________________________________________________________ */}
                <QuestionSegmentContainer>
                    <QuestionText>What is the stage of the dementia?</QuestionText>
                    <ReactSelectContainer>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue={data_d[0]}
                            //isMulti
                            options={data_d}
                            onChange={e => console.log(e)}
                        />
                    </ReactSelectContainer>
                </QuestionSegmentContainer>

                {/*__________________________________________________________________ */}
                <QuestionSegmentContainer>
                    <QuestionText>What are/were their interests? *</QuestionText>
                    <ButtonOptionsForm type="multiple" options={data_e}/>
                    <BottomDescriptorText>* Stating their interests allows us to notify you if we know of any activities they may be interested in :)</BottomDescriptorText>
                </QuestionSegmentContainer>
                {/*__________________________________________________________________ */}

                <div style={{height: '85px'}}></div>
                <DescriptionText>
                    To provide you with the most relevant and useful information, we will need to take a few minutes to complete the next section. For now you can save your profile first.
                </DescriptionText>

                <RoundRectangleButton onClick={nextOnboardingPage}>Save</RoundRectangleButton>
            </OverlayInnerContainer>
        </DarkGreenOverlay>

        </>
    )
}

export default OnboardingPage3;