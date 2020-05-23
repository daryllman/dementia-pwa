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
`;


function BackButton({onClick}){
    return(
        <ButtonWrapper onClick={onClick}>
            <BackButtonIcon style={{color:'var(--primary-white-text-color)'}}/>
        </ButtonWrapper>
    )
}

export default BackButton;