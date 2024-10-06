"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

// Mock product data (replace with actual API call to Medusa.js)
const mockProducts = {
  'iphone-13-pro': {
    name: 'iPhone 13 Pro',
    price: 999,
    description: 'A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world's fastest smartphone chip. Exceptional durability. And a huge leap in battery life.',
    image: 'https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  'macbook-air': {
    name: 'MacBook Air',
    price: 999,
    description: 'Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  'ipad-pro': {
    name: 'iPad Pro',
    price: 799,
    description: 'The ultimate iPad experience. Now with the Apple M1 chip, 5G cellular, and a stunning Liquid Retina XDR display. The most powerful iPad ever delivers a next-level experience for creatives and professionals.',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  }
}

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProduct(mockProducts[id])
      setLoading(false)
    }, 1000)
  }, [id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="w-full h-[400px]" />
          <div>
            <Skeleton className="w-3/4 h-8 mb-4" />
            <Skeleton className="w-1/4 h-6 mb-4" />
            <Skeleton className="w-full h-24 mb-4" />
            <Skeleton className="w-1/3 h-10" />
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image src={product.image} alt={product.name} width={500} height={500} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price}</p>
          <p className="text-muted-foreground mb-6">{product.description}</p>
          <Button size="lg">Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}