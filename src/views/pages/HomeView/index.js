import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import { makeStyles, Container} from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import CTA from './CTA';
import Footer from './Footer';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Mentors from './Mentors'
import OpenKnowledge from './OpenKnowledge';
import OpenSource from './OpenSource';



const useStyles = makeStyles(() => ({
  root: {}
}));

function HomeView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();

  const [project, setProject] = useState(null);


  const getProject = useCallback(() => {
    axios
      .get('/api/projects/projects/1')
      .then((response) => {
        if (isMountedRef.current) {
          setProject(response.data.project);
        }
      });
  }, [isMountedRef]);
  useEffect(() => {
    getProject();
  }, [getProject]);

  if (!project) {
    return null;
  }
  const footerInfo = [
    {
      id:1,
      heading : 'Code for Cause',
      column : [{
        title : 'Blogs',
        link : 'https://medium.com/code-for-cause'
      },
      {
        title : 'Blogs',
        link : 'https://medium.com/code-for-cause'
      }]
    },
    {
      id:2,
      heading : 'Products',
      column : [{
        title : 'Events',
        link : '#'
      },
      {
        title : 'Op',
        link : ''
      }]
    },
    {
      id:3,
      heading : 'Contact Us',
      column : [{
        title : 'Blogs',
        link : 'https://medium.com/@nbanzyme/easy-way-to-install-nvm-on-ubuntu-18-04-2cfb19ee5391'
      },
      {
        title : 'Apple',
        link : 'https://medium.com/@nbanzyme/easy-way-to-install-nvm-on-ubuntu-18-04-2cfb19ee5391'
      }]
    }
  ]
      

  return (
    <Page
      className={classes.root}
      title="Code for Cause"
    >
      <Hero />
      <Container maxWidth="lg">
      <OpenKnowledge />
      <OpenSource />
      </Container>
      <Mentors mentors={project.mentors} />

      <CTA/>
      <Footer footerInfo={footerInfo}/>
    </Page>
  );
}

export default HomeView;
