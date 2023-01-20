import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    min-width: 320px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
  }

  * { font-family: ${({ theme }) => theme.font.Kfont}}

  a { cursor: pointer; text-decoration: none}

  input,
  input:active,
  input:focus{
    border: none;
    outline: none;
    -webkit-appearance:none;
    -moz-appearance: none;
    -o-appearance:none;
    appearance: none;
    font-family: ${({ theme }) => theme.font.Efont};
  }

  button {
    border: none;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.Efont};
  }

  
`;

export default GlobalStyle;
