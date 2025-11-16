/**
 * Supabase configuration and client initialization
 * Railway provides environment variables directly in production
 * For development, ensure .env file is loaded by the main server entry point
 */
import dotenv from 'dotenv'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

let supabaseClient: SupabaseClient | null = null
let supabaseServiceClient: SupabaseClient | null = null

if (supabaseUrl && supabaseAnonKey) {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
}
if (supabaseUrl && supabaseServiceKey) {
  supabaseServiceClient = createClient(supabaseUrl, supabaseServiceKey)
}

export { supabaseClient, supabaseServiceClient }
export const config = { supabaseUrl, supabaseAnonKey, supabaseServiceKey }