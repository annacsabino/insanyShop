'use client'

import styled from 'styled-components'

export const CartPageSection = styled.section`
  padding: 1.66rem 0 4.19rem;
`

export const CartPageContainer = styled.main`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CartListContent = styled.div`
  margin-top: 1.94rem;
`

export const CartHeader = styled.div`
  margin-bottom: 1.44rem;
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textDarkInputs};
  }
  p {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.textDarkInputs};
  }
`

export const CartTotalAmount = styled.span`
  font-weight: 600;
`

export const CartItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

// Card product
export const CartItemCard = styled.div`
  width: 100%;
  height: 100%;
  max-height: 13rem;
  display: flex;
  gap: 1.94rem;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
`

export const CartImageItem = styled.div`
  width: 100%;
  max-width: 16rem;
  img {
    object-fit: cover;
    width: 100%;
  }
`

export const CartItemInfo = styled.div`
  padding: 1rem 1rem 1.5rem 0;
`
export const CartItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`

export const CartItemTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.textDarkInputs};
`

export const RemoveItemButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`

export const CartItemDescription = styled.p`
  display: -webkit-box;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textDarkInputs};
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const CartItemFooter = styled.footer`
  margin-top: 1.56rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const QuantitySelector = styled.div`
  min-width: 4.0625rem;
  padding: 0.5rem 0.25rem 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColorselectItems};
  background-color: ${({ theme }) => theme.colors.bgLight};
  color: ${({ theme }) => theme.colors.textDark};
`

export const CartItemPrice = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrice};
`

//Sidebar
export const CartSidebar = styled.aside`
  margin-top: 0.84rem;
  height: 100vh;
  max-height: 43.75rem;
  min-width: 22rem;
  padding: 1rem 1rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    height: auto;
    gap: 2rem;
  }
`
export const OrderSummaryCardWrapper = styled.div`
  margin-bottom: 2.5rem;
`

export const OrderSummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 150%;
    text-transform: uppercase;
    margin-bottom: 1.81rem;
  }
`
export const OrderSummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.textDarkInputs};
  &:last-child {
    margin-bottom: 0;
  }
`
export const OrderSummaryDivider = styled.div`
  height: 0.0625rem;
  background-color: ${({ theme }) => theme.colors.bgDivider};
  margin: 0.5rem 0;
`

export const OrderSummaryText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textDarkInputs};
`

export const OrderSummaryTotalText = styled(OrderSummaryText)`
  font-weight: 600;
`
export const HelpLinksList = styled.ul`
  list-style: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: 500;
  font-size: 0.875rem;
`
export const HelpLinksItem = styled.li`
  text-decoration: underline;
  margin-bottom: 0.75rem;
  &:last-child {
    margin-bottom: 0;
  }
`
