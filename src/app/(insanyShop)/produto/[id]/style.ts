'use client'

import styled from 'styled-components'

export const ProductItemSection = styled.section`
  padding: 1.66rem 0 5.56rem;
`

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.38rem;
`

export const ProductPageContent = styled.main`
  display: flex;
  gap: 2rem;
`

export const ProductImageContainer = styled.div`
  max-width: 40rem;
  width: 100%;
  height: 36.25rem;
  img {
    object-fit: cover;
    width: 100%;
    border-radius: 4px;
  }
`
export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProductInfoHeader = styled.header`
  display: flex;
  flex-direction: column;
`

export const CategoryLabel = styled.p`
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.textDarkInputs};
  text-transform: capitalize;
`

export const ProductTitle = styled.h1`
  margin-bottom: 0.25rem;
  font-size: 2rem;
  font-weight: 300;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.textDarkInputs};
`

export const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green};
`

export const ProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-size: 1rem;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textDark};
  }
  p {
    color: ${({ theme }) => theme.colors.textDarkInputs};
  }
`
