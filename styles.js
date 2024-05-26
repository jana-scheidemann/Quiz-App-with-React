import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #0C0C0C;
    font-family: Verdana;
    line-height: 1.3;
  }

  h1 {
    font-weight: 200;
    color: #FF0080;
    margin: 20px 0 0 0;
    text-align: center;
  }

  ul {
    padding-inline-start: 0;
  }

  li {
    list-style-type: none;
    margin:  0;
    background: #007F73;
    color: #FFF455;
    width: 100%;
    padding: 5% 15%;
    margin: 10% 0;
    font-size: 20px;
  }

  .answer {
    font-style: italic;
    font-size: 16px;
    text-align: right;
  }

  button {
    background: #0C0C0C;
    color: #FF0080;
    padding: 10px;
    border-radius: 20px;
    width: 150px;
    border: none;
  }
`;
