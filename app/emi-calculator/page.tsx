"use client"

import { useState } from "react"
import { Calculator, PieChart } from "lucide-react"
import { motion } from "framer-motion"

export default function EMICalculator() {
  const [loanType, setLoanType] = useState("personal")
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">EMI Calculator</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Calculate your Equated Monthly Installment (EMI) for different types of loans and plan your finances better.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Calculator Section */}
      <motion.section 
        className="section-padding"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              variants={scaleIn}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Calculator className="text-primary-orange" size={32} />
                <h2 className="text-2xl font-heading font-bold text-primary-dark">Calculate Your EMI</h2>
              </div>

              <div className="space-y-6">
                {/* Loan Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Loan Type</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {loanTypes.map((type) => (
                      <motion.button
                        key={type.id}
                        onClick={() => {
                          setLoanType(type.id)
                          setRate(type.rate)
                        }}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                          loanType === type.id
                            ? "border-primary-orange bg-primary-orange/10 text-primary-orange"
                            : "border-gray-200 hover:border-primary-orange"
                        }`}
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="font-semibold">{type.name}</div>
                        <div className="text-xs opacity-75 mt-1">{type.description}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Principal Amount */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-gray-700">Loan Amount (₹)</label>
                    <input
                      type="number"
                      min="100000"
                      max="10000000"
                      step="50000"
                      value={principal}
                      onChange={(e) => setPrincipal(Number(e.target.value))}
                      className="w-32 px-3 py-2 bg-orange-50 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-gray-900 font-semibold text-sm"
                      placeholder="Amount"
                    />
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="50000"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span className="font-semibold text-primary-orange">₹{(principal / 100000).toFixed(1)}L</span>
                    <span>₹1Cr</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-gray-700">Interest Rate (% per annum)</label>
                    <input
                      type="number"
                      min="6"
                      max="20"
                      step="0.25"
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                      className="w-20 px-3 py-2 bg-orange-50 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-gray-900 font-semibold text-sm"
                      placeholder="Rate"
                    />
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="20"
                    step="0.25"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>6%</span>
                    <span className="font-semibold text-primary-orange">{rate}%</span>
                    <span>20%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-gray-700">Loan Tenure (months)</label>
                    <input
                      type="number"
                      min="6"
                      max="360"
                      step="6"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-24 px-3 py-2 bg-orange-50 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-gray-900 font-semibold text-sm"
                      placeholder="Months"
                    />
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="360"
                    step="6"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>6 months</span>
                    <span className="font-semibold text-primary-orange">
                      {tenure} months ({Math.round(tenure / 12)} years)
                    </span>
                    <span>30 years</span>
                  </div>
                </div>
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

              {/* Breakdown */}
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

              {/* Visual Breakdown */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-6">Payment Breakdown</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Principal</span>
                      <span className="font-semibold">{((principal / totalAmount) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-primary-orange h-3 rounded-full"
                        style={{ width: `${(principal / totalAmount) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Interest</span>
                      <span className="font-semibold">{((totalInterest / totalAmount) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-primary-accent h-3 rounded-full"
                        style={{ width: `${(totalInterest / totalAmount) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}