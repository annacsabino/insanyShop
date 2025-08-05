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

export function SubHeader() {
  return (
    <SubHeaderSection>
      <Container>
        <SubHeaderWrapper>
          <SelectInputContainer>
            <SelectInputWrapper>
              <p>Selecione a categoria</p>
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
          </SelectInputContainer>

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
  )
}
