import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, MessageCircle, Clock, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 9876543210",
      action: "tel:+919876543210",
      description: "Available 9 AM - 7 PM"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "+91 9876543210",
      action: "https://wa.me/919876543210",
      description: "Quick responses on WhatsApp"
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@kgnconstruction.com",
      action: "mailto:info@kgnconstruction.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Office",
      detail: "Bangalore, Karnataka",
      action: "#",
      description: "Schedule an appointment"
    }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "By Appointment" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-grey-dark mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-construction-grey max-w-3xl mx-auto">
              Ready to start your construction project? Contact us today for a free consultation and quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-construction-grey-dark mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.action}
                        className="flex items-start p-4 rounded-lg border border-construction-grey-light hover:shadow-construction-card transition-all duration-300 hover:-translate-y-1 group"
                      >
                        <div className="w-12 h-12 rounded-full bg-construction-blue/10 flex items-center justify-center mr-4 group-hover:bg-construction-blue/20 transition-colors">
                          <info.icon className="w-6 h-6 text-construction-blue" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-construction-grey-dark mb-1">
                            {info.title}
                          </h4>
                          <p className="text-construction-blue font-medium mb-1">
                            {info.detail}
                          </p>
                          <p className="text-sm text-construction-grey">
                            {info.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Working Hours */}
                <Card className="p-6 border-construction-grey-light">
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-construction-blue mr-2" />
                    <h4 className="font-semibold text-construction-grey-dark">Working Hours</h4>
                  </div>
                  <div className="space-y-2">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-construction-grey">{schedule.day}</span>
                        <span className="text-construction-grey-dark font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Trust Badge */}
                <Card className="p-6 bg-construction-blue/5 border-construction-blue/20">
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-construction-blue mr-2" />
                    <h4 className="font-semibold text-construction-grey-dark">Why Choose Us?</h4>
                  </div>
                  <ul className="text-sm text-construction-grey space-y-1">
                    <li>• Licensed Civil Engineer</li>
                    <li>• 5+ Years Experience</li>
                    <li>• Quality Guarantee</li>
                    <li>• Timely Project Delivery</li>
                    <li>• Transparent Pricing</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-construction-card border-construction-grey-light">
                <h3 className="text-2xl font-bold text-construction-grey-dark mb-6">
                  Send Us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-construction-grey-dark">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-construction-grey-light focus:border-construction-blue"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-construction-grey-dark">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-construction-grey-light focus:border-construction-blue"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-construction-grey-dark">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-construction-grey-light focus:border-construction-blue"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-construction-grey-dark">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="mt-2 border-construction-grey-light focus:border-construction-blue"
                        placeholder="Project inquiry, consultation, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-construction-grey-dark">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mt-2 border-construction-grey-light focus:border-construction-blue"
                      placeholder="Tell us about your project requirements, timeline, budget, or any specific questions you have..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg"
                      className="flex-1"
                    >
                      Send Message
                    </Button>
                    <Button 
                      type="button" 
                      variant="construction" 
                      size="lg"
                      className="flex-1"
                      onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Chat
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;