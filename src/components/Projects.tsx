import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, MapPin, Ruler } from 'lucide-react';

const Projects = () => {
  // Sample project data - in a real app, this would come from a CMS or API
  const projects = [
    {
      id: 1,
      title: "Modern Villa Construction",
      location: "Bangalore, Karnataka",
      year: "2024",
      area: "2,500 sq ft",
      type: "Residential Villa",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      description: "A contemporary 3-bedroom villa featuring modern architectural design with sustainable building practices."
    },
    {
      id: 2,
      title: "Traditional Family Home",
      location: "Mysore, Karnataka",
      year: "2023",
      area: "1,800 sq ft",
      type: "Family Home",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      description: "A traditional-style family home blending classic architecture with modern amenities and efficient space planning."
    },
    {
      id: 3,
      title: "Luxury Duplex House",
      location: "Hubli, Karnataka",
      year: "2024",
      area: "3,200 sq ft",
      type: "Duplex",
      status: "Under Construction",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      description: "An elegant duplex with premium finishes, spacious interiors, and contemporary design elements."
    },
    {
      id: 4,
      title: "Compact Smart Home",
      location: "Dharwad, Karnataka",
      year: "2023",
      area: "1,200 sq ft",
      type: "Smart Home",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop",
      description: "A compact yet functional home designed for modern living with smart home integration and energy efficiency."
    },
    {
      id: 5,
      title: "Premium Farmhouse",
      location: "Belagavi, Karnataka",
      year: "2024",
      area: "4,000 sq ft",
      type: "Farmhouse",
      status: "In Planning",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop",
      description: "A spacious farmhouse design incorporating natural materials and open living concepts for countryside living."
    },
    {
      id: 6,
      title: "Urban Townhouse",
      location: "Mangalore, Karnataka",
      year: "2023",
      area: "2,000 sq ft",
      type: "Townhouse",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600&h=400&fit=crop",
      description: "A modern townhouse featuring efficient vertical design and contemporary urban living solutions."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Under Construction':
        return 'bg-yellow-100 text-yellow-800';
      case 'In Planning':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-grey-dark mb-4">
              Our Construction Portfolio
            </h2>
            <p className="text-xl text-construction-grey max-w-3xl mx-auto">
              Explore our completed and ongoing projects showcasing quality construction and innovative design solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-construction-card transition-all duration-300 hover:-translate-y-2 border-construction-grey-light">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-construction-grey-dark group-hover:text-construction-blue transition-colors">
                      {project.title}
                    </h3>
                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>

                  <p className="text-construction-grey text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 text-sm text-construction-grey">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-construction-blue" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-construction-blue" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <Ruler className="w-4 h-4 mr-2 text-construction-blue" />
                      {project.area}
                    </div>
                  </div>

                  {/* Project Type Badge */}
                  <div className="mt-4 pt-4 border-t border-construction-grey-light">
                    <Badge variant="secondary" className="bg-construction-blue/10 text-construction-blue">
                      {project.type}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="construction" size="lg">
              View Complete Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;