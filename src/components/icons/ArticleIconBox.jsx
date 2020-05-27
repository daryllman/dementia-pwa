import React from 'react';
import styled from 'styled-components'
import ArticleIcon from '@material-ui/icons/BookOutlined';
import ResourcesButtonCasing from '../../components/ResourcesCasingButton';



function ArticleButton(){
    return(

        <ResourcesButtonCasing>
            <ArticleIcon style={{color:'var( --primary-green-color)', fontSize: '70px', }}/>
            Articles
        </ResourcesButtonCasing> 
      
    )
}
export default ArticleButton;
