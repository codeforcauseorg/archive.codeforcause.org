import React, { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Chart from './Chart';

const useStyles = makeStyles((theme) => ({
  root: {},
  current: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(0.5)
  },
  navigateNextIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function getRandomInt(min, max) {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RealTime({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [data, setData] = useState([
    163,
    166,
    161,
    159,
    99,
    163,
    173,
    166,
    167,
    183,
    176,
    172
  ]);

  const getData = useCallback(() => {
    if (isMountedRef.current) {
      setData((prevData) => {
        const newData = [...prevData];

        newData.shift();
        newData.push(0);

        return newData;
      });
    }

    setTimeout(() => {
      if (isMountedRef.current) {
        setData((prevData) => {
          const newData = [...prevData];
          const random = getRandomInt(100, 200);

          newData.pop();
          newData.push(random);

          return newData;
        });
      }
    }, 500);
  }, [isMountedRef]);

  useEffect(() => {
    setInterval(() => getData(), 2000);
  }, [getData]);

  const labels = data.map((value, i) => i);

  const pages = [
    {
      pathname: '/app/projects',
      views: '24'
    },
    {
      pathname: '/app/chat',
      views: '21'
    },
    {
      pathname: '/cart',
      views: '15'
    },
    {
      pathname: '/cart/checkout',
      views: '8'
    }
  ];

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={(
          <Typography
            color="inherit"
            variant="h3"
          >
            {
              data[data.length - 1] === 0
                ? data[data.length - 2]
                : data[data.length - 1]
            }
          </Typography>
        )}
        classes={{ action: classes.current }}
        subheader="Page views per second"
        subheaderTypographyProps={{ color: 'textSecondary', variant: 'body2' }}
        title="Active users"
        titleTypographyProps={{ color: 'textPrimary' }}
      />
      <Chart
        data={data}
        labels={labels}
      />
      <List>
        {pages.map((page) => (
          <ListItem
            classes={{ divider: classes.itemDivider }}
            divider
            key={page.pathname}
          >
            <ListItemText
              primary={page.pathname}
              primaryTypographyProps={{ color: 'textSecondary', variant: 'body2' }}
            />
            <Typography color="inherit">
              {page.views}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Box
        p={2}
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          component={RouterLink}
          size="small"
          to="#"
        >
          See all
          <NavigateNextIcon className={classes.navigateNextIcon} />
        </Button>
      </Box>
    </Card>
  );
}

RealTime.propTypes = {
  className: PropTypes.string
};

export default RealTime;
