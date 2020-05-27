import React, { useEffect, useState } from 'react';
import styled from 'styled-components';



const ButtonContainer = styled.div`
  display: table;
  background-color: transparent;
  border-style: solid;
  border-width: 2px;
  border-color: ${props=> props.selected? "black" : "white"};
  height: 66px;
  width: 150px;
  margin: 10px;
  color:  ${props=> props.selected? "black":"white"};
  font-size: 20px;
  font-weight: 500;
  border-radius: 100px;
  text-align: center;
  transition: 0.4s;
  cursor: pointer;
  &:hover{
      opacity: 0.6;
  }
`

const TextSpan = styled.span`
    display: table-cell;
    vertical-align: middle;
    padding: 10px;
    padding-top: 18px;
    padding-bottom: 18px;
`

const OptionsFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`


function RoundRectangleOptionsButton({children, selected, onClick, id}){
    //const colorStyle = colorStyle? colorStyle : "primary"
    return(
    <ButtonContainer onClick={()=>{onClick(children);}} selected={selected}><TextSpan>{children}</TextSpan></ButtonContainer>
    )
}



// Traits Options Form


function TraitsOptionsForm({options, setTraitsPage, activeTraits}){

    return(
        <>
        <OptionsFormContainer>
            {options.map((option, index)=>{
                return(
                    <>
                    <RoundRectangleOptionsButton onClick={(option)=>{setTraitsPage(option); console.log(option);}} selected={activeTraits[option]}>{option}</RoundRectangleOptionsButton>
                    {/* <RoundRectangleOptionsButton onClick={(option)=>console.log(option)} selected={true}>{option}</RoundRectangleOptionsButton>
                    <RoundRectangleOptionsButton onClick={(option)=>console.log(option)} selected={false}>{option}</RoundRectangleOptionsButton> */}
                    </>
                )
            })}
        </OptionsFormContainer>
        

        </>
    )
}

export {TraitsOptionsForm};