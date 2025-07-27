import { CheckCircle, Building, ShieldCheck, Clock, Users, FileText, Calculator, Phone, Briefcase, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function BusinessLoan() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-gray-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Business Loan</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At Faithful Finance Service, we understand that every business—big or small—needs 
            timely financial support to grow, expand, or manage operations smoothly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                Whether you're launching a new venture, expanding your infrastructure, purchasing equipment, or managing 
                cash flow, our Business Loans are tailored to meet your exact needs—fast, flexible, and hassle-free.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6 flex items-center">
                <CheckCircle className="text-primary-orange mr-3" size={32} />
                Key Benefits of Our Business Loan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Quick Approval & Disbursal",
                  "Collateral-Free Options",
                  "Flexible Loan Amounts",
                  "Customizable Repayment Tenure",
                  "Minimal Documentation",
                  "Transparent Process",
                  "Dedicated Loan Expert"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary-orange flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Loan Checklist */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">Business Loan Checklist</h2>
              
              {/* Eligibility Criteria */}
              <div>
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-4 flex items-center">
                  <CheckCircle className="text-primary-orange mr-3" size={24} />
                  Eligibility Criteria
                </h3>
                <div className="space-y-2 ml-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Age:</strong> 21–75 years</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Business Age:</strong> Minimum 3 year of operational history</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Annual Turnover:</strong> ₹1cr or more</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Credit Score:</strong> Preferably 700+</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Business Type:</strong> Sole Proprietorship, Partnership, Pvt. Ltd., or LLP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Apply */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">How to Apply for a Business Loan</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Initial Enquiry",
                    description: "Fill out a simple form on our website or speak to our financial advisor.",
                    icon: Phone
                  },
                  {
                    step: "2",
                    title: "Eligibility Assessment",
                    description: "Share basic details about your business and income—we'll give you a quick pre-qualification.",
                    icon: Calculator
                  },
                  {
                    step: "3",
                    title: "Document Submission",
                    description: "Upload scanned documents securely or submit them in-person at our office.",
                    icon: FileText
                  },
                  {
                    step: "4",
                    title: "Loan Processing & Credit Review",
                    description: "We assess your creditworthiness, business health, and documentation.",
                    icon: FileText
                  },
                  {
                    step: "5",
                    title: "Sanction Letter & Agreement",
                    description: "Once approved, receive a detailed sanction letter outlining the loan amount, interest rate, and repayment terms.",
                    icon: ShieldCheck
                  },
                  {
                    step: "6",
                    title: "Loan Disbursal",
                    description: "On agreement signing, the amount is transferred to your business account—ready for use.",
                    icon: CheckCircle
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-orange text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold text-primary-dark mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Faithful Finance Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">Why Choose Faithful Finance Service for Your Business Loan?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "We Support Dreams",
                    description: "Whether you're scaling up or starting fresh, we're here to finance your ambition.",
                    icon: TrendingUp
                  },
                  {
                    title: "Personalized Approach",
                    description: "Not just numbers—we understand your business goals before crafting a solution.",
                    icon: Users
                  },
                  {
                    title: "End-to-End Guidance",
                    description: "From eligibility to EMI planning, we stay with you at every step.",
                    icon: Clock
                  },
                  {
                    title: "Trust. Transparency. Timeliness.",
                    description: "That's what makes us a preferred financial partner for entrepreneurs.",
                    icon: ShieldCheck
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-primary-orange" size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary-dark mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-orange to-orange-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">Ready to Grow Your Business?</h2>
              <p className="text-xl mb-6 opacity-90">
                Start your Business Loan application today and take your business to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 