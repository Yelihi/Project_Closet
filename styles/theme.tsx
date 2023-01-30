import { DefaultTheme, CSSProp, css } from 'styled-components';

const font = {
  Kfont: `'Noto Sans KR', sans-serif`,
  Efont: `'Roboto', sans-serif`,
};

const fontWeight = {
  Thin: 100,
  Light: 300,
  Regular: 400,
  Medium: 500,
  Bold: 700,
};

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  lightGrey: '#B0B0B0',
  middleGrey: '#717171',
  deepGrey: '#222222',
  hoverGrey: '#DBDBDB',
  symbol: '#205281',
  brown: '#363740',
};

export type FontTypes = typeof font;
export type FontWeight = typeof fontWeight;
export type Colors = typeof colors;

const theme: DefaultTheme = {
  breakPoint: '796px',
  font,
  fontWeight,
  colors,
};

export default theme;
