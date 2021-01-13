import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import {
  Grid,
  Typography,
  Tab,
  Tabs,
  Box,
  GridList,
  GridListTile
} from '@material-ui/core';
import { insideTriangleTabsStylesHook } from '@mui-treasury/styles/tabs';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import coursesContent from 'src/data/courses';
import CourseCard from '../../../components/Course/CourseCardTemplate1';

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
    flexWrap: 'nowrap',
    width: '100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    [theme.breakpoints.up('lg')]: {
      padding: '0px 50px'
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0px 20%'
    }
  }
}));

export default function Courses() {
  const classes = useStyles();
  const large = useMediaQuery('(min-width:1100px)');
  const medium = useMediaQuery('(min-width:900px)');
  const small = useMediaQuery('(min-width:600px)');
  const extraSmall = useMediaQuery('(max-width:600px)');

  const tabsStyles = insideTriangleTabsStylesHook.useTabs();
  const tabItemStyles = insideTriangleTabsStylesHook.useTabItem({
    bgColor: '#1D006E'
  });

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const foundation = coursesContent.foundation;
  const advanced = coursesContent.advanced;
  const training = coursesContent.training;

  return (
    <Grid id="courses" container className={classes.root}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          style={{
            marginBottom: '20px'
          }}
        >
          Explore Our Courses
        </Typography>
      </Grid>

      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Typography
          variant="body1"
          align="center"
          color="textPrimary"
          style={{
            marginBottom: '30px',
            color: '#848484'
          }}
        >
          Our courses are designed to fulfill the need of both students and
          professional developers. Learn from the ground and become an expert
          with a purely practical approach to learning.
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
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Tabs"
            centered={true}
            variant={extraSmall ? 'scrollable' : 'standard'}
            scrollButtons="auto"
            classes={tabsStyles}
            style={{
              marginBottom: '48px'
            }}
          >
            <Tab
              classes={tabItemStyles}
              label={
                <Fragment>
                  <Typography variant="h5">
                    <Box fontWeight={600}>Training</Box>
                  </Typography>
                  <Typography component={'div'} variant="body2">
                    <Box>(6 Months)</Box>
                  </Typography>
                </Fragment>
              }
            />
            <Tab
              classes={tabItemStyles}
              label={
                <Fragment>
                  <Typography variant="h5">
                    <Box fontWeight={600}>Foundation</Box>
                  </Typography>
                  <Typography component={'div'} variant="body2">
                    <Box>(Regular)</Box>
                  </Typography>
                </Fragment>
              }
              disableRipple={true}
            />
            <Tab
              classes={tabItemStyles}
              label={
                <Fragment>
                  <Typography variant="h5">
                    <Box fontWeight={600}>Advanced</Box>
                  </Typography>
                  <Typography component={'div'} variant="body2">
                    <Box>(Regular)</Box>
                  </Typography>
                </Fragment>
              }
              disableRipple={true}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <GridList
              className={classes.gridList}
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
              cols={large ? 3 : medium ? 2.5 : small ? 2.0 : 1.04}
            >
              {Object.entries(training).map(([cname, course], index) => {
                return (
                  <GridListTile
                    key={index}
                    style={{
                      height: '600px'
                    }}
                  >
                    <CourseCard course={course} />
                  </GridListTile>
                );
              })}
            </GridList>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <GridList
              className={classes.gridList}
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
              cols={large ? 3 : medium ? 2.5 : small ? 2.0 : 1.04}
            >
              {Object.entries(foundation).map(([cname, course], index) => {
                return (
                  <GridListTile
                    key={index}
                    style={{
                      height: '600px'
                    }}
                  >
                    <CourseCard course={course} />
                  </GridListTile>
                );
              })}
            </GridList>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <GridList
              className={classes.gridList}
              cols={large ? 3 : medium ? 2.5 : small ? 1.7 : 1.2}
            >
              {Object.entries(advanced).map(([cname, course], index) => {
                return (
                  <GridListTile
                    key={index}
                    style={{
                      height: '600px'
                    }}
                  >
                    <CourseCard course={course} />
                  </GridListTile>
                );
              })}
            </GridList>
          </TabPanel>
        </Grid>
      </Grid>
    </Grid>
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
