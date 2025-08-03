'use client'

import styled from 'styled-components'

export const ProductSectionWrapper = styled.section`
  padding-bottom: 6.19rem;
`

export const ProductsWrapper = styled.div`
  display: grid;
  margin-top: 2.94rem;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.63rem;

  @media (max-width: 856px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
