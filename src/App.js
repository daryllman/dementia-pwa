import React from 'react';
import { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route }from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import LoginPage from './pages/onboarding/LoginPage'
import HomePage from './pages/home/HomePage';
import ResourcesPage from './pages/resources/ResourcesPage';
import QnAPage from './pages/qna/QnAPage';
import ProfilePage from './pages/profile/ProfilePage';
import BottomNavBar from './components/BottomNavBar';
import TopNavBar from './components/TopNavBar';

import styled from 'styled-components'

import {userData, otherData} from './mockData';

// const hasOnboarded = data.hasOnboarded;
// const hasLoggedIn = data.hasLoggedIn;


function App() {
  //const [currPage, setCurrPage] = useState('/'); ---to be done --to set state to sync desktop n mobile view

  const [hasLoggedIn, setHasLoggedIn] = useState(userData!=null);
  const [hasOnboarded, setHasOnboarded] = useState(userData!=null && userData.hasOnboarded);


  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

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
        <LoginPage/>
      }


      {/* Has not Onboarded - show onboarding*/}
      {hasLoggedIn&&!hasOnboarded&&
      (<p>this shld show onboarding screen</p>)
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
          <Route path='/resources' component={ResourcesPage}/>
          <Route path='/qna' component={QnAPage}/>
          <Route path='/profile' component={ProfilePage}/>
        </Switch>
    </div>
  )
}


function MobileLayout({children}){
  return(
    <>
    <div style={{'padding-bottom':'56px'}}>
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

