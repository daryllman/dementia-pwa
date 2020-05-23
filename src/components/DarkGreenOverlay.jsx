import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const DarkGreenContainer = styled.div`
  background-color: var(--secondary-green-color);
  min-height: 95vh;
  border-radius: 40px 40px 0px 0px;
  padding-bottom: 56px;
`

const TopGap = styled.div`
  display: block;
  height:30px;
`


function DarkGreenOverlay({children}){
    return(
    <DarkGreenContainer>
      <TopGap/>
      {children}
    </DarkGreenContainer>
    )
}

export default DarkGreenOverlay;