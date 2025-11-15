
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import WhoFor from './components/WhoFor';
import DownloadCallout from './components/DownloadCallout';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <WhoFor />
        <DownloadCallout />
      </main>
      <Footer />
    </div>
  );
};

export default App;
