export type ProductType = {
  products: {
    id: number
    name: string
    description: string
    price: number
    image: string
    category: string
    stock: number
    rating: number
    brand: string
  }[]
  pagination: {
    currentPage: number
    totalPages: number
    totalProducts: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
}

export type SingleProductType = {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
  rating: number
  brand: string
}
