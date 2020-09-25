import React from 'react';
import PropTypes from 'prop-types';
import ApplyNowModal from './ApplyNowModal';
import HeroWithOneButton from '../../../components/Hero/HeroWithOneButton';

function Hero({ className, ...rest }) {
  return (
    <HeroWithOneButton
      title="Campus Leader"
      subtitle="Stand Up and fight for the Cause with the Code For Cause"
      className
      backgroundImage="/static/campusLeaders/hero.png"
      component={<ApplyNowModal />}
    />
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
