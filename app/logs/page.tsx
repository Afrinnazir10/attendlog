import { createClient } from '../../utils/supabase/server'
import Link from 'next/link'

// Next.js automatically makes this a Server Component, so it fetches securely!
export default async function LogsPage() {
  const supabase = await createClient()

  // Fetch all records from your table, newest first
  const { data: logs } = await supabase
    .from('attendance')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 font-sans">
      <div className="w-full max-w-4xl rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-lg ring-1 ring-white/20">
        
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Attendance History
          </h1>
          <Link href="/" className="rounded-lg bg-white/10 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-white/20">
            ← Back to Form
          </Link>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/20 bg-slate-800/50 shadow-inner">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-slate-900/80 text-xs uppercase text-gray-400">
              <tr>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {logs?.map((log) => (
                <tr key={log.id} className="transition-colors hover:bg-white/5">
                  <td className="px-6 py-4">
                    {new Date(log.created_at).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 font-bold text-white">
                    {log.name}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                      log.status === 'Present' ? 'bg-green-500/20 text-green-400 ring-1 ring-green-500/50' :
                      log.status === 'Late' ? 'bg-yellow-500/20 text-yellow-400 ring-1 ring-yellow-500/50' :
                      'bg-red-500/20 text-red-400 ring-1 ring-red-500/50'
                    }`}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {(!logs || logs.length === 0) && (
            <div className="p-8 text-center text-gray-400">No attendance logs found yet.</div>
          )}
        </div>
      </div>
    </div>
  )
}