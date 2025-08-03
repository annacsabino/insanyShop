'use client'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: calc(1120px + 3rem);
  padding: 0 1.5rem;
  margin: 0 auto;
`

export const TitleSection = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.dark};
`
