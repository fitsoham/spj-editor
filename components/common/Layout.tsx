import React from 'react';
import Header from './Header';

interface LayoutSubComponents {
  Header: React.FC;
  Body: React.FC;
  Footer: React.FC;
}

const Layout: React.FC & LayoutSubComponents = ({ children }) => <div>{children}</div>;

Layout.Header = () => (
  <header>
    <Header />
  </header>
);
Layout.Body = ({ children }) => <main>{children}</main>;
Layout.Footer = ({ children }) => <footer>{children}</footer>;

export default Layout;
