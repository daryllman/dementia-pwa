import React from 'react';
import styled from 'styled-components'

const PillContainer = styled.div`
  background-color: var(--tealgreen-pill-color);
  display:block;
  border-radius: 15px;
  height: auto;
  padding: 5px;
  width: fit-content;
  color: var(--primary-white-text-color);
  font-size: 11px;'
`

function Pill({children}){
    return(
    <PillContainer>{children}</PillContainer>
    )
}

export default Pill;