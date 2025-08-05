'use client'

import styled from 'styled-components'

export const SubHeaderSection = styled.section`
  padding: 2rem 0;
`

export const SubHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SelectInputContainer = styled.div`
  position: relative;
`

export const SelectInputWrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.textDark};
  cursor: pointer;
`

export const SelectDropdown = styled.div`
  position: absolute;
  display: flex;
  min-width: 11.5rem;
  width: fit-content;
  margin-top: 0.37rem;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
`

export const SelectDropdownItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style: none;
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 0.875rem;

  li {
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
`
