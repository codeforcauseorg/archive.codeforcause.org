import { makeStyles } from '@material-ui/core';
import React from 'react';
import Page from '../../../components/Page';
import Footer from '../common/Footer';
import BlogContent from './BlogContent';
import Hero from './Hero';
import PublishBlog from './PublishBlog';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f2f2f2',
    overflowX: 'hidden'
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
        <BlogContent />
        <PublishBlog />
        <Footer />
      </Page>
    </div>
  );
}
