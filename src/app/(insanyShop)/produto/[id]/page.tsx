'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  ProductPageContent,
  ProductDescriptionWrapper,
  ProductItemSection,
  ProductImageContainer,
  ProductInfoContainer,
  ProductInfoHeader,
  CategoryLabel,
  ProductTitle,
  ProductPrice,
  ProductPageContainer
} from './style'
import { Container } from '@/styles/themes/patterns'
import { BackButton } from '@/components/BackButton'
import { Button } from '@/components/Button'
import { api } from '@/api'
import { useParams } from 'next/navigation'

import { useCart } from '@/hooks/useCart'

import { SingleProductType } from '@/types/products'
import { formatPrice } from '@/utils/formatPrice'

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const [product, setProduct] = useState<SingleProductType | null>(null)
  const { addToCart, isInCart } = useCart()

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${productId}`)
      setProduct(response.data.product)
    }
    fetchProduct()
  }, [productId])
  const handleAddToCart = () => {
    if (product) {
      addToCart(product)
    }
  }

  if (!product) {
    return (
      <ProductItemSection>
        <Container>
          <ProductPageContainer>
            <BackButton />
            <div>Carregando produto...</div>
          </ProductPageContainer>
        </Container>
      </ProductItemSection>
    )
  }

  const productInCart = isInCart(product.id)

  return (
    <ProductItemSection>
      <Container>
        <ProductPageContainer>
          <BackButton />
          <ProductPageContent>
            <ProductImageContainer>
              <Image
                src={product.image || '/assets/images/placeholder.png'}
                alt={product.name || 'Produto'}
                width={600}
                height={600}
              />
            </ProductImageContainer>
            <ProductInfoContainer>
              <ProductInfoHeader>
                <CategoryLabel>{product.category}</CategoryLabel>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>{formatPrice(product.price)}</ProductPrice>
              </ProductInfoHeader>
              <ProductDescriptionWrapper>
                <h2>Descrição</h2>
                <p>{product?.description}</p>
              </ProductDescriptionWrapper>
              <Button onClick={handleAddToCart} disabled={isInCart(product.id)}>
                <Image
                  src="/assets/icons/cart.svg"
                  alt="Icone de carrinho de compra"
                  width={24}
                  height={24}
                />
                {productInCart ? 'Já no carrinho' : 'Adicionar'}
              </Button>
            </ProductInfoContainer>
          </ProductPageContent>
        </ProductPageContainer>
      </Container>
    </ProductItemSection>
  )
}
