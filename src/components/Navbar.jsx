'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Users, Briefcase, Megaphone, Phone, Book, School, Code, Cpu, Smartphone, Database, BrainCircuit } from 'lucide-react'
// import LoginAuthModal from './LoginAuthModal'
import RegisterAuthModal from './RegisterAuthModal'
import { useRouter } from 'next/navigation';  

export default function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      setIsMenuOpen(false)
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  const handleTrainingNavigation = (trainingType) => {
    setIsMenuOpen(false)
    router.push(`/trainings/${trainingType}`)
  }

  const menuItems = [
    { name: 'Home', id: 'home' },
    {
      name: 'About Us',
      id: 'about',
      icon: <Users className="w-4 h-4" />
    },
    // {
    //   name: 'Recruitment',
    //   id: 'recruitment',
    //   icon: <Briefcase className="w-4 h-4" />,
    //   dropdown: [
    //     { name: 'Job Listings', id: 'jobs', icon: '🔍' },
    //     { name: 'Career Growth', id: 'careers', icon: '📈' },
    //     { name: 'Company Culture', id: 'culture', icon: '🏢' },
    //     { name: 'Hiring Process', id: 'hiring', icon: '🔄' },
    //     { name: 'Candidate Success', id: 'success', icon: '🏆' }
    //   ]
    // },
    {
      name: 'Digital Marketing',
      id: 'marketing',
      icon: <Megaphone className="w-4 h-4" />,
      dropdown: [
        { name: 'Social Media', id: 'social', icon: '📱' },
        { name: 'Lead Generation', id: 'leadgen', icon: '🎯' },
        { name: 'Email Marketing', id: 'email', icon: '✉️' },
        { name: 'SEO Services', id: 'seo', icon: '🔎' },
        { name: 'Content Strategy', id: 'content', icon: '✍️' },
        { name: 'PPC Advertising', id: 'ppc', icon: '💰' },   
      ]
    },
    {
      name: 'Trainings',
      id: 'trainings',
      icon: <School className="w-4 h-4" />,
      dropdown: [
        { 
          name: 'Web Development', 
          id: 'web-development', 
          icon: <Code className="w-4 h-4" />,
          onClick: () => handleTrainingNavigation('web-development')
        },
        { 
          name: 'Mobile Development', 
          id: 'mobile-development', 
          icon: <Smartphone className="w-4 h-4" />,
          onClick: () => handleTrainingNavigation('mobile-development')
        },
        { 
          name: 'DevOps', 
          id: 'devops', 
          icon: <Cpu className="w-4 h-4" />,
          onClick: () => handleTrainingNavigation('devops')
        },
        { 
          name: 'Machine Learning', 
          id: 'machine-learning', 
          icon: <BrainCircuit className="w-4 h-4" />,
          onClick: () => handleTrainingNavigation('machine-learning')
        },
        { 
          name: 'Data Science', 
          id: 'data-science', 
          icon: <Database className="w-4 h-4" />,
          onClick: () => handleTrainingNavigation('data-science')
        },
      ]
    },
  { name: 'Contact Us', id: 'contact', icon: <Phone className="w-4 h-4" /> },
  { name: 'Get a Quote', id: 'get-a-quote', icon: <Phone className="w-4 h-4" />, onClick: () => router.push('/get-a-quote') }
  ]

  return (
    <>
      <header className={`fixed top-0 px-10 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
        : 'bg-white/80 backdrop-blur-md shadow-sm'
        }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative rounded-lg">
                  <img src="/images/synture-without-tagline.png" alt="" className='h-12 rounded-xl' />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Synture
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
              {menuItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.dropdown ? (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => toggleDropdown(item.id)}
                        onMouseEnter={() => setOpenDropdown(item.id)}
                        className="relative px-4 py-2 text-gray-700 font-medium flex items-center space-x-2 transition-all duration-300 hover:text-blue-600 group"
                      >
                        {item.icon}
                        <span>{item.name}</span>
                        <motion.div
                          animate={{ rotate: openDropdown === item.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                      </motion.button>

                      <AnimatePresence>
                        {openDropdown === item.id && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            {item.dropdown.map((subItem) => (
                              <motion.button
                                key={subItem.id}
                                whileHover={{ x: 5 }}
                                onClick={subItem.onClick ? subItem.onClick : () => scrollToSection(subItem.id)}
                                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 flex items-center space-x-2 transition-colors duration-200"
                              >
                                {subItem.icon && <span>{subItem.icon}</span>}
                                <span>{subItem.name}</span>
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={item.onClick ? item.onClick : () => scrollToSection(item.id)}
                      className="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-blue-600 group flex items-center space-x-2"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </motion.button>
                  )}
                </div>
              ))}
            </nav>

            {/* Auth Buttons & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                 onClick={() => router.push('/login')}
                  className="px-5 py-2.5 text-gray-700 font-medium rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  Login
                </motion.button>
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowRegisterModal(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Register
                </motion.button> */}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden relative w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <motion.div
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 90 },
                    closed: { rotate: 0 }
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <nav className="py-6 space-y-2">
                  {menuItems.map((item) => (
                    <div key={item.id}>
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={() => item.dropdown ? toggleDropdown(item.id) : (item.onClick ? item.onClick() : scrollToSection(item.id))}
                        className="flex items-center w-full text-left space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                        {item.dropdown && (
                          <motion.div
                            animate={{ rotate: openDropdown === item.id ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-auto"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        )}
                      </motion.button>

                      {item.dropdown && openDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-8 mt-1 space-y-1"
                        >
                          {item.dropdown.map((subItem) => (
                            <motion.button
                              key={subItem.id}
                              whileHover={{ x: 5 }}
                              onClick={subItem.onClick ? subItem.onClick : () => scrollToSection(subItem.id)}
                              className="flex items-center w-full text-left space-x-3 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                            >
                              {subItem.icon && <span className="text-sm">{subItem.icon}</span>}
                              <span>{subItem.name}</span>
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}

                  <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        router.push('/login') // ✅ Redirects to /login
      }}
      className="w-full py-3 text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
    >
      Login1
    </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          setIsMenuOpen(false);
          setShowRegisterModal(true);
        }}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
      >
        Register
      </motion.button>
    </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

   

      {showRegisterModal && (
        <RegisterAuthModal
          isOpen={showRegisterModal}
          onClose={() => setShowRegisterModal(false)}
          onSwitchToLogin={() => {
            setShowRegisterModal(false);
          }}
        />
      )}
    </>
  )
}