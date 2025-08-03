'use client'

import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 356px;
  border: 1px solid #dddddd;
  border-radius: 1.19rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -6px 8px 20.4px 0 rgba(0, 0, 0, 0.04);

Colors
Hex
Hex

Background colors

#FFFFFF

`

export const ProductContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.94rem;
  padding: 0.75rem 1.31rem 1.75rem;
`

export const TagProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
  font-size: 0.875rem;
`

export const StarRatingContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  gap: 0.25rem;
`

export const TitleProductCard = styled.h2`
  font-size: 0.875rem;
  font-weight: 700;
`
export const DescritionProductCard = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 150%;
  margin-top: 0.31rem;
`

export const PriceCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
`

export const PriceProductCard = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1b9847;
`
