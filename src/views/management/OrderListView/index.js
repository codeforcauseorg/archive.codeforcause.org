import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Page from 'src/components/Page';
import Header from './Header';
import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function OrderListView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [orders, setOrders] = useState(null);

  const getOrders = useCallback(() => {
    axios
      .get('/api/management/orders')
      .then((response) => {
        if (isMountedRef.current) {
          setOrders(response.data.orders);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  if (!orders) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Orders  List"
    >
      <Container maxWidth={false}>
        <Header />
        <Box mt={3}>
          <Results orders={orders} />
        </Box>
      </Container>
    </Page>
  );
}

export default OrderListView;
