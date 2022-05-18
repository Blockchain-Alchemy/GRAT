import React from "react";
import "./Switch.css";
import { Container, Button, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button1: {
    color: theme.white,
    backgroundColor: theme.colors.blue[7],
    border: 0,
    borderRadius: 0,
    padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
    cursor: 'pointer',
    margin: 0,

    // Use pseudo-classes just like you would in Sass
    '&:hover': {
      backgroundColor: theme.colors.blue[9],
    },

    '&:first-of-type': {
      borderTopLeftRadius: theme.radius.lg,
      borderBottomLeftRadius: theme.radius.lg,
    },

    '&:not(:first-of-type)': {
      borderTopRightRadius: theme.radius.lg,
      borderBottomRightRadius: theme.radius.lg,
    },
  },
  button2: {
    color: theme.white,
    backgroundColor: theme.colors.blue[4],
    border: 0,
    borderRadius: 0,
    padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
    cursor: 'pointer',
    margin: 0,

    // Use pseudo-classes just like you would in Sass
    '&:hover': {
      backgroundColor: theme.colors.blue[9],
    },

    '&:first-of-type': {
      borderTopLeftRadius: theme.radius.lg,
      borderBottomLeftRadius: theme.radius.lg,
    },

    '&:not(:first-of-type)': {
      borderTopRightRadius: theme.radius.lg,
      borderBottomRightRadius: theme.radius.lg,
    },    
  }
}));

const Switch = ({ tabIndex, handleSwitch }) => {
  const { classes } = useStyles();

  const buttonStyles = (value) => {
    return tabIndex === value 
      ? classes.button1
      : classes.button2;
  }

  return (
    <Container className="switch-container" style={{color: 'white'}}>
      <Button leftIcon={<span className="material-symbols-outlined">extension</span>} className={buttonStyles(1)} onClick={() => handleSwitch(1)}>
        Blocks
      </Button>
      <Button leftIcon={<span className="material-symbols-outlined">code</span>} className={buttonStyles(2)} onClick={() => handleSwitch(2)}>
        SmartPy
      </Button>
    </Container>
  );
};

export default Switch;
