import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Home, Ruler, IndianRupee, Calendar, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import { supabase } from '@/integrations/supabase/client';

const CustomProject = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectLocation: '',
    propertyType: '',
    plotSize: '',
    budget: '',
    bedrooms: '',
    bathrooms: '',
    floors: '',
    preferredStyle: '',
    timeline: '',
    specialRequirements: '',
    hasPlot: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.projectLocation) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to database (using type assertion until types are updated)
      const { data, error } = await (supabase as any)
        .from('custom_projects')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            project_location: formData.projectLocation,
            property_type: formData.propertyType || null,
            plot_size: formData.plotSize || null,
            budget: formData.budget || null,
            bedrooms: formData.bedrooms || null,
            bathrooms: formData.bathrooms || null,
            floors: formData.floors || null,
            preferred_style: formData.preferredStyle || null,
            timeline: formData.timeline || null,
            special_requirements: formData.specialRequirements || null,
            has_plot: formData.hasPlot || null
          }
        ])
        .select();

      if (error) {
        console.error('Error saving custom project:', error);
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your project details. Please try again.",
          variant: "destructive"
        });
        return;
      }

      console.log('Custom project saved successfully:', data);
      setIsSubmitted(true);
      toast({
        title: "Project Discussion Request Submitted!",
        description: "We'll contact you within 24 hours to discuss your custom project.",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectLocation: '',
        propertyType: '',
        plotSize: '',
        budget: '',
        bedrooms: '',
        bathrooms: '',
        floors: '',
        preferredStyle: '',
        timeline: '',
        specialRequirements: '',
        hasPlot: ''
      });

    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Submission Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-construction-blue/5">
        <Header />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Card className="border-construction-blue/20">
                <CardContent className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-construction-blue mx-auto mb-6" />
                  <h1 className="text-3xl font-bold text-construction-grey-dark mb-4">
                    Thank You!
                  </h1>
                  <p className="text-construction-grey-medium mb-8 text-lg">
                    Your custom project discussion request has been submitted successfully. Our team will review your requirements and contact you within 24 hours to discuss your project in detail.
                  </p>
                  <div className="space-y-4">
                    <p className="text-sm text-construction-grey-medium">
                      Reference: CP-{Date.now()}
                    </p>
                    <div className="flex justify-center">
                      <Button 
                        variant="outline" 
                        onClick={() => setIsSubmitted(false)}
                      >
                        Submit Another Project
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-construction-blue/5">
      <Header />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-construction-grey-dark mb-4">
                Discuss Your Custom Project
              </h1>
              <p className="text-xl text-construction-grey-medium max-w-3xl mx-auto">
                Tell us about your dream home and we'll help bring your vision to life with our expert civil engineering and construction services.
              </p>
            </div>

            {/* Form */}
            <Card className="border-construction-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-construction-grey-dark">Custom Project Details</CardTitle>
                <CardDescription>
                  Please provide detailed information about your custom project so we can better understand your requirements and provide personalized recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectLocation">Project Location *</Label>
                      <Input
                        id="projectLocation"
                        type="text"
                        placeholder="City, State"
                        value={formData.projectLocation}
                        onChange={(e) => handleInputChange('projectLocation', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="independent-house">Independent House</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                          <SelectItem value="duplex">Duplex</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="commercial">Commercial Building</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hasPlot">Do you have a plot?</Label>
                      <Select value={formData.hasPlot} onValueChange={(value) => handleInputChange('hasPlot', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes, I have a plot</SelectItem>
                          <SelectItem value="no">No, need help finding one</SelectItem>
                          <SelectItem value="looking">Currently looking for a plot</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="plotSize">Plot Size</Label>
                      <Input
                        id="plotSize"
                        type="text"
                        placeholder="e.g., 30x40 ft or 1200 sq ft"
                        value={formData.plotSize}
                        onChange={(e) => handleInputChange('plotSize', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Approximate Budget</Label>
                      <Input
                        id="budget"
                        type="text"
                        placeholder="e.g., ₹25-30 Lakhs"
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="bedrooms">Bedrooms</Label>
                      <Select value={formData.bedrooms} onValueChange={(value) => handleInputChange('bedrooms', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 BHK</SelectItem>
                          <SelectItem value="2">2 BHK</SelectItem>
                          <SelectItem value="3">3 BHK</SelectItem>
                          <SelectItem value="4">4 BHK</SelectItem>
                          <SelectItem value="5+">5+ BHK</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bathrooms">Bathrooms</Label>
                      <Select value={formData.bathrooms} onValueChange={(value) => handleInputChange('bathrooms', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5+">5+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="floors">Number of Floors</Label>
                      <Select value={formData.floors} onValueChange={(value) => handleInputChange('floors', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Ground Floor Only</SelectItem>
                          <SelectItem value="2">Ground + 1 Floor</SelectItem>
                          <SelectItem value="3">Ground + 2 Floors</SelectItem>
                          <SelectItem value="4+">Ground + 3+ Floors</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="preferredStyle">Preferred Architectural Style</Label>
                      <Select value={formData.preferredStyle} onValueChange={(value) => handleInputChange('preferredStyle', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="modern">Modern</SelectItem>
                          <SelectItem value="traditional">Traditional</SelectItem>
                          <SelectItem value="contemporary">Contemporary</SelectItem>
                          <SelectItem value="minimalist">Minimalist</SelectItem>
                          <SelectItem value="colonial">Colonial</SelectItem>
                          <SelectItem value="mediterranean">Mediterranean</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Preferred Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-12-months">6-12 months</SelectItem>
                          <SelectItem value="1-2-years">1-2 years</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequirements">Special Requirements & Notes</Label>
                    <Textarea
                      id="specialRequirements"
                      placeholder="Please describe any special requirements, preferences, or specific features you'd like to include in your custom project..."
                      rows={6}
                      value={formData.specialRequirements}
                      onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Project Discussion Request'}
                    </Button>
                    <p className="text-sm text-construction-grey-medium text-center mt-3">
                      We'll review your project details and contact you within 24 hours to discuss your custom construction project.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomProject;