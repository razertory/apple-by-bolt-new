import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Shop and Learn</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-primary">Store</Link></li>
              <li><Link href="/products/mac" className="hover:text-primary">Mac</Link></li>
              <li><Link href="/products/ipad" className="hover:text-primary">iPad</Link></li>
              <li><Link href="/products/iphone" className="hover:text-primary">iPhone</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/apple-music" className="hover:text-primary">Apple Music</Link></li>
              <li><Link href="/services/apple-tv-plus" className="hover:text-primary">Apple TV+</Link></li>
              <li><Link href="/services/icloud" className="hover:text-primary">iCloud</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Apple Store</h3>
            <ul className="space-y-2">
              <li><Link href="/find-a-store" className="hover:text-primary">Find a Store</Link></li>
              <li><Link href="/genius-bar" className="hover:text-primary">Genius Bar</Link></li>
              <li><Link href="/today-at-apple" className="hover:text-primary">Today at Apple</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About Apple</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary">Newsroom</Link></li>
              <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link href="/investors" className="hover:text-primary">Investors</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AppleStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer