import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
     }
     body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f9f9f9;
          color: #333;
     }
     a {
          text-decoration: none;
          color: inherit;
     }
          button {
          cursor: pointer;
     }
`;