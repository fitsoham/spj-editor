import Layout from '@components/common/Layout';
import PreFooter from '@components/common/PreFooter';
import { Advantage, ChooseUs, Featured, Hero1, Output, VisualAnimation } from '@components/Home';
import Head from 'next/head';
import React from 'react';
import Testimonials from '../components/Home/Testimonials';

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
      <Testimonials />
      <Advantage />
      <Output />
      <PreFooter />
    </Layout.Body>
    {/* <Layout.Footer /> */}
  </Layout>
);

export default Home;
