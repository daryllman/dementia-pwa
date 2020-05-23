import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ResourcesIcon from '@material-ui/icons/ImportContacts';
// import QnAIcon from '@material-ui/icons/Message';
import QnAIcon from '@material-ui/icons/QuestionAnswer';
import ProfileIcon from '@material-ui/icons/AccountCircle';

import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
    root: {
      width: '100vw',
      position: 'fixed',
      bottom: '0',
      background:'F7F7F7', //background color of whole nav bar
      color: 'green',
      '&$selected': {
        color: 'red', //to fix...
      },
    },
    selected: {
        //color:'black', // unfocused color
    }
  });

function BottomNavBar(){
    const history = useHistory();
    const classes = useStyles();
    const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
    const [value, setValue] = React.useState(pathname);
    const handleChange = (event, newValue) => {
        //console.log(event); //complex object returned
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} showLabels={true} classes={{ root: classes.root, selected: classes.selected }}>
          <BottomNavigationAction label="home" value="/" icon={<HomeIcon />} onClick={()=>console.log('Home clicked')} component={Link} to='/'  />
          <BottomNavigationAction label="resources" value="/resources" icon={<ResourcesIcon /> } onClick={()=>console.log('Resources clicked')} component={Link} to='/resources'/>                
          <BottomNavigationAction label="Q&A" value="/qna" icon={<QnAIcon />} onClick={()=>console.log('Q&A clicked')} component={Link} to='/qna'/>
          <BottomNavigationAction label="profile" value="/profile" icon={<ProfileIcon />} onClick={()=>console.log('Profile clicked')} component={Link} to='/profile'/>
        </BottomNavigation>
      );
}

export default BottomNavBar;