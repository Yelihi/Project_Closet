import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import AppLayout from '../components/AppLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default MyApp;
