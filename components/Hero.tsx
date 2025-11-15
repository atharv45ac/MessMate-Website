
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { PLAY_STORE_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-700/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4 leading-tight">
                    Mess<span className="text-brand-green">Mate</span>
                    <br />
                    <span className="text-3xl md:text-4xl lg:text-5xl text-gray-300">Smart Mess & Tiffin Manager</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                    The all-in-one offline app to manage your mess, tiffin service, or canteen — with smart attendance, automated billing, and complete financial tracking.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={PLAY_STORE_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-green text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                    >
                        Download App
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <ScrollLink
                        to="features"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="cursor-pointer bg-brand-gray text-gray-300 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                    >
                        Learn More
                    </ScrollLink>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;