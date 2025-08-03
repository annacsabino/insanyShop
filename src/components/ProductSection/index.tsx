import { Container } from '@/styles/patterns'
import { ProductCard } from '../ProductCard'
import { ProductsWrapper } from './style'

export function ProductSection() {
  return (
    <section>
      <Container>
        <h2>Todos os produtos</h2>
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
          <ProductCard />
        </ProductsWrapper>
      </Container>
    </section>
  )
}
