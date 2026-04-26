import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zylrgodrqjtpxrtnpiwy.supabase.co/rest/v1/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bHJnb2RycWp0cHhydG5waXd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxOTYyMjMsImV4cCI6MjA5Mjc3MjIyM30.SdkwH_clnnfk27sOB5Ig9d3VjU5z4i9FcDSJz43OBWc';

export const supabase = createClient(supabaseUrl, supabaseKey);