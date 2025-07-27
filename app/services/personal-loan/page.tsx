import { CheckCircle, User, ShieldCheck, Clock, Users, FileText, Calculator, Phone, Zap, Heart } from "lucide-react"
import Link from "next/link"

export default function PersonalLoan() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-gray-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Personal Loan</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            When life throws unexpected expenses your way—or when you're ready to turn plans into 
            reality—a Personal Loan from Faithful Finance Service gives you the financial freedom 
            you need, without the wait.
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
                Whether it's for medical emergencies, travel, home renovation, 
                marriage, or any personal need, our loans are fast, flexible, and require no collateral.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6 flex items-center">
                <CheckCircle className="text-primary-orange mr-3" size={32} />
                Key Benefits of Our Personal Loan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Unsecured Loan – No Collateral Required",
                  "Quick Approval & Fast Disbursal",
                  "Flexible Loan Amounts",
                  "Easy Repayment Tenure",
                  "Transparent Charges",
                  "Minimal Documentation",
                  "Top-Up Facility Available"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary-orange flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Loan Checklist */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">Personal Loan Checklist</h2>
              
              {/* Eligibility Criteria */}
              <div>
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-4 flex items-center">
                  <CheckCircle className="text-primary-orange mr-3" size={24} />
                  Eligibility Criteria
                </h3>
                <div className="space-y-2 ml-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Age:</strong> 21 to 58 years (salaried); up to 65 years (self-employed)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Income:</strong> Minimum ₹20,000/month</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Employment:</strong></span>
                  </div>
                  <div className="ml-6 space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Salaried: Minimum 6–12 months in current job</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Self-Employed: Minimum 2 years of business continuity</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700"><strong>Credit Score:</strong> Ideally 700</span>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Apply */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">How to Apply for a Personal Loan</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Send an Enquiry",
                    description: "Fill in your basic details online or speak with our loan advisor directly.",
                    icon: Phone
                  },
                  {
                    step: "2",
                    title: "Get Pre-Approved",
                    description: "We assess your profile and provide a quick estimate of your eligible loan amount and rate.",
                    icon: Calculator
                  },
                  {
                    step: "3",
                    title: "Submit Documents",
                    description: "Upload or hand over your KYC and income documents for verification.",
                    icon: FileText
                  },
                  {
                    step: "4",
                    title: "Loan Approval",
                    description: "Post verification, receive an approval letter outlining loan terms and EMIs.",
                    icon: ShieldCheck
                  },
                  {
                    step: "5",
                    title: "Sign & Disburse",
                    description: "On agreement signing, funds are credited to your bank account—ready for use.",
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

            {/* Why Faithful Finance Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">Why Faithful Finance Service?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Zero Hassle",
                    description: "No need for collateral, co-applicants, or long waiting periods.",
                    icon: Zap
                  },
                  {
                    title: "Customer First",
                    description: "A dedicated loan expert assists you from start to finish.",
                    icon: Heart
                  },
                  {
                    title: "Trusted Network",
                    description: "We work with top financial institutions to get you the best deal.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Safe & Transparent",
                    description: "Clear communication, fair practices, and no hidden surprises.",
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
              <h2 className="text-3xl font-heading font-bold mb-4">Ready for Financial Freedom?</h2>
              <p className="text-xl mb-6 opacity-90">
                Start your Personal Loan application today and get the funds you need without the wait.
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