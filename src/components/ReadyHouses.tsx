import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Car, Ruler, IndianRupee, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReadyHouses = () => {
  const navigate = useNavigate();
  // Sample ready-to-sell houses data
  const houses = [
    {
      id: 1,
      title: "Modern 3BHK Villa",
      location: "Rajajinagar, Bangalore",
      price: "95,00,000",
      area: "1,800 sq ft",
      bedrooms: 3,
      bathrooms: 3,
      parking: 1,
      status: "Ready to Move",
      features: ["Modular Kitchen", "False Ceiling", "Premium Tiles", "Gated Community"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      description: "A beautifully designed 3BHK villa with modern amenities and premium finishes in a prime location."
    },
    {
      id: 2,
      title: "Luxury 4BHK Independent House",
      location: "Jayanagar, Bangalore",
      price: "1,25,00,000",
      area: "2,400 sq ft",
      bedrooms: 4,
      bathrooms: 4,
      parking: 2,
      status: "Ready to Move",
      features: ["Home Theater", "Solar Panels", "Garden Area", "Security System"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      description: "Spacious independent house with luxury amenities and eco-friendly features for comfortable living."
    },
    {
      id: 3,
      title: "Compact 2BHK Apartment",
      location: "Koramangala, Bangalore",
      price: "65,00,000",
      area: "1,200 sq ft",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      status: "Booking Open",
      features: ["Smart Home", "Gym Access", "Swimming Pool", "24/7 Security"],
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop",
      description: "Well-designed 2BHK apartment in a premium location with all modern amenities and facilities."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready to Move':
        return 'bg-green-100 text-green-800';
      case 'Booking Open':
        return 'bg-blue-100 text-blue-800';
      case 'Under Construction':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="ready-houses" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-grey-dark mb-4">
              Ready-to-Sell Houses
            </h2>
            <p className="text-xl text-construction-grey max-w-3xl mx-auto">
              Discover our collection of ready-to-move and upcoming properties designed with quality construction and modern amenities.
            </p>
          </div>

          {/* Houses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {houses.map((house) => (
              <Card key={house.id} className="group overflow-hidden hover:shadow-construction-card transition-all duration-300 hover:-translate-y-2 border-construction-grey-light">
                {/* House Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={house.image}
                    alt={house.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(house.status)}>
                      {house.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <IndianRupee className="w-4 h-4 text-construction-blue mr-1" />
                      <span className="font-bold text-construction-grey-dark">
                        ₹{house.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* House Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-construction-grey-dark mb-2 group-hover:text-construction-blue transition-colors">
                    {house.title}
                  </h3>

                  <div className="flex items-center text-construction-grey mb-3">
                    <MapPin className="w-4 h-4 mr-2 text-construction-blue" />
                    {house.location}
                  </div>

                  <p className="text-construction-grey text-sm mb-4">
                    {house.description}
                  </p>

                  {/* House Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center text-construction-grey">
                      <Bed className="w-4 h-4 mr-2 text-construction-blue" />
                      {house.bedrooms} Bedrooms
                    </div>
                    <div className="flex items-center text-construction-grey">
                      <Bath className="w-4 h-4 mr-2 text-construction-blue" />
                      {house.bathrooms} Bathrooms
                    </div>
                    <div className="flex items-center text-construction-grey">
                      <Car className="w-4 h-4 mr-2 text-construction-blue" />
                      {house.parking} Parking
                    </div>
                    <div className="flex items-center text-construction-grey">
                      <Ruler className="w-4 h-4 mr-2 text-construction-blue" />
                      {house.area}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-construction-grey-dark mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {house.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="bg-construction-blue/10 text-construction-blue text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {house.features.length > 3 && (
                        <Badge variant="secondary" className="bg-construction-grey-light text-construction-grey text-xs">
                          +{house.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="construction" size="sm" className="w-full">
                      View Details
                    </Button>
                    <Button variant="hero" size="sm" className="w-full">
                      <Phone className="w-4 h-4 mr-1" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-construction-card">
              <h3 className="text-2xl font-bold text-construction-grey-dark mb-4">
                Looking for Something Custom?
              </h3>
              <p className="text-construction-grey mb-6 max-w-2xl mx-auto">
                Can't find the perfect house? We specialize in custom home construction tailored to your specific needs and preferences.
              </p>
              <Button variant="hero" size="lg" onClick={() => navigate('/custom-project')}>
                Discuss Custom Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyHouses;