import { Advantage, ChooseUs, Featured, Hero1, Output, Team, Testimonials } from '@components/Home';
import Process from '@components/Home/Process';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import SEOWrapper from '@components/Shared/SEO/SEOWrapper';
import { HomePageSEO } from '@utils/SEO'; // can also have jsonLD config
import React from 'react';

export const Home = (): JSX.Element => (
  <>
    <SEOWrapper seoProps={HomePageSEO.HomeSEO} />
    <Layout>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <Hero1 />
        <Process />
        <ChooseUs />
        <Team />
        <Testimonials />
        <Advantage />
        <Output />
        <Featured />
        <PreFooter />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  </>
);

export default React.memo(Home);
