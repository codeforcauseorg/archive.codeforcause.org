import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Grid,
  Hidden,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 30px',
    paddingBottom: '40px'
  },
  action: {
    backgroundColor: theme.palette.common.white
  },
  actionIcon: {
    marginRight: theme.spacing(1)
  },
  image: {
    width: '100%',
    maxHeight: 400
  }, 
  extraMargin :{
    marginTop: '30px'
  }
}));

function Header({ className, ...rest }) {
  const classes = useStyles();
  // const { user } = useSelector((state) => state.account);

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    > <Typography className = {classes.extraMargin} variant="h1" align="center" color="textPrimary">
    Our Goal
  </Typography>
      <Grid
        alignItems="center"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid
          item
          md={4}
          xs={12}
        >
          <Typography
            variant="h3"
            color="textPrimary"
          >
            Open Knowledge
            {' '}
            {/* {user.firstName} */}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textPrimary"
          >
            Think of a software education platform that could solve it by
Providing hands-on learning
Establishing a community
Having discussions about ongoing trends in tech with students 
Follow the T-Shape learning path.
But who will support such a platform? We see a massive production of content, still a missing structuring to generate what the young mind needs. That includes motivation and courage to follow the content provided.

          </Typography>
         
        </Grid>
        <Hidden smDown>
          <Grid
            item
            md={8}
          >
            <img
              alt="Cover"
              className={classes.image}
              src="/static/images/undraw_growth_analytics_8btt.svg"
            />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
