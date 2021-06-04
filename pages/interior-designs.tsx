import CollectionList from '@components/InteriorDesigns/CollectionList';
import DesignList from '@components/InteriorDesigns/DesignList';
import ListFilter from '@components/InteriorDesigns/ListFilter';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import Head from 'next/head';
import React from 'react';

export const InteriorDesigns = (): JSX.Element => {
  // console.log(`designList`, designList);
  return (
    <Layout>
      <Head>
        <title>Interior-Designs | Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <CollectionList />
        <ListFilter />
        <DesignList />
        <PreFooter />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

// export const getStaticProps = async () => {
//   const endPoint = 'https://api.spacejoy.com/api/designs/search/public?skip=0&limit=10&sort=-1';
//   const res = await fetch(endPoint, {
//     method: 'POST',
//     type: 'application/json',
//     body: JSON.stringify({ data: { data: {} } }),
//   });
//   const designList = await res.json();
//   return {
//     props: { designList },
//   };
// };

export default InteriorDesigns;
