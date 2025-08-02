'use client'

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
`

export const HeaderLogo = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.bgDark};
`
export const InputSearch = styled.input`
  background-color: var(--color-bg-default);
  border: none;
  border-radius: 0.5rem;
  padding: 0.56rem 1rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors.bgDark};
  }
`
