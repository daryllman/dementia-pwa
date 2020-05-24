import React from 'react';
import {useState} from 'react'
import styled from 'styled-components';
import LoginPage1 from './LoginPage1';
import LoginPage2 from './LoginPage2';




function LoginController({setHasLoggedIn}){
    const [loginPageCount, setLoginPageCount] = useState(1);
    const handleToSignIn = () =>{
        setLoginPageCount(2);
        console.log('Sign in Button clicked - going to Sign In page to key in your particulars');
    }
    const handleBackToMain = () =>{
        setLoginPageCount(1);
        console.log('Back Button clicked - going back to main page');
    }
    const handleSignIn = (loginDetailsObject) =>{
        setLoginPageCount(1);
        console.log('Sign In clicked - Checking sign in details...');
        console.log('... going to Onboarding page');
        console.log(loginDetailsObject); // print out an object with form of {username: 'username', password: 'password'}
        setHasLoggedIn(true);
    }
    const handleToSignUp = () =>{
        console.log('Sign Up clicked');
    }
    return(
        <>
        {loginPageCount===1 &&
            <LoginPage1 handleToSignIn={handleToSignIn} handleToSignUp={handleToSignUp}/>
        }

        {loginPageCount===2 &&
            <LoginPage2 handleSignIn={handleSignIn} handleBackToMain={handleBackToMain} />
        }
        </>
    )
}


export default LoginController;