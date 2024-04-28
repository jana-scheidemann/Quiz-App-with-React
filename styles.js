import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
  --color-light: rgb(151, 212, 151);
  --color-medium: rgb(69, 138, 69);
  --color-dark: rgb(28, 78, 28);
  --color-foam: rgb(242, 242, 242);
  --color-darkMode: rgb(52, 52, 52);
  --general-border-radius: 5px;
}

  body {
    margin: 0;
    padding: 20px;
  }
`;
