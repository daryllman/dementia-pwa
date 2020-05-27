import React from 'react';
import styled from 'styled-components'
import  FinancialIcon from '@material-ui/icons/Money';
import ResourcesButtonCasing from '../ResourcesCasingButton';



function FinancialButton(){
    return(

        <ResourcesButtonCasing>
            <FinancialIcon style={{color:'var( --primary-green-color)', fontSize: '70px', }}/>
            Financial
        </ResourcesButtonCasing> 
      
    )
}
export default FinancialButton;
