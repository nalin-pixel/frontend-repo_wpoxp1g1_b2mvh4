export default function Live() {
  const metrics = [
    { k: "Water level", v: 342, unit: "cm" },
    { k: "Surface area", v: 126, unit: "ha" },
    { k: "Temperature", v: 7.2, unit: "°C" },
    { k: "Rainfall (24h)", v: 18, unit: "mm" },
    { k: "Snow melt", v: 22, unit: "mm/day" },
    { k: "River flow", v: 145, unit: "m³/s" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {metrics.map((m, i) => (
        <div key={i} className="bg-white/80 backdrop-blur rounded-xl border p-5">
          <p className="text-slate-600 text-sm">{m.k}</p>
          <p className="text-3xl font-semibold text-slate-900 mt-2">{m.v} <span className="text-base text-slate-500">{m.unit}</span></p>
          <div className="mt-3 h-2 rounded-full bg-slate-100">
            <div className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600" style={{ width: `${Math.min(100, (m.v % 100))}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
