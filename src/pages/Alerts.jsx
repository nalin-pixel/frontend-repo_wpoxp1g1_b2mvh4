export default function Alerts() {
  const items = [
    { id: 1, type: "Urgent Warning", lake: "Imja Tsho", msg: "Rapid rise detected.", time: "10m" },
    { id: 2, type: "Early Warning", lake: "South Lhonak", msg: "Heavy rainfall predicted.", time: "2h" },
    { id: 3, type: "Extreme Danger", lake: "Chorabari", msg: "Overflow risk imminent.", time: "1d" },
  ];

  const color = (t) => t === "Extreme Danger" ? "bg-rose-50 text-rose-700 border-rose-200" : t === "Urgent Warning" ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-sky-50 text-sky-700 border-sky-200";

  return (
    <div className="space-y-3">
      {items.map(a => (
        <div key={a.id} className={`rounded-xl border p-4 ${color(a.type)}`}>
          <div className="flex items-center justify-between">
            <p className="font-semibold">{a.type} — {a.lake}</p>
            <span className="text-sm opacity-70">{a.time}</span>
          </div>
          <p className="text-sm mt-1">{a.msg}</p>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1.5 text-xs rounded-lg bg-black/80 text-white">Send SMS</button>
            <button className="px-3 py-1.5 text-xs rounded-lg bg-black/10">Send Email</button>
          </div>
        </div>
      ))}
    </div>
  );
}
