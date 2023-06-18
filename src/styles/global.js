import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS["CAKE_100"]};
    border-radius: 4px;
  }

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.COLORS.DARK_500};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.DARK_1000};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.COLORS.DARK_800};
}

  body {
    background: ${({ theme }) => theme.COLORS["DARK_400"]};
    color: ${({ theme }) => theme.COLORS["LIGHT_100"]};
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  body, input, textarea, button  {
    font: 400 1.6rem Roboto, sans-serif;
    color: ${({ theme }) => theme.COLORS["LIGHT_100"]};
  }

  button {
    background-color: transparent;
  }

  a {
    text-decoration: none;
  }

  a:hover, button:hover {
    cursor: pointer;
  }

  input, button, textarea, select {
    outline: none;
    border: none
  }

  ::file-selector-button {
		display: none;
	}
`;
