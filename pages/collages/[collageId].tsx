import CollageAssetListView from '@components/Collages/CollageSingleView/CollageAssetListView';
import CollageImageViewGrid from '@components/Collages/CollageSingleView/CollageImageViewGrid';
import CollageTitle from '@components/Collages/CollageSingleView/CollageTitle';
import { CollagesListInterface } from '@components/Collages/interface';
import Layout from '@components/Shared/Layout';
import fetcher from '@utils/fetcher';
import { onlyUnique } from '@utils/helpers';
import { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { AssetType } from '../../components/Collages/AssetType';

interface CollageViewProps {
  assets: Record<string, AssetType>;
  collageData: CollagesListInterface;
}

const CollageView: NextPage<CollageViewProps> = ({ assets, collageData }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Interior-Designs | Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header />
      <Layout.Body>
        <div className="container px-4 mx-auto mb-16">
          <CollageTitle collageData={collageData} />
          <div className="grid grid-cols-12 w-full container sticky top-4 my-4">
            <div className="col-span-7  ">
              <CollageImageViewGrid src={collageData?.thumbnail} id={collageData?._id} />
            </div>
            <div className="col-span-5 px-4">
              <CollageAssetListView assets={assets} />
            </div>
          </div>
        </div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export async function getServerSideProps(
  ctx: GetServerSidePropsContext<{ collageId: string }>
): Promise<GetServerSidePropsResult<CollageViewProps>> {
  const { params } = ctx;
  const { collageId } = params;

  const res = await fetcher({
    endPoint: `/v1/collages/${collageId}`,
    method: 'GET',
  });
  const productIds = res.data?.meta?.view?.map((asset) => asset.product);
  console.log(`productIds`, productIds);
  const uniqueProductIds = (productIds || []).filter(onlyUnique);

  const response = await fetcher({
    endPoint: '/v1/assets/getAssetsDetail',
    body: { assets: [...uniqueProductIds], fields: ['price', 'dimension', 'retailer', 'meta', 'name', 'cdn'] },
    method: 'POST',
  });

  return {
    props: { assets: response.data || [], collageData: res.data },
  };
}
export default CollageView;
