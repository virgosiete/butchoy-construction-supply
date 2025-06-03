import { createClient } from '@supabase/supabase-js';

// Check if environment variables are defined and provide fallbacks for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Validate required configuration
if (!supabaseUrl) {
  console.error('Missing VITE_SUPABASE_URL environment variable');
}

if (!supabaseAnonKey) {
  console.error('Missing VITE_SUPABASE_ANON_KEY environment variable');
}

// Create the Supabase client with error handling
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types interface
export interface Inquiry {
  id?: number;
  created_at?: string;
  name: string;
  phone: string;
  location: string;
  product: string;
  message?: string;
}