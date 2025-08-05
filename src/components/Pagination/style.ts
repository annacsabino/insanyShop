'use client'

import styled from 'styled-components'

interface PaginationButtonProps {
  $isActive?: boolean
}

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3.19rem;
`

export const PaginationList = styled.div`
  display: flex;
  gap: 1.31rem;
  list-style: none;
`

export const PagintionButton = styled.button<PaginationButtonProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.purple : theme.colors.textDark};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.bgLight : theme.colors.lightGray};
  border: ${({ theme, $isActive }) =>
    $isActive ? `1px solid ${theme.colors.purple}` : 'none'};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgLight};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
