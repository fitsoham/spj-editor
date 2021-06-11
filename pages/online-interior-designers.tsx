import InjectBanner from '@components/Career/InjectBanner';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import DesignTeam from '@components/Team/DesignTeam';
import Head from 'next/head';
import React from 'react';

export const search = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Team | Spacejoy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout.Banner />
    <Layout.Header />
    <Layout.Body>
      <DesignTeam />
      <InjectBanner />
      <PreFooter />
    </Layout.Body>
    <Layout.Footer />
  </Layout>
);

export default search;
