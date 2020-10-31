import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Link,
  Hidden
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F2F7FF',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(3),
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    },
    color: '#000000'
  },
  input: {
    color: theme.palette.secondary.main,
    backgroundColor: '#fff'
  },
  registerBtn: {
    color: theme.palette.secondary.main,
    backgroundColor: '#fff',
    marginLeft: '10px',
    padding: '7.5px 0px'
  },
  iconBtn: {
    display: 'inline-flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    border: '2px solid #fff'
  },
  socialIcon: {
    color: theme.palette.secondary.main,
    backgroundColor: '#fff',
    marginLeft: '10px',
    padding: '6px 0px'
  },
  logo: {
    width: 320,
    height: 'auto'
    // borderRadius: '50%'
  },
  iconSocialMedia: {
    color: '#000'
  },
  centerCls: {
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingTop: '5px'
  },
  circleCls: {
    backgroundColor: '#fff',
    color: '#000',
    // border: '2px solid red',
    borderRadius: '50%'
  },
  extraMarginTop: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },
  extraMargin: {
    marginTop: '10px'
  },
  copyRightPadding: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(3)
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row'
    }
  },
  extremeFooter: {
    color: '#8A8A8A',
    backgroundColor: '#EBF3FF',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  }
}));

function Footer({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div>
      <div className={clsx(classes.root, className)} {...rest}>
        <Container maxWidth="lg">
          <Grid container component="dl">
            <Grid item xs={12} md={4} className={classes.extraMarginTop}>
              <Logo className={classes.logo} />
            </Grid>
            <Grid item xs={12} md={4} className={classes.extraMarginTop}>
              <Typography variant="h4" gutterBottom>
                Contact us
              </Typography>
              <Grid item xs={3} md={3} className={classes.extraMargin}>
                <List
                  className={classes.flexContainer}
                  style={{ flexDirection: 'column' }}
                >
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="mailto:team@codeforcause.org"
                  >
                    <ListItemIcon className={classes.iconSocialMedia}>
                      <img
                        src={`/static/images/icons/social/mail.svg`}
                        height="23px"
                        alt="mail"
                      />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.iconSocialMedia}
                      primary="team@codeforcause.org"
                    />
                  </ListItem>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="/terms"
                  >
                    <ListItemText
                      className={classes.iconSocialMedia}
                      primary="Terms Of Use"
                      style={{ whiteSpace: 'nowrap' }}
                    />
                  </ListItem>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="/privacy"
                  >
                    <ListItemText
                      className={classes.iconSocialMedia}
                      primary="Privacy Policy"
                      style={{ whiteSpace: 'nowrap' }}
                    />
                  </ListItem>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="/refundpolicies"
                  >
                    <ListItemText
                      className={classes.iconSocialMedia}
                      primary="Refund & Cancellation Policy"
                      style={{ whiteSpace: 'nowrap' }}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid item xs={12} md={2} className={classes.extraMarginTop}>
              <Typography variant="h4" gutterBottom>
                Our Blog
              </Typography>
              <Grid item xs={3} md={2} className={classes.extraMargin}>
                <List className={classes.flexContainer}>
                  <ListItem
                    className={classes.centerCls}
                    component="a"
                    href="https://medium.com/code-for-cause"
                    target="_blank"
                  >
                    <ListItemIcon className={classes.iconSocialMedia}>
                      <FontAwesomeIcon icon={['fab', 'medium']} size="lg" />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.iconSocialMedia}
                      primary="Medium"
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>

            <Grid item xs={12} md={2} className={classes.extraMarginTop}>
              <Typography variant="h4" gutterBottom>
                Follow us on
              </Typography>
              <Grid item xs={3} md={3} className={classes.extraMargin}>
                <List className={classes.flexContainer}>
                  <ListIcons
                    link="https://www.facebook.com/codeforcauseorg"
                    icon="fb"
                    text="Facebook"
                  />
                  <ListIcons
                    link="https://twitter.com/codeforcauseIn"
                    icon="tw"
                    text="Twitter"
                  />
                  <ListIcons
                    link="https://www.instagram.com/codeforcause/"
                    icon="ins"
                    text="Instagram"
                  />
                  <ListIcons
                    link="https://www.linkedin.com/company/codeforcauseorg/"
                    icon="lin"
                    text="LinkedIn"
                  />
                  <ListIcons
                    link="https://t.me/codeforcause"
                    icon="tele"
                    text="Telegram"
                  />
                  <ListIcons
                    link="https://www.youtube.com/channel/UCfv8cds8AfIM3UZtAWOz6Gg"
                    icon="yt"
                    text="YouTube"
                  />
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Grid xs={12} className={classes.extremeFooter}>
        <Typography display="block" variant="body2">
          {'Copyright © '}
          {new Date().getFullYear()}{' '}
          <Link
            style={{ textDecoration: 'none', color: '#8A8A8A' }}
            href="https://codeforcause.org"
          >
            {' '}
            Code For Cause
          </Link>
          {'. All rights reserved.'}
        </Typography>
      </Grid>
    </div>
  );
}

function ListIcons({ link, icon, text }) {
  const classes = useStyles();

  return (
    <ListItem
      className={classes.centerCls}
      component="a"
      href={link}
      target="_blank"
    >
      <ListItemIcon className={classes.iconSocialMedia}>
        <img
          src={`/static/images/icons/social/${icon}.svg`}
          height="23px"
          alt={icon}
        />
      </ListItemIcon>
      <Hidden smDown>
        <ListItemText className={classes.iconSocialMedia} primary={text} />
      </Hidden>
    </ListItem>
  );
}

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
