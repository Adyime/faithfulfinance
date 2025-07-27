import { CheckCircle, ShieldCheck, Heart, Car, Home, Users, FileText, Calculator, Phone, Star, Award } from "lucide-react"
import Link from "next/link"

export default function Insurance() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-gray-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Insurance</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At Faithful Finance Service, we believe financial planning is incomplete without 
            protection. Whether it's safeguarding your health, your family's future, or your valuable 
            assets—Insurance is the safety net that provides peace of mind and long-term security.
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
                We offer a wide range of insurance solutions, carefully curated to match your lifestyle, goals, and 
                budget. From health to life, motor to property—our expert team helps you choose the right plan with 
                the right coverage at the right price.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6 flex items-center">
                <CheckCircle className="text-primary-orange mr-3" size={32} />
                Key Benefits of Insurance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Financial Security for You & Your Family",
                  "Coverage for Life's Uncertainties",
                  "Wealth Preservation",
                  "Tax Benefits",
                  "Peace of Mind",
                  "Wide Range of Options"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary-orange flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance Checklist */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">Insurance Checklist</h2>
              
              {/* Types of Insurance */}
              <div>
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-4 flex items-center">
                  <CheckCircle className="text-primary-orange mr-3" size={24} />
                  Types of Insurance We Offer:
                </h3>
                <div className="space-y-6">
                  {/* Life Insurance */}
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-primary-dark mb-3 flex items-center">
                      <Heart className="text-primary-orange mr-2" size={20} />
                      1. Life Insurance
                    </h4>
                    <div className="ml-6 space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                        <span className="text-gray-700">Term Plans</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                        <span className="text-gray-700">Endowment Plans</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                        <span className="text-gray-700">ULIPs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                        <span className="text-gray-700">Whole Life Insurance</span>
                      </div>
                    </div>
                  </div>

                  {/* Health Insurance */}
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-primary-dark mb-3 flex items-center">
                      <ShieldCheck className="text-primary-orange mr-2" size={20} />
                      2. Health Insurance
                    </h4>
                    <div className="ml-6 space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                        <span className="text-gray-700">Individual Health Cover</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                        <span className="text-gray-700">Family Floater Plans</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                        <span className="text-gray-700">Critical Illness Cover</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                        <span className="text-gray-700">Top-up & Super Top-up Policies</span>
                      </div>
                    </div>
                  </div>

                  {/* Motor Insurance */}
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-primary-dark mb-3 flex items-center">
                      <Car className="text-primary-orange mr-2" size={20} />
                      3. Motor Insurance
                    </h4>
                    <div className="ml-6 space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                        <span className="text-gray-700">Two-Wheeler & Car Insurance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                        <span className="text-gray-700">Third-Party & Comprehensive Plans</span>
                      </div>
                    </div>
                  </div>

                  {/* Property & Asset Insurance */}
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-primary-dark mb-3 flex items-center">
                      <Home className="text-primary-orange mr-2" size={20} />
                      4. Property & Asset Insurance
                    </h4>
                    <div className="ml-6 space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                        <span className="text-gray-700">Home Insurance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                        <span className="text-gray-700">Fire & Theft Cover</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                        <span className="text-gray-700">Commercial Property Insurance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Apply */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">How to Apply for Insurance</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Consult Our Advisor",
                    description: "Share your goals—family protection, medical backup, asset cover—and we'll suggest the best plans.",
                    icon: Users
                  },
                  {
                    step: "2",
                    title: "Get Customized Quotes",
                    description: "Based on your profile, we provide plan comparisons from top insurers with transparent features and pricing.",
                    icon: Calculator
                  },
                  {
                    step: "3",
                    title: "Select the Right Plan",
                    description: "Choose your coverage amount, tenure, and premium frequency as per your needs.",
                    icon: CheckCircle
                  },
                  {
                    step: "4",
                    title: "Submit Documents & Proposal Form",
                    description: "Share the required documents and health details (if needed) for underwriting.",
                    icon: FileText
                  },
                  {
                    step: "5",
                    title: "Policy Issuance",
                    description: "Upon approval, receive your e-policy instantly or physical copy by courier. Start enjoying coverage from Day 1*.",
                    icon: ShieldCheck
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
                    title: "Multi-Insurer Access",
                    description: "Get quotes from top insurance companies under one roof.",
                    icon: Star
                  },
                  {
                    title: "Zero Hidden Clauses",
                    description: "Clear terms, transparent conditions, and honest advice.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Expert Assistance",
                    description: "Our advisors explain complex policies in simple words.",
                    icon: Users
                  },
                  {
                    title: "Claim Support",
                    description: "We stand by you not just at buying, but also during claim processing.",
                    icon: Award
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
              <h2 className="text-3xl font-heading font-bold mb-4">Ready for Complete Protection?</h2>
              <p className="text-xl mb-6 opacity-90">
                Start your insurance journey today and secure your future with the right coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-primary-orange hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Get Quote
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white hover:bg-white hover:text-primary-orange font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Consult Advisor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 