import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const lakes = [
  { id: 1, name: "Imja Tsho", pos: [27.898, 86.934], risk: 72 },
  { id: 2, name: "South Lhonak", pos: [27.64, 88.42], risk: 61 },
  { id: 3, name: "Gurudongmar", pos: [28.03, 88.71], risk: 28 },
];

export default function MapPage() {
  return (
    <div className="h-[70vh] rounded-xl overflow-hidden border">
      <MapContainer center={[27.9, 88]} zoom={7} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {lakes.map(l => (
          <Marker key={l.id} position={l.pos}>
            <Popup>
              <div className="text-sm">
                <p className="font-semibold">{l.name}</p>
                <p>Risk score: {l.risk}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
