import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TRSM</h3>
            <p className="text-gray-400">
              Professional audio recording and production services in the heart of Montreal.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-red-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#equipment" className="text-gray-400 hover:text-red-500 transition-colors">
                  Equipment
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-red-500 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Recording</li>
              <li className="text-gray-400">Mixing</li>
              <li className="text-gray-400">Mastering</li>
              <li className="text-gray-400">Podcast Production</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
             
              <a href="https://www.facebook.com/share/1U2MYWPfpL/" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="therecordingshopmontreal@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Recording Shop Montreal. All rights reserved.</p>
          <p className="mt-2">Designed & Developed by Lehan Kawshila</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;