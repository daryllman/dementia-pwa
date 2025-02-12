import React from 'react';
import BackButton from '../../components/icons/BackButton';
import DementiaPalsLogo from '../../assets/dementia-pals-logo.png';
import styled from 'styled-components';
import RoundRectangleButton from '../../components/RoundRectangleButton';


const ImgContainer = styled.img`
    width: 130px;
`
const LogoLabel = styled.div`
  color: var(--primary-white-text-color);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`
const MainLogoContainer = styled.div`
    margin-top: 25vh;
    margin-bottom: 5vh;
`

const DescriptionText = styled.div`
    color: var(--primary-white-text-color);
    font-size: 18px;
    font-weight: 300;
    margin: auto;
    width: 60vw;
    text-align: center;
    margin-bottom: 8vh;
`

const BottomUnderlineText = styled.div`
    color: var(--primary-white-text-color);
    font-size: 14px;
    font-weight: 300;
    margin: auto;
    text-align: center;
    text-decoration-line: underline;
    cursor: pointer;
`


const MainLogo = () => {
    return (
        <>
            <MainLogoContainer>
                <ImgContainer src={DementiaPalsLogo}/>
                <LogoLabel>Dementia Pals</LogoLabel>
            </MainLogoContainer>
        </>
    )
}

function LoginPage1({handleToSignIn, handleToSignUp}){
    const handleOnClick = () =>{
        console.log('button clicked - this should trigger handle functions');
    }
    const handleForgotPassword = () =>{
        console.log('Forgot password clicked');
    }

    return(
        <>
        <MainLogo/>
        <DescriptionText>Platform for Caregivers of people with dementia</DescriptionText>
        <RoundRectangleButton variant="secondary" onClick={handleToSignUp}>Sign up</RoundRectangleButton>
        <div style={{height:'2vh'}}></div>
        <RoundRectangleButton variant="primary" onClick={handleToSignIn}>Sign in</RoundRectangleButton>
        <div style={{height:'2vh'}}></div>
        <BottomUnderlineText onClick={handleForgotPassword}>Forgot password</BottomUnderlineText>
        </>
    )
}

export default LoginPage1;

/*

const HeaderTitle = styled.div`
  color: var(--primary-white-text-color);
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 30px;
`

function PageTitle({children}){
    return(
    <HeaderTitle>{children}</HeaderTitle>
    )
}

export default PageTitle;

*/