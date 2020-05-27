import React from 'react';
import styled from 'styled-components'
import ActivityIcon from '@material-ui/icons/DirectionsRunOutlined';
import ResourcesButtonCasing from '../ResourcesCasingButton';



function ActivityButton(){
    return(

        <ResourcesButtonCasing>
            <ActivityIcon style={{color:'var( --primary-green-color)', fontSize: '70px', }}/>
            Activities
        </ResourcesButtonCasing> 
      
    )
}
export default ActivityButton;
