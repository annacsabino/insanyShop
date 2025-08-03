import Image from 'next/image'

import { BackButton } from '@/components/BackButton'
import { Container } from '@/styles/patterns'
import { Button } from '@/components/Button'

import {
  CartPageContainer,
  CartPageSection,
  CartListContent,
  CartTotalAmount,
  CartHeader,
  CartItemCard,
  CartItemHeader,
  CartItemTitle,
  RemoveItemButton,
  CartItemDescription,
  CartItemFooter,
  QuantitySelector,
  CartItemPrice,
  CartItemInfo,
  CartItemList,
  CartSidebar,
  OrderSummaryCard,
  OrderSummaryLine,
  OrderSummaryText,
  OrderSummaryDivider,
  OrderSummaryTotalText,
  HelpLinksList,
  HelpLinksItem,
  CartImageItem,
  OrderSummaryCardWrapper
} from './style'

export default function CartPage() {
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
                <CartItemCard>
                  <CartImageItem>
                    <Image
                      src="/assets/images/placeholder-image.png"
                      alt="Foto do produto"
                      width={356}
                      height={270}
                    />
                  </CartImageItem>
                  <CartItemInfo>
                    <CartItemHeader>
                      <CartItemTitle>Camiseta Básica Premium</CartItemTitle>
                      <RemoveItemButton>
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
                        Aqui vem um texto descritivo do produto, esta caixa de
                        texto servirá apenas de exemplo para que simule algum
                        texto que venha a ser inserido nesse campo, descrevendo
                        tal produto.
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
                      <CartItemPrice>R$ 40,00</CartItemPrice>
                    </CartItemFooter>
                  </CartItemInfo>
                </CartItemCard>
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
