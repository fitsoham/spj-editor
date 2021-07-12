import React from 'react';
import SocialLinks from './Footer/SocialLinks';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container mx-auto px-4">
        <div className="py-12 bg-white border-t border-gray-200">
          <SocialLinks />
          <p className="mt-8 text-center text-gray-600 text-sm">
            &copy; {currentYear} Neo Design Labs Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
