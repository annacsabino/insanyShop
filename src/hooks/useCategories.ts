'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { api } from '@/api'
import { CategoriesType } from '@/types/categories'

export function useCategories() {
  const [categories, setCategories] = useState<CategoriesType[]>([])

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get('/categories')
      setCategories(response.data.categories)
    }
    fetchCategories()
  }, [])

  return { categories, setCategories }
}

export function useCategory() {
  const params = useParams()
  const categoryId = params.id as string
  const [category, setCategory] = useState<CategoriesType | null>(null)

  useEffect(() => {
    async function fetchCategory() {
      const response = await api.get('/categories')
      const foundCategory = response.data.categories.find(
        (item: CategoriesType) => item.id === categoryId
      )
      setCategory(foundCategory || null)
    }

    if (categoryId) {
      fetchCategory()
    }
  }, [categoryId])

  return { category, categoryId, setCategory }
}

export function useFilters() {
  const [sortBy, setSortBy] = useState('newest')
  const [selectedCategory, setSelectedCategory] = useState('')

  return {
    sortBy,
    setSortBy,
    selectedCategory,
    setSelectedCategory
  }
}
