import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakPoint: string;

    colors: {
      black: string;
      white: string;
      lightGrey: string;
      middleGrey: string;
      deepGrey: string;
      hoverGrey: string;
      symbol: string;
    };
  }
}
