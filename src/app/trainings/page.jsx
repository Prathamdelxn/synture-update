'use client'
import { useState, useEffect } from 'react'
import { trainingsData } from '@/utils/trainingsData'
import Link from 'next/link'
import EnquiryForm from '@/components/EnquiryForm.js'

export default function Trainings() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById('trainings')
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [])

  return (
    <section id="trainings" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-700">🎯 Our Programs</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Trainings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elevate your skills with our industry-leading training programs designed for digital professionals
          </p>
        </div>

        {/* Training Programs Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          {Object.entries(trainingsData).map(([key, training]) => (
            <Link 
              key={key}
              href={`/trainings/${key}`}
              className="group block bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={training.image} 
                  alt={training.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">{training.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{training.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-600">{training.duration}</span>
                  <span className="text-lg font-bold text-gray-900">{training.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Enquiry Form */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <EnquiryForm 
            trainingOptions={Object.values(trainingsData)}
          />
        </div>
      </div>
    </section>
  )
}