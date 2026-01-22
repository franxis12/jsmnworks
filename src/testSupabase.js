import { supabase } from "./lib/supabaseClient";

export async function testSupabaseConnection() {
  const { data, error } = await supabase.auth.getSession();
  console.log("SESSION DATA:", data);
  console.log("SESSION ERROR:", error);
}