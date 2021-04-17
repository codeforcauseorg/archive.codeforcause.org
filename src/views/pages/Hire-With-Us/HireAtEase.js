import React from 'react';

import {
  Grid,
  Typography,
  makeStyles,
  Card,
  CardContent
} from '@material-ui/core';
import ButtonComponent from 'src/components/Button/ButtonComponent';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "'Montserrat', sans-serif",
    height: '700px',
    flexGrow: 1
  },
  heading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px'
  },

  card1: {
    background: ' #FF8989',
    margin: '5px',
    width: 'auto',
    height: '220px',
    boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.4), inset 0px 0px 8px #FFEEEE',
    borderRadius: '300px 0px 300px 300px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card2: {
    background: ' #FFC85D',
    margin: '5px',
    width: 'auto',
    height: '220px',
    boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.4), inset 0px 0px 8px #FFEEEE',
    borderRadius: '300px 0px 300px 300px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card3: {
    background: '#C6FF7E',
    margin: '5px',
    width: 'auto',
    height: '220px',
    boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.4), inset 0px 0px 8px #FFEEEE',
    borderRadius: '300px 0px 300px 300px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card4: {
    background: '#7A8FFF',
    margin: '5px',
    width: 'auto',
    height: '220px',
    boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.4), inset 0px 0px 8px #FFEEEE',
    borderRadius: '300px 0px 300px 300px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: '#676767'
  },
  bottomText: {
    textAlign: 'center',
    margin: '100px 0 0 0'
  },
  bottomButton: {
    textAlign: 'center',
    margin: '10px 0 0 0'
  },
  button: {
    backgroundColor: 'blue',
    width: '250px',
    fontWeight: 'bold',
    fontSize: '17px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 220, 1)'
    }
  }
}));

function HireAtEase() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item className={classes.Head} xs={12}>
          <Typography variant="h1" className={classes.heading}>
            HIRE <Typography variant="h3">At Ease </Typography>
          </Typography>
        </Grid>

        {/* Cards */}
        <Grid item xs={12} sm={3}>
          <Card className={classes.card1}>
            <CardContent>
              <Typography variant="p" className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Card className={classes.card2}>
            <CardContent>
              <Typography variant="p" className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Card className={classes.card3}>
            <CardContent>
              <Typography variant="p" className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Card className={classes.card4}>
            <CardContent>
              <Typography variant="p" className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Bottom */}
        <Grid item xs={12} className={classes.bottomText}>
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />{' '}
            do eiusmod tempor incididunt
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.bottomButton}>
          <ButtonComponent
            title="Start Hiring"
            href="#"
            size="large"
            variant="contained"
            className={classes.button}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default HireAtEase;
