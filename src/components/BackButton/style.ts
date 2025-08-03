'use client'

import styled from 'styled-components'

export const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  a {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textBackButton};
  }
`
