-- Create custom_projects table for custom project discussions
CREATE TABLE public.custom_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_location TEXT NOT NULL,
  property_type TEXT,
  plot_size TEXT,
  budget TEXT,
  bedrooms TEXT,
  bathrooms TEXT,
  floors TEXT,
  preferred_style TEXT,
  timeline TEXT,
  special_requirements TEXT,
  has_plot TEXT,
  status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE public.custom_projects ENABLE ROW LEVEL SECURITY;

-- Create policy for anyone to create custom project requests
CREATE POLICY "Anyone can create custom project requests" 
ON public.custom_projects 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view all custom project requests (for now set to false until auth is implemented)
CREATE POLICY "Admins can view all custom project requests" 
ON public.custom_projects 
FOR SELECT 
USING (false);

-- Create policy for admins to update custom project requests (for now set to false until auth is implemented)
CREATE POLICY "Admins can update custom project requests" 
ON public.custom_projects 
FOR UPDATE 
USING (false);

-- Create policy for admins to delete custom project requests (for now set to false until auth is implemented)
CREATE POLICY "Admins can delete custom project requests" 
ON public.custom_projects 
FOR DELETE 
USING (false);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_custom_projects_updated_at
BEFORE UPDATE ON public.custom_projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();