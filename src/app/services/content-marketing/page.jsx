"use client"
import { useState, useEffect } from "react"

export default function ContentMarketing() {
    const [isVisible, setIsVisible] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [typewriterText, setTypewriterText] = useState("")
    const [scrollY, setScrollY] = useState(0)

    const fullText = "Fuel your brand with powerful words"

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        const element = document.getElementById("content-marketing-page")
        if (element) observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        if (isVisible) {
            let i = 0
            const timer = setInterval(() => {
                if (i < fullText.length) {
                    setTypewriterText(fullText.slice(0, i + 1))
                    i++
                } else {
                    clearInterval(timer)
                }
            }, 100)
            return () => clearInterval(timer)
        }
    }, [isVisible])

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const contentServices = [
        {
            icon: "✍️",
            title: "Content Strategy & Planning",
            description:
                "Develop comprehensive content strategies that align with your business objectives and resonate with your target audience across all channels.",
            color: "from-emerald-600 via-teal-600 to-cyan-600",
            shadowColor: "shadow-emerald-500/25",
            features: ["Content Audits", "Editorial Calendars", "Audience Research"],
            details:
                "We create data-driven content strategies that establish thought leadership and drive meaningful engagement with your audience.",
            stats: "300% Content ROI",
        },
        {
            icon: "📝",
            title: "Blog Writing & SEO Content",
            description:
                "Create high-quality, SEO-optimized blog posts and articles that educate your audience while improving search engine rankings.",
            color: "from-blue-600 via-indigo-600 to-purple-600",
            shadowColor: "shadow-blue-500/25",
            features: ["SEO Optimization", "Keyword Research", "Topic Ideation"],
            details:
                "Engaging, informative content that positions your brand as an industry authority while driving organic traffic and leads.",
            stats: "500+ Articles Published",
        },
        {
            icon: "🎥",
            title: "Video Content Production",
            description:
                "Produce compelling video content that captures attention, tells your brand story, and drives engagement across platforms.",
            color: "from-orange-600 via-red-600 to-pink-600",
            shadowColor: "shadow-orange-500/25",
            features: ["Script Writing", "Video Production", "Post-Production"],
            details:
                "From explainer videos to brand documentaries, we create visual content that connects with your audience emotionally.",
            stats: "10M+ Video Views",
        },
        {
            icon: "📚",
            title: "Ebooks & Whitepapers",
            description:
                "Develop in-depth, authoritative content pieces that generate leads and establish your expertise in your industry.",
            color: "from-violet-600 via-purple-600 to-fuchsia-600",
            shadowColor: "shadow-violet-500/25",
            features: ["Research & Writing", "Design & Layout", "Lead Magnets"],
            details:
                "Comprehensive resources that provide value to your audience while capturing qualified leads for your sales funnel.",
            stats: "50+ Lead Magnets",
        },
        {
            icon: "📧",
            title: "Email Content & Newsletters",
            description:
                "Craft engaging email campaigns and newsletters that nurture leads, retain customers, and drive conversions.",
            color: "from-teal-600 via-green-600 to-emerald-600",
            shadowColor: "shadow-teal-500/25",
            features: ["Email Sequences", "Newsletter Design", "A/B Testing"],
            details:
                "Personalized email content that builds relationships, drives engagement, and converts subscribers into customers.",
            stats: "45% Open Rate",
        },
        {
            icon: "📊",
            title: "Content Analytics & Optimization",
            description:
                "Track content performance, analyze audience behavior, and continuously optimize your content strategy for better results.",
            color: "from-cyan-600 via-sky-600 to-blue-600",
            shadowColor: "shadow-cyan-500/25",
            features: ["Performance Tracking", "Content Audits", "ROI Analysis"],
            details:
                "Data-driven insights that help refine your content strategy and maximize the impact of every piece of content.",
            stats: "Real-time Analytics",
        },
    ]

    const benefits = [
        {
            icon: "🎯",
            title: "Brand Authority",
            description: "Establish thought leadership in your industry",
            percentage: "400%",
            color: "from-emerald-600 to-teal-600",
        },
        {
            icon: "📈",
            title: "Lead Generation",
            description: "Convert content readers into qualified leads",
            percentage: "350%",
            color: "from-blue-600 to-indigo-600",
        },
        {
            icon: "🔍",
            title: "SEO Rankings",
            description: "Improve search visibility with quality content",
            percentage: "250%",
            color: "from-purple-600 to-pink-600",
        },
        {
            icon: "💡",
            title: "Audience Engagement",
            description: "Build deeper connections with your audience",
            percentage: "500%",
            color: "from-orange-600 to-red-600",
        },
    ]

    const MorphingShape = ({ delay, children, className }) => (
        <div
            className={`absolute ${className}`}
            style={{
                animation: `morph 8s ease-in-out ${delay}s infinite`,
            }}
        >
            {children}
        </div>
    )

    return (
        <div
            id="content-marketing-page"
            className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 relative overflow-hidden"
        >
            {/* Custom CSS for animations */}
            <style jsx>{`
        @keyframes morph {
          0%, 100% { 
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% { 
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: translateY(-20px) rotate(90deg) scale(1.1);
          }
          50% { 
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
            transform: translateY(-10px) rotate(180deg) scale(0.9);
          }
          75% { 
            border-radius: 60% 40% 60% 40% / 70% 30% 60% 40%;
            transform: translateY(-30px) rotate(270deg) scale(1.2);
          }
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes slide-up {
          0% { transform: translateY(100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-in-left {
          0% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-right {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(16, 185, 129, 0.5); }
          50% { text-shadow: 0 0 20px rgba(16, 185, 129, 0.8), 0 0 30px rgba(16, 185, 129, 0.6); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
        @keyframes paper-fold {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(-15deg) rotateX(5deg); }
          50% { transform: rotateY(0deg) rotateX(-5deg); }
          75% { transform: rotateY(15deg) rotateX(5deg); }
          100% { transform: rotateY(0deg) rotateX(0deg); }
        }
        .animate-paper-fold {
          animation: paper-fold 3s ease-in-out infinite;
        }
      `}</style>

            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50"></div>

            {/* Morphing Background Shapes */}
            <MorphingShape
                delay="0"
                className="top-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 mix-blend-multiply filter blur-2xl"
            >
                <div></div>
            </MorphingShape>
            <MorphingShape
                delay="3"
                className="bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 mix-blend-multiply filter blur-2xl"
            >
                <div></div>
            </MorphingShape>
            <MorphingShape
                delay="6"
                className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 mix-blend-multiply filter blur-2xl"
            >
                <div></div>
            </MorphingShape>

            {/* Floating Text Elements */}
            <div className="absolute top-32 left-10 text-emerald-200/30 text-6xl font-bold transform -rotate-12 animate-pulse">
                Content
            </div>
            <div className="absolute bottom-32 right-10 text-teal-200/30 text-4xl font-bold transform rotate-12 animate-pulse">
                Strategy
            </div>
            <div className="absolute top-1/2 right-20 text-blue-200/30 text-5xl font-bold transform rotate-45 animate-pulse">
                Stories
            </div>

            {/* Hero Section */}
            <section className="py-24 px-10 relative z-10">
                <div className="container mx-auto px-6">
                    <div
                        className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
                            }`}
                    >
                        <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-paper-fold">
                            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                📝 Content Marketing Mastery
                            </span>
                        </div>

                        <h1 className="text-6xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight">
                            ✨ Content That Drives {" "}
                            <span className="relative">
                                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent animate-text-glow">
                                    Growth
                                </span>
                                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 rounded-lg blur opacity-20 animate-pulse"></div>
                            </span>
                        </h1>

                        {/* Typewriter Effect */}
                        <div className="text-3xl text-emerald-700 mb-8 font-bold min-h-[3rem] flex items-center justify-center">
                            <span className="border-r-2 border-emerald-600 pr-2 animate-pulse">{typewriterText}</span>
                        </div>

                        <div className="max-w-6xl mx-auto mb-8">
                            <p className="text-xl text-gray-700 mb-6 leading-relaxed font-light">
                                <strong className="text-emerald-700">Content Marketing</strong> is the strategic approach of creating
                                and distributing valuable, relevant, and consistent content to attract and retain a clearly defined
                                audience. It focuses on providing useful information that solves problems, educates, and entertains your
                                target customers, ultimately driving profitable customer action.
                            </p>
                            <p className="text-2xl text-gray-600 leading-relaxed font-light">
                                Transform your brand into a trusted resource with content that educates, inspires, and converts your
                                audience into loyal customers.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden hover:scale-105">
                                <span className="relative z-10">Get Content Strategy</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </button>
                            <button className="group border-2 border-emerald-600 text-emerald-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                                    View Content Portfolio
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
                            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                Content Services
                            </span>
                        </h2>
                        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                            Comprehensive content marketing solutions that tell your story and drive business growth
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contentServices.map((service, index) => (
                            <div
                                key={index}
                                className={`group relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer border border-gray-100 overflow-hidden ${service.shadowColor} hover:-translate-y-6 hover:scale-[1.03]`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    animation: isVisible ? `slide-up 0.8s ease-out ${index * 0.1}s forwards` : "none",
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? "translateY(0)" : "translateY(100px)",
                                }}
                            >
                                {/* Background Gradient with Paper Effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-3xl`}
                                ></div>

                                {/* Service Icon with Paper Fold Animation */}
                                <div className="relative mb-6">
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg transition-all duration-700 group-hover:animate-paper-fold group-hover:scale-125`}
                                    >
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Service Content with Slide Animations */}
                                <div className="relative">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-3 group-hover:translate-x-2 transition-transform duration-500">
                                        {service.description}
                                    </p>
                                    <p className="text-xs text-gray-500 leading-relaxed mb-4 group-hover:translate-x-2 transition-transform duration-500 delay-100">
                                        {service.details}
                                    </p>

                                    {/* Stats Badge with Glow Effect */}
                                    <div
                                        className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-500`}
                                    >
                                        {service.stats}
                                    </div>

                                    {/* Features List with Staggered Animation */}
                                    <div className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center text-xs text-gray-600 group-hover:translate-x-2 transition-transform duration-500"
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

                                {/* Hover Arrow with Morphing Effect */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                    <div
                                        className={`w-6 h-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500`}
                                    >
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Paper texture overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 mix-blend-multiply"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Benefits Section */}
            <section
                className="py-24 px-10 relative z-10"
                style={{
                    background: `linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 184, 166, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)`,
                    transform: `translateY(${scrollY * 0.1}px)`,
                }}
            >
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
                            Why Choose Our{" "}
                            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                Content Marketing?
                            </span>
                        </h2>
                        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                            Experience the power of strategic content that builds trust, drives engagement, and converts
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group relative text-center p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-8 hover:scale-110 cursor-pointer overflow-hidden border border-white/50"
                                style={{
                                    animation: isVisible
                                        ? `${index % 2 === 0 ? "slide-in-left" : "slide-in-right"} 0.8s ease-out ${index * 0.2}s forwards`
                                        : "none",
                                    opacity: isVisible ? 1 : 0,
                                }}
                            >
                                {/* Background Gradient with Morphing Effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-3xl`}
                                    style={{
                                        animation: "morph 6s ease-in-out infinite",
                                    }}
                                ></div>

                                {/* Icon with Enhanced Animation */}
                                <div className="relative z-10 mb-6">
                                    <div className="text-6xl mb-4 transform group-hover:scale-150 group-hover:rotate-12 transition-all duration-700 animate-paper-fold">
                                        {benefit.icon}
                                    </div>
                                    <div
                                        className={`text-3xl font-black bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500 animate-text-glow`}
                                    >
                                        {benefit.percentage}
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all duration-500">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500">
                                        {benefit.description}
                                    </p>
                                </div>

                                {/* Glowing Border with Morphing */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700`}
                                    style={{
                                        animation: "morph 8s ease-in-out infinite reverse",
                                    }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            {/* Enhanced CTA Section - Fixed Positioning */}
            <section className="py-24 px-10 relative mt-60"> {/* Added mt-20 for top margin */}
                <div className="container mx-auto px-6">
                    <div className="relative text-center bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 rounded-3xl p-20 text-white overflow-hidden z-20"> {/* Increased z-index */}
                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                            <div
                                className="absolute inset-0 animate-paper-fold"
                                style={{
                                    backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
                                    backgroundSize: "30px 30px",
                                }}
                            ></div>
                        </div>

                        {/* Morphing Elements */}
                        <MorphingShape delay="0" className="top-10 left-10 w-24 h-24 bg-white/20">
                            <div></div>
                        </MorphingShape>
                        <MorphingShape delay="3" className="top-20 right-20 w-20 h-20 bg-white/20">
                            <div></div>
                        </MorphingShape>
                        <MorphingShape delay="6" className="bottom-10 left-20 w-16 h-16 bg-white/20">
                            <div></div>
                        </MorphingShape>

                        <div className="relative z-30"> {/* Increased z-index for content */}
                            <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight animate-text-glow">
                                Ready to Tell Your Story?
                            </h2>
                            <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
                                Let's create compelling content that educates your audience, builds trust, and drives meaningful
                                business results through strategic storytelling.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button className="group relative bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden hover:scale-105 animate-paper-fold">
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                                        Get Content Strategy
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </button>
                                <button className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
                                    <span className="group-hover:scale-110 transition-transform duration-500 inline-block">
                                        View Content Samples
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
