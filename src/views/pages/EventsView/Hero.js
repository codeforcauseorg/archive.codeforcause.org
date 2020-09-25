import React from 'react';

import { Typography } from '@material-ui/core';

import { login } from 'src/actions/accountActions';
import { useDispatch, useSelector } from 'react-redux';
import HeroWithLogo from '../../../components/Hero/HeroWithLogo';
import ButtonComponent from '../../../components/Button/ButtonComponent';

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
          title="Workshops, Bootcamps"
          title2="& Webinars"
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
              Explore our live events below
            </Typography>
          }
        />
      ) : (
        <HeroWithLogo
          title="Workshops, Bootcamps"
          title2="& Webinars"
          subtitle="It's Time to learn from Experts"
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

export default Hero;
