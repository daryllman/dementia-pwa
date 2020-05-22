import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ResourcesIcon from '@material-ui/icons/ImportContacts';
import QnAIcon from '@material-ui/icons/Message';
import ProfileIcon from '@material-ui/icons/AccountCircle';

import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
    root: {
      width: '100vw',
      position: 'fixed',
      bottom: '0',
      background:'F7F7F7',
    },
    selected:{
        color:'black',
        background:'black'
    }
  });

function BottomNavBar(){
    const history = useHistory();

    const classes = useStyles();
    const [value, setValue] = React.useState('home');
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} showLabels={true} className={classes.root} >
          <BottomNavigationAction label="home" value="home" icon={<HomeIcon />} onClick={()=>history.push("/")}/>
          <BottomNavigationAction label="resources" value="resources" icon={<ResourcesIcon /> } onClick={()=>history.push("/resources")}/>                
          <BottomNavigationAction label="Q&A" value="qna" icon={<QnAIcon />} onClick={()=>history.push("/qna")}/>
          <BottomNavigationAction label="profile" value="profile" icon={<ProfileIcon />} onClick={()=>history.push("/profile")}/>
        </BottomNavigation>
      );
}

export default BottomNavBar;