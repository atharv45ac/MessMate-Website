
import React from 'react';
import { FacebookIcon, InstagramIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-gray border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p>&copy; {new Date().getFullYear()} MessMate. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="mailto:veloratechnologiespvt@gmail.com" className="hover:text-brand-green transition-colors">veloratechnologiespvt@gmail.com</a>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-brand-green transition-colors"><InstagramIcon /></a>
              <a href="#" className="hover:text-brand-green transition-colors"><FacebookIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;