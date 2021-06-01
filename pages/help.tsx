import Layout from '@components/Common/Layout';
import PreFooter from '@components/Common/PreFooter';
import Design from '@components/Help/Design';
import Ecommerce from '@components/Help/Ecommerce';
import Head from 'next/head';
import React from 'react';

export const search = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Help | Spacejoy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout.Banner />
    <Layout.Header />
    <Layout.Body>
      <Design />
      <Ecommerce />
      <PreFooter />
    </Layout.Body>
    <Layout.Footer />
  </Layout>
);

export default search;
