import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Grid,
  Container,
  Typography,
  makeStyles,
  Card,
  CardMedia
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 70,
    paddingRight: 70,
    //write css for small screen
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8)
  },
  extraMargin: {
    marginTop: theme.spacing(6)
  },
  extraMarginTop: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  flex: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  bottom: {
    paddingBottom: theme.spacing(4)
  },
  side: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}));

function Sponsors({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Our Sponsors
        </Typography>
        <Grid
          container
          spacing={2}
          className={classes.extraMargin}
          direction="column"
        >
          <Grid
            container
            spacing={2}
            className={classes.extraMargin}
            direction="row"
          >
            <Grid item xs={12} md={6}>
              <Box
                className={classes.side}
                display="flex"
                flexDirection="column"
              >
                <Typography
                  color="textPrimary"
                  variant="h4"
                  style={{ lineHeight: '1.5' }}
                  className={classes.bottom}
                >
                  Title Sponsor
                </Typography>
                <Typography
                  color="textPrimary"
                  variant="subtitle2"
                  style={{ lineHeight: '1.5' }}
                  className={classes.bottom}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Card
                  style={{
                    height: '100%',
                    width: '60%'
                  }}
                  raised
                >
                  <CardMedia
                    image="/static/images/backs/dsa.png"
                    style={{ height: '155.2px' }}
                  />
                </Card>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.side}>
              <Typography
                color="textPrimary"
                variant="h4"
                style={{ lineHeight: '1.5' }}
              >
                Gold Sponsor
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            spacing={2}
            className={classes.extraMarginTop}
            direction="row"
          >
            <Grid item xs={12} md={4}>
              <Box className={classes.side}>
                <Card
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                  raised
                >
                  <CardMedia
                    image="/static/images/backs/dsa.png"
                    style={{ height: '155.2px' }}
                  />
                </Card>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box className={classes.side}>
                <Card
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                  raised
                >
                  <CardMedia
                    image="/static/images/backs/dsa.png"
                    style={{ height: '155.2px' }}
                  />
                </Card>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box className={classes.side}>
                <Card
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                  raised
                >
                  <CardMedia
                    image="/static/images/backs/dsa.png"
                    style={{ height: '155.2px' }}
                  />
                </Card>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.side}>
              <Typography
                color="textPrimary"
                variant="h4"
                style={{ lineHeight: '1.5' }}
              >
                Sliver Sponsor
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            spacing={2}
            className={classes.extraMarginTop}
            direction="row"
          >
            <Grid item xs={12} md={4}>
              <Box className={classes.side}>
                <Card
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                  raised
                >
                  <CardMedia
                    image="/static/images/backs/dsa.png"
                    style={{ height: '155.2px' }}
                  />
                </Card>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box className={classes.side}>
                <Card
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                  raised
                >
                  <CardMedia
                    image="/static/images/backs/dsa.png"
                    style={{ height: '155.2px' }}
                  />
                </Card>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box className={classes.side}>
                <Card
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                  raised
                >
                  <CardMedia
                    image="/static/images/backs/dsa.png"
                    style={{ height: '155.2px' }}
                  />
                </Card>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.side}>
              <Typography
                color="textPrimary"
                variant="h4"
                style={{ lineHeight: '1.5' }}
              >
                Community Sponsor
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            spacing={2}
            className={classes.extraMarginTop}
            direction="row"
          >
            <Grid item xs={12} md={4}>
              <Box className={classes.side}>
                <Card
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                  raised
                >
                  <CardMedia
                    image="/static/images/backs/dsa.png"
                    style={{ height: '155.2px' }}
                  />
                </Card>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box className={classes.side}>
                <Card
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                  raised
                >
                  <CardMedia
                    image="/static/images/backs/dsa.png"
                    style={{ height: '155.2px' }}
                  />
                </Card>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box className={classes.side}>
                <Card
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                  raised
                >
                  <CardMedia
                    image="/static/images/backs/dsa.png"
                    style={{ height: '155.2px' }}
                  />
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Sponsors.propTypes = {
  className: PropTypes.string
};

export default Sponsors;
