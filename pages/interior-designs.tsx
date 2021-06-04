import InteriorDesignsList from '@components/Shared/InteriorDesigns/InteriorDesignsList';
import ListFilter from '@components/Shared/InteriorDesigns/ListFilter';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import Head from 'next/head';
import React from 'react';

export const InteriorDesigns = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Interior-Designs | Spacejoy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout.Banner />
    <Layout.Header />
    <Layout.Body>
      <InteriorDesignsList />
      <ListFilter />
      <PreFooter />
    </Layout.Body>
    <Layout.Footer />
  </Layout>
);

export default InteriorDesigns;
