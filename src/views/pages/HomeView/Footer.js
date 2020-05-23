import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import FooterList from './FooterList';
import {
  Box,
  Container,
  Button,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Logo from 'src/components/Logo';
import FollowUs from './FollowUs'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    '& dt': {
      marginTop: theme.spacing(2)
    },
    color: '#FFF'
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
    border:'2px solid #fff'
  },
  socialIcon: {
    color: theme.palette.secondary.main,
    backgroundColor: '#fff',
    marginLeft: '10px',
    padding: '6px 0px'
  },
  logo: {
    width: 130,
    height : 130,
    borderRadius: '50%'
  }
}));

function Footer({ footerInfo, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container component="dl" >
          <Grid container direction="column" alignItems="center" item xs={12} md={3} sm={12} >            
            <Logo className={classes.logo} />
          </Grid>
          {footerInfo.map(footerColumn => (
            <Grid item container direction="column" alignItems="center" key={footerColumn.id} xs={12} md={2} sm={6}>
               <Typography variant="h4">{footerColumn.heading}</Typography>
              <FooterList footerColumn={footerColumn.column} />
            </Grid>
          ))}
         
           <Grid container direction="column" alignItems="center" item xs={12} md={2} sm={6}>
            <Typography variant="h4">
              Follow Us On
            </Typography>
            {/* <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-primary"
                label=""
                placeholder="email"
                variant="outlined"
                size="small"
                defaultValue=""
                InputProps={{
                  className: classes.input
                }}
              />
              <Button
                variant="contained"
                className={classes.registerBtn}
                size="small"
                disableElevation
              >
                {/* <IconButton */}
                  {/* size="small"
                  className={classes.iconBtn}
                  aria-label="register"
                > */}
                  {/* <ArrowForwardIosIcon /> */}
                {/* </IconButton> */}
                {/* register */}
              {/* </Button>
            </form>
            <Box mt={-1} display="flex" justifyContent="flex-start">
              <Button
                component="a"
                href="https://www.facebook.com/"
                target="_blank"
                variant="contained"
                className={classes.socialIcon}
                size="small"
                disableElevation
              >
                <FacebookIcon />
              </Button>

              <Button
                component="a"
                href="https://www.facebook.com/"
                target="_blank"
                variant="contained"
                className={classes.socialIcon}
                size="small"
                disableElevation
              >
                <TwitterIcon />
              </Button>
              <Button
                component="a"
                href="https://www.facebook.com/"
                target="_blank"
                variant="contained"
                className={classes.socialIcon}
                size="small"
                disableElevation
              >
                <InstagramIcon />
              </Button>

              <Button
                component="a"
                href="https://www.facebook.com/"
                target="_blank"
                variant="contained"
                className={classes.socialIcon}
                size="small"
                disableElevation
              >
                <LinkedInIcon />
              </Button>
            </Box>
           */} 
           <FollowUs/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
