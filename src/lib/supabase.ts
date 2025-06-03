import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables are actual values, not placeholders
const isValidUrl = (url: string) => {
  try {
    // This will throw if the URL is invalid
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

// Check if values are valid and not placeholder text
const hasValidConfig = 
  supabaseUrl && 
  supabaseAnonKey &&
  isValidUrl(supabaseUrl) &&
  !supabaseUrl.includes('your-supabase-url') &&
  !supabaseAnonKey.includes('your-supabase-anon-key');

// Create client only if we have valid configuration
export const supabase = hasValidConfig 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// If not configured, log helpful message
if (!hasValidConfig) {
  console.error(
    'Invalid Supabase configuration. Please update your .env file with valid Supabase URL and anon key. ' +
    'Connect to Supabase from the top-right corner of the editor.'
  );
}

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