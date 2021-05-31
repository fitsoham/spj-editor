import Layout from '@components/Common/Layout';
import SearchBox from '@components/Search/SearchBox';
import Head from 'next/head';
import React from 'react';

export const search = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Search | Spacejoy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout.Banner />
    <Layout.Header />
    <Layout.Body>
      <SearchBox />
    </Layout.Body>
  </Layout>
);

export default search;
