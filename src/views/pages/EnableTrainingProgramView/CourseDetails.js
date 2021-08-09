import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  makeStyles,
  Typography,
  Box
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '10px',
    margin: theme.spacing(6, 4, 0),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
    // backgroundPositionY: 'center',
    padding: theme.spacing(0, 10, 20),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2, 10),
      margin: theme.spacing(6, 2, 0)
    },
    color: '#000000'
  },
  title: {
    margin: theme.spacing(4, 7),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(4, 2)
    }
  },
  list: {
    margin: theme.spacing(0, 5),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0)
    }
  },
  cards: {
    width: '100%',
    display: 'inline-block',
    color: '#000'
  },
  grid: {
    marginTop: theme.spacing(7),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3)
    }
  }
}));

function CourseDetails({ benefits, className, ...rest }) {
  const classes = useStyles();
  return (
    <div
      id="course-details"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container>
        <Typography
          style={{
            color: '#000',
            marginBottom: '16px',
            textTransform: 'capitalize',
            fontWeight: 600
          }}
          variant="h2"
          align="center"
        >
          Course Details
        </Typography>

        <Grid container spacing={9} className={classes.grid} justify="center">
          <Grid xs={12} md={6} key={0} className={classes.innerGrid}>
            <Hidden smDown>
              <Box display="flex" alignItems="center" height="100%">
                <img
                  alt="Course Detail"
                  src="/static/images/backs/detail.jpg"
                  width="100%"
                />
              </Box>
            </Hidden>
          </Grid>
          <Grid xs={12} md={6} key={1} className={classes.innerGrid}>
            <Typography variant="h5" className={classes.title}>
              DISTRIBUTED OVER 70 SESSIONS, COVERD IN 5 MONTHS
            </Typography>
            <List component="list" aria-label="Program">
              <ListItem className={classes.list}>
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: '#000080' }} />
                </ListItemIcon>
                <ListItemText primary="Dara Structures And Algorithms in Java (15 Sessions)." />
              </ListItem>
              <ListItem className={classes.list}>
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: '#000080' }} />{' '}
                </ListItemIcon>
                <ListItemText primary="Spring MVC + Spring Boot (10 Sessions)." />
              </ListItem>
              <ListItem className={classes.list}>
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: '#000080' }} />
                </ListItemIcon>
                <ListItemText primary="Auth + Social + AOP + Spring Data + Hibernate (15 Sessions)." />
              </ListItem>
              <ListItem className={classes.list}>
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: '#000080' }} />{' '}
                </ListItemIcon>
                <ListItemText primary="React Application Development (20 Sessions)." />
              </ListItem>
              <ListItem className={classes.list}>
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: '#000080' }} />{' '}
                </ListItemIcon>
                <ListItemText primary="Project Development + Git Version Control (10 Sessions)." />
              </ListItem>
            </List>
            <Typography variant="h5" className={classes.title}>
              The Course Will Be Covered By Our Most Experienced Trainer Mr.
              Anuj Garg To Ensure Students Extract The Maximum Out Of Every
              Session And Meet Consistent Levels Of Quality Across The Board.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

CourseDetails.propTypes = {
  className: PropTypes.string
};

export default CourseDetails;
