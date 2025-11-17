import LakeHealthBadge from "../components/LakeHealthBadge";
import { Thermometer, Droplets, AlertCircle } from "lucide-react";

export default function Dashboard() {
  const today = { risk: "Medium", score: 54, weather: { temp: 6, rainfall: 12 } };
  const warnings = [
    { id: 1, lake: "Imja Tsho", level: "Urgent Warning", time: "10m ago" },
    { id: 2, lake: "South Lhonak", level: "Early Warning", time: "2h ago" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-sky-600 to-indigo-600 text-white rounded-2xl p-6">
        <h2 className="text-xl font-semibold">Today's GLOF Risk: {today.risk}</h2>
        <div className="mt-3"><LakeHealthBadge score={today.score} /></div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white/80 backdrop-blur rounded-xl border p-4">
          <div className="flex items-center gap-2 text-slate-700"><Thermometer className="h-4 w-4" /><span>Temperature</span></div>
          <p className="text-2xl font-semibold text-slate-900 mt-2">{today.weather.temp}°C</p>
        </div>
        <div className="bg-white/80 backdrop-blur rounded-xl border p-4">
          <div className="flex items-center gap-2 text-slate-700"><Droplets className="h-4 w-4" /><span>Rainfall</span></div>
          <p className="text-2xl font-semibold text-slate-900 mt-2">{today.weather.rainfall} mm</p>
        </div>
        <div className="bg-white/80 backdrop-blur rounded-xl border p-4">
          <div className="flex items-center gap-2 text-slate-700"><AlertCircle className="h-4 w-4" /><span>Recent Warnings</span></div>
          <ul className="mt-2 text-sm text-slate-700 space-y-1">
            {warnings.map(w => (
              <li key={w.id} className="flex justify-between"><span>{w.lake}</span><span className="text-slate-500">{w.level} · {w.time}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
