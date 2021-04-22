import { Hero1 } from '@components/Home';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/common/Layout';

export const Home = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout.Banner />
    <Layout.Header />
    <Layout.Body>
      <Hero1 />
      {/* <Hero2 /> */}
    </Layout.Body>
    <Layout.Footer />
  </Layout>
);

export default Home;
