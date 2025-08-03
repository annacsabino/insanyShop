import { Container } from '@/styles/patterns'
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
            <CartIcon />
          </HeaderActions>
        </NavContent>
      </Container>
    </HeaderContainer>
  )
}
