import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import {
  Button,
  Breadcrumbs,
  Box,
  Link,
  Dialog,
  Grid,
  Typography,
  makeStyles,
  Hidden
} from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import InvoicePDF from './InvoicePDF';

const useStyles = makeStyles((theme) => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  }
}));

function Header({ invoice, className, ...rest }) {
  const classes = useStyles();
  const [viewPDF, setViewPDF] = useState(false);

  return (
    <Grid
      container
      justify="space-between"
      spacing={3}
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            to="/app"
            component={RouterLink}
          >
            Dashboard
          </Link>
          <Link
            variant="body1"
            color="inherit"
            to="/app/management"
            component={RouterLink}
          >
            Management
          </Link>
          <Typography
            variant="body1"
            color="textPrimary"
          >
            Invoices
          </Typography>
        </Breadcrumbs>
        <Typography
          variant="h3"
          color="textPrimary"
        >
          Invoice Details
        </Typography>
      </Grid>
      <Grid item>
        <Hidden smDown>
          <Button
            className={classes.action}
            onClick={() => setViewPDF(true)}
          >
            Preview PDF
          </Button>
        </Hidden>
        <PDFDownloadLink
          document={<InvoicePDF invoice={invoice} />}
          fileName="invoice"
          style={{ textDecoration: 'none' }}
        >
          <Button
            color="secondary"
            variant="contained"
            className={classes.action}
          >
            Download PDF
          </Button>
        </PDFDownloadLink>
        <Dialog fullScreen open={viewPDF}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
          >
            <Box
              bgcolor="common.white"
              p={2}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setViewPDF(false)}
              >
                <NavigateBeforeIcon />
                Back
              </Button>
            </Box>
            <Box flexGrow={1}>
              <PDFViewer
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              >
                <InvoicePDF invoice={invoice} />
              </PDFViewer>
            </Box>
          </Box>
        </Dialog>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  invoice: PropTypes.object.isRequired
};

export default Header;
