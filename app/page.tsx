import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to AppleStore</h1>
        <p className="text-xl mb-8">Discover the latest in innovative technology</p>
        <Link href="/products">
          <Button size="lg">Shop Now</Button>
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-card rounded-lg overflow-hidden shadow-lg">
          <Image src="https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="iPhone" width={500} height={300} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">iPhone 13 Pro</h2>
            <p className="text-muted-foreground mb-4">Oh. So. Pro.</p>
            <Link href="/products/iphone-13-pro">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
        <div className="bg-card rounded-lg overflow-hidden shadow-lg">
          <Image src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="MacBook" width={500} height={300} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">MacBook Air</h2>
            <p className="text-muted-foreground mb-4">Power. It's in the Air.</p>
            <Link href="/products/macbook-air">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
        <div className="bg-card rounded-lg overflow-hidden shadow-lg">
          <Image src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="iPad" width={500} height={300} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">iPad Pro</h2>
            <p className="text-muted-foreground mb-4">Supercharged by M1.</p>
            <Link href="/products/ipad-pro">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Choose AppleStore?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-muted-foreground">Cutting-edge technology at your fingertips</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-muted-foreground">Premium products built to last</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-muted-foreground">Expert assistance whenever you need it</p>
          </div>
        </div>
      </section>
    </div>
  )
}