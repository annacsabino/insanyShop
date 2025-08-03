import { Button } from '@/components/Button'
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
import { Container } from '@/styles/patterns'
import { BackButton } from '@/components/BackButton'

export default function ProductPage() {
  return (
    <ProductItemSection>
      <Container>
        <ProductPageContainer>
          <BackButton />
          <ProductPageContent>
            <ProductImageContainer>
              <Image
                src="/assets/images/product.png"
                alt="Foto do produto"
                width={600}
                height={600}
              />
            </ProductImageContainer>
            <ProductInfoContainer>
              <ProductInfoHeader>
                <CategoryLabel>Casa e Decoração</CategoryLabel>
                <ProductTitle>Sofá 3 Lugares Retrátil</ProductTitle>
                <ProductPrice>R$ 1.899,99</ProductPrice>
              </ProductInfoHeader>
              <ProductDescriptionWrapper>
                <h2>Descrição</h2>
                <p>
                  Sofá confortável com assento retrátil e reclinável,
                  revestimento em tecido suede e estrutura de madeira maciça.
                </p>
              </ProductDescriptionWrapper>
              <Button>
                <Image
                  src="/assets/icons/cart.svg"
                  alt="Icone de carrinho de compra"
                  width={24}
                  height={24}
                />
                Adicionar
              </Button>
            </ProductInfoContainer>
          </ProductPageContent>
        </ProductPageContainer>
      </Container>
    </ProductItemSection>
  )
}
