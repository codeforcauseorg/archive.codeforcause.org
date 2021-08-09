import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Typography } from '@material-ui/core';

import HeroWithLogo from '../../../components/Hero/HeroWithLogo';
import ButtonComponent from 'src/components/Button/ButtonComponent';

const useStyles = makeStyles(theme => ({
  root: {},
  hero: {
    height: '420px',
    [theme.breakpoints.down('md')]: {
      height: '100%'
    }
  }
}));

function Hero({ className, ...rest }) {
  const classes = useStyles();
  return (
    <div className={className} {...rest}>
      <HeroWithLogo
        className={classes.hero}
        title="Enable Tranining"
        title2="Programme 2021"
        imageUrl="/static/images/backs/enable_hero.png"
        firstComponent={
          <>
            <Typography variant="body1">
              An initiative to contribute to the Open Source community by
              providing training, guidance, and awareness about the
              possibilities in the field of software to students &
              professionals.
            </Typography>
            <div style={{ height: '16px' }}></div>
          </>
        }
        secondComponent={
          <ButtonComponent
            title="Register Now"
            href="/courses"
            size="large"
            variant="contained"
          />
        }
      />
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
