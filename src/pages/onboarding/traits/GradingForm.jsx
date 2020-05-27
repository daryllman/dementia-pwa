import React, { useEffect, useState } from 'react';
import styled from 'styled-components';



const ButtonContainer = styled.div`
  display: table;
  background-color:  ${props=> props.selected? "var(--primary-green-color)" : "var(--light2-grey-color)"};
  border: none;
  height: 50px;
  width: 50px;
  margin: 10px;
  color:  ${props=> props.selected? "white":"var(--primary-text-color)"};
  font-size: 14px;
  font-weight: 300;
  border-radius: 100px;
  text-align: center;
  transition: 0.4s;
  cursor: pointer;
  box-shadow: ${props=> props.selected&&props.selected==false? "none":"0px 4px 4px rgba(0, 0, 0, 0.25)"};
  &:hover{
      opacity: 0.7;
  }
`

const TextSpan = styled.span`
    display: table-cell;
    vertical-align: middle;
    padding: 10px;
`

const OptionsFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`


function RoundRectangleOptionsButton({children, selected, onClick, id}){
    //const colorStyle = colorStyle? colorStyle : "primary"
    return(
    <ButtonContainer onClick={()=>{onClick(children);}} selected={selected}><TextSpan>{children}</TextSpan></ButtonContainer>
    )
}



// 2 types of ButtonOptionsForm:
// 1) Single: You can only choose one. Choosing some other option will unchoose others.
// result: only the chosen (if any)
// 2) Multiple: You can choose multiple options.
// result: all that is chosen in array


function GradingForm({type, options}){
    const [selectionTracker, setSelectionTracker] = useState(()=>{
        let result = {}
        options.forEach(element => {
            result[element] = false;
        })
        return result
    });

    const handleClicks = (optionChosen) => {
        console.log('You chosen: '+ optionChosen);

        if(type=='single'){ //need to toggle
            setSelectionTracker(()=>{
                let result = {}
                options.forEach(element => {
                    result[element] = false;
                })
                return({
                    ...result,
                    [optionChosen]: true
    
                })})


        }else{ //type=='multiple'
        //selectionTracker[optionChosen] = true;
        setSelectionTracker(selectionTracker => (
            {
            ...selectionTracker,
            [optionChosen]: selectionTracker[optionChosen]? false : true
        
            }
        ));

        }
        console.log(selectionTracker)
    }

    return(
        <>
        <OptionsFormContainer>
            {options.map((option, index)=>{
                return(
                    <RoundRectangleOptionsButton onClick={handleClicks} selected={selectionTracker[option]}>{option}</RoundRectangleOptionsButton>

                )
            })}
        </OptionsFormContainer>
        

        </>
    )
}

export default GradingForm;