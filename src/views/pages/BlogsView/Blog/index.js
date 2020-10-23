import React from 'react';
import Page from 'src/components/Page';
import Footer from '../../common/Footer';
import PublishBlog from '../PublishBlog';
import BlogContent from './BLogContent';
import Hero from './Hero';

export default function Blog({ id, ...props }) {
  return (
    <Page title="Blog">
      <Hero />
      <BlogContent id={props.match.params.id} />
      <PublishBlog />
      <Footer />
    </Page>
  );
}
