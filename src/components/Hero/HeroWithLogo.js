import React from 'react';
import clsx from 'clsx';

import {
  Box,
  Container,
  Grid,
  Hidden,
  Typography,
  makeStyles
} from '@material-ui/core';

import { horizontalGradient } from '../../constants/index';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#FFF',
    background: horizontalGradient,
    paddingTop: 80,
    paddingBottom: 60,
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  extraPadding: {
    padding: '0 70px 0px 0px',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '100%',
      height: 'auto',
      backfaceVisibility: 'hidden'
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center'
    }
  },
  hide: {
    display: 'none'
  }
}));

function Hero({
  title,
  title2,
  subtitle,
  firstComponent,
  secondComponent,
  imageUrl,
  className,
  ...rest
}) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
              className={clsx(classes.extraPadding)}
            >
              <Typography variant="h1" gutterBottom>
                {title}
              </Typography>
              <Typography variant="h1"> {title2}</Typography>
              <Hidden mdUp>
                <Box mt={6} mb={2}>
                  <div className={classes.image}>
                    <img alt="codeforcauseimg" src={imageUrl} />
                  </div>
                </Box>
              </Hidden>
              <Box mt={5}>{firstComponent}</Box>
              <Box mt={2} mb={3}>
                <Grid container xs={12} md={12}>
                  <Grid item xs={12} md={12}>
                    {secondComponent}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} md={6}>
              <Box>
                <div className={classes.image}>
                  <img alt="codeforcauseimg" src={imageUrl} />
                </div>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
}

export default Hero;
