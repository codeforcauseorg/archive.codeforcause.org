import React from 'react';

import { Typography, makeStyles, Box, Grid, Hidden } from '@material-ui/core';
import { features } from 'src/data/CourseFeatures';

const background = 'linear-gradient(180deg, #2A185A 0%, #000000 100%)';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    color: 'white',
    background
  },
  rootBox: {
    padding: theme.spacing(10, 10, 10),
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 3, 10)
    }
  },
  primaryText: {
    paddingBottom: '50px',
    marginLeft: 38,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0,
      marginLeft: 0
    }
  },
  secondaryText: {
    paddingLeft: '10px',
    fontWeight: 900
  },
  box: {
    padding: '40px 20px',
    minWidth: '150px',
    [theme.breakpoints.down('sm')]: {
      padding: '20px'
    }
  },
  icon: {
    height: 90,
    '&:hover': {
      scale: 1.2,
      transition: 'ease-in .2s',
      opacity: '0.8'
    },
    [theme.breakpoints.down('sm')]: {
      height: 120,
      padding: '20px 0'
    }
  },
  grid: {
    width: '100%',
    [theme.breakpoints.up('xl')]: {
      width: '75%'
    }
  },
  box2: {
    height: 90,
    verticalAlign: 'middle',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
}));

const Features = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.rootBox} display="flex" flexDirection="column">
        <Typography
          variant="h2"
          align="center"
          style={{
            marginBottom: '32px'
          }}
        >
          Courses Designed so You can Munch Every Bit
        </Typography>

        <Grid
          container
          display="flex"
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.grid}
        >
          {features.primary.map((feature, index) => {
            return (
              <Grid item lg={4} md={4} sm={6} xs={6} key={index}>
                <Hidden smDown>
                  <Boxes flexDirection="row" feature={feature} />
                </Hidden>
                <Hidden mdUp>
                  <Boxes flexDirection="column" feature={feature} />
                </Hidden>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

function Boxes({ flexDirection, feature }) {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection={flexDirection}
      justifyContent="flex-start"
      alignItems="center"
      className={classes.box}
    >
      <img
        src={feature.image}
        alt={feature.line2}
        style={{
          width: 'auto',
          height: '40px',
          margin: '10px 16px'
        }}
      />
      <Hidden smDown>
        <Typography align="center" variant="caption">
          {feature.line1} {feature.line2}
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <Typography align="center" variant="body2">
          {feature.line1}
        </Typography>
        <Typography align="center" variant="body2">
          {feature.line2}
        </Typography>
      </Hidden>
    </Box>
  );
}

export default Features;
