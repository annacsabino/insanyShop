'use client'

import { CategoriesSection } from '@/components/CategoriesSection'
import { ProductSection } from '@/components/ProductSection'
import { SubHeader } from '@/components/SubHeader'
import { useSearchContext } from '@/contexts/SearchContext'

export default function Home() {
  const { searchQuery } = useSearchContext()

  return (
    <main>
      <SubHeader />
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
