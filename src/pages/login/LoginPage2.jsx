import React from 'react';
import {useState} from 'react';
import styled, { withTheme } from 'styled-components';
import DementiaPalsLogo from '../../assets/dementia-pals-logo.png';
import BackButton from '../../components/icons/BackButton';
import {MainInputTextField, InputTextField} from '../../components/TextField';
import RoundRectangleButton from "../../components/RoundRectangleButton";

import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme
  } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { green } from "@material-ui/core/colors";


const ImgContainer = styled.img`
    width: 100px;
`
const LogoLabel = styled.div`
  color: var(--primary-white-text-color);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`

const MainLogoContainer = styled.div`
    margin-top: 20vh;
    margin-bottom: 5vh;
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

export const MainLogo = () => {
    return (
        <>
            <MainLogoContainer>
                <ImgContainer src={DementiaPalsLogo}/>
                <LogoLabel>Dementia Pals</LogoLabel>
            </MainLogoContainer>
        </>
    )
}


function LoginPage2({handleBackToMain, handleSignIn}){
    const [loginPageCount, setLoginPageCount] = useState(0);

    const [username, setUsername] = useState('username');
    const [password, setPassword] = useState('password');
    //const [loginDetails, setLoginDetails] = useState({username:username, password:password})
    return(
        <>
        <BackButton onClick={handleBackToMain}/>
        <MainLogo/>
        <MainInputTextField label="Username" onChange={(e)=>setUsername(e.target.value)}/>
        <div style={{height: "3vh"}}></div>
        <MainInputTextField label="Password" onChange={(e)=>setPassword(e.target.value)}/>
        {/* <InputTextField defaultValue=""/> */}
        <div style={{height: "4vh"}}></div>
        <RoundRectangleButton variant="primary" onClick={()=>handleSignIn({username:username, password:password})}> Sign in</RoundRectangleButton>
        <div style={{height: "2vh"}}></div>
        <BottomUnderlineText onClick={()=>console.log('forgot password')}>Forgot password</BottomUnderlineText>
        </>
    )
}

export default LoginPage2;