// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://aoqlpstgfderlxyvxweu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvcWxwc3RnZmRlcmx4eXZ4d2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwNDk4NDIsImV4cCI6MjA1NTYyNTg0Mn0.w5LKzpqrNJBPBSDFB3RCcV8jTsciZEeXyXe37dg8zMY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);