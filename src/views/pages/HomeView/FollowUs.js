import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YoutubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.main
  },
  iconSocialMedia: {
    color: '#fff'
  },
  centerCls: {
    padding: '0'
  }
}));

export default function FollowUs() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <List className={classes.root}>
          <ListItem
            className={classes.centerCls}
            component="a"
            href="https://www.youtube.com/channel/UCfv8cds8AfIM3UZtAWOz6Gg"
            target="_blank"
          >
            <ListItemIcon className={classes.iconSocialMedia}>
              <YoutubeIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.iconSocialMedia}
              primary="Youtube"
            />
          </ListItem>
          <ListItem
            className={classes.centerCls}
            component="a"
            href="https://www.facebook.com/codeforcauseorg"
            target="_blank"
          >
            <ListItemIcon className={classes.iconSocialMedia}>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.iconSocialMedia}
              primary="Facebook"
            />
          </ListItem>
          <ListItem
            className={classes.centerCls}
            component="a"
            href="https://www.instagram.com/codeforcause/"
            target="_blank"
          >
            <ListItemIcon className={classes.iconSocialMedia}>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.iconSocialMedia}
              primary="Instagram"
            />
          </ListItem>
          <ListItem
            className={classes.centerCls}
            component="a"
            href="https://twitter.com/codeforcauseIn"
            target="_blank"
          >
            <ListItemIcon className={classes.iconSocialMedia}>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.iconSocialMedia}
              primary="Twitter"
            />
          </ListItem>
          <ListItem
            className={classes.centerCls}
            component="a"
            href="https://www.linkedin.com/company/codeforcauseorg/"
            target="_blank"
          >
            <ListItemIcon className={classes.iconSocialMedia}>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.iconSocialMedia}
              primary="LinkedIn"
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
