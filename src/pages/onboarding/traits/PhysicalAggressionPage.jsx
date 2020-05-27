
import React from 'react';
import styled from 'styled-components';
import BackButton from '../../../components/icons/BackButton';
import RoundRectangleButton from '../../../components/RoundRectangleButton';
import {InputTextField} from '../../../components/TextField';
import GradingForm from './GradingForm';

const gradingOptions = ['1', '2', '3'];

const HeaderTitle = styled.div`
  color: var(--primary-white-text-color);
  font-size: 24px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 30px;
  max-width: 85vw;
`

const DarkGreenContainer = styled.div`
  background-color: var(--secondary-green-color);
  border-radius: 10px;
  margin-left: 7vw;
  margin-right: 7vw;
  padding: 7vw;
`

const TopGap = styled.div`
  display: block;
  height:30px;
`

const QuestionTitle = styled.div`
  color: var(--primary-white-text-color);
  font-size: 18px;
  margin-bottom: 3vh;
`

const DividerLine = styled.div`
  border-top: 1px solid var(--primary-white-text-color);
  margin-top: 1vh;
  margin-bottom: 2vh;
`





function PhysicalAggressionPage({goBack, handleSave}){
    return (
        <>
        <BackButton onClick={goBack}/>
        <HeaderTitle>Physical Aggression</HeaderTitle>
        <DarkGreenContainer>
            {/*_______________________________________________________ */}
            <QuestionTitle>Resisting care</QuestionTitle>
            <GradingForm type="single" options={gradingOptions}/>
            <DividerLine/>
            {/*_______________________________________________________ */}
            <QuestionTitle>Uses very threatening language/ tone</QuestionTitle>
            <GradingForm type="single" options={gradingOptions}/>
            <DividerLine/>
            {/*_______________________________________________________ */}
            <QuestionTitle>Physically resists care</QuestionTitle>
            <GradingForm type="single" options={gradingOptions}/>
            <DividerLine/>
            {/*_______________________________________________________ */}
            <QuestionTitle>Throws items around</QuestionTitle>
            <GradingForm type="single" options={gradingOptions}/>
            <DividerLine/>
            {/*_______________________________________________________ */}
            <InputTextField defaultValue={'N.A.'} onChange={(e)=>console.log(e.target.value)}/> 
            {/*_______________________________________________________ */}
        
        </DarkGreenContainer>
        <div style={{height: '10vh'}}></div>
        <RoundRectangleButton onClick={handleSave}>Save</RoundRectangleButton>
        </>
    )
}

export default PhysicalAggressionPage;