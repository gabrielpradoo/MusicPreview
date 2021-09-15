import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #161616;
    --secondary: #989898 ;
    --tertiary: #BBB;

    --paddingMain: 140px;

    --fontXLarge: 48px;
    --fontLarge: 24px;
    --fontMedium: 18px;
    --fontRegular: 16px;
    --fontSmall: 14px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smooth: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  body, #__next {
    width: 100%;
    height: 100%;
  }

  body, input, textarea {
    margin:0;
    padding: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
