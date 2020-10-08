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
      backgroundImage="linear-gradient(270.25deg, #180255 0.25%, rgba(0, 0, 0, 0.8) 48.47%, #000000 97.54%), url(/static/images/backs/cl.png)"
      component={<ApplyNowModal />}
    />
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
