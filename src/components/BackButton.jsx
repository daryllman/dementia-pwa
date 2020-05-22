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


function BackButton(){
    return(
        <ButtonWrapper>
            <BackButtonIcon style={{color:'white'}}/>
        </ButtonWrapper>
    )
}

export default BackButton;