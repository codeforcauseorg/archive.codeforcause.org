import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
        title="Elastic Weekend"
        title2="Prizes worth 100K"
        imageUrl="/static/home/codeforcause.svg"
        firstComponent={
          <>
            <Typography variant="body1">
              {`Learn about Building Search Engines, DevOps & Security, & Data
              Science 📈 ‼️ Prizes worth INR 1 lakh, including iPad, PS4, mobile
              phones, premium headphones, accessories, and more! 🤩`}
            </Typography>
            <div style={{ height: '16px' }}></div>
          </>
        }
        secondComponent={
          <ButtonComponent
            title="Know More"
            href="/elastic-weekend-hackathon"
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
