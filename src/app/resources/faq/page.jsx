'use client'
import React, { useState } from 'react';

const faqs = [
  {
    question: "What services does Synture offer?",
    answer: "Synture specializes in digital marketing, SEO, and web development, providing data-driven solutions tailored to help businesses grow online."
  },
  {
    question: "How can I enroll in a training program?",
    answer: "You can enroll by visiting our Trainings section, choosing your desired course, and clicking the Enroll Now button. For assistance, contact our support team."
  },
  {
    question: "Do you provide custom solutions for businesses?",
    answer: "Absolutely! Our approach begins with deep strategic planning and market research to ensure every solution fits your unique business needs."
  },
  {
    question: "What makes Synture different?",
    answer: "We combine creativity, advanced tech, and transparent communication to deliver results that drive real business growth. Plus, our 24/7 support ensures you’re always covered."
  },
  {
    question: "Is ongoing support available after project completion?",
    answer: "Yes! We offer continuous optimization, transparent reporting, and dedicated support well beyond project launch."
  },
  {
    question: "How can I contact Synture?",
    answer: "Visit our Contact Us page or call us anytime—our team is available 24/7 to assist you."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Decorative gradient blobs for energy */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-300/40 to-purple-400/60 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.7s'}} />

      <div className="container mx-auto max-w-2xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center drop-shadow mb-12">
          Frequently Asked Questions
        </h1>
        <div className="bg-white/80 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl ring-1 ring-purple-100">
          <ul className="space-y-6">
            {faqs.map((faq, idx) => (
              <li
                key={idx}
                className="border-b last:border-b-0 border-gray-100"
              >
                <button
                  className={`flex justify-between items-center w-full text-left py-4 focus:outline-none transition-all 
                    ${openIndex === idx
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-900 hover:text-purple-600'}`}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => toggle(idx)}
                >
                  <span className="text-lg">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ml-3
                      ${openIndex === idx ? 'rotate-180 text-blue-500' : 'text-gray-400'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  className={`transition-all ease-in-out duration-400 overflow-hidden
                    ${openIndex === idx ? 'max-h-36 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
                  aria-hidden={openIndex !== idx}
                >
                  <p className="px-1 pb-5 text-base text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{`
        /* Animating the FAQ list a bit more */
        button:focus-visible {
          outline: 2px solid #805ad5 !important;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
}
