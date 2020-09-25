import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  Typography,
  makeStyles
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import HeroWithLogo from '../../../components/Hero/HeroWithLogo';
import ButtonComponent from 'src/components/Button/ButtonComponent';
const background = 'linear-gradient(270.72deg, #180255 0.25%, #000000 97.54%)';

function Hero({ className, ...rest }) {
  return (
    <div className={className} {...rest}>
      <HeroWithLogo
        title="Learn for Cause"
        title2="Code for Cause"
        imageUrl="/static/home/codeforcause.svg"
        firstComponent={
          <Typography variant="body1">
            An initiative to help the community by providing training, guidance
            and awareness about the possibilities in the software field to
            students & professionals.
          </Typography>
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
