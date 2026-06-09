import '../styles/globals.css';
import Layout from '../features/layout/Layout';
import { Amplify } from 'aws-amplify';
import { Provider } from 'react-redux';
import { store } from '../features/store';
import { DefaultSeo } from 'next-seo';
import { CookiesProvider } from 'react-cookie';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title='Automotive Packaging Summit'
        description='The premier open forum for OEMs, Tier 1 Part Suppliers and Packaging Solution Providers to discuss packaging innovations and challenges.'
        openGraph={{
          type: 'website',
          url: 'https://autopacksummit.com',
          description:
            'The premier open forum for OEMs, Tier 1 Part Suppliers and Packaging Solution Providers to discuss packaging innovations and challenges.',
          images: [
            {
              url: 'https://apsmedia.s3.amazonaws.com/images/og_image.png',
              width: 800,
              height: 600,
              alt: 'Automotive Packaging Summit',
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <CookiesProvider>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </CookiesProvider>
    </>
  );
}

export default MyApp;
