import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
        body {                
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;        
            color: #22272D;
            background-color: #F6F7F9;
        }

        a {
            text-decoration: none;
            display: inline;
            color: black;
        }

        .grid-container{
            width: 980px;
            margin: auto;
        }
`
export const Img = styled.img`
`