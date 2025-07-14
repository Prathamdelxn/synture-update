"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, X, Sparkles, CheckCircle, Users, Target, Award } from 'lucide-react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginAuthModal({ isOpen, onClose, onSwitchToRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  // Trigger animations when modal opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ email: '', password: '', remember: false });
      setErrors({ email: '', password: '' });
      setShowPassword(false);
    }
  }, [isOpen]);

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      setIsLoading(true);
      const res = await axios.post('/api/user/login', { 
        email: formData.email,
        password: formData.password
      }, { 
        validateStatus: () => true,
        headers: {
          'Content-Type': 'application/json',
        }
      });

      switch (res.status) {
        case 200:
          toast.success('Login successful');
        //   setTimeout(() => {
        //     router.push("/")
        //   },)
          break;
        case 400:
          toast.error('Enter Email and Password');
          break;
        case 401:
          toast.error("Invalid email or password");
          break;
        case 409:
          toast.error('User not found');
          break;
        default:
          toast.error(res.data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      toast.error('Server error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const benefits = [
    {
      icon: CheckCircle,
      text: "Access to thousands of job opportunities",
      delay: "0ms"
    },
    {
      icon: Users,
      text: "Connect with top companies and talented professionals",
      delay: "200ms"
    },
    {
      icon: Target,
      text: "Advanced matching algorithm for perfect fits",
      delay: "400ms"
    },
    {
      icon: Award,
      text: "Premium support and career guidance",
      delay: "600ms"
    }
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 backdrop-blur-xs bg-white/30 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left side - Logo and Benefits */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Animated floating elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>

          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-white/20 rotate-45 animate-bounce delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-white/10 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-3/4 right-1/4 w-10 h-10 border-2 border-white/15 rounded-full animate-bounce delay-1000"></div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white w-full">
            <div className="mb-8 relative animate-fade-in">
              {/* Synture Logo */}
              <div className="w-40 h-40 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300">
                <img
                  src="/images/Synture_Without_Tagline.png"
                  alt="Synture Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="text-center animate-slide-up">
              <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-xl text-white/90 text-center mb-8 max-w-md animate-fade-in-delay">
                Secure access to your digital world. Join millions who trust us with their journey.
              </p>
            </div>

            <div className="space-y-4 w-full max-w-md">
              <p className="text-lg font-semibold text-white/95 mb-4 animate-fade-in-delay-2">Why choose Synture:</p>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors duration-300 animate-slide-in-left"
                  style={{ animationDelay: benefit.delay }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <benefit.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full max-w-md animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 hover:shadow-3xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto mb-4 animate-fade-in lg:hidden">
                  <img
                    src="/images/Synture_Without_Tagline.png"
                    alt="Synture Logo"
                    className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-fade-in">Sign In</h2>
                <p className="text-gray-600 animate-fade-in-delay">Enter your credentials to access your account</p>
              </div>

              {/* Login form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-slide-in-right" style={{ animationDelay: '100ms' }}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300" />
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleFormChange('email', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 text-black border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400`}
                      placeholder="Enter your email"
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="animate-slide-in-right" style={{ animationDelay: '200ms' }}>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={formData.password}
                      onChange={(e) => handleFormChange('password', e.target.value)}
                      className={`w-full pl-10 pr-12 py-3 text-black border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400`}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between animate-slide-in-right" style={{ animationDelay: '300ms' }}>
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      checked={formData.remember}
                      onChange={(e) => handleFormChange('remember', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-all duration-200 hover:scale-110"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={() => toast('Password reset feature coming soon!')}
                    className="text-sm text-blue-600 hover:text-blue-500 transition-colors duration-300 hover:scale-105"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] animate-fade-in-up"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Signing in...
                    </div>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>

              <div className="mt-6 text-center animate-fade-in-delay-2">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={onSwitchToRegister}
                    className="text-blue-600 hover:text-blue-500 font-medium transition-colors duration-300 hover:scale-105"
                  >
                    Register here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from { 
            opacity: 0;
            transform: translateX(20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out both;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.8s both;
        }
      `}</style>
    </div>
  );
}