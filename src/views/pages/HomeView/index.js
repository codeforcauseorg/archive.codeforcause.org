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
import Header from './Header';
import HeadeRight from './HeadeRight';



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

  return (
    <Page
      className={classes.root}
      title="Code for Cause"
    >
      <Hero />
      <Container maxWidth="lg">
      <Header />
      <HeadeRight />
      </Container>
      <Mentors mentors={project.mentors} />

      <CTA/>
      <Footer/>
    </Page>
  );
}

export default HomeView;
