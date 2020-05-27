import React from 'react';
import styled from 'styled-components'
import OnlineIcon from '@material-ui/icons/LocalHospitalOutlined';
import ResourcesButtonCasing from '../ResourcesCasingButton';

const Container = styled.button`
background: var(--primary-white-text-color);
font-size: 17px;
font-weight:bold;
color:var( --grey-color);
padding: 0.25em 1em;
border-radius: 10px;
height: 130px;
width: 33vw;
max-width: 500px;

margin:auto;
margin-top: 25px;
margin-bottom: 5px;
margin-left: 15px;
margin-right: 15px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
text-align: center;
`

function OnlineButton(){
    return(

        <Container>
            <OnlineIcon style={{color:'var(  --grey-color)', fontSize: '70px', }}/>
            Online Help
        </Container> 
      
    )
}
export default OnlineButton;
