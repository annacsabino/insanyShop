'use client'

import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'
interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: css`
    background-color: black;
    color: #fff;
  `,
  secondary: css`
    font-family: 'Saira', sans-serif;
    background-color: #1b9847;
    color: #fff;
    text-transform: uppercase;
  `
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ variant }) => buttonVariants[variant]}
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 150%;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.85;
  }
`
