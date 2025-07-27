import Image from "next/image"
import { Users, Award, Clock, Shield } from "lucide-react"

export default function About() {
  const stats = [
    { number: "10,000+", label: "Happy Customers", icon: Users },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "50+", label: "Awards Won", icon: Award },
    { number: "99.9%", label: "Success Rate", icon: Shield },
  ]

  const team = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      position: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Brown",
      position: "Senior Financial Advisor",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      {/* <section className="section-padding bg-gradient-to-br from-primary-dark to-gray-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About FinanceHub</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're a leading financial services company dedicated to helping individuals and businesses achieve their
              financial goals through innovative loan solutions and exceptional customer service.
            </p>
          </div>
        </div>
      </section> */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900">About Faithful Finance</h1>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              We're a leading financial services company dedicated to helping individuals and businesses achieve their
              financial goals through innovative loan solutions and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary-orange" size={32} />
                </div>
                <div className="text-3xl font-heading font-bold text-primary-dark mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Faithful Finance Service is a Noida based DSA that specializes in providing personalized 
                  loan solutions. At Faithful Finance Service, we believe that dreams deserve the right 
                  financial support. Founded with a vision to empower individuals and families through easy 
                  and accessible loan solutions, we have become a trusted name in the loan industry. With 
                  years of experience and a commitment to integrity, we specialize in providing Home Loans, 
                  Loan Against Property, Personal Loans, Business Loans, and Insurance tailored to 
                  meet diverse financial needs. 
                </p>
                <p>
                  Our approach is simple - understand your goals, assess your needs, and deliver loan 
                  solutions that fit you best. Whether you're planning to buy your dream home, expand your 
                  business, or unlock the potential of your property, our dedicated team is here to guide you 
                  every step of the way. 
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Our office"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower every individual and business with affordable, transparent, and tailor-made financial solutions. 
                We aim to bridge the gap between aspirations and achievements by offering loans that are 
                easy to understand, easy to apply for, and easy to manage.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become India's most trusted and customer-centric loan agency, known for 
                innovation, integrity, and excellence in financial services. We aim to be a catalyst for 
                growth—enabling our clients to achieve financial freedom and success with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of financial experts is dedicated to providing you with personalized service and
              expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-heading font-semibold text-primary-dark mb-2">{member.name}</h3>
                <p className="text-primary-orange font-medium">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
