import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  colors,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Label from 'src/components/Label';

const useStyles = makeStyles(() => ({
  root: {},
  methodCell: {
    width: 100
  },
  statusCell: {
    width: 64
  }
}));

function Logs({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [logs, setLogs] = useState(null);

  const getLogs = useCallback(() => {
    axios
      .get('/api/management/customers/1/logs')
      .then((response) => {
        if (isMountedRef.current) {
          setLogs(response.data.logs);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getLogs();
  }, [getLogs]);

  if (!logs) {
    return null;
  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader title="Customer logs" />
        <Divider />
        <PerfectScrollbar>
          <Box minWidth={1150}>
            <Table>
              <TableBody>
                {logs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className={classes.methodCell}>
                      <Typography
                        variant="h6"
                        color="textPrimary"
                      >
                        {log.method}
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.statusCell}>
                      <Label
                        color={
                          log.status === 200
                            ? colors.green[600]
                            : colors.red[600]
                        }
                      >
                        {log.status}
                      </Label>
                    </TableCell>
                    <TableCell>{log.route}</TableCell>
                    <TableCell>{log.desc}</TableCell>
                    <TableCell align="right">{log.IP}</TableCell>
                    <TableCell align="right">
                      {moment(log.createdAt).format('YYYY/MM/DD | hh:mm:ss')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Card>
    </div>
  );
}

Logs.propTypes = {
  className: PropTypes.string
};

export default Logs;
