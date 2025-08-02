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
    background-color: #1b9847;
    color: #fff;
    text-transform: uppercase;
  `
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ variant }) => buttonVariants[variant]}

  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`
