import theme from '@theme/theme';
import type { AppProps } from 'next/app';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import 'tailwindcss/tailwind.css';
import '../globalStyle.css';
import CommonSEO from '@components/Shared/SEO/DefaultSeo';

const GlobalStyle = createGlobalStyle``;

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <CommonSEO />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
