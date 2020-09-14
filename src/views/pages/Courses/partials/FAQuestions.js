import React from 'react';
import {
  Grid,
  Typography,
  Box,
  Collapse,
  IconButton
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export function FAQuestions({ course }) {
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
          {course.faqs.map((question, questionIndex) => {
            return (
              <QuestionDropBox
                question={question}
                questionIndex={questionIndex}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}

function QuestionDropBox({
  question,
  questionIndex,
  expanded,
  setExpanded
}) {
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
        setExpanded(questionIndex);
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Typography
          align="left"
          variant="body1"
          style={{
            width: '100%'
          }}
        >
          <Box fontWeight={500}>{question.title}</Box>
        </Typography>

        <IconButton>
          {expanded===questionIndex ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      <Collapse in={expanded===questionIndex}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: ''
          }}
        >
          <Typography
            variant="body1"
            align="left"
            style={{
              padding: '0px 0px 8px'
            }}
          >
            {question.answer}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
}
