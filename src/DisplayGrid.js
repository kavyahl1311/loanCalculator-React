import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Slider.css'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1.5),
    margin: 'auto',
    maxWidth: 500,
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();

  return (
  <div>
      <Paper className={"something"}>
        <Grid container>
          <Grid item  md container>
            <Grid item md container direction="column">
              <Grid item>
                <Typography gutterBottom variant="subtitle1">
                  Interest Rate
                </Typography>
                <Typography variant="body2" gutterBottom>
                {props.data ? props.data.interestRate + '%': " "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={"something"}>
        <Grid container>
          <Grid item md container >
            <Grid item md container direction="column">
              <Grid item>
                <Typography gutterBottom variant="subtitle1">
                Monthly Payment
                </Typography>
                <Typography variant="body2" gutterBottom>
                {props.data ? props.data.monthlyPayment.amount + "$": " "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
  </div>
    
  );
}
