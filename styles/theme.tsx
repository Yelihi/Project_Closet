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
};

const size = {
  mobile: 320,
  tablet: 786,
  desktop: 1024,
};

const media: Media = {
  mobile: (...args: BackQuoteArgs) => undefined,
  tablet: (...args: BackQuoteArgs) => undefined,
  desktop: (...args: BackQuoteArgs) => undefined,
};

Object.keys(media).reduce((acc, label) => {
  switch (label) {
    case 'mobile':
      acc.mobile = (...args) => css`
        @media screen and (min-width: ${size.mobile}px) {
          ${args}
        }
      `;
      break;
    case 'tablet':
      acc.tablet = (...args) => css`
        @media screen and (min-width: ${size.tablet}px) {
          ${args}
        }
      `;
      break;
    case 'desktop':
      acc.desktop = (...args) => css`
        @media screen and (min-width: ${size.desktop}px) {
          ${args}
        }
      `;
      break;
  }
  return acc;
}, media);

export type FontTypes = typeof font;
export type FontWeight = typeof fontWeight;
export type Colors = typeof colors;

export type Size = typeof size;
export type Media = {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
};

export type BackQuoteArgs = [TemplateStringsArray];

const theme: DefaultTheme = {
  breakPoint: '796px',
  font,
  fontWeight,
  colors,
  size,
  media,
};

export default theme;
