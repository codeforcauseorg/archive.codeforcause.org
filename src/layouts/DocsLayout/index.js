import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { Container, makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';
import components from './mdx';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    flex: '1 1 auto',
    overflow: 'auto'
  },
  content: {
    paddingBottom: 120
  }
}));

function DocsLayout({ children }) {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <Container
            maxWidth="md"
            className={classes.content}
          >
            <MDXProvider components={components}>
              {children}
            </MDXProvider>
          </Container>
        </div>
      </div>
    </>
  );
}

DocsLayout.propTypes = {
  children: PropTypes.any
};

export default DocsLayout;
