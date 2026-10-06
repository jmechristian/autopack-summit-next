/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'apsmedia.s3.amazonaws.com',
      'packschool.s3.amazonaws.com',
      'packschool.s3.us-east-1.amazonaws.com',
      'autopacksummitapp94b14feadba64f23aff0ed8deae77b99bc6-dev.s3.us-east-1.amazonaws.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/register',
        destination: '/',
        permanent: false,
      },
      {
        source: '/oem-registration',
        destination: '/',
        permanent: false,
      },
      {
        source: '/tickets',
        destination: '/',
        permanent: false,
      },
      {
        source: '/waitlist',
        destination: '/',
        permanent: false,
      },
      {
        source: '/registerprovider',
        destination: '/',
        permanent: false,
      },
      {
        source: '/sponsor-register',
        destination: '/',
        permanent: false,
      },
      {
        source: '/add-ons',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
