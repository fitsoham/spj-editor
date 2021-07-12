import { company } from '@utils/config';
import Link from 'next/link';
import React from 'react';
import SocialLinks from './Footer/SocialLinks';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="antialiased border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-6 gap-4">
          <div className="col-span-2 xl:w-3/4">
            <h3 className="mb-3">About</h3>
            <p className="leading-relaxed text-sm text-gray-600">
              Spacejoy is an online interior design studio. Sign up and work 1:1 with our design experts to transform
              your home. See your room designed in 3D curated with handpicked products that you shop right away from our
              platform.
            </p>
            <SocialLinks />
          </div>
          <div className="">
            <h3 className="mb-3">Quick Links</h3>
            <ul>
              <li>
                <Link href="/pricing" as="/pricing">
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/pricing"
                  >
                    Pricing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/customer-stories" as="/customer-stories">
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/customer-stories"
                  >
                    Customer Stories
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/interior-designs" as="/interior-designs">
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/interior-designs"
                  >
                    Interior Designs Ideas
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/purchase-gift-card" as="/purchase-gift-card">
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/purchase-gift-card"
                  >
                    Gift Cards
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/balance-check" as="/balance-check">
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/balance-check"
                  >
                    Check Card Balance
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/online-room-design" as="/online-room-design">
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/online-room-design"
                  >
                    Design Process
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/online-interior-designers" as="/online-interior-designers">
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/online-interior-designers"
                  >
                    Meet The Team
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="mb-3">Blog</h3>
            <ul>
              <li>
                <Link
                  href={{
                    pathname: '/interior-designs-blog',
                  }}
                  as="/interior-designs-blog"
                >
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/interior-designs-blog"
                  >
                    Online Interior Design Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: '/interior-designs-blog',
                    query: { slug: 'for-a-year-round-spring-feel-light-and-airy-furniture' },
                  }}
                  as="/interior-designs-blog/for-a-year-round-spring-feel-light-and-airy-furniture"
                >
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/interior-designs-blog/for-a-year-round-spring-feel-light-and-airy-furniture"
                  >
                    Spring Furniture Ideas
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: '/interior-designs-blog',
                    query: { slug: '13-clever-and-stylish-storage-ideas-for-any-room-in-your-home' },
                  }}
                  as="/interior-designs-blog/13-clever-and-stylish-storage-ideas-for-any-room-in-your-home"
                >
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/interior-designs-blog/13-clever-and-stylish-storage-ideas-for-any-room-in-your-home"
                  >
                    13 Clever Storage Ideas
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: '/interior-designs-blog',
                    query: { slug: 'gallery-wall-ideas-to-dress-up-your-walls' },
                  }}
                  as="/interior-designs-blog/gallery-wall-ideas-to-dress-up-your-walls"
                >
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/interior-designs-blog/gallery-wall-ideas-to-dress-up-your-walls"
                  >
                    Gallery Wall Ideas
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: '/interior-designs-blog',
                    query: { slug: 'simple-diy-decor-ideas-to-ring-in-spring' },
                  }}
                  as="/interior-designs-blog/simple-diy-decor-ideas-to-ring-in-spring"
                >
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/interior-designs-blog/simple-diy-decor-ideas-to-ring-in-spring"
                  >
                    DIY Spring Decor Ideas
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: '/interior-designs-blog',
                    query: { slug: 'colorful-wreath-ideas-that-go-beyond-the-front-door' },
                  }}
                  as="/interior-designs-blog/colorful-wreath-ideas-that-go-beyond-the-front-door"
                >
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/interior-designs-blog/colorful-wreath-ideas-that-go-beyond-the-front-door"
                  >
                    Spring Wreath Ideas
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="mb-3">Support</h3>
            <ul>
              <li>
                <Link href="/help" as="/help">
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/help"
                  >
                    Help
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms" as="/terms">
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/terms"
                  >
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms" as="/terms">
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/terms"
                  >
                    Terms of Service
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cookies" as="/cookies">
                  <a
                    className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    href="/cookies"
                  >
                    Cookie Statement
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" as="/refund-policy">
                  <a className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none">
                    Refund Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/sitemap" as="/sitemap">
                  <a className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none">
                    Sitemap
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="mb-3">Connect with us</h3>
            <ul>
              <li>
                <a
                  className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                  href={`tel:${company.phone.support}`}
                  target="_top"
                >
                  {company.phone.support}
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                  href={`mailto:${company.email.support}?Subject=Need%20Help`}
                  target="_top"
                >
                  {company.email.support}
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-600 leading-7 rounded-md hover:text-red-500 focus:text-red-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                  href={`mailto:${company.email.support}?Subject=Partner%20With%20Spacejoy`}
                  target="_top"
                >
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-100 py-4">
        <p className="text-sm text-gray-600 leading-7">
          &copy; {currentYear} Neo Design Labs Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
