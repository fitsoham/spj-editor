import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export const Home = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout.Header />
    <Layout.Body>
      <Title>My page</Title>
      <Image src="/vercel.svg" alt="Vercel Logo" height={'32'} width={'64'} />
    </Layout.Body>
    <Layout.Footer>Footer</Layout.Footer>
  </Layout>
);

export default Home;
