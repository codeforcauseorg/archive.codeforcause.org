import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import BenefitCard from './BenefitCard';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(180deg, #2A185A 0%, #000000 100%)',
    padding: theme.spacing(10),
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    },
    color: '#000000'
  },
  centerPadding: {
    padding: 30,
    [theme.breakpoints.down('md')]: {
      padding: 15
    }
  }
}));

function CLBenefits({ benefits, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography
          style={{ marginTop: '10px', color: '#FFFFFF' }}
          variant="h2"
          align="center"
          gutterBottom
        >
          Benefits of being a Campus Leader
        </Typography>
        <Grid container component="dl" style={{ padding: '20px' }}>
          {benefits.map((benefit, i) => (
            <Grid
              item
              key={i}
              lg={3}
              md={3}
              sm={6}
              xs={12}
              className={classes.centerPadding}
            >
              <BenefitCard benefit={benefit} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

CLBenefits.propTypes = {
  className: PropTypes.string
};

export default CLBenefits;
