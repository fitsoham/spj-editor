import CollageList from '@components/Collages/CollageList';
import CollageListFilter from '@components/Collages/CollageListFilter';
import { CollagesStaticPropsInterface } from '@components/Collages/interface';
import TopCollagesList from '@components/Collages/TopCollagesList';
import { colorList } from '@components/Playground/BgSelector';
import Layout from '@components/Shared/Layout';
import { internalPages } from '@utils/config';
import { publicRoutes } from '@utils/constants/api';
import fetcher from '@utils/fetcher';
import topCollages from '@utils/Mocks/topCollages';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';

const CollageListView = ({ feedData }): JSX.Element => {
  const [bg, setBg] = useState(colorList[0].colorHex);
  return (
    <Layout>
      <Head>
        <title>See all design sets | Spacejoy</title>
      </Head>
      <Layout.Header />
      <Layout.Body>
        <TopCollagesList feedData={topCollages} />
        <CollageListFilter count={feedData.count} bg={bg} setBg={setBg} />
        <CollageList feedData={feedData} bg={bg} />
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
