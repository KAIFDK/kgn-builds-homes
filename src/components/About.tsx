import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap, Building2, Award, Target, Download } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Civil Engineer",
      description: "Professional civil engineering degree with specialization in structural design"
    },
    {
      icon: Building2,
      title: "House Builder",
      description: "Expert in residential construction with focus on quality and durability"
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Committed to delivering superior quality in every project"
    },
    {
      icon: Target,
      title: "Client Satisfaction",
      description: "100% customer satisfaction with personalized service approach"
    }
  ];

  const handleDownloadPortfolio = () => {
    // Create a portfolio document with company information
    const portfolioContent = `
KGN CONSTRUCTION PORTFOLIO
==========================

Company: KGN Construction
Engineer: MD Suhail Doddamani
Contact: +91 XXXXX XXXXX
Email: info@kgnconstruction.com

ABOUT US
--------
With over 5 years of experience in civil engineering and construction, we specialize in creating custom homes that reflect our clients' vision while ensuring structural integrity and long-lasting quality.

Our approach combines traditional construction methods with modern engineering principles, resulting in homes that are not only beautiful but also energy-efficient and built to last generations.

SERVICES
--------
• Residential Construction
• Commercial Construction  
• Renovation & Remodeling
• Civil Engineering Design
• 2D & 3D Design Concepts
• Project Management

ACHIEVEMENTS
------------
• 50+ Houses Built
• 100+ Happy Clients
• 5+ Years Experience
• 100% Customer Satisfaction

SPECIALIZATIONS
---------------
• Civil Engineer - Professional civil engineering degree with specialization in structural design
• House Builder - Expert in residential construction with focus on quality and durability
• Quality Focused - Committed to delivering superior quality in every project
• Client Satisfaction - 100% customer satisfaction with personalized service approach

Contact us today for your construction needs!
    `;

    const blob = new Blob([portfolioContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'KGN-Construction-Portfolio.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-grey-dark mb-4">
              About MD Suhail Doddamani
            </h2>
            <p className="text-xl text-construction-grey max-w-3xl mx-auto">
              A passionate civil engineer and house builder dedicated to creating homes that blend structural excellence with architectural beauty.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="prose prose-lg">
                <p className="text-construction-grey-dark mb-6">
                  With over 5 years of experience in civil engineering and construction, I specialize in creating custom homes that reflect my clients' vision while ensuring structural integrity and long-lasting quality.
                </p>
                
                <p className="text-construction-grey-dark mb-6">
                  My approach combines traditional construction methods with modern engineering principles, resulting in homes that are not only beautiful but also energy-efficient and built to last generations.
                </p>

                <p className="text-construction-grey-dark mb-8">
                  From initial 2D and 3D design concepts to final construction, I personally oversee every aspect of your project to ensure it meets the highest standards of quality and craftsmanship.
                </p>
              </div>

              <Button variant="hero" size="lg" onClick={handleDownloadPortfolio} className="group">
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] transition-transform" />
                Download Portfolio
              </Button>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 hover:shadow-construction-card transition-all duration-300 hover:-translate-y-2 border-construction-grey-light">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-construction-blue/10 flex items-center justify-center mb-4">
                      <achievement.icon className="w-6 h-6 text-construction-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-construction-grey-dark mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-construction-grey text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;