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
    [theme.breakpoints.down('sm')]: {
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
  }
}));

function CTA({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={2} className={classes.extraMargin}>
          <Grid container xs={12} sm={6} md={4}>
            <Box className={classes.flex} display="flex" flexDirection="column">
              <Hidden mdUp>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                >
                  Want Us to do a Workshop
                </Typography>
              </Hidden>

              <Hidden smDown>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                >
                  Want Us to do a <br /> Workshop
                </Typography>
              </Hidden>

              <Box className={classes.flex} display="flex" flexDirection="row">
                <Button
                  style={{
                    backgroundColor: '#A60000',
                    color: '#ffffff',
                    textTransform: 'capitalize'
                  }}
                  component="a"
                  href="/register"
                  size="large"
                  variant="contained"
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid container key={2} xs={12} sm={6} md={4}>
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

              <Box className={classes.flex} display="flex" flexDirection="row">
                <Button
                  style={{
                    borderColor: '#A60000',
                    color: '#A60000',
                    textTransform: 'capitalize'
                  }}
                  component="a"
                  href="/register"
                  variant="outlined"
                  size="large"
                >
                  Know more
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid container key={3} xs={12} sm={12} md={4}>
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

              <Box className={classes.flex} display="flex" flexDirection="row">
                <Button
                  style={{
                    borderColor: '#A60000',
                    color: '#A60000',
                    textTransform: 'capitalize'
                  }}
                  component="a"
                  href="/register"
                  variant="outlined"
                  size="large"
                >
                  Enroll
                </Button>
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
