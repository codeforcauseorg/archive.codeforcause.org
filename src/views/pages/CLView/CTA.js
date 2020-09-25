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
          <Grid item xs={12} sm={12} md={3}>
            <Box className={classes.flex} display="flex" flexDirection="column">
              <Hidden mdUp>
                <Typography
                  color="textPrimary"
                  variant="h3"
                  style={{ lineHeight: '1.5' }}
                >
                  Collaborate With Us
                </Typography>
              </Hidden>

              <Hidden smDown>
                <Typography
                  color="textPrimary"
                  variant="h3"
                  style={{ lineHeight: '1.5' }}
                >
                  Collaborate <br /> With Us
                </Typography>
              </Hidden>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Box className={classes.flex} display="flex" flexDirection="column">
              <Hidden mdUp>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                >
                  Publish Your Article With Us
                </Typography>
              </Hidden>

              <Hidden smDown>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                >
                  Publish Your Article <br /> With Us
                </Typography>
              </Hidden>

              <Hidden mdUp>
                <Typography
                  color="textPrimary"
                  variant="body1"
                  style={{ lineHeight: '1.5', marginTop: '12px' }}
                >
                  Aware people about new tech and thoughts
                </Typography>
              </Hidden>

              <Hidden smDown>
                <Typography
                  color="textPrimary"
                  variant="body1"
                  style={{ lineHeight: '1.5', marginTop: '12px' }}
                >
                  Aware people about new <br /> tech and thoughts
                </Typography>
              </Hidden>

              <Box className={classes.flex}>
                <Grid item container xs={12} sm={12}>
                  <Grid item xs={12} sm={12}>
                    <Button
                      className={classes.Button + ' ' + classes.secondaryBtn}
                      component="a"
                      href="https://codecau.se/blogr"
                      target="_blank"
                      size="large"
                      variant="outlined"
                    >
                      Submit Request
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Box className={classes.flex} display="flex" flexDirection="column">
              <Hidden mdUp>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                >
                  Organize a Workshop for your Community
                </Typography>
              </Hidden>

              <Hidden smDown>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                >
                  Organize a Workshop <br /> for your Community
                </Typography>
              </Hidden>

              <Hidden mdUp>
                <Typography
                  color="textPrimary"
                  variant="body1"
                  style={{ lineHeight: '1.5', marginTop: '12px' }}
                >
                  Teach yourself and your people best practices in the world.
                </Typography>
              </Hidden>

              <Hidden smDown>
                <Typography
                  color="textPrimary"
                  variant="body1"
                  style={{ lineHeight: '1.5', marginTop: '12px' }}
                >
                  Teach yourself and your people <br /> best practices in the
                  world
                </Typography>
              </Hidden>

              <Box className={classes.flex}>
                <Grid item container xs={12} sm={12}>
                  <Grid item xs={12} sm={12}>
                    <Button
                      className={classes.Button + ' ' + classes.secondaryBtn}
                      component="a"
                      href="https://codecau.se/ws"
                      target="_blank"
                      size="large"
                      variant="outlined"
                    >
                      Submit Request
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Box className={classes.flex} display="flex" flexDirection="column">
              <Hidden mdUp>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                >
                  Volunteer to work on our platform
                </Typography>
              </Hidden>

              <Hidden smDown>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                >
                  Volunteer to work on <br /> our platform
                </Typography>
              </Hidden>

              <Hidden mdUp>
                <Typography
                  color="textPrimary"
                  variant="body1"
                  style={{ lineHeight: '1.5', marginTop: '12px' }}
                >
                  Gather work experience in the real world by working with Us.
                </Typography>
              </Hidden>

              <Hidden smDown>
                <Typography
                  color="textPrimary"
                  variant="body1"
                  style={{ lineHeight: '1.5', marginTop: '12px' }}
                >
                  Gather work experience in the <br /> real world by working
                  with Us
                </Typography>
              </Hidden>

              <Box className={classes.flex}>
                <Grid item container xs={12} sm={12}>
                  <Grid item xs={12} sm={12}>
                    <Button
                      className={classes.Button + ' ' + classes.secondaryBtn}
                      component="a"
                      href="https://cdn.forms-content.sg-form.com/34a5f5b6-c515-11ea-ae40-26ea0c9b1f0c"
                      target="_blank"
                      size="large"
                      variant="outlined"
                      disabled={true}
                    >
                      Apply Now
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
