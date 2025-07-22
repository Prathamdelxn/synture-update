// 'use client'
// import { useState, useEffect, useRef } from 'react'
// import { Search, MapPin, Building, DollarSign, Clock, Star, ArrowRight, Filter, Bookmark, Eye } from 'lucide-react'
// import Image from 'next/image'

// export default function JobBoardHero() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [location, setLocation] = useState('')
//   const [currentText, setCurrentText] = useState(0)
//   const [currentAd, setCurrentAd] = useState(0)
//   const [showResults, setShowResults] = useState(false)
//   const [filteredJobs, setFilteredJobs] = useState([])
//   const [isAdHovered, setIsAdHovered] = useState(false)
//   const [isVisible, setIsVisible] = useState(false)
//   const [savedJobs, setSavedJobs] = useState(new Set())
//   const adIntervalRef = useRef(null)

//   const texts = [
//     "Find Your Dream Job Today",
//     "Discover Exciting Opportunities",
//     "Connect With Top Employers",
//     "Advance Your Career"
//   ]

//   const ads = [
//     {
//       id: 1,
//       image: "/images/banner/SEO-1.png",
//       imageAlt: "SEO Services",
//       buttonLink: "/services/seo"
//     },
//     {
//       id: 2,
//       image: "/images/banner/social-media-marketing-1.png",
//       imageAlt: "Social Media Marketing",
//       buttonLink: "/services/social-media-marketing"
//     },
//     {
//       id: 3,
//       image: "/images/banner/lead-generation-1.png",
//       imageAlt: "Lead Generation",
//       buttonLink: "/services/lead-generation"
//     },
//     {
//       id: 4,
//       image: "/images/banner/email-marketing-1.png",
//       imageAlt: "Email Marketing",
//       buttonLink: "/services/email-marketing"
//     },
//     {
//       id: 5,
//       image: "/images/banner/content-marketing-1.png",
//       imageAlt: "Content Marketing",
//       buttonLink: "/services/content-marketing"
//     },
//     {
//       id: 6,
//       image: "/images/banner/online-reputation-management-1.png",
//       imageAlt: "Online Reputation Management",
//       buttonLink: "/services/online-reputation-management"
//     },
//     {
//       id: 7,
//       image: "/images/banner/website-design-and-development-1.png",
//       imageAlt: "Website Design and Development",
//       buttonLink: "/services/website-design-and-development"
//     },
//     {
//       id: 8,
//       image: "/images/banner/digital-branding-1.png",
//       imageAlt: "Digital Branding",
//       buttonLink: "/services/design-branding"
//     }
//   ]

//   const sampleJobs = [
//     {
//       id: 1,
//       title: "Senior Software Engineer",
//       company: "TechCorp Inc.",
//       location: "San Francisco, CA",
//       salary: "$120,000 - $180,000",
//       type: "Full-time",
//       posted: "2 days ago",
//       logo: "https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=TC",
//       description: "Join our innovative team to build scalable web applications using React and Node.js.",
//       rating: 4.8,
//       applicants: 24,
//       featured: true,
//       remote: true
//     },
//     {
//       id: 2,
//       title: "Product Manager",
//       company: "StartupXYZ",
//       location: "New York, NY",
//       salary: "$100,000 - $150,000",
//       type: "Full-time",
//       posted: "1 day ago",
//       logo: "https://via.placeholder.com/40x40/10B981/FFFFFF?text=SX",
//       description: "Lead product strategy and execution for our growing SaaS platform.",
//       rating: 4.6,
//       applicants: 31,
//       featured: false,
//       remote: false
//     },
//     {
//       id: 3,
//       title: "UX Designer",
//       company: "DesignStudio",
//       location: "Los Angeles, CA",
//       salary: "$80,000 - $120,000",
//       type: "Full-time",
//       posted: "3 days ago",
//       logo: "https://via.placeholder.com/40x40/8B5CF6/FFFFFF?text=DS",
//       description: "Create intuitive user experiences for mobile and web applications.",
//       rating: 4.9,
//       applicants: 18,
//       featured: true,
//       remote: true
//     },
//     {
//       id: 4,
//       title: "Data Scientist",
//       company: "DataCorp",
//       location: "Seattle, WA",
//       salary: "$110,000 - $160,000",
//       type: "Full-time",
//       posted: "1 day ago",
//       logo: "https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=DC",
//       description: "Analyze complex datasets and build predictive models using Python and ML.",
//       rating: 4.7,
//       applicants: 42,
//       featured: false,
//       remote: true
//     },
//     {
//       id: 5,
//       title: "Marketing Manager",
//       company: "BrandCo",
//       location: "Chicago, IL",
//       salary: "$70,000 - $100,000",
//       type: "Full-time",
//       posted: "4 days ago",
//       logo: "https://via.placeholder.com/40x40/EF4444/FFFFFF?text=BC",
//       description: "Develop and execute marketing campaigns across digital channels.",
//       rating: 4.5,
//       applicants: 67,
//       featured: false,
//       remote: false
//     },
//     {
//       id: 6,
//       title: "DevOps Engineer",
//       company: "CloudTech",
//       location: "Austin, TX",
//       salary: "$95,000 - $140,000",
//       type: "Full-time",
//       posted: "2 days ago",
//       logo: "https://via.placeholder.com/40x40/06B6D4/FFFFFF?text=CT",
//       description: "Manage cloud infrastructure and CI/CD pipelines using AWS and Docker.",
//       rating: 4.8,
//       applicants: 29,
//       featured: true,
//       remote: true
//     }
//   ]

//   useEffect(() => {
//     setIsVisible(true)
    
//     const textInterval = setInterval(() => {
//       setCurrentText((prev) => (prev + 1) % texts.length)
//     }, 3000)

//     return () => {
//       clearInterval(textInterval)
//     }
//   }, [])

//   useEffect(() => {
//     if (!isAdHovered) {
//       adIntervalRef.current = setInterval(() => {
//         setCurrentAd((prev) => (prev + 1) % ads.length)
//       }, 3000)
//     } else {
//       clearInterval(adIntervalRef.current)
//     }

//     return () => {
//       clearInterval(adIntervalRef.current)
//     }
//   }, [isAdHovered])

//   const handleSearch = () => {
//     if (searchTerm.trim() === '' && location.trim() === '') {
//       setShowResults(false)
//       return
//     }

//     const filtered = sampleJobs.filter(job => {
//       const matchesSearch = searchTerm === '' ||
//         job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         job.description.toLowerCase().includes(searchTerm.toLowerCase())

//       const matchesLocation = location === '' ||
//         job.location.toLowerCase().includes(location.toLowerCase())

//       return matchesSearch && matchesLocation
//     })

//     setFilteredJobs(filtered)
//     setShowResults(true)
//   }

//   const handleClearSearch = () => {
//     setSearchTerm('')
//     setLocation('')
//     setShowResults(false)
//     setFilteredJobs([])
//   }

//   const toggleSaveJob = (jobId) => {
//     setSavedJobs(prev => {
//       const newSet = new Set(prev)
//       if (newSet.has(jobId)) {
//         newSet.delete(jobId)
//       } else {
//         newSet.add(jobId)
//       }
//       return newSet
//     })
//   }

//   return (
//     <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//       </div>

//       <div className="container mx-auto relative z-10 flex flex-col lg:flex-row gap-8">
//         {/* Main Content - Fixed height container to match ad banner */}
//         <div className="lg:w-3/4 flex flex-col h-[650px]">
//           {/* Hero Title and Description - Fixed Height */}
//           <div className="h-[200px] flex flex-col justify-center">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
//               <span className="relative">
//                 <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
//                   {texts[currentText]}
//                 </span>
//                 <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform scale-x-0 animate-pulse"></div>
//               </span>
//             </h1>
//             <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
//               Search through thousands of job listings from top companies worldwide.
//               Find the perfect match for your skills and career aspirations.
//             </p>
//           </div>

//           {/* Enhanced Search Form */}
//           <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '0.2s'}}>
//             <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 sm:p-8">
//               <div className="flex flex-col sm:flex-row gap-4 mb-4">
//                 <div className="flex-1 relative group">
//                   <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
//                   <input
//                     type="text"
//                     placeholder="Job title, keywords, or company..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//                     className="w-full pl-12 pr-4 py-4 text-gray-800 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
//                   />
//                 </div>
//                 <div className="flex-1 relative group">
//                   <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
//                   <input
//                     type="text"
//                     placeholder="City, state, or remote..."
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//                     className="w-full pl-12 pr-4 py-4 text-gray-800 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3">
//                 <button
//                   onClick={handleSearch}
//                   className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
//                 >
//                   <Search className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
//                   Search Jobs
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </button>
                
//                 <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
//                   <Filter className="w-5 h-5 mr-2" />
//                   Filters
//                 </button>
                
//                 {showResults && (
//                   <button
//                     onClick={handleClearSearch}
//                     className="bg-red-100 hover:bg-red-200 text-red-700 px-6 py-4 rounded-xl font-semibold transition-all duration-300"
//                   >
//                     Clear
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Enhanced Results Section */}
//           <div className={`flex-1 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '0.4s'}}>
//             {showResults ? (
//               <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-6 h-full flex flex-col">
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                     Search Results
//                   </h2>
//                   <div className="flex items-center gap-4">
//                     <span className="text-gray-600">{filteredJobs.length} jobs found</span>
//                     <button className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
//                       Sort by: Relevance
//                     </button>
//                   </div>
//                 </div>

//                 {filteredJobs.length > 0 ? (
//                   <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
//                     {filteredJobs.map((job) => (
//                       <div key={job.id} className="border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group relative overflow-hidden">
//                         {job.featured && (
//                           <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-yellow-500 text-white text-xs px-3 py-1 rounded-bl-lg font-semibold">
//                             ✨ Featured
//                           </div>
//                         )}
                        
//                         <div className="flex items-start gap-4">
//                           <div className="relative">
//                             <img src={job.logo} alt={job.company} className="w-14 h-14 rounded-xl shadow-md" />
//                             {job.remote && (
//                               <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" title="Remote Available"></div>
//                             )}
//                           </div>
                          
//                           <div className="flex-1">
//                             <div className="flex items-start justify-between mb-2">
//                               <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
//                                 {job.title}
//                               </h3>
//                               <button
//                                 onClick={() => toggleSaveJob(job.id)}
//                                 className={`p-2 rounded-full transition-all duration-300 ${
//                                   savedJobs.has(job.id) 
//                                     ? 'bg-blue-100 text-blue-600' 
//                                     : 'bg-gray-100 text-gray-400 hover:bg-blue-100 hover:text-blue-600'
//                                 }`}
//                               >
//                                 <Bookmark className="w-4 h-4" fill={savedJobs.has(job.id) ? 'currentColor' : 'none'} />
//                               </button>
//                             </div>
                            
//                             <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
//                               <span className="flex items-center gap-1 font-medium">
//                                 <Building className="w-4 h-4" />
//                                 {job.company}
//                               </span>
//                               <span className="flex items-center gap-1">
//                                 <MapPin className="w-4 h-4" />
//                                 {job.location}
//                               </span>
//                               <span className="flex items-center gap-1">
//                                 <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                                 {job.rating}
//                               </span>
//                               {job.remote && (
//                                 <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
//                                   🏡 Remote
//                                 </span>
//                               )}
//                             </div>
                            
//                             <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
//                               <span className="flex items-center gap-1 font-semibold text-gray-900">
//                                 <DollarSign className="w-4 h-4" />
//                                 {job.salary}
//                               </span>
//                               <span className="flex items-center gap-1">
//                                 <Clock className="w-4 h-4" />
//                                 {job.posted}
//                               </span>
//                               <span className="flex items-center gap-1">
//                                 <Eye className="w-4 h-4" />
//                                 {job.applicants} applicants
//                               </span>
//                             </div>
                            
//                             <p className="text-gray-700 text-sm mb-4 line-clamp-2">{job.description}</p>
                            
//                             <div className="flex items-center justify-between">
//                               <div className="flex items-center gap-2">
//                                 <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
//                                   {job.type}
//                                 </span>
//                                 <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
//                                   {job.applicants} applied
//                                 </span>
//                               </div>
                              
//                               <div className="flex gap-2">
//                                 <button className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg border border-gray-200 hover:border-blue-200 transition-all duration-300 text-sm font-medium">
//                                   View Details
//                                 </button>
//                                 <button 
//                                   onClick={() => { window.location.href = "/login" }}
//                                   className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-1"
//                                 >
//                                   Apply Now
//                                   <ArrowRight className="w-4 h-4" />
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="flex-1 flex items-center justify-center text-center py-12">
//                     <div>
//                       <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
//                         <Search className="w-12 h-12 text-gray-400" />
//                       </div>
//                       <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
//                       <p className="text-gray-600 mb-4">Try adjusting your search criteria or location.</p>
//                       <button
//                         onClick={handleClearSearch}
//                         className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                       >
//                         Clear Filters
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               /* Stats when no search results */
//               <div className="h-full flex items-center justify-center">
//                 <div className="flex flex-wrap justify-center lg:justify-start gap-8 w-full">
//                   {[
//                     { number: '10,000+', label: 'Jobs Available' },
//                     { number: '5,000+', label: 'Companies Hiring' },
//                     { number: '98%', label: 'Success Rate' }
//                   ].map((stat, index) => (
//                     <div key={index} className="text-center group">
//                       <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
//                         {stat.number}
//                       </div>
//                       <div className="text-gray-600 text-sm">{stat.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Advertisement Banner - Fixed Width and Height */}
//         <div 
//           className="lg:w-1/3 hidden lg:block h-[650px] sticky top-32"
//           onMouseEnter={() => setIsAdHovered(true)}
//           onMouseLeave={() => setIsAdHovered(false)}
//         >
//           <div className="h-full rounded-xl shadow-lg overflow-hidden relative bg-gray-100">
//             {ads.map((ad, index) => (
//               <div
//                 key={ad.id}
//                 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentAd ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}
//               >
//                 <div className="relative h-full w-full">
//                   <Image
//                     src={ad.image}
//                     alt={ad.imageAlt}
//                     fill
//                     className="object-cover rounded-xl"
//                     priority={index < 3}
//                     onError={(e) => {
//                       console.error(`Failed to load image: ${ad.image}`)
//                       e.currentTarget.src = '/images/fallback-ad.png'
//                     }}
//                   />
//                   <a
//                     href={ad.buttonLink}
//                     className="absolute inset-0 z-20"
//                     aria-label={ad.imageAlt}
//                   />
//                 </div>
//               </div>
//             ))}

//             {/* Navigation Dots */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
//               {ads.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentAd(index)}
//                   className={`w-3 h-3 rounded-full transition-all ${index === currentAd ? 'bg-white shadow-md' : 'bg-white/50'}`}
//                   aria-label={`View ad ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom Styles */}
//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #f1f5f9;
//           border-radius: 3px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #cbd5e1;
//           border-radius: 3px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #94a3b8;
//         }
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   )
// }
'use client'
import { useState, useEffect, useRef } from 'react'
import { Search, MapPin, Building, DollarSign, Clock, Star, ArrowRight, Filter, Bookmark, Eye, Zap, TrendingUp, Users, Award, ChevronDown, Globe, Calendar, BookOpen, Briefcase, Target, BarChart3, Code, Palette, Lightbulb, GraduationCap } from 'lucide-react'
import Image from 'next/image'

export default function SyntureHero() {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [currentText, setCurrentText] = useState(0)
  const [currentAd, setCurrentAd] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [filteredItems, setFilteredItems] = useState([])
  const [isAdHovered, setIsAdHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [savedItems, setSavedItems] = useState(new Set())
  const [showFilters, setShowFilters] = useState(false)
  const [perspective, setPerspective] = useState('business') // 'business' or 'student'
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const adIntervalRef = useRef(null)

  const businessTexts = [
    "Grow Your Business Today",
    "Data-Driven Marketing Solutions",
    "Creative Digital Strategies",
    "Results That Matter"
  ]

  const studentTexts = [
    "Master Digital Marketing",
    "Learn From Industry Experts", 
    "Build Your Career",
    "Start Your Journey"
  ]

  const businessCategories = ['All', 'SEO', 'Social Media', 'Web Development', 'Content Marketing', 'Lead Generation']
  const studentCategories = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Certification']
  const courseLevels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Professional']

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

  const businessServices = [
    {
      id: 1,
      title: "Complete SEO Optimization",
      company: "Synture Digital",
      location: "Global Service",
      price: "Starting at $2,500/month",
      type: "SEO Service",
      posted: "Always Available",
      logo: "https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=SEO",
      description: "Boost your website rankings with our comprehensive SEO strategies and data-driven approach.",
      rating: 4.9,
      clients: 150,
      featured: true,
      popular: true,
      skills: ["Technical SEO", "Content Strategy", "Link Building"]
    },
    {
      id: 2,
      title: "Social Media Marketing",
      company: "Synture Digital",
      location: "Global Service", 
      price: "Starting at $1,800/month",
      type: "Social Media",
      posted: "Always Available",
      logo: "https://via.placeholder.com/40x40/10B981/FFFFFF?text=SMM",
      description: "Engage your audience and grow your brand with strategic social media campaigns.",
      rating: 4.8,
      clients: 200,
      featured: false,
      popular: true,
      skills: ["Content Creation", "Community Management", "Analytics"]
    },
    {
      id: 3,
      title: "Custom Web Development",
      company: "Synture Digital",
      location: "Global Service",
      price: "Starting at $5,000",
      type: "Web Development",
      posted: "Always Available", 
      logo: "https://via.placeholder.com/40x40/8B5CF6/FFFFFF?text=WEB",
      description: "Build responsive, high-performance websites that convert visitors into customers.",
      rating: 4.9,
      clients: 180,
      featured: true,
      popular: false,
      skills: ["React", "Node.js", "E-commerce"]
    },
    {
      id: 4,
      title: "Lead Generation Campaign",
      company: "Synture Digital",
      location: "Global Service",
      price: "Starting at $3,200/month",
      type: "Lead Generation",
      posted: "Always Available",
      logo: "https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=LG",
      description: "Generate qualified leads with targeted campaigns and conversion optimization.",
      rating: 4.7,
      clients: 120,
      featured: false,
      popular: true,
      skills: ["PPC", "Landing Pages", "CRM Integration"]
    },
    {
      id: 5,
      title: "Content Marketing Strategy",
      company: "Synture Digital",
      location: "Global Service",
      price: "Starting at $2,200/month",
      type: "Content Marketing",
      posted: "Always Available",
      logo: "https://via.placeholder.com/40x40/EF4444/FFFFFF?text=CM",
      description: "Create compelling content that drives engagement and converts prospects into customers.",
      rating: 4.8,
      clients: 160,
      featured: false,
      popular: true,
      skills: ["Content Strategy", "Copywriting", "Video Marketing"]
    },
    {
      id: 6,
      title: "Digital Branding Package",
      company: "Synture Digital",
      location: "Global Service",
      price: "Starting at $4,500",
      type: "Digital Branding",
      posted: "Always Available",
      logo: "https://via.placeholder.com/40x40/06B6D4/FFFFFF?text=DB",
      description: "Build a strong digital brand identity that resonates with your target audience.",
      rating: 4.9,
      clients: 90,
      featured: true,
      popular: false,
      skills: ["Brand Strategy", "Logo Design", "Brand Guidelines"]
    }
  ]

  const studentCourses = [
    {
      id: 1,
      title: "Complete Digital Marketing Mastery",
      company: "Synture Academy",
      location: "Online Course",
      price: "$299 (One-time)",
      type: "Certification Course",
      posted: "Enrolling Now",
      logo: "https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=DM",
      description: "Master all aspects of digital marketing from SEO to social media in this comprehensive course.",
      rating: 4.9,
      clients: 1200,
      featured: true,
      popular: true,
      skills: ["SEO", "Social Media", "PPC", "Analytics"]
    },
    {
      id: 2,
      title: "Advanced SEO Specialist Program",
      company: "Synture Academy", 
      location: "Online Course",
      price: "$199 (One-time)",
      type: "Specialization",
      posted: "Enrolling Now",
      logo: "https://via.placeholder.com/40x40/10B981/FFFFFF?text=SEO",
      description: "Become an SEO expert with hands-on projects and real-world case studies.",
      rating: 4.8,
      clients: 800,
      featured: false,
      popular: true,
      skills: ["Technical SEO", "Keyword Research", "Link Building"]
    },
    {
      id: 3,
      title: "Social Media Marketing Pro",
      company: "Synture Academy",
      location: "Online Course", 
      price: "$149 (One-time)",
      type: "Specialization",
      posted: "Enrolling Now",
      logo: "https://via.placeholder.com/40x40/8B5CF6/FFFFFF?text=SMM",
      description: "Create engaging social media strategies that drive real business results.",
      rating: 4.7,
      clients: 950,
      featured: true,
      popular: false,
      skills: ["Content Strategy", "Advertising", "Community Management"]
    },
    {
      id: 4,
      title: "Web Development for Marketers",
      company: "Synture Academy",
      location: "Online Course",
      price: "$249 (One-time)", 
      type: "Technical Course",
      posted: "Enrolling Now",
      logo: "https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=WEB",
      description: "Learn to build marketing websites and landing pages that convert.",
      rating: 4.6,
      clients: 600,
      featured: false,
      popular: true,
      skills: ["HTML/CSS", "JavaScript", "WordPress"]
    },
    {
      id: 5,
      title: "PPC Advertising Mastery",
      company: "Synture Academy",
      location: "Online Course",
      price: "$179 (One-time)",
      type: "Specialization",
      posted: "Enrolling Now",
      logo: "https://via.placeholder.com/40x40/EF4444/FFFFFF?text=PPC",
      description: "Master Google Ads, Facebook Ads, and other PPC platforms for maximum ROI.",
      rating: 4.7,
      clients: 720,
      featured: false,
      popular: true,
      skills: ["Google Ads", "Facebook Ads", "Campaign Optimization"]
    },
    {
      id: 6,
      title: "Content Marketing Fundamentals",
      company: "Synture Academy",
      location: "Online Course",
      price: "$129 (One-time)",
      type: "Beginner Course",
      posted: "Enrolling Now",
      logo: "https://via.placeholder.com/40x40/06B6D4/FFFFFF?text=CM",
      description: "Learn to create compelling content that engages audiences and drives conversions.",
      rating: 4.5,
      clients: 1100,
      featured: true,
      popular: true,
      skills: ["Content Strategy", "Copywriting", "Content Planning"]
    }
  ]

  const currentTexts = perspective === 'business' ? businessTexts : studentTexts
  const currentItems = perspective === 'business' ? businessServices : studentCourses
  const currentCategories = perspective === 'business' ? businessCategories : studentCategories

  useEffect(() => {
    setIsVisible(true)
    
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % currentTexts.length)
    }, 3500)

    return () => {
      clearInterval(textInterval)
    }
  }, [currentTexts.length])

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

    let filtered = currentItems.filter(item => {
      const matchesSearch = searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesLocation = location === '' ||
        item.location.toLowerCase().includes(location.toLowerCase())

      const matchesCategory = selectedCategory === 'All' || 
        item.type.includes(selectedCategory) ||
        item.skills.some(skill => skill.toLowerCase().includes(selectedCategory.toLowerCase()))

      return matchesSearch && matchesLocation && matchesCategory
    })

    // Sort by featured and popular items first
    filtered = filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      if (a.popular && !b.popular) return -1
      if (!a.popular && b.popular) return 1
      return 0
    })

    setFilteredItems(filtered)
    setShowResults(true)
  }

  const handleClearSearch = () => {
    setSearchTerm('')
    setLocation('')
    setSelectedCategory('All')
    setSelectedLevel('All')
    setShowResults(false)
    setFilteredItems([])
    setShowFilters(false)
  }

  const toggleSaveItem = (itemId) => {
    setSavedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const switchPerspective = (newPerspective) => {
    setPerspective(newPerspective)
    setCurrentText(0)
    handleClearSearch()
  }

  const quickSearchTerms = perspective === 'business' 
    ? ["SEO Optimization", "Social Media", "Web Development", "Lead Generation", "Content Marketing"]
    : ["Digital Marketing", "SEO Course", "Social Media", "Web Development", "PPC Training"]

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-3/4 flex flex-col">
          {/* Perspective Toggle */}
          <div className="mb-6">
            <div className="flex items-center justify-center lg:justify-start">
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-2 shadow-lg border border-white/40">
                <div className="flex">
                  <button
                    onClick={() => switchPerspective('business')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      perspective === 'business'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Briefcase className="w-4 h-4" />
                    For Business
                  </button>
                  <button
                    onClick={() => switchPerspective('student')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      perspective === 'student'
                        ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4" />
                    For Students
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Hero Section */}
          <div className="mb-8">
            {/* Company Badge */}
          

            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="relative inline-block">
                <span 
                  key={`${perspective}-${currentText}`}
                  className={`bg-gradient-to-r ${
                    perspective === 'business' 
                      ? 'from-blue-600 via-purple-600 to-indigo-800' 
                      : 'from-green-600 via-teal-600 to-blue-600'
                  } bg-clip-text text-transparent animate-fadeInUp`}
                >
                  {currentTexts[currentText]}
                </span>
                <div className={`absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r ${
                  perspective === 'business'
                    ? 'from-blue-600 via-purple-600 to-indigo-600'
                    : 'from-green-600 via-teal-600 to-blue-600'
                } rounded-full transform origin-left animate-scaleX`}></div>
              </span>
            </h1>
            
            <p className="text-md sm:text-xl text-gray-600 leading-relaxed mb-6 max-w-3xl">
              {perspective === 'business' 
                ? "At Synture, we combine creativity with data-driven strategies to deliver results. Our team of digital marketing experts, SEO specialists, and web developers work together to create solutions that not only look great but also drive real business growth."
                : "Learn from industry experts and master the skills that matter. Our comprehensive courses combine theoretical knowledge with practical projects to help you build a successful career in digital marketing."
              }
            </p>

            {/* Dynamic Stats - FIXED VERSION */}
            <div className="flex flex-wrap gap-6 mb-6">
              {(perspective === 'business' ? [
                { icon: Target, number: '500+', label: 'Projects Delivered', color: 'text-blue-600' },
                { icon: BarChart3, number: '250%', label: 'Avg ROI Increase', color: 'text-purple-600' },
                { icon: Users, number: '300+', label: 'Happy Clients', color: 'text-green-600' },
                { icon: Award, number: '5+ Years', label: 'Experience', color: 'text-orange-600' }
              ] : [
                { icon: BookOpen, number: '50+', label: 'Expert Courses', color: 'text-green-600' },
                { icon: Users, number: '10,000+', label: 'Students Enrolled', color: 'text-teal-600' },
                { icon: Award, number: '95%', label: 'Job Placement', color: 'text-blue-600' },
                { icon: Globe, number: '24/7', label: 'Learning Support', color: 'text-orange-600' }
              ]).map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-2 group cursor-pointer">
                    <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-gray-100 group-hover:to-gray-200 transition-all duration-300">
                      <IconComponent className={`w-4 h-4 ${stat.color}`} />
                    </div>
                    <div>
                      <div className={`text-lg font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-600 text-xs">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Search Terms */}
            <div className="mb-4">
              {/* <p className="text-sm text-gray-500 mb-2">
                {perspective === 'business' ? 'Popular services:' : 'Popular courses:'}
              </p> */}
              <div className="flex flex-wrap gap-2">
                {quickSearchTerms.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchTerm(term)
                      handleSearch()
                    }}
                    className={`px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 transform hover:scale-105 ${
                      perspective === 'business' ? 'hover:bg-blue-50' : 'hover:bg-green-50'
                    }`}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Search Form */}
          <div className={`mb- transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '0.1s'}}>
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-6 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${
                perspective === 'business' 
                  ? 'from-blue-50/50 to-purple-50/50' 
                  : 'from-green-50/50 to-teal-50/50'
              } opacity-50`}></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex-1 relative group">
                    <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:transition-colors ${
                      perspective === 'business' ? 'group-focus-within:text-blue-500' : 'group-focus-within:text-green-500'
                    }`} />
                    <input
                      type="text"
                      placeholder={perspective === 'business' 
                        ? "Service type, industry, or specific needs..." 
                        : "Course title, skills, or certification..."}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                      className={`w-full pl-12 pr-4 py-4 text-gray-800 border border-gray-200 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white text-lg ${
                        perspective === 'business' ? 'focus:ring-blue-500' : 'focus:ring-green-500'
                      }`}
                    />
                  </div>
                  <div className="flex-1 relative group">
                    <MapPin className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:transition-colors ${
                      perspective === 'business' ? 'group-focus-within:text-blue-500' : 'group-focus-within:text-green-500'
                    }`} />
                    <input
                      type="text"
                      placeholder={perspective === 'business' 
                        ? "Your business location or global..." 
                        : "Preferred learning format..."}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                      className={`w-full pl-12 pr-4 py-4 text-gray-800 border border-gray-200 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white text-lg ${
                        perspective === 'business' ? 'focus:ring-blue-500' : 'focus:ring-green-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Advanced Filters */}
                {showFilters && (
                  <div className="mb-4 p-4 bg-gray-50 rounded-xl border border-gray-200 animate-slideDown">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {perspective === 'business' ? 'Service Category' : 'Course Category'}
                        </label>
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className={`w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:border-transparent ${
                            perspective === 'business' ? 'focus:ring-blue-500' : 'focus:ring-green-500'
                          }`}
                        >
                          {currentCategories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                      {perspective === 'student' && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
                          <select
                            value={selectedLevel}
                            onChange={(e) => setSelectedLevel(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          >
                            {courseLevels.map(level => (
                              <option key={level} value={level}>{level}</option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleSearch}
                    className={`flex-1 bg-gradient-to-r text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group relative overflow-hidden ${
                      perspective === 'business' 
                        ? 'from-blue-600 via-purple-600 to-indigo-600 hover:shadow-blue-500/30' 
                        : 'from-green-600 via-teal-600 to-blue-600 hover:shadow-green-500/30'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      perspective === 'business'
                        ? 'from-blue-700 via-purple-700 to-indigo-700'
                        : 'from-green-700 via-teal-700 to-blue-700'
                    }`}></div>
                    <Search className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform relative z-10" />
                    <span className="relative z-10">
                      {perspective === 'business' ? 'Find Services' : 'Find Courses'}
                    </span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                  </button>
                  
                  <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className={`bg-white border-2 border-gray-200 text-gray-700 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group ${
                      perspective === 'business' 
                        ? 'hover:border-blue-300 hover:text-blue-700' 
                        : 'hover:border-green-300 hover:text-green-700'
                    }`}
                  >
                    <Filter className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Filters
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showResults && (
                    <button
                      onClick={handleClearSearch}
                      className="bg-red-50 hover:bg-red-100 border-2 border-red-200 hover:border-red-300 text-red-700 px-6 py-4 rounded-xl font-semibold transition-all duration-300"
                    >
                      Clear All
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Results Section */}
          <div className={`flex-1 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '0.4s'}}>
            {showResults ? (
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40 p-6 min-h-[500px] flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {perspective === 'business' ? 'Our Services' : 'Available Courses'}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      {filteredItems.length} {perspective === 'business' ? 'services' : 'courses'} found matching your criteria
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                      perspective === 'business' 
                        ? 'bg-blue-50 hover:bg-blue-100 text-blue-700' 
                        : 'bg-green-50 hover:bg-green-100 text-green-700'
                    }`}>
                      <Calendar className="w-4 h-4" />
                      Sort by: Featured
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {filteredItems.length > 0 ? (
                  <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                    {filteredItems.map((item) => (
                      <div key={item.id} className="border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group relative overflow-hidden bg-white/70 backdrop-blur-sm">
                        {/* Status badges */}
                        <div className="absolute top-0 right-0 flex">
                          {item.featured && (
                            <div className="bg-gradient-to-l from-yellow-400 to-amber-500 text-white text-xs px-3 py-1 rounded-bl-xl font-semibold shadow-sm">
                              ⭐ Featured
                            </div>
                          )}
                          {item.popular && (
                            <div className={`bg-gradient-to-l text-white text-xs px-3 py-1 rounded-bl-xl font-semibold shadow-sm ${
                              perspective === 'business' 
                                ? 'from-blue-500 to-purple-500' 
                                : 'from-green-500 to-teal-500'
                            }`}>
                              🔥 Popular
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <img src={item.logo} alt={item.company} className="w-14 h-14 rounded-xl shadow-md" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className={`font-bold text-xl text-gray-900 group-hover:transition-colors leading-tight ${
                                perspective === 'business' ? 'group-hover:text-blue-600' : 'group-hover:text-green-600'
                              }`}>
                                {item.title}
                              </h3>
                              <button
                                onClick={() => toggleSaveItem(item.id)}
                                className={`p-2 rounded-full transition-all duration-300 ${
                                  savedItems.has(item.id) 
                                    ? `shadow-md ${
                                        perspective === 'business' 
                                          ? 'bg-blue-100 text-blue-600' 
                                          : 'bg-green-100 text-green-600'
                                      }` 
                                    : `bg-gray-100 text-gray-400 ${
                                        perspective === 'business' 
                                          ? 'hover:bg-blue-100 hover:text-blue-600' 
                                          : 'hover:bg-green-100 hover:text-green-600'
                                      }`
                                }`}
                              >
                                <Bookmark className="w-4 h-4" fill={savedItems.has(item.id) ? 'currentColor' : 'none'} />
                              </button>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                              <span className="flex items-center gap-1 font-medium">
                                <Building className="w-4 h-4" />
                                {item.company}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {item.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                {item.rating}
                              </span>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                              <span className="flex items-center gap-1 font-semibold text-gray-900">
                                <DollarSign className="w-4 h-4 text-green-600" />
                                {item.price}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {item.posted}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {item.clients} {perspective === 'business' ? 'clients served' : 'students enrolled'}
                              </span>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {item.skills.map((skill, index) => (
                                <span 
                                  key={index} 
                                  className={`px-2 py-1 rounded-md text-xs font-medium border ${
                                    perspective === 'business' 
                                      ? 'bg-blue-50 text-blue-700 border-blue-100' 
                                      : 'bg-green-50 text-green-700 border-green-100'
                                  }`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                            
                            <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-2">{item.description}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  perspective === 'business' 
                                    ? 'bg-indigo-100 text-indigo-800' 
                                    : 'bg-teal-100 text-teal-800'
                                }`}>
                                  {item.type}
                                </span>
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                                  {item.clients} {perspective === 'business' ? 'clients' : 'enrolled'}
                                </span>
                              </div>
                              
                              <div className="flex gap-3">
                                <button className={`text-gray-600 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 text-sm font-medium ${
                                  perspective === 'business' 
                                    ? 'hover:text-blue-600 hover:border-blue-200' 
                                    : 'hover:text-green-600 hover:border-green-200'
                                }`}>
                                  Learn More
                                </button>
                                <button 
                                  onClick={() => { window.location.href = perspective === 'business' ? "/contact" : "/enroll" }}
                                  className={`text-white px-6 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 ${
                                    perspective === 'business' 
                                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-blue-500/25' 
                                      : 'bg-gradient-to-r from-green-600 to-teal-600 hover:shadow-green-500/25'
                                  }`}
                                >
                                  {perspective === 'business' ? 'Get Quote' : 'Enroll Now'}
                                  <ArrowRight className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-center py-12">
                    <div>
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                        perspective === 'business' 
                          ? 'bg-gradient-to-r from-blue-100 to-purple-100' 
                          : 'bg-gradient-to-r from-green-100 to-teal-100'
                      }`}>
                        <Search className="w-10 h-10 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        No {perspective === 'business' ? 'services' : 'courses'} found
                      </h3>
                      <p className="text-gray-600 mb-4 max-w-md">
                        Try adjusting your search criteria or contact us for custom solutions.
                      </p>
                      <button
                        onClick={handleClearSearch}
                        className={`text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 ${
                          perspective === 'business' 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                            : 'bg-gradient-to-r from-green-600 to-teal-600'
                        }`}
                      >
                        Clear All Filters
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>

        {/* Enhanced Advertisement Banner */}
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

      {/* Enhanced Custom Styles */}
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
        
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 200px;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-scaleX {
          animation: scaleX 1s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}

