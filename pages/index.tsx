import { Advantage, ChooseUs, Featured, Hero1, Output, Team, Testimonials, VisualAnimation } from '@components/Home';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import Head from 'next/head';
import React from 'react';

export const Home = (): JSX.Element => (
  <Layout>
    <Head>
      <title>#1 Automated Interior Design Solution by Spacejoy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout.Banner />
    <Layout.Header />
    <Layout.Body>
      <Hero1 />
      <Featured />
      <VisualAnimation />
      <ChooseUs />
      <Team />
      <Testimonials />
      <Advantage />
      <Output />
      <PreFooter />
    </Layout.Body>
    <Layout.Footer />
  </Layout>
);

export default Home;
