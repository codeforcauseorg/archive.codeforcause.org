import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import FooterList from './FooterList';
import {
  Container,
  Button,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


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
    color: "white"
  }
}));

function Footer({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={3} component="dl">
          <Grid item xs={12} md={2}>
            <Typography variant="h4">Product</Typography>
            <FooterList></FooterList>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h4">Product</Typography>
            <FooterList></FooterList>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h4">Product</Typography>
            <FooterList></FooterList>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h4">Product</Typography>
            <FooterList></FooterList>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="overline">
              Subscribe to stay tuned for news and latest updates
            </Typography>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-secondary"
                label="Outlined secondary"
                variant="outlined"
                size="small"
                defaultValue="color"
                InputProps={{
                  className: classes.input
                }}
              />
              <Button variant="contained" size="small" color="default" disableElevation>
                <IconButton size="small" aria-label="add to shopping cart">
                  <ArrowForwardIosIcon />
                </IconButton>
              </Button>
              
            </form>
          
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
