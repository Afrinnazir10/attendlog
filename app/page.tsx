'use client'

import { useState, useRef } from 'react'
import { logAttendance } from './actions'

export default function Home() {
  const [message, setMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleForm(formData: FormData) {
    setMessage('Saving...')
    
    // Send data to the database
    const result = await logAttendance(formData)

    if (result?.success) {
      // Show the success text
      setMessage('✅ Logged Successfully!')
      // Clear the typed text out of the form
      formRef.current?.reset() 
      // Hide the success message after 3 seconds
      setTimeout(() => setMessage(''), 3000) 
    } else {
      setMessage('❌ Error saving log.')
    }
  }

  return (
    // Here is your creative gradient background!
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 font-sans">
      
      {/* Here is the modern Frosted Glass card */}
      <div className="w-full max-w-md rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-lg ring-1 ring-white/20">
        
        <h1 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          Daily Attendance
        </h1>
        
        {/* The Success Message Box */}
        {message && (
          <div className="mb-6 rounded-lg bg-green-500/20 p-3 text-center text-sm font-bold text-green-300 ring-1 ring-green-500/50 transition-all">
            {message}
          </div>
        )}
        
        <form ref={formRef} action={handleForm} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Student / Employee Name
            </label>
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="e.g. Jane Doe"
              className="w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400" 
            />
          </div>
          
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Status
            </label>
            <select 
              name="status" 
              required
              className="w-full rounded-lg border border-white/20 bg-slate-800 p-3 text-white focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
            >
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="Late">Late</option>
            </select>
          </div>
          
          <button 
            type="submit" 
            className="mt-6 w-full rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg transition-all hover:from-teal-400 hover:to-blue-500 hover:shadow-teal-500/25"
          >
            Submit Log
          </button>
        </form>
        {/* Put this right under the </form> tag! */}
        <div className="mt-6 text-center">
          <a href="/logs" className="text-sm font-semibold text-teal-400 transition-colors hover:text-teal-300">
            View Attendance Logs →
          </a>
        </div>
      </div>
    </div>
  )
}