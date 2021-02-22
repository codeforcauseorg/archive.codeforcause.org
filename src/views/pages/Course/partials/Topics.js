import {
  Box,
  Collapse,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(theme => ({
  expand: {
    height: '20px',
    width: '20px',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.short
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  dropDown: {
    width: '190px',
    whiteSpace: 'nowrap',
    color: '#A60000',
    [theme.breakpoints.down('xs')]: {
      width: '70px'
    }
  },
  topicBox: {
    background: '#E0E7FF',
    borderRadius: '5px',
    display: 'flex',
    padding: '0px 16px',
    margin: '8px 16px',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0
    }
  },
  padding: {
    padding: '10px 10px 10px 32px',
    [theme.breakpoints.down('xs')]: {
      padding: '8px 8px 8px 16px'
    }
  }
}));

export default function Topics({ course }) {
  const [expanded, setExpanded] = React.useState(0);

  return (
    <Grid container>
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        align="center"
        display="flex"
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Box display="flex" flexDirection="column">
          <Typography
            variant="h3"
            align="left"
            style={{
              marginBottom: '30px'
            }}
          >
            Topics To Be Covered
          </Typography>

          {course.sections.map((section, sectionIndex) => {
            console.log(section);
            return (
              <Box m={1} key={sectionIndex}>
                <SectionDropBox
                  section={section}
                  sectionIndex={sectionIndex}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              </Box>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}

function SectionDropBox({ section, sectionIndex, expanded, setExpanded }) {
  const classes = useStyles();

  return (
    <Box
      style={{
        background: '#F1F4FE',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        className={classes.padding}
      >
        <Typography variant="h5" align="left" style={{ width: '100%' }}>
          {`Section ${sectionIndex + 1}: ` + section.title}
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          className={classes.dropDown}
        >
          <Hidden xsDown>
            <Typography
              align="left"
              variant="body2"
              style={{ width: '100%', fontWeight: 500 }}
              component={'span'}
            >
              <Box>{section.classes}</Box>
            </Typography>
          </Hidden>
          <IconButton
            style={{
              backgroundColor: '#fff'
              // padding: '0px'
            }}
            onClick={() => {
              expanded === sectionIndex
                ? setExpanded(-1)
                : setExpanded(sectionIndex);
            }}
          >
            <ExpandMoreIcon
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded === sectionIndex
              })}
            />
          </IconButton>
        </Box>
      </Box>

      <Collapse in={sectionIndex === expanded}>
        {section.topics.map((topic, topicIndex) => {
          return <TopicDropBox topic={topic} topicIndex={topicIndex} key={topicIndex}/>;
        })}
      </Collapse>
    </Box>
  );
}

function TopicDropBox({ topic, topicIndex }) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();

  return (
    <Box className={classes.topicBox}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        style={{
          margin: '8px 0px 0px'
        }}
      >
        <Typography
          align="left"
          variant="body2"
          style={{
            width: '100%'
          }}
        >
          {`Topic ${topicIndex + 1}: ${topic.title}`}
        </Typography>
        <Hidden xsDown>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            className={classes.dropDown}
          >
            <IconButton
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              <ExpandMoreIcon
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
              />
            </IconButton>
          </Box>
        </Hidden>

        <Hidden smUp>
          <IconButton
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Hidden>
      </Box>

      <Collapse in={expanded}>
        <Box
          m={2}
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: ''
          }}
        >
          {topic.subtopics.map((subtopic, subtopicIndex) => {
            return (
              <Box
                key={subtopicIndex}
                style={{
                  backgroundColor: '#F2F2F2',
                  margin: '4px 0px',
                  padding: '8px 8px 8px 24px',
                  borderRadius: '20px'
                }}
              >
                <Typography variant="body2" align="left">
                  {`${topicIndex + 1}.${subtopicIndex + 1} : ${subtopic}`}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Collapse>
    </Box>
  );
}
