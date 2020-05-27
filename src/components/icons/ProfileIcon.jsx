import React from 'react';
import styled from 'styled-components'
import ActivityIcon from '@material-ui/icons/DirectionsRunOutlined';
import ProfileIcon from '@material-ui/icons/PersonOutlined';
import ResourcesButtonCasing from '../ResourcesCasingButton';

const Container = styled.button`
background: var(--primary-white-text-color);
font-size: 17px;
font-weight:bold;
color:var( --primary-green-color);
padding: 0.25em 1em;
border-radius: 100px;
height: 130px;
width: 33vw;
max-width: 500px;

margin:auto;
margin-top: 20px;
margin-bottom: 20px;
margin-left: 15px;
margin-right: 15px;

text-align: center;
`


function ProfileButton(){
    return(

        <Container>
            <ProfileIcon style={{color:'var( --primary-green-color)', fontSize: '70px', }}/>
            
        </Container> 
      
    )
}
export default ProfileButton;
