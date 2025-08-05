'use client'

interface Product {
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

export function useCart() {
  const addToCart = (product: Product): boolean => {
    const storedCart = localStorage.getItem('cart-product')
    const currentCart: Product[] = storedCart ? JSON.parse(storedCart) : []

    // const existingProduct = currentCart.find((item) => item.id === product.id)

    // if (existingProduct) {
    //   return false
    // }

    const updatedCart = [...currentCart, product]
    localStorage.setItem('cart-product', JSON.stringify(updatedCart))
    window.dispatchEvent(new Event('cart-updated'))

    return true
  }

  const removeFromCart = (productId: number): boolean => {
    const storedCart = localStorage.getItem('cart-product')
    const currentCart: Product[] = storedCart ? JSON.parse(storedCart) : []

    const updatedCart = currentCart.filter((item) => item.id !== productId)
    localStorage.setItem('cart-product', JSON.stringify(updatedCart))
    window.dispatchEvent(new Event('cart-updated'))

    return true
  }

  const isInCart = (productId: number): boolean => {
    const storedCart = localStorage.getItem('cart-product')
    const currentCart: Product[] = storedCart ? JSON.parse(storedCart) : []
    return currentCart.some((item) => item.id === productId)
  }

  return {
    addToCart,
    removeFromCart,
    isInCart
  }
}
