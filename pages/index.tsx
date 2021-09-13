import Layout from '@components/Shared/Layout';
import Head from 'next/head';
import React from 'react';

const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Home | Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <div className="container px-4 mx-auto h-80">j</div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Index;
