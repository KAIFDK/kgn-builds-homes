import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import { supabase } from '@/integrations/supabase/client';

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.projectType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to database
      const { data, error } = await supabase
        .from('quotes')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            project_type: formData.projectType,
            location: formData.location || null,
            budget: formData.budget || null,
            message: formData.message || null
          }
        ])
        .select();

      if (error) {
        console.error('Error saving quote:', error);
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your quote. Please try again.",
          variant: "destructive"
        });
        return;
      }

      console.log('Quote saved successfully:', data);
      setIsSubmitted(true);
      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you within 24 hours with a detailed quote.",
      });

      // Reset form for next submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        location: '',
        budget: '',
        message: ''
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
                    Your quote request has been submitted successfully. We'll review your requirements and get back to you within 24 hours with a detailed quote.
                  </p>
                  <div className="space-y-4">
                    <p className="text-sm text-construction-grey-medium">
                      Reference: {Date.now()}
                    </p>
                    <div className="flex justify-center">
                      <Button 
                        variant="outline" 
                        onClick={() => setIsSubmitted(false)}
                      >
                        Submit Another Quote
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
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-construction-grey-dark mb-4">
                Get Your Free Quote
              </h1>
              <p className="text-xl text-construction-grey-medium max-w-2xl mx-auto">
                Tell us about your project and we'll provide you with a detailed quote tailored to your needs.
              </p>
            </div>

            {/* Form */}
            <Card className="border-construction-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-construction-grey-dark">Project Details</CardTitle>
                <CardDescription>
                  Please provide as much detail as possible to help us give you an accurate quote.
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
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Construction</SelectItem>
                          <SelectItem value="commercial">Commercial Construction</SelectItem>
                          <SelectItem value="renovation">Renovation & Remodeling</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location">Project Location</Label>
                      <Input
                        id="location"
                        type="text"
                        placeholder="City, State"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Approximate Budget</Label>
                      <Input
                        id="budget"
                        type="text"
                        placeholder="e.g., ₹10-15 Lakhs"
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Requirements</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your project requirements, timeline, and any specific needs..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
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
                       {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                     </Button>
                     <p className="text-sm text-construction-grey-medium text-center mt-3">
                       We'll review your request and get back to you within 24 hours.
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

export default Quote;