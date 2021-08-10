import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Hidden,
  Box,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Process from './Process';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '10px',
    margin: theme.spacing(6, 4, 0),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
    // backgroundPositionY: 'center',
    padding: theme.spacing(10, 10, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
      margin: theme.spacing(6, 2, 0)
    },
    color: '#000000'
  },
  title: {
    margin: theme.spacing(4, 3)
  },
  stepper: {
    margin: theme.spacing(30, 5, 0)
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

function AboutETP({ benefits, className, ...rest }) {
  const classes = useStyles();
  return (
    <div id="about-ETP" className={clsx(classes.root, className)} {...rest}>
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
          About Enable Training Programme
        </Typography>

        <Typography
          style={{
            color: '#000',
            marginBottom: '16px',
            fontWeight: 500
          }}
          variant="h4"
          align="center"
        >
          We want our underprivileged and underrespesented <br />
          students to become placement-ready.
        </Typography>

        <Grid container spacing={9} className={classes.grid} justify="center">
          <Grid xs={12} md={6} key={0}>
            <Typography variant="h5" className={classes.title}>
              OUR PROGRAM IS BUILT TO MAKE THE STUDENT:
            </Typography>
            <List component="list" aria-label="Program">
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: '#000080' }} />
                </ListItemIcon>
                <ListItemText primary="Proficient in FUll-Stack Development." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: '#000080' }} />{' '}
                </ListItemIcon>
                <ListItemText primary="Learn Woth Our Learn By Doing Approach." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: '#000080' }} />
                </ListItemIcon>
                <ListItemText primary="Stay Motivated And On Track With One-On-One Routine Guidance Sessions." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: '#000080' }} />{' '}
                </ListItemIcon>
                <ListItemText primary="Industry-Ready By Contributing To Open-Source Projects." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: '#000080' }} />{' '}
                </ListItemIcon>
                <ListItemText primary="Proficient in GitHub." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: '#000080' }} />{' '}
                </ListItemIcon>
                <ListItemText primary="Have An Abundance Of Intership And Placement Opportunities." />
              </ListItem>
            </List>
          </Grid>
          <Grid xs={12} md={6} key={1}>
            <Hidden smDown>
              <Box display="flex" alignItems="center" height="100%">
                <img
                  alt="AboutETP"
                  src="/static/images/backs/table.jpg"
                  width="100%"
                />
              </Box>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
      <Process />
    </div>
  );
}

AboutETP.propTypes = {
  className: PropTypes.string
};

export default AboutETP;
