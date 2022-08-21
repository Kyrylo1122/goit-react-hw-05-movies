import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
body{
    h1,
    h2,
    h3,
    h4,
    h5,h6,p{
      
        font-family: sans-serif;
    }
    li{
        list-style: none;
    }
    a{
        color: black;
        text-decoration: none;
    }
}`;
