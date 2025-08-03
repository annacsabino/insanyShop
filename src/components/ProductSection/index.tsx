import { Container, TitleSection } from '@/styles/patterns'
import { ProductCard } from '../ProductCard'
import {
  ProductSectionWrapper,
  ProductsWrapper,
  TitleSectionWrapper,
  DescriptionSection
} from './style'
import { Pagination } from '../Pagination'

interface ProductSectionProps {
  title: string
  description?: string
}

export function ProductSection({ title, description }: ProductSectionProps) {
  return (
    <ProductSectionWrapper>
      <Container>
        <TitleSectionWrapper>
          <TitleSection>{title}</TitleSection>
          <DescriptionSection>{description}</DescriptionSection>
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
