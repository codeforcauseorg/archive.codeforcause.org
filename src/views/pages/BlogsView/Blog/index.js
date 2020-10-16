import React from 'react';
import Page from 'src/components/Page';
import Footer from '../../common/Footer';
import PublishBlog from '../PublishBlog';
import BlogContent from './BLogContent';
import Hero from './Hero';

export default function Blog() {
  return (
    <Page title="Blog">
      {/* <BlogCard /><BlogCard /><BlogCard /> */}
      <Hero />
      <BlogContent />
      <PublishBlog />
      <Footer />
    </Page>
  );
}
