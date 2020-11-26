import {
  Avatar,
  Box,
  Container,
  Grid,
  Hidden,
  LinearProgress,
  ListItem,
  makeStyles,
  Typography
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  root: {
    color: '#FFF',
    background:
      'linear-gradient(180deg, #2A185A 0%, #000000 100%, #1D006E 100%)',
    paddingTop: 80,
    paddingBottom: 30,
    paddingLeft: 90,
    paddingRight: 0,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  avatar: {
    height: 160,
    width: 160,
    float: 'left',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      margin: 'auto'
    }
  },
  user: {
    display: 'grid',
    alignContent: 'center',
    paddingRight: '20px',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      textAlign: 'center',
      paddingTop: '40px'
    }
  },
  rightPanel: {
    display: 'grid',
    alignContent: 'flex-end'
  },
  rightPanelItems: {
    display: 'grid',
    justifyContent: 'end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  profileSetting: {
    display: 'grid',
    justifyContent: 'flex-end',
    paddingBottom: '38px',
    [theme.breakpoints.down('md')]: {
      padding: '40px 0 5px'
    }
  },
  profileSettingTypography: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    marginLeft: '12px',
    height: '30px',
    marginBottom: '5px'
  },
  socialIcon: {
    marginLeft: '5px',
    padding: '0px 0px'
  },
  iconSocialMedia: {
    height: '12px',
    color: '#fff',
    paddingRight: '15px'
  },
  centerCls: {
    paddingLeft: '0px',
    paddingRight: '0px'
  },
  socialIconsBox: {
    display: 'grid',
    justifyContent: 'flex-end'
  },
  link: {
    textDecoration: 'none'
  },

  extraPadding: {
    padding: '0 70px 0px 0px',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  }
}));

function Hero({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container>
        <Grid container spacing={0}>
          <Hidden smDown>
            <StudentNameWithAvatar wrap="nowrap" />
          </Hidden>
          <Hidden mdUp>
            <StudentNameWithAvatar />
          </Hidden>
          <Grid className={classes.rightPanel} item xs={12} md={6}>
            <Box className={classes.rightPanelItems}>
              <Box
                className={classes.profileSetting}
                justifyContent="center"
                alignContent="center"
              >
                <Typography
                  className={classes.profileSettingTypography}
                  variant="subtitle2"
                >
                  Profile Settings
                  <Link to="/editProfile">
                    <img
                      alt="setting-icon"
                      className={classes.icon}
                      src="/static/images/icons/Vector.svg"
                    />
                  </Link>
                </Typography>
              </Box>
              <Box className={classes.socialIconsBox}>
                <IconsList />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box style={{ paddingTop: '30px' }} textAlign="center">
          <Typography align="center" variant="caption">
            Your profile is 92% Complete. A full profile help you build a career
            focused network.
            <Link to="/editProfile" className={classes.link}>
              <Typography
                display="inline"
                variant="caption"
                style={{ color: '#1079F4' }}
              >
                {' '}
                Edit Profile
              </Typography>
            </Link>
          </Typography>
          <BorderLinearProgress variant="determinate" value={90} />
        </Box>
      </Container>
    </div>
  );
}

function StudentNameWithAvatar({ wrap }) {
  const classes = useStyles();
  return (
    <Grid container item wrap={wrap} xs={12} md={6} spacing={2}>
      <Avatar
        item
        alt="the firebase user ***"
        src="/static/sample.png"
        className={classes.avatar}
        xs={12}
      />
      <Container item className={classes.user} xs={12}>
        <Typography variant="h1" style={{ paddingBottom: '15px' }}>
          Gaurav Yadav
        </Typography>
        <Typography variant="subtitle2">Student | UIET, MDU</Typography>
        <Link to="/editProfile" className={classes.link}>
          <Typography variant="h6" style={{ color: '#1079F4' }}>
            Edit Profile
          </Typography>
        </Link>
      </Container>
    </Grid>
  );
}

function IconsList() {
  const classes = useStyles();
  const flexContainer = {
    display: 'flex',
    flexDirection: 'row'
  };

  return (
    <Grid item xs={12} md={6} className={classes.extraMargin}>
      <List style={flexContainer}>
        <ListItem
          className={classes.centerCls}
          component="a"
          href="https://www.facebook.com/codeforcauseorg"
          target="_blank"
        >
          <ListItemIcon className={classes.iconSocialMedia}>
            <img
              src="/static/images/icons/socialwhite/fb.svg"
              height="28.35px"
              alt="icon"
            />
          </ListItemIcon>
        </ListItem>
        <ListItem
          className={classes.centerCls}
          component="a"
          href="https://twitter.com/codeforcauseIn"
          target="_blank"
        >
          <ListItemIcon className={classes.iconSocialMedia}>
            <img
              src="/static/images/icons/socialwhite/tw.svg"
              height="28.35px"
              alt="icon"
            />
          </ListItemIcon>
        </ListItem>
        <ListItem
          className={classes.centerCls}
          component="a"
          href="https://www.instagram.com/codeforcause/"
          target="_blank"
        >
          <ListItemIcon className={classes.iconSocialMedia}>
            <img
              src="/static/images/icons/socialwhite/in.svg"
              height="28.35px"
              alt="icon"
            />
          </ListItemIcon>
        </ListItem>
        <ListItem
          className={classes.centerCls}
          component="a"
          href="https://www.linkedin.com/company/codeforcauseorg/"
          target="_blank"
        >
          <ListItemIcon className={classes.iconSocialMedia}>
            <img
              src="/static/images/icons/socialwhite/li.svg"
              height="28.35px"
              alt="icon"
            />
          </ListItemIcon>
        </ListItem>
      </List>
    </Grid>
  );
}

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 5,
    borderRadius: 5,
    width: '95%',
    marginTop: '10px'
  },
  colorPrimary: {
    backgroundColor: '#FFF'
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#A3FF94'
  }
}))(LinearProgress);

export default Hero;
