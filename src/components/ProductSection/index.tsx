import { Container, TitleSection } from '@/styles/patterns'
import { ProductCard } from '../ProductCard'
import {
  ProductSectionWrapper,
  ProductsWrapper,
  TitleSectionWrapper,
  DescriptionSection
} from './style'
import { Pagination } from '../Pagination'

export function ProductSection() {
  return (
    <ProductSectionWrapper>
      <Container>
        <TitleSectionWrapper>
          <TitleSection>Todos os produtos</TitleSection>
          <DescriptionSection>
            Smartphones, laptops, consoles e mais
          </DescriptionSection>
        </TitleSectionWrapper>
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
