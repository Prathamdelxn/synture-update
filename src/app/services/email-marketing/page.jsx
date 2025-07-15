"use client"
import { useState, useEffect } from "react"

export default function EmailMarketing() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [emailCount, setEmailCount] = useState(0)
  const [notificationCount, setNotificationCount] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("email-marketing-page")
    if (element) observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const emailTimer = setInterval(() => {
        setEmailCount((prev) => (prev < 1247 ? prev + 23 : 1247))
      }, 50)

      const notificationTimer = setInterval(() => {
        setNotificationCount((prev) => (prev + 1) % 4)
      }, 2000)

      return () => {
        clearInterval(emailTimer)
        clearInterval(notificationTimer)
      }
    }
  }, [isVisible])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const emailServices = [
    {
      icon: "📧",
      title: "Email Campaign Design",
      description:
        "Create stunning, responsive email templates that capture attention and drive engagement across all devices and email clients.",
      color: "from-blue-600 via-indigo-600 to-purple-600",
      shadowColor: "shadow-blue-500/25",
      features: ["Responsive Design", "A/B Testing", "Brand Consistency"],
      details:
        "Beautiful, conversion-optimized email designs that reflect your brand and engage your audience effectively.",
      stats: "98% Delivery Rate",
      bgPattern: "inbox",
    },
    {
      icon: "🎯",
      title: "Email Automation",
      description:
        "Set up sophisticated email automation workflows that nurture leads and convert prospects into customers automatically.",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      shadowColor: "shadow-emerald-500/25",
      features: ["Drip Campaigns", "Behavioral Triggers", "Lead Nurturing"],
      details: "Smart automation sequences that deliver the right message to the right person at the perfect time.",
      stats: "300% ROI Increase",
      bgPattern: "automation",
    },
    {
      icon: "📊",
      title: "Email Analytics",
      description:
        "Track and analyze email performance with detailed insights to optimize your campaigns for better results.",
      color: "from-orange-600 via-red-600 to-pink-600",
      shadowColor: "shadow-orange-500/25",
      features: ["Open Rate Tracking", "Click Analytics", "Conversion Metrics"],
      details:
        "Comprehensive analytics dashboard that provides actionable insights to improve your email marketing ROI.",
      stats: "Real-time Insights",
      bgPattern: "analytics",
    },
    {
      icon: "👥",
      title: "List Management",
      description:
        "Build, segment, and manage your email lists effectively to ensure maximum deliverability and engagement.",
      color: "from-violet-600 via-purple-600 to-fuchsia-600",
      shadowColor: "shadow-violet-500/25",
      features: ["List Segmentation", "Subscriber Management", "Deliverability"],
      details:
        "Advanced list management tools that help you maintain healthy email lists and improve campaign performance.",
      stats: "99.5% Deliverability",
      bgPattern: "list",
    },
    {
      icon: "✉️",
      title: "Newsletter Creation",
      description:
        "Design and distribute engaging newsletters that keep your audience informed and connected to your brand.",
      color: "from-cyan-600 via-sky-600 to-blue-600",
      shadowColor: "shadow-cyan-500/25",
      features: ["Content Curation", "Template Design", "Scheduling"],
      details: "Professional newsletter design and management that builds lasting relationships with your subscribers.",
      stats: "45% Open Rate",
      bgPattern: "newsletter",
    },
    {
      icon: "🚀",
      title: "Email Optimization",
      description:
        "Optimize every aspect of your email campaigns for maximum performance, deliverability, and conversion rates.",
      color: "from-pink-600 via-rose-600 to-red-600",
      shadowColor: "shadow-pink-500/25",
      features: ["Subject Line Testing", "Send Time Optimization", "Content Testing"],
      details: "Data-driven optimization strategies that continuously improve your email marketing performance.",
      stats: "250% CTR Boost",
      bgPattern: "optimization",
    },
  ]

  const benefits = [
    {
      icon: "📈",
      title: "Higher ROI",
      description: "Generate exceptional returns on email marketing investment",
      percentage: "4200%",
      color: "from-blue-600 to-indigo-600",
      notification: true,
    },
    {
      icon: "👥",
      title: "Audience Growth",
      description: "Build and expand your subscriber base effectively",
      percentage: "350%",
      color: "from-emerald-600 to-teal-600",
      notification: false,
    },
    {
      icon: "🎯",
      title: "Conversion Rate",
      description: "Turn email subscribers into paying customers",
      percentage: "280%",
      color: "from-orange-600 to-red-600",
      notification: true,
    },
    {
      icon: "📧",
      title: "Engagement Rate",
      description: "Increase opens, clicks, and subscriber interaction",
      percentage: "450%",
      color: "from-purple-600 to-pink-600",
      notification: false,
    },
  ]

  const FloatingEmail = ({ delay, duration, children, className }) => (
    <div
      className={`absolute ${className}`}
      style={{
        animation: `float-email ${duration}s ease-in-out ${delay}s infinite`,
      }}
    >
      {children}
    </div>
  )

  const PaperPlane = ({ delay, className }) => (
    <div
      className={`absolute ${className}`}
      style={{
        animation: `fly-plane ${8 + delay}s linear infinite`,
      }}
    >
      <div className="text-2xl transform rotate-45">✈️</div>
    </div>
  )

  return (
    <div
      id="email-marketing-page"
      className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float-email {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-30px) rotate(5deg) scale(1.1);
            opacity: 1;
          }
        }
        @keyframes fly-plane {
          0% { 
            transform: translateX(-100px) translateY(0px) rotate(45deg);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateX(calc(100vw + 100px)) translateY(-50px) rotate(45deg);
            opacity: 0;
          }
        }
        @keyframes envelope-open {
          0% { transform: rotateX(0deg); }
          50% { transform: rotateX(-180deg); }
          100% { transform: rotateX(0deg); }
        }
        @keyframes typing-dots {
          0%, 60%, 100% { opacity: 0.3; }
          30% { opacity: 1; }
        }
        @keyframes notification-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @keyframes inbox-slide {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes email-send {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.8; }
          100% { transform: translateY(-100px) scale(0.5); opacity: 0; }
        }
        @keyframes gradient-wave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-envelope-open {
          animation: envelope-open 3s ease-in-out infinite;
        }
        .animate-typing-dots {
          animation: typing-dots 1.5s ease-in-out infinite;
        }
        .animate-notification-bounce {
          animation: notification-bounce 2s ease-in-out infinite;
        }
        .animate-inbox-slide {
          animation: inbox-slide 0.8s ease-out forwards;
        }
        .animate-email-send {
          animation: email-send 2s ease-out infinite;
        }
        .animate-gradient-wave {
          background-size: 200% 200%;
          animation: gradient-wave 4s ease infinite;
        }
        .email-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .inbox-pattern {
          background-image: 
            linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .cursor-trail {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: all 0.1s ease;
        }
      `}</style>

      {/* Cursor Trail */}
      <div
        className="cursor-trail"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 inbox-pattern opacity-30"></div>

      {/* Floating Email Elements */}
      <FloatingEmail delay="0" duration="6" className="top-20 right-20 text-4xl animate-envelope-open">
        📧
      </FloatingEmail>
      <FloatingEmail delay="2" duration="8" className="bottom-32 left-16 text-3xl animate-envelope-open">
        ✉️
      </FloatingEmail>
      <FloatingEmail delay="4" duration="7" className="top-1/2 right-32 text-5xl animate-envelope-open">
        📨
      </FloatingEmail>

      {/* Flying Paper Planes */}
      <PaperPlane delay="0" className="top-1/4" />
      <PaperPlane delay="3" className="top-1/2" />
      <PaperPlane delay="6" className="top-3/4" />

      {/* Floating @ Symbols */}
      <div className="absolute top-16 left-20 text-6xl text-blue-200/40 animate-pulse">@</div>
      <div className="absolute bottom-20 right-16 text-4xl text-indigo-200/40 animate-pulse">@</div>
      <div className="absolute top-1/3 left-1/4 text-5xl text-purple-200/40 animate-pulse">@</div>

      {/* Hero Section */}
      <section className="py-24 px-10 relative z-10">
        <div className="container mx-auto px-6">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}
          >
            {/* Email Notification Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 relative">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                📧 Email Marketing Excellence
              </span>
              {notificationCount > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-notification-bounce">
                  {notificationCount}
                </div>
              )}
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight">
              Email Marketing That{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-wave">
                  Delivers Results
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-lg blur opacity-20 animate-pulse"></div>
              </span>
            </h1>

            {/* Email Counter */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20">
                <div className="text-2xl font-bold text-blue-600">{emailCount.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Emails Sent Today</div>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-typing-dots"></div>
                <div
                  className="w-2 h-2 bg-blue-500 rounded-full animate-typing-dots"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-blue-500 rounded-full animate-typing-dots"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mb-8">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed font-light">
                <strong className="text-blue-700">Email Marketing</strong> is one of the most effective digital
                marketing channels, delivering an average ROI of $42 for every $1 spent. It involves creating and
                sending targeted email campaigns to nurture leads, build customer relationships, and drive conversions
                through personalized, relevant content delivered directly to your audience's inbox.
              </p>
              <p className="text-2xl text-gray-600 leading-relaxed font-light">
                Transform your email campaigns into powerful revenue-generating machines with strategic design,
                automation, and optimization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden hover:scale-105">
                <span className="relative z-10">Start Email Campaign</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute top-2 right-2 animate-email-send">📧</div>
              </button>
              <button className="group border-2 border-blue-600 text-blue-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                  View Email Templates
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
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Email Services
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive email marketing solutions that engage, convert, and retain your customers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emailServices.map((service, index) => (
              <div
                key={index}
                className={`group relative p-8 email-card rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden ${service.shadowColor} hover:-translate-y-6 hover:scale-[1.03] animate-inbox-slide`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Background Gradient with Email Pattern */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-3xl`}
                ></div>

                {/* Email-style Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500">inbox</div>
                </div>

                {/* Service Icon with Email Animation */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg transition-all duration-700 group-hover:animate-envelope-open group-hover:scale-125`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3 group-hover:translate-x-2 transition-transform duration-500">
                    {service.description}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 group-hover:translate-x-2 transition-transform duration-500 delay-100">
                    {service.details}
                  </p>

                  {/* Stats Badge with Notification Style */}
                  <div
                    className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-500 relative`}
                  >
                    {service.stats}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  </div>

                  {/* Features List with Email Thread Style */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-xs text-gray-600 group-hover:translate-x-2 transition-transform duration-500 bg-gray-50/50 rounded-lg px-2 py-1"
                        style={{ transitionDelay: `${200 + featureIndex * 100}ms` }}
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-2 group-hover:scale-150 transition-transform duration-500`}
                        ></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email Send Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-white text-sm hover:animate-email-send cursor-pointer`}
                  >
                    ➤
                  </div>
                </div>

                {/* Email Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-3xl transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-24 px-10 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50 relative z-10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Email Marketing?
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Experience the power of strategic email marketing that builds relationships and drives revenue
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative text-center p-8 email-card rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-8 hover:scale-110 cursor-pointer overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-3xl`}
                ></div>

                {/* Notification Badge */}
                {benefit.notification && (
                  <div className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full animate-notification-bounce"></div>
                )}

                {/* Icon with Email Animation */}
                <div className="relative z-10 mb-6">
                  <div className="text-6xl mb-4 transform group-hover:scale-150 group-hover:animate-envelope-open transition-all duration-700">
                    {benefit.icon}
                  </div>
                  <div
                    className={`text-3xl font-black bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500`}
                  >
                    {benefit.percentage}
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-500">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500">
                    {benefit.description}
                  </p>
                </div>

                {/* Email Thread Lines */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="h-px bg-gray-300"></div>
                  <div className="h-px bg-gray-300 w-3/4"></div>
                  <div className="h-px bg-gray-300 w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="relative text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-20 text-white overflow-hidden animate-gradient-wave">
            {/* Email Pattern Background */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            {/* Floating Email Elements */}
            <FloatingEmail delay="0" duration="5" className="top-10 left-10 text-3xl text-white/30">
              📧
            </FloatingEmail>
            <FloatingEmail delay="2" duration="6" className="top-20 right-20 text-2xl text-white/30">
              ✉️
            </FloatingEmail>
            <FloatingEmail delay="4" duration="7" className="bottom-10 left-20 text-4xl text-white/30">
              📨
            </FloatingEmail>

            <div className="relative z-10">
              <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">Ready to Send Success?</h2>
              <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
                Let's create email campaigns that your subscribers love to receive and that drive real business results
                for your company.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden hover:scale-105">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                    Start Email Campaign
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 animate-email-send transition-opacity duration-300">
                    📧
                  </div>
                </button>
                <button className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
                  <span className="group-hover:scale-110 transition-transform duration-500 inline-block">
                    Get Free Email Audit
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
