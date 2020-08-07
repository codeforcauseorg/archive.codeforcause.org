import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Grid,
  Container,
  Typography,
  makeStyles,
  Button,
  Hidden
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.LIGHT,
    paddingLeft: 70,
    paddingRight: 70,
    //write css for small screen
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8)
  },
  extraMargin: {
    marginTop: theme.spacing(6)
  },
  extraMarginTop: {
    marginTop: theme.spacing(2)
  },
  extraPadding: {
    padding: '32px !important'
  },
  flex: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  Button: {
    textTransform: 'capitalize',
    fontSize: '16px',
    padding: '8px 32px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  primeBtn: {
    backgroundColor: '#A60000',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#A60000',
      opacity: '0.8'
    }
  },
  secondaryBtn: {
    borderColor: '#A60000',
    color: '#A60000'
  }
}));

function CTA({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={2} className={classes.extraMargin}>
          <Grid item xs={12} sm={6} md={4}>
            <Box className={classes.flex} display="flex" flexDirection="column">
              <Hidden mdUp>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                >
                  Want Us to conduct a Workshop
                </Typography>
              </Hidden>

              <Hidden smDown>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                >
                  Want Us to conduct a <br /> Workshop
                </Typography>
              </Hidden>

              <Box className={classes.flex}>
                <Grid container xs={12} sm={12}>
                  <Grid item xs={12} sm={12}>
                    <Button
                      className={classes.Button + ' ' + classes.primeBtn}
                      component="a"
                      href="https://codecau.se/ws"
                      target="_blank"
                      size="large"
                      variant="contained"
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box className={classes.flex} display="flex" flexDirection="column">
              <Hidden mdUp>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                >
                  Join Us or Submit a YouTube Video
                </Typography>
              </Hidden>

              <Hidden smDown>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                >
                  Join Us or Submit a <br /> YouTube Video
                </Typography>
              </Hidden>

              <Box className={classes.flex}>
                <Grid container xs={12} sm={12}>
                  <Grid item xs={12} sm={12}>
                    <Button
                      className={classes.Button + ' ' + classes.secondaryBtn}
                      component="a"
                      href="https://codecau.se/sv"
                      target="_blank"
                      size="large"
                      variant="outlined"
                    >
                      Know More
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Box className={classes.flex} display="flex" flexDirection="column">
              <Hidden mdUp>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                >
                  Get Updates About Our Initiatives
                </Typography>
              </Hidden>

              <Hidden smDown>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                >
                  Get Updates About Our <br /> Initiatives
                </Typography>
              </Hidden>

              <Box className={classes.flex}>
                <Grid container xs={12} sm={12}>
                  <Grid item xs={12} sm={12}>
                    <Button
                      className={classes.Button + ' ' + classes.secondaryBtn}
                      component="a"
                      href="https://cdn.forms-content.sg-form.com/34a5f5b6-c515-11ea-ae40-26ea0c9b1f0c"
                      target="_blank"
                      size="large"
                      variant="outlined"
                    >
                      Enroll Now
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

CTA.propTypes = {
  className: PropTypes.string
};

export default CTA;
