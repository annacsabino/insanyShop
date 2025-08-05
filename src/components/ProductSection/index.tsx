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
  categoryId?: string
  sortBy?: string
}

export function ProductSection({
  title,
  description,
  categoryId,
  sortBy
}: ProductSectionProps) {
  const [products, setProducts] = useState<ProductType>()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      let url = `/products?page=${currentPage}&limit=6`
      if (sortBy) {
        url += `&sort=${sortBy}`
      }
      if (categoryId) {
        url += `&category=${categoryId}`
      }
      const response = await api.get(url)
      setProducts(response.data)
    }
    fetchData()
  }, [currentPage, categoryId, sortBy])

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
