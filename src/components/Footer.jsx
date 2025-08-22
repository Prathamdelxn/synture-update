import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Synture
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses through innovative digital marketing solutions. 
              We help brands grow and thrive in the digital landscape.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@synturesolutions.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 8421539304</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Sr. No 36/1/3, 3rd Floor Audumbar Nivya\nNear Canara Bank, Narhe gaon , Pune - 411041</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Digital Marketing", href: "/services/digital-marketing" },
                { name: "SEO Optimization", href: "/services/seo" },
                { name: "Web Development", href: "/services/website-design-and-development" },
                { name: "Brand Design", href: "/services/brand-design" },
                { name: "Social Media Marketing", href: "/services/social-media" },
                { name: "PPC Advertising", href: "/services/ppc" }
              ].map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: "Digital Marketing Guide", href: "/resources/guide" },
                { name: "Industry Reports", href: "/resources/reports" },
                { name: "FAQ", href: "resources/faq" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Follow Us</h3>
            <p className="text-gray-400 mb-6">
              Connect with us on social media for the latest updates and insights.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://facebook.com/synture", label: "Facebook" },
                { icon: Twitter, href: "https://twitter.com/synture", label: "Twitter" },
                { icon: Instagram, href: "https://instagram.com/synture", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com/company/synture", label: "LinkedIn" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} Synture. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}