"use client"

import { useState, useEffect } from "react"

export default function LeadGeneration() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("lead-generation-page")
    if (element) observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  const leadGenerationServices = [
    {
      icon: "🧲",
      title: "Lead Magnets",
      description:
        "Create irresistible lead magnets including eBooks, whitepapers, webinars, and free tools that attract and capture high-quality leads.",
      color: "from-cyan-500 via-blue-500 to-indigo-500",
      shadowColor: "shadow-cyan-500/25",
      features: ["eBooks & Guides", "Free Tools", "Webinars"],
      details:
        "Strategic lead magnets that provide genuine value to your audience while capturing contact information and qualifying prospects.",
      stats: "500% Lead Increase",
    },
    {
      icon: "🎯",
      title: "Landing Pages",
      description:
        "Design and optimize high-converting landing pages that turn visitors into leads with compelling copy and strategic design.",
      color: "from-emerald-500 via-green-500 to-teal-500",
      shadowColor: "shadow-emerald-500/25",
      features: ["A/B Testing", "Conversion Optimization", "Mobile Responsive"],
      details:
        "Custom landing pages with optimized forms, compelling headlines, and conversion-focused design that maximizes lead capture rates.",
      stats: "85% Conversion Rate",
    },
    {
      icon: "📧",
      title: "Email Marketing",
      description:
        "Develop automated email sequences and nurture campaigns that guide prospects through your sales funnel and convert leads into customers.",
      color: "from-violet-500 via-purple-500 to-fuchsia-500",
      shadowColor: "shadow-violet-500/25",
      features: ["Automation Sequences", "Segmentation", "Personalization"],
      details:
        "Strategic email marketing campaigns with automated workflows, personalized content, and advanced segmentation for maximum engagement.",
      stats: "45% Open Rate",
    },
    {
      icon: "💰",
      title: "PPC Campaigns",
      description:
        "Run targeted pay-per-click advertising campaigns on Google, Facebook, and LinkedIn that generate qualified leads at optimal cost.",
      color: "from-orange-500 via-amber-500 to-yellow-500",
      shadowColor: "shadow-orange-500/25",
      features: ["Google Ads", "Facebook Ads", "LinkedIn Ads"],
      details:
        "Data-driven PPC campaigns with precise targeting, compelling ad copy, and optimized bidding strategies for maximum ROI.",
      stats: "300% ROAS",
    },
    {
      icon: "🔍",
      title: "SEO Lead Generation",
      description:
        "Optimize your website and content for search engines to attract organic traffic and generate leads from high-intent searches.",
      color: "from-pink-500 via-rose-500 to-red-500",
      shadowColor: "shadow-pink-500/25",
      features: ["Keyword Research", "Content Optimization", "Local SEO"],
      details:
        "Comprehensive SEO strategies that improve search rankings, drive organic traffic, and convert visitors into qualified leads.",
      stats: "400% Organic Growth",
    },
    {
      icon: "⚙️",
      title: "CRM Integration",
      description:
        "Implement and optimize CRM systems with automated lead scoring, nurturing workflows, and sales pipeline management.",
      color: "from-blue-500 via-sky-500 to-cyan-500",
      shadowColor: "shadow-blue-500/25",
      features: ["Lead Scoring", "Pipeline Management", "Sales Automation"],
      details:
        "Complete CRM setup with lead tracking, automated follow-ups, and sales pipeline optimization for maximum conversion rates.",
      stats: "90% Lead Tracking",
    },
  ]

  const benefits = [
    {
      icon: "🎯",
      title: "Qualified Leads",
      description: "Generate high-quality leads that are ready to buy",
      percentage: "400%",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: "📈",
      title: "Conversion Rate",
      description: "Turn more prospects into paying customers",
      percentage: "350%",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: "🤖",
      title: "Automation",
      description: "Automated systems that work 24/7 to generate leads",
      percentage: "500%",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: "💼",
      title: "Sales Growth",
      description: "Consistent pipeline of qualified prospects",
      percentage: "300%",
      color: "from-orange-500 to-amber-500",
    },
  ]

  const FloatingElement = ({ delay, duration, children, className }) => (
    <div
      className={`absolute ${className}`}
      style={{
        animation: `bounce ${duration}s ease-in-out ${delay}s infinite alternate`,
      }}
    >
      {children}
    </div>
  )

  return (
    <div id="lead-generation-page" className="min-h-screen bg-white relative overflow-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes bounce {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-30px) rotate(10deg); }
        }
        @keyframes pulse-rainbow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes rainbow-shift {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }
        .animate-rainbow {
          background-size: 400% 400%;
          animation: rainbow-shift 4s ease infinite;
        }
        .animate-pulse-rainbow {
          animation: pulse-rainbow 3s ease-in-out infinite;
        }
        @keyframes wiggle {
          0%, 7% { transform: rotateZ(0); }
          15% { transform: rotateZ(-15deg); }
          20% { transform: rotateZ(10deg); }
          25% { transform: rotateZ(-10deg); }
          30% { transform: rotateZ(6deg); }
          35% { transform: rotateZ(-4deg); }
          40%, 100% { transform: rotateZ(0); }
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
      `}</style>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50"></div>

      {/* Animated Background Orbs */}
      <FloatingElement
        delay="0"
        duration="8"
        className="top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-rainbow"
      >
        <div></div>
      </FloatingElement>
      <FloatingElement
        delay="3"
        duration="10"
        className="bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-rainbow"
      >
        <div></div>
      </FloatingElement>
      <FloatingElement
        delay="6"
        duration="9"
        className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-rainbow"
      >
        <div></div>
      </FloatingElement>

      {/* Hero Section */}
      <section className="py-24 px-10 relative z-10">
        <div className="container mx-auto px-6">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-wiggle">
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                🎯 Lead Generation Excellence
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight">
              Generate{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-rainbow">
                  Quality Leads
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-lg blur opacity-20 animate-pulse"></div>
              </span>
            </h1>
            <div className="max-w-6xl mx-auto mb-8">
              <p className="text-xl text-gray-600 mb-6 leading-relaxed font-light">
                <strong className="text-gray-900">Lead Generation</strong> is the strategic process of attracting,
                capturing, and nurturing potential customers who have shown interest in your products or services. It
                involves creating compelling offers, optimizing conversion paths, and implementing automated systems
                that consistently deliver qualified prospects to your sales team.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed font-light">
                Transform your marketing efforts into a predictable lead generation machine that fills your sales
                pipeline with qualified prospects ready to buy.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden hover:scale-105">
                <span className="relative z-10">Get Free Lead Audit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <button className="group border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                  View Case Studies
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-24 px-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                Lead Generation Services
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive lead generation solutions that attract, capture, and convert prospects into customers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadGenerationServices.map((service, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden ${service.shadowColor} hover:-translate-y-4 hover:scale-[1.05] hover:rotate-1`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Gradient - Enhanced */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                ></div>
                {/* Service Icon - Enhanced with wiggle */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg transition-all duration-500 group-hover:animate-wiggle group-hover:scale-125`}
                  >
                    {service.icon}
                  </div>
                </div>
                {/* Service Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {service.description}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    {service.details}
                  </p>
                  {/* Stats Badge - Enhanced */}
                  <div
                    className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 `}
                  >
                    {service.stats}
                  </div>
                  {/* Features List - Enhanced */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-xs text-gray-600 group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${100 + featureIndex * 50}ms` }}
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-2 group-hover:scale-150 transition-transform duration-300`}
                        ></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Hover Arrow - Enhanced with wiggle effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-wiggle">
                  <div
                    className={`w-6 h-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center`}
                  >
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                {/* Glowing border on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-24 px-10 bg-gradient-to-br from-gray-50 via-cyan-50 to-blue-50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                Lead Generation?
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Experience the power of strategic lead generation that fills your pipeline with qualified prospects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-8 hover:scale-110 cursor-pointer overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>
                {/* Icon with Animation */}
                <div className="relative z-10 mb-6">
                  <div className="text-6xl mb-4 transform group-hover:scale-150 group-hover:animate-wiggle transition-all duration-500">
                    {benefit.icon}
                  </div>
                  <div
                    className={`text-3xl font-black bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-300`}
                  >
                    {benefit.percentage}
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
                {/* Glowing Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="relative text-center bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 rounded-3xl p-20 text-white overflow-hidden animate-rainbow">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, white 3px, transparent 3px)`,
                  backgroundSize: "60px 60px",
                }}
              ></div>
            </div>
            {/* Floating Elements */}
            <FloatingElement
              delay="0"
              duration="5"
              className="top-10 left-10 w-24 h-24 bg-white/20 rounded-full animate-wiggle"
            >
              <div></div>
            </FloatingElement>
            <FloatingElement
              delay="2"
              duration="6"
              className="top-20 right-20 w-20 h-20 bg-white/20 rounded-full animate-wiggle"
            >
              <div></div>
            </FloatingElement>
            <FloatingElement
              delay="4"
              duration="7"
              className="bottom-10 left-20 w-16 h-16 bg-white/20 rounded-full animate-wiggle"
            >
              <div></div>
            </FloatingElement>
            <div className="relative z-10">
              <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">Ready to Fill Your Pipeline?</h2>
              <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
                Let's transform your marketing efforts into a predictable lead generation machine that fills your sales
                pipeline with qualified prospects ready to buy.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden hover:scale-105">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Get Free Lead Audit
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                <button className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                    Start Generating Leads
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
