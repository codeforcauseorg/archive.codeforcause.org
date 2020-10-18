import { Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '184px',
    display: 'flex',
    flexFlow: 'column',
    padding: '20px',
    margin: '20px 0px'
  },
  imgGrid: {
    padding: '0px 12px 3px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 3px 6px'
    }
  },
  link: {
    textDecoration: 'none'
  },
  extraPadding: {
    paddingBottom: '10px'
  }
}));

export default function BlogCard({ title, link, author, thumbnail }) {
  const classes = useStyles();

  return (
    <Link to={link} className={classes.link}>
      <Paper elevation={3} className={classes.root}>
        <Typography
          className={classes.extraPadding}
          variant="h6"
          color="secondary"
        >
          Experience
        </Typography>
        <Grid container style={{ flex: '1 1 auto' }}>
          <Grid item xs={7} md={9}>
            <Typography className={classes.extraPadding}>{title}</Typography>
            <Typography variant="h6">By {author}</Typography>
          </Grid>
          <Grid item xs={5} md={3} className={classes.imgGrid}>
            <Box
              style={{
                background: `url(${thumbnail})`,
                height: '100%',
                width: '100%',
                backgroundPositionY: 'center',
                backgroundPositionX: 'center',
                backgroundSize: 'cover'
              }}
            ></Box>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
}
