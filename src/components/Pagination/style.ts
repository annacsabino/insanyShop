'use client'

import styled from 'styled-components'

interface PaginationButtonProps {
  isActive?: boolean
}

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3.19rem;
`

export const PaginationList = styled.ul`
  display: flex;
  gap: 1.31rem;
  list-style: none;
`

export const PagintionButton = styled.li<PaginationButtonProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.purple : theme.colors.textDark};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.bgLight : theme.colors.lightGray};
  border: ${({ theme, isActive }) =>
    isActive ? `1px solid ${theme.colors.purple}` : 'none'};
  border-radius: 8px;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
