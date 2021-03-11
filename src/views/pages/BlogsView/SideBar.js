import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography, makeStyles, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(180deg, #2A185A 0%, #000000 100%)',
    paddingTop: theme.spacing(1),
    borderRadius: '5px',
    width: '340px'
  },

  centerCls: {
    paddingLeft: '5px',
    paddingRight: '5px'
  },
  box: {
    margin: '8px',
    padding: '8px 0px',
    color: '#fff'
  },
  img: {
    width: '276px',
    height: '100%',
    marginBottom: '8px'
  }
}));

function SideBar({ blog }) {
  return <SideBarItems blogs={blog} />;
}

function SideBarItems({ blogs, flat }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container
        maxWidth="lg"
        style={{
          width: flat ? '100%' : '360px'
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          style={{
            flexWrap: flat ? 'nowrap' : 'wrap'
          }}
        >
          <Typography
            variant="h4"
            style={{
              margin: '12px 0px 12px 8px',
              color: '#fff'
            }}
          >
            Popular Among Readers
          </Typography>
          {blogs.map((blog, index) => {
            return <Blog blog={blog} index={index} />;
          })}
        </Box>
      </Container>
    </div>
  );
}

function Blog({ blog, index }) {
  const classes = useStyles();
  return (
    <Box display="inline-flex" flexDirection="column" className={classes.box}>
      <img alt={blog.title} src={blog.thumbnail} className={classes.img} />
      <Typography variant="h6" color="secondary">
        {blog.categories[0]}
      </Typography>
      <Link
        to={`blog/${index + 5}`}
        style={{ textDecoration: 'none', color: '#fff' }}
      >
        <Typography
          variant="body1"
          style={{
            fontWeight: 600,
            fontSize: '20px',
            padding: '8px 12px 8px 0'
          }}
        >
          {blog.title}
        </Typography>
        <Typography variant="caption">
          {'Published on '}
          {blog.pubDate.split(' ')[0]}
        </Typography>
        <Typography
          variant="caption"
          display="block"
          style={{ fontWeight: 700, paddingTop: '8px' }}
        >
          By {blog.author}
        </Typography>
      </Link>
    </Box>
  );
}

SideBar.propTypes = {
  className: PropTypes.string
};

export default SideBar;
