import { motion } from 'framer-motion'

function Section({ title, children }) {
  return (
    <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-white/80 backdrop-blur rounded-2xl border border-white/50 shadow-sm p-6">
      <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
      <div className="mt-4 text-slate-700 space-y-3">{children}</div>
    </motion.section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-50">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-white/70">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600" />
            <h1 className="text-lg font-semibold text-slate-800">GLOF Early Warning</h1>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#technology" className="text-slate-600 hover:text-slate-900">Style</a>
            <a href="#pages" className="text-slate-600 hover:text-slate-900">Pages</a>
            <a href="#features" className="text-slate-600 hover:text-slate-900">Features</a>
            <a href="#final" className="text-slate-600 hover:text-slate-900">Final</a>
            <a href="/test" className="text-slate-600 hover:text-slate-900">Health</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-sky-600 to-indigo-600 text-white rounded-2xl p-8 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-white/80">Project Title</p>
          <h2 className="mt-1 text-2xl font-semibold">Predictive Early Warning System for Glacial Lake Outburst Floods (GLOFs) using Machine Learning.</h2>
          <p className="mt-3 text-white/90 text-sm">This document outlines the full feature set, pages, and design style to be implemented. Dummy values are acceptable where real-time data is unavailable.</p>
        </motion.div>

        <Section title="Technology Style" id="technology">
          <ul className="list-disc list-inside space-y-1">
            <li>Modern, clean UI</li>
            <li>Blue + white color theme</li>
            <li>Professional dashboard look</li>
            <li>Animated charts</li>
            <li>Interactive map</li>
          </ul>
        </Section>

        <Section title="Pages To Create" id="pages">
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <p className="font-medium text-slate-800">Home Page / Dashboard</p>
              <ul className="list-disc list-inside ml-4">
                <li>Show today's GLOF risk (Low / Medium / High).</li>
                <li>Show mini map with lakes.</li>
                <li>Show weather conditions.</li>
                <li>Show recent warnings.</li>
              </ul>
            </li>
            <li>
              <p className="font-medium text-slate-800">Interactive Map Page</p>
              <ul className="list-disc list-inside ml-4">
                <li>Show world map or Himalayan map.</li>
                <li>Mark all glacial lakes with blue dots; dangerous lakes with red dots.</li>
                <li>On click show: Water level, Temperature, Melting rate, Risk score, Last updated time.</li>
                <li>Use Leaflet.js.</li>
              </ul>
            </li>
            <li>
              <p className="font-medium text-slate-800">Live Monitoring Page</p>
              <ul className="list-disc list-inside ml-4">
                <li>Real-time or dummy live data: Water level, Surface area, Temperature, Rainfall, Snow melt rate, River flow rate.</li>
                <li>Use live cards or animated widgets.</li>
              </ul>
            </li>
            <li>
              <p className="font-medium text-slate-800">ML Prediction Page</p>
              <ul className="list-disc list-inside ml-4">
                <li>Explain simply how ML predicts GLOFs and what inputs are used.</li>
                <li>Model output: Risk Score and Chance of GLOF (%).</li>
                <li>Show Risk Meter (Green → Yellow → Red) and Feature importance.</li>
              </ul>
            </li>
            <li>
              <p className="font-medium text-slate-800">Alerts & Warning Page</p>
              <ul className="list-disc list-inside ml-4">
                <li>Alert types: Early Warning, Urgent Warning, Extreme Danger.</li>
                <li>Allow dummy notifications (SMS/Email) and show sample alerts.</li>
              </ul>
            </li>
            <li>
              <p className="font-medium text-slate-800">Time-Lapse Page</p>
              <ul className="list-disc list-inside ml-4">
                <li>Slider to show before vs after glacier images (shrinking → lake growing).</li>
              </ul>
            </li>
            <li>
              <p className="font-medium text-slate-800">Satellite Image Viewer Page</p>
              <ul className="list-disc list-inside ml-4">
                <li>Sample Sentinel/Landsat images with heatmap of melting (dummy image ok).</li>
                <li>Zoom in/out.</li>
              </ul>
            </li>
            <li>
              <p className="font-medium text-slate-800">Past GLOF Events Page</p>
              <ul className="list-disc list-inside ml-4">
                <li>Table or timeline with Year, Location, Cause, Damage level, Short description.</li>
              </ul>
            </li>
            <li>
              <p className="font-medium text-slate-800">Predictive Analytics Page</p>
              <ul className="list-disc list-inside ml-4">
                <li>Charts using Chart.js: Water level, Temperature, Lake growth, Rainfall trends.</li>
                <li>Show future prediction graph.</li>
              </ul>
            </li>
            <li>
              <p className="font-medium text-slate-800">Community Reporting Page</p>
              <ul className="list-disc list-inside ml-4">
                <li>Form for Photo, Location, Description of changes, Water level rise.</li>
                <li>Show submitted reports in a list.</li>
              </ul>
            </li>
            <li>
              <p className="font-medium text-slate-800">Emergency Contacts Page</p>
              <ul className="list-disc list-inside ml-4">
                <li>Govt contacts with click-to-call: NDRF, SDRF, Disaster offices, Local police.</li>
                <li>Add map of nearby safe zones.</li>
              </ul>
            </li>
            <li>
              <p className="font-medium text-slate-800">Digital Twin Page</p>
              <ul className="list-disc list-inside ml-4">
                <li>Simple virtual lake model: animated lake, growth with temperature, overflow effect.</li>
              </ul>
            </li>
            <li>
              <p className="font-medium text-slate-800">Blockchain Explanation Page</p>
              <ul className="list-disc list-inside ml-4">
                <li>Explain secure, tamper-proof storage; no edits to lake data; benefits for disaster systems.</li>
                <li>Simple flow diagram.</li>
              </ul>
            </li>
            <li>
              <p className="font-medium text-slate-800">Reports Download Page</p>
              <ul className="list-disc list-inside ml-4">
                <li>Downloadable PDF/CSV sample reports: Lake health, Predicted risk, Weather summary.</li>
              </ul>
            </li>
            <li>
              <p className="font-medium text-slate-800">Login Page & Simple User System</p>
              <ul className="list-disc list-inside ml-4">
                <li>Basic login (email + password) and personalized alert settings.</li>
                <li>Let users choose lakes to follow.</li>
              </ul>
            </li>
          </ol>
        </Section>

        <Section title="Additional Features" id="features">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-medium">Lake Health Score:</span> 0–100 scale
              <ul className="list-disc list-inside ml-5">
                <li>0–30 → Safe</li>
                <li>31–60 → Warning</li>
                <li>61–100 → High Risk</li>
              </ul>
            </li>
            <li><span className="font-medium">Multi-Language Support:</span> English, Hindi, Kannada.</li>
            <li><span className="font-medium">Voice Assistant:</span> Commands like “Show dangerous lakes”, “Show today’s risk”.</li>
            <li><span className="font-medium">Modern UI:</span> Clean cards, rounded corners, light animations, clear headings, easy navigation, mobile-friendly, blue/white/grey theme.</li>
          </ul>
        </Section>

        <Section title="Final Requirements" id="final">
          <ul className="list-disc list-inside space-y-1">
            <li>Fully responsive.</li>
            <li>Use dummy sample values where real-time data is not available.</li>
            <li>All pages in separate sections with clear navigation bar.</li>
            <li>Visually attractive for hackathon judges with icons and animations.</li>
            <li>Footer with project details and credits.</li>
            <li>Simple explanations for every feature.</li>
          </ul>
        </Section>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} GLOF Early Warning — Project details and credits.
      </footer>
    </div>
  )
}
