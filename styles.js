import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --blackish: #0C0C0C;
    --yellow: #FFF455;
    --pink: #FF0080;
    --blue: #135D66;
  }

  body {
    margin: 0;
    background: var(--blackish);
    font-family: Verdana;
    line-height: 1.3;
  }

  h1 {
    font-weight: 200;
    color: var(--pink);
    margin: 20px 0;
    text-align: center;
  }

  .carousel-item {
    margin:  0;
    background: var(--blue);
    padding: 20px;
    color: var(--yellow);
    width: 100%;
    font-size: 20px;
  }

  .question {
    margin: 50px 0;
  }

  .answer {
    font-style: italic;
    font-size: 16px;
    text-align: right;
  }

  .answer-button {
    background: var(--blackish);
    color: var(--pink);
    padding: 10px;
    border-radius: 20px;
    width: 150px;
    border: none;
  }
`;
