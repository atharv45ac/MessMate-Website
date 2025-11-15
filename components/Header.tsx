
import React, { useState, useEffect } from 'react';
import { PLAY_STORE_LINK } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/80 backdrop-blur-lg border-b border-brand-gray' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tight">
            Mess<span className="text-brand-green">Mate</span>
          </a>
          <a
            href={PLAY_STORE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-brand-green text-white font-semibold px-5 py-2 rounded-full hover:bg-green-700 transition-colors duration-300 transform hover:scale-105"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;