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
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.short
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));

export default function Topics({ course }) {

  const [expanded, setExpanded] = React.useState(0);

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        align="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box display="flex" flexDirection="column">
          <Typography
            variant="h3"
            align="left"
            style={{
              marginBottom: '16px'
            }}
          >
            Topics To Be Covered
          </Typography>

          {course.sections.map((section, sectionIndex) => {
            console.log(section);
            return (
              <Box m={1}>
                <SectionDropBox section={section} sectionIndex={sectionIndex} expanded={expanded} setExpanded={setExpanded}/>
              </Box>
              
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}

function SectionDropBox({ section, sectionIndex, expanded, setExpanded }) {
  

  return (
    <Box
      style={{
        background: '#F1F4FE',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column'
      }}
      onClick={() => {
        setExpanded(sectionIndex);
      }}
    >
      <Box display="flex" flexDirection="row" alignItems="center" style={{
        padding : "16px"
      }}>
        <Typography
            variant="h4"
        >
          {"Section : " + section.title}
        </Typography>
      </Box>

      <Collapse in={sectionIndex === expanded}>
        {section.topics.map((topic, topicIndex) => {
          return <TopicDropBox topic={topic} topicIndex={topicIndex} />;
        })}
      </Collapse>
    </Box>
  );
}

function TopicDropBox({ topic, topicIndex }) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();

  return (
    <Box
      style={{
        background: '#F1F4FE',
        borderRadius: '5px',
        display: 'flex',
        padding: '8px 16px',
        margin: '8px 0px',
        flexDirection: 'column'
      }}
    >
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
          variant="body1"
          style={{
            width: '100%'
          }}
        >
          <Box fontWeight={500}>{`Topic ${topicIndex + 1}: ${
            topic.title
          }`}</Box>
        </Typography>
        <Hidden xsDown>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            style={{
              width: '180px',
              whiteSpace: 'nowrap',
              color: '#A60000'
            }}
          >
            <Typography align="left" variant="body1" style={{ width: '100%' }}>
              <Box>{topic.classes}</Box>
            </Typography>
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
              <Typography
                variant="body1"
                align="left"
                style={{
                  padding: '8px 0px'
                }}
              >
                {`Topic ${topicIndex + 1}.${subtopicIndex + 1} : ${subtopic}`}
              </Typography>
            );
          })}
        </Box>
      </Collapse>
    </Box>
  );
}
