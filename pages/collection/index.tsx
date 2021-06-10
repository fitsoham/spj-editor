import CollectionList from '@components/Collection/CollectionList';
import Layout from '@components/Shared/Layout';
import { internalPages } from '@utils/config';
import { publicRoutes } from '@utils/constants/api';
import fetcher from '@utils/fetcher';
import React from 'react';

interface CollectionFeedDataInterface {
  collectionFeedData: {
    list: [];
    count: number;
  };
}
const collection: React.FC<CollectionFeedDataInterface> = ({ collectionFeedData }) => {
  return (
    <Layout>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <CollectionList feedData={collectionFeedData} />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const additionalParamsCollections = `?limit=${internalPages.Collection.DEFAULT_PAGE_SIZE}`;
  const res = await fetcher({
    endPoint: `${publicRoutes.collectionFeed}${additionalParamsCollections}`,
    method: 'GET',
  });
  const {
    data: { list: mainList },
  } = res;

  return {
    props: {
      collectionFeedData: { list: mainList, count: 500 },
    },
    revalidate: 1, //TODO: Recheck the doc Data Fetching
  };
};

export default React.memo(collection);
