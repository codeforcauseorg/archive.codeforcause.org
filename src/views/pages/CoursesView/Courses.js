import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import coursesContent from 'src/data/courses';
import CourseCard from '../../../components/Course/CourseCardTemplate1';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  root: {
    padding: theme.spacing(0, 10, 10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 3, 10)
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
    margin: '12px',
    boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.13)'
  },
  cardMedia: {
    width: '100%',
    height: 'auto'
    // paddingTop: "56.25%", // 16:9
  },
  cardContent: {},
  chipActions: {
    display: 'block'
  },
  chip: {
    margin: '8px 0 3px 8px'
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
  },
  gridList: {
    flexWrap: 'wrap',
    width: '100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  }
}));

export default function Courses() {
  const classes = useStyles();

  const training = coursesContent.training;
  const foundation = coursesContent.foundation;
  const advanced = coursesContent.advanced;

  const coursesList = [
    ['Foundational Courses', foundation],
    ['Advanced Courses', advanced],
    ['Six Months Training', training]
  ];

  return (
    <Grid container className={classes.root}>
      {coursesList.map(([courseName, courses], idx) => {
        return (
          <div key={idx} id={courseName.split(' ')[0]}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Typography
                variant="h1"
                align="center"
                color="textPrimary"
                style={{
                  marginBottom: '40px',
                  marginTop: '60px'
                }}
              >
                {courseName}
              </Typography>
            </Grid>

            <Grid container>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                align="center"
                display="flex"
                style={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <CoursesGrid courses={courses} />
              </Grid>
            </Grid>
          </div>
        );
      })}
    </Grid>
  );
}

const CoursesGrid = ({ courses }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.gridList}
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {Object.entries(courses).map(([cname, course], index) => {
        return (
          <Grid
            item
            key={index}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            style={{
              maxWidth: '330px'
            }}
          >
            <CourseCard course={course} />
          </Grid>
        );
      })}
    </Grid>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      <Grid container>{children}</Grid>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
