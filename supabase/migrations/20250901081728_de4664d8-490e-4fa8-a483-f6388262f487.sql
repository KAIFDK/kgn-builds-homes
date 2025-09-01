-- Fix the function search path security issue
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public;

-- Add admin policies for quote management (optional, for future admin panel)
CREATE POLICY "Admins can view all quotes" 
ON public.quotes 
FOR SELECT 
USING (false); -- No one can select for now, will be updated when admin auth is implemented

CREATE POLICY "Admins can update quotes" 
ON public.quotes 
FOR UPDATE 
USING (false); -- No one can update for now

CREATE POLICY "Admins can delete quotes" 
ON public.quotes 
FOR DELETE 
USING (false); -- No one can delete for now