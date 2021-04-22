import React from 'react';
import Banner from './Banner';
import Header from './Header';

interface LayoutSubComponents {
  Banner: React.FC;
  Header: React.FC;
  Body: React.FC;
  Footer: React.FC;
}

const Layout: React.FC & LayoutSubComponents = ({ children }) => <>{children}</>;

Layout.Banner = () => <Banner />;
Layout.Header = () => (
  <header>
    <Header />
  </header>
);
Layout.Body = ({ children }) => <main>{children}</main>;
Layout.Footer = ({ children }) => <footer>{children}</footer>;

export default Layout;
