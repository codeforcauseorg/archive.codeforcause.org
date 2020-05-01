import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import getInitials from 'src/utils/getInitials';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import GenericMoreButton from 'src/components/GenericMoreButton';

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    padding: theme.spacing(3),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }
}));

function CustomerActivity({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [activities, setActivities] = useState(null);

  const getActivities = useCallback(() => {
    axios
      .get('/api/reports/customer-activity')
      .then((response) => {
        if (isMountedRef.current) {
          setActivities(response.data.activities);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getActivities();
  }, [getActivities]);

  if (!activities) {
    return null;
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Customer Activity"
        action={<GenericMoreButton />}
      />
      <Divider />
      <Box display="flex">
        <div className={classes.item}>
          <Typography
            align="center"
            variant="h3"
            color="textPrimary"
          >
            15,245
          </Typography>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Registered
          </Typography>
        </div>
        <Divider />
        <div className={classes.item}>
          <Typography
            align="center"
            variant="h3"
            color="textPrimary"
          >
            357
          </Typography>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Online
          </Typography>
        </div>
      </Box>
      <Divider />
      <List disablePadding>
        {activities.map((activity, i) => (
          <ListItem
            divider={i < activities.length - 1}
            key={activity.id}
          >
            <ListItemAvatar>
              <Avatar
                alt="Customer"
                component={RouterLink}
                src={activity.customer.avatar}
                to="#"
              >
                {getInitials(activity.customer.name)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              disableTypography
              primary={(
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="#"
                  underline="none"
                  variant="h6"
                >
                  {activity.customer.name}
                </Link>
              )}
              secondary={(
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  {activity.description}
                </Typography>
              )}
            />
            <Typography
              color="textSecondary"
              noWrap
              variant="caption"
            >
              {moment(activity.createdAt).fromNow()}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

CustomerActivity.propTypes = {
  className: PropTypes.string
};

export default CustomerActivity;
