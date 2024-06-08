
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://enotwipoiaqnmdmgovey.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVub3R3aXBvaWFxbm1kbWdvdmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4NTY0MDEsImV4cCI6MjAzMzQzMjQwMX0.68YaiUu3Iqwe9O6D_V7yuY4sijaWYQ8YEKzBJN1OMxM'
export const supabase = createClient(supabaseUrl, supabaseKey)