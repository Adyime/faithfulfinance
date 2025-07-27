"use client"

import { CheckCircle, Home, ShieldCheck, Clock, Users, FileText, Calculator, Phone, Building, Landmark, FileCheck } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HomeLoan() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  }

  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-primary-dark to-gray-800 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container-custom text-center">
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Home Loan</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At Faithful Finance Service, we understand that owning a home is one of life's most 
              significant milestones. Our Home Loan offerings are designed to help you turn your dream 
              into reality.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        className="section-padding"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
              variants={fadeInUp}
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                Whether you're a first-time buyer, upgrading to a larger space, or investing in a 
                second home. With competitive interest rates, flexible tenure options, and personalized 
                support, we make the path to homeownership smooth, transparent, and stress‑free.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6 flex items-center">
                <CheckCircle className="text-primary-orange mr-3" size={32} />
                Key Benefits of Our Home Loans
              </h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                {[
                  "Competitive Interest Rates",
                  "Flexible Tenure Options",
                  "High Loan-to-Value (LTV)",
                  "Minimal Processing Time",
                  "Transparent Fees & Charges",
                  "Pre‑payment & Part‑payment Options",
                  "Dedicated Relationship Manager"
                ].map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    variants={fadeInUp}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <CheckCircle className="text-primary-orange flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Home Loan Checklist */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">Home Loan Checklist</h2>
              
              {/* Eligibility Criteria */}
              <motion.div 
                className="mb-8"
                variants={staggerContainer}
              >
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-4 flex items-center">
                  <CheckCircle className="text-primary-orange mr-3" size={24} />
                  Eligibility Criteria
                </h3>
                <motion.div 
                  className="space-y-2 ml-8"
                  variants={staggerContainer}
                >
                  <motion.div 
                    className="flex items-center space-x-2"
                    variants={fadeInUp}
                  >
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Age:</strong> 21-75 years</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-2"
                    variants={fadeInUp}
                  >
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Income:</strong> Salaried, Self-employed, Easy rental income, School, Cash Income, Professional</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-2"
                    variants={fadeInUp}
                  >
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Credit Score:</strong> CIBIL score of 650+ recommended</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* How to Apply */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">How to Apply for a Home Loan</h2>
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
              >
                {[
                  {
                    step: "1",
                    title: "Online Enquiry",
                    description: "Visit our website or call our toll‑free number to request a callback.",
                    icon: Phone
                  },
                  {
                    step: "2",
                    title: "Pre‑Qualification",
                    description: "Submit basic details (income, property value, tenure) for an instant eligibility estimate.",
                    icon: Calculator
                  },
                  {
                    step: "3",
                    title: "Document Submission",
                    description: "Upload or deliver your KYC and property documents through our secure portal.",
                    icon: FileText
                  },
                  {
                    step: "4",
                    title: "Loan Processing & Valuation",
                    description: "We verify your documents, order property valuation, and conduct legal due diligence.",
                    icon: FileCheck
                  },
                  {
                    step: "5",
                    title: "Sanction & Agreement",
                    description: "Receive a sanction letter outlining your loan amount, interest rate, and terms. Sign the loan agreement at our branch or via e‑sign facility.",
                    icon: ShieldCheck
                  },
                  {
                    step: "6",
                    title: "Disbursal",
                    description: "Funds are disbursed directly to the seller's account or builder's escrow, as per agreement.",
                    icon: CheckCircle
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-4"
                    variants={fadeInUp}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className="w-12 h-12 bg-primary-orange text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold text-primary-dark mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Property Types */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">Properties We Deal With</h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                {[
                  { name: "Khashra Khatoni", icon: FileText },
                  { name: "General Power of Attorney", icon: FileCheck },
                  { name: "Residential", icon: Home },
                  { name: "Commercial", icon: Building },
                  { name: "Industrial", icon: Building },
                  { name: "Land", icon: Landmark },
                  { name: "Tangible", icon: ShieldCheck },
                  { name: "Intangible", icon: FileText }
                ].map((property, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                    variants={scaleIn}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  >
                    <div className="w-10 h-10 bg-primary-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <property.icon className="text-primary-orange" size={20} />
                    </div>
                    <span className="text-gray-700 font-medium">{property.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Why Choose Faithful Finance Service */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">Why Choose Faithful Finance Service?</h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                {[
                  {
                    title: "Tailored Advice",
                    description: "We assess your financial profile to recommend the ideal loan product and tenure.",
                    icon: Calculator
                  },
                  {
                    title: "End‑to‑End Support",
                    description: "From paperwork to disbursal, our team guides you at every stage.",
                    icon: Users
                  },
                  {
                    title: "Unwavering Transparency",
                    description: "No surprises—every fee and charge is explained upfront.",
                    icon: ShieldCheck
                  },
                  {
                    title: "After‑Sales Service",
                    description: "Our relationship doesn't end at disbursal; we remain available for EMI management, part‑prepayment assistance, and any queries.",
                    icon: Clock
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-3"
                    variants={fadeInUp}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  >
                    <div className="w-10 h-10 bg-primary-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-primary-orange" size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary-dark mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="bg-gradient-to-r from-primary-orange to-orange-600 rounded-2xl p-8 text-white text-center"
              variants={scaleIn}
            >
              <h2 className="text-3xl font-heading font-bold mb-4">Ready to Own Your Dream Home?</h2>
              <p className="text-xl mb-6 opacity-90">
                Start your Home Loan application today and take the first step towards homeownership.
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp}>
                  <Link
                    href="/contact"
                    className="bg-white text-primary-orange hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                  >
                    Apply Now
                  </Link>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Link
                    href="/loan-eligibility"
                    className="border-2 border-white hover:bg-white hover:text-primary-orange font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                  >
                    Check Eligibility
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
} 