import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import _ from 'lodash';
import { useSnackbar } from 'notistack';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Input,
  Link,
  Paper,
  Typography,
  makeStyles,
  SvgIcon
} from '@material-ui/core';
import {
  Search as SearchIcon,
  MoreVertical as MoreIcon
} from 'react-feather';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const connectStatusMap = {
  not_connected: 'Connect',
  pending: 'Pending',
  connected: 'Connected'
};

const useStyles = makeStyles((theme) => ({
  root: {},
  searchInput: {
    marginLeft: theme.spacing(2)
  },
  avatar: {
    height: 60,
    width: 60
  }
}));

function Connections({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const [connections, setConnections] = useState(null);
  const [search, setSearch] = useState('');

  const handleConnectToggle = (id) => {
    setConnections((prevConnections) => {
      const newConnections = _.map(prevConnections, _.clone);

      return newConnections.map((connection) => {
        if (connection.id === id) {
          const newConnection = { ...connection };

          newConnection.status = connection.status === 'connected' || connection.status === 'pending'
            ? 'not_connected'
            : 'pending';

          if (newConnection.status === 'pending') {
            enqueueSnackbar('Connection request sent', {
              variant: 'success'
            });
          }

          return newConnection;
        }

        return connection;
      });
    });
  };

  const getConnections = useCallback(() => {
    axios
      .get('/api/social/users/1/connections')
      .then((response) => {
        if (isMountedRef.current) {
          setConnections(response.data.connections);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getConnections();
  }, [getConnections]);

  if (!connections) {
    return null;
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Connections" />
      <Divider />
      <Box
        py={2}
        px={3}
        display="flex"
        alignItems="center"
      >
        <SvgIcon
          fontSize="small"
          color="action"
        >
          <SearchIcon />
        </SvgIcon>
        <Input
          className={classes.searchInput}
          disableUnderline
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search connections"
        />
      </Box>
      <Divider />
      <Box p={3}>
        <Grid
          container
          spacing={3}
        >
          {connections
            .filter((connection) => connection.name.toLowerCase().includes(search))
            .map((connection) => (
              <Grid
                item
                key={connection.id}
                xs={12}
                md={6}
              >
                <Paper variant="outlined">
                  <Box
                    p={2}
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar
                      alt="Profile image"
                      className={classes.avatar}
                      component={RouterLink}
                      src={connection.avatar}
                      to="#"
                    />
                    <Box
                      flexGrow={1}
                      mx={2}
                    >
                      <Link
                        variant="h5"
                        color="textPrimary"
                        component={RouterLink}
                        to="#"
                      >
                        {connection.name}
                      </Link>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        gutterBottom
                      >
                        {connection.common}
                        {' '}
                        connections in common
                      </Typography>
                      {connection.status !== 'rejected' && (
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handleConnectToggle(connection.id)}
                        >
                          {connectStatusMap[connection.status]}
                        </Button>
                      )}
                    </Box>
                    <IconButton>
                      <SvgIcon fontSize="small">
                        <MoreIcon />
                      </SvgIcon>
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Card>
  );
}

Connections.propTypes = {
  className: PropTypes.string
};

export default Connections;
