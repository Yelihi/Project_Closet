import { useSelector } from 'react-redux';
import type { rootReducerType } from '../reducers/types';

import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

import wrapper from '../store/configureStore';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { isPhoneMenuClick } = useSelector((state: rootReducerType) => state.screenEvent);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isPhoneMenuClick={isPhoneMenuClick} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
