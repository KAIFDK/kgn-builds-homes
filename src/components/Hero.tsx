import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';
import constructionHero from '@/assets/construction-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={constructionHero}
          alt="KGN Construction - Professional house construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-construction-blue-dark/80 via-construction-blue/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Trusted Civil Engineering & Construction
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building Your
              <span className="block text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text">
                Dream Home
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              KGN Construction brings professional civil engineering expertise and quality craftsmanship to create homes that stand the test of time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="group">
                View Our Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="construction" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-construction-blue">
                Get Free Quote
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Houses Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;