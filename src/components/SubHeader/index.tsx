import Image from 'next/image'

import { Container } from '@/styles/themes/patterns'
import {
  SubHeaderSection,
  SubHeaderWrapper,
  SelectInputContainer,
  SelectInputWrapper,
  SelectDropdown,
  SelectDropdownItems
} from './style'

import { useCategories } from '@/hooks/useCategories'
import { useState } from 'react'

interface SubHeaderProps {
  onCategoryChange?: (categoryId: string) => void
  onSortChange?: (sortBy: string) => void
  selectedCategory?: string
  selectedSort?: string
}

export function SubHeader({
  onCategoryChange,
  onSortChange,
  selectedCategory = '',
  selectedSort = 'newest'
}: SubHeaderProps) {
  const { categories } = useCategories()
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false)
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false)

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange?.(categoryId)
    setCategoryDropdownOpen(false) // Fecha após selecionar
  }

  const handleSortClick = (sortBy: string) => {
    onSortChange?.(sortBy)
    setSortDropdownOpen(false) // Fecha após selecionar
  }

  const getCategoryName = (categoryId: string) => {
    if (!categoryId) return 'Todas as categorias'
    const category = categories.find((cat) => cat.id === categoryId)
    return category?.name || 'Selecione a categoria'
  }

  const getSortName = (sortBy: string) => {
    const sortOptions: Record<string, string> = {
      newest: 'Novidades',
      price_desc: 'Preço: Maior - menor',
      price_asc: 'Preço: Menor - maior',
      bestseller: 'Mais vendidos'
    }
    return sortOptions[sortBy] || 'Organizar por'
  }

  return (
    <SubHeaderSection>
      <Container>
        <SubHeaderWrapper>
          <SelectInputContainer>
            <SelectInputWrapper
              onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
            >
              <p>{getCategoryName(selectedCategory)}</p>
              <Image
                src="/assets/icons/arrow-down.svg"
                alt="Icone de uma setinha virada para baixo"
                width={24}
                height={24}
              />
            </SelectInputWrapper>
            {!categoryDropdownOpen ? (
              <SelectDropdown>
                <SelectDropdownItems>
                  <li>
                    <a href="">Eletrônicos</a>
                  </li>
                  <li>
                    <a href="">Roupas e Calçados</a>
                  </li>
                  <li>
                    <a href="">Casa e Decoração</a>
                  </li>
                  <li>
                    <a href="">Livros</a>
                  </li>
                  <li>
                    <a href="">Esporte e Lazer</a>
                  </li>
                </SelectDropdownItems>
              </SelectDropdown>
            ) : null}
          </SelectInputContainer>

          <SelectInputContainer>
            <SelectInputWrapper
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
            >
              <p>{getSortName(selectedSort)}</p>
              <Image
                src="/assets/icons/arrow-down.svg"
                alt="Icone de uma setinha virada para baixo"
                width={24}
                height={24}
              />
            </SelectInputWrapper>
            {sortDropdownOpen ? (
              <SelectDropdown>
                <SelectDropdownItems>
                  <li>
                    <a href="">Novidades</a>
                  </li>
                  <li>
                    <a href="">Preço: Maior - menor</a>
                  </li>
                  <li>
                    <a href="">Preço: Menor - maior</a>
                  </li>
                  <li>
                    <a href="">Mais vendidos</a>
                  </li>
                </SelectDropdownItems>
              </SelectDropdown>
            ) : null}
          </SelectInputContainer>
        </SubHeaderWrapper>
      </Container>
    </SubHeaderSection>
  )
}
