'use client'

import { CategoriesSection } from '@/components/CategoriesSection'
import { ProductSection } from '@/components/ProductSection'
import { SubHeader } from '@/components/SubHeader'
import { useSearchContext } from '@/contexts/SearchContext'
import { useState } from 'react'

export default function Home() {
  const { searchQuery } = useSearchContext()
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSort, setSelectedSort] = useState('newest')

  return (
    <main>
      <SubHeader
        onCategoryChange={setSelectedCategory}
        onSortChange={setSelectedSort}
        selectedCategory={selectedCategory}
        selectedSort={selectedSort}
      />
      <ProductSection
        title={'Todos os produtos'}
        description={
          searchQuery ? `Resultados para "${searchQuery}"` : undefined
        }
        searchQuery={searchQuery}
      />
      <CategoriesSection />
    </main>
  )
}
