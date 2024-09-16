import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
    }
  `;

export default GlobalStyles;
