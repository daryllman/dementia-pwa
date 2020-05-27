import React from 'react';
import { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route }from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import LoginController from './pages/login/LoginController'
import OnboardingController from './pages/onboarding/OnboardingController';
import HomePage from './pages/home/HomePage';
import ResourcesPage from './pages/resources/ResourcesPage';
import ResourcesController from './pages/resources/ResourcePageController'
import QnAPage from './pages/qna/QnAPage';
import ProfilePage from './pages/profile/ProfilePage';
import BottomNavBar from './components/BottomNavBar';
import TopNavBar from './components/TopNavBar';

import styled from 'styled-components'

import {userData, userDataSample, otherData, appMode} from './mockData';

// const hasOnboarded = data.hasOnboarded;
// const hasLoggedIn = data.hasLoggedIn;


function App() {
  //const [currPage, setCurrPage] = useState('/'); ---to be done --to set state to sync desktop n mobile view

  const [hasLoggedIn, setHasLoggedIn] = useState(userData!=null || appMode==2 || appMode==3);
  const [hasOnboarded, setHasOnboarded] = useState(userData!=null && userData.hasOnboarded || appMode==3);


  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const sendOnboardDetails = ({OnboardData}) =>{
    console.log('sent onboard details to server');
    setHasOnboarded(true);
  }

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ //can use screen size also
        width: window.innerWidth,
        height: window.innerHeight,
      })
      console.log('size of window.innerWidth: ' + window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])


  return ( 
    <div className="App">

      {/* Has not logged in - show login screen*/}
      {!hasLoggedIn&&
        <LoginController setHasLoggedIn={setHasLoggedIn}/>
      }


      {/* Has not Onboarded - show onboarding*/}
      {hasLoggedIn&&!hasOnboarded&&
      <OnboardingController handleOnboard={sendOnboardDetails}/>
      }


      {/* Logged in & Onboarded - show main app */}
      {hasLoggedIn&&hasOnboarded&&
        (
          dimensions.width>6000? //width of phones:300-500
            (
            <DesktopLayout>
              <MainPageContent/>
            </DesktopLayout>
            )
            :
            (
            <MobileLayout>
              <MainPageContent/>
            </MobileLayout>
            )
        )
      }

    </div>
  )
}


function MainPageContent(){
  return (
    <div className="MainPageContent" style={{ width:'100%', height:'100%'}}>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/resources' component={ResourcesController}/>
          <Route path='/qna' component={QnAPage}/>
          <Route path='/profile' component={ProfilePage}/>
        </Switch>
    </div>
  )
}


function MobileLayout({children}){
  return(
    <>
    <div style={{'padding-bottom':'0px'}}> {/* Padding bottom: 56px ---added in DarkGreenOverlay. If not using, please use whereever deem fit*/}
      {/* <div style={{background:'grey'}}>MobileLayout</div> */}
      {children}
      {/* <div style={{background:'red', position:'fixed', bottom:'0', width:'100vw', height:'68px'}}>MobileLayout-BottomNavBar</div> */}
    </div>
    <BottomNavBar/>

    </>
  )
}

function DesktopLayout({children}){ //IGNORE THIS ---to fixxxx
  return(
    <>
    <div style={{background:'grey'}}>DesktopLayout - TopNavBar(ignore desktop view first) (please make your window smaller)</div>
      {children}
    </>
  )
}

export default App;

