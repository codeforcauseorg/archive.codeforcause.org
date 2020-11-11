import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import coursesContent from 'src/data/courses';
import { Grid, GridList, GridListTile, useMediaQuery } from '@material-ui/core';
import CourseCard1 from '../../../components/Course/CourseCardTemplate1';
import CourseCard2 from '../../../components/Course/CourseCardTemplate2';
import EnrolledCourse from '../../../components/Course/EnrolledCourse';
import NotEnrolled from '../../../components/Course/NotEnrolled';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: '#000',
    width: '80%',
    margin: '90px auto 20px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0
    }
  },

  gridList: {
    flexWrap: 'nowrap',
    width: '100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  panel: {
    margin: '40px 0 0'
  },
  tab: {
    background: '#F1F4FE',
    marginBottom: '40px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px'
    }
  }
}));

export default function MainTab() {
  const classes = useStyles();
  const large = useMediaQuery('(min-width:1100px)');
  const medium = useMediaQuery('(min-width:900px)');
  const small = useMediaQuery('(min-width:600px)');

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const foundation = coursesContent.foundation;
  const advanced = coursesContent.advanced;

  return (
    <Paper centered className={classes.root} elevation={0}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="black"
        className={classes.tab}
        centered
        scrollButtons="on"
        variant="fullWidth"
      >
        <Tab label="Your Courses " disableRipple={true} />
        <Tab label="Your Applications" disableRipple={true} />
        <Tab label="Other Programs" disableRipple={true} />
      </Tabs>
      <TabPanel className={classes.panel} value={value} index={0}>
        <GridList
          className={classes.gridList}
          display="flex"
          alignItems="center"
          cols={large ? 3 : medium ? 2.5 : small ? 1.7 : 1.2}
        >
          <GridListTile
            style={{
              height: '100%'
            }}
          >
            <NotEnrolled />
          </GridListTile>
        </GridList>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GridList
          className={classes.gridList}
          display="flex"
          alignItems="center"
          cols={large ? 3 : medium ? 2.5 : small ? 1.7 : 1.2}
        >
          {Object.entries(foundation).map(([cname, course], index) => {
            return (
              <GridListTile
                key={course.id}
                style={{
                  height: '100%'
                }}
              >
                {index === 0 ? (
                  <EnrolledCourse course={course} />
                ) : (
                  <CourseCard2 course={course} />
                )}
              </GridListTile>
            );
          })}
        </GridList>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GridList
          className={classes.gridList}
          display="flex"
          alignItems="center"
          cols={large ? 3 : medium ? 2.5 : small ? 1.7 : 1.2}
        >
          {Object.entries(advanced).map(([cname, course], index) => {
            return (
              <GridListTile
                key={course.id}
                style={{
                  height: '530px'
                }}
              >
                <CourseCard1 course={course} />
              </GridListTile>
            );
          })}
        </GridList>
      </TabPanel>
    </Paper>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      <Grid container>{children}</Grid>
    </div>
  );
}
