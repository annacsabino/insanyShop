'use client'

import Image from 'next/image'

import {
  DescritionProductCard,
  PriceCardWrapper,
  PriceProductCard,
  ProductCardContainer,
  ProductContentCard,
  ProductImageCard,
  StarRatingContainer,
  TagProductWrapper,
  TitleProductCard
} from './style'

import { Button } from '../Button'
import { useRouter } from 'next/navigation'

import { formatPrice } from '@/utils/formatPrice'
import { useCart } from '@/hooks/useCart'

interface ProductProps {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
  rating: number
  brand: string
}

interface ProductCardProps {
  product: ProductProps
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()
  const { addToCart } = useCart()

  const handleCardClick = () => {
    router.push(`/produto/${product.id}`)
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <ProductCardContainer onClick={handleCardClick}>
      <ProductImageCard>
        <Image
          src={product.image}
          alt="Foto do produto"
          width={356}
          height={270}
        />
      </ProductImageCard>
      <ProductContentCard>
        <TagProductWrapper>
          <p>{product.category}</p>
          <StarRatingContainer>
            <Image
              src="/assets/icons/star.svg"
              alt="Estrela de simbolo de avaliação"
              width={14}
              height={14}
            />
            <p>{product.rating}</p>
          </StarRatingContainer>
        </TagProductWrapper>
        <div>
          <TitleProductCard>{product.name}</TitleProductCard>
          <DescritionProductCard>{product.description}</DescritionProductCard>
        </div>
        <PriceCardWrapper>
          <PriceProductCard>{formatPrice(product.price)}</PriceProductCard>
          <p>{product.stock} em estoque</p>
        </PriceCardWrapper>
        <Button
          onClick={(e) => {
            e.stopPropagation()
            handleAddToCart()
          }}
        >
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
