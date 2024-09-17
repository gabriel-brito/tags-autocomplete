import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        margin: 0;
        min-height: 100vh;
        padding: 0;
        width: 100%;
    }

    #root {
     width: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: linear-gradient(229deg, rgba(0,36,107,1) 45%, rgba(202,220,252,1) 100%);
    }
  `;

export default GlobalStyles;
