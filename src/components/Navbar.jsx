import { Menu, Globe, Bell, Map, Home, Activity } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ lang, setLang }) {
  const nav = [
    { to: "/", label: { en: "Dashboard", hi: "डैशबोर्ड", kn: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್" }, icon: Home },
    { to: "/map", label: { en: "Map", hi: "मानचित्र", kn: "ನಕ್ಷೆ" }, icon: Map },
    { to: "/live", label: { en: "Live", hi: "लाइव", kn: "ಲೈವ್" }, icon: Activity },
    { to: "/alerts", label: { en: "Alerts", hi: "अलर्ट", kn: "ಎಚ್ಚರಿಕೆ" }, icon: Bell },
  ];

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/80 border-b border-white/60">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600" />
          <span className="font-semibold text-slate-800">GLOF Early Warning</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => {
            const Icon = n.icon;
            return (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${
                    isActive ? "bg-sky-50 text-sky-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                <span>{n.label[lang]}</span>
              </NavLink>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-white/80 border border-white/70 rounded-lg px-2 py-1">
            <Globe className="h-4 w-4 text-slate-500" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent outline-none text-sm text-slate-700"
            >
              <option value="en">EN</option>
              <option value="hi">HI</option>
              <option value="kn">KN</option>
            </select>
          </div>
          <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/80 border border-white/70">
            <Menu className="h-4 w-4 text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
