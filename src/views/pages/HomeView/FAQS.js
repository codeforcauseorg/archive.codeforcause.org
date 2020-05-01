import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    '& dt': {
      marginTop: theme.spacing(2)
    }
  }
}));

function FAQS({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          color="textPrimary"
        >
          Frequently asked questions
        </Typography>
        <Box my={3}>
          <Divider />
        </Box>
        <Grid
          container
          spacing={3}
          component="dl"
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="overline"
              color="secondary"
            >
              Technical &amp; Licensing
            </Typography>
            <Box mt={6}>
              <dd>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  What do we use for styling our components?
                </Typography>
              </dd>
              <dt>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  We use Material-ui&apos;s hooks api as we think it’s
                  the best way of avoiding clutter.
                </Typography>
              </dt>
            </Box>
            <Box mt={6}>
              <dd>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Are you providing support for setting up my project?
                </Typography>
              </dd>
              <dt>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Yes, we offer email support for all our customers &amp;
                  even skype meetings for our extended license customers.
                </Typography>
              </dt>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="overline"
              color="secondary"
            >
              Design
            </Typography>
            <Box mt={6}>
              <dd>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Are the design files (sketch, figma) included in the Standard Package?
                </Typography>
              </dd>
              <dt>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  No, we offer the design source file only to Standard Plus Sketch
                  &amp; Figma and Extended Package.
                </Typography>
              </dt>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

FAQS.propTypes = {
  className: PropTypes.string
};

export default FAQS;
