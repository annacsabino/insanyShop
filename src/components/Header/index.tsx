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
  HeaderActions,
  CartBadge,
  CartIconWrapper
} from './style'

import { useSearchContext } from '@/contexts/SearchContext'
import { useCartCount } from '@/hooks/useCartCount'

export function Header() {
  const { searchQuery, handleSearchInput } = useSearchContext()
  const { cartCount } = useCartCount()

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
            {cartCount == 0 ? (
              <CartIcon onClick={() => router.push('/carrinho')} />
            ) : (
              <CartIconWrapper>
                <CartIcon onClick={() => router.push('/carrinho')} />
                <CartBadge>{cartCount}</CartBadge>
              </CartIconWrapper>
            )}
          </HeaderActions>
        </NavContent>
      </Container>
    </HeaderContainer>
  )
}
