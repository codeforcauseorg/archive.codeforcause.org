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
    backgroundColor: theme.palette.background.dark,
    padding: '0px 20px',
    paddingBottom: '40px'
  },
  action: {
    backgroundColor: theme.palette.common.black
  },
  actionIcon: {
    marginRight: theme.spacing(1)
  },
  image: {
    width: '100%',
    maxHeight: 400
  }
}));

function OpenSource({ className, ...rest }) {
  const classes = useStyles();
  // const { user } = useSelector((state) => state.account);

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
        spacing={3}
      >
        <Hidden smDown>
          <Grid
            item
            md={6}
          >
            <img
              alt="Cover"
              className={classes.image}
              src="/static/images/undraw_growth_analytics_8btt.svg"
            />
          </Grid>
        </Hidden>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            variant="h3"
            color="textPrimary"
          >
            Good Morning,
            {' '}
            {/* {user.firstName} */}
            Chacha
          </Typography>
          <Typography
            variant="subtitle1"
            color="textPrimary"
          >
            Here’s what’s happening with your projects today
            Here’s what’s happening with your projects today
            Here’s what’s happening with your projects today
            Here’s what’s happening with your projects today
            Here’s what’s happening with your projects today
            Here’s what’s happening with your projects today
          </Typography>
         
        </Grid>
        
      </Grid>
    </div>
  );
}

OpenSource.propTypes = {
  className: PropTypes.string
};

export default OpenSource;
