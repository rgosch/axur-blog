import { createGlobalStyle } from "styled-components";

import { Gotham, OpenSans } from 'visual/fonts';

export const GlobalStyle = createGlobalStyle`
  ${Gotham}
  ${OpenSans}

  body, html {
    min-height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gotham', serif;
    font-weight: normal;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
