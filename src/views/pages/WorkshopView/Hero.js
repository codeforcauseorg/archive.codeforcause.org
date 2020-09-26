import React from 'react';
import PropTypes from 'prop-types';
import HeroWithOneButton from '../../../components/Hero/HeroWithOneButton';
import { verticalGradient } from '../../../constants';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    background: verticalGradient
  },
  subtitle: {
    fontWeight: 600,
    fontStyle: 'italic'
    // fontSize: '18px'
  }
}));

function Hero({ className, ...rest }) {
  const classes = useStyles();
  return (
    <HeroWithOneButton
      title="A Workshop With An Experienced Tech Team"
      subtitle="Give Your People Oppotunity to Learn New In A Practical & Innovative Way"
      subtitleDesign={classes.subtitle}
      className={classes.root}
      backgroundImage="/static/images/backs/ws.png"
    />
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
