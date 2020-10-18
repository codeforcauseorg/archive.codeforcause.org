import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import HeroWithOneButton from '../../../components/Hero/HeroWithOneButton';

const useStyles = makeStyles(() => ({
  root: {},
  subtitle: {
    fontWeight: 600,
    fontStyle: 'italic'
  }
}));

function Hero({ className, ...rest }) {
  const classes = useStyles();
  return (
    <HeroWithOneButton
      title="Code For Cause Blog"
      subtitle="Learn the Technology Old and New from the experienced techies"
      subtitleDesign={classes.subtitle}
      backgroundImage="/static/images/backs/blogs.png"
    />
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
