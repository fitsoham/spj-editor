import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative">
      <div className="absolute -top-12 right-0 shape-2" />
      <div className="container relative py-16 mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-4/12 px-4">
            <h4 className="text-xl mb-2">Let&apos;s keep in touch!</h4>
            <h5 className="text-sm mb-2 text-gray-500">
              Spacejoy is an online interior design studio. Sign up and work 1:1 with our design experts to transform
              your home. See your room designed in 3D curated with handpicked products that you shop right away from our
              platform.
            </h5>
          </div>
          <div className="w-full md:w-6/12 lg:w-8/12 px-4">
            <div className="flex flex-wrap items-top">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">About Us</a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">Blog</a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">Github</a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">Free Products</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">MIT License</a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">Terms & Conditions</a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
