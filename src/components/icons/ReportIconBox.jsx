import React from 'react';
import styled from 'styled-components'
import  ReportIcon from '@material-ui/icons/WifiTetheringOutlined';
import ResourcesButtonCasing from '../ResourcesCasingButton';



function ReportButton(){
    return(

        <ResourcesButtonCasing>
            <ReportIcon style={{color:'var( --primary-green-color)', fontSize: '70px', }}/>
            Report Lost
        </ResourcesButtonCasing> 
      
    )
}
export default ReportButton;
