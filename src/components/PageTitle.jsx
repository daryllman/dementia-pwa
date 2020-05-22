import React from 'react';
import styled from 'styled-components'

const HeaderTitle = styled.div`
  color: white;
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 30px;
`

function PageTitle({children}){
    return(
    <HeaderTitle>{children}</HeaderTitle>
    )
}

export default PageTitle;