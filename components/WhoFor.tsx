
import React from 'react';
import { CheckCircleIcon } from '../constants';

const WHO_IS_IT_FOR = [
  "Tiffin service owners",
  "Mess managers",
  "Student canteen operators",
  "Anyone running a meal subscription business"
];

const WhoFor: React.FC = () => {
  return (
    <section id="who-for" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for Your Business</h2>
            <p className="text-lg text-gray-400 mb-8">
              Whether you're managing a small tiffin service or a large student mess, MessMate is built to handle the unique challenges of your meal subscription business.
            </p>
          </div>
          <div className="space-y-4">
            {WHO_IS_IT_FOR.map((item, index) => (
              <div key={index} className="flex items-center bg-brand-dark p-4 rounded-lg">
                <div className="text-brand-green mr-4">
                  <CheckCircleIcon />
                </div>
                <span className="text-lg text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoFor;