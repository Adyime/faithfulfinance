"use client"

import { useState } from "react"
import { Calculator, PieChart } from "lucide-react"
import { motion } from "framer-motion"

export default function EMICalculator() {
  const [loanType, setSelectedLoan] = useState("personal")
  const [principal, setPrincipal] = useState(500000)
  const [rate, setRate] = useState(12)
  const [tenure, setTenure] = useState(24)
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null)

  const calculateEMI = () => {
    const monthlyRate = rate / (12 * 100)
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1)
    return Math.round(emi)
  }

  const totalAmount = calculateEMI() * tenure
  const totalInterest = totalAmount - principal
  const emi = calculateEMI()

  const loanTypes = [
    { id: "personal", name: "Personal Loan", rate: 9.5, description: "Starting from 9.50% fixed" },
    { id: "home", name: "Home Loan", rate: 7.3, description: "Starting from 7.30% onwards" },
    { id: "business", name: "Business Loan", rate: 13.0, description: "Starting from 13.00% onwards" },
    { id: "lap", name: "Loan Against Property", rate: 8.0, description: "Starting from 8.00% onwards" },
  ]

  // Donut chart calculations
  const principalPercentage = (principal / totalAmount) * 100
  const interestPercentage = (totalInterest / totalAmount) * 100
  const radius = 60
  const strokeWidth = 20
  const circumference = 2 * Math.PI * radius
  const principalStrokeDasharray = (principalPercentage / 100) * circumference
  const interestStrokeDasharray = (interestPercentage / 100) * circumference

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
      {/* Calculator Section */}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {loanTypes.map((loan) => (
                  <motion.button
                    key={loan.id}
                    onClick={() => setSelectedLoan(loan.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                      loanType === loan.id
                        ? "border-primary-orange bg-primary-orange/10 text-primary-orange"
                        : "border-gray-200 hover:border-primary-orange"
                    }`}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-semibold">{loan.name}</div>
                    <div className="text-xs opacity-75 mt-1">{loan.description}</div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg"
                variants={scaleIn}
              >
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-6">Personal Information</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Income (₹)</label>
                    <input
                      type="number"
                      value={principal}
                      onChange={(e) => setPrincipal(Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                      placeholder="Enter your monthly income"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Age (years)</label>
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                      placeholder="Enter your age"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Employment Type</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent">
                      <option value="">Select employment type</option>
                      <option value="salaried">Salaried</option>
                      <option value="self-employed">Self Employed</option>
                      <option value="business">Business Owner</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Credit Score</label>
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                      placeholder="Enter your credit score"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Existing EMI (₹)</label>
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                      placeholder="Enter existing EMI amount"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Requested Loan Amount (₹)</label>
                    <input
                      type="number"
                      value={principal}
                      onChange={(e) => setPrincipal(Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                      placeholder="Enter desired loan amount"
                    />
                  </div>

                  <motion.button
                    className="btn-primary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Check Eligibility
                  </motion.button>
                </div>
              </motion.div>

              {/* Results */}
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
              >
                {/* EMI Result */}
                <motion.div 
                  className="bg-gradient-to-br from-primary-orange to-primary-accent text-white rounded-2xl p-8"
                  variants={scaleIn}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <PieChart size={32} />
                    <h3 className="text-2xl font-heading font-bold">Your EMI</h3>
                  </div>
                  <div className="text-4xl font-heading font-bold mb-2">₹{emi.toLocaleString()}</div>
                  <p className="text-white/80">Monthly payment</p>
                </motion.div>

                {/* Donut Chart Breakdown */}
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-heading font-bold text-primary-dark mb-6">Loan Breakdown</h3>
                  <div className="flex items-start gap-6">
                    {/* Donut Chart */}
                    <div className="relative">
                      <svg width="140" height="140" className="transform -rotate-90">
                        {/* Background circle */}
                        <circle
                          cx="70"
                          cy="70"
                          r={radius}
                          fill="none"
                          stroke="#f3f4f6"
                          strokeWidth={strokeWidth}
                        />
                        
                        {/* Principal amount (orange) */}
                        <circle
                          cx="70"
                          cy="70"
                          r={radius}
                          fill="none"
                          stroke="#ff6b35"
                          strokeWidth={strokeWidth}
                          strokeDasharray={`${principalStrokeDasharray} ${circumference}`}
                          strokeLinecap="butt"
                          className="transition-all duration-200 cursor-pointer hover:stroke-orange-600"
                          onMouseEnter={() => setHoveredSegment('principal')}
                          onMouseLeave={() => setHoveredSegment(null)}
                        />
                        
                        {/* Interest amount (blue) */}
                        <circle
                          cx="70"
                          cy="70"
                          r={radius}
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth={strokeWidth}
                          strokeDasharray={`${interestStrokeDasharray} ${circumference}`}
                          strokeDashoffset={-principalStrokeDasharray}
                          strokeLinecap="butt"
                          className="transition-all duration-200 cursor-pointer hover:stroke-indigo-600"
                          onMouseEnter={() => setHoveredSegment('interest')}
                          onMouseLeave={() => setHoveredSegment(null)}
                        />
                      </svg>
                      
                      {/* Hover Tooltip */}
                      {hoveredSegment && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="bg-gray-800/90 text-white px-4 py-2 rounded-xl shadow-xl text-sm text-center backdrop-blur-sm">
                            <div className="font-medium">
                              {hoveredSegment === 'principal' ? 'Principal Amount' : 'Interest'}
                            </div>
                            <div className="font-bold">
                              ₹{hoveredSegment === 'principal' ? principal.toLocaleString() : totalInterest.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Legend and Values */}
                    <div className="flex-1 space-y-4">
                      {/* Principal Amount */}
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 bg-orange-500 rounded-sm mt-1 flex-shrink-0"></div>
                        <div>
                          <div className="text-sm text-gray-600 font-medium">Principal Amount</div>
                          <div className="text-lg font-bold text-gray-900">₹ {principal.toLocaleString()}</div>
                        </div>
                      </div>

                      {/* Interest */}
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 bg-indigo-500 rounded-sm mt-1 flex-shrink-0"></div>
                        <div>
                          <div className="text-sm text-gray-600 font-medium">Interest</div>
                          <div className="text-lg font-bold text-gray-900">₹ {totalInterest.toLocaleString()}</div>
                        </div>
                      </div>

                      {/* Total Payable */}
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 bg-gray-400 rounded-sm mt-1 flex-shrink-0"></div>
                        <div>
                          <div className="text-sm text-gray-600 font-medium">Total Payable</div>
                          <div className="text-lg font-bold text-gray-900">₹ {totalAmount.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}