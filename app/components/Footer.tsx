import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Faithful Finance Logo" width={40} height={40} className="rounded-full" />
              {/* <span className="text-xl font-heading font-bold">FinanceHub</span> */}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted financial partner providing comprehensive loan solutions with competitive rates and
              exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/emi-calculator" className="text-gray-300 hover:text-primary-orange transition-colors">
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/loan-eligibility" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Loan Eligibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Personal Loans</span>
              </li>
              <li>
                <span className="text-gray-300">Home Loans</span>
              </li>
              <li>
                <span className="text-gray-300">Insurance</span>
              </li>
              <li>
                <span className="text-gray-300">Business Loans</span>
              </li>
              <li>
                <span className="text-gray-300">Loan Against Property</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-orange" />
                <span className="text-gray-300 text-sm">123 Finance Street, Business District, City 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-orange" />
                <span className="text-gray-300 text-sm">9310591708</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-orange" />
                <span className="text-gray-300 text-sm">faithfulfinance2020@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Faithful Finance. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
