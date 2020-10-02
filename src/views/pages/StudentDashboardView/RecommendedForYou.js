import {
  GridList,
  GridListTile,
  makeStyles,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import React from 'react';
import CourseCard1 from '../../../components/Course/CourseCardTemplate1';
import coursesContent from 'src/data/courses';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '80%',
    margin: '20px auto 60px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0
    },

    gridList: {
      flexWrap: 'nowrap',
      width: '100%',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)'
    }
  },

  gridList: {
    flexWrap: 'nowrap',
    width: '100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  padding: {
    padding: '60px 0 40px'
  }
}));

export default function Recommendations() {
  const classes = useStyles();

  const foundation = coursesContent.foundation;
  const advanced = coursesContent.advanced;

  const large = useMediaQuery('(min-width:1100px)');
  const medium = useMediaQuery('(min-width:900px)');
  const small = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.root}>
      <Typography className={classes.padding} variant="h1">
        Recommended For You
      </Typography>
      <GridList
        className={classes.gridList}
        display="flex"
        alignItems="center"
        cols={large ? 3 : medium ? 2.5 : small ? 1.7 : 1.2}
      >
        <GridListTile
          style={{
            height: '530px'
          }}
        >
          <CourseCard1 course={foundation.algoJava} />
        </GridListTile>
        <GridListTile
          style={{
            height: '530px'
          }}
        >
          <CourseCard1 course={advanced.webDevelopment} />
        </GridListTile>
      </GridList>
    </div>
  );
}
