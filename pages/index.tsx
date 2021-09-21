import CollageList from '@components/Collages/CollageList';
import CollageListFilter from '@components/Collages/CollageListFilter';
import { CollagesStaticPropsInterface } from '@components/Collages/interface';
import TopCollagesList from '@components/Collages/TopCollagesList';
import Layout from '@components/Shared/Layout';
import { internalPages } from '@utils/config';
import { publicRoutes } from '@utils/constants/api';
import fetcher from '@utils/fetcher';
import topCollages from '@utils/Mocks/topCollages';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

const CollageListView = ({ feedData }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Interior-Designs | Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header />
      <Layout.Body>
        <TopCollagesList feedData={topCollages} />
        <CollageListFilter count={feedData.count} />
        <CollageList feedData={feedData} />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<CollagesStaticPropsInterface, { page: string }> = async ({
  query,
}) => {
  const { page = 1 } = query;
  try {
    const additionalParams = `?limit=${internalPages.Collages.DEFAULT_PAGE_SIZE}&skip=${
      (parseInt(page as string) - 1) * internalPages.Collages.DEFAULT_PAGE_SIZE
    }`;
    console.log(`additionalParams`, additionalParams);
    const designRes = await fetcher({
      endPoint: `${publicRoutes.collageBase}${additionalParams}`,
      method: 'GET',
    });
    const { data: { data: collageList = [], count = 0 } = {}, statusCode } = designRes;
    if (statusCode <= 301) {
      return {
        props: {
          feedData: { list: collageList, count: parseInt(count) },
        },
      };
    } else {
      throw new Error(statusCode);
    }
  } catch (e) {
    return {
      props: {
        error: e.message || 'Something went wrong',
      },
    };
  }
};

export default React.memo(CollageListView);
