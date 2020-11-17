import React from 'react';
import Page from 'src/components/Page';
import Projects from './Projects';
import Hero from './Hero';
import TrainingContent from './TrainingContent';
import Features from '../Course/Features';
import Footer from '../common/Footer';

export default function Training() {
  return (
    <Page title="Campus Leaders" style={{ zIndex: 0 }}>
      <Hero />
      <TrainingContent />
      <Projects />
      <Features />
      <Footer />
    </Page>
  );
}
