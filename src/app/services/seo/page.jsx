"use client"
import { useState, useEffect } from "react"

export default function SEOOptimization() {
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

        const element = document.getElementById("seo-page")
        if (element) observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [])

    const seoServices = [
        {
            icon: "🔍",
            title: "Keyword Research & Strategy",
            description:
                "Comprehensive keyword analysis to identify high-value opportunities and create a data-driven SEO strategy tailored to your business goals.",
            color: "from-emerald-500 via-teal-500 to-cyan-500",
            shadowColor: "shadow-emerald-500/25",
            features: ["Competitor Analysis", "Long-tail Keywords", "Search Intent Mapping"],
            details:
                "We analyze search volumes, competition levels, and user intent to target the most valuable keywords for your business.",
            stats: "500+ Keywords Analyzed",
        },
        {
            icon: "📄",
            title: "On-Page SEO",
            description:
                "Optimize every element of your website to improve search engine rankings and enhance user experience across all pages.",
            color: "from-blue-500 via-indigo-500 to-purple-500",
            shadowColor: "shadow-blue-500/25",
            features: ["Title Tag Optimization", "Meta Descriptions", "Header Structure"],
            details:
                "Complete optimization of content, HTML tags, internal linking, and page structure for maximum search visibility.",
            stats: "95% Page Speed Score",
        },
        {
            icon: "🔗",
            title: "Link Building",
            description:
                "Strategic link building campaigns to increase domain authority and establish your website as a trusted source in your industry.",
            color: "from-purple-500 via-pink-500 to-rose-500",
            shadowColor: "shadow-purple-500/25",
            features: ["Quality Backlinks", "Guest Posting", "Digital PR"],
            details:
                "We build high-quality, relevant backlinks through ethical white-hat techniques that provide long-term value.",
            stats: "200+ Quality Backlinks",
        },
        {
            icon: "⚡",
            title: "Technical SEO",
            description:
                "Optimize your website's technical foundation to ensure search engines can crawl, index, and understand your content effectively.",
            color: "from-orange-500 via-amber-500 to-yellow-500",
            shadowColor: "shadow-orange-500/25",
            features: ["Site Speed", "Mobile Optimization", "Schema Markup"],
            details: "Fix technical issues that prevent search engines from properly accessing and ranking your website.",
            stats: "99.9% Uptime Achieved",
        },
        {
            icon: "📊",
            title: "SEO Analytics & Reporting",
            description:
                "Comprehensive tracking and reporting to measure SEO performance, identify opportunities, and demonstrate ROI.",
            color: "from-cyan-500 via-sky-500 to-blue-500",
            shadowColor: "shadow-cyan-500/25",
            features: ["Ranking Reports", "Traffic Analysis", "Conversion Tracking"],
            details:
                "Monthly reports with actionable insights and recommendations to continuously improve your SEO performance.",
            stats: "300% Traffic Increase",
        },
        {
            icon: "🎯",
            title: "Local SEO",
            description:
                "Dominate local search results and attract customers in your area with targeted local SEO strategies.",
            color: "from-pink-500 via-rose-500 to-red-500",
            shadowColor: "shadow-pink-500/25",
            features: ["Google My Business", "Local Citations", "Review Management"],
            details: "Optimize your online presence for local searches and improve visibility in map results.",
            stats: "Top 3 Local Rankings",
        },
    ]

    const benefits = [
        {
            icon: "📈",
            title: "Increased Organic Traffic",
            description: "Drive more qualified visitors to your website",
            percentage: "250%",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: "💰",
            title: "Higher ROI",
            description: "Generate more leads and sales from search engines",
            percentage: "400%",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: "🏆",
            title: "Better Rankings",
            description: "Outrank competitors in search results",
            percentage: "Top 3",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: "🎯",
            title: "Targeted Audience",
            description: "Reach customers actively searching for your services",
            percentage: "85%",
            color: "from-orange-500 to-red-500",
        },
    ]

    const FloatingElement = ({ delay, duration, children, className }) => (
        <div
            className={`absolute ${className}`}
            style={{
                animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
            }}
        >
            {children}
        </div>
    )

    return (
        <div id="seo-page" className="min-h-screen bg-white relative overflow-hidden">
            {/* Custom CSS for animations */}
            <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        @keyframes slow-ping {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-slow-ping {
          animation: slow-ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>

            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>

            {/* Animated Background Orbs */}
            <FloatingElement
                delay="0"
                duration="6"
                className="top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow"
            >
                <div></div>
            </FloatingElement>

            <FloatingElement
                delay="2"
                duration="8"
                className="bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow"
            >
                <div></div>
            </FloatingElement>

            <FloatingElement
                delay="4"
                duration="7"
                className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow"
            >
                <div></div>
            </FloatingElement>


            {/* Hero Section */}
            <section className="py-24 px-10 relative z-10">
                <div className="container mx-auto px-6">
                    <div
                        className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
                            }`}
                    >
                        <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                                🔍 SEO Optimization Excellence
                            </span>
                        </div>

                        <h1 className="text-6xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight">
                            Dominate{" "}
                            <span className="relative">
                                <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                                    Search Results
                                </span>
                                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-lg blur opacity-20 animate-pulse"></div>
                            </span>
                        </h1>

                        <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12 font-light">
                            Boost your online visibility and drive organic traffic with our advanced SEO strategies. We help
                            businesses rank higher, attract more customers, and increase revenue through search engine optimization.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="group relative bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                                <span className="relative z-10">Get Free SEO Audit</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </button>
                            <button className="group border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                                    View Case Studies
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            =
            {/* Enhanced Services Grid */}
            <section className="py-24 px-10 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
                            Our{" "}
                            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                                SEO Services
                            </span>
                        </h2>
                        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                            Comprehensive SEO solutions designed to improve your search rankings and drive sustainable growth
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {seoServices.map((service, index) => (
                            <div
                                key={index}
                                className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden ${service.shadowColor} hover:-translate-y-2 hover:scale-[1.02]`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Background Gradient - Enhanced */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                                ></div>

                                {/* Service Icon - Enhanced with rotation */}
                                <div className="relative mb-6">
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-md transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}
                                    >
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Service Content */}
                                <div className="relative">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-3 group-hover:translate-x-1 transition-transform duration-300">
                                        {service.description}
                                    </p>

                                    <p className="text-xs text-gray-500 leading-relaxed mb-4 group-hover:translate-x-1 transition-transform duration-300 delay-75">{service.details}</p>

                                    {/* Stats Badge - Enhanced */}
                                    <div
                                        className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300`}
                                    >
                                        {service.stats}
                                    </div>

                                    {/* Features List - Enhanced */}
                                    <div className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center text-xs text-gray-600 group-hover:translate-x-1 transition-transform duration-300"
                                                style={{ transitionDelay: `${100 + (featureIndex * 50)}ms` }}
                                            >
                                                <div
                                                    className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-2 group-hover:scale-125 transition-transform duration-300`}
                                                ></div>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Arrow - Enhanced with bounce effect */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce">
                                    <div
                                        className={`w-6 h-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center`}
                                    >
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Subtle border highlight on hover */}
                                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-opacity-20 group-hover:border-gradient-to-r ${service.color} rounded-2xl transition-all duration-500 pointer-events-none`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Benefits Section - NO PING EFFECTS */}
            <section className="py-24 px-10 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
                            Why Choose Our{" "}
                            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                                SEO Services?
                            </span>
                        </h2>
                        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                            Experience the benefits of professional SEO optimization that drives real business results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 cursor-pointer overflow-hidden"
                            >
                                {/* Background Gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                                ></div>

                                {/* Icon with Animation */}
                                <div className="relative z-10 mb-6">
                                    <div className="text-6xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                                        {benefit.icon}
                                    </div>
                                    <div
                                        className={`text-3xl font-black bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {benefit.percentage}
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                        {benefit.description}
                                    </p>
                                </div>

                                {/* Glowing Border */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="py-24 px-10 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="relative text-center bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 rounded-3xl p-20 text-white overflow-hidden animate-gradient">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
                                    backgroundSize: "50px 50px",
                                }}
                            ></div>
                        </div>

                        {/* Floating Elements */}
                        <FloatingElement delay="0" duration="4" className="top-10 left-10 w-20 h-20 bg-white/10 rounded-full">
                            <div></div>
                        </FloatingElement>
                        <FloatingElement delay="1" duration="5" className="top-20 right-20 w-16 h-16 bg-white/10 rounded-full">
                            <div></div>
                        </FloatingElement>
                        <FloatingElement delay="2" duration="6" className="bottom-10 left-20 w-12 h-12 bg-white/10 rounded-full">
                            <div></div>
                        </FloatingElement>

                        <div className="relative z-10">
                            <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">Ready to Boost Your Rankings?</h2>
                            <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
                                Let's discuss how our SEO optimization services can help your business dominate search results and drive
                                more organic traffic.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button className="group relative bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                        Get Free SEO Audit
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </button>
                                <button className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                                    <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                                        Schedule Consultation
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
