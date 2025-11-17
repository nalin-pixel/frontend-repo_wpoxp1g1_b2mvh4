import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import MapPage from "./pages/Map";
import Live from "./pages/Live";
import Alerts from "./pages/Alerts";
import ML from "./pages/ML";

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-50">
      <Navbar lang={lang} setLang={setLang} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/live" element={<Live />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/ml" element={<ML />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
