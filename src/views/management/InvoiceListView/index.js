import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

function InvoiceListView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [invoices, setInvoices] = useState(null);

  const getInvoices = useCallback(() => {
    axios
      .get('/api/management/invoices')
      .then((response) => {
        if (isMountedRef.current) {
          setInvoices(response.data.invoices);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  if (!invoices) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Invoice List"
    >
      <Container maxWidth={false}>
        <Header />
        {invoices && (
          <Box mt={3}>
            <Results invoices={invoices} />
          </Box>
        )}
      </Container>
    </Page>
  );
}

export default InvoiceListView;
