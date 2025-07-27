"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Users, Calculator, CheckCircle, TrendingUp, CreditCard } from "lucide-react"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { motion } from "framer-motion"

export default function Home() {
  const services = [
    {
      title: "Personal Loans",
      description: "Quick and hassle-free personal loans with competitive interest rates.",
      icon: Users,
    },
    {
      title: "Home Loans",
      description: "Make your dream home a reality with our flexible home loan options.",
      icon: Shield,
    },
    {
      title: "Car Loans",
      description: "Drive your dream car today with our easy car financing solutions.",
      icon: TrendingUp,
    },
    {
      title: "Business Loans",
      description: "Fuel your business growth with our tailored business loan products.",
      icon: Calculator,
    },
  ]

  const features = [
    "Quick approval process",
    "Competitive interest rates",
    "Flexible repayment options",
    "Minimal documentation",
    "Expert financial advice",
    "24/7 customer support",
  ]

  const loanCards = [
    {
      title: "Personal Loans",
      description: "Up to ₹50 Lakhs with minimal documentation",
      link: "/services#personal-loans", // Made links unique
      icon: <Users size={24} />,
    },
    {
      title: "Home Loans",
      description: "Make your dream home a reality",
      link: "/services#home-loans", // Made links unique
      icon: <Shield size={24} />,
    },
    {
      title: "Business Loans",
      description: "Fuel your business growth",
      link: "/services#business-loans", // Made links unique
      icon: <TrendingUp size={24} />,
    },
  ]

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
      {/* 3D Hero Section */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        <BackgroundBeams />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20 pt-0">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-6xl font-semibold text-primary-dark leading-tight">
                  Your Trusted
                  <span className="text-primary-orange block">Financial</span>
                  Partner
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Grow Faster with Reliable Financial Solutions
                </p>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <Link href="/loan-eligibility" className="btn-primary rounded-xl text-lg px-8 py-4 text-center">
                  Check Eligibility
                  <ArrowRight className="ml-2 inline" size={24} />
                </Link>
                <Link href="/emi-calculator" className="btn-secondary rounded-xl text-lg px-8 py-4 text-center">
                  Calculate EMI
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8 pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-orange">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-orange">₹500Cr+</div>
                  <div className="text-sm text-gray-600">Loans Disbursed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-orange">24hrs</div>
                  <div className="text-sm text-gray-600">Quick Approval</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right 3D Card */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-primary-orange/25 border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem translateZ="50" className="text-xl font-bold text-primary-dark">
                    Instant Loan Approval
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-gray-600 text-sm max-w-sm mt-2">
                    Get pre-approved loans with competitive rates and flexible terms
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center">
                            <CreditCard className="text-white" size={24} />
                          </div>
                          <div>
                            <div className="font-semibold text-primary-dark">Personal Loan</div>
                            <div className="text-sm text-gray-500">Up to ₹50 Lakhs</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-orange">10.99%</div>
                          <div className="text-xs text-gray-500">Interest Rate</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Loan Amount</span>
                          <span className="font-semibold">₹5,00,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">EMI</span>
                          <span className="font-semibold text-primary-orange">₹23,456</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tenure</span>
                          <span className="font-semibold">24 months</span>
                        </div>
                      </div>
                    </div>
                  </CardItem>

                  <div className="flex justify-between items-center mt-6">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="/loan-eligibility"
                      className="px-4 py-2 rounded-xl text-xs font-normal text-primary-dark hover:text-primary-orange transition-colors"
                    >
                      Check Eligibility →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="/emi-calculator"
                      className="px-4 py-2 rounded-xl bg-primary-orange text-white text-xs font-bold hover:bg-primary-accent transition-colors"
                    >
                      Calculate EMI
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-1/4 left-10 w-4 h-4 bg-primary-orange/20 rounded-full animate-bounce"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 right-20 w-6 h-6 bg-primary-accent/20 rounded-full animate-pulse"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary-orange/30 rounded-full animate-ping"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        ></motion.div>
      </section>

      {/* Services Section with Hover Effects */}
      <motion.section 
        className="section-padding bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
              Our Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to meet your unique needs and goals.
            </p>
          </motion.div>

          <motion.div variants={scaleIn}>
            <HoverEffect items={loanCards} />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="section-padding"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-6">
                Why Choose Faithful Finance?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're committed to providing exceptional financial services with transparency, speed, and customer
                satisfaction at the core of everything we do.
              </p>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={staggerContainer}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    variants={fadeInUp}
                  >
                    <CheckCircle className="text-primary-orange flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              variants={scaleIn}
            >
              <Image
                src="/whychoose.png?height=400&width=500"
                alt="Financial consultation"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section-padding bg-primary-orange text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container-custom text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step towards your financial goals. Our experts are here to guide you through every step of
              the process.
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Link
              href="/contact"
              className="bg-white text-primary-orange hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Us Today
            </Link>
            <Link
              href="/emi-calculator"
              className="border-2 border-white hover:bg-white hover:text-primary-orange font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Calculate Your EMI
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
