import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Capstone Project
        </h1>
        <p className="mt-2 text-slate-400 text-lg">
          React + Vite + TypeScript + Tailwind CSS
        </p>
      </header>

      <main className="bg-slate-800 border border-slate-700 rounded-2xl shadow-xl p-8 max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Interactive State Test
          </p>
          <button
            type="button"
            onClick={() => setCount((c) => c + 1)}
            className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 active:scale-95 transition font-medium shadow-md cursor-pointer"
          >
            Count is: {count}
          </button>
        </div>

        <div className="pt-4 border-t border-slate-700/60 text-xs text-slate-400">
          Monorepo structure initialized: <code className="bg-slate-900 px-2 py-1 rounded text-cyan-300">frontend</code> & <code className="bg-slate-900 px-2 py-1 rounded text-cyan-300">backend</code>
        </div>
      </main>
    </div>
  )
}
