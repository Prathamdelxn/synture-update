'use client'
import { useState, useEffect, useRef } from 'react'
import { Search, MapPin, Building, DollarSign, Clock, Star, ArrowRight, Filter, Bookmark, Eye, ChevronDown, Calendar, Users, TrendingUp, Award, Briefcase } from 'lucide-react'
import Image from 'next/image'

export default function SyntureHero() {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [currentText, setCurrentText] = useState(0)
  const [currentAd, setCurrentAd] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [filteredJobs, setFilteredJobs] = useState([])
  const [isAdHovered, setIsAdHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [savedJobs, setSavedJobs] = useState(new Set())
  const [showFilters, setShowFilters] = useState(false)
  const [selectedJobType, setSelectedJobType] = useState('All')
  const [selectedExperience, setSelectedExperience] = useState('All')
  const adIntervalRef = useRef(null)

  const heroTexts = [
    "Accelerate Your Career Growth",
    "Connect With Industry Leaders", 
    "Discover Premium Opportunities",
    "Build Your Professional Network",
    "Advance Your Executive Journey"
  ]

  const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Remote', 'Executive']
  const experienceLevels = ['All', 'Entry Level', '2-5 Years', '5-10 Years', '10+ Years', 'Executive']

  const ads = [
    {
      id: 1,
      image: "/images/banner/SEO-1.png",
      imageAlt: "SEO Services",
      buttonLink: "/services/seo"
    },
    {
      id: 2,
      image: "/images/banner/social-media-marketing-1.png", 
      imageAlt: "Social Media Marketing",
      buttonLink: "/services/social-media-marketing"
    },
    {
      id: 3,
      image: "/images/banner/lead-generation-1.png",
      imageAlt: "Lead Generation", 
      buttonLink: "/services/lead-generation"
    },
    {
      id: 4,
      image: "/images/banner/email-marketing-1.png",
      imageAlt: "Email Marketing",
      buttonLink: "/services/email-marketing"
    },
    {
      id: 5,
      image: "/images/banner/content-marketing-1.png",
      imageAlt: "Content Marketing",
      buttonLink: "/services/content-marketing"
    },
    {
      id: 6,
      image: "/images/banner/online-reputation-management-1.png",
      imageAlt: "Online Reputation Management",
      buttonLink: "/services/online-reputation-management"
    },
    {
      id: 7,
      image: "/images/banner/website-design-and-development-1.png",
      imageAlt: "Website Design and Development",
      buttonLink: "/services/website-design-and-development"
    },
    {
      id: 8,
      image: "/images/banner/digital-branding-1.png",
      imageAlt: "Digital Branding",
      buttonLink: "/services/design-branding"
    }
  ]

  const jobListings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Microsoft Corporation",
      location: "Seattle, WA",
      salary: "$140,000 - $200,000",
      type: "Full-time",
      posted: "2 days ago",
      logo: "https://via.placeholder.com/48x48/0078D4/FFFFFF?text=MS",
      description: "Lead the development of scalable cloud solutions using Azure, .NET, and modern web technologies. Join our world-class engineering team.",
      rating: 4.6,
      applicants: 89,
      featured: true,
      urgent: false,
      remote: true,
      experience: "5-10 Years",
      skills: ["C#", ".NET", "Azure", "React"],
      verified: true
    },
    {
      id: 2,
      title: "Product Marketing Director",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$160,000 - $220,000",
      type: "Full-time",
      posted: "1 day ago",
      logo: "https://via.placeholder.com/48x48/4285F4/FFFFFF?text=G",
      description: "Drive product strategy and go-to-market execution for our enterprise solutions. Lead cross-functional initiatives.",
      rating: 4.8,
      applicants: 124,
      featured: false,
      urgent: true,
      remote: false,
      experience: "5-10 Years",
      skills: ["Product Strategy", "Marketing", "Analytics", "Leadership"],
      verified: true
    },
    {
      id: 3,
      title: "Senior UX Designer",
      company: "Apple Inc.",
      location: "Cupertino, CA",
      salary: "$130,000 - $180,000",
      type: "Full-time",
      posted: "3 days ago",
      logo: "https://via.placeholder.com/48x48/000000/FFFFFF?text=A",
      description: "Design intuitive experiences for next-generation products. Collaborate with world-class design and engineering teams.",
      rating: 4.9,
      applicants: 67,
      featured: true,
      urgent: false,
      remote: true,
      experience: "5-10 Years",
      skills: ["Figma", "Prototyping", "Design Systems", "User Research"],
      verified: true
    },
    {
      id: 4,
      title: "Principal Data Scientist",
      company: "Netflix",
      location: "Los Gatos, CA",
      salary: "$180,000 - $250,000",
      type: "Full-time",
      posted: "1 day ago",
      logo: "https://via.placeholder.com/48x48/E50914/FFFFFF?text=N",
      description: "Drive data science initiatives across content recommendation and business intelligence. Lead machine learning projects at scale.",
      rating: 4.7,
      applicants: 156,
      featured: false,
      urgent: true,
      remote: true,
      experience: "10+ Years",
      skills: ["Python", "Machine Learning", "SQL", "Statistics"],
      verified: true
    },
    {
      id: 5,
      title: "Marketing Manager",
      company: "Adobe Systems",
      location: "San Jose, CA",
      salary: "$90,000 - $130,000",
      type: "Full-time",
      posted: "4 days ago",
      logo: "https://via.placeholder.com/48x48/FF0000/FFFFFF?text=A",
      description: "Develop and execute integrated marketing campaigns for Creative Cloud products. Drive brand awareness and customer acquisition.",
      rating: 4.5,
      applicants: 203,
      featured: false,
      urgent: false,
      remote: false,
      experience: "2-5 Years",
      skills: ["Digital Marketing", "Campaign Management", "Analytics", "Creative Strategy"],
      verified: true
    },
    {
      id: 6,
      title: "Cloud Solutions Architect",
      company: "Amazon Web Services",
      location: "Austin, TX",
      salary: "$150,000 - $210,000",
      type: "Full-time",
      posted: "2 days ago",
      logo: "https://via.placeholder.com/48x48/FF9900/FFFFFF?text=AWS",
      description: "Design and implement enterprise cloud architectures for Fortune 500 clients. Lead technical consultations and solution delivery.",
      rating: 4.6,
      applicants: 91,
      featured: true,
      urgent: false,
      remote: true,
      experience: "5-10 Years",
      skills: ["AWS", "Cloud Architecture", "DevOps", "Kubernetes"],
      verified: true
    }
  ]

  const stats = [
    { label: "Active Jobs", value: "50,000+", icon: TrendingUp },
    { label: "Companies", value: "5,000+", icon: Building },
    { label: "Professionals", value: "2M+", icon: Users },
    { label: "Success Rate", value: "94%", icon: Award }
  ]

  useEffect(() => {
    setIsVisible(true)
    
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 4000)

    return () => {
      clearInterval(textInterval)
    }
  }, [heroTexts.length])

  useEffect(() => {
    if (!isAdHovered) {
      adIntervalRef.current = setInterval(() => {
        setCurrentAd((prev) => (prev + 1) % ads.length)
      }, 4000)
    } else {
      clearInterval(adIntervalRef.current)
    }

    return () => {
      clearInterval(adIntervalRef.current)
    }
  }, [isAdHovered])

  const handleSearch = () => {
    if (searchTerm.trim() === '' && location.trim() === '') {
      setShowResults(false)
      return
    }

    let filtered = jobListings.filter(job => {
      const matchesSearch = searchTerm === '' ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesLocation = location === '' ||
        job.location.toLowerCase().includes(location.toLowerCase())

      const matchesJobType = selectedJobType === 'All' || job.type === selectedJobType ||
        (selectedJobType === 'Remote' && job.remote)

      const matchesExperience = selectedExperience === 'All' || job.experience === selectedExperience

      return matchesSearch && matchesLocation && matchesJobType && matchesExperience
    })

    filtered = filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      if (a.urgent && !b.urgent) return -1
      if (!a.urgent && b.urgent) return 1
      return 0
    })

    setFilteredJobs(filtered)
    setShowResults(true)
  }

  const handleClearSearch = () => {
    setSearchTerm('')
    setLocation('')
    setSelectedJobType('All')
    setSelectedExperience('All')
    setShowResults(false)
    setFilteredJobs([])
    setShowFilters(false)
  }

  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev => {
      const newSet = new Set(prev)
      if (newSet.has(jobId)) {
        newSet.delete(jobId)
      } else {
        newSet.add(jobId)
      }
      return newSet
    })
  }

  const popularSearchTerms = ["Software Engineer", "Product Manager", "App Developer", "Devops Engineer", "Cloud Engineer", "Solutions Architect"]

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-slate-200/30 to-gray-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-gray-200/30 to-slate-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      {/* Modified container with vertical centering */}
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row lg:items-center gap-8 min-h-[calc(100vh-10rem)]">
        {/* Professional Main Content - Vertically Centered */}
        <div className="lg:w-3/4 flex flex-col justify-center">
          {/* Professional Hero Section */}
          <div className="mb-10">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                <span className="block">
                  <span 
                    key={currentText}
                    className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent animate-fadeInUp"
                  >
                    {heroTexts[currentText]}
                  </span>
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl">
                Access exclusive opportunities from Fortune 500 companies and innovative startups. 
                Connect with industry leaders and advance your professional career.
              </p>

              {/* Professional Search Form */}
              <div className={`bg-white rounded-xl shadow-lg border border-slate-200 p-6 mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '0.2s'}}>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Job title, keywords, or company"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-800 bg-slate-50 focus:bg-white"
                      />
                    </div>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Location or remote"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-800 bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {showFilters && (
                    <div className="grid md:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 animate-slideDown">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Job Type</label>
                        <select
                          value={selectedJobType}
                          onChange={(e) => setSelectedJobType(e.target.value)}
                          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        >
                          {jobTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Experience Level</label>
                        <select
                          value={selectedExperience}
                          onChange={(e) => setSelectedExperience(e.target.value)}
                          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        >
                          {experienceLevels.map(level => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleSearch}
                      className="flex-1 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Search className="w-5 h-5" />
                      Search Positions
                    </button>
                    
                    <button 
                      onClick={() => setShowFilters(!showFilters)}
                      className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Filter className="w-5 h-5" />
                      Filters
                      <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {showResults && (
                      <button
                        onClick={handleClearSearch}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Professional Popular Searches */}
              <div className="mb-6">
                <p className="text-sm text-slate-500 mb-3">Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  {popularSearchTerms.map((term, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSearchTerm(term)
                        handleSearch()
                      }}
                      className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Job Results */}
            <div className={`flex-1 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '0.4s'}}>
              {showResults && (
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 min-h-[500px] flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">
                        Open Positions
                      </h2>
                      <p className="text-slate-600 text-sm mt-1">
                        {filteredJobs.length} positions match your criteria
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <select className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm">
                        <option>Sort by: Relevance</option>
                        <option>Date Posted</option>
                        <option>Salary Range</option>
                      </select>
                    </div>
                  </div>

                  {filteredJobs.length > 0 ? (
                    <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                      {filteredJobs.map((job) => (
                        <div key={job.id} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                          {/* Status indicators */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg" />
                              <div>
                                <h3 className="font-semibold text-lg text-slate-900 mb-1">
                                  {job.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                  <Building className="w-4 h-4" />
                                  <span className="font-medium">{job.company}</span>
                                  {job.verified && (
                                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                      <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {job.featured && (
                                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                                  Featured
                                </span>
                              )}
                              {job.urgent && (
                                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                                  Urgent
                                </span>
                              )}
                              <button
                                onClick={() => toggleSaveJob(job.id)}
                                className={`p-2 rounded-lg transition-colors ${
                                  savedJobs.has(job.id) 
                                    ? 'bg-slate-100 text-slate-700' 
                                    : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
                                }`}
                              >
                                <Bookmark className="w-4 h-4" fill={savedJobs.has(job.id) ? 'currentColor' : 'none'} />
                              </button>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600 mb-4">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                              {job.remote && (
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Remote</span>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4 text-green-600" />
                              <span className="font-medium text-slate-900">{job.salary}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{job.posted}</span>
                            </div>
                          </div>

                          <p className="text-slate-700 mb-4 leading-relaxed line-clamp-2">{job.description}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {job.skills.map((skill, index) => (
                              <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-slate-600">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span>{job.rating}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                <span>{job.applicants} applicants</span>
                              </div>
                              <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                                {job.experience}
                              </span>
                            </div>
                            
                            <div className="flex gap-3">
                              <button className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors text-sm font-medium">
                                View Details
                              </button>
                              <button 
                                onClick={() => { window.location.href = "/apply" }}
                                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                              >
                                Apply Now
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex-1 flex items-center justify-center text-center py-16">
                      <div>
                        <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                          <Search className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-medium text-slate-900 mb-2">No positions found</h3>
                        <p className="text-slate-600 mb-4">Try adjusting your search criteria or location preferences.</p>
                        <button
                          onClick={handleClearSearch}
                          className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors font-medium"
                        >
                          Clear Filters
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Original Right Section (Advertisement Banner) */}
        <div 
          className="lg:w-1/3 hidden lg:block sticky top-24"
          onMouseEnter={() => setIsAdHovered(true)}
          onMouseLeave={() => setIsAdHovered(false)}
        >
          <div className="h-[600px] rounded-2xl shadow-2xl overflow-hidden relative bg-gradient-to-br from-gray-100 to-gray-200">
            {ads.map((ad, index) => (
              <div
                key={ad.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentAd ? 'opacity-100 z-10 scale-100' : 'opacity-0 pointer-events-none scale-95'}`}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={ad.image}
                    alt={ad.imageAlt}
                    fill
                    className="object-cover rounded-2xl"
                    priority={index < 3}
                    onError={(e) => {
                      console.error(`Failed to load image: ${ad.image}`)
                      e.currentTarget.src = '/images/fallback-ad.png'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                  <a
                    href={ad.buttonLink}
                    className="absolute inset-0 z-20"
                    aria-label={ad.imageAlt}
                  />
                </div>
              </div>
            ))}

            {/* Enhanced Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
              {ads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAd(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentAd 
                      ? 'bg-white shadow-lg scale-125' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                  aria-label={`View ad ${index + 1}`}
                />
              ))}
            </div>

            {/* Progress indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
              <div 
                className="h-full bg-white transition-all duration-4000 ease-linear"
                style={{ width: `${((currentAd + 1) / ads.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #cbd5e1, #94a3b8);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #94a3b8, #64748b);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
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
        
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            max-height: 400px;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
      `}</style>
    </section>
  )
}
