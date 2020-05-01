import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import GenericMoreButton from 'src/components/GenericMoreButton';
import CircularProgress from './CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    flexShrink: 0,
    height: 56,
    width: 56
  },
  subscriptions: {
    fontWeight: theme.typography.fontWeightMedium
  },
  value: {
    color: colors.green[600],
    fontWeight: theme.typography.fontWeightMedium
  },
  navigateNextIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function MostProfitableProducts({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [products, setProducts] = useState(null);

  const getProducts = useCallback(() => {
    axios
      .get('/api/reports/profitable-products')
      .then((response) => {
        if (isMountedRef.current) {
          setProducts(response.data.products);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (!products) {
    return null;
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Most Profitable Products"
      />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={700}>
          <Table>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  hover
                  key={product.id}
                >
                  <TableCell>
                    <Box
                      display="flex"
                      alignItems="center"
                    >
                      <img
                        alt="Product"
                        className={classes.image}
                        src={product.image}
                      />
                      <Box ml={2}>
                        <Typography
                          variant="h6"
                          color="textPrimary"
                        >
                          {product.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                        >
                          <span className={classes.subscriptions}>
                            {product.subscriptions}
                          </span>
                          {' '}
                          Active
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                    >
                      Price
                    </Typography>
                    <Typography
                      noWrap
                      variant="body2"
                      color="textSecondary"
                    >
                      <span className={classes.value}>
                        {product.currency}
                        {product.price}
                      </span>
                      {' '}
                      monthly
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      <Box mr={2}>
                        <Typography
                          align="right"
                          variant="h6"
                          color="textPrimary"
                        >
                          {product.progress}
                          %
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                        >
                          Conversion Rate
                        </Typography>
                      </Box>
                      <CircularProgress value={product.progress} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        p={2}
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          component={RouterLink}
          size="small"
          to="#"
        >
          See all
          <NavigateNextIcon className={classes.navigateNextIcon} />
        </Button>
      </Box>
    </Card>
  );
}

MostProfitableProducts.propTypes = {
  className: PropTypes.string
};

export default MostProfitableProducts;
