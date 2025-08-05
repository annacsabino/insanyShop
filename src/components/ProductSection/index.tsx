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
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/products?page=${currentPage}&limit=6`)
      setProducts(response.data)
    }
    fetchData()
  }, [currentPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

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
        {products?.pagination && products.pagination.totalPages > 1 && (
          <Pagination
            currentPage={products.pagination.currentPage}
            totalPages={products.pagination.totalPages}
            hasNextPage={products.pagination.hasNextPage}
            hasPreviousPage={products.pagination.hasPreviousPage}
            onPageChange={handlePageChange}
          />
        )}
      </Container>
    </ProductSectionWrapper>
  )
}
