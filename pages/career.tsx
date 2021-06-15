import { Output } from '@components/Home';
import Layout from '@components/Shared/Layout';
import SectionTitle from '@components/Shared/SectionTitle';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const career: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Career @Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <div className="container mx-auto px-4">
          <Image
            className="object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1558403194-611308249627?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3600&q=80"
            height="600"
            width="1500"
          />
          <div className="bg-white">
            <SectionTitle
              accent="yellow"
              feature="Workplace"
              title="Best place to work & Grow"
              description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
            />
            <div className="mb-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8 max-w-5xl mx-auto">
              <div className="col-span-1 flex justify-center py-4 px-4 bg-gray-50">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1610014244/shared/Brand%20logos%2007-2021/publication_LOGO-01_fohpe0.svg"
                  alt="spacejoy happy customer"
                  height={'130'}
                  width={'200'}
                />
              </div>
              <div className="col-span-1 flex justify-center py-4 px-4 bg-gray-50">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1610014244/shared/Brand%20logos%2007-2021/publication_LOGO-01_fohpe0.svg"
                  alt="spacejoy happy customer"
                  height={'130'}
                  width={'200'}
                />
              </div>
              <div className="col-span-1 flex justify-center py-4 px-4 bg-gray-50">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1610014244/shared/Brand%20logos%2007-2021/publication_LOGO-01_fohpe0.svg"
                  alt="spacejoy happy customer"
                  height={'130'}
                  width={'200'}
                />
              </div>
              <div className="col-span-1 flex justify-center py-4 px-4 bg-gray-50">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1610014244/shared/Brand%20logos%2007-2021/publication_LOGO-01_fohpe0.svg"
                  alt="spacejoy happy customer"
                  height={'130'}
                  width={'200'}
                />
              </div>
              <div className="col-span-1 flex justify-center py-4 px-4 bg-gray-50">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1610014244/shared/Brand%20logos%2007-2021/publication_LOGO-01_fohpe0.svg"
                  alt="spacejoy happy customer"
                  height={'130'}
                  width={'200'}
                />
              </div>
              <div className="col-span-1 flex justify-center py-4 px-4 bg-gray-50">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1610014244/shared/Brand%20logos%2007-2021/publication_LOGO-01_fohpe0.svg"
                  alt="spacejoy happy customer"
                  height={'130'}
                  width={'200'}
                />
              </div>
            </div>
            <p className="text-center text-base font-semibold text-gray-600 tracking-wider">
              Trusted by over 5 very average small businesses
            </p>
          </div>
        </div>
        <Output />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default career;
