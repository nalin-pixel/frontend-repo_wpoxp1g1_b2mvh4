export default function LakeHealthBadge({ score }) {
  const level = score <= 30 ? "safe" : score <= 60 ? "warn" : "risk";
  const cfg = {
    safe: { label: "Safe", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    warn: { label: "Warning", cls: "bg-amber-50 text-amber-700 border-amber-200" },
    risk: { label: "High Risk", cls: "bg-rose-50 text-rose-700 border-rose-200" },
  }[level];
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border ${cfg.cls}`}>
      <span className="h-2.5 w-2.5 rounded-full bg-current"></span>
      <span>Lake Health: {score} — {cfg.label}</span>
    </span>
  );
}
