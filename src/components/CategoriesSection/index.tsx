import { Container, TitleSection } from '@/styles/themes/patterns'
import {
  CategoriesSectionWrapper,
  CategoryCardWrapper,
  CategoryCardItemWrapper
} from './style'

interface CategoriesProps {
  id: number
  categorie: string
  amout: number
}

const categoriesData: CategoriesProps[] = [
  {
    id: 1,
    categorie: 'Eletrônicos',
    amout: 4
  },
  {
    id: 2,
    categorie: 'Roupas e Calçados',
    amout: 4
  },
  {
    id: 3,
    categorie: 'Casa e Decoração',
    amout: 3
  },
  {
    id: 4,
    categorie: 'Livros',
    amout: 3
  },
  {
    id: 5,
    categorie: 'Esporte e Lazer',
    amout: 3
  }
]

export function CategoriesSection() {
  return (
    <CategoriesSectionWrapper>
      <Container>
        <TitleSection>Principais categorias</TitleSection>
        <CategoryCardWrapper>
          {categoriesData.map((category) => (
            <CategoryCardItemWrapper key={category.id}>
              <h3>{category.categorie}</h3>
              <span>{category.amout} produtos</span>
            </CategoryCardItemWrapper>
          ))}
        </CategoryCardWrapper>
      </Container>
    </CategoriesSectionWrapper>
  )
}
