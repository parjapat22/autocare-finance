import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hllmwjktdhtpxsrueilj.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsbG13amt0ZGh0cHhzcnVlaWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NDUyMTgsImV4cCI6MjA1NTUyMTIxOH0.mPsRQOhyZKPS2HoQuwSY9UmxT6J3zmbh5Sppg3PuqOk";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
