/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet
} from '@react-pdf/renderer';

const COL1_WIDTH = 60;
const COLN_WIDTH = (100 - COL1_WIDTH) / 2;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    padding: 24
  },
  h1: {
    fontSize: 24,
    fontWeight: 500
  },
  h5: {
    fontSize: 12,
    fontWeight: 500
  },
  h6: {
    fontSize: 10,
    fontWeight: 500
  },
  body1: {
    fontSize: 9,
    lineHeight: 1.5
  },
  body2: {
    fontSize: 8,
    lineHeight: 1.5
  },
  mb1: {
    marginBottom: 4
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  brand: {
    height: 24,
    width: 24
  },
  company: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  references: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  billing: {
    marginTop: 32
  },
  items: {
    marginTop: 32
  },
  notes: {
    marginTop: 32
  },
  table: {
    display: 'table',
    width: 'auto'
  },
  tableHeader: {},
  tableBody: {},
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    borderStyle: 'solid'
  },
  tableCell1: {
    padding: 6,
    width: `${COL1_WIDTH}%`
  },
  tableCellN: {
    padding: 6,
    width: `${COLN_WIDTH}%`
  },
  alignRight: {
    textAlign: 'right'
  }
});

function InvoicePDF({ invoice }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Image
              source="/static/logo-short.jpg"
              style={styles.brand}
            />
            <Text style={styles.h5}>
              www.devias.io
            </Text>
          </View>
          <View>
            <Text style={styles.h1}>
              PAID
            </Text>
            <Text style={styles.h5}>
              Invoice #
              {invoice.id}
            </Text>
          </View>
        </View>
        <View style={styles.company}>
          <View>
            <Text style={styles.body1}>
              Street King William, 123
            </Text>
            <Text style={styles.body1}>
              Level 2, C, 442456
            </Text>
            <Text style={styles.body1}>
              San Francisco, CA, USA
            </Text>
          </View>
          <View>
            <Text style={styles.body1}>
              Company No. 4675933
            </Text>
            <Text style={styles.body1}>
              EU VAT No. 949 67545 45
            </Text>
          </View>
          <View>
            <Text style={styles.body1}>
              Email: accounts@devias.io
            </Text>
            <Text style={styles.body1}>
              Tel: (+40) 652 3456 23
            </Text>
          </View>
        </View>
        <View style={styles.references}>
          <View>
            <Text style={[styles.h5, styles.mb1]}>
              Due Date
            </Text>
            <Text style={styles.body1}>
              {moment(invoice.dueDate).format('DD MMM YYYY')}
            </Text>
          </View>
          <View>
            <Text style={[styles.h5, styles.mb1]}>
              Date of issue
            </Text>
            <Text style={styles.body1}>
              {moment(invoice.issueDate).format('DD MMM YYYY')}
            </Text>
          </View>
          <View>
            <Text style={[styles.h5, styles.mb1]}>
              Reference
            </Text>
            <Text style={styles.body1}>
              {invoice.ref}
            </Text>
          </View>
        </View>
        <View style={styles.billing}>
          <Text style={[styles.h5, styles.mb1]}>
            Billed to
          </Text>
          <Text style={styles.body1}>
            Tracey Herman
          </Text>
          <Text style={styles.body1}>
            Countdown Grey Lynn
          </Text>
          <Text style={styles.body1}>
            6934656584231
          </Text>
          <Text style={styles.body1}>
            271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand
          </Text>
        </View>
        <View style={styles.items}>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.h6}>
                    Description
                  </Text>
                </View>
                <View style={styles.tableCellN} />
                <View style={styles.tableCellN}>
                  <Text style={[styles.h6, styles.alignRight]}>
                    Price
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.tableBody}>
              {invoice.products.map((product, i) => (
                <View
                  style={styles.tableRow}
                  key={i}
                >
                  <View style={styles.tableCell1}>
                    <Text style={styles.body2}>
                      {product.desc}
                    </Text>
                  </View>
                  <View style={styles.tableCellN} />
                  <View style={styles.tableCellN}>
                    <Text style={[styles.body2, styles.alignRight]}>
                      {invoice.currency}
                      {product.value}
                    </Text>
                  </View>
                </View>
              ))}
              <View style={styles.tableRow}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={styles.body2}>
                    Subtotal
                  </Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>
                    {invoice.currency}
                    {invoice.subtotal}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={styles.body2}>
                    Taxes
                  </Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>
                    {invoice.currency}
                    {invoice.taxes}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={styles.body2}>
                    Total
                  </Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>
                    {invoice.currency}
                    {invoice.total}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.notes}>
          <Text style={[styles.h5, styles.mb1]}>
            Notes
          </Text>
          <Text style={styles.body1}>
            Please make sure you have the right bank registration number as I
            had issues before and make sure you guys cover transfer expenses.
          </Text>
        </View>
      </Page>
    </Document>
  );
}

InvoicePDF.propTypes = {
  invoice: PropTypes.object.isRequired
};

export default InvoicePDF;
