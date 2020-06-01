import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, Hidden, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
  },
  content: {
    marginTop: '15px'
  }
}));

function OpenSource({ className, ...rest }) {
  const classes = useStyles();
  // const { user } = useSelector((state) => state.account);

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid alignItems="center" container justify="space-between" spacing={3}>
        <Hidden smDown>
        <Grid item md={6}>
          <img
            alt="Cover"
            className={classes.image}
            src="/static/images/open-source.png"
          />
        </Grid>
        </Hidden>
        <Grid item md={6} xs={12}>
          <Typography variant="h3" color="textPrimary">
            Open Source
          </Typography>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.content}
          >
            A common misread can be that, how can software development help the
            community. Think of a software development platform that could solve
            it by Managing resources to cater to the problem of Hunger and
            Education Health and hygiene observation and maintenance. A sense of
            security for every individual. But again, who will support such a
            platform? The world is having hundreds and thousands of hackathons
            every year for the resolution to these problems but we do not reach
            the target just by the completion of hackathons. We need to build a
            community that stays.
          </Typography>
        </Grid>
        <Hidden lgUp>
        <Grid item md={6}>
          <img
            alt="Cover"
            className={classes.image}
            src="/static/images/open-source.png"
          />
        </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

OpenSource.propTypes = {
  className: PropTypes.string
};

export default OpenSource;
