
'use client'
import React, { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  
  const stats = [
    { number: 20, suffix: "+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
    { number: 99, suffix: "%", label: "Client Satisfaction", color: "from-blue-500 to-cyan-500" },
    { number: 1, suffix: "+", label: "Years Experience", color: "from-green-500 to-emerald-500" },
    { number: 24, suffix: "/7", label: "Support Available", color: "from-orange-500 to-red-500" }
  ];

  const approaches = [
    { icon: "🎯", text: "Strategic planning and market research", delay: "0s" },
    { icon: "🛠️", text: "Custom solutions tailored to your needs", delay: "0.1s" },
    { icon: "📈", text: "Continuous optimization and improvement", delay: "0.2s" },
    { icon: "💬", text: "Transparent reporting and communication", delay: "0.3s" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(start);
            return newCounters;
          });
        }, 16);
      });
    };

    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="about" className="bg-gradient-to-br from-gray-50 py-10 px-20 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - Main content */}
          <div className={`lg:w-1/2 mb-12 lg:mb-0 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                Synture
              </span>
              ?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At Synture, we combine creativity with data-driven strategies to deliver results. 
              Our team of digital marketing experts, SEO specialists, and web developers work together to 
              create solutions that not only look great but also drive real business growth.
            </p>
            
            {/* Animated stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center group transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Approach card */}
          <div className={`lg:w-1/2 lg:pl-12 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 p-8 rounded-2xl shadow-xl hover:shadow-purple-200/50 transition-all duration-500 group">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-purple-700 transition-colors duration-300">
                  Our Approach
                </h3>
                
                <ul className="space-y-6">
                  {approaches.map((approach, index) => (
                    <li 
                      key={index}
                      className={`flex items-start group/item opacity-0 animate-fade-in-up hover:transform hover:translate-x-2 transition-all duration-300`}
                      style={{ 
                        animationDelay: `${0.8 + index * 0.1}s`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <span className="text-2xl mr-4 group-hover/item:scale-125 transition-transform duration-300">
                        {approach.icon}
                      </span>
                      <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300 text-lg">
                        {approach.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Glassmorphism effect */
        .backdrop-blur-sm {
          backdrop-filter: blur(12px);
        }
        
        /* Glow effect on hover */
        .group:hover .absolute.inset-0 {
          opacity: 0.6;
        }
      `}</style>
    </section>
  );
}