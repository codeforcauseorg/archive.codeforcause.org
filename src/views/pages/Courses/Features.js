import React from 'react';

import { Typography, makeStyles, Box, Grid } from '@material-ui/core';
import { features } from 'src/data/CourseFeatures';

const background = 'linear-gradient(180deg, #180253 0%, #0E0131 100%)';

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
      <div>
        <Box className={classes.rootBox} display="flex" flexDirection="column">
          <Typography variant="h2" align="center" style={{
            marginBottom: "32px"
          }}>
            Courses Designed so You can Munch Every Bit
          </Typography>

          <Grid container display="flex" flexDirection="row" justify="center" alignItems="center" style={{
            width: "100%"
          }}>
            {features.primary.map((feature, index) => {
              return (
                <Grid item lg={3} md={3} sm={6} xs={6} justify="center" alignItems="center">
                  <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{
                    padding: "40px",
                    minWidth: "200px",
                  }}>
                    <img src={feature.image} alt={feature.line2} style={{
                      width: "80px",
                      height: "80px",
                      marginBottom: "12px"
                    }}/>
                    <Typography align="center" variant="body1">{feature.line1}</Typography>
                    <Typography align="center" variant="body1">{feature.line2}</Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Features;
