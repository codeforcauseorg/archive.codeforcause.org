import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import ButtonComponent from 'src/components/Button/ButtonComponent';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(180deg, #2A185A 0%, #000000 100%)',
    padding: theme.spacing(7, 10, 10),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 3)
    },
    color: '#000000'
  },
  cards: {
    width: '100%',
    display: 'inline-block',
    color: '#000'
  },
  btn: {
    fontWeight: 600,
    backgroundColor: '#A60000',
    color: '#ffffff',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'rgba(166, 0, 0, 0.8)'
    },
    marginLeft: '50%',
    marginTop: '8px',
    transform: 'translateX(-50%)'
  }
}));

const offers = [
  {
    name: 'MERN Scholarship',
    applied_on: '*Only Applied on Web Development with JS',
    link: '/special-practical-webdev-with-js',
    terms: '',
    special_price: '1200/-',
    original_price: '₹ 12,000',
    ill: '/static/illustrations/sc.svg'
  },
  {
    name: "Women's Day Special",
    applied_on: '*Applied on All Fundamental courses',
    link: '/courses/#Foundational',
    terms: 'Only Girls/Women are allowed for benefits',
    special_price: '999/-',
    original_price: '₹ 10,000',
    ill: '/static/illustrations/wd.svg'
  }
];

function Promo({ benefits, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container>
        <Typography
          style={{ color: '#ffffff', marginBottom: '16px' }}
          variant="h1"
          align="center"
        >
          SPECIAL BENEFITS
        </Typography>

        <Grid
          container
          spacing={9}
          style={{ textAlign: 'center', marginTop: '40px' }}
        >
          {offers.map((item, index) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <CardMedia
                  image={item.ill}
                  style={{ height: 100, width: '80%', margin: 'auto' }}
                />
                <Card key={index} raised className={classes.cards}>
                  <CardHeader title={item.name} />
                  <CardContent style={{ textAlign: 'center' }}>
                    <img src={item.ill} height="150px" alt="" />
                  </CardContent>
                  <CardContent
                    style={{ textAlign: 'left', paddingLeft: '30px' }}
                  >
                    <TextBox
                      title="Special Price"
                      left={item.original_price}
                      right={item.special_price}
                      lineThrough
                    />
                    <HashLink smooth to={item.link}>
                      <ButtonComponent
                        fullWidth
                        title="Apply Now"
                        className={classes.btn}
                      />
                    </HashLink>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      style={{ fontSize: '10px' }}
                    >
                      {item.applied_on}. Terms and Conditions Apply.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

Promo.propTypes = {
  className: PropTypes.string
};

export default Promo;

function TextBox({ title, left, right = '', lineThrough = false }) {
  return (
    <Box mb={2} display="flex" flexDirection="row">
      <Typography
        style={{
          fontSize: '14px',
          marginRight: '0px'
        }}
      >
        {title}
      </Typography>
      <Typography
        style={{
          fontSize: '14px',
          margin: '0px 16px 0px 29px',
          color: '#939393',
          textDecoration: lineThrough ? 'line-through' : 'none'
        }}
      >
        {left}
      </Typography>

      <Typography
        style={{
          fontSize: '14px',
          color: '#A60000',
          fontWeight: 700
        }}
        variant="h4"
      >
        {right}
      </Typography>
    </Box>
  );
}
