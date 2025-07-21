'use client'
import { useState, useEffect } from 'react'

export default function Trainings() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    training: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById('trainings')
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [])

  const trainings = [
    {
      icon: "🎓",
      title: "Digital Marketing Certification",
      description: "Comprehensive training program covering all aspects of digital marketing including SEO, social media, and content marketing.",
      color: "from-blue-500 to-purple-600",
      features: ["6-Week Program", "Hands-on Projects", "Industry Certification"]
    },
    {
      icon: "🔍",
      title: "SEO Masterclass",
      description: "Advanced SEO techniques training to help you master search engine optimization and improve website rankings.",
      color: "from-green-500 to-blue-600",
      features: ["Keyword Research", "Technical SEO", "Analytics"]
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description: "Learn to create effective social media strategies and campaigns for various platforms.",
      color: "from-purple-500 to-pink-600",
      features: ["Content Creation", "Ads Management", "Community Building"]
    },
    {
      icon: "📊",
      title: "Data Analytics Training",
      description: "Master data analysis tools and techniques to measure and optimize marketing performance.",
      color: "from-orange-500 to-red-600",
      features: ["Google Analytics", "Data Visualization", "ROI Measurement"]
    },
    {
      icon: "✍️",
      title: "Content Writing Workshop",
      description: "Develop professional writing skills for digital platforms and learn content strategy development.",
      color: "from-pink-500 to-purple-600",
      features: ["Copywriting", "SEO Writing", "Content Planning"]
    },
    {
      icon: "💰",
      title: "PPC Advertising Course",
      description: "Learn pay-per-click advertising strategies for Google Ads, Facebook Ads, and other platforms.",
      color: "from-cyan-500 to-blue-600",
      features: ["Campaign Setup", "Bid Management", "Conversion Tracking"]
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        training: '',
        message: ''
      })
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="trainings" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-700">🎯 Our Programs</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Trainings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elevate your skills with our industry-leading training programs designed for digital professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trainings.map((training, index) => (
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
              
              {/* Training Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${training.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {training.icon}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
              </div>

              {/* Training Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {training.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {training.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {training.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={`flex items-center text-sm text-gray-500 transform transition-all duration-300 ${
                      hoveredIndex === index ? 'translate-x-2' : ''
                    }`}
                    style={{ transitionDelay: `${featureIndex * 100}ms` }}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${training.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
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

      {/* Registration Form Section */}
      {/* Registration Form Section */}
<div className={`max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-1000 ${
  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
}`}>
  <div className="md:flex">
    {/* Form Header */}
    <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-purple-600 p-8 md:p-12 text-white flex flex-col justify-center">
      <h3 className="text-2xl font-bold mb-4">Register Your Interest</h3>
      <p className="text-blue-100 leading-relaxed">
        Let us know which training you're interested in and we'll get back to you with more details.
      </p>
      <div className="mt-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm">Personalized guidance</span>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm">Early bird discounts</span>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm">Limited seats available</span>
        </div>
      </div>
    </div>
    
    {/* Form Content */}
    <div className="md:w-2/3 p-8 md:p-12">
      {submitSuccess ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">We've received your interest and will contact you shortly.</p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Submit Another Response
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input

                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="+91 8668903099"
              />
            </div>
            <div>
              <label htmlFor="training" className="block text-sm font-medium text-gray-700 mb-1">Interested Training</label>
              <select
                id="training"
                name="training"
                value={formData.training}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none"
              >
                <option value="">Select a training</option>
                {trainings.map((training, index) => (
                  <option key={index} value={training.title}>{training.title}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Tell us about your expectations or questions..."
            ></textarea>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-gradient-to-r text-gray-600 from-blue-600 to-purple-600  rounded-lg hover:opacity-90 transition-opacity flex items-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Submit
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
            <p className="ml-4 text-sm text-gray-500">
              We'll never share your details without your permission.
            </p>
          </div>
        </form>
      )}
    </div>
  </div>
</div>
      </div>
    </section>
  )
}