import { supabase } from "../lib/supabaseClient";

export async function register(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  return { data, error };
}