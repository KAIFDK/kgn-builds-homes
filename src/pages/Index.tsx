import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ReadyHouses from '@/components/ReadyHouses';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <ReadyHouses />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-construction-grey-dark text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">KGN Construction</h3>
            <p className="text-white/80 mb-4">Building Dreams, Creating Homes</p>
            <p className="text-sm text-white/60">
              © 2024 KGN Construction. All rights reserved. | Designed & Built by MD Suhail Doddamani
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
