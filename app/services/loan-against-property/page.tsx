import { CheckCircle, Building, ShieldCheck, Clock, Users, FileText, Calculator, Phone } from "lucide-react"
import Link from "next/link"

export default function LoanAgainstProperty() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-gray-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Loan Against Property</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At Faithful Finance Service, we help you leverage the hidden value of your property to 
            meet your financial goals—be it business expansion, funding your child's education, 
            covering medical emergencies, or consolidating debt.
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
                Our Loan Against Property (LAP) solutions are designed to offer high-value funding with longer repayment tenure and 
                attractive interest rates—all while keeping your property ownership intact.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6 flex items-center">
                <CheckCircle className="text-primary-orange mr-3" size={32} />
                Key Benefits of Loan Against Property
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "High Loan Amounts",
                  "Lower Interest Rates",
                  "Flexible Repayment Tenure",
                  "Retain Property Ownership",
                  "Use for Any Purpose",
                  "Quick Processing & Disbursal",
                  "Top-Up Facility Available"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary-orange flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Against Property Checklist */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">Loan Against Property Checklist</h2>
              
              {/* Eligible Property Types */}
              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-4 flex items-center">
                  <CheckCircle className="text-primary-orange mr-3" size={24} />
                  Eligible Property Types
                </h3>
                <div className="space-y-2 ml-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700">Residential (Self-occupied, rented, or vacant)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700">Commercial (Shops, offices)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700">Industrial or Mixed-use (Subject to valuation & title verification)</span>
                  </div>
                </div>
              </div>

              {/* Eligibility Criteria */}
              <div>
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-4 flex items-center">
                  <CheckCircle className="text-primary-orange mr-3" size={24} />
                  Eligibility Criteria
                </h3>
                <div className="space-y-2 ml-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Age:</strong> 25 - 75 years</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Employment Type:</strong> Salaried / Self-employed professionals or business owners</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Income Stability:</strong> Demonstrated repayment capacity through income, cash flow, or financials</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Ownership:</strong> Clear and marketable title of the property offered as collateral</span>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Apply */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">How to Apply for Loan Against Property</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Submit an Enquiry",
                    description: "Fill our online form or speak directly to our loan advisor to get started.",
                    icon: FileText
                  },
                  {
                    step: "2",
                    title: "Eligibility Check",
                    description: "Share key financial and property details—we'll assess your loan eligibility instantly.",
                    icon: Calculator
                  },
                  {
                    step: "3",
                    title: "Document Collection",
                    description: "Submit property papers and KYC/income documents via secure portal or in person.",
                    icon: FileText
                  },
                  {
                    step: "4",
                    title: "Property Valuation & Legal Verification",
                    description: "We conduct a detailed valuation and title check of your property.",
                    icon: Building
                  },
                  {
                    step: "5",
                    title: "Loan Sanction & Agreement",
                    description: "Once approved, you receive a sanction letter detailing your sanctioned amount, rate, and terms.",
                    icon: ShieldCheck
                  },
                  {
                    step: "6",
                    title: "Loan Disbursal",
                    description: "After signing the agreement, the approved amount is credited to your account—ready to use.",
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
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">Why Choose Faithful Finance Service?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Tailored Loan Solutions",
                    description: "We assess your needs and property value to customize the best LAP plan.",
                    icon: Calculator
                  },
                  {
                    title: "Complete Transparency",
                    description: "Clear breakdown of interest, charges, and terms—no hidden surprises.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Faster Approvals",
                    description: "With expert support, your loan moves faster from application to disbursal.",
                    icon: Clock
                  },
                  {
                    title: "Customer-Centric Support",
                    description: "From queries to EMI planning—we're with you at every step.",
                    icon: Users
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
              <h2 className="text-3xl font-heading font-bold mb-4">Ready to Apply?</h2>
              <p className="text-xl mb-6 opacity-90">
                Start your Loan Against Property application today and unlock the value of your property.
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