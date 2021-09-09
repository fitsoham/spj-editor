import { CommonSEO } from '@utils/SEO';
import { CorporateContactJsonLd, DefaultSeo } from 'next-seo';
import React from 'react';

const DefaultSEO: React.FC = () => {
  const { organizationSchema, defaultSEO } = CommonSEO;
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <CorporateContactJsonLd {...organizationSchema} />
    </>
  );
};

export default DefaultSEO;
