import {
  Box,
  Card,
  CardContent,
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
    borderRadius: '10px',
    margin: theme.spacing(6, 4, 0),
    backgroundImage: 'url("/static/images/backs/sb.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
    // backgroundPositionY: 'center',
    padding: theme.spacing(10, 10, 20),
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
  },
  grid: {
    marginTop: theme.spacing(7),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3)
    }
  }
}));

const offers = [
  {
    name: 'MERN Scholarship',
    applied_on: '*Only Applied on Web Development with JS',
    desc:
      'Introducing the MERN scholarship for Web Enthusiast, a thorough go through of every concept and building awesome project while learning and implementing concepts of MERN Stack.',
    links: [
      {
        name: 'Apply Now',
        link: '/special-practical-webdev-with-js'
      }
    ],
    terms: '',
    special_price: '1200/-',
    original_price: '₹ 12,000',
    pic: '/static/images/backs/sc.png'
  },
]

function Promo({ benefits, className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      id="special-offers"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container>
        <Typography
          style={{
            color: '#ffffff',
            marginBottom: '16px',
            textTransform: 'capitalize',
            fontWeight: 700
          }}
          variant="h1"
          align="center"
        >
          Special Offers
        </Typography>

        <Grid container spacing={9} className={classes.grid} justify="center">
          {offers.map((item, index) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <Card key={index} raised className={classes.cards}>
                  <CardMedia image={item.pic} style={{ height: '280px' }} />
                  <Typography
                    variant="h2"
                    style={{
                      color: '#fff',
                      fontWeight: 700,
                      margin: '-54px 0px 20px 26px'
                    }}
                  >
                    {item.name}
                  </Typography>
                  <CardContent
                    style={{ textAlign: 'left', paddingLeft: '30px' }}
                  >
                    <Typography variant="body1">{item.desc}</Typography>
                    <TextBox
                      title="Special Price"
                      left={item.original_price}
                      right={item.special_price}
                      lineThrough
                    />
                    <Grid
                      container
                      direction="row"
                      flexDirection="row"
                      justify="center"
                    >
                      {item.links.map((link, idx) => {
                        return (
                          <HashLink
                            smooth
                            to={link.link}
                            style={{
                              textDecoration: 'none',
                              flexGrow: 1,
                              marginRight: '10px'
                            }}
                          >
                            <ButtonComponent
                              fullWidth
                              title={link.name}
                              className={classes.btn}
                            />
                          </HashLink>
                        );
                      })}
                    </Grid>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      style={{
                        fontSize: '10px',
                        marginTop: '16px',
                        display: 'block'
                      }}
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
    <Box mb={2} mt={2} display="flex" flexDirection="row">
      <Typography variant="h5">{title}</Typography>
      <Typography
        style={{
          fontSize: '18px',
          margin: '0px 16px 0px 29px',
          color: '#939393',
          textDecoration: lineThrough ? 'line-through' : 'none'
        }}
      >
        {left}
      </Typography>

      <Typography
        style={{
          fontSize: '18px',
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
