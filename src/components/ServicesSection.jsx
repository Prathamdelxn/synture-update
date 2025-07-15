'use client'
import { useState, useEffect } from 'react'

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById('services')
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: "📱",
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that drive engagement, increase conversions, and build lasting customer relationships across all platforms.",
      color: "from-blue-500 to-purple-600",
      features: ["Social Media", "Email Marketing", "Content Strategy"]
    },
    {
      icon: "🔍",
      title: "SEO Optimization",
      description: "Advanced SEO techniques to improve your search rankings, increase organic traffic, and dominate your competition in search results.",
      color: "from-green-500 to-blue-600",
      features: ["Keyword Research", "On-Page SEO", "Link Building"]
    },
    {
      icon: "💻",
      title: "Email Marketing",
      description: "Custom, responsive websites and web applications built with modern technologies to deliver exceptional user experiences.",
      color: "from-purple-500 to-pink-600",
      features: ["React/Next.js", "E-commerce", "Mobile Apps"]
    },
    {
      icon: "📊",
      title: "Online Reputation Marketing",
      description: "Data-driven insights and comprehensive reporting to track performance, measure ROI, and optimize your marketing efforts.",
      color: "from-orange-500 to-red-600",
      features: ["Google Analytics", "Custom Dashboards", "ROI Tracking"]
    },
    {
      icon: "🎨",
      title: "Brand Design",
      description: "Creative branding solutions that establish your unique identity and create memorable experiences for your audience.",
      color: "from-pink-500 to-purple-600",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"]
    },
    {
      icon: "💬",
      title: "Social Media Management",
      description: "Strategic social media campaigns that build communities, engage audiences, and drive meaningful business results.",
      color: "from-cyan-500 to-blue-600",
      features: ["Content Creation", "Community Management", "Ad Campaigns"]
    }
  ]

  return (
    <section id="services" className="py-20 px-10 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-700">✨ What We Offer</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100 ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>
              
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {service.icon}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r  rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={`flex items-center text-sm text-gray-500 transform transition-all duration-300 ${
                      hoveredIndex === index ? 'translate-x-2' : ''
                    }`}
                    style={{ transitionDelay: `${featureIndex * 100}ms` }}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
      
      </div>
    </section>
  )
}