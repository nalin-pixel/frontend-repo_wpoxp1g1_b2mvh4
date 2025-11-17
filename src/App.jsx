import { useState } from 'react'
import { motion } from 'framer-motion'

function Stat({ label, value, suffix = '' }) {
  return (
    <div className="bg-white/70 backdrop-blur rounded-lg p-4 shadow-sm border border-white/50">
      <p className="text-xs uppercase tracking-widest text-slate-500">{label}</p>
      <p className="text-2xl font-semibold text-slate-800">
        {value}
        {suffix}
      </p>
    </div>
  )
}

function App() {
  const [form, setForm] = useState({
    lake_area_km2: 2.5,
    slope_deg: 28,
    rainfall_mm_24h: 120,
    temperature_c: 6,
    glacier_melt_index: 0.4,
    distance_to_settlement_km: 12,
    dam_moraine_integrity: 0.7,
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: Number(value) }))
  }

  const predict = async () => {
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${backend}/api/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setResult(data)
    } catch (e) {
      setResult({ error: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-50">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/60 border-b border-white/70">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-sky-600"></div>
            <h1 className="text-lg font-semibold text-slate-800">GLOF Early Warning</h1>
          </div>
          <a href="/test" className="text-sm text-slate-600 hover:text-slate-900">Health</a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white/70 backdrop-blur rounded-2xl border border-white/50 shadow-sm p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-1">Predictive Risk Assessment</h2>
            <p className="text-sm text-slate-600 mb-6">Estimate the likelihood of a Glacial Lake Outburst Flood using recent conditions.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs text-slate-600">Lake area (km²)</span>
                <input type="number" step="0.1" min="0.1" max="500" name="lake_area_km2" value={form.lake_area_km2} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
              </label>
              <label className="block">
                <span className="text-xs text-slate-600">Upstream slope (°)</span>
                <input type="number" step="1" min="0" max="90" name="slope_deg" value={form.slope_deg} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
              </label>
              <label className="block">
                <span className="text-xs text-slate-600">Rainfall last 24h (mm)</span>
                <input type="number" step="1" min="0" max="1000" name="rainfall_mm_24h" value={form.rainfall_mm_24h} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
              </label>
              <label className="block">
                <span className="text-xs text-slate-600">Temperature (°C)</span>
                <input type="number" step="0.1" min="-40" max="50" name="temperature_c" value={form.temperature_c} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
              </label>
              <label className="block">
                <span className="text-xs text-slate-600">Glacier melt index (0-1)</span>
                <input type="number" step="0.01" min="0" max="1" name="glacier_melt_index" value={form.glacier_melt_index} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
              </label>
              <label className="block">
                <span className="text-xs text-slate-600">Distance to settlement (km)</span>
                <input type="number" step="0.1" min="0" max="200" name="distance_to_settlement_km" value={form.distance_to_settlement_km} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs text-slate-600">Moraine dam integrity (0-1)</span>
                <input type="number" step="0.01" min="0" max="1" name="dam_moraine_integrity" value={form.dam_moraine_integrity} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
              </label>
            </div>

            <button onClick={predict} disabled={loading} className="mt-6 inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 disabled:opacity-60 text-white font-medium px-4 py-2 rounded-md">
              {loading ? 'Predicting…' : 'Run Prediction'}
            </button>
          </motion.div>

          {result && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white/80 backdrop-blur rounded-2xl border border-white/50 shadow-sm p-6">
              {result.error ? (
                <p className="text-red-600">{result.error}</p>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-semibold text-slate-800">Risk Result</h3>
                    <span className="text-sm text-slate-600">Score: {result.risk_score}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full ${
                      result.risk_level === 'Low' ? 'bg-emerald-500' :
                      result.risk_level === 'Moderate' ? 'bg-amber-500' :
                      result.risk_level === 'High' ? 'bg-orange-500' : 'bg-red-600'
                    }`} />
                    <p className="text-xl font-semibold text-slate-800">{result.risk_level}</p>
                  </div>
                  <p className="text-slate-700">{result.recommendation}</p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Object.entries(result.contributing_factors).map(([k, v]) => (
                      <Stat key={k} label={k.replaceAll('_', ' ')} value={v} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>

        <aside className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Sample lakes" value={342} />
            <Stat label="Monitored valleys" value={57} />
            <Stat label="Avg. response time" value={3.2} suffix=" min" />
            <Stat label="Alert channels" value={6} />
          </div>

          <div className="bg-gradient-to-br from-sky-600 to-indigo-600 text-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold">What this shows</h3>
            <p className="mt-2 text-sm text-white/90">
              An interactive demo of a predictive early warning tool for Glacial Lake Outburst Floods (GLOFs). It estimates risk using domain-informed features and provides next-step guidance.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-white/90 list-disc list-inside">
              <li>Enter current conditions</li>
              <li>Run a server-side prediction</li>
              <li>View risk level and contributing factors</li>
            </ul>
          </div>
        </aside>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm">
        Built for research and awareness; not for operational use.
      </footer>
    </div>
  )
}

export default App
