import Layout from '@components/common/Layout';
import PreFooter from '@components/common/PreFooter';
import MindBlowing from '@components/Pricing/MindBlowing';
import Packages from '@components/Pricing/Packages';
import Head from 'next/head';
import React from 'react';
import PackagesAdvantages from '../components/Pricing/PackagesAdvantages';

export const Pricing = (): JSX.Element => (
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
      <PreFooter />
    </Layout.Body>
    {/* <Layout.Footer /> */}
  </Layout>
);

export default Pricing;
