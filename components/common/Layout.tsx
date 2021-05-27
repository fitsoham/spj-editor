import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

interface LayoutSubComponents {
  Banner: React.FC;
  Header: React.FC;
  Body: React.FC;
  Footer: React.FC;
}

const Layout: React.FC & LayoutSubComponents = ({ children }) => <main className="relative">{children}</main>;

Layout.Banner = () => <Banner />;

Layout.Header = () => <Header />;

Layout.Body = ({ children }) => <main>{children}</main>;

Layout.Footer = () => (
  <footer>
    <Footer />
  </footer>
);

export default Layout;
