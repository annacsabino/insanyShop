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

import { useEffect, useState } from 'react'
import { Button } from '../Button'

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
  const [productToCart, setProductToCart] = useState<ProductProps[]>([])

  function addToCart(product: ProductProps) {
    const storedCart = localStorage.getItem('cart-product')
    const currentCart = storedCart ? JSON.parse(storedCart) : []
    const updatedCart = [...currentCart, product]

    localStorage.setItem('cart-product', JSON.stringify(updatedCart))
    window.dispatchEvent(new Event('cart-updated'))
  }

  return (
    <ProductCardContainer>
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
          <PriceProductCard>R$ {product.price}</PriceProductCard>
          <p>{product.stock} em estoque</p>
        </PriceCardWrapper>
        <Button onClick={() => addToCart(product)}>
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
