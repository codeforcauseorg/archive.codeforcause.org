import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core';
import GenericMoreButton from 'src/components/GenericMoreButton';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  avatar: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white
  }
}));

function TopReferrals({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [referrals, setReferrals] = useState(null);

  const getReferrals = useCallback(() => {
    axios
      .get('/api/reports/top-referrals')
      .then((response) => {
        if (isMountedRef.current) {
          setReferrals(response.data.referrals);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getReferrals();
  }, [getReferrals]);

  if (!referrals) {
    return null;
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Top Referrals"
      />
      <Divider />
      <List disablePadding>
        {referrals.map((referral, i) => (
          <ListItem
            divider={i < referrals.length - 1}
            key={referral.name}
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                size="small"
                style={{ backgroundColor: referral.color }}
              >
                {referral.initials}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={referral.name}
              primaryTypographyProps={{ variant: 'h6' }}
            />
            <Typography
              variant="body2"
              color="textSecondary"
            >
              {referral.value}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

TopReferrals.propTypes = {
  className: PropTypes.string
};

export default TopReferrals;
