import { Advantage, ChooseUs, Featured, Hero1, Output, Team, Testimonials, VisualAnimation } from '@components/Home';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import { HomePageSEO } from '@utils/seoConfig';
import { NextSeo } from 'next-seo';
import React from 'react';

export const Home = (): JSX.Element => (
  <>
    <NextSeo {...HomePageSEO} />
    <Layout>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <Hero1 />
        <Featured />
        <VisualAnimation />
        <ChooseUs />
        <Team />
        <Testimonials />
        <Advantage />
        <Output />
        <PreFooter />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  </>
);

export default React.memo(Home);
