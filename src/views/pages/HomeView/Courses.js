import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ParallaxSlide from '@mui-treasury/components/slide/parallax';
import PropTypes from 'prop-types';

import {
  Grid,
  Typography,
  Tab,
  Tabs,
  Box,
  Card,
  CardContent,
  GridList,
  GridListTile
} from '@material-ui/core';
import { insideTriangleTabsStylesHook } from '@mui-treasury/styles/tabs';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import coursesContent from 'src/data/courses';
import { Link } from 'react-router-dom';

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
    transform: 'translateZ(0)'
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
    console.log(newValue);
    setValue(newValue);
  };

  const foundation = coursesContent.foundation;
  const advanced = coursesContent.advanced;

  return (
    <Grid container className={classes.root}>
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
          Our courses are designed to fulfil the need of both students and
          professional developers. Learn from ground and become expert with pure
          practical approch of learning.
        </Typography>
      </Grid>

      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h1"
          align="center"
          style={{
            marginBottom: '50px',
            color: '#A60000'
          }}
        >
          Junior’s Class?
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
          justifyContent="center"
          alignItems="center"
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
                    <Box fontWeight={600}>Foundation</Box>
                  </Typography>
                  <Typography variant="body2">
                    <Box>(Reg. Open)</Box>
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
                  <Typography variant="body2">
                    <Box>(Reg. Open)</Box>
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
                    <Box fontWeight={600}>Complete</Box>
                  </Typography>
                  <Typography variant="body2">
                    <Box>(Launching Soon)</Box>
                  </Typography>
                </Fragment>
              }
              disabled
              disableRipple={true}
            />
          </Tabs>

          <TabPanel value={value} index={0}>
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
                      height: '500px',
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
              cols={large ? 3 : medium ? 2.5 : small ? 1.7 : 1.2}
            >
              {Object.entries(advanced).map(([cname, course], index) => {
                return (
                  <GridListTile
                    key={course.id}
                    style={{
                      height: '500px'
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

const CourseCard = ({ course }) => {
  const classes = useStyles();
  return (
    <Box>
      <Card
        className={classes.card}
        display="flex"
        style={{
          maxWidth: '320px'
        }}
      >
        <CardContent className={classes.cardContent}>
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              style={{
                margin: '8px 0px 0px'
              }}
            >
              <Typography
                align="left"
                variant="body2"
                style={{
                  width: '50%',
                  color: '#0085FF'
                }}
              >
                {course.difficulty}
              </Typography>
              <Typography
                align="right"
                variant="body2"
                style={{
                  width: '50%'
                }}
              >
                <Box fontWeight={600}>{course.level}</Box>
              </Typography>
            </Box>

            <Typography
              variant="h5"
              align="left"
              style={{
                marginBottom: '16px',
                color: '#FF4C00'
              }}
            >
              {course.domain}
            </Typography>

            <Typography variant="h4" align="left">
              {course.title}
            </Typography>
          </Box>
        </CardContent>

        <ParallaxCarousel slides={course.slides} />

        <CardContent className={classes.cardContent}>
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              style={{
                marginTop: '4px 0px'
              }}
            >
              <Typography
                style={{
                  marginRight: '8px',
                  color: '#A3A3A3'
                }}
              >
                Duration
              </Typography>
              <Typography>{course.duration}</Typography>
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              style={{
                marginTop: '4px 0px'
              }}
            >
              <Typography
                style={{
                  marginRight: '8px',
                  color: '#A3A3A3'
                }}
              >
                Upcoming
              </Typography>
              <Typography>{course.upcoming}</Typography>
            </Box>

            <Box mb={4} display="flex" flexDirection="row">
              {course.tags.slice(0, 3).map((tag, index) => (
                <div
                  style={{
                    margin: '4px 16px 4px 0px',
                    padding: '4px 8px',
                    border: '1px solid',
                    borderColor: '#A60000',
                    borderRadius: '5px'
                  }}
                  variant="outlined"
                >
                  <Typography color="primary" variant="body2" noWrap={true}>
                    {tag}
                  </Typography>
                </div>
              ))}
            </Box>
          </Box>
        </CardContent>

        <Link
          display="flex"
          justifyContent="center"
          to={course.link}
          style={{
            background: '#A60000',
            color: '#FF4C00',
            textDecoration: 'none'
          }}
        >
          <Typography
            align="center"
            style={{
              color: '#FFFFFF'
            }}
          >
            <Box m={1} fontWeight={600}>
              Check Details
            </Box>
          </Typography>
        </Link>
      </Card>
    </Box>
  );
};

const ParallaxCarousel = ({ slides }) => {
  const renderChildren = () =>
    slides.map((slide, index) => {
      return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="bottom"
          style={{
            height: '141px',
            width: '100%',
            color: '#FFFFFF',
            padding: '8px',
            backgroundImage: `url(${slide.image})`
          }}
        >
          <Box display="flex" flexDirection="column" style={{
              position: "absolute",
              bottom: 8
          }}>
            <Typography variant="h4" align="left">
              <Box>{slide.heading}</Box>
            </Typography>
            <Typography variant="h6" align="left">
              <Box fontWeight={600}>{slide.subheading}</Box>
            </Typography>
          </Box>
        </Box>
      );
    });
  return <ParallaxSlide>{renderChildren}</ParallaxSlide>;
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
