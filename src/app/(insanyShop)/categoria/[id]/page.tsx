'use client'

import Image from 'next/image'
import Link from 'next/link'

import { ProductSection } from '@/components/ProductSection'
import {
  SubHeaderSection,
  SubHeaderWrapper,
  SelectInputContainer,
  SelectInputWrapper,
  SelectDropdown,
  SelectDropdownItems
} from '@/components/SubHeader/style'
import { Container } from '@/styles/themes/patterns'
import { BreadcrumbWrapper } from './style'

import { useCategory, useFilters } from '@/hooks/useCategories'

export default function CategoryPage() {
  const { category, categoryId } = useCategory()
  const { sortBy, setSortBy } = useFilters()

  if (!category) return null

  return (
    <main>
      <SubHeaderSection>
        <Container>
          <SubHeaderWrapper>
            <BreadcrumbWrapper>
              <Link href="/">Produtos</Link>
              <span>/</span>
              <p>{category.name}</p>
            </BreadcrumbWrapper>

            <SelectInputContainer>
              <SelectInputWrapper>
                <p>Organizar por</p>
                <Image
                  src="/assets/icons/arrow-down.svg"
                  alt="Icone de uma setinha virada para baixo"
                  width={24}
                  height={24}
                />
              </SelectInputWrapper>
              <SelectDropdown>
                <SelectDropdownItems>
                  <li>
                    <button onClick={() => setSortBy('newest')}>
                      Novidades
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setSortBy('price_desc')}>
                      Preço: Maior - menor
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setSortBy('price_asc')}>
                      Preço: Menor - maior
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setSortBy('bestseller')}>
                      Mais vendidos
                    </button>
                  </li>
                </SelectDropdownItems>
              </SelectDropdown>
            </SelectInputContainer>
          </SubHeaderWrapper>
        </Container>
      </SubHeaderSection>
      <ProductSection
        title={category.name}
        description={category.description}
        categoryId={categoryId}
        sortBy={sortBy}
      />
    </main>
  )
}
