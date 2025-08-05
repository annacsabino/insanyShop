'use client'

import Image from 'next/image'

import { BackButton } from '@/components/BackButton'
import { Button } from '@/components/Button'
import { Container } from '@/styles/themes/patterns'

import { useEffect, useState } from 'react'
import {
  CardListWrapper,
  CartHeader,
  CartImageItem,
  CartItemCard,
  CartItemDescription,
  CartItemFooter,
  CartItemHeader,
  CartItemInfo,
  CartItemList,
  CartItemPrice,
  CartItemTitle,
  CartListContent,
  CartPageContainer,
  CartPageSection,
  CartSidebar,
  CartTotalAmount,
  CleanCart,
  HelpLinksItem,
  HelpLinksList,
  OrderSummaryCard,
  OrderSummaryCardWrapper,
  OrderSummaryDivider,
  OrderSummaryLine,
  OrderSummaryText,
  OrderSummaryTotalText,
  QuantitySelector,
  RemoveItemButton
} from './style'

import { formatPrice } from '@/utils/formatPrice'

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

export default function CartPage() {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [isInitialized, setIsInitialized] = useState(false)
  useEffect(() => {
    const storedCart = localStorage.getItem('cart-product')
    if (storedCart) {
      setProducts(JSON.parse(storedCart))
    }
    setIsInitialized(true)
  }, [])

  const removeFromCart = (id: number) => {
    setProducts((prevProducts) => {
      const filtered = prevProducts.filter((item) => item.id !== id)
      setTimeout(() => {
        window.dispatchEvent(new Event('cart-updated'))
      }, 100)

      return filtered
    })
  }

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('cart-product', JSON.stringify(products))
    }
  }, [products, isInitialized])

  const quantityPoductCart = products.length
  const subtotal = products.reduce((total, product) => total + product.price, 0)
  const totalAmount = subtotal + 40

  return (
    <CartPageSection>
      <Container>
        <CartPageContainer>
          <CardListWrapper>
            <BackButton />

            <CartListContent>
              <CartHeader>
                <h1>Seu carrinho</h1>
                <p>
                  Total ({quantityPoductCart} produtos){' '}
                  <CartTotalAmount>{formatPrice(totalAmount)}</CartTotalAmount>
                </p>
              </CartHeader>
              <CartItemList>
                {products.length > 0 ? (
                  products.map((item) => (
                    <CartItemCard key={item.id}>
                      <CartImageItem>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={356}
                          height={270}
                        />
                      </CartImageItem>
                      <CartItemInfo>
                        <CartItemHeader>
                          <CartItemTitle>{item.name}</CartItemTitle>
                          <RemoveItemButton
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Image
                              src="/assets/icons/trash.svg"
                              alt="Lixeira"
                              width={24}
                              height={24}
                            />
                          </RemoveItemButton>
                        </CartItemHeader>
                        <div>
                          <CartItemDescription>
                            {item.description}
                          </CartItemDescription>
                        </div>
                        <CartItemFooter>
                          <QuantitySelector>
                            <p>1</p>
                            <Image
                              src="/assets/icons/arrow-down.svg"
                              alt="Icone de uma setinha virada para baixo"
                              width={24}
                              height={24}
                            />
                          </QuantitySelector>
                          <CartItemPrice>
                            {formatPrice(item.price)}
                          </CartItemPrice>
                        </CartItemFooter>
                      </CartItemInfo>
                    </CartItemCard>
                  ))
                ) : (
                  <CleanCart>Seu carrinho está vazio</CleanCart>
                )}
              </CartItemList>
            </CartListContent>
          </CardListWrapper>
          <CartSidebar>
            <OrderSummaryCard>
              <h2>Resumo do pedido</h2>
              <OrderSummaryCardWrapper>
                <OrderSummaryLine>
                  <OrderSummaryText>Subtotal</OrderSummaryText>
                  <OrderSummaryText>{formatPrice(subtotal)}</OrderSummaryText>
                </OrderSummaryLine>
                <OrderSummaryLine>
                  <OrderSummaryText>Entrega</OrderSummaryText>
                  <OrderSummaryText>R$ 40,00</OrderSummaryText>
                </OrderSummaryLine>
                <OrderSummaryDivider />
                <OrderSummaryLine>
                  <OrderSummaryTotalText>Total</OrderSummaryTotalText>
                  <OrderSummaryTotalText>
                    {formatPrice(totalAmount)}
                  </OrderSummaryTotalText>
                </OrderSummaryLine>
              </OrderSummaryCardWrapper>
              <Button variant="secondary">Finalizar compra</Button>
            </OrderSummaryCard>
            <div>
              <HelpLinksList>
                <HelpLinksItem>
                  <a href="">Ajuda</a>
                </HelpLinksItem>
                <HelpLinksItem>
                  <a href="">reembolsos</a>
                </HelpLinksItem>
                <HelpLinksItem>
                  <a href="">entregas e frete</a>
                </HelpLinksItem>
                <HelpLinksItem>
                  <a href="">trocas e devoluções</a>
                </HelpLinksItem>
              </HelpLinksList>
            </div>
          </CartSidebar>
        </CartPageContainer>
      </Container>
    </CartPageSection>
  )
}
