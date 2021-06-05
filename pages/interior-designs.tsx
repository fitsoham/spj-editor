import CollectionList from '@components/InteriorDesigns/CollectionList';
import DesignList from '@components/InteriorDesigns/DesignList';
import ListFilter from '@components/InteriorDesigns/ListFilter';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import Head from 'next/head';
import React from 'react';

export const InteriorDesigns = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Interior-Designs | Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <CollectionList count={6} />
        <ListFilter />
        <DesignList />
        <PreFooter />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default InteriorDesigns;
