import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Link,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  makeStyles
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';

const useStyles = makeStyles((theme) => ({
  root: {},
  actionIcon: {
    marginRight: theme.spacing(1)
  }
}));

const statusOptions = ['Canceled', 'Completed', 'Rejected'];

function OrderInfo({ order, className, ...rest }) {
  const classes = useStyles();
  const [status, setStatus] = useState(statusOptions[0]);

  const handleChange = (event) => {
    event.persist();
    setStatus(event.target.value);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Order info" />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>
              <Link
                component={RouterLink}
                to="/app/management/customers/1"
              >
                {order.customer.name}
              </Link>
              <div>{order.customer.address}</div>
              <div>{order.customer.city}</div>
              <div>{order.customer.country}</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              ID
            </TableCell>
            <TableCell>
              #
              {order.id.split('-').shift()}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ref</TableCell>
            <TableCell>{order.ref}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>
              {moment(order.createdAt).format('DD/MM/YYYY HH:MM')}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Promotion Code</TableCell>
            <TableCell>{order.promoCode ? order.promoCode : 'N/A'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell>
              {order.currency}
              {order.value}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>
              <TextField
                fullWidth
                name="option"
                onChange={handleChange}
                select
                SelectProps={{ native: true }}
                value={status}
                variant="outlined"
              >
                {statusOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </TextField>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <CardActions>
        <Button>
          <ReceiptIcon className={classes.actionIcon} />
          Resend invoice
        </Button>
      </CardActions>
    </Card>
  );
}

OrderInfo.propTypes = {
  className: PropTypes.string,
  order: PropTypes.object.isRequired
};

export default OrderInfo;
