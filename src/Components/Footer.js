import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800  text-white py-[8vh] bottom-0">
    <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-2">Contact Us</h5>
            <p>123 Health St, Wellness City, 98765</p>
            <p>Email: contact@healthbooking.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          
          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-2">Quick Links</h5>
            <ul className='flex gap-[7vh]'> 
              <div>
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              </div>
              <div>
              <li><Link to="/doctors" className="text-gray-400 hover:text-white">Doctors</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Location</Link></li>
              </div>
              <div>
              <li><Link to="/doctors" className="text-gray-400 hover:text-white">Health Essentials</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Newsroom</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Patient Experience</Link></li>
              </div>
            </ul>
          </div>
        
        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 ml-8">
          <p className="text-center text-gray-500">&copy; 2024 Health Booking App. All rights reserved.</p>
        </div>
      </div>
      </div>
      </footer>
  );
};

export default Footer;
