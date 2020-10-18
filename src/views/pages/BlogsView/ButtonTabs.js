import { Button, makeStyles } from '@material-ui/core';
import React, { useReducer, useState } from 'react';

const useStyles = makeStyles(theme => ({
  unactbtn: {
    margin: '5px 8px 5px 0px',
    padding: '10px',
    background: '#DEDEDE',
    '&:hover': {
      background: '#dedede',
      color: 'black'
    }
  },
  actbtn: {
    margin: '5px 8px 5px 0px',
    padding: '10px',
    background: 'black',
    color: 'white',
    '&:hover': {
      background: 'black',
      color: 'white'
    }
  }
}));

export default function ButtonTabs() {
  const classes = useStyles();
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const topicArray = [
    {
      topic: 'Recents',
      activated: true
    },
    {
      topic: 'Experience',
      activated: false
    },
    {
      topic: 'Data Strutures',
      activated: false
    },
    {
      topic: 'Machine Learning',
      activated: false
    },

    {
      topic: 'C++',
      activated: false
    },
    {
      topic: 'Artificial Intelligence',
      activated: false
    }
  ];

  const [topics, updateTopics] = useState(topicArray);
  const handleTopicClick = evTopic => {
    for (var i = 0; i < topics.length; i++) {
      if (topics[i].topic === evTopic) {
        topics[i].activated = !topics[i].activated;
      }
    }
    console.log(topics);
    updateTopics(topics);
    forceUpdate();
  };

  return (
    <div>
      {topics.map(({ topic, activated }) => {
        if (activated)
          return (
            <Button
              className={classes.actbtn}
              focusRipple={false}
              disableRipple={true}
              onClick={() => {
                handleTopicClick(topic);
              }}
            >
              {topic}
            </Button>
          );
        else
          return (
            <Button
              className={classes.unactbtn}
              focusRipple={false}
              disableRipple={true}
              onClick={() => {
                handleTopicClick(topic);
              }}
            >
              {topic}
            </Button>
          );
      })}
    </div>
  );
}
