
import "../style/contact.scss"
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const LondonMap = () => {
  const londonCoordinates = [51.5074, -0.1278]; // London lat/lng

  return (
    <div style={{ height: '300px', width: '100%', padding: '10px' }}>
      <MapContainer center={londonCoordinates} zoom={18} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        />
      </MapContainer>

    </div>
  );
};


