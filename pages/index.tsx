import { ChooseUs, Featured, Hero1, VisualAnimation } from '@components/Home';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/common/Layout';

export const Home = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Spacejoy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout.Banner />
    <Layout.Header />
    <Layout.Body>
      <Hero1 />
      <Featured />
      <VisualAnimation />
      <ChooseUs />
    </Layout.Body>
    <Layout.Footer />
  </Layout>
);

export default Home;
