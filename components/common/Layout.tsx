import React from 'react';
import Header from './Header';

const Layout = ({ children }) => <div>{children}</div>;

Layout.Header = ({ children }) => (
  <header>
    <Header>{children}</Header>
  </header>
);
Layout.Body = ({ children }) => <main>{children}</main>;
Layout.Footer = ({ children }) => <footer>{children}</footer>;

export default Layout;
