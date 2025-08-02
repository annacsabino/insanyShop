'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.bgLight};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    line-height: 150%;
    border: none;
  }

  p {
    font-size: 0.875rem;
    line-height: 150%;
  }

  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    box-shadow: -6px 8px 20.4px 0 rgba(0, 0, 0, 0.04);
  }
`
