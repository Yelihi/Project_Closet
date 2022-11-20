import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import AppLayout from '../components/AppLayout';

import wrapper from '../store/configureStore';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
