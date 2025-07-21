'use client'

import React, { useState, useEffect } from 'react';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Ramesh Patel",
      company: "TechStart Inc.",
      position: "CEO & Founder",
      content: "Synture transformed our online presence completely. Their SEO strategies increased our organic traffic by 250% within 6 months. The team's expertise and dedication are truly remarkable.",
      rating: 5,
      avatar: "👩‍💼",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      name: "Mahesh Chavan",
      company: "Local Retail Chain",
      position: "Marketing Director",
      content: "The team at Synture delivered an exceptional e-commerce platform that boosted our online sales by 180%. Their attention to detail and customer-first approach is outstanding.",
      rating: 5,
      avatar: "👨‍💻",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      name: "Ram Purohit",
      company: "Creative Agency",
      position: "Brand Manager",
      content: "Outstanding digital marketing services. Their social media campaigns helped us reach a much wider audience and improve brand awareness significantly. Truly professional work!",
      rating: 5,
      avatar: "👩‍🎨",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-2xl transition-all duration-300 transform hover:scale-125 ${
          i < rating ? 'text-yellow-400' : 'text-gray-200'
        }`}
        style={{ animationDelay: `${i * 0.1}s` }}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-10 px-10 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-200/10 to-emerald-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied clients who've experienced results
          </p>
        </div>

        {/* Featured testimonial */}
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
          <div className="max-w-4xl mx-auto">
            <div className={`relative bg-gradient-to-br ${testimonials[activeTestimonial].bgColor} rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500`}>
              {/* Quote decoration */}
              <div className="absolute top-6 left-6 text-6xl text-gray-300 opacity-50">"</div>
              <div className="absolute bottom-6 right-6 text-6xl text-gray-300 opacity-50 rotate-180">"</div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[activeTestimonial].rating)}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                  {testimonials[activeTestimonial].content}
                </p>
                
                <div className="flex items-center justify-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${testimonials[activeTestimonial].color} rounded-full flex items-center justify-center text-2xl mr-4 shadow-lg`}>
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-lg">{testimonials[activeTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[activeTestimonial].position}</div>
                    <div className="text-gray-500 text-sm">{testimonials[activeTestimonial].company}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                index === activeTestimonial
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* All testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 group-hover:border-purple-200`}>
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-2xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {testimonial.avatar}
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-600 mb-6 italic leading-relaxed text-center">
                    "{testimonial.content}"
                  </p>

                  {/* Author info */}
                  <div className="text-center">
                    <div className="font-bold text-gray-900 mb-1">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                    <div className="text-gray-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${testimonial.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
                <div className={`absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r ${testimonial.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className={`mt-16 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
          <p className="text-gray-600 mb-6">Join hundreds of satisfied clients who trust Synture</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl">⭐⭐⭐⭐⭐</div>
            <div className="text-gray-500">|</div>
            <div className="text-gray-600 font-semibold">4.9/5 Average Rating</div>
            <div className="text-gray-500">|</div>
            <div className="text-gray-600 font-semibold">200+ Happy Clients</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}