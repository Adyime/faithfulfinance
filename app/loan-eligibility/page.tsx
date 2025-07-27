"use client"

import { useState } from "react"
import { CheckCircle, AlertCircle, User, Building, Home, Car, Briefcase, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function LoanEligibility() {
  const [selectedLoan, setSelectedLoan] = useState("personal")
  const [formData, setFormData] = useState({
    monthlyIncome: "",
    age: "",
    employmentType: "",
    creditScore: "",
    existingEMI: "",
    loanAmount: "",
  })
  const [result, setResult] = useState<any>(null)

  const loanTypes = [
    { id: "personal", name: "Personal Loan", icon: User },
    { id: "home", name: "Home Loan", icon: Home },
    { id: "business", name: "Business Loan", icon: Building },
    { id: "lap", name: "Loan Against Property", icon: Building },
    { id: "insurance", name: "Insurance", icon: ShieldCheck },
  ]

  const eligibilityCriteria = {
    personal: {
      age: "21 to 58 years (salaried); up to 65 years (self-employed)",
      income: "Minimum ₹20,000/month",
      employment: "Salaried: 6-12 months in current job | Self-Employed: 2 years business continuity",
      creditScore: "Ideally 700+",
      documents: "KYC, Income proof, Bank statements"
    },
    home: {
      age: "21-75 years",
      income: "Salaried, Self-employed, Easy rental income, School, Cash Income, Professional",
      employment: "Stable income source",
      creditScore: "CIBIL score of 650+ recommended",
      documents: "KYC, Income proof, Property documents"
    },
    business: {
      age: "21–75 years",
      income: "Annual Turnover: ₹1cr or more",
      employment: "Business Age: Minimum 3 years of operational history",
      creditScore: "Preferably 700+",
      documents: "Business documents, Financial statements, KYC"
    },
    lap: {
      age: "25 - 75 years",
      income: "Demonstrated repayment capacity through income, cash flow, or financials",
      employment: "Salaried / Self-employed professionals or business owners",
      creditScore: "Good credit history",
      documents: "Property papers, KYC, Income documents"
    },
    insurance: {
      age: "18 - 65 years (varies by plan)",
      income: "No minimum income requirement",
      employment: "Any employment status",
      creditScore: "Not required for most plans",
      documents: "KYC documents, Health declaration (for health insurance)"
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateEligibility = () => {
    const income = Number(formData.monthlyIncome)
    const age = Number(formData.age)
    const creditScore = Number(formData.creditScore)
    const existingEMI = Number(formData.existingEMI)
    const requestedAmount = Number(formData.loanAmount)

    // Simple eligibility logic
    let eligible = true
    let maxAmount = 0
    const reasons = []

    // Age check
    if (age < 21 || age > 65) {
      eligible = false
      reasons.push("Age should be between 21-65 years")
    }

    // Credit score check
    if (creditScore < 650) {
      eligible = false
      reasons.push("Credit score should be 650 or above")
    }

    // Income and EMI ratio
    const availableIncome = income - existingEMI
    const maxEMI = availableIncome * 0.5 // 50% of available income

    if (selectedLoan === "personal") {
      maxAmount = Math.min(income * 24, 5000000) // 24x income or 50L max
    } else if (selectedLoan === "home") {
      maxAmount = Math.min(income * 60, 10000000) // 60x income or 1Cr max
    } else if (selectedLoan === "business") {
      maxAmount = Math.min(income * 48, 5000000) // 48x income or 50L max
    } else if (selectedLoan === "lap") {
      maxAmount = Math.min(income * 72, 50000000) // 72x income or 5Cr max for LAP
    } else if (selectedLoan === "insurance") {
      maxAmount = 0 // Insurance doesn't have loan amount, it's premium based
    } else {
      maxAmount = Math.min(income * 48, 5000000) // 48x income or 50L max
    }

    if (requestedAmount > maxAmount) {
      eligible = false
      reasons.push(`Maximum eligible amount is ₹${maxAmount.toLocaleString()}`)
    }

    setResult({
      eligible,
      maxAmount,
      maxEMI: Math.round(maxEMI),
      reasons,
      approvalChance: eligible ? (creditScore > 750 ? 95 : 80) : 0,
    })
  }

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
      {/* Eligibility Checker */}
      <motion.section 
        className="section-padding"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Loan Type Selection */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-heading font-bold text-primary-dark mb-6">Select Loan Type</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {loanTypes.map((loan) => (
                  <motion.button
                    key={loan.id}
                    onClick={() => setSelectedLoan(loan.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      selectedLoan === loan.id
                        ? "border-primary-orange bg-primary-orange/10 text-primary-orange"
                        : "border-gray-200 hover:border-primary-orange"
                    }`}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <loan.icon className="mx-auto mb-2" size={32} />
                    <div className="text-sm font-semibold">{loan.name}</div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Eligibility Criteria Display */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6 flex items-center">
                <CheckCircle className="text-primary-orange mr-3" size={28} />
                {selectedLoan === "insurance" ? "Insurance Requirements" : `Eligibility Criteria for ${loanTypes.find(loan => loan.id === selectedLoan)?.name}`}
              </h2>
              {selectedLoan === "insurance" ? (
                <motion.div 
                  className="space-y-6"
                  variants={staggerContainer}
                >
                  <motion.div 
                    className="bg-blue-50 border border-blue-200 rounded-xl p-6"
                    variants={scaleIn}
                  >
                    <h3 className="text-lg font-heading font-semibold text-primary-dark mb-4">Insurance Plans Available:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                          <span className="text-sm font-medium">Life Insurance</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                          <span className="text-sm font-medium">Health Insurance</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                          <span className="text-sm font-medium">Motor Insurance</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                          <span className="text-sm font-medium">Property Insurance</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                          <span className="text-sm font-medium">Commercial Insurance</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                          <span className="text-sm font-medium">Travel Insurance</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                  >
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-sm font-semibold text-gray-700">Age:</span>
                          <span className="text-sm text-gray-600 ml-2">{eligibilityCriteria[selectedLoan as keyof typeof eligibilityCriteria]?.age}</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-sm font-semibold text-gray-700">Income:</span>
                          <span className="text-sm text-gray-600 ml-2">{eligibilityCriteria[selectedLoan as keyof typeof eligibilityCriteria]?.income}</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-sm font-semibold text-gray-700">Employment:</span>
                          <span className="text-sm text-gray-600 ml-2">{eligibilityCriteria[selectedLoan as keyof typeof eligibilityCriteria]?.employment}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-sm font-semibold text-gray-700">Credit Score:</span>
                          <span className="text-sm text-gray-600 ml-2">{eligibilityCriteria[selectedLoan as keyof typeof eligibilityCriteria]?.creditScore}</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-sm font-semibold text-gray-700">Documents:</span>
                          <span className="text-sm text-gray-600 ml-2">{eligibilityCriteria[selectedLoan as keyof typeof eligibilityCriteria]?.documents}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={staggerContainer}
                >
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Age:</span>
                        <span className="text-sm text-gray-600 ml-2">{eligibilityCriteria[selectedLoan as keyof typeof eligibilityCriteria]?.age}</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Income:</span>
                        <span className="text-sm text-gray-600 ml-2">{eligibilityCriteria[selectedLoan as keyof typeof eligibilityCriteria]?.income}</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Employment:</span>
                        <span className="text-sm text-gray-600 ml-2">{eligibilityCriteria[selectedLoan as keyof typeof eligibilityCriteria]?.employment}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Credit Score:</span>
                        <span className="text-sm text-gray-600 ml-2">{eligibilityCriteria[selectedLoan as keyof typeof eligibilityCriteria]?.creditScore}</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Documents:</span>
                        <span className="text-sm text-gray-600 ml-2">{eligibilityCriteria[selectedLoan as keyof typeof eligibilityCriteria]?.documents}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
