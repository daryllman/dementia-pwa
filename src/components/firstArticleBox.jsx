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
import DementiaArticleBox from '../components/DementiaArticleBox'
import { dementiaArticles } from '../mockData';
// const ImgContainer = styled.img`
//     width: 100px;
// `

function FirstArticleBox(){
 
    return <DementiaArticleBox  image={firstImage} title={dementiaArticles.articleTitles[0].title} by={dementiaArticles.articleTitles[0].by}/>

}

export default FirstArticleBox;

