'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { trainingsData } from '@/utils/trainingsData'
import EnquiryForm from '@/components/EnquiryForm'

/* Intersection Observer Hook */
const useIntersectionObserver = (elementId, threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold }
    )
    const element = document.getElementById(elementId)
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [elementId, threshold])
  return isVisible
}

/* Not Found */
const TrainingNotFound = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Not Found</h2>
      <p className="text-xl text-gray-600">The requested training program does not exist.</p>
    </div>
  </section>
)

/* Background Decorations */
const BackgroundDecorations = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50" />
    <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
    <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
  </>
)

/* Program Badge */
const ProgramBadge = ({ duration }) => (
  <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
    <span className="text-sm font-medium text-gray-700">🎯 {duration} Program</span>
  </div>
)

/* Highlights List */
const ProgramHighlights = ({ features }) => (
  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Highlights</h3>
    <ul className="space-y-3" role="list">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
)

/* Call-to-action Buttons */
const ActionButtons = ({ price, onEnroll, onDownloadSyllabus }) => (
  <div className="flex flex-wrap gap-4 mt-6">
    <button
      onClick={onEnroll}
      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow hover:scale-105 transition-all"
    >
      🚀 Enroll Now for {price}
    </button>
    <button
      onClick={onDownloadSyllabus}
      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-100 transition"
    >
      📄 Download Syllabus
    </button>
  </div>
)

/* Specifications Card */
const SpecificationsCard = ({ specifications }) => (
  <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">📘 Program Specifications</h3>
    <dl className="divide-y divide-gray-100">
      {Object.entries(specifications).map(([key, value], index) => (
        <div key={index} className="flex justify-between items-center py-4">
          <dt className="text-sm font-semibold text-gray-500 capitalize">
            {key.replace(/([A-Z])/g, ' $1').replace(/([a-z])([A-Z])/g, '$1 $2').trim()}
          </dt>
          <dd className="text-sm font-medium text-gray-900 text-right">{value}</dd>
        </div>
      ))}
    </dl>
    {/* Highlight Box */}
    <div className="mt-6 p-5 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl border border-blue-100 flex items-start gap-4">
      <div className="text-3xl">🎯</div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">Premium Training Package</h4>
        <p className="text-sm text-gray-600">All-inclusive learning experience with expert mentorship.</p>
      </div>
    </div>
    {/* Mini Stat Cards */}
    <div className="mt-6 grid grid-cols-3 gap-4">
      {[
        {
          label: 'Success Rate',
          value: '95%',
          bg: 'bg-green-100',
          text: 'text-green-700',
          border: 'border-green-200'
        },
        {
          label: 'Support',
          value: '24/7',
          bg: 'bg-blue-100',
          text: 'text-blue-700',
          border: 'border-blue-200'
        },
        {
          label: 'Live Projects',
          value: 'Included',
          bg: 'bg-purple-100',
          text: 'text-purple-700',
          border: 'border-purple-200'
        }
      ].map((item, idx) => (
        <div
          key={idx}
          className={`text-center p-4 ${item.bg} ${item.text} border ${item.border} rounded-xl shadow-sm`}
        >
          <div className="font-bold text-lg">{item.value}</div>
          <div className="text-xs mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  </div>
)

/* Syllabus Item (Modern Look) */
const SyllabusItem = ({ item }) => (
  <div className="group bg-gradient-to-br from-slate-50 via-white to-blue-50 border border-gray-100 rounded-2xl shadow hover:shadow-lg transition-shadow p-6 flex gap-4 items-start">
    <div className="flex flex-col items-center mr-4">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-700 text-lg font-bold rounded-full shadow">
        {item.week}
      </div>
      <span className="mt-2 text-xs font-semibold text-blue-500 uppercase tracking-widest">Week</span>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.topic}</h3>
      {item.description && (
        <p className="text-sm text-gray-600">{item.description}</p>
      )}
    </div>
  </div>
)

/* Syllabus Section */
const SyllabusSection = ({ syllabus, isVisible }) => (
  <section
    className={`mb-20 transition-all duration-1000 delay-200 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
  >
    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center flex items-center justify-center gap-2">
      <span role="img" aria-label="curriculum">🗂️</span>
      Course Syllabus
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      {syllabus.map((item, idx) => (
        <SyllabusItem key={idx} item={item} />
      ))}
    </div>
  </section>
)

/* Training Hero (Root Section) */
const HeroSection = ({ training, isVisible, onEnroll, onDownloadSyllabus }) => (
  <div className={`flex flex-col lg:flex-row gap-12 mb-20 transition-all duration-1000 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}>
    <div className="lg:w-1/2">
      <ProgramBadge duration={training.duration} />
      <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
        {training.title}
      </h1>
      <p className="text-xl text-gray-600 mb-8">{training.description}</p>
      <ProgramHighlights features={training.features} />
      <ActionButtons
        price={training.price}
        onEnroll={onEnroll}
        onDownloadSyllabus={onDownloadSyllabus}
      />
    </div>

    {/* Subtle 3D card effect */}
    <div className="lg:w-1/2 transform hover:scale-[1.01] transition-transform duration-300">
      <SpecificationsCard specifications={training.specifications} />
    </div>
  </div>
)

/* Main Component */
export default function TrainingService() {
  const params = useParams()
  const isVisible = useIntersectionObserver('training-service')
  const training = trainingsData[params.service]

  // Actions (stub API integration as needed)
  const handleEnroll = () => {
    // Enrollment logic here
    console.log('Enrolling in:', training.title)
  }
  const handleDownloadSyllabus = () => {
    // Syllabus download logic here
    console.log('Downloading syllabus for:', training.title)
  }

  if (!training) return <TrainingNotFound />

  return (
    <section
      id="training-service"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
      aria-labelledby="training-title"
    >
      <BackgroundDecorations />

      <div className="container mx-auto relative z-10">
        {/* Hero Section */}
        <HeroSection
          training={training}
          isVisible={isVisible}
          onEnroll={handleEnroll}
          onDownloadSyllabus={handleDownloadSyllabus}
        />

        {/* Syllabus */}
        <SyllabusSection syllabus={training.syllabus} isVisible={isVisible} />

        {/* Enquiry Form */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } bg-[#f9fafb] rounded-3xl p-8 mt-12 shadow-inner`}
        >
          <EnquiryForm defaultTraining={training.title} />
        </div>
      </div>
    </section>
  )
}
