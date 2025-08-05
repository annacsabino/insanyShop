'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface SearchContextData {
  searchQuery: string
  handleSearchInput: (query: string) => void
  clearSearch: () => void
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchInput = (query: string) => {
    setSearchQuery(query)
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        handleSearchInput,
        clearSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => useContext(SearchContext)
