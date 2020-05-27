import React from 'react';
//import {useState} from 'react';
import styled, { withTheme } from 'styled-components';
//import DementiaPalsLogo from '../../assets/dementia-pals-logo.png';
//import BackButton from '../../components/icons/BackButton';
//import {MainInputTextField, InputTextField} from '../../components/TextField';
//import RoundRectangleButton from "../../components/RoundRectangleButton";
import firstImage from '../assets/firstImage.png';
//import '../components/ResourcesCasingButton';
import ResourcesCasingButton from '../components/ResourcesCasingButton';

const ImgContainer = styled.img`
    width: 120px;
    height:60px;
    margin-bottom:5px;
`

const Container = styled.button`
background: var(--primary-white-text-color);
font-size: 11px;
font-weight:bold;
color:var( --primary-green-color);
padding: 0.25em 1em;
border-radius: 10px;
height: 150px;
width: 38vw;
max-width: 500px;
margin:auto;
margin-top: 20px;
margin-bottom: 5px;
margin-left: 15px;
margin-right: 15px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
text-align: center;
`
const By = styled.div`
    margin-top: 5px;
    font-size: 8px;
`

function DementiaArticlesBox({image, title, by}){
    return (
                <Container>
                    <ImgContainer src={image}/>
                    {title}
                    <By>{by}</By>
                    
                </Container>
    )
}
export default DementiaArticlesBox;



