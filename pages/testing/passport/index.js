import React from 'react';
import Head from 'next/head';
import { API } from 'aws-amplify';
import { QRCodeSVG } from 'qrcode.react';

const listExhibitorPassportQRCodes = /* GraphQL */ `
  query ListExhibitorPassportQRCodes($limit: Int, $nextToken: String) {
    listApsAppExhibitorProfiles(limit: $limit, nextToken: $nextToken) {
      items {
        id
        boothNumber
        qrCode
        passportQrPayload
        company {
          id
          name
        }
      }
      nextToken
    }
  }
`;

const isImageUrl = (value) =>
  typeof value === 'string' && /^(https?:\/\/|data:image\/)/i.test(value);

const PassportTestingPage = ({ exhibitors }) => {
  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Exhibitor Passport QR Codes</title>
      </Head>

      <main className='max-w-7xl mx-auto px-5 py-10'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900'>
            Exhibitor Passport QR Codes
          </h1>
          <p className='mt-2 text-gray-600'>
            {exhibitors.length} exhibitor{exhibitors.length === 1 ? '' : 's'}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {exhibitors.map((exhibitor) => (
            <article
              key={exhibitor.id}
              className='rounded-xl border border-gray-200 bg-white p-6 shadow-sm'
            >
              <div className='mb-5'>
                <h2 className='text-xl font-semibold text-gray-900'>
                  {exhibitor.company?.name || 'Unnamed Company'}
                </h2>
                <p className='mt-1 text-sm font-medium uppercase tracking-wide text-gray-500'>
                  Booth {exhibitor.boothNumber || 'Not assigned'}
                </p>
              </div>

              <div className='flex min-h-[240px] items-center justify-center rounded-lg bg-gray-50 p-4'>
                {isImageUrl(exhibitor.qrCode) ? (
                  <img
                    src={exhibitor.qrCode}
                    alt={`${exhibitor.company?.name || 'Exhibitor'} QR code`}
                    className='h-56 w-56 object-contain'
                  />
                ) : exhibitor.qrCode || exhibitor.passportQrPayload ? (
                  <QRCodeSVG
                    value={exhibitor.qrCode || exhibitor.passportQrPayload}
                    size={224}
                    level='M'
                  />
                ) : (
                  <p className='text-sm text-gray-500'>No QR code</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const exhibitors = [];
  let nextToken = null;

  do {
    const res = await API.graphql({
      query: listExhibitorPassportQRCodes,
      variables: {
        limit: 100,
        nextToken,
      },
    });

    const page = res.data.listApsAppExhibitorProfiles;
    exhibitors.push(...page.items.filter(Boolean));
    nextToken = page.nextToken;
  } while (nextToken);

  exhibitors.sort((a, b) => {
    const boothA = a.boothNumber || '';
    const boothB = b.boothNumber || '';
    const companyA = a.company?.name || '';
    const companyB = b.company?.name || '';

    return boothA.localeCompare(boothB, undefined, {
      numeric: true,
      sensitivity: 'base',
    }) || companyA.localeCompare(companyB);
  });

  return {
    props: {
      exhibitors,
    },
  };
}

export default PassportTestingPage;
