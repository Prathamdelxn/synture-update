'use client'

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, ChevronRight } from "lucide-react"

export default function CoursesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseInterest: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("courses-page")
    if (element) observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/course-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await res.json()

      if (result.success) {
        setIsSubmitted(true)
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          courseInterest: '', 
          message: '' 
        })
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      } else {
        alert('Failed to send inquiry. Please try again.')
      }
    } catch (error) {
      console.error('Submit error:', error)
      alert('Something went wrong.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const scrollToCategories = () => {
    const element = document.getElementById("course-categories")
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToInquiry = () => {
    const element = document.getElementById("course-inquiry")
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const courseCategories = [
    {
      icon: "🔧",
      title: "Development",
      color: "from-cyan-500 via-blue-500 to-indigo-500",
      shadowColor: "shadow-cyan-500/25",
      courses: [
        "Full Stack Web Development",
        "Frontend Development",
        "Backend Development",
        "Mobile App Development",
        "DevOps Engineering",
        "API Development"
      ]
    },
    {
      icon: "🎨",
      title: "UI/UX & Design",
      color: "from-emerald-500 via-green-500 to-teal-500",
      shadowColor: "shadow-emerald-500/25",
      courses: [
        "UI/UX Design Fundamentals",
        "Human-Centered Design",
        "Figma, Adobe XD, Sketch",
        "Design Systems & Prototyping",
        "Responsive Web Design",
        "Interaction Design"
      ]
    },
    {
      icon: "☁️",
      title: "Cloud Computing",
      color: "from-violet-500 via-purple-500 to-fuchsia-500",
      shadowColor: "shadow-violet-500/25",
      courses: [
        "AWS Cloud Practitioner",
        "AWS Solutions Architect",
        "Microsoft Azure Fundamentals",
        "Google Cloud Associate",
        "Cloud DevOps Engineer",
        "Infrastructure as Code"
      ]
    },
    {
      icon: "🔐",
      title: "Cybersecurity",
      color: "from-orange-500 via-amber-500 to-yellow-500",
      shadowColor: "shadow-orange-500/25",
      courses: [
        "Cybersecurity Fundamentals",
        "Ethical Hacking",
        "Network Security",
        "Penetration Testing",
        "CompTIA Security+",
        "SOC Analyst Training",
        "Threat Intelligence & Incident Response"
      ]
    },
    {
      icon: "📊",
      title: "Data Science & Analytics",
      color: "from-pink-500 via-rose-500 to-red-500",
      shadowColor: "shadow-pink-500/25",
      courses: [
        "Data Science with Python",
        "Machine Learning",
        "Deep Learning",
        "Data Visualization",
        "Big Data Analytics",
        "Data Engineering",
        "SQL & NoSQL Databases"
      ]
    },
    {
      icon: "🤖",
      title: "AI, ML & Blockchain",
      color: "from-blue-500 via-sky-500 to-cyan-500",
      shadowColor: "shadow-blue-500/25",
      courses: [
        "Artificial Intelligence",
        "Machine Learning Engineering",
        "Deep Learning with TensorFlow",
        "Natural Language Processing",
        "Blockchain Development",
        "Smart Contracts & dApps",
        "Cryptography & Web3"
      ]
    }
  ]

  return (
    <div id="courses-page" className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 px-10 relative z-10">
        <div className="container mx-auto px-6">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                🎓 Comprehensive Tech Courses
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight">
              Master{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  In-Demand Skills
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-lg blur opacity-20"></div>
              </span>
            </h1>
            <div className="max-w-6xl mx-auto mb-8">
              <p className="text-xl text-gray-600 mb-6 leading-relaxed font-light">
                <strong className="text-gray-900">Our Technology Courses</strong> are designed to equip you with practical, 
                industry-relevant skills across the most sought-after domains in tech.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed font-light">
                Transform your career with hands-on training, real-world projects, and mentorship from professionals at top tech companies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={scrollToCategories}
                className="group relative bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden hover:scale-105"
              >
                <span className="relative z-10">Browse All Courses</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <button 
                onClick={scrollToInquiry}
                className="group border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                  Speak With an Advisor
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Grid */}
      <section id="course-categories" className="py-24 px-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                Course Categories
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive training programs across all major technology domains
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseCategories.map((category, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden ${category.shadowColor} hover:-translate-y-4 hover:scale-[1.05] hover:rotate-1`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                ></div>
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg transition-all duration-500 group-hover:scale-125`}
                  >
                    {category.icon}
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.courses.map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        className="flex items-center text-sm text-gray-600 group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${100 + courseIndex * 50}ms` }}
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-2 group-hover:scale-150 transition-transform duration-300`}
                        ></div>
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div
                    className={`w-6 h-6 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}
                  >
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Benefits Section */}
      <section className="py-24 px-10 bg-gradient-to-br from-gray-50 via-cyan-50 to-blue-50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              Why Learn With{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                Our Platform?
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Experience the most effective way to gain practical, job-ready tech skills
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-8 hover:scale-110 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10 mb-6">
                <div className="text-6xl mb-4 transform group-hover:scale-150 transition-all duration-500">
                  👨‍💻
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-300">
                  100%
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                  Hands-On Projects
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Learn by building real-world applications and portfolio pieces
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
            </div>
            <div className="group relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-8 hover:scale-110 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10 mb-6">
                <div className="text-6xl mb-4 transform group-hover:scale-150 transition-all duration-500">
                  🧑‍🏫
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-300">
                  24/7
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                  Expert Mentorship
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Get guidance from industry professionals working at top companies
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
            </div>
            <div className="group relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-8 hover:scale-110 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10 mb-6">
                <div className="text-6xl mb-4 transform group-hover:scale-150 transition-all duration-500">
                  📜
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-300">
                  90%
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                  Certification Rate
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Earn industry-recognized certificates to boost your career
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
            </div>
            <div className="group relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-8 hover:scale-110 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10 mb-6">
                <div className="text-6xl mb-4 transform group-hover:scale-150 transition-all duration-500">
                  💼
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-300">
                  85%
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                  Career Outcomes
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Of graduates land tech jobs within 6 months of completing courses
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Inquiry Section */}
      <section id="course-inquiry" className="py-24 px-10 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Have Questions About Our Courses?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Speak with our learning advisors to find the perfect program for your goals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white text-black border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white text-black border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white text-black border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-700 mb-1">Course Interest</label>
                  <select
                    id="courseInterest"
                    name="courseInterest"
                    value={formData.courseInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white text-black border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                    required
                  >
                    <option value="">Select a course</option>
                    {courseCategories.map((category) => (
                      <optgroup key={category.title} label={category.title}>
                        {category.courses.map((course) => (
                          <option key={course} value={`${category.title} - ${course}`}>
                            {course}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Questions</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your learning goals and any questions..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? 'bg-green-500 hover:bg-green-600'
                    : isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Inquiry Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+91 8421539304</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>info@synturesolutions.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}