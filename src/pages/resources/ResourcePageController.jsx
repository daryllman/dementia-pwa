import React from 'react';
import {useState} from 'react'
import styled from 'styled-components';
import ResourcesPage from './ResourcesPage';
import TipsPage from './TipsPage';
import ArticlesPage from './ArticlesPage';




function ResourcesController(){
    const [ResourcesPageCount, setResourcesPageCount] = useState(1);
    const handleToTipsPage = () =>{
        setResourcesPageCount(2);
        console.log('Sign in Button clicked - going to Sign In page to key in your particulars');
    }
    const handleToArticlesPage = () =>{
        setResourcesPageCount(3);
        console.log('Sign in Button clicked - going to Sign In page to key in your particulars');
    }
    const handleBackToResource = () =>{
        setResourcesPageCount(1);
        console.log('Back Button clicked - going back to main page');
    }
    // const handleSignIn = (loginDetailsObject) =>{
    //     setLoginPageCount(1);
    //     console.log('Sign In clicked - Checking sign in details...');
    //     console.log('... going to Onboarding page');
    //     console.log(loginDetailsObject); // print out an object with form of {username: 'username', password: 'password'}
    //     setOnClick(true);
    // }
    // const handleToSignUp = () =>{
    //     console.log('Sign Up clicked');
    // }
    return(
        <>
        {ResourcesPageCount===1 &&
            <ResourcesPage handleToTipsPage={handleToTipsPage} handleToArticlesPage={handleToArticlesPage} />
        }

        {ResourcesPageCount===2 &&
            <TipsPage handleBackToResource={handleBackToResource} />
        }

        {ResourcesPageCount===3 &&
            <ArticlesPage handleBackToResource={handleBackToResource} />
        }

        </>
    )
}


export default ResourcesController;