import React from 'react';
import AWS from 'aws-sdk';
import {
  renderToBuffer,
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from '../../src/aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

const REGION = process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET_REGION || 'us-east-1';
const BUCKET =
  process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET ||
  awsExports.aws_user_files_s3_bucket;

const hasExplicitCreds =
  process.env.AWSACCESSKEYID && process.env.AWSSECRETACCESSKEY;

const s3 = new AWS.S3({
  region: REGION,
  ...(hasExplicitCreds && {
    credentials: {
      accessKeyId: process.env.AWSACCESSKEYID,
      secretAccessKey: process.env.AWSSECRETACCESSKEY,
    },
  }),
});

const styles = StyleSheet.create({
  page: {
    padding: 28,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#1f2937',
  },
  card: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    padding: 14,
  },
  logo: {
    width: 92,
    height: 28,
    objectFit: 'contain',
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    marginBottom: 2,
    fontFamily: 'Helvetica-Bold',
  },
  subtitle: {
    fontSize: 9,
    color: '#555555',
  },
  invoiceNo: {
    fontSize: 9,
    color: '#6b7280',
    fontFamily: 'Helvetica-Bold',
  },
  body: {
    padding: 14,
  },
  sectionTitle: {
    fontSize: 11,
    marginBottom: 6,
    fontFamily: 'Helvetica-Bold',
  },
  twoCol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
  },
  colLeft: {
    width: '36%',
  },
  colRight: {
    width: '64%',
  },
  detailLine: {
    marginBottom: 3,
    fontSize: 10,
    lineHeight: 1.35,
  },
  label: {
    fontFamily: 'Helvetica-Bold',
  },
  table: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 6,
    overflow: 'hidden',
    marginTop: 2,
  },
  tableHead: {
    flexDirection: 'row',
    backgroundColor: '#f9fafb',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  tableHeadText: {
    fontSize: 9,
    color: '#6b7280',
    fontFamily: 'Helvetica-Bold',
  },
  rowDesc: { width: '66%' },
  rowQty: { width: '10%', textAlign: 'right' },
  rowAmt: { width: '24%', textAlign: 'right' },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    fontSize: 10,
  },
  sectionRow: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: '#f9fafb',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    fontSize: 9,
    color: '#6b7280',
    fontFamily: 'Helvetica-Bold',
  },
  totals: {
    backgroundColor: '#f9fafb',
    paddingHorizontal: 8,
    paddingVertical: 8,
    gap: 3,
  },
  totalsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 10,
  },
  totalDue: {
    marginTop: 4,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    fontFamily: 'Helvetica-Bold',
  },
});

const InvoiceDocument = ({
  registrant,
  invoiceId,
  lineItems = [],
  subtotal = 0,
  discountAmount = 0,
  totalDue = 0,
  discountCode,
  paymentConfirmation,
}) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View>
            <Image
              style={styles.logo}
              src='https://apsmedia.s3.amazonaws.com/images/AutoPackSummit-RGB-digital_color_stacked.png'
            />
            <Text style={styles.title}>Registration invoice</Text>
            <Text style={styles.subtitle}>
              Automotive Packaging Summit 2026 · Sept 30 - Oct 2, 2026
            </Text>
          </View>
          <Text style={styles.invoiceNo}>#{invoiceId}</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.twoCol}>
            <View style={styles.colLeft}>
              <Text style={styles.sectionTitle}>Registrant</Text>
              <Text style={styles.detailLine}>
                {registrant.firstName} {registrant.lastName}
              </Text>
              <Text style={styles.detailLine}>{registrant.email}</Text>
              <Text style={styles.detailLine}>{registrant.companyName || ''}</Text>
              <Text style={styles.detailLine}>{registrant.jobTitle || ''}</Text>
              <Text style={styles.detailLine}>{registrant.phone || ''}</Text>
              <Text style={styles.detailLine}>
                <Text style={styles.label}>Type: </Text>
                {registrant.attendeeType}
              </Text>

              {registrant.billingAddressFirstName ||
              registrant.billingAddressLastName ||
              registrant.billingAddressEmail ? (
                <>
                  <Text style={[styles.sectionTitle, { marginTop: 10 }]}>
                    Billing
                  </Text>
                  <Text style={styles.detailLine}>
                    {registrant.billingAddressFirstName}{' '}
                    {registrant.billingAddressLastName}
                  </Text>
                  <Text style={styles.detailLine}>
                    {registrant.billingAddressEmail}
                  </Text>
                  <Text style={styles.detailLine}>
                    {registrant.billingAddressPhone}
                  </Text>
                  <Text style={styles.detailLine}>
                    {registrant.billingAddressCompanyName || registrant.companyName}
                  </Text>
                  <Text style={styles.detailLine}>
                    {registrant.billingAddressStreet}
                  </Text>
                  <Text style={styles.detailLine}>
                    {registrant.billingAddressCity},{' '}
                    {registrant.billingAddressState}{' '}
                    {registrant.billingAddressZip}
                  </Text>
                </>
              ) : null}

              {paymentConfirmation ? (
                <Text style={[styles.detailLine, { marginTop: 8, fontSize: 9 }]}>
                  <Text style={styles.label}>Payment confirmation: </Text>
                  {paymentConfirmation}
                </Text>
              ) : null}
            </View>

            <View style={styles.colRight}>
              <Text style={styles.sectionTitle}>Itemized charges</Text>
              <View style={styles.table}>
                <View style={styles.tableHead}>
                  <Text style={[styles.tableHeadText, styles.rowDesc]}>
                    Description
                  </Text>
                  <Text style={[styles.tableHeadText, styles.rowQty]}>Qty</Text>
                  <Text style={[styles.tableHeadText, styles.rowAmt]}>Amount</Text>
                </View>

                {lineItems.map((item, idx) =>
                  item.type === 'section' ? (
                    <Text key={`s-${idx}`} style={styles.sectionRow}>
                      {item.description}
                    </Text>
                  ) : (
                    <View key={`r-${idx}`} style={styles.tableRow}>
                      <Text style={styles.rowDesc}>{item.description}</Text>
                      <Text style={styles.rowQty}>{item.quantity || ''}</Text>
                      <Text style={styles.rowAmt}>
                        ${(Number(item.amount || 0)).toLocaleString()}
                      </Text>
                    </View>
                  ),
                )}

                <View style={styles.totals}>
                  <View style={styles.totalsRow}>
                    <Text>Subtotal</Text>
                    <Text>${Number(subtotal || 0).toLocaleString()}</Text>
                  </View>
                  {discountCode ? (
                    <View style={styles.totalsRow}>
                      <Text>Discount ({discountCode})</Text>
                      <Text>- ${Number(discountAmount || 0).toLocaleString()}</Text>
                    </View>
                  ) : null}
                  <View style={[styles.totalsRow, styles.totalDue]}>
                    <Text>Total due</Text>
                    <Text>${Number(totalDue || 0).toLocaleString()}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      registrantId,
      registrant,
      invoiceId,
      lineItems,
      subtotal,
      discountAmount,
      totalDue,
      discountCode,
      paymentConfirmation,
    } = req.body || {};

    if (!registrantId || !registrant) {
      return res.status(400).json({ error: 'Missing registrant data' });
    }

    const doc = (
      <InvoiceDocument
        registrant={registrant}
        invoiceId={invoiceId || registrantId}
        lineItems={lineItems}
        subtotal={subtotal}
        discountAmount={discountAmount}
        totalDue={totalDue}
        discountCode={discountCode}
        paymentConfirmation={paymentConfirmation}
      />
    );

    const buffer = await renderToBuffer(doc);

    const key = `public/invoices/${registrantId}.pdf`;

    await s3
      .putObject({
        Bucket: BUCKET,
        Key: key,
        Body: buffer,
        ContentType: 'application/pdf',
        ContentDisposition: `attachment; filename="aps-invoice-${registrantId}.pdf"`,
      })
      .promise();

    const publicUrl = `https://${BUCKET}.s3.${REGION}.amazonaws.com/${key}`;

    // Use a minimal mutation selection set to avoid auth errors on unrelated
    // nested fields (e.g. notes) that codegen includes by default.
    const UPDATE_APS_REGISTRANT_INVOICE = /* GraphQL */ `
      mutation UpdateApsRegistrantInvoice(
        $input: UpdateApsRegistrantInput!
        $condition: ModelApsRegistrantConditionInput
      ) {
        updateApsRegistrant(input: $input, condition: $condition) {
          id
          invoice
          updatedAt
        }
      }
    `;

    await API.graphql(
      graphqlOperation(UPDATE_APS_REGISTRANT_INVOICE, {
        input: {
          id: registrantId,
          invoice: publicUrl,
        },
      }),
    );

    console.log('Invoice generated and saved:', { registrantId, publicUrl });
    return res.status(200).json({ url: publicUrl });
  } catch (error) {
    console.error('Error generating invoice:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to generate invoice',
    });
  }
}

