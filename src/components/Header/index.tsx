'use client'

import { useRouter } from 'next/navigation'

import { Container } from '@/styles/themes/patterns'
import {
  HeaderContainer,
  HeaderLogo,
  NavContent,
  SearchContainer,
  InputSearch,
  SearchIcon,
  CartIcon,
  HeaderActions
} from './style'

export function Header() {
  const router = useRouter()
  return (
    <HeaderContainer>
      <Container>
        <NavContent>
          <HeaderLogo>InsanyShop</HeaderLogo>
          <HeaderActions>
            <SearchContainer>
              <InputSearch
                type="search"
                placeholder="Procurando por algo específico?"
                aria-label="Campo de busca de produtos"
              />
              <SearchIcon />
            </SearchContainer>
            <CartIcon onClick={() => router.push('/carrinho')} />
          </HeaderActions>
        </NavContent>
      </Container>
    </HeaderContainer>
  )
}
