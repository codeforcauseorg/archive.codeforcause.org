import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';

import HeroWithBackgroundImage from '../../../components/Hero/HeroWithBackgroundImage';
import ButtonComponent from 'src/components/Button/ButtonComponent';


const useStyles = makeStyles({
    root: {
        backgroundImage: "url('/static/images/hire-with-us/hero.png')",
        backgroundSize: 'cover',
    },
});

function TopMain() {
    const classes = useStyles()
    return (
      <>
        <HeroWithBackgroundImage
          title="Hire With"
          title2="Code For Cause !!"
          className={classes.root}
          firstComponent={
            <Typography variant="body1">
              Explore Endless Possiblities With Developers Forged In Code And
              Atticates Start Hiring
            </Typography>
          }
          secondComponent={
            <ButtonComponent
              title="Start Hiring"
              href="#"
              size="large"
              variant="contained"
              className={classes.button}
            />
          }
        />
      </>
    );
}

export default TopMain
