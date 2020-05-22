import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  background-color: var(--primary-white-text-color);
  margin-top: 15px;
  margin-bottom: 25px;
  display:block;
  border-radius: 15px;
  height: auto;
  min-height: 40px;
  padding: 15px;
  width: auto;
  margin-left: 30px;
  margin-right:30px;
`

function TextBox({children}){
    return(
    <Container>{children}</Container>
    )
}

export default TextBox;