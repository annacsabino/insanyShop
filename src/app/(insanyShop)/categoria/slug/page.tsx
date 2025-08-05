import Image from 'next/image'

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
export default function CategoryPage() {
  return (
    <main>
      <SubHeaderSection>
        <Container>
          <SubHeaderWrapper>
            <BreadcrumbWrapper>
              <a href="">Produtos</a>
              <span>/</span>
              <p>Eletrônicos</p>
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
            </SelectInputContainer>
          </SubHeaderWrapper>
        </Container>
      </SubHeaderSection>
      <ProductSection
        title="Eletrônicos"
        description="Smartphones, laptops, consoles e mais"
      />
    </main>
  )
}
