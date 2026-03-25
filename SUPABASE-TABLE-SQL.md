# Supabase Table Creation SQL

Run this in the Supabase SQL Editor (Dashboard → SQL Editor → New Query):

```sql
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  site_id TEXT NOT NULL DEFAULT 'pointoak',
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT,
  form_type TEXT NOT NULL DEFAULT 'consultation',
  status TEXT NOT NULL DEFAULT 'new',
  notify_email TEXT DEFAULT 'info@pointoak.com',
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_form_submissions_site_status ON form_submissions(site_id, status);
CREATE INDEX IF NOT EXISTS idx_form_submissions_created ON form_submissions(created_at DESC);

-- Enable RLS
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (from website forms)
CREATE POLICY "anon_insert_submissions" ON form_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only service role can read/update (admin/notifications)
CREATE POLICY "service_read_submissions" ON form_submissions
  FOR SELECT TO service_role
  USING (true);

CREATE POLICY "service_update_submissions" ON form_submissions
  FOR UPDATE TO service_role
  USING (true);

-- Form configs table (for multi-client use)
CREATE TABLE IF NOT EXISTS form_configs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  site_id TEXT UNIQUE NOT NULL,
  notify_emails TEXT[] NOT NULL DEFAULT '{}',
  form_types TEXT[] NOT NULL DEFAULT ARRAY['consultation'],
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Insert PointOak config
INSERT INTO form_configs (site_id, notify_emails, form_types) 
VALUES ('pointoak', ARRAY['info@pointoak.com'], ARRAY['consultation'])
ON CONFLICT (site_id) DO NOTHING;
```
