import { Advantage, ChooseUs, Hero1, Testimonials } from '@components/Home';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import SEOWrapper from '@components/Shared/SEO/SEOWrapper';
import { HomePageSEO } from '@utils/SEO'; // can also have jsonLD config
import dynamic from 'next/dynamic';
import React from 'react';

const DynamicProcessWithNoSSR = dynamic(() => import('@components/Home/Process'), { ssr: true });
const DynamicTeamWithNoSSR = dynamic(() => import('@components/Home/Team'), { ssr: true });
const DynamicFeaturedWithNoSSR = dynamic(() => import('@components/Home/Featured'), { ssr: true });
const DynamicOutputWithNoSSR = dynamic(() => import('@components/Home/Output'), { ssr: true });

export const Home = (): JSX.Element => (
  <>
    <SEOWrapper seoProps={HomePageSEO.HomeSEO} />
    <Layout>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <Hero1 />
        <DynamicProcessWithNoSSR />
        <ChooseUs />
        <DynamicTeamWithNoSSR />
        <Testimonials />
        <Advantage />
        <DynamicOutputWithNoSSR />
        <DynamicFeaturedWithNoSSR />
        <PreFooter />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  </>
);

export default React.memo(Home);
