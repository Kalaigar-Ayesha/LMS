import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">FutureDoctors</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering NEET aspirants with comprehensive courses, expert guidance, 
              and innovative learning methods to achieve their medical career dreams.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@futuredoctors.com</span>
              </div>
            </div>
            <div className="flex items-center text-gray-300 mt-2">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">+91 98765 43210</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subjects</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Physics</span>
              </li>
              <li>
                <span className="text-gray-300">Chemistry</span>
              </li>
              <li>
                <span className="text-gray-300">Biology</span>
              </li>
              <li>
                <span className="text-gray-300">Mock Tests</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 FutureDoctors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;