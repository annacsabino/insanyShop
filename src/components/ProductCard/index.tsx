import Image from 'next/image'

import {
  DescritionProductCard,
  PriceCardWrapper,
  PriceProductCard,
  ProductCardContainer,
  ProductContentCard,
  StarRatingContainer,
  TagProductWrapper,
  TitleProductCard
} from './style'

import { Button } from '../Button'

export function ProductCard() {
  return (
    <ProductCardContainer>
      <div>
        <Image
          src="/assets/images/placeholder-image.png"
          alt="Foto do produto"
          width={356}
          height={270}
        />
      </div>
      <ProductContentCard>
        <TagProductWrapper>
          <p>Roupas e Calçados</p>
          <StarRatingContainer>
            <Image
              src="/assets/icons/star.svg"
              alt="Estrela de simbolo de avaliação"
              width={14}
              height={14}
            />
            <p>4.9</p>
          </StarRatingContainer>
        </TagProductWrapper>
        <div>
          <TitleProductCard>Camiseta Básica Premium</TitleProductCard>
          <DescritionProductCard>
            Camisa 100% algodão com corte moderno e acabamento premium...
          </DescritionProductCard>
        </div>
        <PriceCardWrapper>
          <PriceProductCard>R$ 59,90</PriceProductCard>
          <p>50 em estoque</p>
        </PriceCardWrapper>
        <Button>
          <Image
            src="/assets/icons/cart.svg"
            alt="Icone de carrinho de compra"
            width={24}
            height={24}
          />
          Adicionar
        </Button>
      </ProductContentCard>
    </ProductCardContainer>
  )
}
