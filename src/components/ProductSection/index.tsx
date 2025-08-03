import { Container, TitleSection } from '@/styles/patterns'
import { ProductCard } from '../ProductCard'
import { ProductSectionWrapper, ProductsWrapper } from './style'
import { Pagination } from '../Pagination'

export function ProductSection() {
  return (
    <ProductSectionWrapper>
      <Container>
        <TitleSection>Todos os produtos</TitleSection>
        <ProductsWrapper>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductsWrapper>
        <Pagination />
      </Container>
    </ProductSectionWrapper>
  )
}
