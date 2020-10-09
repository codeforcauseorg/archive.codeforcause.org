import React from 'react';
import {
  Grid,
  Typography,
  Hidden,
  Box,
  Collapse,
  IconButton
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Topics({ course }) {
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

          {course.topics.map((topic, topicIndex) => {
            return <TopicDropBox topic={topic} topicIndex={topicIndex} />;
          })}
        </Box>
      </Grid>
    </Grid>
  );
}

function TopicDropBox({ topic, topicIndex }) {
  const [expanded, setExpanded] = React.useState(false);

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
      onClick={() => {
        setExpanded(!expanded);
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
          <Box fontWeight={500}>{`Topic ${topicIndex + 1} : ${
            topic.title
          }`}</Box>
        </Typography>
        <Hidden xsDown>
          <Box
            display="flex"
            alignItems="center"
            style={{
              width: '200px',
              color: '#A60000'
            }}
          >
            <Typography variant="body1">
              <Box>{topic.classes}</Box>
            </Typography>
            <IconButton>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
        </Hidden>

        <Hidden smUp>
          <IconButton>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
