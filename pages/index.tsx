import Layout from '@components/common/Layout';
import PreFooter from '@components/common/PreFooter';
import { ChooseUs, Featured, Hero1, Output, VisualAnimation } from '@components/Home';
import Head from 'next/head';
import React from 'react';

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
      <Output />
      <PreFooter />
    </Layout.Body>
    <Layout.Footer />
  </Layout>
);

export default Home;
