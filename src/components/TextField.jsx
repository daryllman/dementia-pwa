import React from 'react';
import {useState} from 'react';
import styled, { withTheme } from 'styled-components';

import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme
  } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { green } from "@material-ui/core/colors";


const TextFieldWrapper = styled.div`
    display: block
`

// _____________________________For MainInputTextField______________________________
const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "white"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "red"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "white",
        },
        "&:hover fieldset": {
          borderColor: "var(--secondary-green-color)"
        },
        "&.Mui-focused fieldset": {
          borderColor: "white"
        },
      }
    },
})(TextField);

const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: "0px",
      // margin: theme.spacing(1),
    },
    input:{
        color: "white"
    },
    inputLabel:{
        color: "white"
    },
}));
//________________________________________________________________________________


// _____________________________For InputTextField______________________________
const BootstrapInput = withStyles(theme => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3)
      }
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.common.white,
      //border: "1px solid #ced4da",
      border: "none",
      fontSize: 16,
      width: "auto",
      padding: "10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Set the fonts you want.
      fontFamily: [
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      "&:focus": {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main
      }
    }
  }))(InputBase);
//________________________________________________________________________________

function MainInputTextField({label, onChange}){
    const classes = useStyles();
    return (
        <TextFieldWrapper>
            <CssTextField
                className={classes.margin}
                label={label}
                variant="outlined"
                //required  //required will add an asterix *
                id="custom-css-outlined-input"
                InputProps={{className: classes.input}}
                InputLabelProps={{className: classes.inputLabel}}
                onChange={onChange}
            />
        </TextFieldWrapper>
    )
}

function InputTextField({defaultValue, onChange}){
    return(
        <BootstrapInput defaultValue={defaultValue} id="bootstrap-input" onChange={onChange}/>
    )
}

export {MainInputTextField, InputTextField};

