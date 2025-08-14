"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

export default function MapComponent() {
  return (
    <MapContainer center={[-8.18683261249134, 114.30489599682512]} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-8.18683261249134, 114.30489599682512]} icon={customIcon}>
        <Popup>Jolosutro Service HP - Banyuwangi</Popup>
      </Marker>
    </MapContainer>
  );
}
