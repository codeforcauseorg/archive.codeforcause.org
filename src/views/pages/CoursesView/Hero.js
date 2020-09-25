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

import HeroWithLogo from '../../../components/Hero/HeroWithLogo';
import ButtonComponent from '../../../components/Button/ButtonComponent';

import { login } from 'src/actions/accountActions';
import { useDispatch, useSelector } from 'react-redux';

const background = 'linear-gradient(270.72deg, #180255 0.25%, #000000 97.54%)';

function Hero({ className, ...rest }) {
  const user = useSelector(state => state.account.user);

  const dispatch = useDispatch();
  const handleLoginOpen = () => {
    dispatch(login());
  };

  return (
    <div className={className} {...rest}>
      {user ? (
        <HeroWithLogo
          title="Industry Grade Courses"
          title2="with Live Projects"
          subtitle="Login To get regular Updates."
          imageUrl="/static/events/hero.png"
          firstComponent={
            <Typography variant="h4">
              It's the time to learn from Experts.
            </Typography>
          }
          secondComponent={
            <Typography
              variant="h4"
              style={{
                color: '#ffffff'
              }}
            >
              Explore our courses below
            </Typography>
          }
        />
      ) : (
        <HeroWithLogo
          title="Industry Grade Courses"
          title2="with Live Projects"
          subtitle="Login To get regular Updates"
          imageUrl="/static/events/hero.png"
          firstComponent={
            <Typography variant="h4">Login to get Regular Updates</Typography>
          }
          secondComponent={
            <ButtonComponent
              title="Login / Signup"
              onClick={handleLoginOpen}
              size="large"
              variant="contained"
            />
          }
        />
      )}
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
