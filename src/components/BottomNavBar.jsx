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


const useStyles = makeStyles({
    root: {
      width: '100vw',
      position: 'fixed',
      bottom: '0',
      background:'F7F7F7'
    },
  });

function BottomNavBar(){

    const classes = useStyles();
    const [value, setValue] = React.useState('home');
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="home" value="home" icon={<HomeIcon />} />
          <BottomNavigationAction label="resources" value="resources" icon={<ResourcesIcon />} />
          <BottomNavigationAction label="Q&A" value="qna" icon={<QnAIcon />} />
          <BottomNavigationAction label="profile" value="profile" icon={<ProfileIcon />} />
        </BottomNavigation>
      );
}

export default BottomNavBar;