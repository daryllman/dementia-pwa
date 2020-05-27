import React from 'react';
import styled from 'styled-components'
import LegalIcon from '@material-ui/icons/AccountBalanceOutlined';
import ResourcesButtonCasing from '../../components/ResourcesCasingButton';



function LegalButton(){
    return(

        <ResourcesButtonCasing>
            <LegalIcon style={{color:'var( --primary-green-color)', fontSize: '70px', }}/>
           Legal
        </ResourcesButtonCasing> 
      
    )
}
export default LegalButton;
