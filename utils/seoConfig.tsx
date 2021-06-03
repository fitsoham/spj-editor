const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Spacejoy',
  brand: 'Spacejoy',
  legalName: 'Neo Design Labs Inc',
  url: 'https://www.spacejoy.com/',
  logo: '//res.cloudinary.com/spacejoy/image/upload/w_200/v1578101355/shared/spacejoy-logo_ase39m.svg',
  foundingDate: '22/04/2019',
  founders: [
    {
      '@type': 'Person',
      name: 'Arnab Saharoy',
    },
    {
      '@type': 'Person',
      name: 'Vinay Indresh',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1450 2nd Street',
    addressLocality: '155 Santa Monica',
    addressRegion: 'LA California',
    postalCode: '90401',
    addressCountry: 'USA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    telephone: '+1 (310) 483-7722',
    email: 'hello@spacejoy.com',
  },
  sameAs: [
    'https://www.facebook.com/spacejoyapp/',
    'https://twitter.com/spacejoyapp/',
    'https://www.linkedin.com/company/spacejoy/',
    'https://www.instagram.com/spacejoyapp/',
    'https://www.pinterest.com/spacejoyapp/',
  ],
};
const defaultSEO = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.spacejoy.com/',
  },
};

const HomePageSEO = {
  title: '#1 Automated Interior Design Solution by Spacejoy',
  description: 'The best place to design and shop for your home',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
};

export { organizationSchema, defaultSEO, HomePageSEO };
