import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    }
  },
  mainHeading: {
    padding: '150px 0px 80px'
  },
  desc: {
    fontStyle: 'italic',
    fontWeight: 500,
    paddingBottom: '20px'
  },
  stats: {},
  divider: {
    backgroundColor: '#D4D4D4',
    padding: '0px 1px',
    height: 'auto',
    width: 'auto',
    border: '0.5px  #525252'
  },
  aboutText: {
    color: '#747474',
    paddingBottom: '10px'
  },
  extraPadding: {
    padding: '0px 0px 20px',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      padding: '40px 0px'
    }
  }
}));

export default function AboutWorkshops() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.mainHeading} variant="h2" align="center">
        About Wokshops
      </Typography>
      <Grid container xs={12} justify="space-between">
        <Grid className={classes.stats} container item md={3}>
          <Grid item xs={4}>
            <Typography variant="h4">120+</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.desc}>Workshops</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4">30+</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.desc}>Topics</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4">25+</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.desc}>Speakers</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4">15000+</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.desc}>participants</Typography>
          </Grid>
        </Grid>
        <Divider
          className={classes.divider}
          variant="fullWidth"
          orientation="vertical"
        />
        <Grid container item md={7}>
          <Typography
            align="center"
            className={classes.extraPadding}
            variant="h4"
          >
            Workshops are About...
          </Typography>
          <ABoutText
            left="How To Learn Technology?"
            right="AR/VR Technology"
          />
          <ABoutText left="Machine Learning" right="Physics Simulators" />
          <ABoutText
            left="Data Structures And Algorithms"
            right="OPen Source and Communities"
          />
          <ABoutText left="Placements and Targets" right="Fronend & Backend Development" />
          <ABoutText left="Game Development" right="Devops and Kubernetes" />
          <ABoutText left="Real Life Strategies" right="Google Cloud and AWS" />
        </Grid>
      </Grid>

      <Divider
        className={classes.divider}
        variant="fullWidth"
        style={{ margin: '80px 0px', padding: '0.5px' }}
      />
    </div>
  );
}

function ABoutText({ left, right }) {
  const classes = useStyles();

  return (
    <Grid container item justify="space-evenly">
      <Grid className={classes.aboutText} sm={6} xs={12}>
        <Typography variant="body2">{left}</Typography>
      </Grid>
      <Grid className={classes.aboutText} sm={6} xs={12}>
        <Typography variant="body2">{right}</Typography>
      </Grid>
    </Grid>
  );
}
