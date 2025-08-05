import Image from 'next/image'

import { PaginationContainer, PaginationList, PagintionButton } from './style'

interface PaginationProps {
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  onPageChange
}: PaginationProps) {
  const createPages = (total: number) => {
    const pages = []
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
    return pages
  }

  return (
    <PaginationContainer>
      <PaginationList>
        <PagintionButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!hasPreviousPage}
        >
          <Image
            src="/assets/icons/arrow-left.svg"
            alt="Icone de uma setinha virada para esquerda"
            width={24}
            height={24}
          />
        </PagintionButton>
        {createPages(totalPages).map((page) => (
          <PagintionButton
            key={page}
            $isActive={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PagintionButton>
        ))}
        <PagintionButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!hasNextPage}
        >
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="Icone de uma setinha virada para esquerda"
            width={24}
            height={24}
          />
        </PagintionButton>
      </PaginationList>
    </PaginationContainer>
  )
}
