import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
body{
    h1,
    h2,
    h3,
    h4,
    h5,h6,p{
        margin: 0;
        padding: 0;
        font-family: monospace sans-serif;
    }
    li{
        list-style: none;
    }
    a{
        color: black;
        text-decoration: none;
    }
}`;
