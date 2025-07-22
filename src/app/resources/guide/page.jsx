'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Updated resource categories with LIGHT color schemes
const resourceCategories = [
  {
    id: 'business-growth',
    title: 'Business Growth Solutions',
    icon: '🚀',
    description: 'Accelerate your business with proven growth strategies and advertising solutions',
    color: 'from-purple-100 to-pink-100', // LIGHT COLORS
    textColor: 'text-purple-700', // DARK TEXT FOR READABILITY
    borderColor: 'border-purple-200',
    targetAudience: 'business',
    resources: [
      {
        id: 1,
        title: 'Business Growth Strategy Blueprint',
        type: 'Strategy Guide',
        description: 'Complete framework to scale your business through strategic advertising and marketing.',
        downloadUrl: '/downloads/business-growth-blueprint.pdf',
        featured: true,
        tags: ['Growth', 'Strategy', 'Scaling', 'ROI']
      },
      {
        id: 2,
        title: 'Advertisement Campaign Optimization Kit',
        type: 'Toolkit',
        description: 'Tools and templates to maximize your advertising ROI across all platforms.',
        downloadUrl: '/downloads/ad-optimization-kit.zip',
        featured: true,
        tags: ['Advertising', 'Campaigns', 'ROI', 'Optimization']
      },
      {
        id: 3,
        title: 'Revenue Growth Calculator',
        type: 'Calculator',
        description: 'Calculate potential revenue growth with different advertising strategies.',
        downloadUrl: '/tools/revenue-calculator',
        featured: false,
        tags: ['Calculator', 'Revenue', 'Forecasting']
      }
    ]
  },
  {
    id: 'courses-training',
    title: 'Professional Courses',
    icon: '🎓',
    description: 'Learn digital marketing and business growth skills with placement support',
    color: 'from-blue-100 to-cyan-100', // LIGHT COLORS
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    targetAudience: 'student',
    resources: [
      {
        id: 4,
        title: 'Digital Marketing Mastery Course',
        type: 'Course',
        description: '12-week comprehensive course covering all aspects of digital marketing with job placement support.',
        downloadUrl: '/courses/digital-marketing-mastery',
        featured: true,
        tags: ['Course', 'Digital Marketing', 'Certification', 'Placement']
      },
      {
        id: 5,
        title: 'Business Growth Specialist Program',
        type: 'Certification',
        description: 'Advanced program to become a certified business growth consultant with guaranteed interviews.',
        downloadUrl: '/courses/growth-specialist',
        featured: true,
        tags: ['Certification', 'Growth', 'Consultant', 'Career']
      },
      {
        id: 6,
        title: 'Advertising Strategy Bootcamp',
        type: 'Bootcamp',
        description: 'Intensive 8-week bootcamp on creating high-converting advertising campaigns.',
        downloadUrl: '/courses/advertising-bootcamp',
        featured: false,
        tags: ['Bootcamp', 'Advertising', 'Campaigns', 'Intensive']
      }
    ]
  },
  {
    id: 'advertising-resources',
    title: 'Advertising Excellence',
    icon: '📢',
    description: 'Master advertising platforms and strategies for maximum business impact',
    color: 'from-green-100 to-emerald-100', // LIGHT COLORS
    textColor: 'text-green-700',
    borderColor: 'border-green-200',
    targetAudience: 'business',
    resources: [
      {
        id: 7,
        title: 'Multi-Platform Advertising Guide',
        type: 'Guide',
        description: 'Complete guide to advertising on Google, Facebook, LinkedIn, and other major platforms.',
        downloadUrl: '/downloads/multi-platform-advertising.pdf',
        featured: true,
        tags: ['Advertising', 'Platforms', 'Google', 'Facebook']
      },
      {
        id: 8,
        title: 'Creative Ad Templates Library',
        type: 'Templates',
        description: 'High-converting ad templates for different industries and campaign objectives.',
        downloadUrl: '/downloads/ad-templates-library.zip',
        featured: false,
        tags: ['Templates', 'Creative', 'Ad Copy', 'Design']
      },
      {
        id: 9,
        title: 'A/B Testing Framework',
        type: 'Framework',
        description: 'Systematic approach to testing and optimizing your advertising campaigns.',
        downloadUrl: '/downloads/ab-testing-framework.pdf',
        featured: false,
        tags: ['Testing', 'Optimization', 'Framework', 'Data']
      }
    ]
  },
  {
    id: 'placement-support',
    title: 'Career & Placement',
    icon: '💼',
    description: 'Get placed in top companies with our comprehensive placement support program',
    color: 'from-orange-100 to-red-100', // LIGHT COLORS
    textColor: 'text-orange-700',
    borderColor: 'border-orange-200',
    targetAudience: 'student',
    resources: [
      {
        id: 10,
        title: 'Job Interview Preparation Kit',
        type: 'Preparation Kit',
        description: 'Complete preparation materials for digital marketing and growth roles interviews.',
        downloadUrl: '/downloads/interview-prep-kit.pdf',
        featured: true,
        tags: ['Interview', 'Preparation', 'Jobs', 'Career']
      },
      {
        id: 11,
        title: 'Resume Templates for Marketing Roles',
        type: 'Templates',
        description: 'Professional resume templates optimized for digital marketing and growth positions.',
        downloadUrl: '/downloads/marketing-resume-templates.docx',
        featured: false,
        tags: ['Resume', 'Templates', 'Marketing', 'Career']
      },
      {
        id: 12,
        title: 'Placement Partners Directory',
        type: 'Directory',
        description: 'Access our network of hiring partners actively recruiting marketing professionals.',
        downloadUrl: '/placement/partners-directory',
        featured: false,
        tags: ['Placement', 'Partners', 'Jobs', 'Network']
      }
    ]
  }
];

const successMetrics = [
  { number: '500+', label: 'Businesses Grown', icon: '📈' },
  { number: '2000+', label: 'Students Trained', icon: '🎓' },
  { number: '85%', label: 'Placement Rate', icon: '💼' },
  { number: '300%', label: 'Avg. Growth Boost', icon: '🚀' }
];

export default function ResourcesGuide() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredCategories = resourceCategories.filter(category => {
    if (selectedAudience !== 'all' && category.targetAudience !== selectedAudience) return false;
    if (searchTerm) {
      return category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
             category.resources.some(resource => 
               resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               resource.description.toLowerCase().includes(searchTerm.toLowerCase())
             );
    }
    return true;
  });

  return (
    <section className="bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 min-h-screen py-12 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Grow Your Business <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">& Career</span>
          </h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto mb-4">
            Whether you're a business owner looking to accelerate growth through strategic advertising, 
            or a student seeking career opportunities in digital marketing - we have the resources and support you need.
          </p>
          
          {/* Dual Value Proposition */}
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-6">
            <div className={`bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                 style={{ transitionDelay: '0.2s' }}>
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="text-lg font-bold mb-2">For Businesses</h3>
              <p className="text-purple-100 text-sm mb-2">
                Accelerate your growth with our proven advertising strategies. We help businesses achieve 300%+ growth.
              </p>
              <Link href="#business-growth" className="inline-flex items-center text-white font-medium hover:text-purple-100 text-sm">
                Explore Solutions →
              </Link>
            </div>

            <div className={`bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                 style={{ transitionDelay: '0.3s' }}>
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="text-lg font-bold mb-2">For Students</h3>
              <p className="text-blue-100 text-sm mb-2">
                Launch your career with comprehensive courses and guaranteed placement support. 85% placement rate.
              </p>
              <Link href="#courses-training" className="inline-flex items-center text-white font-medium hover:text-blue-100 text-sm">
                Explore Courses →
              </Link>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {successMetrics.map((metric, index) => (
              <div 
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="text-xl mb-1">{metric.icon}</div>
                <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{metric.number}</div>
                <div className="text-xs text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
          <div className="flex flex-col lg:flex-row gap-3 items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedAudience('all')}
                className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                  selectedAudience === 'all'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                All Resources
              </button>
              <button
                onClick={() => setSelectedAudience('business')}
                className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                  selectedAudience === 'business'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                🚀 Businesses
              </button>
              <button
                onClick={() => setSelectedAudience('student')}
                className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                  selectedAudience === 'student'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                🎓 Students
              </button>
            </div>

            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-200 outline-none text-sm pl-9"
              />
              <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Resources Categories - UPDATED WITH LIGHT COLORS */}
        <div className="space-y-8">
          {filteredCategories.map((category, categoryIndex) => (
            <div 
              key={category.id}
              id={category.id}
              className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${1.0 + categoryIndex * 0.1}s` }}
            >
              {/* Category Header - LIGHT COLORS */}
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className={`text-2xl mr-3 p-2 rounded-xl bg-gradient-to-r ${category.color} ${category.borderColor} border-2`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1 leading-tight">{category.title}</h2>
                    <p className="text-sm text-gray-600 mb-1">{category.description}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      category.targetAudience === 'business' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {category.targetAudience === 'business' ? 'For Businesses' : 'For Students'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Resource Cards with LIGHT COLORS */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.resources.map((resource, resourceIndex) => (
                  <div 
                    key={resource.id}
                    className={`group bg-white/95 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border-2 ${category.borderColor} ${
                      resource.featured ? `ring-2 ring-${category.borderColor}` : ''
                    }`}
                  >
                    {resource.featured && (
                      <div className="absolute top-2 right-2 z-10">
                        <span className={`bg-gradient-to-r ${category.color} ${category.textColor} px-2 py-1 rounded-full text-xs font-bold border ${category.borderColor}`}>
                          ⭐ Featured
                        </span>
                      </div>
                    )}

                    <div className="p-4 relative">
                      {/* Light colored badge */}
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${category.color} ${category.textColor} mb-2 border ${category.borderColor}`}>
                        {resource.type}
                      </span>
                      
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-purple-700 transition-colors mb-2 leading-tight">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 leading-snug line-clamp-3">{resource.description}</p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {resource.tags.map(tag => (
                          <span key={tag} className={`bg-gradient-to-r ${category.color} ${category.textColor} px-2 py-1 rounded text-xs border ${category.borderColor}`}>
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Light colored button */}
                      <Link 
                        href={resource.downloadUrl}
                        className={`w-full py-3 px-4 rounded-lg font-bold bg-gradient-to-r ${category.color} ${category.textColor} hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center justify-center text-sm border-2 ${category.borderColor} hover:border-gray-300`}
                      >
                        {resource.type === 'Course' || resource.type === 'Certification' || resource.type === 'Bootcamp' ? (
                          <>📚 Enroll Now</>
                        ) : (
                          <>⬇️ Get Free Access</>
                        )}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Sections */}
        <CTASections />
        
        {/* Testimonials */}
        <TestimonialsSection />
      </div>

      {/* Add CSS for line clamping */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

// Keep the CTA and Testimonials sections the same
const CTASections = () => (
  <div className="mt-12 space-y-6">
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-5 relative overflow-hidden">
      <div className="relative z-10 grid md:grid-cols-2 gap-4 items-center">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Ready to Grow Your Business?</h3>
          <p className="text-purple-100 mb-3 text-sm">
            Get a free consultation and see how we can boost your revenue by 300%+.
          </p>
          <div className="flex gap-2">
            <Link href="/contact" className="bg-white text-purple-600 px-4 py-2 rounded-full font-bold hover:bg-gray-100 text-sm">
              Get Consultation
            </Link>
            <Link href="/case-studies" className="border border-white text-white px-4 py-2 rounded-full font-bold hover:bg-white hover:text-purple-600 text-sm">
              Success Stories
            </Link>
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl mb-1">📈</div>
          <div className="text-2xl font-bold text-white">300%+</div>
          <div className="text-purple-100 text-xs">Growth Increase</div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-5 relative overflow-hidden">
      <div className="relative z-10 grid md:grid-cols-2 gap-4 items-center">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Launch Your Marketing Career</h3>
          <p className="text-blue-100 mb-3 text-sm">
            85% of our students get placed within 3 months with top companies.
          </p>
          <div className="flex gap-2">
            <Link href="/courses" className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold hover:bg-gray-100 text-sm">
              Explore Courses
            </Link>
            <Link href="/placement" className="border border-white text-white px-4 py-2 rounded-full font-bold hover:bg-white hover:text-blue-600 text-sm">
              Placement Support
            </Link>
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl mb-1">🎯</div>
          <div className="text-2xl font-bold text-white">85%</div>
          <div className="text-blue-100 text-xs">Placement Rate</div>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStart Solutions",
      type: "Business",
      content: "Synture helped us scale from ₹10L to ₹50L revenue in just 8 months. Their growth expertise is unmatched!",
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      role: "Digital Marketing Manager",
      type: "Student",
      content: "Got placed at Flipkart within 2 months. The placement support is incredible!",
      avatar: "PS"
    },
    {
      name: "Amit Patel",
      role: "Founder, E-commerce Brand",
      type: "Business",
      content: "Our ROAS improved by 400%. They become your growth partners.",
      avatar: "AP"
    }
  ];

  return (
    <div className="mt-12">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Success Stories from Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Community</span>
        </h2>
        <p className="text-gray-600 text-sm">See how businesses have grown and students have launched careers with Synture</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md">
            <div className="flex items-center mb-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-2 text-xs ${
                testimonial.type === 'Business' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500'
              }`}>
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                <p className="text-gray-600 text-xs">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm italic">"{testimonial.content}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};
