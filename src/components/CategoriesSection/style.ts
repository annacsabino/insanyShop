'use client'

import styled from 'styled-components'

export const CategoriesSectionWrapper = styled.section`
  padding-bottom: 10.5rem;
`

export const CategoryCardWrapper = styled.div`
  margin-top: 2.12rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
`

export const CategoryCardItemWrapper = styled.div`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColorCategory};
  background-color: ${({ theme }) => theme.colors.white};

  h3 {
    font-size: 1rem;
  }
`
