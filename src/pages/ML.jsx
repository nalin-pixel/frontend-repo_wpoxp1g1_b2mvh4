import { useState } from "react";

export default function ML() {
  const [form, setForm] = useState({
    water_level: 300,
    temperature: 6,
    rainfall: 12,
    melt_rate: 20,
    lake_area: 120,
    slope: 18,
  });
  const [res, setRes] = useState(null);

  const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

  const submit = async (e) => {
    e.preventDefault();
    const r = await fetch(`${baseUrl}/api/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await r.json();
    setRes(data);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <form onSubmit={submit} className="space-y-3 bg-white/80 rounded-xl border p-4">
        {Object.entries(form).map(([k, v]) => (
          <div key={k}>
            <label className="text-sm text-slate-600">{k.replaceAll("_"," ")}</label>
            <input
              type="number"
              step="any"
              value={v}
              onChange={(e) => setForm({ ...form, [k]: Number(e.target.value) })}
              className="mt-1 w-full border rounded-lg px-3 py-2"
            />
          </div>
        ))}
        <button className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-lg py-2">Predict</button>
      </form>

      <div className="bg-white/80 rounded-xl border p-4">
        {!res ? (
          <p className="text-slate-600">Fill the form and run prediction.</p>
        ) : (
          <div className="space-y-2">
            <p className="text-slate-800 font-semibold">Risk Score: {res.risk_score}</p>
            <p className="text-slate-700">Probability: {(res.probability*100).toFixed(1)}%</p>
            <p className="text-slate-700">Level: {res.level}</p>
          </div>
        )}
      </div>
    </div>
  );
}
