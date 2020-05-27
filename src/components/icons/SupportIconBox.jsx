import React from 'react';
import styled from 'styled-components'
import SupportIcon from '@material-ui/icons/LocationCity';
import ResourcesButtonCasing from '../ResourcesCasingButton';



function SupportButton(){
    return(

        <ResourcesButtonCasing>
            <SupportIcon style={{color:'var( --primary-green-color)', fontSize: '70px', }}/>
            Support
        </ResourcesButtonCasing> 
      
    )
}
export default SupportButton;