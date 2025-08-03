import { Container, TitleSection } from '@/styles/patterns'
import { ProductCard } from '../ProductCard'
import { ProductsWrapper } from './style'
import { Pagination } from '../Pagination'

export function ProductSection() {
  return (
    <section>
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
    </section>
  )
}
