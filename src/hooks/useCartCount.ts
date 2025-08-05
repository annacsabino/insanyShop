'use client'

import { useState, useEffect } from 'react'

export function useCartCount() {
  const [cartCount, setCartCount] = useState(0)

  const updateCartCount = () => {
    const storedCart = localStorage.getItem('cart-product')
    if (storedCart) {
      const products = JSON.parse(storedCart)
      setCartCount(products.length)
    } else {
      setCartCount(0)
    }
  }

  useEffect(() => {
    updateCartCount()

    const handleCartUpdate = () => {
      updateCartCount()
    }

    window.addEventListener('cart-updated', handleCartUpdate)

    return () => {
      window.removeEventListener('cart-updated', handleCartUpdate)
    }
  }, [])

  return { cartCount, updateCartCount }
}
