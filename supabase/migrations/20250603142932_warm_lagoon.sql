/*
  # Create inquiries table
  
  1. New Tables
    - `inquiries` 
      - `id` (uuid, primary key)
      - `name` (text)
      - `phone` (text)
      - `location` (text)
      - `product` (text)
      - `message` (text)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `inquiries` table
    - Add policy for authenticated users to read all inquiries
    - Add policy to allow anyone to insert inquiries
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  product text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Policy to allow authenticated users to read all inquiries
CREATE POLICY "Allow authenticated users to read all inquiries"
  ON inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy to allow anyone to insert inquiries
CREATE POLICY "Allow anyone to insert inquiries"
  ON inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);