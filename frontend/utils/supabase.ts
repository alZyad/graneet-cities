import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qlxrwsdyvgmramsyucnz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFseHJ3c2R5dmdtcmFtc3l1Y256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU3NTcyMTcsImV4cCI6MjAwMTMzMzIxN30.QqOEgQYRTPeqbxPI48JD6PFcYF6tMJk6Lnj2eM_Ay7Y";
console.log({ supabaseKey });

export const supabase = createClient(supabaseUrl, supabaseKey);
