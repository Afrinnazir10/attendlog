'use server'

import { createClient } from '../utils/supabase/server'

export async function logAttendance(formData: FormData) {
  const supabase = await createClient()
  
  const name = formData.get('name') as string
  const status = formData.get('status') as string

  const { error } = await supabase
    .from('attendance')
    .insert([{ name, status }])

  if (error) {
    return { success: false }
  }

  // Tell the page it worked perfectly
  return { success: true } 
}