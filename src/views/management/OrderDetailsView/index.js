import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Page from 'src/components/Page';
import Header from './Header';
import OrderInfo from './OrderInfo';
import OrderItems from './OrderItems';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function OrderDetailsView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [order, setOrder] = useState(null);

  const getOrder = useCallback(() => {
    axios
      .get('/api/management/orders/1')
      .then((response) => {
        if (isMountedRef.current) {
          setOrder(response.data.order);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getOrder();
  }, [getOrder]);

  if (!order) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Order Details"
    >
      <Container maxWidth={false}>
        <Header order={order} />
        <Box mt={2}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xl={3}
              xs={12}
            >
              <OrderInfo order={order} />
            </Grid>
            <Grid
              item
              md={8}
              xl={9}
              xs={12}
            >
              <OrderItems order={order} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
}

export default OrderDetailsView;
