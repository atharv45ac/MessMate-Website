
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tired of messy registers and confusing manual calculations?
          </h2>
          <div className="text-lg text-gray-400 space-y-4">
            <p>
              Say goodbye to pen and paper and hello to MessMate — the offline, all-in-one manager designed to simplify daily operations.
            </p>
            <p>
              With MessMate, you can manage members, track meals, automate billing, and monitor finances — <span className="text-brand-green font-semibold">right from your pocket.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;