"use client"

import { Home, Car, Building, Users, Briefcase, CheckCircle, ShieldCheck, Landmark } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Services() {
const services = [
  {
    title: "Home Loan",
    description: "At Faithful Finance Service, we offer competitive home loans with flexible tenure and personalized support to help you buy, upgrade, or invest in your dream home—hassle-free.",
    icon: Home,
    features: [
      "Interest Rate: From 7.30%",
      "Tenure: 10 to 30 years",
      "Loan Amount: ₹50L - ₹50Cr",
      "Flexible EMIs"
    ],
    rate: "7.30% onwards",
  },
  {
    title: "Business Loan",
    description: "At Faithful Finance Service, our Business Loans provide fast, flexible support to help you launch, expand, or manage operations—tailored to your needs with minimal hassle.",
    icon: Building,
    features: [
      "Interest Rate: From 13%",
      "Tenure: 3 to 5 years",
      "Loan Amount: ₹50L - ₹50Cr",
      "Working Capital & Expansion"
    ],
    rate: "13.00% onwards",
  },
  {
    title: "Personal Loan",
    description: "Faithful Finance Service offers quick, collateral-free Personal Loans to handle emergencies or fulfill dreams like travel, weddings, or home upgrades—flexible, fast, and hassle-free.",
    icon: Users,
    features: [
      "Interest Rate: 9.5%",
      "No Collateral Required",
      "Quick Disbursal",
      "Minimal Documentation"
    ],
    rate: "9.50% fixed",
  },
  {
    title: "Loan Against Property",
    description: "At Faithful Finance Service, our Loan Against Property helps you unlock your property's value for business, education, or emergencies—with high funding, long tenure, and attractive rates.",
    icon: Landmark, // Adjust to an appropriate icon
    features: [
      "Interest Rate: From 8%",
      "Tenure: Up to 20 years",
      "Loan Amount: ₹50L - ₹50Cr",
      "Secured with Your Property"
    ],
    rate: "8.00% onwards",
  },
  {
    title: "Insurance",
    description: "At Faithful Finance Service, we offer tailored insurance solutions to protect your health, family, and assets—ensuring peace of mind with the right coverage, expert guidance, and affordability.",
    icon: ShieldCheck, // Adjust to an appropriate icon
    features: [
      "Health & Life Plans",
      "Affordable Premiums",
      "Asset Coverage",
      "24/7 Claim Assistance"
    ],
    rate: "Custom plans available",
  },
];

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
        className="section-padding bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900">Our Financial Services</h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="section-padding"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-primary-orange" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-primary-dark mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="mb-4">
                      <span className="text-primary-orange font-semibold text-lg">Starting from {service.rate}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="text-primary-orange flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex space-x-3">
                      <Link href={
                        service.title === "Loan Against Property" ? "/services/loan-against-property" : 
                        service.title === "Home Loan" ? "/services/home-loan" : 
                        service.title === "Business Loan" ? "/services/business-loan" : 
                        service.title === "Personal Loan" ? "/services/personal-loan" : 
                        service.title === "Insurance" ? "/services/insurance" : 
                        "/loan-eligibility"
                      } className="btn-primary text-sm rounded-xl">
                        View More
                      </Link>
                      <Link href="/emi-calculator" className="btn-secondary text-sm rounded-xl">
                        Calculate EMI
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
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
              Simple Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your loan approved in just 4 easy steps with our streamlined process.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              { step: "1", title: "Apply Online", description: "Fill out our simple online application form" },
              { step: "2", title: "Document Upload", description: "Upload required documents securely" },
              { step: "3", title: "Quick Verification", description: "Our team verifies your application" },
              { step: "4", title: "Get Approved", description: "Receive funds in your account quickly" },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-dark mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Apply for a Loan?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start your loan application today and get instant pre-approval with competitive rates.
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
              Apply Now
            </Link>
            <Link
              href="/loan-eligibility"
              className="border-2 border-white hover:bg-white hover:text-primary-orange font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Check Eligibility
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
