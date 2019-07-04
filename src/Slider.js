import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import './Slider.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + 24 * 2,
    padding: 24,
  },
  margin: {
    height: theme.spacing(3),
  },
}));


const iOSBoxShadow =
  '0 3px 1px rgba(0,0,255,0.3),0 4px 8px rgba(0,0,255,0.3),0 0 0 1px rgba(0,0,255,0.3)';


const IOSSlider = withStyles({
  root: {
    height: 2,
    padding: '30px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus,&:hover,&$active': {
      boxShadow: '0 3px 1px rgba(0,0,255,0.3),0 4px 8px rgba(0,0,255,0.3),0 0 0 1px rgba(0,0,255,0.3)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 11px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    backgroundColor: 'currentColor',
  },
})(Slider);

export default function CustomizedSlider(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography gutterBottom>{props.label}</Typography>
      <IOSSlider min={props.min} max={props.max} aria-label="iOS slider" valueLabelDisplay="on" onChange={props.onChange}  marks={props.marks} />

    </Paper>
  );
}