'use client'

import styled from 'styled-components'

export const BackButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  p {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textBackButton};
  }

  &:hover {
    opacity: 0.8;
  }
`
