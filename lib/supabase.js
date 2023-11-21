import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ftvzigefldvnxvboghhx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0dnppZ2VmbGR2bnh2Ym9naGh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNjg4ODksImV4cCI6MjAxNTY0NDg4OX0.fK5C-ILKWx5bVuj3h_pGla3LD6SojRtbd3GePG-lt1A'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
