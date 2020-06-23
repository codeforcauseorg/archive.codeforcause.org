import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Button,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 40,
    paddingBottom: 100,
    [theme.breakpoints.down('md')]: {
      paddingTop: 40,
      paddingBottom: 60
    }
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));
const cards = [1, 2, 3];

function Events({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container className={classes.cardGrid} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Machine Learning
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Button size="small" color="primary" variant="contained">
            Subscribe
          </Button>
          <Typography variant="body2">
            Our Youtube Channel For Previous Webinars
          </Typography>
        </Grid>
      </Container>
    </div>
  );
}

Events.propTypes = {
  className: PropTypes.string
};

export default Events;
