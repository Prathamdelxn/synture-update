'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Sample report data - replace with your actual data source
const reportCategories = [
  {
    id: 'business-analytics',
    title: 'Business Growth Analytics',
    icon: '📊',
    description: 'Track your business growth, campaign performance, and ROI metrics',
    color: 'from-purple-100 to-pink-100',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-200',
    targetAudience: 'business',
    reports: [
      {
        id: 1,
        title: 'Revenue Growth Report',
        type: 'Growth Analysis',
        description: 'Comprehensive analysis of revenue growth trends, conversion rates, and performance metrics.',
        period: 'Monthly',
        lastUpdated: '2024-12-20',
        status: 'Active',
        insights: ['300% revenue increase', '45% conversion improvement', '25% cost reduction'],
        featured: true
      },
      {
        id: 2,
        title: 'Campaign Performance Dashboard',
        type: 'Campaign Analytics',
        description: 'Real-time tracking of advertising campaigns across all platforms with detailed ROI analysis.',
        period: 'Real-time',
        lastUpdated: '2024-12-20',
        status: 'Active',
        insights: ['400% ROAS improvement', '50% better targeting', '30% cost optimization'],
        featured: true
      },
      {
        id: 3,
        title: 'Customer Acquisition Analysis',
        type: 'Acquisition Report',
        description: 'Detailed breakdown of customer acquisition channels, costs, and lifetime value metrics.',
        period: 'Weekly',
        lastUpdated: '2024-12-18',
        status: 'Active',
        insights: ['35% lower CAC', '60% higher LTV', '20% better retention'],
        featured: false
      }
    ]
  },
  {
    id: 'placement-tracking',
    title: 'Placement & Career Analytics',
    icon: '🎯',
    description: 'Monitor student placement rates, salary trends, and career progression',
    color: 'from-blue-100 to-cyan-100',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    targetAudience: 'student',
    reports: [
      {
        id: 4,
        title: 'Monthly Placement Report',
        type: 'Placement Analytics',
        description: 'Track placement rates, average salaries, and company partnerships for students.',
        period: 'Monthly',
        lastUpdated: '2024-12-19',
        status: 'Active',
        insights: ['85% placement rate', '₹6.5L average salary', '150+ hiring partners'],
        featured: true
      },
      {
        id: 5,
        title: 'Skill Development Progress',
        type: 'Learning Analytics',
        description: 'Monitor student progress, skill assessments, and certification completion rates.',
        period: 'Weekly',
        lastUpdated: '2024-12-20',
        status: 'Active',
        insights: ['92% course completion', '88% skill proficiency', '95% satisfaction rate'],
        featured: true
      },
      {
        id: 6,
        title: 'Industry Demand Analysis',
        type: 'Market Research',
        description: 'Analysis of industry trends, skill demands, and career opportunities in digital marketing.',
        period: 'Quarterly',
        lastUpdated: '2024-12-15',
        status: 'Active',
        insights: ['40% demand increase', '25 new job roles', '60% salary growth'],
        featured: false
      }
    ]
  },
  {
    id: 'performance-metrics',
    title: 'Performance Metrics',
    icon: '⚡',
    description: 'Key performance indicators and success metrics across all services',
    color: 'from-green-100 to-emerald-100',
    textColor: 'text-green-700',
    borderColor: 'border-green-200',
    targetAudience: 'business',
    reports: [
      {
        id: 7,
        title: 'Overall Performance KPIs',
        type: 'KPI Dashboard',
        description: 'Comprehensive dashboard showing key performance indicators across all business metrics.',
        period: 'Real-time',
        lastUpdated: '2024-12-20',
        status: 'Active',
        insights: ['500+ businesses served', '2000+ students trained', '95% client satisfaction'],
        featured: true
      },
      {
        id: 8,
        title: 'Service Quality Report',
        type: 'Quality Analytics',
        description: 'Analysis of service delivery quality, client feedback, and improvement recommendations.',
        period: 'Monthly',
        lastUpdated: '2024-12-19',
        status: 'Active',
        insights: ['4.8/5 client rating', '98% retention rate', '40% referral growth'],
        featured: false
      },
      {
        id: 9,
        title: 'Market Trends Analysis',
        type: 'Trend Report',
        description: 'Latest market trends, industry insights, and strategic recommendations for growth.',
        period: 'Quarterly',
        lastUpdated: '2024-12-10',
        status: 'Active',
        insights: ['Digital ad spend +25%', 'AI adoption +60%', 'Video content +80%'],
        featured: false
      }
    ]
  },
  {
    id: 'custom-reports',
    title: 'Custom Reports',
    icon: '📈',
    description: 'Tailored reports and analytics based on specific business needs',
    color: 'from-orange-100 to-red-100',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-200',
    targetAudience: 'business',
    reports: [
      {
        id: 10,
        title: 'Industry-Specific Analysis',
        type: 'Custom Analysis',
        description: 'Customized reports tailored to your specific industry vertical and business requirements.',
        period: 'On-demand',
        lastUpdated: '2024-12-18',
        status: 'Available',
        insights: ['Industry benchmarks', 'Competitive analysis', 'Growth opportunities'],
        featured: true
      },
      {
        id: 11,
        title: 'Executive Summary Reports',
        type: 'Executive Brief',
        description: 'High-level executive summaries focusing on key metrics and strategic recommendations.',
        period: 'Monthly',
        lastUpdated: '2024-12-17',
        status: 'Available',
        insights: ['Strategic insights', 'Action items', 'ROI projections'],
        featured: false
      },
      {
        id: 12,
        title: 'Predictive Analytics',
        type: 'Forecasting',
        description: 'AI-powered predictive analytics for future growth projections and market opportunities.',
        period: 'Quarterly',
        lastUpdated: '2024-12-12',
        status: 'Beta',
        insights: ['Growth forecasts', 'Risk analysis', 'Opportunity mapping'],
        featured: false
      }
    ]
  }
];

// Key metrics data
const keyMetrics = [
  { 
    title: 'Active Reports', 
    value: '24', 
    change: '+12%', 
    trend: 'up', 
    icon: '📊',
    color: 'bg-purple-100 text-purple-700'
  },
  { 
    title: 'Data Points', 
    value: '1.2M', 
    change: '+25%', 
    trend: 'up', 
    icon: '📈',
    color: 'bg-blue-100 text-blue-700'
  },
  { 
    title: 'Insights Generated', 
    value: '485', 
    change: '+18%', 
    trend: 'up', 
    icon: '💡',
    color: 'bg-green-100 text-green-700'
  },
  { 
    title: 'Report Downloads', 
    value: '2,340', 
    change: '+32%', 
    trend: 'up', 
    icon: '⬇️',
    color: 'bg-orange-100 text-orange-700'
  }
];

export default function ReportsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredCategories = reportCategories.filter(category => {
    if (selectedAudience !== 'all' && category.targetAudience !== selectedAudience) return false;
    if (searchTerm) {
      return category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
             category.reports.some(report => 
               report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               report.description.toLowerCase().includes(searchTerm.toLowerCase())
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
            Analytics & <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Reports</span>
          </h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto mb-4">
            Comprehensive analytics and reporting dashboard to track business growth, student progress, 
            and performance metrics across all our services.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-6">
            {keyMetrics.map((metric, index) => (
              <div 
                key={index}
                className={`${metric.color} rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="text-xl mb-1">{metric.icon}</div>
                <div className="text-lg font-bold">{metric.value}</div>
                <div className="text-xs opacity-80">{metric.title}</div>
                <div className="text-xs font-medium flex items-center mt-1">
                  <span className={`${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.trend === 'up' ? '↗️' : '↘️'} {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className={`bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                 style={{ transitionDelay: '0.6s' }}>
              <div className="text-2xl mb-2">📊</div>
              <h3 className="text-lg font-bold mb-2">Business Intelligence</h3>
              <p className="text-purple-100 text-sm">
                Real-time analytics and insights to drive strategic decisions and maximize ROI.
              </p>
            </div>

            <div className={`bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                 style={{ transitionDelay: '0.7s' }}>
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="text-lg font-bold mb-2">Performance Tracking</h3>
              <p className="text-blue-100 text-sm">
                Monitor progress, track achievements, and identify areas for improvement.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
          <div className="flex flex-col lg:flex-row gap-3 items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedAudience('all')}
                className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                  selectedAudience === 'all'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                All Reports
              </button>
              <button
                onClick={() => setSelectedAudience('business')}
                className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                  selectedAudience === 'business'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                📈 Business
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

            <div className="flex gap-3">
              <div className="relative">
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-4 py-2 rounded-full border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-200 outline-none text-sm bg-white"
                >
                  <option value="all">All Periods</option>
                  <option value="real-time">Real-time</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                </select>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search reports..."
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
        </div>

        {/* Reports Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category, categoryIndex) => (
            <div 
              key={category.id}
              id={category.id}
              className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${1.0 + categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
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
                        : category.targetAudience === 'student'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {category.targetAudience === 'business' ? 'Business Reports' : category.targetAudience === 'student' ? 'Student Reports' : 'General Reports'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Report Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.reports.map((report, reportIndex) => (
                  <ReportCard 
                    key={report.id}
                    report={report}
                    category={category}
                    animationDelay={reportIndex * 0.1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <QuickActionsSection />

        {/* Recent Updates */}
        <RecentUpdatesSection />
      </div>
    </section>
  );
}

// Report Card Component
const ReportCard = ({ report, category, animationDelay }) => (
  <div 
    className={`group bg-white/95 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border-2 ${category.borderColor} ${
      report.featured ? `ring-2 ring-${category.borderColor.replace('border-', '')}` : ''
    }`}
  >
    {report.featured && (
      <div className="absolute top-2 right-2 z-10">
        <span className={`bg-gradient-to-r ${category.color} ${category.textColor} px-2 py-1 rounded-full text-xs font-bold border ${category.borderColor}`}>
          ⭐ Featured
        </span>
      </div>
    )}

    <div className="p-4 relative">
      {/* Status and Type */}
      <div className="flex justify-between items-center mb-3">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${category.color} ${category.textColor} border ${category.borderColor}`}>
          {report.type}
        </span>
        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
          report.status === 'Active' 
            ? 'bg-green-100 text-green-700' 
            : report.status === 'Beta'
            ? 'bg-yellow-100 text-yellow-700'
            : 'bg-gray-100 text-gray-700'
        }`}>
          {report.status}
        </span>
      </div>
      
      <h3 className="text-base font-bold text-gray-900 group-hover:text-purple-700 transition-colors mb-2 leading-tight">
        {report.title}
      </h3>
      <p className="text-gray-600 text-sm mb-3 leading-snug line-clamp-2">{report.description}</p>

      {/* Key Insights */}
      <div className="mb-3">
        <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Insights:</h4>
        <div className="space-y-1">
          {report.insights.slice(0, 2).map((insight, index) => (
            <div key={index} className={`text-xs px-2 py-1 rounded bg-gradient-to-r ${category.color} ${category.textColor} border ${category.borderColor}`}>
              • {insight}
            </div>
          ))}
        </div>
      </div>

      {/* Report Info */}
      <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
        <span>📅 {report.period}</span>
        <span>🔄 {new Date(report.lastUpdated).toLocaleDateString()}</span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Link 
          href={`/reports/${report.id}`}
          className={`flex-1 py-2 px-3 rounded-lg font-bold bg-gradient-to-r ${category.color} ${category.textColor} hover:shadow-md transform hover:scale-105 transition-all duration-300 text-center text-sm border-2 ${category.borderColor} hover:border-gray-300`}
        >
          📊 View Report
        </Link>
        <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-600 hover:text-gray-800 text-sm">
          ⬇️
        </button>
      </div>
    </div>
  </div>
);

// Quick Actions Section
const QuickActionsSection = () => (
  <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
    <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
    <div className="grid md:grid-cols-4 gap-4">
      {[
        { title: 'Generate Report', icon: '📊', color: 'bg-purple-100 text-purple-700', href: '/reports/generate' },
        { title: 'Schedule Report', icon: '⏰', color: 'bg-blue-100 text-blue-700', href: '/reports/schedule' },
        { title: 'Export Data', icon: '📤', color: 'bg-green-100 text-green-700', href: '/reports/export' },
        { title: 'Settings', icon: '⚙️', color: 'bg-orange-100 text-orange-700', href: '/reports/settings' }
      ].map((action, index) => (
        <Link 
          key={index}
          href={action.href}
          className={`${action.color} rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group`}
        >
          <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{action.icon}</div>
          <div className="font-bold text-sm">{action.title}</div>
        </Link>
      ))}
    </div>
  </div>
);

// Recent Updates Section
const RecentUpdatesSection = () => {
  const recentUpdates = [
    {
      title: 'New Revenue Analytics Dashboard',
      description: 'Enhanced revenue tracking with predictive insights',
      timestamp: '2 hours ago',
      type: 'Feature',
      color: 'bg-green-100 text-green-700'
    },
    {
      title: 'Placement Rate Milestone',
      description: 'Achieved 85% placement rate for December batch',
      timestamp: '4 hours ago',
      type: 'Achievement',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Campaign Performance Update',
      description: 'Q4 campaign results now available in dashboard',
      timestamp: '1 day ago',
      type: 'Update',
      color: 'bg-purple-100 text-purple-700'
    }
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Updates</h3>
      <div className="space-y-3">
        {recentUpdates.map((update, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className={`px-2 py-1 rounded text-xs font-bold ${update.color}`}>
                {update.type}
              </span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{update.title}</h4>
                <p className="text-gray-600 text-xs">{update.description}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{update.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
