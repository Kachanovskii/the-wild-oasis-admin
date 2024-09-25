import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lrhoeczqemcvqktffdwi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyaG9lY3pxZW1jdnFrdGZmZHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4Mzk2MjQsImV4cCI6MjAzNzQxNTYyNH0.uLaIZFFMSg3pLb1tmoEGD5PtQdcL_9djYlFeaR2CjZo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
