// 'use client'
// import { useState, useEffect } from 'react'
// import { Search, MapPin } from 'lucide-react'
// import { useRouter } from 'next/navigation'
// import Image from 'next/image'

// export default function JobBoardHero() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [location, setLocation] = useState('')
//   const [currentText, setCurrentText] = useState(0)
//   const [currentAd, setCurrentAd] = useState(0)
//   const router = useRouter()

//   const texts = [
//     "Find Your Dream Job Today",
//     "Discover Exciting Opportunities",
//     "Connect With Top Employers",
//     "Advance Your Career"
//   ]

//   const ads = [
//     {
//       id: 1,
//       title: "Hiring Top Talent?",
//       description: "Reach 50,000+ qualified candidates",
//       cta: "Post Your Job",
//       bgColor: "from-blue-600 to-blue-800",
//       image: "/ad1.jpg"
//     },
//     {
//       id: 2,
//       title: "Premium Listings",
//       description: "Get 3x more applications",
//       cta: "Upgrade Now",
//       bgColor: "from-purple-600 to-purple-800",
//       image: "/ad2.jpg"
//     },
//     {
//       id: 3,
//       title: "Featured Employer",
//       description: "Stand out from competitors",
//       cta: "Learn More",
//       bgColor: "from-green-600 to-green-800",
//       image: "/ad3.jpg"
//     }
//   ]

//   useEffect(() => {
//     const textInterval = setInterval(() => {
//       setCurrentText((prev) => (prev + 1) % texts.length)
//     }, 3000)

//     const adInterval = setInterval(() => {
//       setCurrentAd((prev) => (prev + 1) % ads.length)
//     }, 3000)

//     return () => {
//       clearInterval(textInterval)
//       clearInterval(adInterval)
//     }
//   }, [])

//   const handleSearch = () => {
//     router.push('/jobs?q=' + encodeURIComponent(searchTerm) + '&location=' + encodeURIComponent(location))
//   }

//   return (
//     <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden h-screen min-h-[800px]">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
//         <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
//       </div>

//       <div className="container mx-auto relative z-10 flex flex-col lg:flex-row gap-8 h-full">
//         {/* Main Content (75% width) */}
//         <div className="lg:w-3/4 flex flex-col justify-center">
//           <div className="max-w-4xl mx-auto text-center lg:text-left">


//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//               <span className="relative">
//                 <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
//                   {texts[currentText]}
//                 </span>
//                 <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform scale-x-0 animate-pulse"></div>
//               </span>
//             </h1>

//             <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
//               Search through thousands of job listings from top companies worldwide. 
//               Find the perfect match for your skills and career aspirations.
//             </p>

//             {/* Search Form */}
//             <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 mb-10">
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="text"
//                     placeholder="Job title, keywords, or company"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full pl-12 pr-4 py-3 text-gray-800 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div className="flex-1 relative">
//                   <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="text"
//                     placeholder="Location"
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     className="w-full pl-12 pr-4 py-3 text-gray-800 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <button
//                   onClick={handleSearch}
//                   className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
//                 >
//                   Search Jobs
//                 </button>
//               </div>
//             </div>

//             {/* Stats */}
//             <div className="flex flex-wrap justify-center lg:justify-start gap-8">
//               {[
//                 { number: '10,000+', label: 'Jobs Available' },
//                 { number: '5,000+', label: 'Companies Hiring' },
//                 { number: '98%', label: 'Success Rate' }
//               ].map((stat, index) => (
//                 <div key={index} className="text-center group">
//                   <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
//                     {stat.number}
//                   </div>
//                   <div className="text-gray-600 text-sm">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Advertisement Banner (25% width) - Rotating Ads */}
//         <div className="lg:w-1/4 hidden lg:block h-full">
//           <div className="h-full rounded-xl shadow-lg overflow-hidden transition-all duration-1000 ease-in-out">
//             {ads.map((ad, index) => (
//               <div 
//                 key={ad.id}
//                 className={`relative h-full w-full transition-opacity duration-1000 ${index === currentAd ? 'opacity-100' : 'opacity-0 absolute top-0'}`}
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-b ${ad.bgColor}`}></div>
//                 <Image
//                   src={ad.image}
//                   alt={ad.title}
//                   fill
//                   className="object-cover mix-blend-overlay"
//                   priority
//                 />
//                 <div className="relative h-full flex flex-col justify-end p-6 text-white">
//                   <h3 className="text-2xl font-bold mb-2">{ad.title}</h3>
//                   <p className="mb-4">{ad.description}</p>
//                   <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
//                     {ad.cta}
//                   </button>
//                 </div>
//                 <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
//                   Advertisement
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'
import { useState, useEffect } from 'react'
import { Search, MapPin, Building, DollarSign, Clock } from 'lucide-react'
import Image from 'next/image'

export default function JobBoardHero() {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [currentText, setCurrentText] = useState(0)
  const [currentAd, setCurrentAd] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [filteredJobs, setFilteredJobs] = useState([])

  const texts = [
    "Find Your Dream Job Today",
    "Discover Exciting Opportunities",
    "Connect With Top Employers",
    "Advance Your Career"
  ]

  // const ads = [
  //   {
  //     id: 1,
  //     title: "Search Engine Optimization",
  //     description: "Reach 50,000+ qualified candidates",
  //    cta: "Learn More",
  //     bgColor: "from-blue-600 to-blue-800",
  //     textColor: "text-white"
  //   },
  //   {
  //     id: 2,
  //     title: "Social Media Marketing",
  //     description: "Get 3x more applications",
  //    cta: "Learn More",
  //     bgColor: "from-purple-600 to-purple-800",
  //     textColor: "text-white"
  //   },
  //   {
  //     id: 3,
  //     title: "Email Marketing",
  //     description: "Stand out from competitors",
  //     cta: "Learn More",
  //     bgColor: "from-green-600 to-green-800",
  //     textColor: "text-white"
  //   },
  //   {
  //     id: 4,
  //     title: "Lead Generation",
  //     description: "Create professional lead generation",
  //    cta: "Learn More",
  //     bgColor: "from-orange-600 to-red-800",
  //     textColor: "text-white"
  //   },
  //   {
  //     id: 5,
  //     title: "Online Reputation Management",
  //     description: "Get public fame guidance",
  //    cta: "Learn More",
  //     bgColor: "from-teal-600 to-cyan-800",
  //     textColor: "text-white"
  //   }
  // ]

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
      image: "/images/banner/content-marketing-1.png",
      imageAlt: "Contetnt Marketing",
      buttonLink: "/services/content-marketing"
    },
    {
      id: 4,
      image: "/images/banner/email-marketing-1.png",
      imageAlt: "Email Marketing",
      buttonLink: "/services/email-marketing"
    },
    {
      id: 5,
      image: "/images/banner/lead-generation-1.png",
      imageAlt: "Lead Generation",
      buttonLink: "/services/lead-generation"
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
    },
    // {
    //   id: 9,
    //   image: "/images/banner/lead-generation-1.png",
    //   imageAlt: "Lead Generation",
    //   buttonLink: "/services/lead-generation"
    // },
  ];

  const sampleJobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$120,000 - $180,000",
      type: "Full-time",
      posted: "2 days ago",
      logo: "https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=TC",
      description: "Join our innovative team to build scalable web applications using React and Node.js."
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "New York, NY",
      salary: "$100,000 - $150,000",
      type: "Full-time",
      posted: "1 day ago",
      logo: "https://via.placeholder.com/40x40/10B981/FFFFFF?text=SX",
      description: "Lead product strategy and execution for our growing SaaS platform."
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "Los Angeles, CA",
      salary: "$80,000 - $120,000",
      type: "Full-time",
      posted: "3 days ago",
      logo: "https://via.placeholder.com/40x40/8B5CF6/FFFFFF?text=DS",
      description: "Create intuitive user experiences for mobile and web applications."
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataCorp",
      location: "Seattle, WA",
      salary: "$110,000 - $160,000",
      type: "Full-time",
      posted: "1 day ago",
      logo: "https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=DC",
      description: "Analyze complex datasets and build predictive models using Python and ML."
    },
    {
      id: 5,
      title: "Marketing Manager",
      company: "BrandCo",
      location: "Chicago, IL",
      salary: "$70,000 - $100,000",
      type: "Full-time",
      posted: "4 days ago",
      logo: "https://via.placeholder.com/40x40/EF4444/FFFFFF?text=BC",
      description: "Develop and execute marketing campaigns across digital channels."
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Austin, TX",
      salary: "$95,000 - $140,000",
      type: "Full-time",
      posted: "2 days ago",
      logo: "https://via.placeholder.com/40x40/06B6D4/FFFFFF?text=CT",
      description: "Manage cloud infrastructure and CI/CD pipelines using AWS and Docker."
    }
  ]

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)

    const adInterval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length)
    }, 3000)

    return () => {
      clearInterval(textInterval)
      clearInterval(adInterval)
    }
  }, [])

  const handleSearch = () => {
    if (searchTerm.trim() === '' && location.trim() === '') {
      setShowResults(false)
      return
    }

    const filtered = sampleJobs.filter(job => {
      const matchesSearch = searchTerm === '' ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesLocation = location === '' ||
        job.location.toLowerCase().includes(location.toLowerCase())

      return matchesSearch && matchesLocation
    })

    setFilteredJobs(filtered)
    setShowResults(true)
  }

  const handleClearSearch = () => {
    setSearchTerm('')
    setLocation('')
    setShowResults(false)
    setFilteredJobs([])
  }

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row gap-8 h-full">
        {/* Main Content */}
        <div className="lg:w-3/4 flex flex-col min-h-full">
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            {/* Hero Title and Description - Fixed Height Container */}
            <div className="mb-8 min-h-[200px] flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    {texts[currentText]}
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform scale-x-0 animate-pulse"></div>
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Search through thousands of job listings from top companies worldwide.
                Find the perfect match for your skills and career aspirations.
              </p>
            </div>

            {/* Search Form - Fixed Position */}
            <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 text-gray-800 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 text-gray-800 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  Search Jobs
                </button>
                {showResults && (
                  <button
                    onClick={handleClearSearch}
                    className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Content Area - Fixed Height with Conditional Content */}
            <div className="min-h-[400px]">
              {showResults ? (
                /* Search Results */
                <div className="bg-white rounded-xl shadow-lg p-6 h-[400px] overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Search Results</h2>
                    <span className="text-gray-600">{filteredJobs.length} jobs found</span>
                  </div>

                  {filteredJobs.length > 0 ? (
                    <div className="space-y-4">
                      {filteredJobs.map((job) => (
                        <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex items-start gap-4">
                            <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg" />
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg text-gray-900 mb-1">{job.title}</h3>
                              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                <span className="flex items-center gap-1">
                                  <Building className="w-4 h-4" />
                                  {job.company}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {job.location}
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                <span className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4" />
                                  {job.salary}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {job.posted}
                                </span>
                              </div>
                              <p className="text-gray-700 text-sm">{job.description}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                                {job.type}
                              </span>
                              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all">
                                Apply Now
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-600 text-lg">No jobs found matching your criteria.</p>
                      <p className="text-gray-500 text-sm mt-2">Try adjusting your search terms or location.</p>
                    </div>
                  )}
                </div>
              ) : (
                /* Stats - Default Content */
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 items-center h-full">
                  {[
                    { number: '10,000+', label: 'Jobs Available' },
                    { number: '5,000+', label: 'Companies Hiring' },
                    { number: '98%', label: 'Success Rate' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>


        {/* Advertisement Banner - Fixed Width */}
        <div className="lg:w-1/4 lg:block hidden h-[650px] w-[360px] sticky top-8">
          <div className="h-full rounded-xl shadow-lg overflow-hidden relative bg-gray-100">
            {ads.map((ad, index) => (
              <div
                key={ad.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentAd ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}
              >
                {/* Image Container - full height */}
                <div className="relative h-full w-full">
                  <Image
                    src={ad.image}
                    alt={ad.imageAlt}
                    fill
                    className="object-cover rounded-xl"
                    priority={index < 3}
                    onError={(e) => {
                      console.error(`Failed to load image: ${ad.image}`);
                      e.currentTarget.src = '/images/fallback-ad.png';
                    }}
                  />
                  <a
                    href={ad.buttonLink}
                    className="absolute inset-0 z-20"
                    aria-label={ad.imageAlt}
                  />

                  <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Advertisement
                  </div>
                </div>

              </div>
            ))}

            {/* Navigation Dots - positioned at the very bottom */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
              {ads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    console.log(`Clicked ad ${index + 1}`);
                    setCurrentAd(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentAd ? 'bg-white shadow-md' : 'bg-white/50'}`}
                  aria-label={`View ad ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}