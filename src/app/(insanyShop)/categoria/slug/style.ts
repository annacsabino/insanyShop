'use client'

import styled from 'styled-components'

export const BreadcrumbWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  a,
  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textDark};
    line-height: 150%;
    transition: color 0.2s ease-in-out;
  }
  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.dark};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`
