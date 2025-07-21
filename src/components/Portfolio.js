
'use client'
import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Brand Marketing",
      category: "Branding Management",
      description: "Modern e-commerce solution with making brand image in society",
      image: "🛍️",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
     
      delay: "0s"
    },
    {
      title: "SEO Campaign",
      category: "SEO Optimization", 
      description: "Increased organic traffic by 300% for a local business through strategic optimization",
      image: "📈",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    
      delay: "0.1s"
    },
    {
      title: "Social Media Strategy",
      category: "Digital Marketing",
      description: "Comprehensive social media campaign driving engagement and brand awareness",
      image: "📱",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
     
      delay: "0.2s"
    },
    {
      title: "Brand Identity",
      category: "Brand Design",
      description: "Complete brand redesign and identity system with modern visual language",
      image: "🎨",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
     
      delay: "0.3s"
    },
    {
      title: "Analytics Dashboard",
      category: "Analytics",
      description: "Custom dashboard for real-time performance tracking and data visualization",
      image: "📊",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
     
      delay: "0.4s"
    },
    {
      title: "Email Marketing",
      category: "Mail Services",
      description: "Newsletter Design & Distribution and Automated Email Campaigns",
      image: "📲",
      color: "from-teal-500 to-blue-500",
      bgColor: "from-teal-50 to-blue-50",
     
      delay: "0.5s"
    }
  ];

  const categories = ['All', 'Branding Management', 'SEO Optimization', 'Digital Marketing', 'Brand Design', 'Analytics', 'Development'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="portfolio" className="py-12 px-10 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore some of our recent projects and success stories that showcase our expertise
          </p>
        </div>

        {/* Filter buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-purple-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card container */}
              <div className={`relative bg-gradient-to-br ${project.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full`}>
                {/* Animated border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '2px' }}>
                  <div className={`w-full h-full bg-gradient-to-br ${project.bgColor} rounded-2xl`}></div>
                </div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon with animation */}
                  <div className="relative mb-6">
                    <div className={`text-6xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${hoveredProject === index ? 'animate-bounce' : ''}`}>
                      {project.image}
                    </div>
                    <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${project.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping`}></div>
                  </div>

                  {/* Category badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${project.color} text-white mb-4 w-fit`}>
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  

                  {/* View project button */}
                 
                </div>

                {/* Floating elements */}
                <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${project.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
                <div className={`absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r ${project.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.5); }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}