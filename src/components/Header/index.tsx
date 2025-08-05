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

import { useSearchContext } from '@/contexts/SearchContext'

export function Header() {
  const { searchQuery, handleSearchInput } = useSearchContext()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchInput(e.target.value)
  }

  const router = useRouter()
  return (
    <HeaderContainer>
      <Container>
        <NavContent>
          <HeaderLogo href="/">InsanyShop</HeaderLogo>
          <HeaderActions>
            <SearchContainer>
              <InputSearch
                type="search"
                placeholder="Procurando por algo específico?"
                aria-label="Campo de busca de produtos"
                value={searchQuery}
                onChange={handleInputChange}
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
