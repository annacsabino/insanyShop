import { PaginationContainer, PaginationList, PagintionButton } from './style'

export function Pagination() {
  return (
    <PaginationContainer>
      <PaginationList>
        <PagintionButton>
          <a href="">{'<'}</a>
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
          <a href="">{'>'}</a>
        </PagintionButton>
      </PaginationList>
    </PaginationContainer>
  )
}
