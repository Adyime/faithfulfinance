"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "EMI Calculator", href: "/emi-calculator" },
    { name: "Loan Eligibility", href: "/loan-eligibility" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Faithful Finance Logo" width={50} height={50} className="rounded-full" />
            {/* <span className="text-2xl font-heading font-bold text-primary-dark">FinanceHub</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-orange font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary rounded-xl">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-orange font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary w-fit">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
