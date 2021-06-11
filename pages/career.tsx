import InjectBanner from '@components/Career/InjectBanner';
import Layout from '@components/Shared/Layout';
import Head from 'next/head';
import React from 'react';

const career: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Career @Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <InjectBanner />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default career;
