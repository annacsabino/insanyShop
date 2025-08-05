'use client'

import { Container, TitleSection } from '@/styles/themes/patterns'
import { ProductCard } from '../ProductCard'
import {
  ProductSectionWrapper,
  ProductsWrapper,
  TitleSectionWrapper,
  DescriptionSection
} from './style'
import { Pagination } from '../Pagination'
import { api } from '@/api'
import { ProductType } from '@/types/products'
import { useEffect, useState } from 'react'

interface ProductSectionProps {
  title: string
  description?: string
}

export function ProductSection({ title, description }: ProductSectionProps) {
  const [products, setProducts] = useState<ProductType>()
  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/products')
      setProducts(response.data)
    }
    fetchData()
  }, [])

  return (
    <ProductSectionWrapper>
      <Container>
        <TitleSectionWrapper>
          <TitleSection>{title}</TitleSection>
          <DescriptionSection>{description}</DescriptionSection>
        </TitleSectionWrapper>
        <ProductsWrapper>
          {products?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsWrapper>
        <Pagination />
      </Container>
    </ProductSectionWrapper>
  )
}
