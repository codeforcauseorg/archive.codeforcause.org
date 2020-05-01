import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  makeStyles
} from '@material-ui/core';
import MaiIcon from '@material-ui/icons/MailOutline';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles((theme) => ({
  root: {},
  actionIcon: {
    marginRight: theme.spacing(1)
  },
  cell: {
    padding: theme.spacing(1)
  }
}));

const emailOptions = [
  'Resend last invoice',
  'Send password reset',
  'Send verification'
];

function Emails({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [emailOption, setEmailOption] = useState(emailOptions[0]);
  const [emails, setEmails] = useState(null);

  const getMails = useCallback(() => {
    axios
      .get('/api/management/customers/1/emails')
      .then((response) => {
        if (isMountedRef.current) {
          setEmails(response.data.emails);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getMails();
  }, [getMails]);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Send emails" />
      <Divider />
      <CardContent>
        <TextField
          fullWidth
          name="option"
          onChange={(event) => setEmailOption(event.target.value)}
          select
          SelectProps={{ native: true }}
          value={emailOption}
          variant="outlined"
        >
          {emailOptions.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </TextField>
        <Box mt={2}>
          <Button
            variant="contained"
          >
            <MaiIcon className={classes.actionIcon} />
            Send email
          </Button>
        </Box>
        {emails && (
          <Box mt={2}>
            <Table>
              <TableBody>
                {emails.map((email) => (
                  <TableRow key={email.id}>
                    <TableCell className={classes.cell}>
                      {moment(email.createdAt).format('DD/MM/YYYY | HH:MM')}
                    </TableCell>
                    <TableCell className={classes.cell}>
                      {email.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

Emails.propTypes = {
  className: PropTypes.string,
  emails: PropTypes.array
};

export default Emails;
