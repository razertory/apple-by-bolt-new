"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Trash2 } from 'lucide-react'

// Mock cart data (replace with actual state management or API calls)
const mockCartItems = [
  { id: 1, name: 'iPhone 13 Pro', price: 999, quantity: 1, image: 'https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'MacBook Air', price: 999, quantity: 1, image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
]

export default function Cart() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    // Simulate fetching cart data
    setCartItems(mockCartItems)
  }, [])

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item
    ))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link href="/products" className="text-primary hover:underline">Continue shopping</Link></p>
      ) : (
        <>
          <div className="space-y-8">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center space-x-4">
                <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-md" />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-muted-foreground">${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                    className="w-16"
                  />
                  <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-2xl font-bold">Total: ${total}</p>
            <Button size="lg">Proceed to Checkout</Button>
          </div>
        </>
      )}
    </div>
  )
}