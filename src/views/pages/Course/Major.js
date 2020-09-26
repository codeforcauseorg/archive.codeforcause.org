import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Hidden } from '@material-ui/core';
import Details from './partials/Details';
import Overview from './partials/Overview';
import Topics from './partials/Topics';
import Projects from '../../../components/SidePanel/Projects';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  root: {
    padding: theme.spacing(10, 10, 10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 3, 10)
    }
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    margin: '12px'
  },
  cardMedia: {
    width: '100%',
    height: 'auto'
    // paddingTop: "56.25%", // 16:9
  },
  cardContent: {},
  chip: {
    colorPrimary: '#B20000'
  },
  extraMargin: {
    marginTop: '15px',
    marginBottom: '0'
  },
  btn: {
    textTransform: 'none'
  },
  paddingCls: {
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  paddingClsxs: {
    padding: 0
  },
  iconSize: {
    fontSize: '32px'
  },
  text: {
    color: '#FFFFFF'
  },
  avatarLarge: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(4, 0, 2)
  },

  avatarGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px'
  },

  slide: {
    perspective: 0, // create perspective
    overflow: 'hidden',
    // relative is a must if you want to create overlapping layers in children
    position: 'relative'
  },
  background: {
    width: '100%',
    height: 'auto',
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover'
  }
}));

export default function Major({ course }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column">
          <Details course={course} />

          {/* <Hidden mdUp>
            <Projects projects={course.projects} flat={true} />
          </Hidden> */}

          <Overview course={course} />
          <Topics course={course} />
        </Box>

        <Hidden smDown>
          <Box display="flex" flexDirection="column" mb={3} ml={2}>
            <Projects
              title="Learn To Make From This Course"
              projects={course.projects}
            />
          </Box>
        </Hidden>
      </Box>
    </Grid>
  );
}
