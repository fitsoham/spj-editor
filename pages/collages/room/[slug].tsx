import CollageList from '@components/Collages/CollageList';
import CollageListComingSoon from '@components/Collages/CollageListComingSoon';
import CollageListFilter from '@components/Collages/CollageListFilter';
import { CollagesListInterface } from '@components/Collages/interface';
import { colorList } from '@components/Playground/BgSelector';
import Layout from '@components/Shared/Layout';
import { internalPages } from '@utils/config';
import { publicRoutes } from '@utils/constants/api';
import fetcher from '@utils/fetcher';
import { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';

interface CollageViewProps {
  feedData?: {
    list: CollagesListInterface[];
    count: number;
  };
  slug: string;
  error?: string;
}

const CollageView: NextPage<CollageViewProps> = ({ slug, feedData }): JSX.Element => {
  const name = useMemo(() => {
    return slug.split('-').join(' ');
  }, [slug]);
  const [bg, setBg] = useState(colorList[0].colorHex);

  return (
    <Layout>
      <Head>
        <title>{name} | Spacejoy</title>
      </Head>
      <Layout.Header />
      <Layout.Body>
        <CollageListFilter title={name} count={feedData?.count} bg={bg} setBg={setBg} />
        {feedData?.list ? (
          <CollageList bg={bg} feedData={feedData} />
        ) : (
          <CollageListComingSoon type={name.toLowerCase()} />
        )}
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export async function getServerSideProps(
  ctx: GetServerSidePropsContext<{ slug: string }>
): Promise<GetServerSidePropsResult<CollageViewProps>> {
  const { params, query } = ctx;
  const { slug } = params;
  const { page = 1 } = query;

  if (slug === 'living-room-design-sets') {
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
            slug: slug,
          },
        };
      } else {
        throw new Error(statusCode);
      }
    } catch (e) {
      return {
        props: {
          error: e.message || 'Something went wrong',
          slug: slug,
        },
      };
    }
  }

  return {
    props: { slug: slug },
  };
}
export default CollageView;
