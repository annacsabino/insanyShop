import { CategoriesSection } from '@/components/CategoriesSection'
import { ProductSection } from '@/components/ProductSection'
import { SubHeader } from '@/components/SubHeader'

//Todo: Ajustar titulo do card para h3
//Todo: Ajustar grid template do card para colocar repeat(3, 1fr)
//Todo: Ajsutar grid das categorias para o mobile
//Todo: Tirar o h1 da logo

export default function Home() {
  return (
    <main>
      <SubHeader />
      <ProductSection title="Todos os produtos" />
      <CategoriesSection />
    </main>
  )
}
