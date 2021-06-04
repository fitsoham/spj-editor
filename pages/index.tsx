import { Advantage, ChooseUs, Featured, Hero1, Output, Team, Testimonials, VisualAnimation } from '@components/Home';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import React from 'react';
import SEOWrapper from '@components/Shared/SEO/SEOWrapper';
import {HomePageSEO} from '@utils/SEO'; // can also have jsonLD config



export const Home = (): JSX.Element => (
  <>
    <SEOWrapper seoProps={HomePageSEO.HomeSEO} />
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
