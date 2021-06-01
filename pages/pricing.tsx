import { Output } from '@components/Home';
import MindBlowing from '@components/Pricing/MindBlowing';
import Packages from '@components/Pricing/Packages';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import Head from 'next/head';
import React from 'react';
import PackagesAdvantages from '../components/Pricing/PackagesAdvantages';

export const pricing = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Pricing | Spacejoy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout.Banner />
    <Layout.Header />
    <Layout.Body>
      <MindBlowing />
      <Packages />
      <PackagesAdvantages />
      <Output />
      <PreFooter />
    </Layout.Body>
    <Layout.Footer />
  </Layout>
);

export default pricing;
