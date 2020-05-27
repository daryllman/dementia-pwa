import React from 'react';
import KeyIcon from '@material-ui/icons/VpnKey';
import ArrowIcon from '@material-ui/icons/KeyboardArrowRight';
import NotificationIcon from '@material-ui/icons/Notifications';
import HelpIcon from '@material-ui/icons/Help';
import ProfileIcon from '../../components/icons/ProfileIcon';
import DarkGreenOverlay from '../../components/DarkGreenOverlay';
import styled from 'styled-components';
import "./style.css";

const ProfileText = styled.div`
margin-top:20px;
margin-bottom: 10px;
margin-left: 50px;

  color: var(--primary-white-text-color);
  font-size: 20px;
  font-weight: bold;
 
`
const TopContainer = styled.div`
  display: flex;
  flex: 1;
  margin-left: 50px;
  
  
  margin-bottom: 12px;
`



function ProfilePage(){
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                width: 350,
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    );
    return(
        <>
        <ProfileIcon></ProfileIcon>
        
        <DarkGreenOverlay>
        <TopContainer><KeyIcon style={{color:'var( --primary-white-text-color)', fontSize: '40px', marginTop:'12px' }}/><ProfileText>Account</ProfileText><ArrowIcon style={{color:'var( --primary-white-text-color)', fontSize: '50px', marginTop:'12px' ,marginLeft:'90px'}}/></TopContainer>
        <ColoredLine color="white" />
        <TopContainer><NotificationIcon style={{color:'var( --primary-white-text-color)', fontSize: '40px', marginTop:'12px' }}/><ProfileText>Notifications</ProfileText><ArrowIcon style={{color:'var( --primary-white-text-color)', fontSize: '50px', marginTop:'12px', marginLeft:'50px'}}/></TopContainer>
        <ColoredLine color="white" />
        <TopContainer><HelpIcon style={{color:'var( --primary-white-text-color)', fontSize: '40px', marginTop:'12px' }}/><ProfileText>Help</ProfileText><ArrowIcon style={{color:'var( --primary-white-text-color)', fontSize: '50px', marginTop:'12px', marginLeft:'120px'}}/></TopContainer>
        <ColoredLine color="white" />
      
        </DarkGreenOverlay>
        </>
    )
}

export default ProfilePage;