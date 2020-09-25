import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import HeroWithLogo from '../../../components/Hero/HeroWithLogo';
import ButtonComponent from 'src/components/Button/ButtonComponent';

function Hero({ className, ...rest }) {
  return (
    <div className={className} {...rest}>
      <HeroWithLogo
        style={{ height: '420px' }}
        title="Learn for Cause"
        title2="Code for Cause"
        imageUrl="/static/home/codeforcause.svg"
        firstComponent={
          <>
            <Typography variant="body1">
              An initiative to help the community by providing training,
              guidance and awareness about the possibilities in the software
              field to students & professionals.
            </Typography>
            <div style={{ height: '16px' }}></div>
          </>
        }
        secondComponent={
          <ButtonComponent
            title="Watch Our Videos"
            href="https://youtube.com/codeforcause"
            target="_blank"
            size="large"
            variant="contained"
            icon={<PlayArrowIcon style={{ paddingRight: 5 }} />}
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
