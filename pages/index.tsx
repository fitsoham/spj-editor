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
    <Layout.Body>{/* <Image src="/vercel.svg" alt="Vercel Logo" height={'32'} width={'64'} /> */}</Layout.Body>
    <Layout.Footer>Footer</Layout.Footer>
  </Layout>
);

export default Home;
