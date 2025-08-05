'use client'

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 1.19rem 0;
  background-color: ${({ theme }) => theme.colors.white};
`

export const NavContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const HeaderLogo = styled.a`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.bgDark};
  cursor: pointer;
`
export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const SearchContainer = styled.div`
  position: relative;
`

export const InputSearch = styled.input`
  width: 20.3rem;
  background-color: ${({ theme }) => theme.colors.bgLight};
  border: none;
  border-radius: 0.5rem;
  padding: 0.56rem 1rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors.bgDark};
    font-size: 0.875rem;
    line-height: 157.143%;
  }
`

export const SearchIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: url('/assets/icons/search.svg') no-repeat center center;
  pointer-events: none;

  ::focus {
    display: none;
  }
`

export const CartIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background: url('/assets/icons/shopping-cart.svg') no-repeat center center;
`
