import CollectionList from '@components/Collection/CollectionList';
import Layout from '@components/Shared/Layout';
import React from 'react';

const collection: React.FC = () => {
  return (
    <Layout>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <CollectionList />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default React.memo(collection);
