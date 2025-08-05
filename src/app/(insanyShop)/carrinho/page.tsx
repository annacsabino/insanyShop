'use client'

import Image from 'next/image'

import { BackButton } from '@/components/BackButton'
import { Button } from '@/components/Button'
import { Container } from '@/styles/patterns'

import { useEffect, useState } from 'react'
import {
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
  const [products, setProducts] = useState<ProductProps[]>(() => {
    const storedCart = localStorage.getItem('cart-product')
    return storedCart ? JSON.parse(storedCart) : []
  })

  const removeFromCart = (id: number) => {
    setProducts((prevProducts) => prevProducts.filter((item) => item.id !== id))
  }

  useEffect(() => {
    const data = JSON.stringify(products)
    localStorage.setItem('cart-product', data)
  }, [products])

  return (
    <CartPageSection>
      <Container>
        <CartPageContainer>
          <div>
            <BackButton />

            <CartListContent>
              <CartHeader>
                <h1>Seu carrinho</h1>
                <p>
                  Total (3 produtos) <CartTotalAmount>R$161,00</CartTotalAmount>
                </p>
              </CartHeader>
              <CartItemList>
                {products.map((item) => (
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
                        <CartItemPrice>R$ {item.price}</CartItemPrice>
                      </CartItemFooter>
                    </CartItemInfo>
                  </CartItemCard>
                ))}
              </CartItemList>
            </CartListContent>
          </div>
          <CartSidebar>
            <OrderSummaryCard>
              <h2>Resumo do pedido</h2>
              <OrderSummaryCardWrapper>
                <OrderSummaryLine>
                  <OrderSummaryText>Subtotal</OrderSummaryText>
                  <OrderSummaryText>R$ 161,00</OrderSummaryText>
                </OrderSummaryLine>
                <OrderSummaryLine>
                  <OrderSummaryText>Subtotal</OrderSummaryText>
                  <OrderSummaryText>R$ 161,00</OrderSummaryText>
                </OrderSummaryLine>
                <OrderSummaryDivider />
                <OrderSummaryLine>
                  <OrderSummaryTotalText>Total</OrderSummaryTotalText>
                  <OrderSummaryTotalText>R$ 161,00</OrderSummaryTotalText>
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
