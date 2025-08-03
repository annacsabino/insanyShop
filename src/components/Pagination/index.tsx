import Image from 'next/image'

import { PaginationContainer, PaginationList, PagintionButton } from './style'

export function Pagination() {
  return (
    <PaginationContainer>
      <PaginationList>
        <PagintionButton>
          <a href="">
            <Image
              src="/assets/icons/arrow-left.svg"
              alt="Icone de uma setinha virada para esquerda"
              width={24}
              height={24}
            />
          </a>
        </PagintionButton>
        <PagintionButton isActive>
          <a href="">1</a>
        </PagintionButton>
        <PagintionButton>
          <a href="">2</a>
        </PagintionButton>
        <PagintionButton>
          <a href="">3</a>
        </PagintionButton>
        <PagintionButton>
          <a href="">4</a>
        </PagintionButton>
        <PagintionButton>
          <a href="">
            <Image
              src="/assets/icons/arrow-right.svg"
              alt="Icone de uma setinha virada para esquerda"
              width={24}
              height={24}
            />
          </a>
        </PagintionButton>
      </PaginationList>
    </PaginationContainer>
  )
}
