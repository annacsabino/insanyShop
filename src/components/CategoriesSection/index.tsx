'use client'

import { Container, TitleSection } from '@/styles/themes/patterns'
import {
  CategoriesSectionWrapper,
  CategoryCardWrapper,
  CategoryCardItemWrapper
} from './style'

import { useCategories } from '@/hooks/useCategories'

export function CategoriesSection() {
  const { categories } = useCategories()

  return (
    <CategoriesSectionWrapper>
      <Container>
        <TitleSection>Principais categorias</TitleSection>
        <CategoryCardWrapper>
          {categories.map((category) => (
            <CategoryCardItemWrapper
              key={category.id}
              href={`/categoria/${category.id}`}
            >
              <h3>{category.name}</h3>
              <span>{category.productCount} produtos</span>
            </CategoryCardItemWrapper>
          ))}
        </CategoryCardWrapper>
      </Container>
    </CategoriesSectionWrapper>
  )
}
