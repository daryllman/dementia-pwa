import React from 'react';
import styled from 'styled-components'
import BackButtonIcon from '@material-ui/icons/ArrowBackIos';

const ButtonWrapper = styled.div`
  background: transparent;
  border-radius: 3px;
  position: absolute;
  border-width: 0;
  top: 15px;
  left: 15px;
  cursor: pointer;
  transition: 0.4s;
  color: var(--primary-white-text-color);
  ${BackButtonIcon}:hover{
      color: var(--secondary-green-color);
  }
`;


function BackButton({onClick}){
    return(
        <ButtonWrapper onClick={onClick}>
            <BackButtonIcon/>
        </ButtonWrapper>
    )
}

export default BackButton;