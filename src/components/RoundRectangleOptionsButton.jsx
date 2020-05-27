import React from 'react';
import styled from 'styled-components'

//Used in Onboarding Pages only.
//If you want the RoundRectangle button that is used for 'Let's Go' 'Sign in', see RoundRectangleButton file
const ButtonContainer = styled.div`
  display: table;
  background-color:  ${props=> props.variant&&props.variant==='secondary'? "transparent":"var(--light2-grey-color)"};
  border: ${props=> props.variant&&props.variant==='secondary'? "1px var(--light2-grey-color) solid":"none"};
  height: 66px;
  width: 190px;
  margin: auto;
  color:  ${props=> props.variant&&props.variant==='secondary'? "var(--light2-grey-color)":"var(--primary-text-color)"};
  font-size: 20px;
  font-weight: bold;
  border-radius: 100px;
  text-align: center;
  transition: 0.4s;
  cursor: pointer;
  box-shadow: ${props=> props.variant&&props.variant==='secondary'? "none":"0px 4px 4px rgba(0, 0, 0, 0.25)"};
  &:hover{
      color: white;
      border: none;
      background: var(--secondary-green-color);
  }
`

const TextSpan = styled.span`
    display: table-cell;
    vertical-align: middle;
`

function RoundRectangleOptionsButton({children, variant, onClick}){
    //const colorStyle = colorStyle? colorStyle : "primary"
    return(
    <ButtonContainer onClick={onClick} variant={variant}><TextSpan>{children}</TextSpan></ButtonContainer>
    )
}

export default RoundRectangleOptionsButton;


// USAGE
// specify variant - 'primary' or 'secondary'. (default is primary if not specified)
/*
<RoundRectangleButton variant="secondary">Sign in</RoundRectangleButton>
<RoundRectangleButton variant="primary" >Sign in</RoundRectangleButton>
<RoundRectangleButton >Sign in</RoundRectangleButton>
*/