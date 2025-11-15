
import React from 'react';
import { GooglePlayBadge, PLAY_STORE_LINK } from '../constants';

const DownloadCallout: React.FC = () => {
  return (
    <section id="download" className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-brand-gray rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-green/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Download MessMate Now</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Take full control of your mess & tiffin business — accuracy, automation, and peace of mind.
            </p>
            <a
              href={PLAY_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <GooglePlayBadge />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCallout;