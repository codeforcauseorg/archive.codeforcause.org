import React from 'react';
import Hero from './Hero';
import Page from '../../../components/Page';
import BlogHead from './BlogHead';
import { Container, Grid, Hidden, makeStyles } from '@material-ui/core';
import BlogItem from './BlogItem';
import SideBar from './SideBar';
import PublishBlog from './PublishBlog';
import Footer from '../common/Footer';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f2f2f2'
  },
  paddingTop: {
    padding: '50px auto 100px',
    marginTop: '90px',
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      marginBottom: 0
    }
  }
}));

export default function BlogsView() {
  const classes = useStyles();
  return (
    <div>
      <Page className={classes.root} title="CFC Blogs">
        <Hero />
        <BlogHead />
        <Container className={classes.paddingTop}>
          <Grid container justify="space-between">
            <Grid item md={8} sm={12}>
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
            </Grid>
            <Hidden smDown>
              <Grid item md={4}>
                <SideBar />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
        <PublishBlog />
        <Footer />
      </Page>
    </div>
  );
}
